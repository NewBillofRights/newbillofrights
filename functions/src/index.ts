import { onRequest } from 'firebase-functions/v2/https';
import * as logger from 'firebase-functions/logger';
import { initializeApp } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import { z } from 'zod';
import { createHash } from 'node:crypto';

initializeApp();
const db = getFirestore();

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

const submissionSchema = z.discriminatedUnion('type', [
  mailingListSchema,
  seedDonorSchema,
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
  { region: 'us-central1', maxInstances: 5 },
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
    } else {
      await db.collection('seedDonorInterest').add({
        name: data.name,
        email: data.email,
        amount: data.amount ?? null,
        note: data.note ?? null,
        source: data.source ?? null,
        createdAt: FieldValue.serverTimestamp(),
      });
      // TODO(D3): notify contact@newbillofrights.net via Workspace SMTP once
      // an app password is provisioned; until then submissions are read in
      // the Firebase console.
      logger.info('seed donor interest received');
    }

    if (wantsRedirect) {
      res.redirect(303, safeRedirect(data.redirect));
    } else {
      res.json({ ok: true });
    }
  }
);
