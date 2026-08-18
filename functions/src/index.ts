import { onRequest } from 'firebase-functions/v2/https';
import { defineSecret } from 'firebase-functions/params';
import * as logger from 'firebase-functions/logger';
import nodemailer from 'nodemailer';
import { initializeApp } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import { z } from 'zod';
import { createHash } from 'node:crypto';

initializeApp();
const db = getFirestore();

// Seed-donor notifications go out through Google Workspace SMTP. The app
// password lives in Secret Manager (`firebase functions:secrets:set
// SMTP_APP_PASSWORD`); the sending account and recipient are plain config.
const SMTP_APP_PASSWORD = defineSecret('SMTP_APP_PASSWORD');
const SMTP_USER = process.env.SMTP_USER ?? 'michael@newbillofrights.net';
const NOTIFY_TO = process.env.NOTIFY_TO ?? 'contact@newbillofrights.net';

async function notifySeedDonor(data: {
  name: string;
  email: string;
  amount?: number | null;
  note?: string | null;
  source?: string | null;
}): Promise<void> {
  const pass = SMTP_APP_PASSWORD.value();
  if (!pass) {
    logger.warn('SMTP_APP_PASSWORD not set; skipping seed-donor notification');
    return;
  }
  const transport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: { user: SMTP_USER, pass },
  });
  const amount =
    data.amount != null ? `$${Number(data.amount).toLocaleString('en-US')}` : '(not given)';
  await transport.sendMail({
    from: `"New Bill of Rights" <${SMTP_USER}>`,
    to: NOTIFY_TO,
    replyTo: data.email,
    subject: `Founding-donor interest: ${data.name} — ${amount}`,
    text: [
      `A founding-donor interest form was submitted on newbillofrights.net.`,
      ``,
      `Name:    ${data.name}`,
      `Email:   ${data.email}`,
      `Amount:  ${amount}`,
      `Source:  ${data.source ?? '(none)'}`,
      ``,
      `Note:`,
      data.note?.trim() || '(none)',
      ``,
      `Reply to this message to reply to the donor. The submission is also in Firestore (seedDonorInterest).`,
    ].join('\n'),
  });
  logger.info('seed donor notification sent');
}

const MIN_FILL_MS = 3000;
const RATE_LIMIT = 5; // submissions per IP per minute (per instance, best-effort)
const rateBuckets = new Map<string, number[]>();

const baseFields = {
  email: z.string().trim().toLowerCase().email().max(254),
  source: z.string().max(200).optional(),
  // spam controls
  website: z.string().max(200).optional(), // honeypot — humans never fill this
  startedAt: z.coerce.number().optional(), // form render timestamp (ms)
  // native-post fallback: relative path to redirect to on success
  redirect: z.string().max(200).optional(),
};

const mailingListSchema = z.object({
  type: z.literal('mailing-list'),
  ...baseFields,
});

const seedDonorSchema = z.object({
  type: z.literal('seed-donor'),
  name: z.string().trim().min(1).max(200),
  amount: z.coerce.number().min(0).max(100_000_000).optional(),
  note: z.string().trim().max(5000).optional(),
  ...baseFields,
});

const VOLUNTEER_AREAS = [
  'research',
  'analytics',
  'polling',
  'salons',
  'fundraising',
] as const;

// Native form posts send a checked checkbox group as either a single string
// or an array; fetch submissions always send an array. Normalize to an array.
const areasField = z.preprocess(
  (v) => (v === undefined || v === '' ? [] : Array.isArray(v) ? v : [v]),
  z.array(z.enum(VOLUNTEER_AREAS)).max(VOLUNTEER_AREAS.length)
);

const volunteerSchema = z.object({
  type: z.literal('volunteer'),
  name: z.string().trim().min(1).max(200),
  location: z.string().trim().max(200).optional(),
  areas: areasField,
  howYouCanHelp: z.string().trim().min(1).max(5000),
  whyTheMission: z.string().trim().min(1).max(5000),
  ...baseFields,
});

const submissionSchema = z.discriminatedUnion('type', [
  mailingListSchema,
  seedDonorSchema,
  volunteerSchema,
]);

function emailDocId(email: string): string {
  return createHash('sha256').update(email).digest('hex');
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const bucket = (rateBuckets.get(ip) ?? []).filter((t) => now - t < 60_000);
  bucket.push(now);
  rateBuckets.set(ip, bucket);
  return bucket.length > RATE_LIMIT;
}

/** Only same-site relative paths may be redirect targets. */
function safeRedirect(path: string | undefined): string {
  if (path && path.startsWith('/') && !path.startsWith('//')) return path;
  return '/get-involved?submitted=1';
}

export const submitForm = onRequest(
  { region: 'us-central1', maxInstances: 5, secrets: [SMTP_APP_PASSWORD] },
  async (req, res) => {
    if (req.method !== 'POST') {
      res.status(405).json({ error: 'method not allowed' });
      return;
    }

    const parsed = submissionSchema.safeParse(req.body);
    const wantsRedirect =
      typeof req.body?.redirect === 'string' &&
      !(req.headers.accept ?? '').includes('application/json');

    if (!parsed.success) {
      logger.warn('rejected submission', { issues: parsed.error.issues });
      if (wantsRedirect) {
        res.redirect(303, '/get-involved?submitted=error');
      } else {
        res.status(400).json({ error: 'invalid submission' });
      }
      return;
    }

    const data = parsed.data;
    const ip = req.ip ?? 'unknown';

    // Spam controls: honeypot filled, suspiciously fast fill, or rate limit.
    // All three pretend success so bots learn nothing.
    const tooFast =
      data.startedAt !== undefined && Date.now() - data.startedAt < MIN_FILL_MS;
    if (data.website || tooFast || isRateLimited(ip)) {
      logger.info('dropped submission', {
        honeypot: Boolean(data.website),
        tooFast,
        type: data.type,
      });
    } else if (data.type === 'mailing-list') {
      await db
        .collection('mailingList')
        .doc(emailDocId(data.email))
        .set(
          {
            email: data.email,
            source: data.source ?? null,
            createdAt: FieldValue.serverTimestamp(),
          },
          { merge: true }
        );
      logger.info('mailing list signup stored');
    } else if (data.type === 'volunteer') {
      await db.collection('volunteerInterest').add({
        name: data.name,
        email: data.email,
        location: data.location || null,
        areas: data.areas,
        howYouCanHelp: data.howYouCanHelp,
        whyTheMission: data.whyTheMission,
        source: data.source ?? null,
        createdAt: FieldValue.serverTimestamp(),
      });
      logger.info('volunteer interest received', { areas: data.areas });
    } else {
      await db.collection('seedDonorInterest').add({
        name: data.name,
        email: data.email,
        amount: data.amount ?? null,
        note: data.note ?? null,
        source: data.source ?? null,
        createdAt: FieldValue.serverTimestamp(),
      });
      logger.info('seed donor interest received');
      // Notification failures must never fail the submission itself.
      try {
        await notifySeedDonor(data);
      } catch (err) {
        logger.error('seed donor notification failed', { err: String(err) });
      }
    }

    if (wantsRedirect) {
      res.redirect(303, safeRedirect(data.redirect));
    } else {
      res.json({ ok: true });
    }
  }
);
