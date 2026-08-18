# Registry

**This file is generated from [`site/src/content/data/registry.json`](../site/src/content/data/registry.json) and mirrors it for reading. Edit the JSON, not this file.** The registry is the single place where every idea in the corpus — a whole focus area or a clause variant inside one — sits in exactly one of three buckets: **proposed**, **candidate**, or **rejected**. Each entry carries the evidence behind its placement (a bipartisan floor with pollster and source, or an explicit statement that none exists), and the one thing that would move it: a **gate** and a survey specification for candidates, a **failed test** and a **path back** for rejections, and the **section** it now occupies for proposed clauses. The schema is set out in [REGISTRY_INVENTORY_2026-08-18.md](REGISTRY_INVENTORY_2026-08-18.md) §B. Bucket assignments follow [SELECTION_METHOD.md](SELECTION_METHOD.md) and the founder's decisions of 2026-08-18 recorded in [CATEGORIES.md](CATEGORIES.md).

**How twins are represented.** Where a clause held back inside an amendment is the same idea as an existing candidate or rejected category, the two are **merged into one entry** rather than listed twice — one idea, one gate, one poll. The surviving entry carries `alsoListedUnder` (the amendment slugs whose "What we left out" section should render it) and `supersedes` (the retired clause ids, so an old link still resolves). Three entries are merged twins: `executive-lawfulness` absorbs the appropriations-fidelity clause held back in the executive-compliance article; `fair-districting` absorbs both the anti-favoritism floor and the neutral-authority principle held back in the redistricting article; and `self-pardon-ban` absorbs the self-pardon clause held back in the pardon article (reopened 2026-08-18 as a candidate clause of that article, so it is now filed as a clause rather than a category). Where a merged entry contains pieces that resolve on different evidence, `subItems` carries each piece with its own gate and poll question — which is why `fair-districting`, `executive-lawfulness`, `exec-consequences`, and `appointment-default` show sub-rows below.

*Changelog: 2026-08-18 — `self-pardon-ban` moved from Rejected (category) to Candidate (clause of `pardon-reform`) on the founder's reopening decision; counts updated.*

## Proposed (11)

The nine target amendments and the clauses folded into them. For clauses, the last column gives the section of [PROPOSED_AMENDMENTS.md](PROPOSED_AMENDMENTS.md) the text now sits in.

| id | Title | Kind / parent | Floor / verdict | Section | Memo | Page |
| --- | --- | --- | --- | --- | --- | --- |
| `campaign-finance` | Campaign Finance | category | **71R / 76D** (Pew Research Center 2023) | — | [memo](CAMPAIGN_FINANCE_RESEARCH.md) | `/amendments/campaign-finance` |
| `term-limits` | Term Limits | category | **90R / 86D** (Pew Research Center 2023) | — | [memo](TERM_LIMITS_RESEARCH.md) | `/amendments/term-limits` |
| `ethics` | Ethics | category | **87R / 88D** (University of Maryland Program for Public Consultation 2023) | — | [memo](ETHICS_RESEARCH.md) | `/amendments/ethics` |
| `privacy` | Privacy | category | **68R / 78D** (Pew Research Center 2023) | — | [memo](PRIVACY_RESEARCH.md) | `/amendments/privacy` |
| `lobbying` | Lobbying | category | **72R / 72D** (Program for Public Consultation, University of Maryland 2022) | — | [memo](LOBBYING_RESEARCH.md) | `/amendments/lobbying` |
| `redistricting` | Redistricting | category | **70R / 73D** (Marquette Law School Poll 2025) | — | [memo](REDISTRICTING_RESEARCH.md) | `/amendments/redistricting` |
| `executive-compliance` | Executive Compliance with the Courts | category | **78R / 92D** (Marquette Law School Poll 2025) | — | [memo](EXECUTIVE_COMPLIANCE_RESEARCH.md) | `/amendments/executive-compliance` |
| `pardon-reform` | Limited Presidential Pardon Reform | category | **64R / 88D** (YouGov for Protect Democracy (advocacy-commissioned) 2024) | — | [memo](PARDON_RESEARCH.md) | `/amendments/pardon-reform` |
| `thirteenth-exception` | Abolition of the Punishment Exception | category | **66R / 85D** (YouGov 2024) | — | [memo](THIRTEENTH_EXCEPTION_RESEARCH.md) | `/amendments/thirteenth-exception` |
| `judicial-retirement-age` | A retirement age for federal judges | clause · term-limits | **68R / 82D** (Pew Research Center 2023) | Term Limits, Section 3 | [memo](candidates/AGE_LIMITS_CANDIDATE.md) | `/amendments/term-limits` |
| `appointment-default` | Confirmation-refusal default for Supreme Court seats | clause · term-limits | Unpolled — folded on symmetry and drafting-necessity grounds, not on a number | Term Limits, Section 2 | [memo](candidates/APPOINTMENT_DEFAULT_CANDIDATE.md) | `/amendments/term-limits` |
| ↳ `appointment-default-knockout` | Knock-out variant (adopted) | sub-item (proposed) | — | Term Limits, Section 2 | — | — |
| ↳ `appointment-default-deemed-confirmed` | Deemed-confirmed variant (not adopted) | sub-item (candidate) | — | Unpolled; explicitly not folded | — | — |

## Candidate (22)

Under consideration, not accepted and not rejected. Each carries a **gate** — the specific evidence that would resolve it — and, where the corpus has written one, a survey specification with wording and a numeric threshold.

| id | Title | Kind / parent | Floor / verdict | Gate | Memo | Page |
| --- | --- | --- | --- | --- | --- | --- |
| `age-limits` | Age limits for Congress | category | **83R / 78D** (NPR/PBS News/Marist 2026) | Concept Strong; named age unpolled | [memo](candidates/AGE_LIMITS_CANDIDATE.md) | `/candidates/age-limits` |
| `executive-lawfulness` | Stopping unlawful executive action | category | **37R / 88D** (Marquette Law School Poll 2025) | Symmetric appropriations poll unrun; sub-items gated separately | [memo](candidates/EXECUTIVE_LAWFULNESS_CANDIDATE.md) | `/candidates/executive-lawfulness` |
| ↳ `executive-lawfulness-appropriations` | Appropriations fidelity | sub-item (candidate) | — | Symmetric forward-looking poll clearing 60% R | — | — |
| ↳ `executive-lawfulness-privilege` | Limits on executive privilege | sub-item (candidate) | — | Genuinely unpolled; no why-an-amendment answer | — | — |
| ↳ `executive-lawfulness-immunity` | Narrowing executive immunity | sub-item (candidate) | — | Regime-coded; single-sourced campaign-window fieldwork | — | — |
| `fbi-doj-independence` | FBI / DOJ independence | category | **44R / 76D** (Monmouth University Polling Institute 2018) | Remedy unpolled since 2018 | [memo](candidates/DOJ_INDEPENDENCE_CANDIDATE.md) | `/candidates/fbi-doj-independence` |
| `civil-servant-independence` | Civil servant independence | category | **95R / 96D** (Partnership for Public Service / Impact Research 2024) | Regime-coded; operative remedy unpolled | [memo](candidates/CIVIL_SERVICE_CANDIDATE.md) | `/candidates/civil-servant-independence` |
| `fair-districting` | Fair single-member districting | category | **76R / 92D** (NBC News Decision Desk / SurveyMonkey 2025) | Strong floor; trade-off untested | [memo](candidates/FAIR_DISTRICTING_CANDIDATE.md) | `/candidates/fair-districting` |
| ↳ `fair-districting-anti-favoritism` | Anti-favoritism floor | sub-item (candidate) | — | Federalized Florida wording, 60% R | — | — |
| ↳ `fair-districting-neutral-authority` | Neutral districting authority | sub-item (candidate) | — | Constitutional and costs-named 'who may not draw' wording, 60% R | — | — |
| `proportional-representation` | Proportional representation | category | Unpolled — no independent national poll with a party breakdown asks the mechanism; framings on the same idea spread from 24% to 63% | Unpolled; statutory route open | [memo](candidates/PROPORTIONAL_REPRESENTATION_CANDIDATE.md) | `/candidates/proportional-representation` |
| `good-government-data` | Good-government data | category | Unpolled as a mandate — the nearest party-split proxy is 45% R / 58% D on open data (Pew 2014), and the trust series flips by regime | Unpolled mandate; regime-coded | [memo](candidates/GOOD_GOVERNMENT_DATA_CANDIDATE.md) | `/candidates/good-government-data` |
| `fcc-independence` | FCC and independent-agency independence | category | **42R / 61D** (Marquette Law School Poll 2026) | Regime-coded; forward-looking re-poll | [memo](candidates/AGENCY_INDEPENDENCE_CANDIDATE.md) | `/candidates/fcc-independence` |
| `fusion-voting` | Fusion voting | category | **55R / 61D** (Fairleigh Dickinson University (New Jersey only) 2023) | Unpolled nationally; existential test open | [memo](candidates/FUSION_VOTING_CANDIDATE.md) | `/candidates/fusion-voting` |
| `eminent-domain` | Eminent domain limits for private development | category | **85R / 79D** (Saint Index / UMass Lowell Center for Economic and Civic Opinion 2005) | Strong but stale; existential test open | [memo](candidates/EMINENT_DOMAIN_CANDIDATE.md) | `/candidates/eminent-domain` |
| `scotus-supermajority` | Supermajority for the Supreme Court to strike down federal laws | category | Unpolled — no independent national poll with a party breakdown asks the mechanism; proxies are regime-coded (Court approval 75% R / 11% D, Gallup 2025) | Unpolled; regime-coded proxies | [memo](candidates/SCOTUS_SUPERMAJORITY_CANDIDATE.md) | `/candidates/scotus-supermajority` |
| `term-limits-uniformity` | Uniformity and the Thornton settlement | clause · term-limits | Unpolled — and, unusually, unpollable in a form that would carry a verdict; it adds no rule, only a canon of construction | Drafting counsel, not a poll; the state-election-power half risks being read against the redistricting article | [memo](candidates/clauses/TERM_LIMITS_UNIFORMITY_CLAUSE.md) | `/amendments/term-limits` |
| `ethics-emoluments-remedy` | An enforceable emoluments clause | clause · ethics | **33R / 82D** (Economist/YouGov (conduct framing; the remedy itself has no published party split) 2026) | Neutral both-parties polling on emoluments enforcement | [memo](candidates/clauses/ETHICS_EMOLUMENTS_REMEDY_CLAUSE.md) | `/amendments/ethics` |
| `lobbying-lifetime-ban` | A lifetime ban on all compensated lobbying | clause · lobbying | **47.5R / 54.4D** (UMD Program for Public Consultation (Q37 acceptability) 2022) | Standalone favor/oppose re-test clearing 60% in both parties | [memo](candidates/clauses/LOBBYING_LIFETIME_BAN_CLAUSE.md) | `/amendments/lobbying` |
| `exec-independent-enforcement` | Independent enforcement of court judgments | clause · executive-compliance | Unpolled — the mechanism has never been measured in any independent survey, and the design work behind it is unfinished | Unpolled; separation-of-powers design unfinished | [memo](candidates/clauses/EXEC_INDEPENDENT_ENFORCEMENT_CLAUSE.md) | `/amendments/executive-compliance` |
| `exec-consequences` | Consequences for willful defiance of a court order | clause · executive-compliance | Unpolled — the parent article's 76-80% Republican floor covers the duty and says nothing about the penalty; the nearest measurement of an appetite for penalties runs the other way (70% oppose impeaching judges, 52% R) | Three separate favor/oppose items, 60% floor each; must state who adjudicates after Trump v. Anderson | [memo](candidates/clauses/EXEC_CONSEQUENCES_CLAUSE.md) | `/amendments/executive-compliance` |
| ↳ `exec-consequences-disqualification` | Disqualification on a final judgment of willful defiance | sub-item (candidate) | — | Unpolled; 60% floor in both parties on the costs-named item | — | — |
| ↳ `exec-consequences-pardon-carveout` | Pardon carve-out for contempts of court | sub-item (candidate) | — | Unpolled; 60% floor in both parties on the costs-named item | — | — |
| ↳ `exec-consequences-salary-suspension` | Salary suspension during certified noncompliance | sub-item (candidate) | — | Unpolled; 60% floor in both parties on the costs-named item | — | — |
| `self-pardon-ban` | Presidential self-pardon ban | clause · pardon-reform | **61R / 85D** (YouGov (independent national) 2026) | Reopened; one independent forward-looking replication clearing 60% R | [memo](candidates/clauses/PARDON_SELF_PARDON_CLAUSE.md) | `/candidates/self-pardon-ban` |
| `pardon-conspirators` | No clemency for the president's own conspirators | clause · pardon-reform | **43R / 79D** (YouGov (independent national) 2026) | Forward-looking both-parties wording on the coordination mechanism, not the 'allies' relationship | [memo](candidates/clauses/PARDON_CONSPIRATORS_CLAUSE.md) | `/amendments/pardon-reform` |
| `thirteenth-wage-floor` | A constitutional wage floor for prison work | clause · thirteenth-exception | Unpolled — never asked in any form | Unpolled; would convert a deletion into a fiscal mandate on all fifty states | [memo](THIRTEENTH_EXCEPTION_RESEARCH.md) | `/amendments/thirteenth-exception` |
| `thirteenth-work-requirement-ban` | A ban on work requirements as such | clause · thirteenth-exception | Unpolled — this is the maximal reading of the amendment and is not what any ballot measure asked | Unpolled; goes beyond both the polled proposition and the international norm | [memo](THIRTEENTH_EXCEPTION_RESEARCH.md) | `/amendments/thirteenth-exception` |
| `thirteenth-private-hire-prohibition` | A private-hire prohibition | clause · thirteenth-exception | Unpolled — never asked in the United States in any form | Unpolled; a new substantive rule rather than a deletion | [memo](THIRTEENTH_EXCEPTION_RESEARCH.md) | `/amendments/thirteenth-exception` |
| `thirteenth-prospective-effective-date` | A prospective effective date | clause · thirteenth-exception | Unpolled — offered as an optional section for the founder to decide, not held on evidence | Founder decision outstanding; unpolled | [memo](THIRTEENTH_EXCEPTION_RESEARCH.md) | `/amendments/thirteenth-exception` |

## Rejected (16)

Deliberately excluded. Each carries the **test it failed** and, where one exists, a **path back**: the specific poll and threshold that would reopen it. A rejection is a judgment about evidence, not about whether the issue matters.

| id | Title | Kind / parent | Floor / verdict | Failed test | Memo | Page |
| --- | --- | --- | --- | --- | --- | --- |
| `pardon-congressional-disapproval` | Congressional disapproval of pardons | clause · pardon-reform | **30R / 73D** (YouGov (independent national) 2026) | High topline, low floor; abuse-vs-remedy gap; the mercy-destruction trap | [memo](candidates/clauses/PARDON_CONGRESSIONAL_DISAPPROVAL_CLAUSE.md) | `/amendments/pardon-reform` |
| `ethics-civil-service-coverage` | Extending the trading ban to all federal employees | clause · ethics | **41.6R / 37.1D** (UMD Program for Public Consultation (Q12, deliberative) 2023) | Depth (trade-off collapse); blast radius; no why-an-amendment answer of its own | [memo](candidates/clauses/ETHICS_CIVIL_SERVICE_COVERAGE_CLAUSE.md) | `/amendments/ethics` |
| `ethics-forced-divestment` | Forced sale of existing holdings | clause · ethics | **26% overall** (Bloomberg News / Selzer & Co. (no party breakdown published) 2016) | Abuse-vs-remedy gap and depth, failing together in one instrument; blast radius; staleness | [memo](candidates/clauses/ETHICS_FORCED_DIVESTMENT_CLAUSE.md) | `/amendments/ethics` |
| `privacy-deletion-right` | A constitutional right to deletion | clause · privacy | **30R / 41D** (Pew Research Center (deletion applied to law-enforcement records) 2019) | High topline, low floor; blast radius (First Amendment collision); framing dependency | [memo](candidates/clauses/PRIVACY_DELETION_RIGHT_CLAUSE.md) | `/amendments/privacy` |
| `abortion` | Abortion | category | **25R / 87D** (UMass Amherst/YouGov 2024) | High topline, low floor; no symmetric rule | [memo](rejected/ABORTION_REJECTED.md) | `/rejected/abortion` |
| `voting-rights` | Voting Rights | category | **32R / 83D** (Pew Research Center 2025) | High topline, low floor; fails symmetry | [memo](rejected/VOTING_RIGHTS_REJECTED.md) | `/rejected/voting-rights` |
| `electoral-college` | Electoral College and Presidential Elections | category | **46R / 80D** (Pew Research Center 2024) | Low floor that moves with outcomes | [memo](rejected/ELECTORAL_COLLEGE_REJECTED.md) | `/rejected/electoral-college` |
| `court-expansion` | Supreme Court Expansion | category | **39R / 62D** (Marquette Law School Poll 2026) | High topline, low floor; statutory; fails symmetry for expansion | [memo](rejected/COURT_EXPANSION_REJECTED.md) | `/rejected/court-expansion` |
| `congressional-structure` | Senate and Congressional Structure | category | **19R / 45D** (Pew Research Center 2023) | Low floor; symmetry; Article V equal-suffrage bar | [memo](rejected/CONGRESSIONAL_STRUCTURE_REJECTED.md) | `/rejected/congressional-structure` |
| `election-technology` | Election Technology and Modernization | category | **15R / 39D** (AP-NORC 2020) | Not popular; statutory | [memo](rejected/ELECTION_TECHNOLOGY_REJECTED.md) | `/rejected/election-technology` |
| `civic-information` | Civic Information and Informed Citizenry | category | Unpolled — no credible national data on any version of the proposal | Existential test; statutory, not constitutional | [memo](rejected/CIVIC_INFORMATION_REJECTED.md) | `/rejected/civic-information` |
| `qualified-immunity` | Eliminate Qualified Immunity for Policing | category | **42R / 79D** (Cato Institute/YouGov 2020) | High topline, low floor; stale; statutory | [memo](rejected/QUALIFIED_IMMUNITY_REJECTED.md) | `/rejected/qualified-immunity` |
| `balanced-budget` | Balanced Budget | category | **84R / 68D** (Economist/YouGov (abstract question) 2026) | Depth: collapses under trade-offs | [memo](rejected/BALANCED_BUDGET_REJECTED.md) | `/rejected/balanced-budget` |
| `statehood` | Statehood for DC and Puerto Rico | category | **13R / 64D** (Yahoo News/YouGov (DC) 2021) | Weak floor and symmetry (DC); why-an-amendment (Puerto Rico, since admission is a statute under Article IV Section 3) | [memo](rejected/STATEHOOD_REJECTED.md) | `/rejected/statehood` |
| `filibuster-reform` | Filibuster reform | category | **8R / 30D** (Monmouth University Polling Institute 2022) | Regime-coded; both directions fail symmetry | [memo](rejected/FILIBUSTER_REFORM_REJECTED.md) | `/rejected/filibuster-reform` |
| `expand-house` | Expanding the House of Representatives | category | **23R / 35D** (Pew Research Center 2023) | Weak floor; depth tested and failed; why-an-amendment (the size of the House has been a statute since 1929) | [memo](rejected/HOUSE_EXPANSION_REJECTED.md) | `/rejected/expand-house` |

## Counts

| | category | clause | total |
| --- | --- | --- | --- |
| proposed | 9 | 2 | 11 |
| candidate | 11 | 11 | 22 |
| rejected | 12 | 4 | 16 |
| **total** | **33** | **16** | **49** |

**Candidates with no poll wording written** (4): `thirteenth-wage-floor`, `thirteenth-work-requirement-ban`, `thirteenth-private-hire-prohibition`, `thirteenth-prospective-effective-date` — each carries a `pollQuestionNote` recording what the memo states instead of a drafted question.

*Generated 2026-08-18 from the corpus. Every figure is copied from the cited memo or page with its pollster, year, and source URL; `null` marks a value the corpus does not state.*
