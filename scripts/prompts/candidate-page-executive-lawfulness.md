You are drafting ONE public web page for the New Bill of Rights Foundation site: the page for a CANDIDATE amendment category — neither accepted nor rejected; waiting on evidence. Repo: /Users/michaelhamilton/Documents/newbillofrights. Today is 2026-08-18.

CATEGORY: Stopping unlawful executive action
SOURCE MEMO (the only source of facts and URLs for this page): /Users/michaelhamilton/Documents/newbillofrights/research/candidates/EXECUTIVE_LAWFULNESS_CANDIDATE.md
OUTPUT FILE (overwrite the placeholder; touch nothing else): /Users/michaelhamilton/Documents/newbillofrights/site/src/content/candidates/executive-lawfulness.mdx

The memo agent's summary of the memo (use it to pick the decisive number and the gate; the memo itself governs if they differ):
{"slug": "executive-lawfulness", "file": "research/candidates/EXECUTIVE_LAWFULNESS_CANDIDATE.md", "candidateSince": "2026-08-06", "words": 3894,
 "status": "37% (Republicans) on 'agencies and spending authorized by Congress are beyond the president's authority to close or freeze,' Marquette May 2025 — Weak on the spending sub-item, unpolled on executive privilege, Moderate-but-regime-coded on immunity — held by the symmetry test on appropriations and by regime-coding on immunity — recommendation: hold (gate: forward-looking, both-directions appropriations question clearing 60% R, which would fold it into Target 7).",
 "floor": 37, "floorNote": "37% R (62% overall / 64I / 88D), Marquette May 5–15 2025", "verdict": "Weak",
 "decisiveNumber": {"proposal": "Agencies/spending authorized by Congress are beyond the president's authority to close or freeze (Marquette 2025)", "dem": 88, "rep": 37, "ind": 64, "overall": 62, "pollster": "Marquette Law School Poll", "year": 2025, "url": "https://law.marquette.edu/poll/2025/05/22/new-marquette-law-school-poll-national-survey-finds-strong-support-for-authority-of-courts-in-cases-involving-president/"},
 "openTests": ["symmetry (both-directions appropriations clause never polled)", "regime coding (all three sub-items)", "abuse-vs-remedy gap (~76% R principle vs 37% R mechanism)", "why-an-amendment (weak for appropriations and privilege; strong for immunity)", "existential (fails for executive privilege)", "unpolled remedy (executive privilege)", "depth"],
 "gate": "Symmetric appropriations poll unrun",
 "framingsThatClear": ["Amendment that 'no person is above the law, even the President' — 54% R — USA Today/Ipsos Aug 2–4 2024 (Moderate; D/I not published)", "'A president may ignore Congress or the Supreme Court…' (disagree) — ~76% R — PRRI Aug–Sept 2025 (the principle Target 7 already carries)"],
 "wouldMoveIn": "An independent pollster fielding a forward-looking, explicitly two-directional appropriations question ('any future president must spend the money Congress appropriated — no more and no less') that clears 60% R and holds under a costs-named follow-up — or a recorded cross-party vote backing a pocket-rescission ban.",
 "wouldMoveOut": "A symmetric forward-looking appropriations question still returning R below 45% — reject sub-item (a), statutory list; for immunity, a re-ask of the amendment framing below 45% R once the incumbent is out of view — regime coding.",
 "recommendation": "hold — three sub-items gated separately: appropriations fidelity folds into Target 7 if a symmetric poll clears 60% R; executive privilege is unpolled and the sub-item to drop first (fails existential + why-an-amendment); narrowing immunity is the highest-value survey item (54% R clearing framing, strong why-an-amendment) but held on regime-coding.",
 "notes": "Marquette May 2025 converts 'impoundment is unpolled' (three corpus docs) into 'polls at 37% R floor' on an incumbent-coded application; the symmetric drafted version is untested. Marquette July 2026 'next president' forward-looking wording did not move Republicans (20% want less presidential control) — the standard regime-coding remedy was partly tried and did not rescue it. Corpus discrepancy: POLLING_RESEARCH.md §4 immunity line — Marquette Jan 27–Feb 6 2025 is 39% favor / 61% oppose with 68% R / 13% D favor (not 61R/17D); R floor for opposing the holding is 32%. Also 63% of R say president may close/freeze authorized agencies."}

PAGE NOTE: three sub-items (appropriations fidelity; executive privilege; narrowing immunity) with different results — structure 'Where it stands' by sub-item; link the Executive Compliance amendment (/amendments/executive-compliance) as what is already covered. Chart the Marquette May 2025 item (88 D / 37 R / 64 I).

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

{"slug": "executive-lawfulness", "words": <body word count>, "footnotes": <count>, "chart": <true|false>, "gate": "<as written>", "summary": "<as written>", "flags": ["<anything the editor should look at: a claim you were unsure how to phrase neutrally, a memo figure that looked inconsistent, etc.>"]}
