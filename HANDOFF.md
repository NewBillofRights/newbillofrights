# Handoff — New Bill of Rights

*Kept short on purpose. State, rules, queue, open decisions. Session journals live in git and in [HANDOFF_ARCHIVE.md](HANDOFF_ARCHIVE.md); don't append journals here — replace what's stale.*

## State (as of 2026-08-18)

- **Live at https://newbillofrights.net** (Firebase Hosting, `newbillofrights-prod`), **noindexed** (`X-Robots-Tag` in `firebase.json` + `<meta name="robots">` in `site/src/layouts/Base.astro`). Last prod deploy 2026-08-18 (`/tmp/newbillofrights-deploys/`). Repo: github.com/NewBillofRights/newbillofrights (private; `main` is PR-protected — push a branch and open a PR).
- **9 proposed amendments** (Article 9 = Abolition of the Punishment Exception, 4 sections incl. a 2-year effective date). **Adopted-language articles (2026-08-19):** Article 1 §§1–3 = American Promise's For Our Freedom Amendment (website version) + our §§4–6; Article 2 §§1–3 = U.S. Term Limits' amendment verbatim (3 House / 2 Senate) + judicial §§4–5 + anti-evasion §6. Source orgs credited on both pages. Canonical draft text: `research/PROPOSED_AMENDMENTS.md`, mirrored verbatim into each page's `article-text` div.
- **Three buckets** — proposed / candidate / rejected — at both levels (categories and clause variants), all in `site/src/content/data/registry.json` (51 entries; human index `research/REGISTRY.md`, re-synced 2026-08-19). It drives `/candidates`, `/candidates/polling-questions` (the survey spec), `/rejected`, and the `LeftOut` lists on amendment pages. 23 candidate entries (incl. `privacy-data-protection`, the private-sector rulebook clause with drafted poll question, registered 2026-08-19), 16 rejected. Old `/evidence/*` URLs 301 to the new ones.
- **Read status:** 17 pages still carry `status: draft` (Article 9, Term Limits, rejected statehood/filibuster/expand-house, and 12 candidate pages). The flag renders nothing; it marks what Michael has not read. Michael chose (2026-08-18) to deploy without reading first — flip to `reviewed` as he reads.
- `node scripts/check-site.mjs` → 698 footnotes, ALL PASS; build 49 pages.

## Rules (the ones that get broken)

- **Read first:** research/MISSION.md · research/SELECTION_METHOD.md · COPY_VOICE_GUIDE.md · research/CATEGORIES.md (decisions block) · research/REGISTRY.md.
- **Draft text is never edited in a copy pass** — only in PROPOSED_AMENDMENTS.md with a dated revision note, then mirrored.
- **Sourcing:** every claim footnoted; every URL must exist in the research corpus (never invent one). Footnotes cite, never narrate a correction.
- **Corrections are applied in place** anywhere in the corpus with one dated changelog line per file touched (rule since 2026-08-18). "Review Additions" only for substantive additions.
- **Gemini Pro reviews every piece of final public copy** (`scripts/gemini-review.sh`; system prompts in `scripts/prompts/`) — and **every Gemini factual claim is web-verified before it is applied**; it is often wrong.
- **Fan-out with parallel subagents** (one per doc; prompt files in `scripts/prompts/`; require JSON returns). Firecrawl is allowed for 403 hosts.
- **Scrape cache (2026-08-19):** every scraped/fetched source page is saved raw to `research/cache/pages/` (gitignored) and logged in `research/cache/index.jsonl` (committed) — grep the index before fetching; see `research/cache/README.md`. Cache hit ≠ verification for time-sensitive claims.
- **Deploy:** `scripts/deploy.sh prod` (logged; may need `firebase login --reauth`), then curl the live URLs. Run check-site + build first.
- Voice: COPY_VOICE_GUIDE.md. Every poll number carries party split + pollster + year. Card blurbs/ledes are Michael's (`problemSummary`/`principleSummary`, 15–25 words).

## Queue

1. **Path-back audit awaiting Michael's read (2026-08-19):** `research/rejected/PATHBACK_AUDIT_2026-08-19.md` — all 16 rejected entries checked against their reopening procedures under his re-litigation rule. Decisions queued: forced-divestment (sell-or-blind-trust read 86.6 R / 88.3 D, PPC 2023, verified firsthand — reopen, or commission the sale-only head-to-head first?); write a senior-officials pathBack for civil-service coverage; add the right-to-records question to the survey spec; per-memo Review Additions deferred until his read.
2. **Org-landscape pass DONE 2026-08-19** — `research/orgs/` (9 per-amendment + cross-cutting memos + README digest; scrape cache live in `research/cache/`). Bottom line: adopt-100% fails everywhere (even American Promise and USTL); keep drafts, borrow named clauses; declare the congressional route; 501(h) at formation, c3/c4 pair. **Open:** Michael's read; apply the queued corpus corrections in the README (§Corrections) under the in-place rule; recheck KY SB 10 after Nov 3 2026.
3. **Commissioned polling:** `/candidates/polling-questions` is the spec. Missing: drafted questions for the four Article 9 held-back clauses (registry `pollQuestionNote`); a named-age poll (age limits, 70/75/80); a forward-looking appointment-default poll; the Article 9 compulsion sentence as a split-sample arm.
4. **Salon outreach:** `research/SALON_OUTREACH_PLAN.md` + `research/SALON_OUTREACH_TARGETS.md` (committed 2026-08-18, **unread by Michael**). Next: his read; host-committee recruitment; the one-pager and privacy brief (Gemini-reviewed before use); the RSVP self-placement question. No venue research.
5. **Firecrawl retry queue** — `research/candidates/FIRECRAWL_RETRY_QUEUE.md`; credits reset ~2026-08-20.
6. **Launch gate (E0):** remove noindex in both places only when Michael says so. Before that: his read of the draft pages; flip the GitHub repo public if wanted.
7. Optional: 301 `/rejected/self-pardon-ban` → `/candidates/self-pardon-ban` (page moved buckets 2026-08-18); build-time assertion that every registry `page` resolves to an MDX file; a scorecard page; restore length-cut items on the agency-independence candidate page (~850 words vs the 700–1,100 band); PARDON_RESEARCH.md's opening paragraph still reflects the 2024 reading (its Review Additions say why).
8. After the November 2026 election: log the abortion ballot measures (Idaho, Missouri, Nevada, Virginia) in the ABORTION memo.

## Founder decisions on record (re-litigable only via each record's pathBack procedure — Michael's rule, 2026-08-19; details in CATEGORIES.md)

Adopt American Promise's FOFA (website version) as Article 1 §§1–3 and USTL's amendment as Article 2 §§1–3, both credited on the pages · congressional-proposal route, not a convention · adopting text ≠ joining campaigns · 501(h) at formation; c3/c4 pair on the American Promise model · Reject DC/PR statehood, filibuster reform, House expansion · fold judicial retirement age and the appointment-default clause into Term Limits · accept Article 9 with the compulsion sentence kept · hold-and-poll every other candidate · candidate-page band 700–1,100 words · self-pardon ban reopened as a candidate clause under Pardon Reform (YouGov May 2026: 72 / 61 R / 85 D) · footnotes cite, never narrate · charts label each proposal's floor, no threshold line · noindex stays until he says otherwise · Plausible for analytics · logo B (monogram seal).

## Infrastructure notes

- Firebase project sits under the newbillofrights.net GCP org; CLI is authenticated as the founder's other Google account. gcloud at `/opt/homebrew/share/google-cloud-sdk/bin/gcloud`.
- Seed-donor/volunteer form notifications: `functions/src/index.ts` (nodemailer via smtp.gmail.com; `SMTP_APP_PASSWORD` in Secret Manager) — verified end to end 2026-08-18.
- Analytics: Plausible in `Base.astro`, production builds only. contact@newbillofrights.net alias works.
