# Task: candidate-category research memo — Eminent domain limits (post-*Kelo*)

A contributor (Alex MacGregor, 2026-08-18) proposed a new candidate category: **restricting eminent
domain for private development** — the post-*Kelo v. City of New London* (2005) reform: government
may not take private property to transfer it to another private party for economic development.
His own framing: it is a "layup" — very high support across parties — but "less important than
things like campaign finance reform." Your job is to research it against this project's acceptance
criteria and write the memo that lets the founder decide.

## Read first (repo at /Users/michaelhamilton/Documents/newbillofrights)
1. `research/MISSION.md` and `research/SELECTION_METHOD.md` — especially §4 (evidence gate: the
   bipartisan-floor metric, evidence hierarchy, six failure modes), §5 (the three non-polling tests:
   existential-problem, symmetry, why-an-amendment-not-a-statute), §6.3 (blast radius), §11 (traps).
2. One rejected memo for the template and depth: `research/rejected/QUALIFIED_IMMUNITY_REJECTED.md`.
3. `research/CATEGORIES.md` (how candidates are listed) and `COPY_VOICE_GUIDE.md` (nonpartisan
   discipline applies to research prose too: no side-coded vocabulary, pair examples across parties).

## Write: `research/candidates/EMINENT_DOMAIN_CANDIDATE.md` (~2,000–2,800 words), sections:

1. **The proposal as commonly framed** — the *Kelo* holding (what "public use" was read to mean);
   the reform variants: (a) flat ban on takings for private economic development / transfer to a
   private party; (b) narrow "public use" definition with blight exceptions; (c) heightened
   compensation. Note that a federal amendment would restore/define "public use" in the Fifth
   Amendment and bind states via the Fourteenth.
2. **The evidence** — with party breakdowns wherever they exist, pollster, fieldwork date, link:
   - National polling after *Kelo* (2005–2006) and anything since; be honest about staleness.
   - **Ballot measures**: the 2006 wave of state eminent-domain measures — list each state, the
     yes %, and whether it was clean (Kelo-only) or bundled with regulatory-takings provisions
     (Arizona Prop 207 passed; California Prop 90, Idaho Prop 2, Washington I-933 failed — that
     split is evidence about framing). Michigan 2006 Proposal 4, Florida 2006 Amendment 8, Georgia,
     Louisiana, Nevada Question 2, New Hampshire, North Dakota, Oregon, South Carolina, Texas 2009
     Prop 11, Virginia 2012 Question 1, Mississippi 2011 Initiative 31, etc. Verify every number.
   - **State legislative response**: how many states enacted post-*Kelo* reforms (Institute for
     Justice / Castle Coalition and NCSL counts; note IJ is an advocacy source and grade its
     strength) and how many changed their constitutions.
   - **Federal**: the Private Property Rights Protection Act — House passage 376–38 in 2005 (H.R.
     4128), later House passages (2012, 2014), Senate inaction; the 2006 executive order limiting
     federal takings for private development. Verify roll calls via clerk.house.gov or govtrack.
   - Elite/legal support across the spectrum (the *Kelo* dissent was joined by conservatives; the
     backlash was bipartisan in legislatures — cite roll-call bipartisanship where you can).
3. **The gate result** — bipartisan floor per §4.1 with the best number; which of the six failure
   modes could apply (stale data; "everyone agrees because no one is thinking about it"; bundling
   with regulatory takings, which is what sank the 2006 losers); verdict Strong/Moderate/Weak/Unpolled.
4. **The three non-polling tests** — this is the crux:
   - *Existential-problem test*: argue both sides fairly. Against: rare in practice, most states
     already reformed, a policy preference rather than a threat to the republic. For: it is a
     Bill-of-Rights-style individual liberty (property against the state), the Court's reading
     stands as federal law, state reforms vary and can be repealed, and it maps to the Freedom
     pillar. Do not decide it — lay it out.
   - *Symmetry test*: symmetric by construction? (binds every level of government equally; abuses
     historically hit poor and minority neighborhoods and small businesses under governments of
     both parties — pair examples).
   - *Why-an-amendment-not-a-statute*: the Court's interpretation of "public use" can only be
     changed by the Court or by amendment; the federal statute (PRPPA) is a funding condition, not
     a rule; state fixes don't reach federal law and are repealable. State this precisely.
5. **Framings tested** — "ban takings for private development" vs. "define public use" vs. broader
   "property rights" bundles; which polls/ballots show the bundling penalty.
6. **Fit with the slate** — where it would sit (Freedom pillar, next to Privacy), the "ten
   amendments" branding consideration (see `research/MARKETING_IDEAS.md`), and whether it would
   dilute or strengthen the slate. Neutral, factual.
7. **Recommendation options** — (a) accept as target 9; (b) hold as candidate pending fresh
   polling with party breakdowns (specify the poll question); (c) reject on the existential test.
   Give the founder the evidence for each; do not pick for him.
8. **Sources** — every URL, and every number web-verified by you (WebFetch/WebSearch). If a host
   blocks fetching (congress.gov does), use govtrack.us / clerk.house.gov / ballotpedia.org /
   NCSL / state legislature sites / law.cornell.edu / supreme.justia.com. Never invent URLs;
   list anything you could not verify under an **Unverified** heading rather than citing it.

Also, at the end of the memo, add a **`## Site summary`** block: one sentence (≤ 35 words) suitable
for the candidates list on the website (`site/src/content/data/candidates.json`, field `note`),
neutral in voice.

## Return
Return ONLY JSON: {"memoPath": "...", "floor": "<best bipartisan floor with pollster/year>", "verdict":
"<Strong/Moderate/Weak/Unpolled>", "existentialTest": "<one-line summary of the tension>",
"siteSummary": "<the one sentence>", "unverified": ["..."], "notes": "..."}
