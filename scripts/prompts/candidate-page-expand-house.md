You are drafting ONE public web page for the New Bill of Rights Foundation site: the page for a CANDIDATE amendment category — neither accepted nor rejected; waiting on evidence. Repo: /Users/michaelhamilton/Documents/newbillofrights. Today is 2026-08-18.

CATEGORY: Expanding the House of Representatives
SOURCE MEMO (the only source of facts and URLs for this page): /Users/michaelhamilton/Documents/newbillofrights/research/candidates/HOUSE_EXPANSION_CANDIDATE.md
OUTPUT FILE (overwrite the placeholder; touch nothing else): /Users/michaelhamilton/Documents/newbillofrights/site/src/content/candidates/expand-house.mdx

The memo agent's summary of the memo (use it to pick the decisive number and the gate; the memo itself governs if they differ):
{"slug": "expand-house", "file": "research/candidates/HOUSE_EXPANSION_CANDIDATE.md", "candidateSince": "2026-08-12", "words": 3453,
 "status": "23% (Republicans) on increasing the size of the House, Pew July 2023 — Weak, and the only national reading with a party breakdown; a majority of both parties chose 'keep it the same'; the newest number (54%, June–July 2026) is advocacy-commissioned with no party split; why-an-amendment is weak because 435 is statutory — recommendation: hold (gate: independent poll of Wyoming-Rule / cube-root framings clearing 45% R, plus statutory repeal of the 1929 cap for sequencing).",
 "floor": 23, "floorNote": "23% R (35% D) favor increasing the size of the House; 53% overall keep same, 15% decrease — Pew ATP W130, July 10–16 2023, n=8,480", "verdict": "Weak",
 "decisiveNumber": {"proposal": "Increase the size of the House beyond 435 (Pew 2023)", "dem": 35, "rep": 23, "ind": null, "overall": 29, "pollster": "Pew Research Center", "year": 2023, "url": "https://www.pewresearch.org/politics/2023/09/19/how-americans-view-proposals-to-change-the-political-system/"},
 "openTests": ["why-an-amendment (weak — statutory since 1911/1929)", "existential-problem (open)", "framing dependency (named framings never polled)", "staleness (2023, 2018)", "depth"],
 "gate": "Weak floor; named framings unpolled",
 "wouldMoveIn": "An independent national poll with party crosstabs testing a population-tied formula (Wyoming Rule or cube root) plus a costs-named follow-up, returning R floor 45%+ (Moderate) or 60%+ both parties — or passage of / serious cross-party vote on a statutory enlargement.",
 "wouldMoveOut": "A well-formed independent poll of the Wyoming-Rule or cube-root mechanism still returning R below 45% — rejection on the floor; or judging that a statutorily changeable number does not belong in the Constitution before the statute has been tried — statutory list.",
 "recommendation": "hold — Weak 23% R floor and weak why-an-amendment answer, but the named framings have never been polled and the symmetry test passes unusually cleanly (American Academy simulation: expansion partisan-neutral); worth one poll before closing.",
 "notes": "54% Fix Our House/New America/Verasight (June–July 2026) is advocacy-commissioned, no party split, two-way form vs Pew's three-way — non-comparable, not a trend. H.J.Res. 186 (May 14, 2026, Issa) sets a Dec 31 2026 deadline that would EXTINGUISH the pending Congressional Apportionment Amendment, not revive it — the 'Article the First' story must not be written as if a live bill would enact it. POLLING_RESEARCH.md has no House-expansion row; suggested: Pew 2023 29% / 23R / 35D / floor 23 / Weak. REDDIT doc's 'strongest new candidate' reflects thread scoring, not polling."}

PAGE NOTE: chart Pew 2023 (35 D / 23 R). Do NOT write the 'Article the First' pedigree as if a live bill would revive it — H.J.Res. 186 (2026) sets a deadline that would extinguish the pending amendment.

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

{"slug": "expand-house", "words": <body word count>, "footnotes": <count>, "chart": <true|false>, "gate": "<as written>", "summary": "<as written>", "flags": ["<anything the editor should look at: a claim you were unsure how to phrase neutrally, a memo figure that looked inconsistent, etc.>"]}
