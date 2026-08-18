You are drafting ONE public web page for the New Bill of Rights Foundation site: the page for a REJECTED amendment category. Repo: /Users/michaelhamilton/Documents/newbillofrights. Today is 2026-08-17.

CATEGORY: Balanced Budget
SOURCE MEMO (the only source of facts and URLs for this page): /Users/michaelhamilton/Documents/newbillofrights/research/rejected/BALANCED_BUDGET_REJECTED.md
OUTPUT FILE (overwrite the placeholder; touch nothing else): /Users/michaelhamilton/Documents/newbillofrights/site/src/content/rejected/balanced-budget.mdx

The memo agent's summary of the memo (use it to pick the decisive number and the failed test; the memo itself governs if they differ):
{"slug": "balanced-budget", "verdict": "68% (Democrats) on the abstract question, Economist/YouGov June 2026 — Strong on paper, but the category fails the depth test: the only trade-off experiment on record (Fox News, June 2011) drops support from 72% to 31% overall (79% of Democrats opposed; Republicans split 47/46) once entitlement cuts are specified, and the coalition splits asymmetrically (Democrats on benefit cuts, Republicans on taxes) — path back is a modern trade-off poll, mechanisms named, clearing ~60% in both parties.", "floor": 68, "floorNote": "68% D on 'require the federal budget to be balanced each year' (unconditioned), Economist/YouGov June 13-15, 2026 (84R/68D/65I, 72% overall). This abstract floor is Strong but is not the operative number: under the entitlement-cut condition (Fox News June 2011) support is 31% overall, Democrats 79% opposed (favor share not published), Republicans 47/46 — Weak.", "decisiveNumber": {"proposal": "Require the federal budget to be balanced each year — Economist/YouGov, June 2026 (abstract question)", "dem": 68, "rep": 84, "ind": 65, "overall": 72, "pollster": "Economist/YouGov", "year": 2026, "url": "SEE MEMO for the Economist/YouGov June 2026 URL"}, "failedTests": ["depth (trade-off collapse)", "asymmetric coalition / framing dependency (D defect on benefit cuts, R on taxes)", "principles-not-machinery (a working rule is thresholds, waivers, enforcement)"], "framingsThatClear": ["Unconditioned 'require the federal budget to be balanced each year' — 84% R / 68% D — Economist/YouGov June 2026 (measures outcome approval, not the rule)", "Unconditioned 'require a balanced federal budget' — 77% R / 69% D — Cato/Morning Consult June 2026", "'Balanced budget within 10 years' — 83% R / 79% D — Harvard CAPS/Harris July 2023 (forced-choice)"], "pathBack": "An independent split-sample poll of a balanced-budget amendment with the mechanism named (specified benefit cuts and/or tax increases, supermajority waiver) clearing ~60% in both parties, with the Democratic number surviving the benefit-cut condition and the Republican number surviving the tax condition.", "notes": "The abstract number is Strong and stable across administrations (82R/62D in 2011, 84R/68D in 2026), so the page must say the rejection rests on the depth test, not on a low abstract floor. CHART: chart the abstract Economist/YouGov June 2026 number (84 R / 68 D / 65 I) with a caption that says 'abstract question' — and immediately follow with the Fox 2011 collapse in prose (72% → 31% overall when Medicare/Social Security cuts are specified; 79% of Democrats opposed; Republicans 47/46; 62% oppose if it meant major tax increases). Do not chart the Fox number (no Democratic favor share published). Pair with the modern program-level corroboration the memo cites (Pew on Social Security, AP-NORC, KFF) so the page shows the depth test with current data. Note the corpus discrepancy fixes are in the memo; use the memo's numbers (e.g., Cato/Morning Consult June 2026 has a party split: 77R/69D/62I)."}


## Read first (you must actually read them)

1. /Users/michaelhamilton/Documents/newbillofrights/COPY_VOICE_GUIDE.md — hard rules for all public copy.
2. /Users/michaelhamilton/Documents/newbillofrights/research/MISSION.md — the full-spectrum test and the bipartisan floor.
3. The source memo above, in full.
4. The reference implementation for voice and footnote mechanics: /Users/michaelhamilton/Documents/newbillofrights/site/src/content/amendments/pardon-reform.mdx (read the "Why it can pass" and "What we left out" sections and the footnote block at the end).
5. The current placeholder at the output path (keep its frontmatter keys; you will fill them in).

## Hard rules

- **Facts and URLs come only from the memo.** Do not add any fact, number, or URL that is not in the memo. Every factual claim gets a GFM footnote `[^key]` whose definition at the end of the file reads `[^key]: <fact/citation> — [Source label](URL).` — facts and sources only; never narrate a correction or a disagreement between sources in a footnote. Every URL must appear in the memo verbatim (an integrity script checks this).
- **Every polling number carries party breakdown + pollster + year** in the prose ("46% of Republicans and 80% of Democrats (Pew Research Center, 2024)"); write "(no party breakdown published)" when the source has none. Advocacy-commissioned polls are labeled as such in the prose.
- **Nonpartisan discipline is the whole job on this page.** State the evidence and the test; never a view on the merits of the issue. Describe each party's position with the pollster's own wording, symmetrically. Never name a current or recent officeholder in prose (names may appear inside footnote citations only). No "populist / elites / establishment / woke / radical / weaponized"; ballot results are "wide margins," never "landslides." Do not use contested labels for positions (write "a constitutional right to abortion" / "restrictions on abortion," "voter identification requirements" / "expanded ballot access," etc.).
- **Voice:** research institution, not campaign. Plain English with gravitas, short declarative sentences, at most one metaphor. Hedge to the evidence ("evidence that," "has historically"). "We" only for the foundation's decisions and measurements ("we rejected," "we measured"), never for predictions or moral verdicts. Do not exhort.
- **House terms:** "the full-spectrum test," "the bipartisan floor" (the lower of the two parties' support), "clears the bar" is fine. Verdict words are Strong (floor ≥ 60%), Moderate (45–59), Weak (< 45), Unpolled.
- Length: 550–850 words of body prose (excluding footnotes). Every sentence load-bearing.

## Page structure (fixed; use these exact H2 headings in this order)

```
## The proposal
## The evidence
## The test it failed
## Framings we tested
## The path back
```

- **The proposal** — the idea as commonly framed as a constitutional amendment, and its main variants, in 1 short paragraph. Do not name contributors.
- **The evidence** — the best available polling with party breakdowns (independent pollsters first, ballot results and roll-call votes where they exist, advocacy polls flagged), 1–3 paragraphs and/or a short bulleted list. Where the memo identifies a single decisive poll with Democratic and Republican numbers, render it as a chart directly after the first paragraph of this section:
  `<FullSpectrumChart proposal="<proposal wording> — <Pollster>, <year>" support={{ dem: N, rep: N, ind: N }} />` (omit `ind` if not published). The chart labels the floor automatically. If no decisive poll exists (e.g., a category rejected on a non-polling test), omit the chart.
- **The test it failed** — the bipartisan floor and verdict, and the failure mode(s) in plain English (high topline / low floor; depth — support collapses when trade-offs are named; staleness; support flips with who holds power; framing dependency; abuse-vs-remedy gap; the existential-problem test; the symmetry test; the why-an-amendment test). Name only the ones that apply, with the numbers that show it.
- **Framings we tested** — the alternative framings and their numbers, and plainly whether any clears the bar honestly (and if one does, why it does or does not rescue the category — e.g., it is a different proposal wearing the name, or it lives in a target amendment already).
- **The path back** — the specific evidence that would reopen the category, or "none identified" and why. One short paragraph.

## Frontmatter (fill in; keep every key)

```
---
title: <title as in the placeholder>
order: <as in the placeholder>
rejectedOn: "2026-08-06"
failedTest: <2–6 words naming the failed test, e.g. "High topline, low floor" · "Depth: collapses under trade-offs" · "Not bipartisan; stale data" · "Existential test" · "Not popular; statutory">
summary: <one sentence, 20–35 words, for the index page: the finding and the test it failed, with the decisive number if there is one>
memo: <as in the placeholder>
status: draft
---
```

Keep the `import FullSpectrumChart from '../../components/FullSpectrumChart.astro';` line after the frontmatter even if the chart is not used.

## Return value (your final message must be ONLY this JSON)

{"slug": "balanced-budget", "words": <body word count>, "footnotes": <count>, "chart": <true|false>, "failedTest": "<as written>", "summary": "<as written>", "flags": ["<anything the editor should look at: a claim you were unsure how to phrase neutrally, a memo figure that looked inconsistent, etc.>"]}
