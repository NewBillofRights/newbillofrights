You are converting ONE candidate-category memo into a REJECTED-category memo and web page for the New Bill of Rights Foundation, following the founder's decision of 2026-08-18. Repo: /Users/michaelhamilton/Documents/newbillofrights. Today is 2026-08-18.

CATEGORY: Statehood for DC and Puerto Rico
SOURCE (candidate memo, already web-verified and reviewed — the evidence base): /Users/michaelhamilton/Documents/newbillofrights/research/candidates/STATEHOOD_CANDIDATE.md
CREATE 1 (memo): /Users/michaelhamilton/Documents/newbillofrights/research/rejected/STATEHOOD_REJECTED.md
CREATE 2 (page): /Users/michaelhamilton/Documents/newbillofrights/site/src/content/rejected/statehood.mdx  (order: 11)
DELETE: /Users/michaelhamilton/Documents/newbillofrights/site/src/content/candidates/statehood.mdx (the candidate page — the category is no longer a candidate; the candidate MEMO stays in research/candidates/ for the record; do not delete or edit it)
Touch nothing else.

The founder's recorded rationale (CATEGORIES.md, Rejected Categories, 2026-08-18): DC: 13% R (Yahoo/YouGov 2021), 15% R and only 39% D (Gallup 2019), two House passages with no Republican yeas — fails the bipartisan floor and the symmetry test. Puerto Rico: 41–45% R, Weak, and admission is a statute under Article IV §3 — fails why-an-amendment; the statutory route stays on the record. Path back for DC: 'representation without statehood,' never polled.

## Read first
1. /Users/michaelhamilton/Documents/newbillofrights/scripts/prompts/rejected-memo-prompt.md — the rejected-memo template and rules (headings: 1 The proposal as commonly framed · 2 The evidence · 3 The gate result · 4 Framings tested · 5 Path back · 6 Sources). Your memo header line must read: *Candidate 2026-08-06 to 2026-08-18; rejected 2026-08-18 on the founder's decision after the candidate memo. Memo written 2026-08-18 to substantiate the rejection under SELECTION_METHOD.md; every figure below was verified against the linked source in the candidate memo (candidates/STATEHOOD_CANDIDATE.md), which is retained for the record.* — and Section 3 must name the failing test(s) exactly as the rationale does.
2. /Users/michaelhamilton/Documents/newbillofrights/scripts/prompts/rejected-page-prompt.md — the rejected-page template and rules (sections: The proposal · The evidence · The test it failed · Framings we tested · The path back; frontmatter title/order/rejectedOn/failedTest/summary/memo/status; 550–850 words; facts and URLs only from YOUR NEW rejected memo; footnotes; FullSpectrumChart of the decisive number).
3. The candidate memo in full, and the current candidate page (site/src/content/candidates/statehood.mdx) — the page's prose, footnotes and chart are a strong starting point; the rejected page differs in that the category is now closed: 'The test it failed' replaces 'Where it stands', 'The path back' replaces 'What would move it', and there is no 'in either direction' hedging.
4. /Users/michaelhamilton/Documents/newbillofrights/research/rejected/QUALIFIED_IMMUNITY_REJECTED.md and site/src/content/rejected/qualified-immunity.mdx as finished examples.

## Rules
- Reuse the candidate memo's verified evidence and URLs; do not add new facts (no web research needed — WebFetch only if you must re-check a figure). Every URL used on the page must appear verbatim in the new rejected memo (`node scripts/check-site.mjs` enforces this — run it from the repo root when done and fix anything for your files).
- The rejected memo's Section 6 Sources must contain every URL the page uses. Frontmatter `rejectedOn: "2026-08-18"`, `memo: research/rejected/STATEHOOD_REJECTED.md`, `status: draft`.
- Nonpartisan discipline per COPY_VOICE_GUIDE.md; no recommendation language on the page (the decision is made: state the test it failed and the path back).
- SPECIAL: Two jurisdictions, two gate results, two failing tests — keep them separate on the page (two charts are allowed: DC Yahoo/YouGov 2021 64/13/32; PR YouGov 2024 79/41/56). failedTest suggestion: 'Weak floor (DC); statutory (PR)'.

Return ONLY this JSON:
{"slug":"statehood","memoWords":<n>,"pageWords":<n>,"footnotes":<n>,"failedTest":"<as written>","summary":"<as written>","flags":["..."]}
