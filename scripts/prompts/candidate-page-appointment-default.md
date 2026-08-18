You are drafting ONE public web page for the New Bill of Rights Foundation site: the page for a CANDIDATE amendment category — neither accepted nor rejected; waiting on evidence. Repo: /Users/michaelhamilton/Documents/newbillofrights. Today is 2026-08-18.

CATEGORY: Appointment-default rule
SOURCE MEMO (the only source of facts and URLs for this page): /Users/michaelhamilton/Documents/newbillofrights/research/candidates/APPOINTMENT_DEFAULT_CANDIDATE.md
OUTPUT FILE (overwrite the placeholder; touch nothing else): /Users/michaelhamilton/Documents/newbillofrights/site/src/content/candidates/appointment-default.mdx

The memo agent's summary of the memo (use it to pick the decisive number and the gate; the memo itself governs if they differ):
{"slug": "appointment-default", "file": "research/candidates/APPOINTMENT_DEFAULT_CANDIDATE.md", "candidateSince": "2026-08-12", "words": 3864,
 "status": "Unpolled as a mechanism — no independent national poll has ever asked whether a nomination should be confirmed, or forced to a vote, by default after a deadline; the closest matched questions are the most regime-coded numbers in the corpus (Republicans 36% → 83% and Democrats 74% → 16% on identical Monmouth wording, 2016 → 2020), while the one pre-vacancy reading finds 78% rejecting party-of-the-president as grounds to oppose a qualified nominee (74% D / 79% R, Marquette 2020) — recommendation: fold into Target 2 as a companion clause, conditioned on a forward-looking poll fielded when no seat is contested.",
 "floor": null, "floorNote": "No floor for the mechanism. Proxies point opposite ways: during a vacancy Monmouth end-of-term item floors at 36% (R 2016) and 16% (D 2020) identical wording; before a vacancy Marquette 'party of nominating president not a legitimate reason to oppose a qualified nominee' floors at 74% (D, Sept 2020).", "verdict": "Unpolled",
 "decisiveNumber": {"proposal": "Senate should consider an end-of-term Supreme Court nomination — identical wording, Monmouth 2016 vs 2020", "dem": 16, "rep": 83, "ind": 48, "overall": 47, "pollster": "Monmouth University Polling Institute", "year": 2020, "url": "https://www.monmouth.edu/polling-institute/reports/monmouthpoll_us_092820/"},
 "openTests": ["unpolled mechanism", "existential (gridlock vs procedural preference)", "regime coding (~50-point reversal both parties on identical wording, corroborated by Gallup)", "framing dependency (deemed-confirmed vs forced-vote vs knock-out never distinguished)", "depth", "staleness (nothing since 2020)"],
 "gate": "Unpolled mechanism; regime-coded proxy",
 "framingsThatClear": ["Senators not justified in opposing a qualified nominee because of the nominating president's party — 78% overall, floor 74% D (79% R, 81% I) — Marquette Sept 8–15 2020, before the vacancy — a norm about senators, not a constitutional default", "Senate should hold hearings on the sitting president's nominee — floor 56% R (69% overall, 85% D) — Monmouth March 2016 — Moderate, single-nominee reading"],
 "wouldMoveIn": "A forward-looking, mechanism-specific poll from an independent pollster fielded when no seat is contested — 'should the Senate be required to hold an up-or-down vote within a set period, for any president's nominee' — clearing ≥60% both parties on the forced-vote variant, with deemed-confirmed reported separately.",
 "wouldMoveOut": "A forward-looking poll in which either party's floor is below 45% on every variant, or answers still track which party holds the presidency even in incumbent-neutral wording — regime-coding failure regardless of level.",
 "recommendation": "fold into Target 2 (Term Limits) — draft the knock-out variant as the Supreme Court section's confirmation-refusal default (Court sits as constituted until the Senate acts; the seat's 18-year term runs from its calendar start so refusal shortens the resulting justice's tenure), on symmetry and why-an-amendment grounds; do not draft deemed-confirmed or extend to executive officers/wider judiciary until the poll exists.",
 "notes": "NOTE for page: the decisiveNumber is a regime-flip illustration (2020 wave; 2016 wave was 36R/74D) — chart only with that framing, or omit. Whitehouse–Booker S. 3096 has no provision for Senate inaction — confirms the TERM_LIMITS_RESEARCH staggering-trap gap. Gallup corroborates flip on second wording (R 33→89, D 76→15). Monmouth 2016 comparison base differs (RV vs adults) — R identical, D/I differ."}

PAGE NOTE: the memo's headline numbers are a regime-flip illustration (Monmouth identical wording: R 36→83, D 74→16 between 2016 and 2020) — if you chart the 2020 wave (16 D / 83 R / 48 I), the caption must say it is the 2020 reading of an end-of-term-nomination question and the 2016 reading was 36 R / 74 D; or omit the chart and put the flip in prose. Say plainly the mechanism has never been polled. Link the Term Limits amendment (/amendments/term-limits) as where the confirmation-refusal gap lives.

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

{"slug": "appointment-default", "words": <body word count>, "footnotes": <count>, "chart": <true|false>, "gate": "<as written>", "summary": "<as written>", "flags": ["<anything the editor should look at: a claim you were unsure how to phrase neutrally, a memo figure that looked inconsistent, etc.>"]}
