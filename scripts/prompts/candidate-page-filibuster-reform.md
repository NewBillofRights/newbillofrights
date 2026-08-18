You are drafting ONE public web page for the New Bill of Rights Foundation site: the page for a CANDIDATE amendment category — neither accepted nor rejected; waiting on evidence. Repo: /Users/michaelhamilton/Documents/newbillofrights. Today is 2026-08-18.

CATEGORY: Filibuster reform
SOURCE MEMO (the only source of facts and URLs for this page): /Users/michaelhamilton/Documents/newbillofrights/research/candidates/FILIBUSTER_REFORM_CANDIDATE.md
OUTPUT FILE (overwrite the placeholder; touch nothing else): /Users/michaelhamilton/Documents/newbillofrights/site/src/content/candidates/filibuster-reform.mdx

The memo agent's summary of the memo (use it to pick the decisive number and the gate; the memo itself governs if they differ):
{"slug": "filibuster-reform", "file": "research/candidates/FILIBUSTER_REFORM_CANDIDATE.md", "candidateSince": "2026-08-06", "words": 3450,
 "status": "8% (Republicans) on 'get rid of the filibuster entirely,' Monmouth Jan 2022, against 30% of Democrats — and the same measure read 10% R / 30% D in April 2021 while a Democratic majority held the chamber — Weak, and the floor is regime-coded rather than stable — recommendation: hold (gate: a forward-looking, veil-of-ignorance poll of a threshold rule — not 'keep or kill' — showing ≥45% in both parties).",
 "floor": 8, "floorNote": "8% R, 'get rid of the filibuster entirely' (vs 30% D), Monmouth Jan 2022; Apr 2021 10% R / 30% D — both under a Democratic Senate majority", "verdict": "Weak",
 "decisiveNumber": {"proposal": "Get rid of the filibuster entirely (Monmouth, 2022)", "dem": 30, "rep": 8, "ind": 16, "overall": 17, "pollster": "Monmouth University", "year": 2022, "url": "https://www.monmouth.edu/polling-institute/reports/monmouthpoll_us_012722/"},
 "openTests": ["existential", "symmetry (fails as ordinarily framed)", "regime coding", "staleness (no independent party-split poll since Jan 2022)", "inversion framing unpolled"],
 "gate": "Regime-coded; both directions fail",
 "framingsThatClear": ["Restore the 'talking' filibuster — 54% D floor (57% R) — Economist/YouGov March 2021 — but a Senate rules change, not an amendment; collides with 'principles not machinery'"],
 "wouldMoveIn": "A two-wave, forward-looking veil-of-ignorance poll of a threshold rule (naming neither party nor any pending bill), including the inversion form (supermajority to kill rather than to pass), returning ≥45% in both parties across waves fielded under different Senate majorities — or a rules-change vote drawing majorities of both caucuses.",
 "wouldMoveOut": "A re-ask under the current Republican majority returning Democratic elimination support above 60% and Republican in the teens — mirroring 2021–22 with parties exchanged — measured regime-coding, rejection on symmetry.",
 "recommendation": "hold — 8% R floor is the corpus's weakest and symmetry fails as ordinarily framed, but the only structurally symmetric design (inversion) has never been drafted or polled and the existential argument is open; if moved now, the clean rejection is on symmetry, not polling.",
 "notes": "BOTH directions fail: 8% R want elimination, 19% D want to keep it as is. Strongest evidence is roll calls: two identical 48–52 votes on the decision of the chair (Nov 21 2013; Apr 6 2017) with parties exchanged, plus Jan 19 2022 52–48 — page should lead with that. Corpus discrepancies: Monmouth Apr 2021 eliminate = 19% not 16% (16 is independents); Navigator item is March 7–11 2024 not Jan 2026; Navigator filibuster finding is 60% positive impact (74% is 'system dysfunctional')."}

PAGE NOTE: chart Monmouth Jan 2022 (30 D / 8 R / 16 I) 'get rid of the filibuster entirely'; lead the evidence with the paired 48–52 roll calls (Nov 2013 / Apr 2017, parties exchanged) as the memo suggests; both directions fail — say so.

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

{"slug": "filibuster-reform", "words": <body word count>, "footnotes": <count>, "chart": <true|false>, "gate": "<as written>", "summary": "<as written>", "flags": ["<anything the editor should look at: a claim you were unsure how to phrase neutrally, a memo figure that looked inconsistent, etc.>"]}
