You are re-syncing ONE public web page of the New Bill of Rights Foundation site with its research memo, which was updated AFTER the page was drafted. Repo: /Users/michaelhamilton/Documents/newbillofrights. Today is 2026-08-18.

PAGE (edit only this file): /Users/michaelhamilton/Documents/newbillofrights/site/src/content/candidates/appointment-default.mdx
MEMO (the only source of facts and URLs): /Users/michaelhamilton/Documents/newbillofrights/research/candidates/APPOINTMENT_DEFAULT_CANDIDATE.md

What changed in the memo since the page was drafted: a Firecrawl retry pass verified previously unreachable sources. The changes are (a) in-place corrections in the memo body and (b) new bullets under the memo's `## Review Additions (2026-08-18)` section (and, for the eminent-domain memo, in §2/§8). Some are gate-relevant.

## Read first
1. /Users/michaelhamilton/Documents/newbillofrights/scripts/prompts/candidate-page-prompt.md — the page rules (facts and URLs only from the memo; every claim footnoted; party breakdown + pollster + year on every polling number; nonpartisan discipline; NO recommendation or prediction on the page; fixed section structure; frontmatter keys). Those rules govern.
2. The memo in full, paying particular attention to its Review Additions and to any sentence marked "Corrected".
3. The current page in full.
4. /Users/michaelhamilton/Documents/newbillofrights/COPY_VOICE_GUIDE.md "Candidate-category page structure" and "Nonpartisan discipline".

## Do
- Compare every number, date, count, and claim on the page against the memo as it now stands. Where the memo changed, change the page (prose AND footnote), including the frontmatter `summary` and `gate` if the gate result or floor changed. SPECIFIC CHANGE Marquette Sept 8–15 2020 Q33/Q34 toplines WERE published (memo previously said 'never released'): Q33 (2016 refusal to hold a hearing) 73% wrong / 25% right; Q34 (hypothetical 2020 vacancy, fielded pre-vacancy) 67% hold hearings / 32% not — no party breakdown; the pre-vacancy 67% vs Monmouth's post-vacancy 47% nine days later is a within-window contestedness effect. Senate Rule XXXI ¶6 (nominations returned at end of session; automatic absent unanimous consent) — the existing written default runs opposite to the proposal. If the page mentions unreleased Marquette items or lacks the Rule XXXI point in 'Where it stands' (why-an-amendment), update. for this page: Marquette Sept 8–15 2020 Q33/Q34 toplines WERE published (memo previously said 'never released'): Q33 (2016 refusal to hold a hearing) 73% wrong / 25% right; Q34 (hypothetical 2020 vacancy, fielded pre-vacancy) 67% hold hearings / 32% not — no party breakdown; the pre-vacancy 67% vs Monmouth's post-vacancy 47% nine days later is a within-window contestedness effect. Senate Rule XXXI ¶6 (nominations returned at end of session; automatic absent unanimous consent) — the existing written default runs opposite to the proposal. If the page mentions unreleased Marquette items or lacks the Rule XXXI point in 'Where it stands' (why-an-amendment), update.
- Where the Review Additions add gate-relevant evidence (a new party-split poll, a corrected floor, a failure-mode test now measured), work it into the relevant section in the page's own voice, footnoted to the memo's URL. Do not add context items that do not bear on a test.
- Keep the fixed structure, voice, and rules. Length: the page may grow modestly (target ≤ ~1,000 words of body) to accommodate gate-relevant additions; do not pad. If something on the page was cut for length earlier and the memo's new evidence supersedes it, prefer the new evidence.
- Every URL on the page must appear verbatim in the memo (integrity check). Run `node scripts/check-site.mjs` from the repo root when done and fix anything it reports for your page.
- Do not use any mcp__firecrawl__ tool. Do not touch other pages.

Return ONLY this JSON:
{"slug": "appointment-default", "changed": ["one line per change made"], "gateChanged": <true|false>, "summary": "<final frontmatter summary>", "gate": "<final frontmatter gate>", "words": <body word count>, "flags": ["anything the editor should look at"]}
