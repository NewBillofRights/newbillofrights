# Handoff — Phase 2 + Rejected-Categories Substantiation

*Written 2026-08-17 at the end of the site-build conversation; **updated 2026-08-17 (later session) after Task 0 and Phase 2A/2B/2C were built.** Sections 4–7 below are the original specs and are kept for the record; §1a records what was done and what is open.*

## 1a. Status after the 2026-08-17 execution session

**Done (all pending Michael's manual review; every page still `status: draft`):**

- **Task 0A — research.** Ten memos in [research/rejected/](research/rejected/) (`<SLUG>_REJECTED.md`, ~2,000–2,900 words each, one template: proposal · evidence · gate result · framings tested · path back · sources). Every figure was web-verified by the drafting agent; the set was then reviewed by Gemini (`gemini-3.1-pro-preview`) and every reviewer note was verified on the web before anything was applied — verified additions/corrections sit in each memo's `## Review Additions (2026-08-17)`; unverified reviewer claims were dropped (e.g., its H.J.Res. 2 (2011) "correction" was wrong). Linked from research/README.md and CATEGORIES.md.
- **Task 0B — website.** `rejected` is now an MDX content collection ([site/src/content/rejected/](site/src/content/rejected/), schema in `content.config.ts`: title/order/rejectedOn/failedTest/summary/memo/status), with an index at `/evidence/rejected` (framing kept; one line per category naming the failed test) and a subpage per category at `/evidence/rejected/<slug>` (fixed structure: The proposal · The evidence · The test it failed · Framings we tested · The path back; `FullSpectrumChart` of the decisive number where one exists; GFM footnotes; every URL comes from the memo). `scripts/check-site.mjs` now checks the rejected pages (footnotes + URL provenance + banned words) and reads `research/rejected/*.md` as part of the corpus. Page conventions are recorded in COPY_VOICE_GUIDE.md.
- **Phase 2A — annotations.** `site/src/components/Note.astro` (`<details class="annotation">`, no JS); one `<Note>` after each of the 35 `**Section N.**` paragraphs, drafted from the memos' trap notes; Gemini feedback round run and 10 high-confidence accuracy/clarity fixes applied. Draft text unchanged (integrity check passes).
- **Phase 2B — polling page.** `/evidence/polling` is charts grouped by amendment (order = amendment order, then `pollingKeys` order) with the sortable table below (new Floor column). `FullSpectrumChart` no longer draws a threshold line; it labels each proposal's floor ("bipartisan floor · 71% (Republicans)" = lower of R/D) — global change (home, amendment pages, styleguide, polling, rejected pages).
- **Phase 2C — share images.** Build-time OG PNGs via `satori` + `@resvg/resvg-js` (`site/src/lib/og.ts`, fonts in `site/src/og/fonts/`, endpoints in `site/src/pages/og/`): one per amendment (`/og/amendments/<slug>.png`), per rejected category (`/og/rejected/<slug>.png`), per static page (list in `site/src/lib/ogPages.ts`), and `/og/default.png`; wired in `Base.astro` (`og:image`, `twitter:card`, `og:url`).
- **Corpus corrections found in the pass** (founder to apply; existing text untouched): appended to POLLING_RESEARCH.md as `## Review Additions (2026-08-17, rejected-categories pass)`. The most consequential: the 82% D / 43% R self-pardon figure is **YouGov Aug 15–19, 2024** (81/43/67), not Economist/YouGov Dec 2025 — the site's pardon page was corrected; CATEGORIES.md, PARDON_RESEARCH.md, SELECTION_METHOD.md, and AMENDMENT_IDEAS.md still carry the old attribution.
- Prompt files used for the agent runs are in [scripts/prompts/](scripts/prompts/) (templates: `rejected-memo-prompt.md`, `rejected-page-prompt.md`, `annotate-prompt.md`, `rejected-verify-prompt.md`).

**Open / for Michael:**

- Manual read of the ten rejected pages (nonpartisan discipline is the thing to check — abortion, voting rights, Electoral College especially), the 35 annotations, the polling page, and the share images; then flip `status`.
- Deploy: the production deploy was blocked by the session's permission classifier; a preview-channel deploy was used to verify. Run `scripts/deploy.sh prod` to publish (log lands in `/tmp/newbillofrights-deploys/`), then verify with the `--resolve` curl.
- Apply the flagged corpus corrections listed in POLLING_RESEARCH.md (self-pardon attribution in four docs; QI range 28–46%; balanced-budget pollster dates/splits; caution-list photo-ID split).
- Log the November 2026 abortion ballot measures (Idaho, Missouri, Nevada, Virginia) after the election (ABORTION memo).

## 0. Read first (in this order)

1. [research/MISSION.md](research/MISSION.md) — the mission and the full-spectrum test.
2. [research/SELECTION_METHOD.md](research/SELECTION_METHOD.md) — how categories are accepted/held/rejected; the evidence gate, failure modes, non-polling tests, traps catalog. **This is the framework for the rejected-categories task.**
3. [COPY_VOICE_GUIDE.md](COPY_VOICE_GUIDE.md) — hard rules for all public copy.
4. [WEBSITE_OUTLINE.md](WEBSITE_OUTLINE.md) — sitemap, architecture (§9), build plan (§10), decisions (§8).

## 1. Where things stand

- **Site is live at https://newbillofrights.net** (Firebase Hosting, project `newbillofrights-prod`, Blaze plan), **noindexed** (`X-Robots-Tag` header in `firebase.json` + `<meta name="robots">` in `site/src/layouts/Base.astro`; removing both is launch step E0). `www` redirects to apex. Forms (mailing list, founding-donor interest, volunteer interest — added 2026-08-17 at `/get-involved/volunteer`, collection `volunteerInterest`) work end-to-end via Cloud Function `submitForm` → Firestore.
- **All Phase 1 copy is written, sourced, and twice voice-reviewed**: 8 amendment pages (196 footnotes to primary sources), Mission, Home (text in [HOME.md](HOME.md)), About (founder bio), FAQ, salons. Every page still carries `status: draft` in frontmatter pending Michael's manual read.
- **Research corpus** (`research/`): 8 category memos + polling compendium, each with a `## Review Additions (2026-08-17)` section of web-verified additions; report at [research/RESEARCH_REVIEW_2026-08-17.md](research/RESEARCH_REVIEW_2026-08-17.md). Canonical draft text: [research/PROPOSED_AMENDMENTS.md](research/PROPOSED_AMENDMENTS.md) (revised 2026-08-17: CF Section 5 foreign money; Redistricting Section 2 state-court clause).
- Git: everything committed on `main`; last commit of the build conversation is the one adding this file.

## 2. How this repo works (conventions you must keep)

- **Deploy:** `scripts/deploy.sh prod` (or `preview`) — builds `site/` and deploys with a full persistent log under `/tmp/newbillofrights-deploys/`. Firebase CLI auth expires every few days; if a deploy fails with an auth error, ask Michael to run `firebase login --reauth`. Always verify a deploy by curling `https://newbillofrights.net/<path>` with `--resolve newbillofrights.net:443:199.36.158.100` (local DNS caches lag).
- **Integrity check before any content deploy:** `node scripts/check-site.mjs` — verifies draft text is byte-identical to PROPOSED_AMENDMENTS.md, footnotes are consistent, every URL exists in the research corpus, no banned words. Must print `ALL CHECKS PASS`.
- **Draft constitutional text is never edited in a copy pass.** It changes only in PROPOSED_AMENDMENTS.md (with a dated revision note) and is then mirrored verbatim into the page's `<div class="article-text">`.
- **Sourcing:** every factual claim on an amendment page has a GFM footnote `[^key]` → `[^key]: … — [Source](URL).` at the end of the file; every URL must appear in the research corpus (agents must never invent URLs). **Michael's rule (2026-08-17): footnotes cite facts and sources only — never narrate a correction** ("the widely quoted X was really Y" does not belong on the site).
- **Voice:** COPY_VOICE_GUIDE.md. House rules settled: ballot results are "wide margins" (never "landslides"); "clears the bar" is house vocabulary (keep); names in footnotes are fine (citations), never in prose as abuse examples; every polling number carries party breakdown + pollster + year (write "(no party breakdown published)" when the source has none).
- **Outside review:** `scripts/gemini-review.sh <system-file> <prompt-file>` calls `gemini-3.1-pro-preview` (Michael's chosen model; MCP config also switched). **Gemini is good at finding gaps and unreliable on facts — it fabricated URLs and "corrections" repeatedly. Never let a Gemini claim into the corpus or the site without fetching the source yourself.** Its rewrites drift into officialese; apply only high-confidence fixes.
- **Research corpus edits are append-only**: new material goes in a dated `## Review Additions` section; existing text is never rewritten (Michael applies flagged corrections himself).
- **Card blurbs / page ledes** = `problemSummary` / `principleSummary` in each amendment MDX frontmatter (Michael edits these himself; keep 15–25 words).
- **Parallel agents** work well here (one per amendment/doc, `general-purpose`, prompt file in `scripts/`); always give them the hard constraints above and require a JSON return.
- Michael's account for Firebase CLI: [REDACTED] (project owner also michael@newbillofrights.net). gcloud lives at `/opt/homebrew/share/google-cloud-sdk/bin/gcloud`.

## 3. Michael's decisions for this phase (verbatim intent, 2026-08-17)

- **Order:** rejected-categories substantiation FIRST, then Phase 2A/2B/2C.
- **2A annotations:** "proceed with draft as you see fit and feel free to name the trap the wording avoids." Then "run everything final by Gemini to get a round of feedback."
- **2B charts:** "don't draw a line at 50% and just label each proposal's floor number" (no floor line at all; label the floor — the lower of R/D — on every chart).
- **2C share images:** approved as designed.
- Footnotes: facts/citations only, no correction narratives (see §2).
- He will still manually review everything; keep `status: draft` until he clears pages.

## 4. Task 0 — Substantiate the rejected categories (do this first)

**Goal:** the ten rejected categories must be justified as completely as the eight targets are — evidence, sources, party breakdowns, the specific test each failed, and the path back — then the website updated accordingly.

**Inputs:** the Rejected list in [research/CATEGORIES.md](research/CATEGORIES.md) (dates + one-line reasons); [SELECTION_METHOD.md](research/SELECTION_METHOD.md) §4 (gate, evidence hierarchy, six failure modes) and §5 (three non-polling tests) and §10 ("Rejected (10) — and the test each failed"); the rejected-category sections retained in [research/POLLING_RESEARCH.md](research/POLLING_RESEARCH.md); [research/AMENDMENT_IDEAS.md](research/AMENDMENT_IDEAS.md) (ideas filed under rejected categories, kept for the record).

**The ten:** Abortion · Voting Rights · Electoral College & Presidential Elections · Supreme Court Expansion · Senate / Congressional Structure · Election Technology & Modernization · Civic Information & Informed Citizenry · Presidential Self-Pardon Ban · Eliminate Qualified Immunity · Balanced Budget.

**Deliverable A — research:** one memo per rejected category at `research/rejected/<SLUG>_REJECTED.md` (roughly a third the depth of a target memo), all to one template so they're comparable:
1. *The proposal as commonly framed* (and the main variants).
2. *The evidence*: best available polling with party breakdowns, pollster, fieldwork date, link (independent pollsters first; ballot results; legislative votes; advocacy polls flagged) — every number web-verified against the pollster's page.
3. *The gate result*: bipartisan floor per SELECTION_METHOD §4.1; which failure mode(s) in §4.3 apply, with the numbers that show it; which non-polling tests in §5 apply (e.g., civic information failed the existential test, not the polling test).
4. *Framings tested*: what alternative framings were considered and whether any clears the bar (e.g., QI "hold officers accountable" 79% / 64R; Electoral College "direct popular vote" 46R/80D).
5. *Path back*: the specific evidence that would reopen the category (a poll, a ballot result, a framing) — or "none identified."
6. *Sources* list.
Use parallel agents (one per category), require web verification of every number, and require the return JSON to list anything unverifiable. Then run the Gemini review + verify pass on the set (same discipline as RESEARCH_REVIEW).

**Deliverable B — website:** replace the current one-paragraph entries on `/evidence/rejected` with substantiated pages: recommend a subpage per rejected category (`/evidence/rejected/<slug>`, an Astro content collection `rejected` with MDX bodies drafted from the memos in COPY_VOICE_GUIDE voice, footnoted to sources, with a FullSpectrumChart of the decisive number where one exists) and an index that keeps the current framing ("These aren't judgments that the issues don't matter…") plus one line per category naming the failed test. Extend `scripts/check-site.mjs` to cover the new pages (footnote consistency + URL provenance; no draft-text check needed). Nonpartisan discipline matters *most* here — several rejected categories (abortion, voting rights, Electoral College) are the most partisan-live topics on the site; state the evidence and the test, never a view on the merits.

## 5. Task 1 — Phase 2A: annotated draft text

- **What:** each constitutional section on each amendment page gets an expandable plain-English note (NCC Interactive Constitution pattern), 2–4 sentences: what the section does in ordinary language, and **why it's worded that way — naming the trap the wording avoids** (drawn from the research memos' ⚠️ trap notes and design reasoning). 35 sections total across the eight articles.
- **Mechanics (recommended):** keep the `<div class="article-text">` markdown exactly as is (the integrity check depends on those `**Section N.**` lines) and add a small `Note` component after each section inside the div — `<Note>…</Note>` rendering `<details class="annotation"><summary>What this means</summary>…</details>` — no JS, `<summary>` marker reset already exists in `global.css`. Style it as a quiet aside within the document (smaller sans, ink-soft, gold hairline). Update `check-site.mjs` so `<Note>` blocks are ignored when comparing draft text (only `**Section` lines are compared, so this already holds — verify).
- **Process:** draft all 35 (agents, one per amendment, from the memos); then run each page's annotations through `scripts/gemini-review.sh` for a feedback round; apply high-confidence fixes only; verify; deploy; Michael reviews.

## 6. Task 2 — Phase 2B: polling page charts

- Replace the table-only `/evidence/polling` with a `FullSpectrumChart` per entry in `site/src/content/data/polling.json`, grouped by amendment (order by amendment `order`), **no floor line**; label each proposal's **floor number** (the lower of R/D) prominently on the chart (e.g., a small "floor: 71% (R)" caption/annotation); keep the sortable table below as the accessible view; sources already linked. Update the `FullSpectrumChart` component to accept `showFloorLine={false}` (or remove the line by default everywhere — check with the home page and amendment pages; Michael's instruction was global: "don't draw a line at 50%"). Re-run the dataviz palette check if colors change (they shouldn't).

## 7. Task 3 — Phase 2C: social share images

- Build-time OG image per page (1200×630): amendment title in Libre Caslon Text on the ink/parchment brand background, one-line summary in Public Sans, gold rule, wordmark. Tooling: `satori` + `@resvg/resvg-js` in an Astro endpoint or build step; fonts are in `site/public/fonts/`. Wire `<meta property="og:image">` in `Base.astro`. Provide a site-wide fallback image for non-amendment pages.

## 8. After Phase 2: launch gate (needs Michael's sign-off on copy first)

E0 remove noindex (both places) · E1 QA: Lighthouse ≥ 95, keyboard/screen-reader pass, mobile layout, dead-link sweep of all footnote URLs, forms retest on production · E2 favicons · E3 analytics (Plausible unless Michael says otherwise). Then Phase 3 items in WEBSITE_OUTLINE §10.

## 9. Open items waiting on Michael (don't block on these)

- Manual read of all pages → flip `status: draft` to `reviewed`.
- Google Workspace SMTP app password → enable seed-donor email notifications in `functions/src/index.ts` (TODO(D3)); until then submissions are read in the Firebase console.
- Luma link once the first LA salon has a date (salons page).
- Confirm Plausible for analytics.
- Two design questions from the research review are now decided and applied (foreign-money principle added; redistricting Section 2 fixed). Remaining flagged corrections in each memo's `### Flagged corrections` are his to apply.
- Longer-term: migrate the Firebase project out of the [REDACTED] org before incorporation.
