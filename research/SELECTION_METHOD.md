# Amendment Selection Method

**How the foundation decides which amendment categories to pursue, hold, or reject — written so a fresh agent can re-run the process and land on the same slate.**

*Changelog: 2026-08-18 — figures re-verified; 2 corrections applied in place (git history has the diff).*

This document was reconstructed on 2026-08-17 from the archived working sessions in [`docs/conversations/`](../docs/conversations/) (2026-08-06 through 2026-08-18) and the research corpus they produced. It is *descriptive first* — it records the process as it was actually run — and *prescriptive second* — Section 9 turns it into an operating checklist. Where the founder made a judgment call that the evidence alone would not force, that call is recorded as a rule so it is applied the same way next time.

If you are a new agent: read [Section 9](#9-operating-instructions-for-a-new-agent) first, then come back for the reasoning.

---

## 1. The frame every decision sits inside

Everything below is an implementation of four commitments in [MISSION.md](MISSION.md). They are not decoration; each one has vetoed at least one category.

| Commitment | What it means operationally | What it has killed or shaped |
| --- | --- | --- |
| **Bipartisanship as fundamental** | Ratification needs 2/3 of Congress + 3/4 of states. Consensus is the *strategy*, not a nicety. | The whole triage design (Section 3). |
| **The Full-Spectrum Test** | Must appeal from MAGA Republicans to socialist Democrats. Measured, not hoped: the **bipartisan floor**. | Abortion, voting rights, Electoral College, court expansion, Senate structure, DC statehood, self-pardon ban, qualified immunity. |
| **Only problems that threaten the future of the country** | No policy preferences, partisan advantage, or symbolic wins. Amendments are for the ages. | Civic-information/AI ("great idea for a nonprofit, not an amendment"), free-enterprise and opportunity pillars (no amendment mapped to them). |
| **Rules that bind everyone (veil of ignorance)** | Every draft binds all future presidents, both parties, forever. Pair each side's abuses. | Appointment-default rule accepted as candidate *because* symmetric; enforcement clauses held back where only one side's abuses were in view; post-2030 effective date on redistricting. |

Plus three "How We Work" rules that govern the *output* of the process: **evidence before advocacy** (publish what fails alongside what passes), **principles not machinery** (Section 6), and **ratify consensus, don't manufacture it** (sequencing — Section 7).

---

## 2. Inputs — where ideas come from

Ideas enter the pipeline from four sources, and provenance is always kept.

1. **Founder seed list.** The initial four (policing, privacy, term limits, campaign finance) plus later additions in the founder's own edits to [CATEGORIES.md](CATEGORIES.md).
2. **Named contributors.** Friends' notes and texts (Ryan Ward, Austin Burns) transcribed into [AMENDMENT_IDEAS.md](AMENDMENT_IDEAS.md) *with name attribution preserved*, even when the idea is later rejected. Rejected ideas stay in the file, struck through and marked out of scope, so who-proposed-what is never lost.
3. **Polling-derived gap search.** Ask: "what broadly popular, bipartisan reform ideas are we missing?" and answer it from independent public surveys (Pew, Gallup, AP-NORC, Marquette, YouGov/Economist, UMD Program for Public Consultation's *Common Ground* catalog of 200+ positions). This is what surfaced the stock-trading ban, age limits, lobbying cooling-off, balanced budget, redistricting, and pardon transparency.
4. **Public-thread mining.** Scrape a large public discussion (the r/PoliticalDiscussion thread, 478 comments) and sort every idea into: matches our targets / matches our candidates / matches our rejects / genuinely new. Attribute by username and score. This surfaced House expansion, the 13th Amendment exception clause, and the appointment-default rule.

**Rule:** every idea gets a line in AMENDMENT_IDEAS.md with its source. Every *category* gets a line in CATEGORIES.md in exactly one of three buckets (Section 3). Nothing is silently dropped.

---

## 3. Triage — three buckets, dated, with reasons

[CATEGORIES.md](CATEGORIES.md) is the single source of truth. Every category is in exactly one section:

- **Target** — accepted; gets a full research doc and draft text.
- **Candidate** — under consideration; not yet accepted or rejected; carries a note saying what evidence would resolve it (usually "unpolled — gate on X").
- **Rejected** — excluded; carries the rejection *date* and a one-to-three-sentence *rationale* that names the failing test, and where applicable a *path back* ("could return if reframed around accountability and validated with fresh polling").

Two structural rules:

- **A rejection is never a judgment that the issue doesn't matter.** The written framing is always "cannot pass the full-spectrum test and would sink the broader effort by coding the whole project as partisan."
- **Rejections are revisable** if survey or salon work reveals a consensus framing. That is why the evidence and the path back are recorded.

The bucket assignments are the *founder's* decisions. The agent's job is to supply evidence, recommend, and record — then clean up formatting and re-sync the other docs after the founder edits.

---

## 4. The evidence gate — how "bipartisan" is measured

This is the heart of the method and the reason results are reproducible.

### 4.1 The metric: bipartisan floor

For each category, take the **best-polled core proposal** and report the **lower** of Republican and Democratic support. That number is the *floor*.

> "The floor is the honest number: a 75% topline with a 40% floor is a partisan idea with a good press release."

Verdicts (from [POLLING_RESEARCH.md](POLLING_RESEARCH.md)):

| Verdict | Floor |
| --- | --- |
| **Strong** | ≥ 60% |
| **Moderate** | 45–59% |
| **Weak** | < 45% |
| **Unpolled** | no credible national data |

Working reality after triage: every surviving target has a floor of roughly **55% or better**, and the strongest (congressional term limits + stock-trading ban) sit at **86%+**. A "Weak" floor has been disqualifying every time it appeared; "Moderate" has been accepted only when the *framing* that reaches Strong is identifiable and honest (Section 4.3).

### 4.2 Evidence hierarchy

1. **Independent pollsters** with party breakdowns (Pew, Gallup, Marquette, AP-NORC, YouGov/Economist, Fox, Monmouth) — weighted most heavily.
2. **Real ballot results** — especially landslides in states of the *opposite* partisan lean from the idea's usual coding (Florida's 79% for a lobbying ban; Michigan 89% / New Hampshire 81% / Missouri 75% for digital-privacy amendments; red-state landslides on state 13th-Amendment clauses).
3. **Cross-party legislative votes** (data-broker warrant bill 219–199 with both parties' majorities; House passing a stock-trading bill).
4. **Advocacy-commissioned polls** — used, but flagged as such and never allowed to carry a verdict alone.

Every number in the corpus carries a source link and a date. Figures recalled from memory are labeled *"verify before use."*

### 4.3 Six failure modes the gate is designed to catch

These are the tests actually applied. Each has a real casualty.

| Test | Question | Casualty / example |
| --- | --- | --- |
| **High-topline / low-floor** | Is the overall number hiding a party split? | Direct popular vote 63% overall but 46R/80D → Electoral College rejected. Self-pardon ban 81D/43R (YouGov, Aug. 15–19, 2024) → rejected. |
| **Depth (trade-off collapse)** | Does support survive when costs are named? | Balanced budget 69–80% abstract → 31% when entitlement cuts specified (Fox 2011) → rejected. |
| **Staleness** | Is the data from a peak-salience moment? | Qualified immunity: all credible data 2020–21, already declining → rejected. |
| **Incumbent / regime coding** | Does each party's floor flip depending on who currently holds power? | Filibuster reform ("positions flip with Senate control") → unstable. Civil-service independence: R support 87→66 and 64% of R now back loyalty firing → regime-coded. Family-pardon ban's D floor fell 88→42 after a Democratic president used it → kept, but flagged for forward-looking re-poll. |
| **Framing dependency** | Is there *one honest framing* that clears the bar, and is it the framing we would actually draft? | Privacy: informational/electronic-data framing wins landslides; autonomy framing reads as an abortion amendment → draft the informational version. QI: "hold officers accountable" polls 84% (64R) but "eliminate QI" doesn't → rejected until reframed. |
| **Abuse-vs-remedy gap** | Do both parties oppose the *abuse* but split on the *structural fix*? | DOJ independence: 60% oppose president directing DOJ at opponents but 36R on the remedy → candidate, not target. FCC: abuse framing 61R floor, removal-protection remedy 39R/89D → mixed. |

### 4.4 The gate is applied twice

- **To categories** (is this a target?) — Section 3.
- **To individual draft principles inside an accepted category** (does this clause go in the amendment?) — Section 6.4. The founder's instruction, verbatim: *"only include ones that pass our high bar for bipartisan popularity (or likely will be proven so after detailed polling based on known comparatives)."* That parenthetical is the one place judgment is allowed to substitute for a direct poll — and only when there is a close, named comparator.

---

## 5. The three non-polling tests

Passing the evidence gate is necessary, not sufficient. Three further tests were applied to every category and are the reason some popular ideas are still not targets.

### 5.1 Existential-problem test

Does this solve a problem that threatens the future of the country, or is it a policy preference / good-government nicety? Civic-information/AI failed here ("great idea for a new company or non-profit"). Good-government data (USAFacts-style) is parked as a candidate for the same reason despite likely polling 70–90%. Free enterprise and opportunity were removed from the mission pillars because no amendment mapped to them — the mission was tightened to only claim values with real amendments behind them (Freedom, Democracy, Rule of Law, Good Government).

### 5.2 Symmetry (veil-of-ignorance) test

Can this be written so it binds both parties equally and can be sold with each side's abuses paired (Hunter Biden + January 6; Texas + Prop 50)? Ideas that are symmetric *by construction* (appointment-default rule, once-per-decade redistricting with post-2030 start, term limits with incumbent grandfathering) get a lighter lift. Ideas that are currently aimed at one side's behavior are held back until the dual framing tests out (appropriations fidelity: "the same clause would have blocked Biden-era spending beyond appropriations and border-wall reprogramming" — if it can't carry both, it drops to the statutory list).

### 5.3 Why-an-amendment-not-a-statute test

Every target must have a specific answer to "why does this need to be in the Constitution?" The four answers that have been accepted:

1. **Courts struck the statutes** (campaign finance — *Buckley*; lobbying — *Miller v. Ziegler* under the Petition Clause).
2. **The Court exempted itself** (ethics — §208 exempts President, Congress, SCOTUS; judicial term limits — life tenure).
3. **Congress structurally cannot self-bind** (term limits, ethics).
4. **The text is silent** and that silence is what defiant actors cite (executive compliance — the Constitution never says court orders bind the executive; redistricting timing — *LULAC* found no prohibition exists).

Ideas that are really statutory (special-counsel protections, DOJ firewall laws, pardon-bribery statutes) are **flagged as statutory** in AMENDMENT_IDEAS.md and parked, not drafted as amendments.

---

## 6. Deep research and drafting — the per-category protocol

Once a category is a target, it gets a research doc built to a fixed template so the eight docs are comparable and the gate can be applied uniformly.

### 6.1 Research doc template

1. **Amendment Framework** — core provisions the amendment might cover; challenges in drafting and adoption; strategic read.
2. **US Legal & Legislative Landscape** — history, prior amendment proposals (how close did they get, why did they die), current vehicles, key court decisions.
3. **State Models** — actual constitutional text from states, with ballot margins where available. Red-state precedents for ideas coded left, and vice versa, are called out explicitly.
4. **International Models** — how peer democracies solved it; include the *evasion file* (how the rule was gamed elsewhere — Russia, Venezuela).
5. **International Abstraction Lessons** — numbered, portable lessons.
6. **Constitutional Abstraction Candidates** — draft formulations, each with supporting evidence and ⚠️ **trap notes** (rigidity trap, review-standard trap, mercy-destruction trap, blast-radius trap…).
7. **Amendment-grade principles** — the subset that is *general, cross-ideological, and court-testable* **and** clears the full-spectrum bar, with a one-line gate-check note per principle.
8. **Held back — does not yet clear the full-spectrum bar** — full drafting retained; each item states *what evidence would bring it back*. This doubles as the commissioned-polling to-do list.
9. **Package skeleton** — how the surviving clauses assemble.
10. **Review Additions (dated)** — appended by outside review for substantive additions only; verified factual errors are fixed in place with a changelog line (Section 8).

Research is done by fanning out one deep-research agent per category in parallel, then compiling.

### 6.2 Drafting doctrine ("principles, not machinery")

- Constitutional text carries **durable principles**: rights, limits, duties that hold for a century.
- **Dollar amounts, thresholds, procedures, agency designs go to Congress "by law."**
- Every draft includes **express savings clauses** for speech, press, petition, and mercy as relevant.
- **Grandfather incumbents** (22nd Amendment lesson: buy the vote) and **prospective effective dates** (redistricting post-2030) so the rule is written behind the veil.
- Borrow the **27th Amendment** as the template for anti-self-dealing rules — the public ratifies those enthusiastically.
- Include **anti-evasion clauses** where the international evasion file shows the rule being gamed.
- Prefer **categorical exclusions** over motive tests (pardons: family/naming carry the load; bribery half drafted as a transaction test).
- Prefer **tiered / safe-harbor** designs that leave good-faith litigation intact (executive compliance: absolute at SCOTUS, stay-and-appeal below).

### 6.3 Blast-radius pressure test

Before a principle is kept, ask: **"How would this change people's current expectations of how government functions?"** The canonical example: "No government acquisition of personal information without judicial process" would, read literally, require a judge for W-2s, Census, benefits, public-health reporting, and AML. The fix was scoping to *investigative/intelligence* acquisition. Every abstraction candidate was rewritten to "keep the bipartisan force without the blast radius." If a clause can't be scoped without losing its point, it is held back.

### 6.4 The principle-level gate

After the docs exist, run the gate on every principle. What actually happened when it was applied (2026-08-12):

| Category | Survived without cuts | Held back (with the reason) |
| --- | --- | --- |
| Campaign finance, Privacy, Lobbying | Everything — already resting on supermajorities or landslide ballots | — (lobbying lifetime ban later re-based on corrected evidence, still held) |
| Term limits | 2 Senate / 6 House prospective; 18-yr SCOTUS on biennial seats; anti-evasion | *Thornton*-settlement uniformity clause (unpolled, construction-only) |
| Ethics | Trading/self-dealing ban w/ blind-trust safe harbor; end presidential exemption; enforceable judicial code | Emoluments remedy (every real framing splits 40–60 pts by party) |
| Redistricting | Once-per-decade rule w/ court-remedy exception; post-2030 start | Anti-favoritism floor (~half of R call gerrymandering a major problem); commission mandate (57R, Ohio measure lost 54–46) |
| Executive compliance | Tiered bindingness + safe-harbor (the minimum the 84% / 78R directly supports) | Appropriations fidelity (impoundment unpolled, GOP elite position is ICA repeal); independent enforcement; consequences clause |
| Pardon reform | Public justification; family ban; sold-pardon ban; individual naming | Self-pardon ban (43R — consistent with category rejection); conspirator exclusion (50R, advocacy-only); Mondale congressional-disapproval check (never polled) |

The survivors are compiled into [PROPOSED_AMENDMENTS.md](PROPOSED_AMENDMENTS.md) — text only, no notes, one article per category — as the artifact for salon review and eventually a drafting attorney.

**Pattern to know:** the gate systematically strips *enforcement machinery* — it is always the unpolled or partisan-coded part. "When is principle-without-machinery still worth constitutionalizing?" is a standing open question logged in [SALON_TOPICS.md](SALON_TOPICS.md).

---

## 7. Sequencing rule (why the near-term work is research, polling, salons, states)

Amendments succeed when they **lock in agreement the country has already reached** through state constitutions, court decisions, ballot measures, and bipartisan votes (the Brazil lesson: statute → court → unanimous lock-in). So the roadmap is: list ideas → categorize → survey → salons → state-level progress → amendment. Polling gaps discovered during research become the survey spec; open judgment calls become salon topics with an argument map (case for / case against / candidate resolutions).

---

## 8. Outside review and verification

- After the corpus is built, run an **outside completeness-and-accuracy review** with the strongest available non-Claude model (Gemini's top model was used).
- **Every proposed addition is independently verified against a fetched source** before it enters the corpus; the reviewer's own URLs and claims are rejected when they can't be verified (this happened often — see "Reviewer errors caught" in [RESEARCH_REVIEW_2026-08-17.md](RESEARCH_REVIEW_2026-08-17.md)).
- **Verified factual errors are fixed in place** (rule changed 2026-08-18; before that, corrections were queued under `### Flagged corrections` for the founder to apply and existing text was never altered). Once a correction has been verified at its source, the wrong number, date, or attribution is edited where it appears — in this corpus, in POLLING_RESEARCH.md, and in the site's footnotes — and the file gets **one dated changelog line** near the top: `*Changelog: YYYY-MM-DD — figures re-verified; N corrections applied in place (git history has the diff).*` Git history is the audit trail; no inline "Corrected: old → new" bullets and no founder-to-apply queues.
- **Appending is reserved for substantive additions** — new evidence, changed gate results, reviewer disagreements — in a dated `## Review Additions` section grouped by the section it extends. Typo and number fixes are not logged there.
- **The reviewer ledgers stay as written** ([RESEARCH_REVIEW_2026-08-17.md](RESEARCH_REVIEW_2026-08-17.md), [candidates/REVIEW_LOG_2026-08-18.md](candidates/REVIEW_LOG_2026-08-18.md)): they record which reviewer claims were verified and which were wrong, which is a different question from what the corpus now says.
- Gate-check impacts are stated explicitly ("none change a verdict; three sharpen one").

---

## 9. Operating instructions for a new agent

Follow these in order. Do not skip to drafting.

**Read first (in this order):** [MISSION.md](MISSION.md) → [CATEGORIES.md](CATEGORIES.md) → [POLLING_RESEARCH.md](POLLING_RESEARCH.md) summary tables → this document → [ROADMAP.md](ROADMAP.md).

**Step 1 — Intake.** Log every incoming idea in AMENDMENT_IDEAS.md with source and date. Never drop or merge away an idea; strike through and mark out-of-scope instead.

**Step 2 — Gap search.** Run the polling-derived gap search against the current target list using independent pollsters and UMD Common Ground. Report gaps with topline, R, D, floor, source, date.

**Step 3 — Triage each category** into Target / Candidate / Rejected using, in this order:
1. Bipartisan floor (Section 4.1) — Weak is disqualifying; Unpolled → Candidate with the gate named.
2. The six failure-mode checks (Section 4.3).
3. Existential-problem test (5.1).
4. Symmetry test (5.2).
5. Why-an-amendment test (5.3) — no answer → statutory list, not a target.
Write the rationale in the CATEGORIES.md house style: bold name, italic date, one-to-three sentences naming the failing test, and a path back where one exists. **Recommend; the founder decides.**

**Step 4 — Deep research** each target to the template in 6.1. One agent per category in parallel; mirror the existing docs' section names exactly.

**Step 5 — Blast-radius pressure test** every abstraction candidate (6.3); rewrite to keep the force without the radius.

**Step 6 — Principle-level gate** (6.4). Keep only principles that clear the bar or have a close named comparator that does. Move the rest to Held back with the evidence that would restore them.

**Step 7 — Compile** survivors into PROPOSED_AMENDMENTS.md as bare text. Update the package skeleton in each doc to match.

**Step 8 — Log open questions** as SALON_TOPICS.md entries with an argument map. Log polling gaps as the survey spec.

**Step 9 — Outside review** per Section 8; verify everything against a fetched source; **fix verified factual errors in place and add one dated changelog line to each file touched**; append only substantive additions (new evidence, changed gate results, reviewer disagreements); leave the reviewer ledger as written.

**Step 10 — Re-sync.** After the founder edits CATEGORIES.md, renumber and re-sync AMENDMENT_IDEAS.md, POLLING_RESEARCH.md, and the research doc index; keep rejected material retitled ("Rejected YYYY-MM-DD") rather than deleted.

**What to decide yourself vs. ask:** decide formatting, structure, evidence gathering, gate application, and recommendations. Ask (or flag and proceed with an explicit assumption) on: promoting or demoting a category, whether a statutory idea stays in scope, framing choices that change what the amendment *is* (informational vs. autonomy privacy), and anything that touches the mission's pillars.

---

## 10. Decision log — the slate as of 2026-08-17 and the deciding criterion for each

This table is the consistency check. A new agent following Sections 2–9 should be able to reproduce every row from the cited evidence.

### Targets (8)

| # | Category | Floor / evidence anchor | Why an amendment | Notes |
| --- | --- | --- | --- | --- |
| 1 | Campaign Finance | 71% (Pew 2023 spending limits, 71R/76D); 25 states have called for an amendment | Courts struck statutes (*Buckley*) | Draft targets *Buckley*, not just *Citizens United*; press savings clause |
| 2 | Term Limits (Congress + judiciary) | 86% Congress (90R/86D); 73% SCOTUS fixed terms (Marquette 2026) | Congress can't self-bind; Court exempted itself | Best-in-class; 12-yr caps not 6; anti-evasion clause |
| 3 | Ethics (President, Congress, SCOTUS) | Stock ban 86% (87R/88D); ethics-code enforcement 90% (88R/93D); presidential piece thinner (~40–67R, framing-dependent) | §208 exempts exactly these offices; 27th Amendment precedent | Emoluments remedy held back |
| 4 | Privacy | 68% (Pew data regulation, 68R/78D); state amendments 75–89% | No federal privacy amendment ever attempted; amendment dissolves the preemption/PRA fights that kill every statute | **Informational framing only** — autonomy framing reads as abortion |
| 5 | Lobbying | 65–72% cooling-off (65R/67D; 72R/72D); foreign-agent ban 71% (71R/74D); Florida 79% | *Miller v. Ziegler* — statutes struck under Petition Clause | Lifetime ban held back (~50% standalone) |
| 6 | Redistricting (mid-decade ban) | ~2/3 incl. majority of R and I (Common Cause 2025); ≥60% all parties for commissions (CLC) | *LULAC* — no prohibition exists | Minimal two-sentence version; commission mandate and favoritism floor held back |
| 7 | Executive Compliance with SCOTUS | 84% (78R/92D, Marquette 2025) — strongest floor after term limits | Text is silent; enforcement is circular | Only declaratory core survives; open question whether that is worth the campaign |
| 8 | Limited Pardon Reform | Family ban 77% (64R/88D, pre-2025); corruption "big problem" 92% (90R/93D) | Pre-charge pardons settled law (*Murphy v. Ford*); Model-4 power | Self-pardon ban excluded; forward-looking re-poll a priority |

### Candidates (14) — each carries its gate

Age limits (76% floor — strongest candidate; likely rides with term limits) · Executive-branch limits (power of the purse, executive privilege, executive immunity — abuse opposed, remedies unpolled/asymmetric) · FBI/DOJ independence (36R on remedy) · Civil-service independence (regime-coded) · FCC/agency independence (mixed) · DC statehood (13R — effectively rejected on evidence but not yet formally moved) · PR statehood (41R) · Filibuster (unstable) · Fair single-member districting, proportional representation, fusion voting, good-government data (unpolled) · House expansion (Reddit; needs Wyoming-Rule / cube-root polling) · 13th Amendment exception clause (Reddit; red-state ballot precedents to verify) · Appointment-default rule (Reddit; symmetric; unpolled; companion clause to term limits).

### Rejected (10) — and the test each failed

Abortion (no consensus framing) · Voting rights (access-vs-integrity partisan split) · Electoral College (46R/80D) · SCOTUS expansion (not bipartisan) · Senate structure (not bipartisan) · Election technology (not bipartisan, not popular) · Civic information/AI (existential test — a nonprofit, not an amendment) · Self-pardon ban (81D/43R, YouGov Aug. 2024) · Qualified immunity (28–46R, stale; path back = accountability framing + fresh poll) · Balanced budget (depth test — 31% under trade-offs).

---

### Decision log update — 2026-08-18 (candidate pass)

After one memo per candidate (research/candidates/, same criteria as targets and rejects; recommendations to the founder in CATEGORIES.md), the founder decided:

- **Targets (9):** Target 9 added — **Striking the 13th Amendment's exception clause** (66% R / 85% D on state-measure wording, YouGov Oct 2024; four Republican-voting states passed state versions at 61–80%; symmetric by construction; the clause is constitutional text, so only an amendment removes it). Target 2 (Term Limits) absorbs two clauses: a **judicial retirement age** (68% R / 82% D Pew 2023; 71% R / 92% D Fox 2024; five certified state ballot results refusing to loosen judicial retirement ages) and the **confirmation-refusal default** (appointment-default rule, knock-out variant — folded as the drafting that closes the staggering-trap gap; symmetric by construction; unpolled).
- **Candidates (11) — each with a named poll:** age limits for Congress (78% D / 83% R on the concept; the number unpolled) · executive lawfulness (37% R appropriations; symmetric clause unasked) · FBI/DOJ independence (remedy unpolled since 2018) · independent-agency insulation (42–54% R, moving) · civil-service independence (regime-coded; remedy unpolled) · fair single-member districting (76% R / 92% D commissions, NBC 2025 — trade-off untested) · proportional representation, fusion voting, good-government data (unpolled; §5.3 open) · eminent domain (79% D / 85% R, 2005 — stale; §5.1 open) · SCOTUS supermajority (unpolled).
- **Rejected (13):** the ten of 2026-08-06 plus **DC/Puerto Rico statehood** (13% R; PR statutory under Art. IV §3), **filibuster reform** (8% R eliminate / 19% D keep as is; regime-coded both ways — symmetry), **House expansion** (23% R; 11% R costs-named; statutory).
- New failure-mode language surfaced by the pass and worth adding to §4.3 next revision: **principle-vs-parameter gap** (age limits: every party split is on the *concept*, none on the *number*) and **abstract-vs-live gap** (appointment default: 78% reject party-of-the-president as grounds when no seat is open; ~50-point flip when one is).

## 11. Traps catalog (things that have fooled us or nearly did)

- **A pollster's "65%" was a cumulative "at least five years" total, and "32%" was a forced-choice share, not standalone opposition** — always check whether a figure is standalone favor/oppose before using it as a floor. (Lobbying, corrected 2026-08-17.)
- **Numbers recalled from memory** — label "verify before use" and verify before they reach a page.
- **Attaching a broad-battery number to a specific mechanism** — the 79% "public justification" figure was Brennan's general corruption battery, not that clause. Label adjacent evidence as adjacent.
- **Autonomy-language privacy** — the *Griswold/Roe* root; collides with the abortion rejection.
- **Motive tests** in constitutional text invite judicial excavation of intent; prefer categorical rules and transaction tests.
- **Legislative-consent models can destroy the power** (Rhode Island's Senate-consent pardon clause: no living-person pardon in years). Keep any check post hoc and supermajority-gated.
- **Same principle, different incumbent** — a floor measured before "your side" used the power is not the floor you will have after. Re-poll in forward-looking, both-parties wording ("any future president").
- **The reviewer model fabricates or mislinks sources often** — never let a reviewer's claim in without fetching the source yourself.

---

*Sources for this reconstruction: `docs/conversations/2026-08-06_93aa0227.md` (category triage, polling gate, deep research, principle gate, mission method), `2026-08-12_37dc2531.md` (mission pillars), `2026-08-14_698133dd.md` (site build, editorial passes, review-decision log, outside research review), and the research docs they produced.*
