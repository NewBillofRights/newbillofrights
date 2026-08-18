You are drafting ONE public web page for the New Bill of Rights Foundation site: the page for a CANDIDATE amendment category — neither accepted nor rejected; waiting on evidence. Repo: /Users/michaelhamilton/Documents/newbillofrights. Today is 2026-08-18.

CATEGORY: Statehood for DC and Puerto Rico
SOURCE MEMO (the only source of facts and URLs for this page): /Users/michaelhamilton/Documents/newbillofrights/research/candidates/STATEHOOD_CANDIDATE.md
OUTPUT FILE (overwrite the placeholder; touch nothing else): /Users/michaelhamilton/Documents/newbillofrights/site/src/content/candidates/statehood.mdx

The memo agent's summary of the memo (use it to pick the decisive number and the gate; the memo itself governs if they differ):
{"slug": "statehood", "file": "research/candidates/STATEHOOD_CANDIDATE.md", "candidateSince": "2026-08-06", "words": 2412,
 "status": "DC 13% R (Yahoo/YouGov March 2021) — Weak; Puerto Rico 41% R (YouGov Oct 2024) — Weak, at the top of the band — neither jurisdiction clears the floor and, for Puerto Rico, the why-an-amendment test fails outright because admission is a statute — recommendation: reject DC (bipartisan floor) · reject PR as an amendment category (why-an-amendment), statutory route logged.",
 "floor": 13, "floorNote": "13% R, DC statehood, Yahoo/YouGov March 2021 (64% D); PR separate floor 41% R (YouGov Oct 2024, 79% D)", "verdict": "Weak",
 "decisiveNumber": {"proposal": "DC statehood (Yahoo/YouGov 2021)", "dem": 64, "rep": 13, "ind": 32, "overall": null, "pollster": "Yahoo News/YouGov", "year": 2021, "url": "https://yougov.com/en-us/articles/35011-democrats-support-washington-dc-statehood"},
 "secondNumber": {"proposal": "Puerto Rico statehood if PR votes for it (YouGov 2024)", "dem": 79, "rep": 41, "ind": 56, "overall": 59},
 "openTests": ["symmetry", "regime coding", "why-an-amendment (fails for PR, open for DC)", "existential-problem", "unpolled remedy: representation without statehood", "staleness (DC since 2021)"],
 "gate": "Weak floor; seat-math coded",
 "wouldMoveIn": "An independent 2026-or-later national poll in forward-looking both-parties wording finding ≥60% Republican support for the remedy — voting representation for DC residents, by statehood or by amendment without statehood — or a cross-party roll call on any DC representation measure.",
 "wouldMoveOut": "DC: three independent pollsters at 13–15% R, two House passages with zero Republican yeas, 208 of 208 cosponsors from one party; PR: out as an amendment regardless of polling because Article IV §3 makes admission a statute.",
 "recommendation": "reject — DC on floor + symmetry (13% R; only 39% D in Gallup 2019); PR as amendment category on why-an-amendment (Art. IV §3), move to statutory list; DC path back = 'representation without statehood', unpolled.",
 "notes": "Gallup June 2019 shows DC statehood at only 39% among Democrats. H.R. 51: 208 cosponsors all one party. Corpus discrepancies: Gallup PR fieldwork June 19–30 2019; DFP DC fieldwork Feb 19–22 2021; YouGov DC article publishes no overall figure (39% unsourced); PR 2024 plebiscite 58.61% of valid votes but ~49% of all ballots (14.34% blank)."}

PAGE NOTE: give two gate results (DC and Puerto Rico) with two charts — the DC number (Yahoo/YouGov 2021: 64 D / 13 R / 32 I) and the PR number (YouGov Oct 2024: 79 D / 41 R / 56 I) — and keep the two jurisdictions' tests separate throughout (DC fails on the floor; PR fails why-an-amendment because admission is a statute).

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

{"slug": "statehood", "words": <body word count>, "footnotes": <count>, "chart": <true|false>, "gate": "<as written>", "summary": "<as written>", "flags": ["<anything the editor should look at: a claim you were unsure how to phrase neutrally, a memo figure that looked inconsistent, etc.>"]}
