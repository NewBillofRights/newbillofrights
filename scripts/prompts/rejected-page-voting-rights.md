You are drafting ONE public web page for the New Bill of Rights Foundation site: the page for a REJECTED amendment category. Repo: /Users/michaelhamilton/Documents/newbillofrights. Today is 2026-08-17.

CATEGORY: Voting Rights
SOURCE MEMO (the only source of facts and URLs for this page): /Users/michaelhamilton/Documents/newbillofrights/research/rejected/VOTING_RIGHTS_REJECTED.md
OUTPUT FILE (overwrite the placeholder; touch nothing else): /Users/michaelhamilton/Documents/newbillofrights/site/src/content/rejected/voting-rights.mdx

The memo agent's summary of the memo (use it to pick the decisive number and the failed test; the memo itself governs if they differ):
{"slug": "voting-rights", "verdict": "32% (Republicans) on no-excuse mail voting, Pew August 2025 — Weak; the affirmative right-to-vote amendment itself is unpolled — fails high-topline/low-floor on every access mechanism and every verification mechanism except photo ID and early in-person voting, is regime/salience-coded (Democratic support for photo ID fell from 71% to 51% across the 2026 proof-of-citizenship legislative fight), and fails the symmetry test because each party's package is written against the other's — path back: poll one paired proposal (an ID guarantee and an access guarantee in the same clause) and clear a 60% floor in both parties.", "floor": 32, "floorNote": "32% R, allow any voter to vote by mail if they want to (no-excuse mail voting), Pew Aug 4–10, 2025; mirror-image verification floor is 37% D on proof of citizenship to register, NPR/PBS/Marist Apr 27–30, 2026; the right-to-vote amendment text itself is unpolled", "decisiveNumber": {"proposal": "No-excuse mail voting for any voter (Pew, Aug 2025)", "dem": 83, "rep": 32, "ind": null, "overall": 58, "pollster": "Pew Research Center", "year": 2025, "url": "https://www.pewresearch.org/politics/2025/08/22/majority-of-americans-continue-to-back-expanded-early-voting-voting-by-mail-voter-id/"}, "failedTests": ["high-topline/low-floor", "incumbent/regime coding (salience-driven swings: R mail voting 49→32 after 2020; D photo ID 71→51 during the 2026 proof-of-citizenship fight)", "framing dependency (framings that clear are mechanisms neither party's amendment would draft; amendment framing costs 13 pts of D support on photo ID)", "symmetry / veil-of-ignorance — each party's package is a remedy for the other's conduct; every federal package 2021–2026 was a party-line vote"], "framingsThatClear": ["Election Day national holiday — 74% R / 76% D — Pew Aug 2025 (statutory administration)", "Paper backup for electronic voting machines — 87% R / 82% D — Pew Aug 2025 (statutory)", "Early in-person voting for at least two weeks — 71% R / 89% D — Pew Aug 2025; 57% R on Gallup's looser early-voting item Oct 2024", "Photo ID to vote as policy — 95% R / 71% D Pew Aug 2025 / 67% D Gallup Oct 2024, but 51% D Marist Apr 2026 and 58% D as an amendment (Cato/Morning Consult June 2026) — Strong→Moderate and unstable"], "pathBack": "Commission an independent poll of a single paired proposal — an affirmative right to vote plus a free government-photo-ID requirement plus a guaranteed early-in-person-voting window and paper record — tested at low salience and re-tested after a change in House control; reopen if the lower party is ≥60% with an under-20-point gap in two independent polls, or if a bipartisan-cosponsored joint resolution with that text gets a hearing, or a swing-state ballot measure pairing a real ID requirement with an access guarantee passes at 60%+.", "notes": "The honest finding: individual elements clear (photo ID as policy, early voting, holiday, paper trail) while every package either party has actually drafted is party-line, and a paired ID-guarantee + access-guarantee proposal has never been polled as one item. A good page structure: chart the decisive access number (mail voting 83 D / 32 R) AND mention the mirror-image verification number (proof of citizenship 37% D, Marist 2026) in the same paragraph so the page reads as symmetric — both parties have a Weak-floor mechanism. Be scrupulously even-handed here; this is one of the most partisan-live topics on the site."}


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

{"slug": "voting-rights", "words": <body word count>, "footnotes": <count>, "chart": <true|false>, "failedTest": "<as written>", "summary": "<as written>", "flags": ["<anything the editor should look at: a claim you were unsure how to phrase neutrally, a memo figure that looked inconsistent, etc.>"]}
