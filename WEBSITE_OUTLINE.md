# Website Outline — New Bill of Rights Foundation

The outline and build plan for the public website (for Fable to execute): goals, sitemap, page-by-page content, content sources in this repo, the build approach, the technical architecture (section 9), and the phased build-out plan (section 10). Key decisions are recorded in section 8; the only remaining open item (analytics provider) is minor and doesn't block the build.

---

## 1. Goals

The site has three jobs, in priority order:

1. **Explain the idea in one visit.** A first-time visitor should leave understanding: (a) we want a new set of constitutional amendments, (b) every proposal must pass a genuinely bipartisan bar — the full-spectrum test, and (c) we show our evidence, including what we rejected.
2. **Build credibility through transparency.** The site's differentiator is publishing the homework: polling with party breakdowns, rejected categories with reasons, and draft text with a paper trail. The site should feel like a research institution, not an advocacy campaign.
3. **Convert interest into participation.** Email signup first; then survey participation, salon attendance (LA), and eventually donations.

**Audiences:** curious citizens across the political spectrum (primary), journalists and academics (secondary), potential collaborators/funders (tertiary). The tone must never code left or right — this is a design constraint, not just an editorial one (color palette, imagery, and example choices all matter).

## 2. Sitemap

```
Home
├── Mission                      (why, principles, full-spectrum test)
├── The Amendments               (index of 8 categories)
│   └── /amendments/<category>   (8 detail pages)
├── The Evidence
│   ├── Polling                  (cross-party support data)
│   ├── Rejected Categories      (what failed the bar, and why)
│   └── Candidate Categories     (under consideration)
├── Get Involved
│   ├── Join the mailing list
│   ├── Become a seed donor      ($1,000+ founding-donor pledge)
│   ├── Take the survey          (when live)
│   └── Salons                   (LA monthly event info + RSVP)
├── About                        (who we are, how we work, contact)
└── FAQ
```

Small enough to hold in a single top nav: **Mission · Amendments · Evidence · Get Involved · About**, with a persistent "Join" call-to-action button.

## 3. Page-by-Page Outline

### Home
- **Hero:** one-sentence thesis: *"Constitutional amendments every American can agree on."* (settled 2026-08-17; text lives in HOME.md). Sub-line naming the four pillars: Freedom, Democracy, Rule of Law, Good Government. Primary CTA: join the mailing list; secondary CTA: read the amendments.
- **The full-spectrum test, visualized:** the site's signature element. A simple graphic showing that every proposal must clear a support floor in *both* parties — this is what makes the project different, so it belongs above the fold or immediately after.
- **The eight amendments as a card grid:** category name + one-line plain-English summary each, linking to detail pages.
- **"We show our work" strip:** teaser for the Evidence section — e.g., "We've rejected 11 categories that couldn't pass the bar. Here's why." Rejection as a credibility feature.
- **Seed donor call-to-action:** a distinct band for founding donors — "Help us formally launch the foundation" — linking to the seed donor page in Get Involved. Framed as joining the founding of the institution, not a routine donation ask.
- **How ratification works:** brief primer (2/3 of Congress, 3/4 of states) framing the high bar as the organizing principle, per the mission.
- **Footer:** signup form (again), contact, social, eventual 501(c) disclosures.

### Mission
- Adaptation of [MISSION.md](research/MISSION.md), lightly restructured for the web: Who We Are → The Four Pillars → Founding Principles (bipartisanship as fundamental; the full-spectrum test as a measurement; only existential problems; rules that bind everyone / veil of ignorance) → How We Work → What Success Looks Like.
- The "veil of ignorance" framing ("no one knows who a fair rule will bind next") is the most persuasive paragraph in the repo — give it visual prominence.

### The Amendments (index)
- Intro paragraph: what qualifies an amendment for this list (passed the full-spectrum gate) and pointer to the Evidence section for what didn't.
- Eight entries, each with: category name, the problem in one sentence, the principle of the fix in one sentence, link to detail page.

### Amendment detail pages (×8)
One template, eight instances: Campaign Finance, Term Limits, Ethics, Privacy, Lobbying, Redistricting, Executive Compliance with the Courts, Pardon Reform. Each page has:

1. **The problem** — plain-English, one short section, sourced from the intro of the category's research doc.
2. **The principle** — what the amendment does, in plain English, before any legal text.
3. **The draft text** — the article from [PROPOSED_AMENDMENTS.md](research/PROPOSED_AMENDMENTS.md), formatted as constitutional sections, with expandable plain-English annotation per section (pattern: the National Constitution Center's Interactive Constitution).
4. **Why it can pass** — the bipartisan evidence: key polling numbers with party breakdowns, state precedents, cross-party votes (from the research docs and [POLLING_RESEARCH.md](research/POLLING_RESEARCH.md)).
5. **What we left out** — formulations held back for failing the gate, with reasons (each research doc's held-back list). This is the transparency signature applied at the amendment level.

### The Evidence
- **Polling:** distilled from [POLLING_RESEARCH.md](research/POLLING_RESEARCH.md). Ideal presentation: per-proposal chart showing D/R/I support with the "bipartisan floor" highlighted. Start with a table; charts can come in phase 2.
- **Rejected Categories:** from the Rejected section of [CATEGORIES.md](research/CATEGORIES.md) — each with its rejection date and reasoning. Frame explicitly: "These aren't judgments that the issues don't matter — they're judgments that they can't pass the full-spectrum test."
- **Candidate Categories:** the under-consideration list, framed as an open pipeline ("what would move each one in or out").

### Get Involved
- **Mailing list** — the baseline action available on day one. Signups stored in Firestore via a simple form (no third-party newsletter service required at launch); outbound email runs on Google Workspace. If volume later outgrows Workspace sending limits, add a newsletter service in phase 2.
- **Seed donors ($1,000+)** — the flagship ask of the launch site. A dedicated page inviting founding donors to express interest in giving $1,000 or more, which is what lets the foundation formally start: incorporating the New Bill of Rights Foundation and filing for 501(c)(3) status, opening bank accounts, establishing the board of directors, and hiring part-time support. **Interest-only until incorporation** — the form collects name, email, intended amount, and a short note; no money changes hands and no payment processing is built until the entity and bank account exist. Founding donor benefits, stated plainly on the page:
  - A seat on the founding **board of directors** for at least one year (continuing thereafter if re-appointed).
  - Membership in the **invite-only online salon series**.
  - **Permanent recognition** as a founding donor on the website.
- **Survey** — placeholder/teaser until the survey (Roadmap step 3) is live; then embed or link.
- **Salons** — two tracks, presented together: the public LA monthly salon (what it is, format, upcoming topic from [SALON_TOPICS.md](research/SALON_TOPICS.md), RSVP via **Luma** as the primary embed/link, with each event also cross-listed on **Eventbrite** for discoverability) and a mention of the invite-only online salon series reserved for founding donors, linking to the seed donor page.
- **General donations** — smaller-dollar giving stays off the site until incorporation and 501(c)(3) status land (entity formation planned for 2026); the seed donor interest page carries the fundraising load until then.

### About
- Michael Hamilton, named on the site as **Founder**, with a short bio; the foundation's status stated transparently (New Bill of Rights Foundation, incorporation planned for 2026 — the seed donor round is what starts it). Contact email on the newbillofrights.net Google Workspace domain, and a short "how this project works" (the research → polling → salon → draft pipeline from the Roadmap). As the board forms, founding directors are added here.

### FAQ
Anticipate the recurring objections: "Isn't amending the Constitution impossible?" / "Which party is this really for?" / "Why isn't <issue> included?" (link to Rejected Categories) / "Why amendments instead of legislation?" / "How is this funded?"

## 4. Content Source Map

| Site section | Repo source | Transformation needed |
|---|---|---|
| Mission page | research/MISSION.md | Light edit for web headings |
| Amendment pages (problem/evidence) | 8 × research/*_RESEARCH.md | Heavy distillation — research docs are internal-grade |
| Amendment pages (draft text) | research/PROPOSED_AMENDMENTS.md | Format + add plain-English annotations |
| Evidence: polling | research/POLLING_RESEARCH.md | Distill to per-proposal numbers |
| Evidence: rejected/candidates | research/CATEGORIES.md | Light edit |
| Salons | research/SALON_TOPICS.md | Extract upcoming topics only |
| Home copy | HOME.md | Read at build time by index.astro — edit the Markdown, headings are the lookup keys |
| FAQ | — | Net-new writing (in faq.astro) |

The biggest content task is distilling eight research docs into public-facing pages — that's a writing project, not a build project, and the build plan should schedule it as its own workstream.

## 5. Design & Identity

- **Design inspiration (settled):** primary references are the **ACLU** (aclu.org) — the standard for issue-page architecture and clear per-page calls to action at scale — and the **Malala Fund** (malala.org) — elegant, editorial design paired with advocacy messaging. Secondary references for specific patterns: **Brennan Center** (making dense policy research readable and navigable — the closest mission analogue), the **National Constitution Center's Interactive Constitution** (presenting amendment text with expandable commentary — the model for the draft-text annotation UI), and **Tracking (In)Justice** (leading with data to convey the scale of a problem — the model for the Evidence/polling pages).
- **Identity design is part of the build plan.** No existing branding — the plan includes a lightweight identity workstream before page design: logo/wordmark, palette, and type pairing, delivered as a one-page style guide the site is then built against.
- **Nonpartisan by design:** avoid red/blue as primary palette (they code partisan). Civic-neutral directions: deep navy/ink + parchment/off-white + a single accent (e.g., gold). Typography with constitutional gravitas for headings (a serif) paired with a clean sans for body.
- **The document is the brand:** amendment text rendered beautifully — numbered sections, generous margins, feels like a founding document — is the visual identity.
- **Signature graphic:** the full-spectrum test / bipartisan-floor visualization, reused across the site (home, each amendment's evidence block, polling page).
- Accessible (WCAG AA), fast, works on phones — most first visits will come from social links.

## 6. Build Approach

- **Static site generator** (recommendation: **Astro**) with content in Markdown/MDX — the repo is already Markdown, contributors can edit content without touching code, and there's no server to maintain or secure.
- **The site lives in this repo**, in a `site/` directory. The research docs at the repo root are the content source; distilled public-facing content lives in the Astro content collections, so content edits and site edits ship in one commit with no sync step.
- **Hosting: Firebase Hosting**, with the **newbillofrights.net** domain (registered at Squarespace) pointed at it via DNS. Squarespace stays registrar-only — no Squarespace site builder.
- **Forms: Firestore** — mailing-list signups and seed donor interest submissions write to Firestore (via a small Cloud Function or client SDK with locked-down security rules). No third-party form or newsletter service at launch.
- **Email: Google Workspace** on the newbillofrights.net domain for contact addresses and outbound mail.
- **No auth, no CMS** in phase 1. Revisit a CMS only if non-technical contributors need to edit.
- **Analytics:** privacy-respecting (Plausible or Fathom) — running invasive analytics on a site with a privacy amendment would be an own-goal.

## 7. Phasing

- **Phase 0 — Identity:** logo/wordmark, palette, type pairing, one-page style guide.
- **Phase 1 — Launchable core:** Home, Mission, Amendments index + 8 detail pages (even with abbreviated evidence sections), Rejected Categories, About/contact, email signup, **seed donor interest page**, FAQ. This is the "credible in one visit" bar.
- **Phase 2 — Evidence deepening:** full polling page with charts, per-section plain-English annotations on draft text, held-back formulations per amendment.
- **Phase 3 — Participation:** survey embed, salon RSVP flow, expansion beyond LA, general donations and seed-donor fund collection (post-incorporation), founding-donor recognition wall, invite-only online salon infrastructure.

## 8. Decisions (settled 2026-08-14)

1. **Domain:** newbillofrights.net, registered at Squarespace (registrar only; DNS points to Firebase).
2. **Legal entity:** none yet — the **New Bill of Rights Foundation** will be started in 2026; the seed donor round funds its formation. Site states this transparently.
3. **Attribution:** Michael Hamilton is named on the site as Founder.
4. **Hosting & email:** Firebase Hosting; Google Workspace for email; Firestore for form submissions. Firebase project: **`newbillofrights-prod`** (created 2026-08-14).
5. **Branding:** none exists — identity design is Phase 0 of the build plan.
6. **Seed donors:** interest-only until incorporation. Benefits: founding board of directors seat for at least one year (continuing if re-appointed), membership in the invite-only online salon series, and permanent recognition on the website.
7. **Design inspiration:** ACLU (issue-page architecture, CTAs) and Malala Fund (editorial elegance) as primary references; Brennan Center, the NCC Interactive Constitution, and Tracking (In)Justice as secondary pattern references (see section 5).
8. **Repo layout:** the site lives in this repo (`site/` directory) — no separate repo, no content sync step.
9. **Copy workflow:** Fable drafts all public-facing copy from the research docs; Michael reviews and edits for voice before anything ships.
10. **Identity (Phase 0):** Fable designs it. Direction settled 2026-08-14: the civic-neutral **ink-navy / parchment / gold** palette is approved as the identity. Type pairing: **Libre Caslon Text** for headings (founding-era Caslon lineage) with **Public Sans** for body (the U.S. government's open civic typeface), both self-hosted. Wordmark is typographic (Caslon). The style guide lives at `/styleguide` on the site. A professional refresh can come post-launch.
11. **Salon RSVP:** Luma as the primary RSVP link/embed on the site; events also cross-listed on Eventbrite for discoverability.

### Remaining minor decisions (non-blocking)

- Analytics provider (Plausible vs. Fathom — recommendation: Plausible).

---

## 9. Architecture

### 9.1 Stack

- **Astro** in static-output mode, with **MDX** for content pages. No client-side framework — the site is documents. Interactivity is limited to islands where genuinely needed (the two forms) and progressive-enhancement HTML (`<details>`) everywhere else, so nearly every page ships zero JavaScript.
- **Styling:** plain CSS with design tokens as custom properties (`src/styles/tokens.css`, produced by Phase 0). Astro's scoped component styles for everything else. No CSS framework — the design system is small and bespoke ("the document is the brand"), and a framework would fight the editorial typography.
- **Fonts:** self-hosted woff2 (heading serif + body sans chosen in Phase 0), preloaded, max two files per family.
- **TypeScript** throughout (Astro components, content schemas, Cloud Functions).

### 9.2 Repo layout

```text
newbillofrights/
├── *.md                      # research corpus — unchanged, remains source of truth
├── WEBSITE_OUTLINE.md        # this document
├── site/
│   ├── astro.config.mjs
│   ├── package.json
│   ├── public/               # favicons, fonts, static OG fallback
│   └── src/
│       ├── content/          # Astro content collections (zod-validated frontmatter)
│       │   ├── amendments/   # 8 × .mdx — public distillations of the research docs
│       │   ├── rejected/     # one entry per rejected category (+ date, reasoning)
│       │   ├── candidates/   # under-consideration pipeline
│       │   └── polling/      # per-proposal numbers as data files (yaml/json)
│       ├── components/       # see 9.3
│       ├── layouts/          # Base, Page, AmendmentDetail
│       ├── pages/            # routes; amendment pages generated from the collection
│       └── styles/tokens.css # Phase 0 output
├── functions/                # Firebase Cloud Functions (form intake) — own package.json
├── scripts/deploy.sh         # deploy wrapper (captures full log per deploy)
├── firebase.json             # hosting (site/dist) + functions config
└── .firebaserc
```

Amendment frontmatter schema (zod): `title`, `slug`, `order`, `problemSummary` (one-liner for cards/index), `principleSummary`, `status`, `pollingKeys` (references into the polling data collection). Polling data lives as structured data, not prose, so the same numbers drive the amendment evidence blocks, the Polling page, and the Phase 2 charts without duplication.

### 9.3 Key components

- **`FullSpectrumChart`** — the signature graphic (section 5). A static, build-time SVG showing D/R/I support bars against the highlighted bipartisan floor, driven by the polling data collection. No JS; accessible text alternative baked in. Reused on Home, each amendment's "Why it can pass" block, and the Polling page.
- **`AnnotatedArticle`** — renders draft constitutional text as numbered sections with generous margins; each section has an expandable plain-English annotation via `<details>/<summary>` (the NCC Interactive Constitution pattern, working without JS). Includes a cross-browser marker reset (`summary { list-style: none }` + `::-webkit-details-marker { display: none }`) with a custom indicator, so browser default disclosure triangles don't break the editorial aesthetic.
- **`AmendmentCard`** / card grid — Home and Amendments index.
- **`EvidenceStrip`** — the "we show our work" band (rejection count + link), computed from the rejected collection at build time so it never goes stale.
- **`SeedDonorBand`** — the founding-donor call-to-action band for Home.
- **`SignupForm`** and **`SeedDonorForm`** — the only two islands. Small vanilla-TS islands that POST to the intake function; both work as plain HTML form posts if JS fails.

### 9.4 Forms backend (Firestore + one Cloud Function)

- A single HTTPS Cloud Function, **`submitForm`**, handles both form types. It validates the payload (zod, shared types with the site), applies spam controls — honeypot field, minimum-fill-time check, per-IP rate limit — normalizes the email, and writes to Firestore with a server timestamp and the source page.
- **No-JS fallback contract:** the function distinguishes native form posts from `fetch` submissions (via the `Accept` header / a hidden `redirect` field) and answers native posts with a **`303 See Other`** redirect to a success URL (e.g. `/get-involved?submitted=true`) rather than raw JSON, so a non-JS user never lands on a JSON response page.
- Collections: `mailingList` (doc ID = hash of normalized email, so duplicates upsert) with `{email, createdAt, source}`; `seedDonorInterest` with `{name, email, intendedAmount, note, createdAt, source}`.
- **Firestore security rules deny all client access.** Only the function (Admin SDK) touches the database, and the client Firestore SDK is never shipped — this keeps the attack surface minimal and the JS bundle tiny.
- Seed-donor submissions additionally trigger a notification email to the contact address via Workspace SMTP — these are high-value and rare, and shouldn't wait to be discovered in the console. Mailing-list signups are just stored (read via console or a small admin script when sending mail).

### 9.5 Hosting, DNS, deploy

- **Firebase Hosting** on project **`newbillofrights-prod`**, serving `site/dist`. Review happens on **preview channels** (`firebase hosting:channel:deploy`); production deploys are manual via `scripts/deploy.sh`, which runs build → deploy and captures the full log to a persistent file.
- **DNS at Squarespace** (registrar only): A/AAAA records to Firebase Hosting for the apex + `www`, keeping the existing Google Workspace MX records untouched. TLS is automatic via Firebase.
- No CI at launch — one committer, manual deploys with logs are enough. Revisit if contributors join.

### 9.6 Analytics, SEO, performance, accessibility

- **Analytics:** Plausible (pending final confirmation) — one small script, no cookies, no consent banner needed.
- **SEO/social:** per-page titles and meta descriptions, canonical URLs, `sitemap.xml`, and a build-time-generated OG image per amendment (title set in the brand serif on the ink/parchment document background, via `satori` + `@resvg/resvg-js` at build time) so shared links look like official briefs.
- **Performance budget:** Lighthouse ≥ 95 across categories on amendment pages; images through `astro:assets`; fonts preloaded; zero JS on non-form pages.
- **Accessibility (WCAG AA):** contrast enforced at token-selection time in Phase 0 (checked, not eyeballed); semantic heading order; keyboard-operable details and forms; skip link; the chart's data always available as text.

## 10. Build-Out Plan

Five workstreams. **A** gates visual polish, **C (copy) is the critical path** — the code is a small job by comparison. B can start in parallel with A using provisional tokens.

### Workstream A — Identity (Phase 0)

- **A1.** Produce 2–3 identity directions as self-contained style-tile pages: wordmark treatment, palette (with contrast ratios shown), heading/body type pairing, a sample amendment section rendered as a founding document, and the full-spectrum chart in that direction's style.
- **A2.** Michael picks a direction and iterates → final one-page style guide + `tokens.css` + font files.
- **Exit:** `tokens.css` and style guide committed; contrast checks pass AA.

### Workstream B — Scaffold & infrastructure

- **B1.** Astro scaffold in `site/`: config, base layout, nav/footer, tokens import, content-collection schemas.
- **B2.** Firebase project wiring: `firebase.json`, hosting to preview channel, `scripts/deploy.sh` with full-log capture.
- **B3.** Page shells for the whole sitemap with placeholder copy, so information architecture is clickable early.
- **B4.** Core components: `AnnotatedArticle`, `AmendmentCard`, `FullSpectrumChart` (data-driven from a stub polling file), `EvidenceStrip`, `SeedDonorBand`.
- **Exit:** full sitemap navigable on a preview channel URL.

### Workstream C — Copy (critical path)

- **C1.** Mission page: light restructuring of research/MISSION.md; veil-of-ignorance paragraph given visual prominence.
- **C2.** Amendment page template proven on one category end-to-end (draft → Michael's review → publish), then the remaining seven through the same pipeline. Launch allows abbreviated "Why it can pass" / "What we left out" sections; full depth is Phase 2 polish.
- **C3.** Evidence pages: rejected categories and candidates from research/CATEGORIES.md; polling numbers extracted from research/POLLING_RESEARCH.md into the data collection (table presentation at launch).
- **C4.** Net-new writing: Home copy, FAQ, About, seed donor page, salon page.
- **Review rule (decision 9):** nothing ships without Michael's voice pass.
- **Exit:** all Phase 1 pages have reviewed, publishable copy.

### Workstream D — Forms backend

- **D1.** `submitForm` function: validation, honeypot + timing + rate-limit spam controls, Firestore writes, unit tests; deny-all security rules deployed.
- **D2.** Wire both form islands, including the no-JS fallback path.
- **D3.** Seed-donor notification email via Workspace SMTP.
- **D4.** Security scan (Snyk) on `functions/` and `site/` dependencies and new code; fix and rescan until clean.
- **Exit:** end-to-end test submissions visible in Firestore and notification email received.

### Workstream E — Launch

- **E0.** **Remove the pre-launch `noindex`** (added 2026-08-14 while drafts are public): delete the `X-Robots-Tag` header block in firebase.json and the `<meta name="robots">` tag in Base.astro. The site is invisible to search engines until this happens.
- **E1.** QA pass: Lighthouse ≥ 95, keyboard/screen-reader walkthrough, mobile layout check, link check, both forms tested on the production project.
- **E2.** OG images, favicons, sitemap, 404 page.
- **E3.** Analytics installed and verified.
- **E4.** DNS cutover at Squarespace (apex + www → Firebase; MX untouched), TLS confirmed.
- **E5.** Production smoke test on newbillofrights.net; announce-ready.

### Phase mapping & launch bar

| Phase | Workstreams | Done when |
| --- | --- | --- |
| 0 — Identity | A | Style guide + tokens committed |
| 1 — Launchable core | B, C, D, E | **Launch bar:** all 8 amendment pages live (abbreviated evidence OK), Mission/Evidence/Get Involved/About/FAQ live, both forms verified in production, QA pass clean, site on newbillofrights.net |
| 2 — Evidence deepening | C (continued) | Polling page charts (per-proposal D/R/I with bipartisan floor), full per-section annotations, held-back formulations on every amendment page |
| 3 — Participation | new | Survey embed, Luma embed + Eventbrite cross-listing flow, post-incorporation donations, founding-donor recognition wall, invite-only salon infrastructure |

Suggested execution order: A1 and B1–B3 in parallel → A2 → B4 (components styled against real tokens) → C2 first amendment proves the template → D while remaining C2 pages go through review → E once C and D exit. The site can sit on a preview channel through all of it; DNS cutover is the last step.
