You are drafting ONE public web page for the New Bill of Rights Foundation site: the page for a CANDIDATE amendment category — neither accepted nor rejected; waiting on evidence. Repo: /Users/michaelhamilton/Documents/newbillofrights. Today is 2026-08-18.

CATEGORY: Civil servant independence
SOURCE MEMO (the only source of facts and URLs for this page): /Users/michaelhamilton/Documents/newbillofrights/research/candidates/CIVIL_SERVICE_CANDIDATE.md
OUTPUT FILE (overwrite the placeholder; touch nothing else): /Users/michaelhamilton/Documents/newbillofrights/site/src/content/candidates/civil-servant-independence.mdx

The memo agent's summary of the memo (use it to pick the decisive number and the gate; the memo itself governs if they differ):
{"slug": "civil-servant-independence", "file": "research/candidates/CIVIL_SERVICE_CANDIDATE.md", "candidateSince": "2026-08-06", "words": 3221,
 "status": "76% (Republicans, 2024) on merit-based hiring and promotion — but the same series' nonpartisan-civil-service item fell from 87% to 66% among Republicans in one year and rebounded to 78% the next: the corpus's clearest demonstration that this floor tracks who holds the presidency — Moderate-to-Strong on the principle, unpolled on every remedy, and why-an-amendment is contradicted by the Court's express preservation of the civil service system — recommendation: hold (gate: forward-looking both-parties poll of the operative protection, plus a why-not-a-statute answer).",
 "floor": 66, "floorNote": "Contested item 'nonpartisan civil service important for democracy' R: ~87% (2024) → 66% (2025) → 78% (2026), Partnership for Public Service / Impact Research; merit-entry principle 94% floor (95R/96D/94I, 2024) is not the contested rule; operative removal protection unpolled", "verdict": "Moderate-to-Strong, regime-coded",
 "decisiveNumber": {"proposal": "Civil servants should be hired and promoted on merit, not political beliefs (Partnership for Public Service / Impact Research, 2024)", "dem": 96, "rep": 95, "ind": 94, "overall": 95, "pollster": "Partnership for Public Service / Impact Research", "year": 2024, "url": "https://ourpublicservice.org/publications/the-state-of-public-trust-in-government-2024/"},
 "openTests": ["regime coding (R 87→66→78 in 24 months)", "unpolled remedy", "framing dependency (94% framing is not the contested one)", "abuse-vs-remedy (parties disagree on the predicate)", "depth", "existential", "symmetry (no matched both-sides pairing)", "why-an-amendment (fails as framed)"],
 "gate": "Regime-coded; remedy unpolled",
 "framingsThatClear": ["Hired and promoted on merit, not political beliefs — 94% floor (95R/96D/94I) — Partnership/Impact Research spring 2024", "Civil servants should serve the people more than any individual president — 83% floor (90R/91D/83I) — same"],
 "wouldMoveIn": "An independent national poll with 2027-or-later fieldwork asking the operative clause in forward-looking both-parties wording (career employees hired, promoted, and dismissed only on merit and conduct, never for political belief, binding every future president) clearing 60% in both parties on base and costs-named follow-up, with under a 10-point swing on a symmetry probe, holding across a change of administration; or majorities of both caucuses for a statutory merit-protection bill.",
 "wouldMoveOut": "A repeat collapse in the next wave (R back under 60%; 'fire any civil servant for any reason' above 55% in either party), a costs-named poll near the PPC 40% band, or applying why-an-amendment as written — Free Enterprise Fund fn.10 plus the 1883/1978 statutes are a complete statutory answer.",
 "recommendation": "hold — the Court has twice said its removal jurisprudence does not reach the civil service system and Congress has twice created these protections by statute, so §5.3 points to the statutory list; only Strong floor is the merit-entry framing; operative remedy unpolled; the one mechanism-level number is 40%.",
 "notes": "NOTE for the page: chart the 94/95/96 merit-entry item only with the caveat that it is not the contested rule; the 87→66→78 R trace is the key illustration. Corpus discrepancies: 2026 wave (Mar 31–Apr 5 2026) R rebounded to 78%, topline 76% — corpus line is out of date; AP-NORC ~25% favor is Jan 9–13 2025, the 48% oppose/March date unverified; Partnership March 2025 wave (Prodege quota sample) is not nationally representative — flag; D moved 88→81 in 2025 (salience not divide); UMD PPC 40% carries 42R/37D/42I."}

PAGE NOTE: if you chart the merit-entry item (95 R / 96 D / 94 I, 2024), the caption must say it is the merit-entry principle, not the contested rule; the key evidence to present in prose is the R trace on 'nonpartisan civil service important for democracy': ~87% (2024) → 66% (2025) → 78% (2026). Check the memo's Review Additions before drafting — the verify pass may have edited it.

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

{"slug": "civil-servant-independence", "words": <body word count>, "footnotes": <count>, "chart": <true|false>, "gate": "<as written>", "summary": "<as written>", "flags": ["<anything the editor should look at: a claim you were unsure how to phrase neutrally, a memo figure that looked inconsistent, etc.>"]}
