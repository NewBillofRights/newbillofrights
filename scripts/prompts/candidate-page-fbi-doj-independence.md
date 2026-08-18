You are drafting ONE public web page for the New Bill of Rights Foundation site: the page for a CANDIDATE amendment category — neither accepted nor rejected; waiting on evidence. Repo: /Users/michaelhamilton/Documents/newbillofrights. Today is 2026-08-18.

CATEGORY: FBI / DOJ independence
SOURCE MEMO (the only source of facts and URLs for this page): /Users/michaelhamilton/Documents/newbillofrights/research/candidates/DOJ_INDEPENDENCE_CANDIDATE.md
OUTPUT FILE (overwrite the placeholder; touch nothing else): /Users/michaelhamilton/Documents/newbillofrights/site/src/content/candidates/fbi-doj-independence.mdx

The memo agent's summary of the memo (use it to pick the decisive number and the gate; the memo itself governs if they differ):
{"slug": "fbi-doj-independence", "file": "research/candidates/DOJ_INDEPENDENCE_CANDIDATE.md", "candidateSince": "2026-08-06", "words": 3182,
 "status": "39–44% (Republicans) on the only structural remedy ever polled — judicial review of a special counsel's firing, Monmouth 2018 — Weak on the remedy while the diagnosis now runs 53% R / 55% I / 58% D (Marquette, May 2026); held by the abuse-vs-remedy gap and no remedy poll in eight years — recommendation: hold (gate: a 2026 independent poll of the for-cause/removal remedy in forward-looking wording clearing 60% R).",
 "floor": 39, "floorNote": "39% R, fired special counsel may appeal to a panel of federal judges, Monmouth Apr 2018 (57% overall, 58% I, 71% D); companion Jan 2018 Monmouth judicial approval before firing 44% R (62% overall); CBS/SSRS Nov 2018 legislation framing 33% R. All remedy data is 2018.", "verdict": "Weak",
 "decisiveNumber": {"proposal": "Judges must approve before a special counsel can be fired (Monmouth 2018)", "dem": 76, "rep": 44, "ind": 65, "overall": 62, "pollster": "Monmouth University Poll", "year": 2018, "url": "https://www.monmouth.edu/polling-institute/reports/MonmouthPoll_US_020118_B/"},
 "openTests": ["unpolled remedy since 2018", "abuse-vs-remedy gap", "regime coding", "framing dependency (47-pt R gap Marquette vs Quinnipiac on the diagnosis)", "staleness", "depth never tested"],
 "gate": "Remedy unpolled since 2018",
 "wouldMoveIn": "A 2026-or-later independent poll asking forward-looking both-parties wording ('any future president' may remove the AG/FBI Director only for cause; prohibited from directing DOJ to investigate a specific person for non-law-enforcement reasons) clearing ≥60% R on the conduct rule and ≥55% R on removal, with an actor-named control arm and a costs-named follow-up.",
 "wouldMoveOut": "If that poll reproduces the 2018 pattern (R remedy support in the 30s–low 40s while the diagnosis polls in the 50s) — fails abuse-vs-remedy and framing-dependency on fresh data; or if forward-looking wording drops both parties below incumbent-named readings — regime-coded to the core.",
 "recommendation": "hold — why-an-amendment now passes decisively (Trump v. Slaughter, June 29 2026, overruled Humphrey's Executor; Trump v. United States 2024) and existential passes; but remedy data is eight years old and Weak; if it clears, natural home is a companion article to Target 7.",
 "notes": "Trump v. Slaughter (June 29, 2026) overruled Humphrey's Executor — verified from slip opinion — AMENDMENT_IDEAS.md's 'statutory' flags on special-counsel/DOJ-firewall drafts are arguably backwards now. Quinnipiac Oct 2025 finds 6% R on essentially Marquette's diagnosis question (53% R) — 47-pt wording effect on whether the President or the Department is named as actor. Corpus discrepancy: 77R/86D pairing is Marquette MAY 2026, not Nov 2025 (Nov 2025 = 77R/10D unjustified i.e. 90% D justified)."}

PAGE NOTE: chart the Monmouth 2018 remedy item (76 D / 44 R / 65 I); the diagnosis numbers (Marquette 2025–26) go in prose. State that no remedy poll exists since 2018.

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

{"slug": "fbi-doj-independence", "words": <body word count>, "footnotes": <count>, "chart": <true|false>, "gate": "<as written>", "summary": "<as written>", "flags": ["<anything the editor should look at: a claim you were unsure how to phrase neutrally, a memo figure that looked inconsistent, etc.>"]}
