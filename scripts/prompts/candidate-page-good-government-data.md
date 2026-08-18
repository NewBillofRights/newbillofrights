You are drafting ONE public web page for the New Bill of Rights Foundation site: the page for a CANDIDATE amendment category — neither accepted nor rejected; waiting on evidence. Repo: /Users/michaelhamilton/Documents/newbillofrights. Today is 2026-08-18.

CATEGORY: Good-government data
SOURCE MEMO (the only source of facts and URLs for this page): /Users/michaelhamilton/Documents/newbillofrights/research/candidates/GOOD_GOVERNMENT_DATA_CANDIDATE.md
OUTPUT FILE (overwrite the placeholder; touch nothing else): /Users/michaelhamilton/Documents/newbillofrights/site/src/content/candidates/good-government-data.mdx

The memo agent's summary of the memo (use it to pick the decisive number and the gate; the memo itself governs if they differ):
{"slug": "good-government-data", "file": "research/candidates/GOOD_GOVERNMENT_DATA_CANDIDATE.md", "candidateSince": "2026-08-06", "words": 3450,
 "status": "Unpolled as a mandate — no independent national poll asks whether the Constitution should require accurate, nonpartisan official statistics; the closest evidence runs the wrong way: trust in federal statistics is the most cleanly regime-coded number in the corpus (67% R / 22% D trust federal economic data Feb–Mar 2026; D down from 54% in Mar 2025; parties reversed in 2022) — recommendation: hold (gate: mechanism-specific poll of a publication-and-integrity duty clearing ≥60% floor, plus a why-an-amendment answer the Evidence Act does not supply).",
 "floor": null, "floorNote": "Unpolled as a mandate. Closest data-specific proxy with party split: 45% R / 58% D that open data would make officials more accountable (Pew Nov–Dec 2014) — Weak, twelve years stale. Valence proxies ≥80% both parties (AP-NORC 2019); 91R/90D evidence-based policymaking (Echelon/Results for America Feb 2026, advocacy).", "verdict": "Unpolled",
 "decisiveNumber": {"proposal": "Trust federal economic data (regime flip: Economist/YouGov, Feb–Mar 2026)", "dem": 22, "rep": 67, "ind": null, "overall": 40, "pollster": "Economist/YouGov", "year": 2026, "url": "https://yougov.com/en-us/articles/54316-government-agency-americans-see-trustworthy-national-park-service-ice"},
 "openTests": ["unpolled mechanism", "existential-problem (deciding test, open)", "why-an-amendment (currently fails; Evidence Act 356–17)", "regime coding (measured two-directional flip)", "abuse-vs-remedy gap", "depth"],
 "gate": "Unpolled mandate; regime-coded",
 "wouldMoveIn": "An independent national poll with party crosstabs on a concrete mandate — a constitutional duty to publish accurate accounts of revenues, spending and population, and/or for-cause-only removal of statistical-agency heads worded to bind 'any future president of either party' — clearing ≥60% floor and surviving a costs-named follow-up; corroborated by a cross-party floor vote on H.R. 4907 or a wide-margin state statistical-integrity amendment.",
 "wouldMoveOut": "A Weak floor on those mechanism questions, or a floor that swaps parties between waves under different administrations, or a founder resolution of §5.1 the way civic information was resolved.",
 "recommendation": "hold — the thing to be drafted has never been polled and the only party-split proxy is 45% R; not yet rejected because the 2025–26 record supplies an existential argument that did not exist at filing.",
 "notes": "NOTE for the page: the decisiveNumber here is a regime-flip TRUST reading, not support for the proposal — chart it only if labeled as such, or omit. New to corpus: Statement and Account Clause (Art. I §9) already a publication duty, unenforceable per US v. Richardson (1974); Evidence Act 2018 (44 U.S.C. §3563) already mandates 'credible and accurate' statistics, 356–17 → why-an-amendment fails on present record. Corpus discrepancy: POLLING_RESEARCH.md '66% open data improves accountability — Pew via Brookings 2015' is a cumulative figure; Pew's own: 53% and 56%; party split 45R/58D (Weak) omitted."}

PAGE NOTE: the memo's headline number is a TRUST reading that flipped by party (67 R / 22 D trust federal economic data, Economist/YouGov Feb–Mar 2026), not support for the proposal — either omit the chart, or chart it with a caption that says exactly that ('trust in federal economic data, by party'). Say plainly the mandate has never been polled.

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

{"slug": "good-government-data", "words": <body word count>, "footnotes": <count>, "chart": <true|false>, "gate": "<as written>", "summary": "<as written>", "flags": ["<anything the editor should look at: a claim you were unsure how to phrase neutrally, a memo figure that looked inconsistent, etc.>"]}
