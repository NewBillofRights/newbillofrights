# Candidate memos — outside review log (2026-08-18)

Fourteen candidate memos were drafted by parallel agents (each figure web-verified), then reviewed by Gemini (`gemini-3.1-pro-preview`, `scripts/gemini-review.sh` with `scripts/prompts/candidate-gemini-memo-review-system.md`). Every reviewer note was checked against the source before anything was applied. The eminent-domain memo was written by a separate session and was not part of this round.

Reviewer notes and dispositions:

| Memo | Reviewer note | Disposition |
| --- | --- | --- |
| AGE_LIMITS | Missing *Gregory v. Ashcroft* (1991) | **Verified (Cornell LII); added** to §2 nuance and Review Additions |
| EXECUTIVE_LAWFULNESS | "Biden-era spending" names an officeholder in prose | **Not applied** — the phrase is a marked quotation of SELECTION_METHOD §5.2's own text (permitted) |
| CIVIL_SERVICE | Missing *Elrod v. Burns* / *Branti v. Finkel* | **Verified (Cornell LII); added** as Review Addition (strengthens §5.3) |
| CIVIL_SERVICE | "hollowed out from inside" reads as a view on the merits | **Applied** — sentence neutralized |
| FUSION_VOTING | "South Carolina allows fusion; 2022 ban is a factual error" | **Reviewer wrong** — S.C. banned fusion via S.B. 108, passed May 12, 2022 (Ballot Access News); memo correct; citation added |
| HOUSE_EXPANSION | Missing the REAL House Act (H.R. 622, 118th) | **Verified (Democracy Docket, ARP; congress.gov blocked); added** as Review Addition |
| APPOINTMENT_DEFAULT | "S. 3096 contains a 120-day deemed-waiver provision" | **Reviewer wrong** — govinfo bill text has no Senate-inaction provision; memo correct |
| DOJ, AGENCY, STATEHOOD, FILIBUSTER, FAIR_DISTRICTING, PROPORTIONAL_REP, GOOD_GOVERNMENT_DATA, THIRTEENTH | No notes | — |
| SCOTUS_SUPERMAJORITY (memo commissioned later the same day) | Commission section is Chapter 4, not 3; *Shelby County*/*Windsor* are federal-statute examples, not state-law | **Both verified against the report text; applied** (§1 citation, §3 blast-radius bullet, Review Additions) |

## Firecrawl retry pass (later on 2026-08-18)

Credits reset the same day; four agents worked the queue in [FIRECRAWL_RETRY_QUEUE.md](FIRECRAWL_RETRY_QUEUE.md) (~120 scrapes). Twenty-five items verified and folded into the memos (in-place corrections where the memo hedged; Review Additions otherwise); each queue item is now marked VERIFIED or STILL UNREACHABLE. Gate-relevant results:

- **Fair districting — gate changed.** The NBC News Aug–Sept 2025 national party split exists (76% R / 79% I / 92% D for a nonpartisan commission over the party in power; n=30,196): neutral-authority layer moves from Unpolled to **Strong**; the R Street "57% R" was a Republicans-only sample; Missouri certified 62.02% / 51.01%. Recommendation stays hold (seats-priced trade-off untested; federalism gap).
- **House expansion** — Frederick 2008 crosstabs (Knowledge Networks 2006): costs-named item 11.3% R — depth test now "tested and failed"; H.R. 622 had 2 cosponsors, both Democratic.
- **Fusion** — a second NJ mechanism poll with a party split (New America/Braun Aug 2022: 51% R / 57% D / 65% I); indicative R now 51–55% across two NJ samples.
- **Age limits** — Fox July 2024 crosstabs: mandatory judicial retirement age 71% R / 92% D; 18-year terms 68% R; H.J.Res. 87 (118th) had zero cosponsors.
- **Executive lawfulness** — CBS/YouGov Oct 2025 party split (Congress should have most spending authority: 59% R / 82% D) — a which-branch question, floor stays 37% R; ICA-repeal bills all-Republican.
- **Statehood** — Verasight Feb 2026 asked DC/PR (nets only: DC −25 R / +15 D); DFP DC crosstab verified (34% R / 74% D); "nothing national since 2021" corrected.
- **Appointment default** — Marquette Sept 2020 Q33/Q34 toplines *were* published (73% wrong; 67% hold hearings pre-vacancy) — memo corrected; Senate Rule XXXI ¶6 quoted.
- **Eminent domain** — Somin 2009: 36 legislatures / 22 symbolic / 11 referendum states (memo had 28/17); Zogby/AFBF 92% R / 94% D; 2007 Saint Index: 13% informed.
- **Good-government data** — Aug 2025 wave 42/45 (not 46); Roll Call 484: R 182–17, D 174–0; USAFacts 2017 has one party split (81% R / 72% D "biased").
- **Proportional representation** — Gallup 2025 third-party 43% R / 58% D (lines crossed since 2023); cosponsors 7/8 all Democratic; Portland 58.08%.
- **13th** — Nevada Q4 legislative votes unanimous both parties; California ACA 8 R 1–3 in Senate; PPIC 41/56 Oct 2024; ballot-label contrast documented.
- **DOJ / civil service** — Pew FBI favorability by party (54% R / 45% D fav); cosponsor counts (H.R. 492 104 D / 4 R; S. 134 0 R; S. 2837 2 R).

Still unreachable after retry (kept in the queue): Marquette MLSPSC29 crosstab (404 at Marquette's own path); YouGov Sept 2025 30-policy battery party split; Rasmussen Aug 2025 crosstabs (subscriber-only); Hill/HarrisX (a combined DC+PR item, not per-jurisdiction); Center Square (402); Partnership 2026 party table for the nonpartisan-civil-service item (not published); AP-NORC 48%-oppose figure (not published); 119th Abolition Amendment number; Colorado DOC appeal status; NCSL Kelo count (page gone); Ohio SB 167 vote counts; Citizen Data deck; Pew Feb 2016 topline PDF (404); Monmouth Sept 2020 party split (not published).
