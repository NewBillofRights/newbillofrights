You are drafting ONE public web page for the New Bill of Rights Foundation site: the page for a REJECTED amendment category. Repo: /Users/michaelhamilton/Documents/newbillofrights. Today is 2026-08-17.

CATEGORY: Electoral College & Presidential Elections
SOURCE MEMO (the only source of facts and URLs for this page): /Users/michaelhamilton/Documents/newbillofrights/research/rejected/ELECTORAL_COLLEGE_REJECTED.md
OUTPUT FILE (overwrite the placeholder; touch nothing else): /Users/michaelhamilton/Documents/newbillofrights/site/src/content/rejected/electoral-college.mdx

The memo agent's summary of the memo (use it to pick the decisive number and the failed test; the memo itself governs if they differ):
{"slug": "electoral-college", "verdict": "46% (Republicans) on direct popular vote, Pew Aug–Sep 2024 — and 26–43% R on every poll that uses amendment wording — fails high-topline/low-floor and incumbent/regime coding — path back: R ≥ 55% for a national-popular-vote amendment in an independent poll, sustained across an election in which the other party benefits from the Electoral College.", "floor": 46, "floorNote": "46% R, replace Electoral College with national popular vote ('change the current system' wording), Pew Aug 26–Sep 2, 2024 (n=9,720) — borderline Moderate/Weak; amendment-worded independent polls are Weak: 32% R (Gallup Sept 2024), 26% R (Economist/YouGov Dec 2024), 43% R (Economist/YouGov June 2026)", "decisiveNumber": {"proposal": "Direct popular vote for president (Pew, Aug–Sep 2024)", "dem": 80, "rep": 46, "ind": null, "overall": 63, "pollster": "Pew Research Center", "year": 2024, "url": "https://www.pewresearch.org/short-reads/2024/09/25/majority-of-americans-continue-to-favor-moving-away-from-electoral-college/"}, "failedTests": ["high-topline/low-floor", "incumbent/regime coding", "framing dependency (no amendment-worded framing clears 45% R)", "symmetry (both parties evaluate the rule by who won last)"], "framingsThatClear": [], "pathBack": "Reopen if an independent pollster shows ≥55% of Republicans favoring an amendment to elect the president by national popular vote in head-to-head wording, holding in a poll fielded after a presidential election the Democratic nominee won; re-check after 2028 since R support has been rising (Gallup 23→32, Pew 27→46, Economist/YouGov 26→43).", "notes": "The Pew 46% R sits at the bottom edge of Moderate on the scale, so state the verdict as borderline Moderate/Weak and rest the rejection on the amendment-worded polls (all Weak) plus regime coding — Gallup's by-party series (R 53% in 2011 → 17% Nov 2016 → 32% 2024; R 70% / D 66% in the 1960s–80s) is the cleanest evidence that support tracks who last won without the popular vote. State that symmetrically (both parties' numbers have moved with outcomes). NPV compact status: 18 states + DC, 222 EVs (48 short) as of April 2026."}


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

{"slug": "electoral-college", "words": <body word count>, "footnotes": <count>, "chart": <true|false>, "failedTest": "<as written>", "summary": "<as written>", "flags": ["<anything the editor should look at: a claim you were unsure how to phrase neutrally, a memo figure that looked inconsistent, etc.>"]}
