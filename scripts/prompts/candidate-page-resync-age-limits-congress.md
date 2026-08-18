You are revising ONE candidate page of the New Bill of Rights Foundation site after a founder decision. Repo: /Users/michaelhamilton/Documents/newbillofrights. Today is 2026-08-18.

PAGE (edit only this file): site/src/content/candidates/age-limits.mdx
MEMO (only source of facts/URLs): research/candidates/AGE_LIMITS_CANDIDATE.md (note its new header line) — plus, for the fold, research/TERM_LIMITS_RESEARCH.md section "Fold-in (2026-08-18)" and research/PROPOSED_AMENDMENTS.md "## 2. Term Limits" (Section 3 is the new judicial retirement age).

The decision: the **judicial** half (a retirement age for justices) is now part of the Term Limits amendment (Section 3: no exercise of the judicial power after the calendar year in which a judge turns 75, or an earlier age Congress sets for judges below the Supreme Court; sitting judges exempt). The **congressional** half stays a candidate.

Read scripts/prompts/candidate-page-prompt.md (rules; the fixed five sections; band 700–1,100 words) and COPY_VOICE_GUIDE.md. Then rewrite the page so that:
- frontmatter: title "Age limits for Congress"; gate e.g. "Concept Strong; named age unpolled"; summary about the congressional half only (78% D / 83% R on the concept, Marist 2026; the number never polled by party) with a clause noting the judicial retirement age now sits in the Term Limits amendment; keep order/candidateSince/memo/status.
- The proposal: the congressional cap only; one sentence + link that the judicial retirement age was accepted into the Term Limits amendment (/amendments/term-limits) on 2026-08-18.
- The evidence: congressional evidence (Marist 2026, Pew 2023, CBS/YouGov 2023, YouGov 2025 presidential-cap regime coding as it bears on the concept-vs-number gap); ONE chart (Marist 2026: 78 D / 83 R / 79 I). Drop the judicial chart and judicial ballot results (they belong to the amendment page now) — one sentence may point there.
- Where it stands / Framings / What would move it: congressional only (the named-age poll wording from memo §5, thresholds at 70/75/80, the "voters should be free to elect anyone" counter-argument arm; what would move it out).
- Every URL must appear in the memo or TERM_LIMITS_RESEARCH.md; run `node scripts/check-site.mjs`.
Do not use Firecrawl. Return ONLY: {"slug":"age-limits","words":<n>,"footnotes":<n>,"summary":"...","gate":"...","flags":["..."]}
