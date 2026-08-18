You are converting ONE candidate-category memo into a REJECTED-category memo and web page for the New Bill of Rights Foundation, following the founder's decision of 2026-08-18. Repo: /Users/michaelhamilton/Documents/newbillofrights. Today is 2026-08-18.

CATEGORY: Expanding the House of Representatives
SOURCE (candidate memo, already web-verified and reviewed — the evidence base): /Users/michaelhamilton/Documents/newbillofrights/research/candidates/HOUSE_EXPANSION_CANDIDATE.md
CREATE 1 (memo): /Users/michaelhamilton/Documents/newbillofrights/research/rejected/HOUSE_EXPANSION_REJECTED.md
CREATE 2 (page): /Users/michaelhamilton/Documents/newbillofrights/site/src/content/rejected/expand-house.mdx  (order: 13)
DELETE: /Users/michaelhamilton/Documents/newbillofrights/site/src/content/candidates/expand-house.mdx (the candidate page — the category is no longer a candidate; the candidate MEMO stays in research/candidates/ for the record; do not delete or edit it)
Touch nothing else.

The founder's recorded rationale (CATEGORIES.md, Rejected Categories, 2026-08-18): 23% R / 35% D (Pew 2023) and 11% R when costs are named (2006); the size of the House is a statute since 1929, so why-an-amendment is weak. Symmetric by simulation. Path back: an independent poll of the Wyoming-Rule / cube-root framing clearing 45% R after a statutory enlargement has been tried.

## Read first
1. /Users/michaelhamilton/Documents/newbillofrights/scripts/prompts/rejected-memo-prompt.md — the rejected-memo template and rules (headings: 1 The proposal as commonly framed · 2 The evidence · 3 The gate result · 4 Framings tested · 5 Path back · 6 Sources). Your memo header line must read: *Candidate 2026-08-06 to 2026-08-18; rejected 2026-08-18 on the founder's decision after the candidate memo. Memo written 2026-08-18 to substantiate the rejection under SELECTION_METHOD.md; every figure below was verified against the linked source in the candidate memo (candidates/HOUSE_EXPANSION_CANDIDATE.md), which is retained for the record.* — and Section 3 must name the failing test(s) exactly as the rationale does.
2. /Users/michaelhamilton/Documents/newbillofrights/scripts/prompts/rejected-page-prompt.md — the rejected-page template and rules (sections: The proposal · The evidence · The test it failed · Framings we tested · The path back; frontmatter title/order/rejectedOn/failedTest/summary/memo/status; 550–850 words; facts and URLs only from YOUR NEW rejected memo; footnotes; FullSpectrumChart of the decisive number).
3. The candidate memo in full, and the current candidate page (site/src/content/candidates/expand-house.mdx) — the page's prose, footnotes and chart are a strong starting point; the rejected page differs in that the category is now closed: 'The test it failed' replaces 'Where it stands', 'The path back' replaces 'What would move it', and there is no 'in either direction' hedging.
4. /Users/michaelhamilton/Documents/newbillofrights/research/rejected/QUALIFIED_IMMUNITY_REJECTED.md and site/src/content/rejected/qualified-immunity.mdx as finished examples.

## Rules
- Reuse the candidate memo's verified evidence and URLs; do not add new facts (no web research needed — WebFetch only if you must re-check a figure). Every URL used on the page must appear verbatim in the new rejected memo (`node scripts/check-site.mjs` enforces this — run it from the repo root when done and fix anything for your files).
- The rejected memo's Section 6 Sources must contain every URL the page uses. Frontmatter `rejectedOn: "2026-08-18"`, `memo: research/rejected/HOUSE_EXPANSION_REJECTED.md`, `status: draft`.
- Nonpartisan discipline per COPY_VOICE_GUIDE.md; no recommendation language on the page (the decision is made: state the test it failed and the path back).
- SPECIAL: failedTest suggestion: 'Weak floor; statutory'. Chart Pew 2023 (35 D / 23 R). Do not write the 'Article the First' story as if a live bill would revive it (H.J.Res. 186 would extinguish it).

Return ONLY this JSON:
{"slug":"expand-house","memoWords":<n>,"pageWords":<n>,"footnotes":<n>,"failedTest":"<as written>","summary":"<as written>","flags":["..."]}
