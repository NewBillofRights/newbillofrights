You are writing ONE research memo for the New Bill of Rights Foundation: the substantiation of a REJECTED amendment category. Repo: /Users/michaelhamilton/Documents/newbillofrights. Today is 2026-08-17.

YOUR CATEGORY: Presidential Self-Pardon Ban
OUTPUT FILE (create it; touch nothing else): /Users/michaelhamilton/Documents/newbillofrights/research/rejected/SELF_PARDON_BAN_REJECTED.md

## Why this memo exists

The foundation pursues only constitutional amendments that pass the "full-spectrum test": support from Republicans AND Democrats, measured as the **bipartisan floor** — the lower of the two parties' support for the best-polled core proposal. Ten categories were rejected on 2026-08-06 with one-line reasons. The rejected categories must now be justified as completely as the eight targets: evidence, sources, party breakdowns, the specific test each failed, and the path back. This memo is the source for a public web page, so every number will be scrutinized. **State the evidence and the test, never a view on the merits.** A rejection is never a judgment that the issue doesn't matter — the house framing is "cannot pass the full-spectrum test and would code the whole project as partisan."

## Read first (in this order; you must actually read them)

1. /Users/michaelhamilton/Documents/newbillofrights/research/MISSION.md
2. /Users/michaelhamilton/Documents/newbillofrights/research/SELECTION_METHOD.md — especially §4.1 (floor + verdict scale: Strong ≥60, Moderate 45–59, Weak <45, Unpolled), §4.2 (evidence hierarchy), §4.3 (six failure modes), §5 (three non-polling tests), §10 "Rejected (10)", §11 traps.
3. /Users/michaelhamilton/Documents/newbillofrights/research/CATEGORIES.md — the "Rejected Categories" section (your category's one-line rationale is the starting point; do not contradict the founder's decision — substantiate it, and if the evidence is more nuanced than the one-liner, say so precisely).
4. /Users/michaelhamilton/Documents/newbillofrights/research/POLLING_RESEARCH.md — the sections "Rejected 2026-08-06: …", "Evidence Supporting Rejections", "High-Topline but Partisan-Coded", and the "Review Additions" / "Flagged corrections" at the end. Reuse any numbers already there for your category (they are already sourced), but RE-VERIFY them against the linked page like everything else, and note any discrepancy in your JSON.
5. /Users/michaelhamilton/Documents/newbillofrights/research/AMENDMENT_IDEAS.md — "Rejected Ideas (kept for the record)" (contributor attribution for your category; keep names of contributors as they appear there).
6. Skim one target memo's structure for tone: /Users/michaelhamilton/Documents/newbillofrights/research/PARDON_RESEARCH.md (first 80 lines are enough). Analytical, dense, every number linked.

## Research rules (hard)

- Load web tools with ToolSearch "select:WebSearch,WebFetch". **Every number in the memo must be verified by fetching the page it is cited to** — pollster's own page or crosstab PDF whenever one exists; a news write-up only if the pollster's page is unavailable, and say so. If you cannot verify a figure after 2–3 attempts, leave it out of the memo and list it in the JSON `unverified` array. Never invent or guess a URL; never cite from memory.
- Search for the NEWEST evidence too (2024–2026 fieldwork; developments through mid-2026 may exist). Independent pollsters first (Pew, Gallup, AP-NORC, Marquette, YouGov/Economist, Fox, Monmouth, Quinnipiac, UMD Program for Public Consultation). Advocacy-commissioned polls may be used but must be labeled as such and can never carry the verdict alone. Real ballot results and roll-call votes count as evidence (with links to official results or an authoritative record).
- Every poll line carries: overall %, R %, D % (and I % if published), pollster, fieldwork date (month + year at minimum), question wording paraphrase, and a link. If a source publishes no party breakdown write "(no party breakdown published)".
- Traps to avoid (SELECTION_METHOD §11): a cumulative or forced-choice figure is not a standalone favor/oppose number; broad-battery numbers are not evidence for a specific mechanism; a floor measured while "your side" holds the power flips when the other side holds it — say when a number is regime-coded.
- Nonpartisan discipline: never characterize either party's position as right or wrong; when a category has abuse examples, pair both sides' or use none; do not use "populist / elites / establishment / woke / radical / weaponized / landslide" (say "wide margin"). Names of officeholders belong in citations, not in prose as examples.
- Length: roughly 1,800–2,600 words of body (a third of a target memo). Depth over breadth; every sentence load-bearing.

## Memo template (use these exact H2 headings, in this order)

```
# <Title> — Rejected Category Memo

*Rejected 2026-08-06. Memo written 2026-08-17 to substantiate the rejection under [SELECTION_METHOD.md](../SELECTION_METHOD.md). Every figure below was verified against the linked source on the date of writing.*

**Verdict in one line:** <floor number or "unpolled/not applicable"> — <the failing test(s) named per §4.3/§5> — <path back in a few words>.

## 1. The proposal as commonly framed
Main version(s) of the idea as an amendment, the main variants, who has proposed them (bills / resolutions with links if any), and how it entered our pipeline (contributor attribution from AMENDMENT_IDEAS.md).

## 2. The evidence
Bulleted, one poll/result per bullet, best evidence first: independent polls with party breakdowns → ballot results → legislative votes → advocacy polls (flagged). Then a short "Nuances & caveats" sub-list.

## 3. The gate result
- **Bipartisan floor:** N% (party) on <core proposal>, <pollster year> → verdict (Strong/Moderate/Weak/Unpolled) per §4.1.
- **Failure mode(s) (§4.3):** name each that applies with the numbers that show it.
- **Non-polling tests (§5):** existential-problem, symmetry, why-an-amendment — state which apply and how (some categories fail here rather than on polling; say so plainly).

## 4. Framings tested
Alternative framings considered (each with its number and source if polled), and whether any clears the bar honestly — i.e., is it the thing we would actually draft, or a different proposal wearing the name? Include framings that DO clear the bar if they exist, and say why they do or do not rescue the category.

## 5. Path back
The specific evidence that would reopen the category — a named poll wording with a floor threshold, a ballot result, a framing — or "none identified" with the reason.

## 6. Sources
Every URL cited above, one per line, as a markdown link with a short label (pollster/court/official record, date).
```

Category-specific pointers (starting points only; verify everything, and search beyond them):
- Corpus numbers: 82% D / 43% R — Economist/YouGov Dec 5–8, 2025 (URL in POLLING_RESEARCH.md); Protect Democracy/YouGov May–June 2024 (advocacy, battleground sample): self-pardon ban 78% (59% R / 96% D). Both URLs are in research/PARDON_RESEARCH.md and site/src/content/amendments/pardon-reform.mdx footnotes — reuse and verify. Search for older waves (YouGov 2017–2018 self-pardon items; Quinnipiac 2018 "president has power to pardon himself?"; Marist/PBS) to show the regime-coding: R support for a ban rises/falls with who is president. Also the legal status: DOJ OLC 1974 memo ("no one may be a judge in his own case") — cite justice.gov; note this is the only pardon limit whose answer may already be "unconstitutional" — an amendment would settle text that is currently silent.
- The failing test is incumbent/regime coding + high-topline/low-floor (43% R = Weak). Path back: a forward-looking, both-parties poll ("no future president of either party may pardon himself or herself") clearing ~60% R — say that is the first poll the foundation intends to commission on the pardon package. Contributor: Michael Hamilton's pardon proposal in AMENDMENT_IDEAS.md included a self-pardon ban; the family/associates components became the Pardon Reform target.

## Return value (your final message must be ONLY this JSON, nothing else)

{"slug": "self-pardon-ban",
 "file": "research/rejected/SELF_PARDON_BAN_REJECTED.md",
 "words": <body word count>,
 "verdict": "<one-line verdict as written in the memo>",
 "floor": <number or null>,
 "floorNote": "<what the floor number is, e.g. '46% R, direct popular vote, Pew Aug–Sep 2024'>",
 "decisiveNumber": {"proposal": "<short label suitable for a chart caption incl. pollster + year>", "dem": <n>, "rep": <n>, "ind": <n or null>, "overall": <n or null>, "pollster": "", "year": <yyyy>, "url": ""} or null if no single decisive poll exists,
 "failedTests": ["<e.g. high-topline/low-floor>", "..."],
 "framingsThatClear": ["<framing — floor — source> or empty"],
 "pathBack": "<one sentence>",
 "unverified": ["<any figure or claim you looked for and could not verify, incl. any existing corpus figure that did not match its source>"],
 "discrepancies": ["<existing corpus number vs what the source actually says, if any>"],
 "notes": "<anything the editor must know, one or two sentences>"}
