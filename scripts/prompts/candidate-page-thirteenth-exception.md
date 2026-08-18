You are drafting ONE public web page for the New Bill of Rights Foundation site: the page for a CANDIDATE amendment category — neither accepted nor rejected; waiting on evidence. Repo: /Users/michaelhamilton/Documents/newbillofrights. Today is 2026-08-18.

CATEGORY: Striking the 13th Amendment's exception clause
SOURCE MEMO (the only source of facts and URLs for this page): /Users/michaelhamilton/Documents/newbillofrights/research/candidates/THIRTEENTH_EXCEPTION_CANDIDATE.md
OUTPUT FILE (overwrite the placeholder; touch nothing else): /Users/michaelhamilton/Documents/newbillofrights/site/src/content/candidates/thirteenth-exception.mdx

The memo agent's summary of the memo (use it to pick the decisive number and the gate; the memo itself governs if they differ):
{"slug": "thirteenth-exception", "file": "research/candidates/THIRTEENTH_EXCEPTION_CANDIDATE.md", "candidateSince": "2026-08-12", "words": 2769,
 "status": "66% (Republicans) on a state ballot measure ensuring the constitution 'doesn't legalize slavery and involuntary servitude as punishments for crime,' YouGov October 2024 — Strong — held by the existential-problem test and a wording-sensitivity problem two defeats expose, not by the floor — recommendation: hold (gate: mechanism-specific national poll of the federal clause, plus a resolved answer on §5.1).",
 "floor": 66, "floorNote": "66% R (85% D / 69% I), state measure wording, YouGov Oct 23–25 2024 (n=1,139) — a state-measure proxy, not the federal clause", "verdict": "Strong",
 "decisiveNumber": {"proposal": "Remove slavery/involuntary servitude as punishment for crime (state measure, YouGov 2024)", "dem": 85, "rep": 66, "ind": 69, "overall": 73, "pollster": "YouGov", "year": 2024, "url": "https://d3nkl3psvxxpe9.cloudfront.net/documents/Ballot_Initiatives_poll_results.pdf"},
 "openTests": ["existential-problem", "framing dependency", "depth untested", "federal mechanism never polled"],
 "gate": "Strong floor; existential test open",
 "framingsThatClear": ["'Slavery' wording + work-programs savings clause — 66% R (YouGov 2024); 79.5% Tennessee 2022", "'Slavery' in ballot question — 60.6% Nevada 2024", "Single-issue red-state measures 68–80% (NE, UT, TN)"],
 "wouldMoveIn": "An independent national poll with party crosstabs asking the federal clause specifically — removal of the exception while preserving voluntary or paid prison work programs — clearing 60% R, ideally alongside a contested state campaign passing against organized opposition.",
 "wouldMoveOut": "A costs-named or contested-campaign version below 45% R (depth), or a settled judgment that the change is substantially declaratory with the operative fights remaining statutory (existential).",
 "recommendation": "hold — Strong and unusually clean floor (66% R, only 11% R opposition; four Republican-voting states at 61–80%; symmetry by construction; strongest why-an-amendment answer), but every national number is a state-measure proxy, the federal record shows zero Republican Senate cosponsors across two Congresses with House Republicans falling 11→5, and §5.1 is genuinely open — a mission-pillar question for the founder.",
 "notes": "Decisive find: YouGov Oct 2024 20-measure ballot battery item — only party-split national number on the mechanism; POLLING_RESEARCH.md lists this as unpolled and should be updated. R gap is uncertainty (23% not sure) not opposition (11%); ballot wording swings results up to 16 points on identical substance. Verified ballot: CO 2018 66.21; NE 2020 68.23; UT 2020 80.48; AL 2022 76.49 (bundled recompilation, not single-issue); TN 2022 79.53; VT 2022 88.71; OR 2022 55.59; NV 2024 60.60; CA Prop 6 2024 defeated 53.34% no; LA 2022 defeated (wording); CO 2016 near-miss."}

PAGE NOTE: chart YouGov Oct 2024 (85 D / 66 R / 69 I) with 'state ballot measure wording' in the caption. Ballot results are 'wide margins', never 'landslides'. Note Alabama 2022 was a bundled recompilation.

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

{"slug": "thirteenth-exception", "words": <body word count>, "footnotes": <count>, "chart": <true|false>, "gate": "<as written>", "summary": "<as written>", "flags": ["<anything the editor should look at: a claim you were unsure how to phrase neutrally, a memo figure that looked inconsistent, etc.>"]}
