You are writing ONE research memo for the New Bill of Rights Foundation: the evidence file for a CANDIDATE amendment category — one that is neither accepted (a target) nor rejected, and is waiting on evidence. Repo: /Users/michaelhamilton/Documents/newbillofrights. Today is 2026-08-18.

YOUR CATEGORY: TITLE
OUTPUT FILE (create it; touch nothing else): /Users/michaelhamilton/Documents/newbillofrights/research/candidates/FILENAME

## Why this memo exists

The foundation pursues only constitutional amendments that pass the "full-spectrum test": support from Republicans AND Democrats, measured as the **bipartisan floor** — the lower of the two parties' support for the best-polled core proposal. Eight target categories have full research memos; ten rejected categories have substantiation memos. The candidate categories — the middle bucket — have never been researched to the same standard: today each is a one-line entry. Every category must now be evaluated by the SAME criteria, so a reader can see why a candidate is a candidate exactly as they can see why a rejection is a rejection. This memo is the source for a public web page, so every number will be scrutinized. **State the evidence and the tests, never a view on the merits.** The house framing for the bucket: a candidate is neither in nor out — it is waiting on specific evidence, and the memo names that evidence.

Unlike a rejected memo, this memo ends with a **recommendation** (Section 5) — accept as a target, fold into a named existing target as a companion clause, hold as a candidate with a named gate, or reject with the failing test named. Recommend; the founder decides. Do NOT draft amendment text — drafting is what acceptance earns.

## Read first (in this order; you must actually read them)

1. /Users/michaelhamilton/Documents/newbillofrights/research/MISSION.md
2. /Users/michaelhamilton/Documents/newbillofrights/research/SELECTION_METHOD.md — especially §4.1 (floor + verdict scale: Strong ≥60, Moderate 45–59, Weak <45, Unpolled), §4.2 (evidence hierarchy), §4.3 (six failure modes), §5 (three non-polling tests: existential-problem, symmetry, why-an-amendment-not-a-statute), §9 (what to decide vs. flag), §10 "Candidates (14)" (the one-line gate each currently carries), §11 traps.
3. /Users/michaelhamilton/Documents/newbillofrights/research/CATEGORIES.md — the "Candidate Categories" section (your category's line and any note is the starting point) and the "Target Categories" list (so you know what an existing target already covers).
4. /Users/michaelhamilton/Documents/newbillofrights/research/POLLING_RESEARCH.md — "Summary — Candidate Categories," "Candidate Category Detail," "High-Topline but Partisan-Coded," and the "Review Additions" sections at the end. Reuse any numbers already there for your category (they are already sourced), but RE-VERIFY them against the linked page like everything else, and note any discrepancy in your JSON.
5. /Users/michaelhamilton/Documents/newbillofrights/research/AMENDMENT_IDEAS.md — "Candidate Ideas (under consideration)" and, where relevant, "Executive-accountability drafts" (contributor attribution; keep names of contributors as they appear there).
6. Where the category came from a public thread: /Users/michaelhamilton/Documents/newbillofrights/research/REDDIT_THREAD_IDEAS.md (attribution by username; figures there marked "verify before use" are unverified).
7. One rejected memo for the template, depth, and tone: /Users/michaelhamilton/Documents/newbillofrights/research/rejected/QUALIFIED_IMMUNITY_REJECTED.md. Analytical, dense, every number linked.
8. /Users/michaelhamilton/Documents/newbillofrights/COPY_VOICE_GUIDE.md — "Nonpartisan discipline (hard rules)"; it applies to research prose too.

## Research rules (hard)

- Load web tools with ToolSearch "select:WebSearch,WebFetch". **Every number in the memo must be verified by fetching the page it is cited to** — pollster's own page or crosstab PDF whenever one exists; a news write-up only if the pollster's page is unavailable, and say so. If you cannot verify a figure after 2–3 attempts, leave it out of the memo and list it in the JSON `unverified` array. Never invent or guess a URL; never cite from memory.
- Search for the NEWEST evidence too (2024–2026 fieldwork; developments through mid-2026 may exist). Independent pollsters first (Pew, Gallup, AP-NORC, Marquette, YouGov/Economist, Fox, Monmouth, Quinnipiac, PRRI, UMD Program for Public Consultation). Advocacy-commissioned polls may be used but must be labeled as such and can never carry the verdict alone. Real ballot results and roll-call votes count as evidence (with links to official results or an authoritative record).
- If your category is genuinely unpolled, that IS the finding: say what you searched for and where, list the closest proxies (labeled as proxies, never as evidence for the specific mechanism), and make Section 5's "what would resolve it" a concrete poll specification.
- Every poll line carries: overall %, R %, D % (and I % if published), pollster, fieldwork date (month + year at minimum), question wording paraphrase, and a link. If a source publishes no party breakdown write "(no party breakdown published)".
- Traps to avoid (SELECTION_METHOD §11): a cumulative or forced-choice figure is not a standalone favor/oppose number; broad-battery numbers are not evidence for a specific mechanism; a floor measured while "your side" holds the power flips when the other side holds it — say when a number is regime-coded and, where the data exist, show the flip.
- Overlap discipline: if part of your category already lives in a target amendment (see CATEGORIES.md targets and the named research doc), say precisely which part is already covered and evaluate only the remainder; a recommendation to "fold into Target N" must name the target and the clause-level idea.
- Nonpartisan discipline: never characterize either party's position as right or wrong; when a category has abuse examples, pair both sides' or use none; do not use "populist / elites / establishment / woke / radical / weaponized / landslide" (say "wide margin"). Names of officeholders belong in citations, not in prose as examples.
- Length: roughly 1,800–2,600 words of body (the rejected-memo depth). Depth over breadth; every sentence load-bearing.

## Memo template (use these exact H2 headings, in this order)

```
# <Title> — Candidate Category Memo

*Candidate since <DATE>. Memo written 2026-08-18 to evaluate the category under [SELECTION_METHOD.md](../SELECTION_METHOD.md) by the same criteria as the target and rejected categories. Every figure below was verified against the linked source on the date of writing.*

**Status in one line:** <floor number or "unpolled"> — <verdict per §4.1> — <what is holding it: the open test(s) or missing evidence> — recommendation: <accept / fold into Target N / hold (gate: …) / reject (test: …)>.

## 1. The proposal as commonly framed
Main version(s) of the idea as an amendment, the main variants, who has proposed them (bills / resolutions with links if any), and how it entered our pipeline (contributor attribution from AMENDMENT_IDEAS.md / REDDIT_THREAD_IDEAS.md). If an existing target already covers part of it, say which part and point to the research doc.

## 2. The evidence
Bulleted, one poll/result per bullet, best evidence first: independent polls with party breakdowns → ballot results → legislative votes → advocacy polls (flagged) → proxies (labeled). Then a short "Nuances & caveats" sub-list (staleness, regime-coding, wording sensitivity, what has never been asked).

## 3. The gate result
- **Bipartisan floor:** N% (party) on <core proposal>, <pollster year> → verdict (Strong/Moderate/Weak/Unpolled) per §4.1 — or "Unpolled: no independent national poll with a party breakdown asks the proposal; closest proxy is …".
- **Failure modes (§4.3):** which of the six apply or are at risk, with the numbers; and which are clearly cleared.
- **Non-polling tests (§5):** existential-problem, symmetry, why-an-amendment — state the result of each plainly (pass / fail / open, and why). A category can be Strong on polling and still be held on §5.

## 4. Framings tested
Alternative framings considered (each with its number and source if polled), and whether any clears the bar honestly — i.e., is it the thing we would actually draft, or a different proposal wearing the name? Include abuse-framing vs. remedy-framing where that gap exists.

## 5. What would resolve it, and the recommendation
- **Evidence that would move it in:** a named poll wording (both-parties, forward-looking, mechanism-specific) with the floor threshold it must clear; and/or a ballot result or roll-call pattern.
- **Evidence that would move it out:** what result would make this a rejection, and which test it would fail.
- **Recommendation:** one of — accept as a target · fold into Target N (name the clause-level idea) · hold as a candidate (name the gate) · reject (name the test) — with two to four sentences of reasoning that cite Sections 2–4. Founder decides.

## 6. Sources
Every URL cited above, one per line, as a markdown link with a short label (pollster/court/official record, date).
```

Category-specific pointers (starting points only; verify everything, and search beyond them):
HINTS

## Return value (your final message must be ONLY this JSON, nothing else)

{"slug": "SLUG",
 "file": "research/candidates/FILENAME",
 "candidateSince": "<YYYY-MM-DD>",
 "words": <body word count>,
 "status": "<one-line status as written in the memo>",
 "floor": <number or null>,
 "floorNote": "<what the floor number is, e.g. '76% D, maximum age for elected officials, Pew Oct 2023'>",
 "verdict": "<Strong|Moderate|Weak|Unpolled>",
 "decisiveNumber": {"proposal": "<short label suitable for a chart caption incl. pollster + year>", "dem": <n>, "rep": <n>, "ind": <n or null>, "overall": <n or null>, "pollster": "", "year": <yyyy>, "url": ""} or null if no single decisive poll exists,
 "openTests": ["<e.g. unpolled remedy>", "<e.g. existential-problem>", "..."],
 "gate": "<2–6 words naming what it is waiting on, for a page kicker, e.g. 'Unpolled: remedy wording' · 'Strong floor; existential test open' · 'Regime-coded'>",
 "framingsThatClear": ["<framing — floor — source> or empty"],
 "wouldMoveIn": "<one sentence>",
 "wouldMoveOut": "<one sentence>",
 "recommendation": "<accept | fold into <target> | hold | reject> — <one sentence>",
 "unverified": ["<any figure or claim you looked for and could not verify, incl. any existing corpus figure that did not match its source>"],
 "discrepancies": ["<existing corpus number vs what the source actually says, if any>"],
 "notes": "<anything the editor must know, one or two sentences>"}
