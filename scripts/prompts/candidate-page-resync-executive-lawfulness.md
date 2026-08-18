You are re-syncing ONE public web page of the New Bill of Rights Foundation site with its research memo, which was updated AFTER the page was drafted. Repo: /Users/michaelhamilton/Documents/newbillofrights. Today is 2026-08-18.

PAGE (edit only this file): /Users/michaelhamilton/Documents/newbillofrights/site/src/content/candidates/executive-lawfulness.mdx
MEMO (the only source of facts and URLs): /Users/michaelhamilton/Documents/newbillofrights/research/candidates/EXECUTIVE_LAWFULNESS_CANDIDATE.md

What changed in the memo since the page was drafted: a Firecrawl retry pass verified previously unreachable sources. The changes are (a) in-place corrections in the memo body and (b) new bullets under the memo's `## Review Additions (2026-08-18)` section (and, for the eminent-domain memo, in §2/§8). Some are gate-relevant.

## Read first
1. /Users/michaelhamilton/Documents/newbillofrights/scripts/prompts/candidate-page-prompt.md — the page rules (facts and URLs only from the memo; every claim footnoted; party breakdown + pollster + year on every polling number; nonpartisan discipline; NO recommendation or prediction on the page; fixed section structure; frontmatter keys). Those rules govern.
2. The memo in full, paying particular attention to its Review Additions and to any sentence marked "Corrected".
3. The current page in full.
4. /Users/michaelhamilton/Documents/newbillofrights/COPY_VOICE_GUIDE.md "Candidate-category page structure" and "Nonpartisan discipline".

## Do
- Compare every number, date, count, and claim on the page against the memo as it now stands. Where the memo changed, change the page (prose AND footnote), including the frontmatter `summary` and `gate` if the gate result or floor changed. SPECIFIC CHANGE CBS News/YouGov Oct 1–3 2025 (n=2,441) party split now verified: who should have most authority over federal spending — 72% Congress / 19% president / 9% courts; Congress chosen by 59% R / 77% I / 82% D — but this is a which-branch-decides question, not the operative 'must spend what Congress appropriated' rule, so the recorded floor for sub-item (a) stays 37% R (Marquette). Reuters/Ipsos fieldwork Jan 31–Feb 2 2025 (34/62, no party split). S. 515 (Sen. Lee, 1 R cosponsor) and H.R. 1180 (Rep. Clyde, 25 R cosponsors) — all-Republican. Issue One: 78% oversight; 47% R forced-choice. The framing-dependency range on the page is now 20–59% R across instruments per the memo §4 — but do not let 59% read as the mechanism floor. for this page: CBS News/YouGov Oct 1–3 2025 (n=2,441) party split now verified: who should have most authority over federal spending — 72% Congress / 19% president / 9% courts; Congress chosen by 59% R / 77% I / 82% D — but this is a which-branch-decides question, not the operative 'must spend what Congress appropriated' rule, so the recorded floor for sub-item (a) stays 37% R (Marquette). Reuters/Ipsos fieldwork Jan 31–Feb 2 2025 (34/62, no party split). S. 515 (Sen. Lee, 1 R cosponsor) and H.R. 1180 (Rep. Clyde, 25 R cosponsors) — all-Republican. Issue One: 78% oversight; 47% R forced-choice. The framing-dependency range on the page is now 20–59% R across instruments per the memo §4 — but do not let 59% read as the mechanism floor.
- Where the Review Additions add gate-relevant evidence (a new party-split poll, a corrected floor, a failure-mode test now measured), work it into the relevant section in the page's own voice, footnoted to the memo's URL. Do not add context items that do not bear on a test.
- Keep the fixed structure, voice, and rules. Length: the page may grow modestly (target ≤ ~1,000 words of body) to accommodate gate-relevant additions; do not pad. If something on the page was cut for length earlier and the memo's new evidence supersedes it, prefer the new evidence.
- Every URL on the page must appear verbatim in the memo (integrity check). Run `node scripts/check-site.mjs` from the repo root when done and fix anything it reports for your page.
- Do not use any mcp__firecrawl__ tool. Do not touch other pages.

Return ONLY this JSON:
{"slug": "executive-lawfulness", "changed": ["one line per change made"], "gateChanged": <true|false>, "summary": "<final frontmatter summary>", "gate": "<final frontmatter gate>", "words": <body word count>, "flags": ["anything the editor should look at"]}
