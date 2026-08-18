# Registry Inventory — held-back clauses and a three-bucket registry schema

*Compiled 2026-08-18. Read-only inventory of the corpus; nothing in this file changes a bucket assignment. Recommendations only — the founder decides (SELECTION_METHOD.md §3).*

This document answers the open item in [HANDOFF.md §1c](../HANDOFF.md) ("three-bucket re-architecture"): make **proposed / candidate / rejected** uniform at both levels — whole categories *and* the clause variants held back inside greenlit amendments — so every idea in the corpus sits in exactly one bucket with a named gate.

Contents: **A.** the held-back clause inventory · **B.** the registry schema · **C.** a first-draft registry · **D.** poll-question gaps and the variant-memo to-do list · **E.** open questions for the founder.

Source corpus: [SELECTION_METHOD.md](SELECTION_METHOD.md) §3, §6.1, §9, §10 · [CATEGORIES.md](CATEGORIES.md) (incl. the 2026-08-18 decisions block) · the eight target research memos' "Constitutional Abstraction Candidates" sections · each amendment page's "What we left out" · [`candidates/`](candidates/) §5 · [`rejected/`](rejected/) §5.

---

## A. Held-back clause inventory

**Scope rule used.** A row is a *clause variant* — a piece of drafted or drafted-in-outline constitutional text that was considered for a target amendment and set aside — where the corpus states a reason and (usually) what would bring it back. Rows come from two places: the research memos' explicit **"Held back — does not yet clear the full-spectrum bar"** blocks (11 items; lobbying's lifetime ban is stated in the gate-check paragraph rather than under that heading, and is counted), and the amendment pages' **"## What we left out"** lists.

Not counted as held-back clauses: items the corpus files as **inherently statutory** (they are a tag, not a bucket — see §B), and *design choices* the corpus rejects outright rather than holds (six-year term caps, applying limits to sitting members/justices, "corporations are not people," blanket strict scrutiny, constitutional damages/suppression, an untiered bindingness rule, the immediate voiding of current mid-decade maps, the autonomy-framed "right to be let alone", a single national ethics commission, categorical-amnesty exceptions, in-office lobbying restrictions). Those have no "what would bring it back" and would clutter a registry meant to track live gates. They are listed in §E as an open question, since a case can be made for carrying them as `status: rejected, kind: clause` for completeness.

**Count: 14 held-back clauses.** Eleven from the memos' held-back blocks; three more from "What we left out" that carry an explicit return condition (ethics all-federal-employees coverage, ethics forced-sale of holdings, privacy constitutional deletion right). Of the 14, **three are twins** of existing registry entries and merge into them, leaving **11 new clause entries**.

| id | parent | The clause (drafted text where the memo has it) | Floor / evidence stated in the memo | What would bring it back | TWIN |
| --- | --- | --- | --- | --- | --- |
| `term-limits-uniformity` | term-limits | *"This article establishes the sole limitation on the number of terms of service in the offices to which it applies, and shall not be construed to deny the several States any power they otherwise retain over the manner of holding elections."* — the *Thornton*-settlement clause | Unpolled; "purely construction-guiding" | Revisit only if ratification lawyers demand it; TERM_LIMITS §Held back notes uniformity follows from the operative text anyway. Site page adds: its state-election-power language "risks being read against redistricting reform" | none |
| `ethics-emoluments-remedy` | ethics | *"The prohibitions of this article and of the emoluments clauses of this Constitution shall be enforceable by law…"* | Every real-world emoluments framing splits 40–60 points by party (Qatar jet 40R/85D); no neutral polling on emoluments *enforcement* exists | "Commission polling on a both-parties framing ('no president may accept payments from foreign governments — enforceable in court'); if it clears the bar, this clause folds into the enforcement section at low drafting cost" | none |
| `ethics-civil-service-coverage` | ethics | Extending the trading/self-dealing ban beyond elected and appointed constitutional officers to the civil service (no drafted text; stated as the rejected breadth of Principle 1) | Support drops 86% → 40% (UMD 2023, no party breakdown published) | No return condition stated — the memo treats the narrow covered class as load-bearing ("Resist every 'why not all federal employees?' impulse"). Effectively rejected; see §E | none |
| `ethics-forced-divestment` | ethics | Mandatory *sale* of existing holdings instead of the blind-trust / diversified-fund safe harbor | 69% said mandating sale of an incoming President's businesses "goes too far" (Bloomberg 2016, no party breakdown published) | No return condition stated; the safe harbor is described as what separates the 86% proposal from a "wealth penalty." Effectively rejected; see §E | none |
| `lobbying-lifetime-ban` | lobbying | A lifetime ban on all compensated lobbying by ex-members and senior officials (the BLAST Act line; contrast the five-year door in Principle 1) | Standalone acceptability 50.3% (47.5R / 54.4D), UMD 2022 Q37; five-year door 67.1% (65.7R / 73.3D) Q36 — "excluded from candidacy at the outset" | "A standalone favor/oppose re-test of the lifetime ban is the specific evidence that could reopen it" — clearing the bar in both parties | none |
| `redistricting-anti-favoritism` | redistricting | *"No districting plan shall be drawn with the intent, or have the effect, of unduly favoring or disfavoring any political party…"* — the *Rucho* reversal | Only ~half of Republicans call gerrymandering a "major problem" (AP-NORC 2023); standard tracks a one-party bill template; "unduly" hands its meaning to the Court that wrote *Rucho* | "Survey work proving a symmetric fairness standard holds a Republican majority — or hold it for a second amendment." FAIR_DISTRICTING §5 specifies the poll and a **60% R** threshold, and says the natural home is "a third clause in Target 6's package," using Florida's wording not "unduly" | **candidate:`fair-districting`** |
| `redistricting-neutral-authority` | redistricting | *"Each State shall vest the establishment of districts in a body whose members are not, and are not appointed by, officers or candidates whose districts the body establishes…"* | Commissions poll 82% overall but R support thinner (57% in 2021); only 18% of D would keep California's commission at the cost of seats; Ohio 2024 lost 54–46. FAIR_DISTRICTING §2 adds a newer 76R/92D (NBC, n=30k) on the preference question | "Replicated polling on the 'who may not draw' (rather than 'who must') framing, which avoids the federalism wedge," surviving a costs-named follow-up | **candidate:`fair-districting`** |
| `exec-appropriations-fidelity` | executive-compliance | *"Funds appropriated by law shall be made available for obligation and expenditure as provided by law. The President may recommend… but no appropriation shall be withheld, delayed beyond its period of availability, or terminated except by law. An appropriation withheld contrary to this section becomes, upon certification of the Comptroller General or final judgment of a court, immediately available for obligation notwithstanding any direction of the President."* | Impoundment has no direct polling; the sitting-president framing returned 47%–27% for withholding among Republicans; EXECUTIVE_LAWFULNESS §2 records 37% R (Marquette 2025) — Weak; current GOP legislative position is ICA repeal (S.515) | The dual/symmetric framing must carry ("the same clause would have blocked Biden-era spending beyond appropriations and border-wall reprogramming"); "if it can't carry that dual framing in testing, it drops to the statutory list." EXECUTIVE_LAWFULNESS §5 gives the verbatim two-directional question and a **60% R** threshold, and says at that result "(a) folds into Target 7 as the Appropriations Fidelity Clause already drafted and held back there" | **candidate:`executive-lawfulness`** (sub-item (a)) |
| `exec-independent-enforcement` | executive-compliance | *"The execution and enforcement of the judgments and orders of the courts of the United States shall be under the direction of the judicial branch. Officers charged with such enforcement shall be appointed and supervised as provided by law, but shall not, in the performance of that duty, be subject to the direction of any officer whose conduct is the subject of the judgment or order."* | Unpolled. "The who-enforces circularity never fully closes" — officers with arrest power over executive officials create their own separation-of-powers problem | "Held back pending polling and further design work" (site page); memo: "returns only with polling proof." No wording or threshold written | none |
| `exec-consequences` | executive-compliance | *"An officer of the United States who, by final judgment after notice and hearing, is found to have willfully refused compliance… shall thereupon be disqualified from that office; and the pardon power shall not extend to contempts of court. During any period in which a court… has certified an officer's willful noncompliance, no funds may be obligated for the salary of that officer."* | Unpolled. "Partisan-coding risk is highest here" — in 2026 it reads as an anti-incumbent measure; mitigation is the stable-since-2019 obey-the-Court supermajority. Review Addition: *Trump v. Anderson* (2024) means the clause must say who adjudicates | "Its sections rejoin one by one as polling matures; all are severable by design." No wording or threshold written | none |
| `pardon-self-pardon` | pardon-reform | *"The President may not grant a reprieve or pardon to himself or herself."* | 43% R on the ban itself (YouGov, Aug 15–19 2024 national); 59% R on a norm statement (Protect Democracy 2024, advocacy-commissioned); 34% R on a generic limit (Economist/YouGov 2025). Consistent with the rejected standalone category | SELF_PARDON_BAN §5: commission a forward-looking both-parties poll (*"No future president, of either party, may pardon himself or herself"*) fielded alongside the rest of the pardon package. **Reopen at ~60% R with D above 60%**; a Moderate 45–59% R result "would justify carrying the explicit ban inside the pardon package rather than as a standalone article" | **rejected:`self-pardon-ban`** |
| `pardon-conspirators` | pardon-reform | *"The President may not grant a reprieve or pardon for an offense committed at the direction of, or in knowing coordination with, the President, or an offense of which the President was an intended beneficiary."* | Exactly 50% R (69% overall, 84% D) — Protect Democracy/YouGov 2024, advocacy-commissioned only; carries the review-standard trap ("at the direction of" requires a factfinder) | "Independent polling above the bar; until then it is the first provision to trade away" | none |
| `pardon-congressional-disapproval` | pardon-reform | *"A pardon shall be void if, within ninety days of its publication, two-thirds of each House of Congress votes to disapprove it."* — the Mondale check (S.J.Res. 241, 1974) | Never polled; "procedurally complex" | No threshold stated. "If revived, draft the 90 days to run from *publication* so end-of-term pardons are reviewed by the next Congress, and do not substitute a lame-duck blackout" | none |
| `privacy-deletion-right` | privacy | A constitutional right to **deletion** of personal information (the article instead guarantees access + correction against government and makes commercial deletion an express legislative power) | Deletion appears in every federal bill from both parties, but a constitutional deletion right reaching public records, court files, and journalism "becomes a European-style right-to-be-forgotten, which fails settled First Amendment doctrine" | Not polling-gated — the objection is doctrinal (First Amendment) and archival. Returns only if the doctrinal problem is solved by narrower drafting; no condition written. See §E | none |

**Twin verification (each read, not assumed).**

- `pardon-self-pardon` ↔ **rejected:`self-pardon-ban`** — confirmed. PARDON_RESEARCH's held-back entry says the clause is "consistent with the rejected standalone category in CATEGORIES.md," and SELF_PARDON_BAN_REJECTED.md §5 explicitly disposes of *both* levels in one instrument ("the principle rides inside the pardon target's self-benefit clause, and the explicit sentence waits for a floor measured behind the veil"). One idea, one gate, one poll. **Merge.**
- `redistricting-anti-favoritism` + `redistricting-neutral-authority` ↔ **candidate:`fair-districting`** — confirmed. FAIR_DISTRICTING_CANDIDATE.md §5 names the two poll questions as (1) "anti-favoritism floor, Florida wording, federalized" and (2) "neutral authority, in constitutional and costs-named form" — the same two layers REDISTRICTING_RESEARCH holds back, and it says the destination is "a third clause in Target 6's package," not a standalone amendment. The candidate category *is* the two held-back clauses. **Merge — but keep them as two separately-gated sub-items**, because §5 gives each its own wording, and the memo says "the neutral-authority layer should be held separately and longer."
- `exec-appropriations-fidelity` ↔ **candidate:`executive-lawfulness` sub-item (a)** — confirmed. EXECUTIVE_LAWFULNESS_CANDIDATE.md §5 for sub-item (a) states the destination as "folds into Target 7 as the Appropriations Fidelity Clause already drafted and held back there." Same clause, same gate. **Merge.** Note that sub-items (b) executive privilege and (c) executive immunity have **no** counterpart clause inside Target 7 and stay inside the `executive-lawfulness` entry as separate sub-gates.
- Checked and found **not** twins: `exec-independent-enforcement` and `exec-consequences` (no candidate or rejected category covers judicial-branch enforcement or disqualification-for-defiance); `ethics-emoluments-remedy` (no emoluments category exists in any bucket); `lobbying-lifetime-ban` (the lobbying category is a target, not a separate candidate); `term-limits-uniformity`; `pardon-conspirators`; `pardon-congressional-disapproval`; `privacy-deletion-right`. `exec-consequences`'s pardon carve-out for contempt touches the pardon target but is a distinct rule (it limits the pardon power over contempts, not over persons) and is not a twin of any pardon clause.

**Two clauses that moved the other way on 2026-08-18** — from candidate *category* to proposed *clause* — and belong in the registry as `kind: clause, status: proposed`: `judicial-retirement-age` (from `age-limits`) and `appointment-default` (the knock-out variant only), both folded into term-limits by founder decision. The congressional half of age limits stays a candidate category; the deemed-confirmed variant of appointment-default is explicitly **not** folded and should be represented as a rejected/held sub-item on the `appointment-default` clause entry rather than a separate id.

---

## B. Proposed registry schema

One JSON array at `site/src/content/data/registry.json`, loaded as an Astro content collection with the `file()` loader (same pattern as `polling.json`). Every idea in the corpus — category or clause — is exactly one object in this array.

```jsonc
{
  // --- identity ---
  "id": "redistricting-anti-favoritism",   // kebab-case, unique, stable; matches the site slug where a page exists
  "title": "A fairness standard for district maps",
  "kind": "category" | "clause",            // whole focus area vs. a clause variant inside one
  "parent": "redistricting" | null,         // amendment slug for clauses; null for categories

  // --- bucket ---
  "status": "proposed" | "candidate" | "rejected",
  "tags": ["statutory"],                    // free-form; "statutory" = the corpus says the idea's right home is legislation.
                                            // Deliberately a TAG not a bucket: proportional-representation is a candidate
                                            // that is also flagged statutory, and the two facts are independent.

  // --- evidence ---
  "floor": {                                // the bipartisan floor per SELECTION_METHOD §4.1; null when unpolled
    "rep": 76, "dem": 92, "ind": null, "overall": null,
    "pollster": "NBC News", "year": 2025,
    "url": "https://…"
  },
  "verdict": "Strong" | "Moderate" | "Weak" | "Unpolled" | "Unpolled — regime-coded" | …,  // free text, floor-band first
  "failedTest": "high-topline/low-floor",   // rejected only — the §4.3 test it failed
  "gate": "Trade-off untested; federalism gap unmeasured",  // candidates only — what it waits on, a few words
  "section": "Article — Redistricting, Section 3",          // proposed CLAUSES only — where the text sits

  // --- the survey spec ---
  "pollQuestion": {                          // candidates only (categories and clauses alike); null when none written
    "wording": "Should the Constitution provide that no congressional district may be drawn with the intent to favor or disfavor a political party — applying to every state and every future legislature, whichever party controls it?",
    "followUps": ["even if it means your party wins fewer seats in your state"],
    "threshold": "≥60% Republican floor, surviving the costs-named follow-up",
    "verbatim": true                         // true = quoted from the memo; false = paraphrased/needs drafting
  },

  // --- provenance ---
  "memo": "research/candidates/FAIR_DISTRICTING_CANDIDATE.md",  // repo-relative; null if none written yet
  "page": "/evidence/candidates/fair-districting",              // site path; null if no page
  "since": "2026-08-06",                     // date it entered its current bucket (candidateSince / rejectedOn / accepted)
  "decidedOn": "2026-08-18",                 // date of the most recent founder decision touching it; null if none

  // --- relations ---
  "alsoListedUnder": ["redistricting"],      // TWIN representation — see below
  "supersedes": [],                          // ids this entry absorbed (e.g. a merged twin's former id)
  "twinOf": null,                            // always null on the surviving entry; kept for round-tripping redirects
  "subItems": []                             // optional: separately-gated pieces of one entry (see fair-districting)
}
```

**How a twin is represented — one entry, `alsoListedUnder`.** Per the HANDOFF §1c "merge twins" recommendation: when a held-back clause is the same idea as an existing candidate or rejected category, **it does not get its own entry.** The existing category entry survives (it carries the memo, the page, the evidence, and the poll question), and it gains:

- `alsoListedUnder: ["<parent amendment slug>", …]` — the amendment(s) whose "What we left out" should render this entry. `/amendments/redistricting`'s left-out list queries `registry.filter(e => e.alsoListedUnder.includes('redistricting'))` and gets `fair-districting` back with its real gate and poll question, instead of prose that has to be kept in sync by hand.
- `supersedes: ["redistricting-anti-favoritism", "redistricting-neutral-authority"]` — the clause ids retired into it, so an old link or an agent searching by clause id resolves to the live entry.
- Where the merged clause is not the whole category, `subItems` carries the pieces with their own `gate` and `pollQuestion` (this is what `fair-districting` and `executive-lawfulness` need).

Consequences worth stating: the registry has **exactly one gate per idea**, so the commissioned-survey list (`/candidates/polling-questions`) is a straight projection of `registry.filter(e => e.status === 'candidate' && e.pollQuestion)` with no duplicates; and a bucket change is a one-field edit that propagates to the amendment page, the candidates index, and the survey spec at once.

**What stays out of the registry.** The `Inherently statutory` lists in each memo (dozens of items, no gate, no bucket) stay as memo prose; only an idea that someone proposed *as constitutional text* gets an entry, with `tags: ["statutory"]` when the corpus says its right home is legislation.

---

## C. First-draft registry

**Provenance note.** Every number below is copied from the corpus with its pollster and year; `null` marks a value the corpus does not state. No figure here is new. Floors for the nine proposed categories are from SELECTION_METHOD §10 and POLLING_RESEARCH's summary tables; candidate floors from each memo's §3; rejected floors from CATEGORIES.md and each memo's §2–§3. `url` is `null` throughout this draft: the corpus carries source URLs in the memos' footnotes and the site pages, and copying them here without re-fetching each one would violate the corpus's verification rule (SELECTION_METHOD §8). Populate `url` from the memos when the file is generated for real.

```json
[
  {
    "id": "campaign-finance", "title": "Campaign Finance", "kind": "category", "parent": null,
    "status": "proposed", "tags": [],
    "floor": {"rep": 71, "dem": 76, "ind": null, "overall": 72, "pollster": "Pew Research Center", "year": 2023, "url": null},
    "verdict": "Strong", "gate": null, "failedTest": null, "section": null, "pollQuestion": null,
    "memo": "research/CAMPAIGN_FINANCE_RESEARCH.md", "page": "/amendments/campaign-finance",
    "since": "2026-08-06", "decidedOn": null, "alsoListedUnder": [], "supersedes": [], "twinOf": null, "subItems": []
  },
  {
    "id": "term-limits", "title": "Term Limits", "kind": "category", "parent": null,
    "status": "proposed", "tags": [],
    "floor": {"rep": 90, "dem": 86, "ind": null, "overall": 87, "pollster": "Pew Research Center", "year": 2023, "url": null},
    "verdict": "Strong — best in class", "gate": null, "failedTest": null, "section": null, "pollQuestion": null,
    "memo": "research/TERM_LIMITS_RESEARCH.md", "page": "/amendments/term-limits",
    "since": "2026-08-06", "decidedOn": "2026-08-18", "alsoListedUnder": [], "supersedes": [], "twinOf": null, "subItems": []
  },
  {
    "id": "ethics", "title": "Ethics", "kind": "category", "parent": null,
    "status": "proposed", "tags": [],
    "floor": {"rep": 87, "dem": 88, "ind": null, "overall": 86, "pollster": "UMD Program for Public Consultation", "year": 2023, "url": null},
    "verdict": "Strong (stock-trading ban); presidential piece thinner (~40–67% R, framing-dependent)",
    "gate": null, "failedTest": null, "section": null, "pollQuestion": null,
    "memo": "research/ETHICS_RESEARCH.md", "page": "/amendments/ethics",
    "since": "2026-08-06", "decidedOn": null, "alsoListedUnder": [], "supersedes": [], "twinOf": null, "subItems": []
  },
  {
    "id": "privacy", "title": "Privacy", "kind": "category", "parent": null,
    "status": "proposed", "tags": [],
    "floor": {"rep": 68, "dem": 78, "ind": null, "overall": 72, "pollster": "Pew Research Center", "year": 2023, "url": null},
    "verdict": "Strong (data-privacy framing; constitutional right unpolled)",
    "gate": null, "failedTest": null, "section": null, "pollQuestion": null,
    "memo": "research/PRIVACY_RESEARCH.md", "page": "/amendments/privacy",
    "since": "2026-08-06", "decidedOn": null, "alsoListedUnder": [], "supersedes": [], "twinOf": null, "subItems": []
  },
  {
    "id": "lobbying", "title": "Lobbying", "kind": "category", "parent": null,
    "status": "proposed", "tags": [],
    "floor": {"rep": 72, "dem": 72, "ind": null, "overall": 71, "pollster": "UMD Program for Public Consultation", "year": 2022, "url": null},
    "verdict": "Strong — R ≥ D on foreign-lobbying bans", "gate": null, "failedTest": null, "section": null, "pollQuestion": null,
    "memo": "research/LOBBYING_RESEARCH.md", "page": "/amendments/lobbying",
    "since": "2026-08-06", "decidedOn": null, "alsoListedUnder": [], "supersedes": [], "twinOf": null, "subItems": []
  },
  {
    "id": "redistricting", "title": "Redistricting", "kind": "category", "parent": null,
    "status": "proposed", "tags": [],
    "floor": {"rep": 55, "dem": 75, "ind": null, "overall": 67, "pollster": "Common Cause / NBC News (see memo)", "year": 2025, "url": null},
    "verdict": "Moderate — principled consensus, situational defection",
    "gate": null, "failedTest": null, "section": null, "pollQuestion": null,
    "memo": "research/REDISTRICTING_RESEARCH.md", "page": "/amendments/redistricting",
    "since": "2026-08-06", "decidedOn": null, "alsoListedUnder": [], "supersedes": [], "twinOf": null, "subItems": []
  },
  {
    "id": "executive-compliance", "title": "Executive Compliance with the Courts", "kind": "category", "parent": null,
    "status": "proposed", "tags": [],
    "floor": {"rep": 78, "dem": 92, "ind": null, "overall": 84, "pollster": "Marquette Law School Poll", "year": 2025, "url": null},
    "verdict": "Strong", "gate": null, "failedTest": null, "section": null, "pollQuestion": null,
    "memo": "research/EXECUTIVE_COMPLIANCE_RESEARCH.md", "page": "/amendments/executive-compliance",
    "since": "2026-08-06", "decidedOn": null, "alsoListedUnder": [], "supersedes": [], "twinOf": null, "subItems": []
  },
  {
    "id": "pardon-reform", "title": "Limited Presidential Pardon Reform", "kind": "category", "parent": null,
    "status": "proposed", "tags": [],
    "floor": {"rep": 64, "dem": 88, "ind": null, "overall": 77, "pollster": "YouGov for Protect Democracy (advocacy-commissioned)", "year": 2024, "url": null},
    "verdict": "Moderate — categorical bans bipartisan; general 'limit the power' splits 34R/76D",
    "gate": null, "failedTest": null, "section": null, "pollQuestion": null,
    "memo": "research/PARDON_RESEARCH.md", "page": "/amendments/pardon-reform",
    "since": "2026-08-06", "decidedOn": null, "alsoListedUnder": [], "supersedes": [], "twinOf": null, "subItems": []
  },
  {
    "id": "thirteenth-exception", "title": "Striking the 13th Amendment's exception clause", "kind": "category", "parent": null,
    "status": "proposed", "tags": [],
    "floor": {"rep": 66, "dem": 85, "ind": null, "overall": null, "pollster": "YouGov (state-measure wording)", "year": 2024, "url": null},
    "verdict": "Strong — federal clause never polled; wording-sensitive (CA 2024 defeat)",
    "gate": null, "failedTest": null, "section": null,
    "pollQuestion": null,
    "memo": "research/candidates/THIRTEENTH_EXCEPTION_CANDIDATE.md", "page": "/evidence/candidates/thirteenth-exception",
    "since": "2026-08-18", "decidedOn": "2026-08-18", "alsoListedUnder": [], "supersedes": [], "twinOf": null, "subItems": [],
    "note": "Accepted as Target 9 on 2026-08-18. No target research memo and no amendment page exist yet; CATEGORIES.md links THIRTEENTH_EXCEPTION_RESEARCH.md, which is not in the repo. memo/page point at the candidate-stage artifacts until the target memo is written."
  },

  {
    "id": "judicial-retirement-age", "title": "A retirement age for federal judges", "kind": "clause", "parent": "term-limits",
    "status": "proposed", "tags": [],
    "floor": {"rep": 68, "dem": 82, "ind": null, "overall": null, "pollster": "Pew Research Center", "year": 2023, "url": null},
    "verdict": "Strong — corroborated at 71R/92D (Fox News, 2024)",
    "gate": null, "failedTest": null,
    "section": "Term Limits article, Section 2 (judiciary) — backstop to the 18-year fixed term",
    "pollQuestion": null,
    "memo": "research/candidates/AGE_LIMITS_CANDIDATE.md", "page": "/evidence/candidates/age-limits",
    "since": "2026-08-18", "decidedOn": "2026-08-18",
    "alsoListedUnder": ["term-limits"], "supersedes": [], "twinOf": null, "subItems": [],
    "note": "Folded from the age-limits candidate category by founder decision 2026-08-18. Drafted as departure from regular active service at a stated age, senior-status machinery left to Congress. Draft text pending in PROPOSED_AMENDMENTS.md."
  },
  {
    "id": "appointment-default", "title": "Appointment-default / confirmation-refusal clause", "kind": "clause", "parent": "term-limits",
    "status": "proposed", "tags": [],
    "floor": null,
    "verdict": "Unpolled — folded on symmetry and drafting-necessity grounds, not on a number",
    "gate": null, "failedTest": null,
    "section": "Term Limits article, Section 2 (judiciary) — the staggering trap's required default",
    "pollQuestion": {
      "wording": "When any president nominates someone to a federal office or judgeship, should the Senate be required to hold an up-or-down vote within a set period — say 120 days — or should the Senate be able to decline to vote at all?",
      "followUps": [
        "If the Senate does not vote within that period, should the nominee be considered confirmed, or should the position stay vacant until the Senate votes? (report separately)",
        "Deliberative counterargument: a president could seat a judge the Senate never approved",
        "Field when no seat is contested; carry Marquette's party-of-the-president item in the same instrument"
      ],
      "threshold": "≥60% bipartisan floor on the forced-vote variant to draft it; the deemed-confirmed variant held to the same ≥60% floor before being drafted at all",
      "verbatim": true
    },
    "memo": "research/candidates/APPOINTMENT_DEFAULT_CANDIDATE.md", "page": "/evidence/candidates/appointment-default",
    "since": "2026-08-18", "decidedOn": "2026-08-18",
    "alsoListedUnder": ["term-limits"], "supersedes": [], "twinOf": null,
    "subItems": [
      {"id": "appointment-default-knockout", "status": "proposed", "gate": null,
       "note": "The knock-out variant only: the Court sits as constituted until the Senate acts, and the seat's 18-year term clock runs from its calendar start date regardless. This is what was folded."},
      {"id": "appointment-default-deemed-confirmed", "status": "candidate", "gate": "Unpolled; explicitly not folded",
       "note": "Do NOT draft on the present record (memo §5). Also excluded: extending any default rule to executive officers and the wider judiciary."}
    ]
  },

  {
    "id": "term-limits-uniformity", "title": "Uniformity / the Thornton-settlement clause", "kind": "clause", "parent": "term-limits",
    "status": "candidate", "tags": [],
    "floor": null, "verdict": "Unpolled", "failedTest": null, "section": null,
    "gate": "Unpolled and construction-only; state-election-power language risks being read against redistricting",
    "pollQuestion": null,
    "memo": null, "page": null,
    "since": "2026-08-12", "decidedOn": null, "alsoListedUnder": ["term-limits"], "supersedes": [], "twinOf": null, "subItems": [],
    "note": "TERM_LIMITS_RESEARCH: revisit only if ratification lawyers demand it. Not polling-gated — a drafting-counsel question. Candidate by default under SELECTION_METHOD §9 (unpolled + named gate)."
  },
  {
    "id": "ethics-emoluments-remedy", "title": "An enforceable emoluments clause", "kind": "clause", "parent": "ethics",
    "status": "candidate", "tags": [],
    "floor": {"rep": 40, "dem": 85, "ind": null, "overall": null, "pollster": "see POLLING_RESEARCH.md §4 (Qatar-jet framing)", "year": 2025, "url": null},
    "verdict": "Weak on every real-world framing; enforcement framing unpolled",
    "gate": "Neutral polling on emoluments enforcement, both-parties framing", "failedTest": null, "section": null,
    "pollQuestion": {
      "wording": "No president may accept payments from foreign governments — enforceable in court.",
      "followUps": [],
      "threshold": "Clear the full-spectrum bar (≥60% floor per §4.1); memo says 'if it clears the bar, this clause folds into the enforcement section at low drafting cost'",
      "verbatim": true
    },
    "memo": null, "page": null,
    "since": "2026-08-12", "decidedOn": null, "alsoListedUnder": ["ethics"], "supersedes": [], "twinOf": null, "subItems": [],
    "note": "Wording above is the memo's parenthetical framing, not a fielded question — needs writing out as a favor/oppose item."
  },
  {
    "id": "lobbying-lifetime-ban", "title": "A lifetime ban on all lobbying", "kind": "clause", "parent": "lobbying",
    "status": "candidate", "tags": [],
    "floor": {"rep": 47.5, "dem": 54.4, "ind": null, "overall": 50.3, "pollster": "UMD Program for Public Consultation (Q37 acceptability)", "year": 2022, "url": null},
    "verdict": "Moderate — below the five-year door's 65.7R/73.3D",
    "gate": "Standalone favor/oppose re-test clearing the bar in both parties", "failedTest": null, "section": null,
    "pollQuestion": {
      "wording": null,
      "followUps": [],
      "threshold": "Clear the full-spectrum bar in both parties on a standalone favor/oppose item (not the 2022 acceptability/most-recommend format)",
      "verbatim": false
    },
    "memo": null, "page": null,
    "since": "2026-08-12", "decidedOn": "2026-08-18",
    "alsoListedUnder": ["lobbying"], "supersedes": [], "twinOf": null, "subItems": [],
    "note": "Evidence re-based 2026-08-17/18 after the '32%' figure was found to be a forced-choice share, not standalone opposition (SELECTION_METHOD §11). The BLAST Act's original sponsors were Republicans (LOBBYING Review Additions) — relevant to the full-spectrum record."
  },
  {
    "id": "exec-independent-enforcement", "title": "Independent enforcement of court judgments", "kind": "clause", "parent": "executive-compliance",
    "status": "candidate", "tags": [],
    "floor": null, "verdict": "Unpolled", "failedTest": null, "section": null,
    "gate": "Unpolled; separation-of-powers design work unfinished",
    "pollQuestion": {"wording": null, "followUps": [], "threshold": null, "verbatim": false},
    "memo": null, "page": null,
    "since": "2026-08-12", "decidedOn": null, "alsoListedUnder": ["executive-compliance"], "supersedes": [], "twinOf": null, "subItems": [],
    "note": "Design goal per the memo: remove the executive's veto over enforcement, not create a judicial police force. Severable by design."
  },
  {
    "id": "exec-consequences", "title": "Consequences for willful defiance", "kind": "clause", "parent": "executive-compliance",
    "status": "candidate", "tags": [],
    "floor": null, "verdict": "Unpolled — highest partisan-coding risk in the executive-compliance package",
    "failedTest": null, "section": null,
    "gate": "Unpolled; must state who adjudicates (Trump v. Anderson, 2024)",
    "pollQuestion": {"wording": null, "followUps": [], "threshold": null, "verbatim": false},
    "memo": null, "page": null,
    "since": "2026-08-12", "decidedOn": null, "alsoListedUnder": ["executive-compliance"], "supersedes": [], "twinOf": null, "subItems": [],
    "note": "Three severable pieces: disqualification on final judgment of willful defiance; a pardon carve-out for contempts of court; salary suspension during certified noncompliance. Mitigating evidence: the obey-the-Court supermajority is stable since 2019 (79% under Biden in 2024, Marquette)."
  },
  {
    "id": "pardon-conspirators", "title": "No clemency for the president's own conspirators", "kind": "clause", "parent": "pardon-reform",
    "status": "candidate", "tags": [],
    "floor": {"rep": 50, "dem": 84, "ind": null, "overall": 69, "pollster": "YouGov for Protect Democracy (advocacy-commissioned)", "year": 2024, "url": null},
    "verdict": "Moderate — exactly at the threshold, advocacy-commissioned only",
    "gate": "Independent polling above the bar", "failedTest": null, "section": null,
    "pollQuestion": {"wording": null, "followUps": [], "threshold": "Independent (non-advocacy) polling clearing the full-spectrum bar", "verbatim": false},
    "memo": null, "page": null,
    "since": "2026-08-12", "decidedOn": null, "alsoListedUnder": ["pardon-reform"], "supersedes": [], "twinOf": null, "subItems": [],
    "note": "Carries the review-standard trap: 'at the direction of' requires a factfinder. The memo names it the first provision to trade away."
  },
  {
    "id": "pardon-congressional-disapproval", "title": "Congressional disapproval of pardons (the Mondale check)", "kind": "clause", "parent": "pardon-reform",
    "status": "candidate", "tags": [],
    "floor": null, "verdict": "Unpolled", "failedTest": null, "section": null,
    "gate": "Never polled; procedurally complex",
    "pollQuestion": {"wording": null, "followUps": [], "threshold": null, "verbatim": false},
    "memo": null, "page": null,
    "since": "2026-08-12", "decidedOn": null, "alsoListedUnder": ["pardon-reform"], "supersedes": [], "twinOf": null, "subItems": [],
    "note": "Pedigree: S.J.Res. 241 (1974). Drafting note if revived: run the 90 days from publication so end-of-term pardons are reviewed by the next Congress; do not substitute a lame-duck blackout. Watch SELECTION_METHOD §11's Rhode Island trap — legislative-consent models can destroy the power."
  },
  {
    "id": "ethics-civil-service-coverage", "title": "Extending the trading ban to all federal employees", "kind": "clause", "parent": "ethics",
    "status": "rejected", "tags": [],
    "floor": {"rep": null, "dem": null, "ind": null, "overall": 40, "pollster": "UMD Program for Public Consultation (no party breakdown published)", "year": 2023, "url": null},
    "verdict": "Weak — support drops 86% → 40% when the class is widened",
    "failedTest": "depth (trade-off collapse) / blast radius", "gate": null, "section": null, "pollQuestion": null,
    "memo": null, "page": null,
    "since": "2026-08-12", "decidedOn": null, "alsoListedUnder": ["ethics"], "supersedes": [], "twinOf": null, "subItems": [],
    "note": "No path back stated. The memo treats the narrow covered class as load-bearing. Flagged in §E — confirm this is a rejection, not a hold."
  },
  {
    "id": "ethics-forced-divestment", "title": "Forced sale of existing holdings", "kind": "clause", "parent": "ethics",
    "status": "rejected", "tags": [],
    "floor": {"rep": null, "dem": null, "ind": null, "overall": 31, "pollster": "Bloomberg (69% said it 'goes too far'; no party breakdown published)", "year": 2016, "url": null},
    "verdict": "Weak", "failedTest": "wealth-penalty framing / depth", "gate": null, "section": null, "pollQuestion": null,
    "memo": null, "page": null,
    "since": "2026-08-12", "decidedOn": null, "alsoListedUnder": ["ethics"], "supersedes": [], "twinOf": null, "subItems": [],
    "note": "The blind-trust / diversified-fund safe harbor is the accepted alternative and is kept in the constitutional text, not just the implementing statute. Flagged in §E."
  },
  {
    "id": "privacy-deletion-right", "title": "A constitutional right to deletion", "kind": "clause", "parent": "privacy",
    "status": "rejected", "tags": ["statutory"],
    "floor": null, "verdict": "Unpolled — excluded on doctrine, not on a number",
    "failedTest": "blast radius / First Amendment collision", "gate": null, "section": null, "pollQuestion": null,
    "memo": null, "page": null,
    "since": "2026-08-12", "decidedOn": null, "alsoListedUnder": ["privacy"], "supersedes": [], "twinOf": null, "subItems": [],
    "note": "The article instead guarantees access + correction against government and makes commercial access/correction/deletion an express legislative power — so the idea survives as a delegated power rather than a right. Flagged in §E."
  },

  {
    "id": "age-limits-congress", "title": "Age limits for Congress", "kind": "category", "parent": null,
    "status": "candidate", "tags": [],
    "floor": {"rep": 83, "dem": 78, "ind": null, "overall": null, "pollster": "Marist", "year": 2026, "url": null},
    "verdict": "Strong on the concept; the specific age never polled with a party split",
    "gate": "A named-age poll clearing 60% in both parties", "failedTest": null, "section": null,
    "pollQuestion": {
      "wording": "Would you favor or oppose amending the Constitution so that no person who has reached the age of 75 may be elected to the House or Senate? The rule would apply to every future candidate of both parties, and no one currently in office would be removed before the end of their term.",
      "followUps": [
        "Repeat the item at ages 70 and 80 to establish the curve",
        "Counter-argument in the same sample (the Reuters/Ipsos design): 'some say voters should be free to elect anyone they judge capable, regardless of age'"
      ],
      "threshold": "≥60% in both parties on a named age, with the counter-argument in the field",
      "verbatim": true
    },
    "memo": "research/candidates/AGE_LIMITS_CANDIDATE.md", "page": "/evidence/candidates/age-limits",
    "since": "2026-08-06", "decidedOn": "2026-08-18",
    "alsoListedUnder": [], "supersedes": [], "twinOf": null, "subItems": [],
    "note": "The judicial half was folded into term-limits on 2026-08-18 as the judicial-retirement-age clause; this entry is the congressional half only."
  },
  {
    "id": "executive-lawfulness", "title": "Stopping unlawful executive action", "kind": "category", "parent": null,
    "status": "candidate", "tags": [],
    "floor": {"rep": 37, "dem": null, "ind": null, "overall": null, "pollster": "Marquette Law School Poll (appropriations)", "year": 2025, "url": null},
    "verdict": "Weak on appropriations; privilege unpolled; immunity 54% R (Ipsos 2024) and regime-coded",
    "gate": "Symmetric two-directions appropriations question never run; sub-items gated separately",
    "failedTest": null, "section": null,
    "pollQuestion": {
      "wording": "Some propose a constitutional rule that any future president must spend the money Congress has appropriated — no more and no less — and may not withhold, delay, or cancel funds without Congress voting to change the law. This would bind future presidents of both parties equally: it would bar a president from freezing funds Congress approved, and equally bar a president from spending or forgiving money Congress never appropriated. Do you favor or oppose?",
      "followUps": ["A costs-named follow-up; the floor must hold within the Moderate band"],
      "threshold": "60% among Republicans on sub-item (a); at that result it folds into executive-compliance as the Appropriations Fidelity Clause",
      "verbatim": true
    },
    "memo": "research/candidates/EXECUTIVE_LAWFULNESS_CANDIDATE.md", "page": "/evidence/candidates/executive-lawfulness",
    "since": "2026-08-06", "decidedOn": "2026-08-18",
    "alsoListedUnder": ["executive-compliance"],
    "supersedes": ["exec-appropriations-fidelity"], "twinOf": null,
    "subItems": [
      {"id": "executive-lawfulness-appropriations", "status": "candidate",
       "gate": "Symmetric forward-looking poll clearing 60% R",
       "note": "TWIN of the held-back Appropriations Fidelity Clause in EXECUTIVE_COMPLIANCE_RESEARCH.md — drafted text lives there; destination on success is Target 7, not a standalone amendment. Renders in /amendments/executive-compliance's 'What we left out' via alsoListedUnder."},
      {"id": "executive-lawfulness-privilege", "status": "candidate",
       "gate": "Genuinely unpolled; no why-an-amendment answer",
       "pollQuestion": {"wording": null, "followUps": [], "threshold": "Any national poll at all — 'the first task is not clearing a threshold but establishing that a measurable opinion exists'", "verbatim": false},
       "note": "The memo names this the weakest of the three and the one to drop first."},
      {"id": "executive-lawfulness-immunity", "status": "candidate",
       "gate": "Regime-coded; single-sourced campaign-window fieldwork",
       "pollQuestion": {"wording": null, "followUps": [], "threshold": "A re-ask of the USA Today/Ipsos amendment wording with full party breakdowns published, fielded outside a presidential campaign, clearing 60% R", "verbatim": true},
       "note": "The highest-value item in this category's commissioned-survey queue."}
    ]
  },
  {
    "id": "fbi-doj-independence", "title": "FBI / DOJ independence", "kind": "category", "parent": null,
    "status": "candidate", "tags": [],
    "floor": {"rep": 44, "dem": 76, "ind": null, "overall": null, "pollster": "Monmouth University Polling Institute", "year": 2018, "url": null},
    "verdict": "Weak — remedy unpolled since 2018; diagnosis 53R/58D (Marquette 2026)",
    "gate": "Remedy unpolled since 2018; commission it", "failedTest": null, "section": null,
    "pollQuestion": {
      "wording": "Should any future president be able to remove the Attorney General or FBI Director only for cause — such as misconduct or neglect of duty — rather than at will?",
      "followUps": [
        "Should any future president be prohibited from directing the Justice Department to investigate or prosecute a specific person for reasons unrelated to law enforcement?",
        "Actor-named control arm, to price the 47-point wording effect",
        "Costs named: 'even if that means a president cannot remove prosecutors voters disapprove of'"
      ],
      "threshold": "≥60% Republican on the conduct-rule version and ≥55% on the removal version, surviving the costs-named follow-up",
      "verbatim": true
    },
    "memo": "research/candidates/DOJ_INDEPENDENCE_CANDIDATE.md", "page": "/evidence/candidates/fbi-doj-independence",
    "since": "2026-08-06", "decidedOn": "2026-08-18", "alsoListedUnder": [], "supersedes": [], "twinOf": null, "subItems": [],
    "note": "Top of the commissioned-survey list. If the removal question clears, the memo's suggested home is a companion article to executive-compliance rather than a standalone amendment. Trump v. Slaughter (2026) makes the why-an-amendment test pass."
  },
  {
    "id": "civil-servant-independence", "title": "Civil servant independence", "kind": "category", "parent": null,
    "status": "candidate", "tags": ["statutory"],
    "floor": {"rep": 78, "dem": null, "ind": null, "overall": null, "pollster": "Partnership for Public Service (contested item; 87→66→78 across 2024–26)", "year": 2026, "url": null},
    "verdict": "Regime-coded; the operative remedy is unpolled (the one mechanism-level number in the record is 40%)",
    "gate": "Forward-looking both-parties poll of the operative protection, plus an answer to why a statute cannot do this",
    "failedTest": null, "section": null,
    "pollQuestion": {
      "wording": "Would you favor or oppose a constitutional amendment providing that career federal employees — those not appointed by the president — may be hired, promoted, and dismissed only on the basis of merit and conduct, and never because of their political beliefs or party, binding every future president of either party?",
      "followUps": [
        "Costs named: 'even if this makes it harder for a president to remove career officials who are performing poorly or resisting lawful policy'",
        "Symmetry probe: ask the same of a president of the respondent's own party and of the other party"
      ],
      "threshold": "≥60% in both parties on the base question and the costs-named follow-up, with less than a 10-point swing across the symmetry probe — and it must hold across an administration that changes hands",
      "verbatim": true
    },
    "memo": "research/candidates/CIVIL_SERVICE_CANDIDATE.md", "page": "/evidence/candidates/civil-servant-independence",
    "since": "2026-08-06", "decidedOn": "2026-08-18", "alsoListedUnder": [], "supersedes": [], "twinOf": null, "subItems": [],
    "note": "The memo's §5.3 analysis says this is a statute, not an amendment (Free Enterprise Fund fn.10; the 1883/1978 statutes) — hence the 'statutory' tag alongside candidate status. Suggested alternative home: a companion clause in the fcc-independence candidate."
  },
  {
    "id": "fair-districting", "title": "Fair single-member districting", "kind": "category", "parent": null,
    "status": "candidate", "tags": [],
    "floor": {"rep": 76, "dem": 92, "ind": null, "overall": null, "pollster": "NBC News (n=30k)", "year": 2025, "url": null},
    "verdict": "Strong on the neutral-authority layer; anti-favoritism wording still unpolled",
    "gate": "Costs-named commission re-ask + poll the anti-favoritism text in federal wording",
    "failedTest": null, "section": null,
    "pollQuestion": {
      "wording": "Should the Constitution provide that no congressional district may be drawn with the intent to favor or disfavor a political party — applying to every state and every future legislature, whichever party controls it?",
      "followUps": ["Costs named, Citrin Center style: 'even if it means your party wins fewer seats in your state'"],
      "threshold": "≥60% Republican floor, surviving the costs-named follow-up without dropping below Moderate",
      "verbatim": true
    },
    "memo": "research/candidates/FAIR_DISTRICTING_CANDIDATE.md", "page": "/evidence/candidates/fair-districting",
    "since": "2026-08-06", "decidedOn": "2026-08-18",
    "alsoListedUnder": ["redistricting"],
    "supersedes": ["redistricting-anti-favoritism", "redistricting-neutral-authority"], "twinOf": null,
    "subItems": [
      {"id": "fair-districting-anti-favoritism", "status": "candidate",
       "gate": "Federalized Florida wording, ≥60% R",
       "note": "TWIN of the held-back anti-favoritism floor in REDISTRICTING_RESEARCH.md. Destination on success: a third clause in the redistricting package — using Florida's wording, not 'unduly favoring' (which hands its meaning to the Court that decided Rucho)."},
      {"id": "fair-districting-neutral-authority", "status": "candidate",
       "gate": "Constitutional + costs-named 'who may not draw' wording, ≥60% R",
       "pollQuestion": {
         "wording": "Should the Constitution require that the officeholders whose own districts are being drawn be barred from drawing them, in every state?",
         "followUps": ["'even if it means your party wins fewer seats in your state'"],
         "threshold": "≥60% R, surviving the costs-named follow-up",
         "verbatim": true},
       "note": "TWIN of the held-back neutral-authority principle in REDISTRICTING_RESEARCH.md. The memo says to hold this layer 'separately and longer' — its why-an-amendment answer is durability rather than necessity, and Ohio 2024 is the only place this category has lost a clean fight."}
    ]
  },
  {
    "id": "proportional-representation", "title": "Proportional representation", "kind": "category", "parent": null,
    "status": "candidate", "tags": ["statutory"],
    "floor": null, "verdict": "Unpolled — framing spread runs 24%–63% on the same idea",
    "gate": "Independent both-parties poll of the multi-member-district mechanism, plus an answer to the why-an-amendment test",
    "failedTest": null, "section": null,
    "pollQuestion": {
      "wording": "Congress currently requires each House district to elect one member. Would you favor or oppose electing House members from larger districts that each choose three to five members, so that a party winning 40% of the vote in an area wins about 40% of that area's seats?",
      "followUps": ["Costs-named follow-up naming larger districts, more parties in Congress, and coalition bargaining — 'not optional', because depth is the untested risk"],
      "threshold": "≥60% in both parties, surviving the costs-named follow-up",
      "verbatim": true
    },
    "memo": "research/candidates/PROPORTIONAL_REPRESENTATION_CANDIDATE.md", "page": "/evidence/candidates/proportional-representation",
    "since": "2026-08-06", "decidedOn": "2026-08-18", "alsoListedUnder": [], "supersedes": [], "twinOf": null, "subItems": [],
    "note": "2 U.S.C. §2c is a statute — §5.3 has no answer; the memo's cleaner disposition is to move this to the statutory list now rather than spend survey money."
  },
  {
    "id": "good-government-data", "title": "Good-government data", "kind": "category", "parent": null,
    "status": "candidate", "tags": ["statutory"],
    "floor": {"rep": 67, "dem": 22, "ind": null, "overall": null, "pollster": "Economist/YouGov (trust in federal economic data — proxy, reversed since 2022)", "year": 2026, "url": null},
    "verdict": "Unpolled as a mandate; the nearest party-split proxy is 45% R and the series flips by regime",
    "gate": "A mechanism-specific poll showing a ≥60% floor on a publication-or-integrity duty framed to bind any future administration, plus a why-an-amendment answer the Evidence Act does not already supply",
    "failedTest": null, "section": null,
    "pollQuestion": {
      "wording": "The Constitution should require the federal government to publish accurate and complete accounts of what it takes in, what it spends, and the size and condition of the population, on a regular schedule set by law.",
      "followUps": [
        "Integrity guarantee, written behind the veil: 'The head of a federal statistical agency should be removable only for cause, and never because of the substance, conclusions, or timing of a statistical release — this rule would apply to every future president of either party.'",
        "Depth check: re-ask the integrity item after naming the cost — 'even if that means the president cannot replace an agency head whose numbers he believes are wrong'"
      ],
      "threshold": "≥60% floor in the less-supportive party on both framings; the depth check must stay out of the Weak band",
      "verbatim": true
    },
    "memo": "research/candidates/GOOD_GOVERNMENT_DATA_CANDIDATE.md", "page": "/evidence/candidates/good-government-data",
    "since": "2026-08-06", "decidedOn": "2026-08-18", "alsoListedUnder": [], "supersedes": [], "twinOf": null, "subItems": [],
    "note": "The memo says if the specified poll comes back Weak, or §5.1 is resolved as it was for civic information, this should move to Rejected rather than continue to sit. The existential-problem test is the deciding one."
  },
  {
    "id": "fcc-independence", "title": "FCC and independent-agency independence", "kind": "category", "parent": null,
    "status": "candidate", "tags": [],
    "floor": {"rep": 42, "dem": 61, "ind": null, "overall": null, "pollster": "Marquette Law School Poll", "year": 2026, "url": null},
    "verdict": "Weak, moving — 54% R in prospective wording nine weeks earlier",
    "gate": "Forward-looking re-poll after Trump v. Slaughter settles", "failedTest": null, "section": null,
    "pollQuestion": {
      "wording": "Should the Constitution be amended to say that Congress may set fixed terms for members of federal regulatory commissions and may require a stated cause before any president removes them — a rule applying to every future president of either party?",
      "followUps": ["Costs named: 'even if that means officials appointed by a previous president keep setting policy for years after an election'"],
      "threshold": "Republican floor ≥60%, holding at or above the Moderate band under the costs-named follow-up; fielded no earlier than 2027 so it is not read in the wake of the ruling",
      "verbatim": true
    },
    "memo": "research/candidates/AGENCY_INDEPENDENCE_CANDIDATE.md", "page": "/evidence/candidates/fcc-independence",
    "since": "2026-08-06", "decidedOn": "2026-08-18", "alsoListedUnder": [], "supersedes": [], "twinOf": null, "subItems": [],
    "note": "§5.3 now passes cleanly and did not before — Trump v. Slaughter (June 29, 2026) removed the statutory route. Memo caution: if the floor rises only on the Federal Reserve question, the consensus is about central banking, not agency independence, and the category should close."
  },
  {
    "id": "fusion-voting", "title": "Fusion voting", "kind": "category", "parent": null,
    "status": "candidate", "tags": [],
    "floor": {"rep": 51, "dem": 57, "ind": null, "overall": null, "pollster": "New America / Braun (New Jersey only; FDU 2023 reads 55R/61D)", "year": 2022, "url": null},
    "verdict": "Unpolled nationally", "gate": "National both-parties poll of the mechanism, plus an answer to the existential-problem test",
    "failedTest": null, "section": null,
    "pollQuestion": {
      "wording": "Some states allow more than one party to nominate the same candidate, so that a candidate can appear on more than one party's line and the votes are added together. Would you favor or oppose a constitutional amendment guaranteeing that right in every state — including for a new party to the right of the Republican Party and a new party to the left of the Democratic Party?",
      "followUps": ["Costs named: ballots grow longer; the same candidate's name appears more than once; small parties may trade their nomination for policy concessions"],
      "threshold": "R floor ≥60%, holding at ≥55% R on the costs-named follow-up",
      "verbatim": true
    },
    "memo": "research/candidates/FUSION_VOTING_CANDIDATE.md", "page": "/evidence/candidates/fusion-voting",
    "since": "2026-08-06", "decidedOn": "2026-08-18", "alsoListedUnder": [], "supersedes": [], "twinOf": null, "subItems": [],
    "note": "The memo says the existential-test call is worth making before any survey money is spent: 'if the answer to §5.1 is no, this becomes a rejection on the existential test regardless of what the polling returns.'"
  },
  {
    "id": "eminent-domain", "title": "Eminent domain limits for private development", "kind": "category", "parent": null,
    "status": "candidate", "tags": [],
    "floor": {"rep": 85, "dem": 79, "ind": 83, "overall": null, "pollster": "Saint Index / UMass Lowell", "year": 2005, "url": null},
    "verdict": "Strong — stale (the only national party split is from autumn 2005)",
    "gate": "Strong but stale; existential test open", "failedTest": null, "section": null,
    "pollQuestion": {
      "wording": "Would you favor or oppose a constitutional amendment providing that no government — federal, state, or local — may take a person's home, business, farm, or land in order to transfer it to another private owner for economic development, even if the owner is paid fair market value?",
      "followUps": [
        "With the exceptions named: 'except to remove a specific danger to public health or safety, or for roads, utilities, and pipelines open to the public'",
        "Costs named: 'even if this means some redevelopment projects, stadiums, or shopping centers cannot be built'",
        "A Kelo re-ask in the 2005 wording, for a trend line"
      ],
      "threshold": "≥60% in both parties on the exceptions-named and costs-named follow-ups",
      "verbatim": true
    },
    "memo": "research/candidates/EMINENT_DOMAIN_CANDIDATE.md", "page": "/evidence/candidates/eminent-domain",
    "since": "2026-08-18", "decidedOn": "2026-08-18", "alsoListedUnder": [], "supersedes": [], "twinOf": null, "subItems": [],
    "note": "The memo lays out three options rather than one recommendation: accept as a target, hold for fresh polling (the default for a Strong-but-stale number), or reject on the existential test. Founder decision outstanding — see §E."
  },
  {
    "id": "scotus-supermajority", "title": "Supermajority for the Supreme Court to strike down federal laws", "kind": "category", "parent": null,
    "status": "candidate", "tags": [],
    "floor": null, "verdict": "Unpolled — proxies regime-coded (Court approval 75R/11D, Gallup 2025)",
    "gate": "One forward-looking both-parties poll of the mechanism, priced", "failedTest": null, "section": null,
    "pollQuestion": {
      "wording": "Some people say the Supreme Court should be able to strike down a law passed by Congress and signed by the President only if at least six of the nine justices agree, instead of five. This rule would apply to any future Court and any future law. Do you favor or oppose it?",
      "followUps": ["Priced: '…even if that meant a law five justices believed was unconstitutional stayed in force?'"],
      "threshold": "≥60% in both parties on the priced version; replicated once after a change in the Court's appointing-party majority, or else the draft must carry a prospective effective date",
      "verbatim": true
    },
    "memo": "research/candidates/SCOTUS_SUPERMAJORITY_CANDIDATE.md", "page": "/evidence/candidates/scotus-supermajority",
    "since": "2026-08-18", "decidedOn": "2026-08-18", "alsoListedUnder": [], "supersedes": [], "twinOf": null, "subItems": [],
    "note": "Suggested by Alex MacGregor. Coverage must be settled before acceptance — federal statutes only is the sole version whose blast radius is defensible on current evidence. The Commission (2021) and CRS (2026) both treat the statutory route as open, so §5.3 is weak."
  },

  {
    "id": "abortion", "title": "Abortion", "kind": "category", "parent": null,
    "status": "rejected", "tags": [],
    "floor": {"rep": 25, "dem": null, "ind": null, "overall": null, "pollster": "see memo §2", "year": 2026, "url": null},
    "verdict": "Weak — no consensus framing", "failedTest": "full-spectrum / no consensus framing", "gate": null, "section": null,
    "pollQuestion": null,
    "memo": "research/rejected/ABORTION_REJECTED.md", "page": "/evidence/rejected/abortion",
    "since": "2026-08-06", "decidedOn": "2026-08-06", "alsoListedUnder": ["privacy"], "supersedes": [], "twinOf": null, "subItems": [],
    "note": "alsoListedUnder privacy because this memo is the stated reason the privacy draft is written in informational/electronic-data terms only. Path back: ≥45% in both parties for one specific amendment text, sustained across two waves under different administrations — none has appeared 2022–2026, and the party gap is widening."
  },
  {
    "id": "voting-rights", "title": "Voting Rights", "kind": "category", "parent": null,
    "status": "rejected", "tags": [],
    "floor": null, "verdict": "Weak — access-vs-integrity framing splits along party lines",
    "failedTest": "full-spectrum (partisan coding)", "gate": null, "section": null, "pollQuestion": null,
    "memo": "research/rejected/VOTING_RIGHTS_REJECTED.md", "page": "/evidence/rejected/voting-rights",
    "since": "2026-08-06", "decidedOn": "2026-08-06", "alsoListedUnder": [], "supersedes": [], "twinOf": null, "subItems": [],
    "note": "Path back: a paired-wording item (right to vote + free photo ID + two weeks early voting + paper record) tested as one favor/oppose at a low-salience moment; reopen at ≥60% in the lower party with a gap under 20 points in two independent polls. Suggested by Ryan Ward."
  },
  {
    "id": "electoral-college", "title": "Electoral College & Presidential Elections", "kind": "category", "parent": null,
    "status": "rejected", "tags": [],
    "floor": {"rep": 46, "dem": 80, "ind": null, "overall": 63, "pollster": "see memo §2", "year": 2024, "url": null},
    "verdict": "Weak", "failedTest": "high-topline/low-floor", "gate": null, "section": null, "pollQuestion": null,
    "memo": "research/rejected/ELECTORAL_COLLEGE_REJECTED.md", "page": "/evidence/rejected/electoral-college",
    "since": "2026-08-06", "decidedOn": "2026-08-06", "alsoListedUnder": [], "supersedes": [], "twinOf": null, "subItems": [],
    "note": "Path back: ≥55% R for a national-popular-vote amendment in head-to-head wording, holding in a poll fielded after a presidential election the Democratic nominee won. R support has climbed since 2020 — a re-check after 2028 is warranted."
  },
  {
    "id": "court-expansion", "title": "Supreme Court Expansion", "kind": "category", "parent": null,
    "status": "rejected", "tags": [],
    "floor": null, "verdict": "Weak — not bipartisan", "failedTest": "full-spectrum / regime coding", "gate": null, "section": null,
    "pollQuestion": null,
    "memo": "research/rejected/COURT_EXPANSION_REJECTED.md", "page": "/evidence/rejected/court-expansion",
    "since": "2026-08-06", "decidedOn": "2026-08-06", "alsoListedUnder": [], "supersedes": [], "twinOf": null, "subItems": [],
    "note": "Path back requires all three: ≥45% in each party for a size rule binding both parties; replication after the Court's appointing-party majority changes hands; and a version introduced with cosponsors from both parties. Adjacent to the scotus-supermajority candidate."
  },
  {
    "id": "congressional-structure", "title": "Senate / Congressional Structure", "kind": "category", "parent": null,
    "status": "rejected", "tags": [],
    "floor": {"rep": 19, "dem": null, "ind": null, "overall": null, "pollster": "see memo §2 (three independent measurements across five years)", "year": 2023, "url": null},
    "verdict": "Weak", "failedTest": "full-spectrum + Article V equal-suffrage proviso", "gate": null, "section": null,
    "pollQuestion": null,
    "memo": "research/rejected/CONGRESSIONAL_STRUCTURE_REJECTED.md", "page": "/evidence/rejected/congressional-structure",
    "since": "2026-08-06", "decidedOn": "2026-08-06", "alsoListedUnder": [], "supersedes": [], "twinOf": null, "subItems": [],
    "note": "No path back for PR-in-the-Senate or abolition — Article V's equal-suffrage proviso means even a Strong floor could not ratify without every losing state's consent. 17th-Amendment repeal could reopen at ≥45% D, and no such figure is known."
  },
  {
    "id": "election-technology", "title": "Election Technology & Modernization", "kind": "category", "parent": null,
    "status": "rejected", "tags": ["statutory"],
    "floor": null, "verdict": "Weak — not bipartisan and not popular", "failedTest": "full-spectrum + why-an-amendment", "gate": null, "section": null,
    "pollQuestion": null,
    "memo": "research/rejected/ELECTION_TECHNOLOGY_REJECTED.md", "page": "/evidence/rejected/election-technology",
    "since": "2026-08-06", "decidedOn": "2026-08-06", "alsoListedUnder": [], "supersedes": [], "twinOf": null, "subItems": [],
    "note": "No path back as an amendment; belongs on the statutory track. The bipartisan technology items (paper backups, audits, nonpartisan administration) can be pursued statutorily without touching the slate."
  },
  {
    "id": "civic-information", "title": "Civic Information & Informed Citizenry", "kind": "category", "parent": null,
    "status": "rejected", "tags": ["statutory"],
    "floor": null, "verdict": "Unpolled", "failedTest": "existential-problem test", "gate": null, "section": null,
    "pollQuestion": null,
    "memo": "research/rejected/CIVIC_INFORMATION_REJECTED.md", "page": "/evidence/rejected/civic-information",
    "since": "2026-08-06", "decidedOn": "2026-08-06", "alsoListedUnder": [], "supersedes": [], "twinOf": null, "subItems": [],
    "note": "The founder's framing: 'a great idea for a new company or non-profit.' Path back requires both a ≥60% floor on specific constitutional wording and a demonstrated statutory failure. If good-government-data is ever pursued, this rides with it under a transparency heading, not an AI heading."
  },
  {
    "id": "self-pardon-ban", "title": "Presidential Self-Pardon Ban", "kind": "category", "parent": null,
    "status": "rejected", "tags": [],
    "floor": {"rep": 43, "dem": 81, "ind": 67, "overall": null, "pollster": "YouGov (national, Aug 15–19)", "year": 2024, "url": null},
    "verdict": "Weak — wording- and sample-dependent (59% R on a norm statement, advocacy-commissioned; 34% R on a generic limit, 2025)",
    "failedTest": "high-topline/low-floor", "gate": null, "section": null,
    "pollQuestion": {
      "wording": "No future president, of either party, may pardon himself or herself.",
      "followUps": ["Field the family, sale, naming, and public-justification provisions of the pardon target in the same instrument, so the self-pardon clause is measured as a rule for everyone rather than a verdict on one person"],
      "threshold": "Reopen at ~60% R with Democrats above 60% — a floor at or above the pardon target's own 64% R family-ban anchor. A Moderate 45–59% R result with the 'not sure' share collapsing toward support would justify carrying the explicit ban inside the pardon package rather than as a standalone article",
      "verbatim": true
    },
    "memo": "research/rejected/SELF_PARDON_BAN_REJECTED.md", "page": "/evidence/rejected/self-pardon-ban",
    "since": "2026-08-06", "decidedOn": "2026-08-06",
    "alsoListedUnder": ["pardon-reform"],
    "supersedes": ["pardon-self-pardon"], "twinOf": null, "subItems": [],
    "note": "TWIN MERGE: the pardon memo's held-back self-pardon clause is the same idea and resolves on the same poll. The principle partially survives inside the sold/self-benefiting clause ('shielding the President from legal liability'). This is the first poll the foundation intends to commission on the pardon package — it also re-bases the family ban's Democratic floor in forward-looking wording. A rejected entry carrying a pollQuestion is intentional: rejected categories with a named path back are exactly the ones worth putting in the field."
  },
  {
    "id": "qualified-immunity", "title": "Eliminate Qualified Immunity for Policing", "kind": "category", "parent": null,
    "status": "rejected", "tags": ["statutory"],
    "floor": {"rep": 39, "dem": null, "ind": null, "overall": null, "pollster": "see memo §2 (39–46% R in every credible poll, 2020–21)", "year": 2021, "url": null},
    "verdict": "Weak and stale", "failedTest": "staleness + framing dependency", "gate": null, "section": null,
    "pollQuestion": {
      "wording": "A government official who violates a person's constitutional rights may be sued for damages, and not knowing the law is not a defense.",
      "followUps": ["Costs named: 'even if some officers say they will fear lawsuits'"],
      "threshold": "≥60% of Republicans with 2026-or-later fieldwork, surviving the costs-named follow-up without dropping into the Moderate band — and even then a Strong floor moves it to the statutory list, not to a target, because a statute can end the doctrine",
      "verbatim": true
    },
    "memo": "research/rejected/QUALIFIED_IMMUNITY_REJECTED.md", "page": "/evidence/rejected/qualified-immunity",
    "since": "2026-08-06", "decidedOn": "2026-08-06", "alsoListedUnder": [], "supersedes": [], "twinOf": null, "subItems": [],
    "note": "The one framing that works — 'hold officers accountable for misconduct' — polls at 84% (64% R). One of the founder's original four seed categories (policing)."
  },
  {
    "id": "balanced-budget", "title": "Balanced Budget", "kind": "category", "parent": null,
    "status": "rejected", "tags": [],
    "floor": {"rep": null, "dem": null, "ind": null, "overall": 31, "pollster": "Fox News (support when entitlement cuts are specified; 69–80% in the abstract)", "year": 2011, "url": null},
    "verdict": "Strong but shallow", "failedTest": "depth (trade-off collapse)", "gate": null, "section": null,
    "pollQuestion": {
      "wording": "A constitutional amendment requiring a balanced federal budget, even if that meant [a specified mix of spending cuts to major programs and tax increases], with a supermajority waiver for war or recession.",
      "followUps": ["Split-sample: the Democratic number must survive the benefit-cut condition and the Republican number the tax condition"],
      "threshold": "~60% in both parties; a weaker but useful signal is a Fox-style rerun where the drop from unconditioned to conditioned support is under 15 points in each party",
      "verbatim": true
    },
    "memo": "research/rejected/BALANCED_BUDGET_REJECTED.md", "page": "/evidence/rejected/balanced-budget",
    "since": "2026-08-06", "decidedOn": "2026-08-06", "alsoListedUnder": [], "supersedes": [], "twinOf": null, "subItems": [],
    "note": "Item 3 on the corpus's commissioned-polling list (POLLING_RESEARCH.md)."
  },
  {
    "id": "statehood", "title": "Statehood for DC and Puerto Rico", "kind": "category", "parent": null,
    "status": "rejected", "tags": ["statutory"],
    "floor": {"rep": 13, "dem": 64, "ind": null, "overall": 39, "pollster": "Yahoo News/YouGov (DC)", "year": 2021, "url": null},
    "verdict": "Weak — DC 13% R; Puerto Rico 41% R (YouGov 2024)",
    "failedTest": "bipartisan floor + symmetry (DC); why-an-amendment (Puerto Rico — admission is a statute under Art. IV §3)",
    "gate": null, "section": null, "pollQuestion": null,
    "memo": "research/candidates/STATEHOOD_CANDIDATE.md", "page": "/evidence/candidates/statehood",
    "since": "2026-08-18", "decidedOn": "2026-08-18", "alsoListedUnder": [], "supersedes": [], "twinOf": null, "subItems": [],
    "note": "Moved candidate → rejected by founder decision 2026-08-18. CATEGORIES.md already links rejected/STATEHOOD_REJECTED.md, which does not yet exist in the repo — the memo and page fields above point at the candidate-stage artifacts until the rejected memo and page are written. Path back for DC: 'representation without statehood,' never polled."
  },
  {
    "id": "filibuster-reform", "title": "Filibuster reform", "kind": "category", "parent": null,
    "status": "rejected", "tags": [],
    "floor": {"rep": 8, "dem": 30, "ind": null, "overall": null, "pollster": "Monmouth University Polling Institute (eliminate)", "year": 2022, "url": null},
    "verdict": "Weak — both directions fail (19% D for keeping it as is)",
    "failedTest": "symmetry / regime coding", "gate": null, "section": null,
    "pollQuestion": {
      "wording": null,
      "followUps": [],
      "threshold": "A forward-looking poll of the 'supermajority to kill' inversion clearing 45% in both parties across two Senate majorities",
      "verbatim": false
    },
    "memo": "research/candidates/FILIBUSTER_REFORM_CANDIDATE.md", "page": "/evidence/candidates/filibuster-reform",
    "since": "2026-08-18", "decidedOn": "2026-08-18", "alsoListedUnder": [], "supersedes": [], "twinOf": null, "subItems": [],
    "note": "Moved candidate → rejected by founder decision 2026-08-18. CATEGORIES.md links rejected/FILIBUSTER_REFORM_REJECTED.md, which does not yet exist — fields point at the candidate-stage artifacts. The two 48–52 votes on the decision of the chair (2013, 2017) with the parties exchanged are the cleanest regime-coding case in the corpus."
  },
  {
    "id": "expand-house", "title": "Expanding the House of Representatives", "kind": "category", "parent": null,
    "status": "rejected", "tags": ["statutory"],
    "floor": {"rep": 23, "dem": 35, "ind": null, "overall": null, "pollster": "Pew Research Center", "year": 2023, "url": null},
    "verdict": "Weak — 11% R when costs are named (2006)",
    "failedTest": "bipartisan floor + why-an-amendment (the size of the House is a statute since 1929)",
    "gate": null, "section": null,
    "pollQuestion": {
      "wording": null,
      "followUps": [],
      "threshold": "An independent poll of the Wyoming-Rule / cube-root framing clearing 45% R after a statutory enlargement has been tried",
      "verbatim": false
    },
    "memo": "research/candidates/HOUSE_EXPANSION_CANDIDATE.md", "page": "/evidence/candidates/expand-house",
    "since": "2026-08-18", "decidedOn": "2026-08-18", "alsoListedUnder": [], "supersedes": [], "twinOf": null, "subItems": [],
    "note": "Moved candidate → rejected by founder decision 2026-08-18. CATEGORIES.md links rejected/HOUSE_EXPANSION_REJECTED.md, which does not yet exist — fields point at the candidate-stage artifacts. Sourced from the r/PoliticalDiscussion thread mining; symmetric by simulation."
  }
]
```

**Counts in this draft: 45 entries** — by `kind` × `status`: 9 proposed categories · 11 candidate categories · 13 rejected categories · 2 proposed clauses (the two folded on 2026-08-18) · 7 candidate clauses · 3 rejected clauses.

The clause arithmetic: **14 held-back clauses** in §A, of which **4 merge into existing entries as twins** (`redistricting-anti-favoritism` and `redistricting-neutral-authority` → `fair-districting`; `exec-appropriations-fidelity` → `executive-lawfulness`; `pardon-self-pardon` → `self-pardon-ban`), leaving **10 standalone clause entries** — 7 candidate (`term-limits-uniformity`, `ethics-emoluments-remedy`, `lobbying-lifetime-ban`, `exec-independent-enforcement`, `exec-consequences`, `pardon-conspirators`, `pardon-congressional-disapproval`) and 3 rejected (`ethics-civil-service-coverage`, `ethics-forced-divestment`, `privacy-deletion-right`). The 2 proposed clauses (`judicial-retirement-age`, `appointment-default`) came from the opposite direction — candidate categories folded into a target — and are not part of the 14.

---

## D. Poll-question gaps — the variant-memo to-do list

### D.1 Candidate entries with NO poll wording in the corpus

These are the registry entries where `pollQuestion.wording` is `null` and the entry's status is `candidate`. Every one of them needs a question written before the commissioned survey can be specified. **All but two are held-back clauses** — which is the finding: the candidate *categories* are fully specified (each memo's §5 gives verbatim wording and a numeric threshold), and the clause level is where the survey spec is empty.

| id | What is missing | Nearest usable comparator in the corpus |
| --- | --- | --- |
| `term-limits-uniformity` | Everything. Not obviously pollable — it is a construction clause; the real gate is drafting counsel, not a survey | None |
| `ethics-emoluments-remedy` | A fielded favor/oppose item. The memo gives a framing ("no president may accept payments from foreign governments — enforceable in court") but not a question | The ethics package's own 87R/90D presidential-extension item; the pardon package's both-parties instrument design |
| `lobbying-lifetime-ban` | A standalone favor/oppose item (the 2022 data is acceptability + forced choice, which is exactly the trap §11 records) | UMD 2022 Q36/Q37 wording, converted to favor/oppose |
| `exec-independent-enforcement` | Everything — no wording, no threshold | The Marquette obey-the-Court item (84%, 78R/92D) as the anchor in the same instrument |
| `exec-consequences` | Everything — no wording, no threshold; also needs the three pieces (disqualification / pardon carve-out / salary suspension) asked separately, since they are severable | Same instrument as above; the 2024 Biden-era reading (79%) is the symmetry evidence to cite in the framing |
| `pardon-conspirators` | Independent (non-advocacy) wording. Only the Protect Democracy item exists | The self-pardon instrument — field it in the same survey |
| `pardon-congressional-disapproval` | Everything. Never polled | None; note the Rhode Island trap (§11) when writing it |
| `executive-lawfulness-privilege` (sub-item) | Everything — "the first task is not clearing a threshold but establishing that a measurable opinion exists" | None |
| `filibuster-reform` (rejected, path back) | The "supermajority to kill" inversion has a threshold but no wording | None |
| `expand-house` (rejected, path back) | Wyoming-Rule / cube-root framings have a threshold but no wording | None |

Two candidate *categories* also lack a written question for one piece: `executive-lawfulness` sub-item (c) immunity has a threshold and a named instrument to re-ask (USA Today/Ipsos) but no reproduced wording, and `lobbying-lifetime-ban` above.

### D.2 Variant memos to write

Written to the candidate-memo template (`scripts/prompts/candidate-memo-prompt.md` — proposal · evidence · gate result · framings tested · §5 what would resolve it + recommendation), but shorter, since a clause carries less landscape than a category. Ordered by value.

| id | Parent memo to draw on | Length |
| --- | --- | --- |
| `exec-appropriations-fidelity` → covered by `executive-lawfulness` | EXECUTIVE_COMPLIANCE_RESEARCH.md §Held back + EXECUTIVE_LAWFULNESS_CANDIDATE.md §2, §5 | No new memo — merge into the existing candidate memo and cross-link. ~200 words of new text |
| `pardon-self-pardon` → covered by `self-pardon-ban` | SELF_PARDON_BAN_REJECTED.md + PARDON_RESEARCH.md §Held back | No new memo — add a clause-level cross-reference. ~150 words |
| `redistricting-anti-favoritism` / `-neutral-authority` → covered by `fair-districting` | FAIR_DISTRICTING_CANDIDATE.md §5 + REDISTRICTING_RESEARCH.md §Held back | No new memo — split §5's two questions into named sub-items. ~200 words |
| `exec-consequences` | EXECUTIVE_COMPLIANCE_RESEARCH.md (held-back block + the *Trump v. Anderson* Review Addition) | ~1,200 words — three severable pieces to price separately; the highest partisan-coding risk in the corpus |
| `ethics-emoluments-remedy` | ETHICS_RESEARCH.md §Held back + POLLING_RESEARCH.md §4 | ~1,000 words — the whole memo is "find a neutral framing"; the drafting is done |
| `pardon-conspirators` | PARDON_RESEARCH.md §Held back | ~900 words — the review-standard trap is the substance |
| `exec-independent-enforcement` | EXECUTIVE_COMPLIANCE_RESEARCH.md §Held back + the MARSHALS Act concept | ~900 words — design work as much as polling |
| `lobbying-lifetime-ban` | LOBBYING_RESEARCH.md gate-check ¶ + Review Additions (BLAST Act sponsors) + the §11 traps entry | ~800 words — mostly a corrected-evidence memo; the 2022 instrument needs re-reading before the question is written |
| `pardon-congressional-disapproval` | PARDON_RESEARCH.md §Held back + S.J.Res. 241 (1974) | ~700 words |
| `term-limits-uniformity` | TERM_LIMITS_RESEARCH.md §Held back + the *Thornton* discussion | ~500 words — a note for drafting counsel more than a polling memo |
| `privacy-deletion-right` | PRIVACY_RESEARCH.md candidates 3 and 7 + the right-to-be-forgotten trap | ~600 words — only if the founder wants it carried as an entry (§E) |
| `ethics-civil-service-coverage`, `ethics-forced-divestment` | ETHICS_RESEARCH.md Principle 1 traps | ~400 words each — only if carried (§E) |

Two **target-level** memos are also missing and are prerequisites for the registry being complete, not variant memos: `research/THIRTEENTH_EXCEPTION_RESEARCH.md` (Target 9 has no target-stage memo and no amendment page) and the three rejected memos CATEGORIES.md already links — `rejected/STATEHOOD_REJECTED.md`, `rejected/FILIBUSTER_REFORM_REJECTED.md`, `rejected/HOUSE_EXPANSION_REJECTED.md` (the candidate memos exist and can be converted to the rejected template).

---

## E. Open questions for the founder

1. **Two ethics clauses and one privacy clause read as rejected, not held.** `ethics-civil-service-coverage` (86%→40%), `ethics-forced-divestment` (69% "goes too far"), and `privacy-deletion-right` (a First Amendment collision, not a polling problem) appear only in "What we left out" and carry **no** return condition — unlike every clause in the memos' held-back blocks. This draft files them `status: rejected, kind: clause`. Confirm, or say they should not be registry entries at all (the alternative: leave them as page prose, and keep the registry to ideas with a live gate).

2. **`exec-independent-enforcement` and `exec-consequences` have no gate and no threshold.** Both memos say only "returns with polling proof." Every other candidate in the corpus carries a named number. Either they get one (the variant memos in §D.2 would write it) or they should be re-filed as rejected-with-a-path-back. The consequences clause is the more urgent call: SELECTION_METHOD §6.4 notes the pattern that the gate "systematically strips enforcement machinery," and this clause is the clearest case.

3. **`eminent-domain` still has three live options.** The memo deliberately declined to recommend: accept as a target on the Strong 79D/85R number, hold for fresh polling (the method's default for Strong-but-stale), or reject on the existential-problem test. CATEGORIES.md's decisions block reads "hold and commission polling," but the memo's §7 is written as an open choice. Confirm the hold is a decision, not a default.

4. **Target 9 has no target-stage memo or amendment page.** CATEGORIES.md links `THIRTEENTH_EXCEPTION_RESEARCH.md`, which is not in the repo; there is no `site/src/content/amendments/thirteenth-exception.mdx`, and the category is still rendered as a *candidate* page. Until that is built, the registry's `thirteenth-exception` entry points at candidate-stage artifacts while claiming `status: proposed` — a visible inconsistency on the site. Same problem, in reverse, for the three categories moved to Rejected on 2026-08-18: their memos and pages are still in `candidates/`.

5. **Should a rejected entry carry a poll question?** This draft says yes — `self-pardon-ban`, `qualified-immunity`, and `balanced-budget` have the most precisely specified path-back polls in the whole corpus, and the self-pardon instrument is explicitly "the first poll the foundation intends to commission." But it means `/candidates/polling-questions` would list questions for categories the site says are rejected. Options: render them in a separate "what would change our mind" section, or filter them out of the public survey spec.

6. **Does `alsoListedUnder` change what an amendment page shows?** Merging twins means `/amendments/redistricting`'s "What we left out" would render the `fair-districting` **candidate** entry — with its 76R/92D floor and its poll question — where today it renders held-back prose with the older, thinner 57% R figure. That is more accurate and more honest, but it changes the page's tone from "we set this aside" to "we are actively measuring this." Confirm that is the intent.

7. **Sub-items: schema feature or separate entries?** `fair-districting` and `executive-lawfulness` each contain 2–3 separately-gated pieces, and `appointment-default` contains a folded variant plus an explicitly-not-folded one. This draft uses a `subItems` array. The alternative — one entry per gate, related by `parent` — is flatter and easier to query but multiplies the candidate list from 11 to ~17 and would make the candidates index harder to read. Founder's call on which the site should show.

8. **`term-limits-uniformity` is not polling-gated at all.** Its gate is "revisit only if ratification lawyers demand it." That is a real bucket the registry does not have: *deferred to drafting counsel*. Either it becomes a tag (`tags: ["drafting-counsel"]`) or the clause stays a candidate with a gate no survey can close.
