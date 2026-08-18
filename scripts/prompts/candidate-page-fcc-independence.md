You are drafting ONE public web page for the New Bill of Rights Foundation site: the page for a CANDIDATE amendment category — neither accepted nor rejected; waiting on evidence. Repo: /Users/michaelhamilton/Documents/newbillofrights. Today is 2026-08-18.

CATEGORY: FCC and independent-agency independence
SOURCE MEMO (the only source of facts and URLs for this page): /Users/michaelhamilton/Documents/newbillofrights/research/candidates/AGENCY_INDEPENDENCE_CANDIDATE.md
OUTPUT FILE (overwrite the placeholder; touch nothing else): /Users/michaelhamilton/Documents/newbillofrights/site/src/content/candidates/fcc-independence.mdx

The memo agent's summary of the memo (use it to pick the decisive number and the gate; the memo itself governs if they differ):
{"slug": "fcc-independence", "file": "research/candidates/AGENCY_INDEPENDENCE_CANDIDATE.md", "candidateSince": "2026-08-06", "words": 3277,
 "status": "42% (Republicans) opposed to the decision ending for-cause removal protection, Marquette July 22–29, 2026 — Weak on the remedy as of the newest reading, down from a 54% Republican floor eight weeks earlier in prospective wording — open tests: regime-coding (15-point R move inside one series in nine months, both directions) and existential-problem; recommendation: hold (gate: one forward-looking both-parties re-poll of the remedy after Slaughter settles).",
 "floor": 42, "floorNote": "42% R oppose Trump v. Slaughter ending for-cause removal protection (i.e., support insulation), Marquette July 2026; same series 54% R prospective wording May 2026", "verdict": "Weak",
 "decisiveNumber": {"proposal": "Oppose ending for-cause removal protection for independent agencies (Marquette 2026)", "dem": 61, "rep": 42, "ind": 50, "overall": 51, "pollster": "Marquette Law School Poll", "year": 2026, "url": "https://law.marquette.edu/assets/community/poll/MLSPSC34/MLSPSC34PressRlease_CourtTopics.pdf"},
 "openTests": ["regime-coding / incumbent flip", "existential-problem", "abuse-vs-remedy gap", "depth"],
 "gate": "Regime-coded; needs forward-looking re-poll",
 "wouldMoveIn": "An independent national poll fielded no earlier than 2027, asking the remedy in forward-looking both-parties mechanism-specific wording, R floor ≥60% holding under a costs-named follow-up — or a cross-party roll call restoring for-cause protection.",
 "wouldMoveOut": "A second independent reading with the R floor at or below 42% in prospective wording — rejection on regime-coding and high-topline/low-floor.",
 "recommendation": "hold — why-an-amendment now passes cleanly (Trump v. Slaughter June 29 2026 closed the statutory route), symmetry passes by construction, but the floor moved 15 points by party in nine weeks; re-poll rather than promote or reject.",
 "notes": "Trump v. Slaughter (No. 25-332, June 29 2026, 6-3) overruled Humphrey's Executor. Trump v. Cook (25A312) denied a stay on statutory/due-process grounds, not a merits Fed holding. Category title says FCC but the real proposal is independent-agency insulation generally; license/speech question is First Amendment, outside the clause. Corpus discrepancy: Economist/YouGov Sept 2025 'pressure broadcasters' item R is 42% unacceptable, not 61% — the '61% R' floor in the summary row is unsupported; Nov 2025 Marquette 39R/89D party split not locatable (crosstab 404); May 2026 Fed '40% R' is inferred from complement; July 2026 Fed reading published directly 70% (51R/67I/91D)."}

PAGE NOTE: title says FCC but the proposal is independent-agency insulation generally — say so. Chart the Marquette July 2026 item (61 D / 42 R / 50 I) and give the May 2026 54% R prospective reading in prose to show the movement.

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

{"slug": "fcc-independence", "words": <body word count>, "footnotes": <count>, "chart": <true|false>, "gate": "<as written>", "summary": "<as written>", "flags": ["<anything the editor should look at: a claim you were unsure how to phrase neutrally, a memo figure that looked inconsistent, etc.>"]}
