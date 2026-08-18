You are drafting ONE public web page for the New Bill of Rights Foundation site: the page for a CANDIDATE amendment category — neither accepted nor rejected; waiting on evidence. Repo: /Users/michaelhamilton/Documents/newbillofrights. Today is 2026-08-18.

CATEGORY: Age limits for the judiciary and Congress
SOURCE MEMO (the only source of facts and URLs for this page): /Users/michaelhamilton/Documents/newbillofrights/research/candidates/AGE_LIMITS_CANDIDATE.md
OUTPUT FILE (overwrite the placeholder; touch nothing else): /Users/michaelhamilton/Documents/newbillofrights/site/src/content/candidates/age-limits.mdx

The memo agent's summary of the memo (use it to pick the decisive number and the gate; the memo itself governs if they differ):
{"slug": "age-limits", "file": "research/candidates/AGE_LIMITS_CANDIDATE.md", "candidateSince": "2026-08-06", "words": 4116,
 "status": "78% (Democrats) on a maximum age limit for candidates for the House and Senate, NPR/PBS News/Marist April 2026 — Strong, the highest floor of any candidate category — but the floor is measured on the concept of a cap and has never been measured on a number, the one piece of the amendment that has to be written; recommendation: fold into Target 2 (Term Limits) as a companion clause setting a judicial retirement age, and hold the congressional half pending a cutoff-specific poll.",
 "floor": 78, "floorNote": "78% D, max age limit for House/Senate candidates, NPR/PBS News/Marist Apr 27–30 2026 (80% overall, 83% R, 79% I). Judicial half floors separately at 68% R (Pew July 2023, max age for SCOTUS justices, 82% D).", "verdict": "Strong",
 "decisiveNumber": {"proposal": "Maximum age limit for congressional candidates (Marist 2026)", "dem": 78, "rep": 83, "ind": 79, "overall": 80, "pollster": "NPR/PBS News/Marist", "year": 2026, "url": "https://maristpoll.marist.edu/wp-content/uploads/2026/05/NPR_PBS-News_Marist-Poll_USA-NOS-and-Tables_202605011058.pdf"},
 "secondNumber": {"proposal": "Maximum age for Supreme Court justices (Pew 2023)", "dem": 82, "rep": 68, "overall": 74},
 "openTests": ["existential (congressional half)", "depth (no poll asks favor/oppose on a named cutoff)", "unpolled parameter — the specific age has no party breakdown", "regime coding (presidential variant: R most supportive 2022–23, least 2025)"],
 "gate": "Strong on the concept; the number unpolled",
 "framingsThatClear": ["Max age for House/Senate candidates — 78% D (83% R) — Marist Apr 2026", "Max age for federal elected officials — 76% D (82% R) — Pew July 2023", "CBS/YouGov Sept 2023 — 76% D (79% R)", "Max age for SCOTUS justices — 68% R (82% D) — Pew July 2023", "Mandatory retirement for justices — 62% R (67% D) — Reuters/Ipsos Nov 2022", "Max age to serve as president — 64% R (88% D) — YouGov March 2025"],
 "wouldMoveIn": "An independent poll with party crosstabs asking forward-looking favor/oppose on the operative clause with the age named and incumbents grandfathered ('no person who has reached 75 may be elected to the House or Senate'), clearing 60% in both parties and repeated at 70 and 80, with the 'voters should be free to elect anyone they judge capable' counter-argument in the same sample.",
 "wouldMoveOut": "If the named-age wording drops either party below 45% — depth test as with balanced budget; or a founder judgment that leader age is a preference rather than a threat to the country's future — congressional half fails §5.1 regardless of polling.",
 "recommendation": "fold into Target 2 (Term Limits) — add a judicial retirement-age clause as a backstop to the 18-year term (68% R / 82% D, five certified ballot results where voters of both leans refused to loosen exactly this rule, strongest why-an-amendment answer), and hold the congressional half gated on a named-age poll clearing 60% both parties.",
 "notes": "Two proposals with different evidence: congressional floors at 78% D, judicial at 68% R — parties swap places; the site should not quote one 'the' floor. Every party breakdown is on the CONCEPT; the NUMBER has never been polled with a party split (plurality 70 = 45% of supporters; presidential 79-or-younger splits 34R/75D). Ballot record judicial-only: HI, LA, OR, WY voters refused to loosen judicial retirement ages by 17–46 pts; PA raise 51.09–48.91. Corpus discrepancies: Pew fieldwork July 10–16 2023 (Oct 4 = publication); '67% AP-NORC July 2023' for max age is actually the July 2022 TERM-LIMITS figure (82D/57R); YouGov presidential fieldwork Mar 17–19 2025; '~10 pts drop when cutoff chosen' unsupported in magnitude."}

PAGE NOTE: two proposals with different evidence — congressional (Marist Apr 2026: 78 D / 83 R / 79 I) and judicial (Pew July 2023: 82 D / 68 R). Use two charts, one per half; do not quote a single 'the' floor. Say plainly that every party breakdown is on the concept of a cap and the specific age has never been polled with a party split; note the judicial half's overlap with the Term Limits amendment (/amendments/term-limits).

## Read first (you must actually read them)

1. /Users/michaelhamilton/Documents/newbillofrights/COPY_VOICE_GUIDE.md — hard rules for all public copy.
2. /Users/michaelhamilton/Documents/newbillofrights/research/MISSION.md — the full-spectrum test and the bipartisan floor.
3. The source memo above, in full.
4. The reference implementations for voice and footnote mechanics: /Users/michaelhamilton/Documents/newbillofrights/site/src/content/rejected/qualified-immunity.mdx (a finished rejected-category page — same mechanics, same register; your page differs only in that the category is open, not closed) and the "Why it can pass" section of /Users/michaelhamilton/Documents/newbillofrights/site/src/content/amendments/pardon-reform.mdx.
5. The current placeholder at the output path (keep its frontmatter keys; you will fill them in).

## Hard rules

- **Facts and URLs come only from the memo.** Do not add any fact, number, or URL that is not in the memo. Every factual claim gets a GFM footnote `[^key]` whose definition at the end of the file reads `[^key]: <fact/citation> — [Source label](URL).` — facts and sources only; never narrate a correction or a disagreement between sources in a footnote. Every URL must appear in the memo verbatim (an integrity script checks this).
- **Every polling number carries party breakdown + pollster + year** in the prose ("46% of Republicans and 80% of Democrats (Pew Research Center, 2024)"); write "(no party breakdown published)" when the source has none. Advocacy-commissioned polls are labeled as such in the prose.
- **Nonpartisan discipline is the whole job on this page.** State the evidence and the tests; never a view on the merits of the issue. **The page does not publish the memo's recommendation** (accept / fold / hold / reject) — that is an internal recommendation to the founder, who decides. The page says where the category stands and what would move it, in either direction. Do not write "we recommend" or "we expect"; do not predict the outcome. Describe each party's position with the pollster's own wording, symmetrically. Never name a current or recent officeholder in prose (names may appear inside footnote citations only). No "populist / elites / establishment / woke / radical / weaponized"; ballot results are "wide margins," never "landslides." Do not use contested labels for positions (write "a constitutional right to abortion" / "restrictions on abortion," "voter identification requirements" / "expanded ballot access," etc.).
- **Voice:** research institution, not campaign. Plain English with gravitas, short declarative sentences, at most one metaphor. Hedge to the evidence ("evidence that," "has historically"). "We" only for the foundation's decisions and measurements ("we rejected," "we measured"), never for predictions or moral verdicts. Do not exhort.
- **House terms:** "the full-spectrum test," "the bipartisan floor" (the lower of the two parties' support), "clears the bar" is fine. Verdict words are Strong (floor ≥ 60%), Moderate (45–59), Weak (< 45), Unpolled.
- Length: 550–850 words of body prose (excluding footnotes). Every sentence load-bearing.

## Page structure (fixed; use these exact H2 headings in this order)

```
## The proposal
## The evidence
## Where it stands
## Framings we tested
## What would move it
```

- **The proposal** — the idea as commonly framed as a constitutional amendment, and its main variants, in 1 short paragraph. Do not name contributors.
- **The evidence** — the best available polling with party breakdowns (independent pollsters first, ballot results and roll-call votes where they exist, advocacy polls flagged, proxies labeled as proxies), 1–3 paragraphs and/or a short bulleted list. Where the memo identifies a single decisive poll with Democratic and Republican numbers, render it as a chart directly after the first paragraph of this section:
  `<FullSpectrumChart proposal="<proposal wording> — <Pollster>, <year>" support={{ dem: N, rep: N, ind: N }} />` (omit `ind` if not published). The chart labels the floor automatically. If no decisive poll exists (an unpolled candidate, or one held on a non-polling test), omit the chart and say plainly that the proposal has not been polled with a party breakdown, and what was searched. If a memo gives two gate results (e.g., two jurisdictions), you may use two charts.
- **Where it stands** — the bipartisan floor and verdict (or "unpolled"), and which tests it has cleared, which it has failed or is at risk on, and which are open — in plain English (high topline / low floor; depth; staleness; support flips with who holds power; framing dependency; abuse-vs-remedy gap; the existential-problem test; the symmetry test; the why-an-amendment test). Name only the ones that apply, with the numbers that show it. If part of the idea already lives in one of our amendments, say which and link it (`/amendments/<slug>`), and confine the rest of the page to the remainder.
- **Framings we tested** — the alternative framings and their numbers, and plainly whether any clears the bar honestly (and if one does, why it does or does not resolve the category — e.g., it is a different proposal wearing the name, or it lives in a target amendment already).
- **What would move it** — the specific evidence that would move the category in (a named poll wording — both-parties, forward-looking, mechanism-specific — and the floor it must clear; or a ballot result / roll-call pattern) and what would move it out (the result that would make it a rejection, and the test it would fail). One short paragraph or two short ones. Even-handed: both directions, no prediction.

## Frontmatter (fill in; keep every key)

```
---
title: <title as in the placeholder>
order: <as in the placeholder>
candidateSince: <as in the placeholder>
gate: <2–6 words naming what it is waiting on, e.g. "Unpolled: remedy wording" · "Strong floor; existential test open" · "Regime-coded" · "Two jurisdictions, two results" · "Companion clause; unpolled">
summary: <one sentence, 20–35 words, for the index page: where it stands and what it is waiting on, with the decisive number if there is one>
memo: <as in the placeholder>
status: draft
---
```

Keep the `import FullSpectrumChart from '../../components/FullSpectrumChart.astro';` line after the frontmatter even if the chart is not used.

## Return value (your final message must be ONLY this JSON)

{"slug": "age-limits", "words": <body word count>, "footnotes": <count>, "chart": <true|false>, "gate": "<as written>", "summary": "<as written>", "flags": ["<anything the editor should look at: a claim you were unsure how to phrase neutrally, a memo figure that looked inconsistent, etc.>"]}
