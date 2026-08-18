# Firecrawl retry queue — candidate-category memos

*Written 2026-08-18. These are the sources the memo agents could not fetch with WebFetch (403 / 404 / paywall / JS-rendered / Cloudflare) while writing the candidate memos. Each memo left the affected figure out (or hedged it) rather than guess. Firecrawl credits were exhausted on 2026-08-18 and reset ~2026-08-20; when they do, retry each item below with `mcp__firecrawl__firecrawl_scrape` (or `firecrawl_search`), and for anything verified, append a sourced bullet to the memo's `## Review Additions (2026-08-18)` section and add the URL to its `## 6. Sources`. Anything still unreachable stays here.*

Known-blocking hosts across the set: **congress.gov, govtrack.us, clerk.house.gov** (403 on bill/cosponsor/roll-call pages), **ballotpedia.org** (JS-rendered tables; some pages return empty), **nbcnews.com, thehill.com, reuters.com, ppic.org, mediaite.com** (403 / Cloudflare), **law.marquette.edu MLSPSC29 crosstab** (404), **rasmussenreports.com** (paywall), **thecentersquare.com** (402).

Suggested Firecrawl fetch order: congress.gov / GovTrack cosponsor pages first (they resolve items in seven memos), then Ballotpedia certified results, then the pollster crosstab PDFs.

## AGE_LIMITS_CANDIDATE.md
- Any pending federal joint resolution proposing a maximum-age amendment (congress.gov / govtrack 403)
- Fox News July 2024 party-level percentages for the 81% mandatory-retirement-age figure
- AP-NORC separate percentage for a judicial retirement age

## EXECUTIVE_LAWFULNESS_CANDIDATE.md
- Reuters/Ipsos Feb 2025 OMB funding freeze 34/62 (US News syndication timed out; Reuters unfetchable)
- Issue One/YouGov Aug 2025 percentages for 'allow presidents to unilaterally withhold or block funds' and 'redirect military or disaster funding' (charts only)
- CBS News/YouGov Oct 1–3 2025 party percentages on who should have most authority over federal spending
- YouGov Feb 12 2025 party breakdown for 'withhold funds Congress passed a law to spend' (46/24/30 overall only)
- USA Today/Ipsos Aug 2024 D and I percentages for the 'no person is above the law' amendment item
- S. 515 and H.R. 1180 (ICA repeal) — congress.gov 403

## DOJ_INDEPENDENCE_CANDIDATE.md
- Pew Aug 2025 FBI favorability by party (chart figures did not extract)
- Marquette MLSPSC29 (Nov 2025) crosstab/topline PDF

## CIVIL_SERVICE_CANDIDATE.md
- Partnership 2026 party breakdown beyond the R figure (secondary source says 78% R / 72% D)
- AP-NORC '~48% oppose' mass federal-job eliminations, 'March 2025' — AP-NORC page gives ~25% favor Jan 9–13 2025 only
- Cosponsor counts/party for H.R. 492 / S. 134 (Saving the Civil Service Act) and S. 2837 — congress.gov 403
- 2024 independent-voter figure for the nonpartisan-civil-service item (corpus 'I 79→34')
- 2025 D figure (81%) and 2024 D figure (88%) as separately published crosstabs

## AGENCY_INDEPENDENCE_CANDIDATE.md
- Marquette Nov 2025 party breakdown for the removal-protections item (corpus 39R/89D/71I) — crosstab 404
- YouGov Sept 2025 30-policy battery 'pulling licenses of critical networks' party split R 22/61 (Mediaite behind Cloudflare; no YouGov release found)

## STATEHOOD_CANDIDATE.md
- Official CEE certification PDF for the 2024 PR plebiscite (scanned image)
- Data for Progress DC crosstab (images in PDF) — 34% R / 74% D verified via CBS only
- Hill/HarrisX figures (36% DC; 36% PR with neutral option) — thehill.com 403
- Morning Consult tracking '~40%' DC (pro.morningconsult.com redirect)
- Any 2025–2026 independent national poll with party breakdown on DC statehood

## FILIBUSTER_REFORM_CANDIDATE.md
- Rasmussen Aug 19–21 2025 party crosstabs (paywalled)
- Senate Rule XXII text on the two-thirds threshold (senate.gov / govinfo 404 — cited via CRS RL32684)

## FAIR_DISTRICTING_CANDIDATE.md
- AP-NORC June 2023 exact R percentage for 'gerrymandering is a major problem'
- R Street 2021 '57% of Republicans support independent commissions' — fieldwork/sample/wording
- NBC News Aug–Sept 2025 national party breakdown on the 82% commission question (nbcnews.com 403)
- Missouri Amendment 1 (2018) and Amendment 3 (2020) certified percentages (Ballotpedia pages returned empty)
- Center Square page for the June 2026 Noble poll (HTTP 402)

## PROPORTIONAL_REPRESENTATION_CANDIDATE.md
- Gallup third-party series after Sept 2023 with party splits
- Party crosstabs for Fix Our House/New America/Verasight June–July 2026
- Fieldwork/sample/crosstabs for the Citizen Data/Protect Democracy PR survey
- Portland 2022 charter-reform yes/no percentage
- congress.gov cosponsor pages for H.R. 4632 and H.R. 7740 (403)

## FUSION_VOTING_CANDIDATE.md
- Count of states banning fusion (Ballotpedia fusion page returned empty)
- Protect Democracy / New America 'nearly two-thirds of moderates' claim — no pollster/date/sample
- Wisconsin statute year (1897) — statute itself not fetched
- Exact date of the NJ Supreme Court certification denial (Dec 9 vs Dec 10, 2025)

## GOOD_GOVERNMENT_DATA_CANDIDATE.md
- Economist/YouGov Aug 1–4 2025 wave (42% trust / 46% distrust federal economic data) — pollster's own page not located
- H.R. 4907 cosponsor list (congress.gov/govtrack/clerk 403)
- Roll Call 484 party breakdown (356–17) — Clerk per-party split (403)
- USAFacts/Harris 2017 fieldwork dates

## HOUSE_EXPANSION_CANDIDATE.md
- Frederick 2008 PS article figures (paywalled)
- Party breakdown for the Fix Our House/New America/Verasight 54% House-expansion figure
- Exact verbatim wording for Pew's House-size items

## THIRTEENTH_EXCEPTION_CANDIDATE.md
- State legislative roll-call counts for the state measures (Ballotpedia JS-rendered); cosponsor party splits verified via GovTrack
- PPIC crosstabs for Sept/Oct 2024 Prop 6 (ppic.org 403; 41% via KQED)
- Official ballot-label text for California Prop 6 and Nevada Question 4 (SoS primary sources)
- 119th Congress reintroduction of the Abolition Amendment — resolution number
- Whether Colorado DOC appealed the Feb 17 2026 ruling

## APPOINTMENT_DEFAULT_CANDIDATE.md
- Marquette Sept 2020 Q33/Q34 results (never released)
- Party breakdown for Monmouth Sept 2020 Barrett hearings item
- Party breakdown for Pew Feb 2016 hearings question (topline PDF 404)
- Any bill/joint resolution proposing a deemed-confirmed or forced-vote default rule
- Senate Rule XXXI para 6 text (senate.gov / govinfo)
- Nuclear-option history dates vs CRS/Congressional Record
- Partnership for Public Service political-appointee tracker figures

## EMINENT_DOMAIN_CANDIDATE.md (memo written by a separate session; its §8 "Unverified" list)
- NCSL count of post-*Kelo* state enactments (no live NCSL page fetched; memo uses IJ / House Judiciary / Somin counts of 43/45)
- Somin 2009 Minnesota Law Review article full text (PDF 403) — poll figures taken from House reports
- Saint Index readings 2006–2008 and Zogby/AFBF party crosstabs
- Roll-call margins for Iowa's July 2006 veto override and Ohio SB 167
- The reported 2016 Iowa Poll item on Republican caucus-goers and eminent domain

## Not retried at all (verify agents A and B were stopped before the retry step; C and D were told to skip it)
All items above are pending retry unless a memo's Review Additions section says otherwise.
