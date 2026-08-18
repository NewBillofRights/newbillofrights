"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.submitForm = void 0;
const https_1 = require("firebase-functions/v2/https");
const params_1 = require("firebase-functions/params");
const logger = __importStar(require("firebase-functions/logger"));
const nodemailer_1 = __importDefault(require("nodemailer"));
const app_1 = require("firebase-admin/app");
const firestore_1 = require("firebase-admin/firestore");
const zod_1 = require("zod");
const node_crypto_1 = require("node:crypto");
(0, app_1.initializeApp)();
const db = (0, firestore_1.getFirestore)();
// Seed-donor notifications go out through Google Workspace SMTP. The app
// password lives in Secret Manager (`firebase functions:secrets:set
// SMTP_APP_PASSWORD`); the sending account and recipient are plain config.
const SMTP_APP_PASSWORD = (0, params_1.defineSecret)('SMTP_APP_PASSWORD');
const SMTP_USER = process.env.SMTP_USER ?? 'michael@newbillofrights.net';
const NOTIFY_TO = process.env.NOTIFY_TO ?? 'contact@newbillofrights.net';
async function notifySeedDonor(data) {
    // Google displays app passwords as four groups with spaces; strip anything
    // that isn't part of the 16-character code (spaces, stray newlines).
    const pass = (SMTP_APP_PASSWORD.value() ?? '').replace(/\s+/g, '');
    if (!pass) {
        logger.warn('SMTP_APP_PASSWORD not set; skipping seed-donor notification');
        return;
    }
    const transport = nodemailer_1.default.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: { user: SMTP_USER, pass },
    });
    const amount = data.amount != null ? `$${Number(data.amount).toLocaleString('en-US')}` : '(not given)';
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
const rateBuckets = new Map();
const baseFields = {
    email: zod_1.z.string().trim().toLowerCase().email().max(254),
    source: zod_1.z.string().max(200).optional(),
    // spam controls
    website: zod_1.z.string().max(200).optional(), // honeypot — humans never fill this
    startedAt: zod_1.z.coerce.number().optional(), // form render timestamp (ms)
    // native-post fallback: relative path to redirect to on success
    redirect: zod_1.z.string().max(200).optional(),
};
const mailingListSchema = zod_1.z.object({
    type: zod_1.z.literal('mailing-list'),
    ...baseFields,
});
const seedDonorSchema = zod_1.z.object({
    type: zod_1.z.literal('seed-donor'),
    name: zod_1.z.string().trim().min(1).max(200),
    amount: zod_1.z.coerce.number().min(0).max(100_000_000).optional(),
    note: zod_1.z.string().trim().max(5000).optional(),
    ...baseFields,
});
const VOLUNTEER_AREAS = [
    'research',
    'analytics',
    'polling',
    'salons',
    'fundraising',
];
// Native form posts send a checked checkbox group as either a single string
// or an array; fetch submissions always send an array. Normalize to an array.
const areasField = zod_1.z.preprocess((v) => (v === undefined || v === '' ? [] : Array.isArray(v) ? v : [v]), zod_1.z.array(zod_1.z.enum(VOLUNTEER_AREAS)).max(VOLUNTEER_AREAS.length));
const volunteerSchema = zod_1.z.object({
    type: zod_1.z.literal('volunteer'),
    name: zod_1.z.string().trim().min(1).max(200),
    location: zod_1.z.string().trim().max(200).optional(),
    areas: areasField,
    howYouCanHelp: zod_1.z.string().trim().min(1).max(5000),
    whyTheMission: zod_1.z.string().trim().min(1).max(5000),
    ...baseFields,
});
const submissionSchema = zod_1.z.discriminatedUnion('type', [
    mailingListSchema,
    seedDonorSchema,
    volunteerSchema,
]);
function emailDocId(email) {
    return (0, node_crypto_1.createHash)('sha256').update(email).digest('hex');
}
function isRateLimited(ip) {
    const now = Date.now();
    const bucket = (rateBuckets.get(ip) ?? []).filter((t) => now - t < 60_000);
    bucket.push(now);
    rateBuckets.set(ip, bucket);
    return bucket.length > RATE_LIMIT;
}
/** Only same-site relative paths may be redirect targets. */
function safeRedirect(path) {
    if (path && path.startsWith('/') && !path.startsWith('//'))
        return path;
    return '/get-involved?submitted=1';
}
exports.submitForm = (0, https_1.onRequest)({ region: 'us-central1', maxInstances: 5, secrets: [SMTP_APP_PASSWORD] }, async (req, res) => {
    if (req.method !== 'POST') {
        res.status(405).json({ error: 'method not allowed' });
        return;
    }
    const parsed = submissionSchema.safeParse(req.body);
    const wantsRedirect = typeof req.body?.redirect === 'string' &&
        !(req.headers.accept ?? '').includes('application/json');
    if (!parsed.success) {
        logger.warn('rejected submission', { issues: parsed.error.issues });
        if (wantsRedirect) {
            res.redirect(303, '/get-involved?submitted=error');
        }
        else {
            res.status(400).json({ error: 'invalid submission' });
        }
        return;
    }
    const data = parsed.data;
    const ip = req.ip ?? 'unknown';
    // Spam controls: honeypot filled, suspiciously fast fill, or rate limit.
    // All three pretend success so bots learn nothing.
    const tooFast = data.startedAt !== undefined && Date.now() - data.startedAt < MIN_FILL_MS;
    if (data.website || tooFast || isRateLimited(ip)) {
        logger.info('dropped submission', {
            honeypot: Boolean(data.website),
            tooFast,
            type: data.type,
        });
    }
    else if (data.type === 'mailing-list') {
        await db
            .collection('mailingList')
            .doc(emailDocId(data.email))
            .set({
            email: data.email,
            source: data.source ?? null,
            createdAt: firestore_1.FieldValue.serverTimestamp(),
        }, { merge: true });
        logger.info('mailing list signup stored');
    }
    else if (data.type === 'volunteer') {
        await db.collection('volunteerInterest').add({
            name: data.name,
            email: data.email,
            location: data.location || null,
            areas: data.areas,
            howYouCanHelp: data.howYouCanHelp,
            whyTheMission: data.whyTheMission,
            source: data.source ?? null,
            createdAt: firestore_1.FieldValue.serverTimestamp(),
        });
        logger.info('volunteer interest received', { areas: data.areas });
    }
    else {
        await db.collection('seedDonorInterest').add({
            name: data.name,
            email: data.email,
            amount: data.amount ?? null,
            note: data.note ?? null,
            source: data.source ?? null,
            createdAt: firestore_1.FieldValue.serverTimestamp(),
        });
        logger.info('seed donor interest received');
        // Notification failures must never fail the submission itself.
        try {
            await notifySeedDonor(data);
        }
        catch (err) {
            logger.error('seed donor notification failed', { err: String(err) });
        }
    }
    if (wantsRedirect) {
        res.redirect(303, safeRedirect(data.redirect));
    }
    else {
        res.json({ ok: true });
    }
});
//# sourceMappingURL=index.js.map