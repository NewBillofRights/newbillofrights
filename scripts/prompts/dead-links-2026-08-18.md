# Task: four dead source URLs on the site

Repo: /Users/michaelhamilton/Documents/newbillofrights. Four footnote URLs on live pages no longer resolve.
For each: try hard to find the SAME source at a working URL (the publisher moved it) or an equally
authoritative primary source for the SAME fact. Verify by fetching (WebFetch). If found, swap; if not,
mark the footnote as dead. Michael's instruction: "if you can't find the links, then just note the links
are dead."

| Page (site/src/content/…) | Dead URL |
| --- | --- |
| amendments/campaign-finance.mdx | https://maint.loc.gov/law/help/elections/foreign-involvement/france.php (LOC maintenance host is gone; the live equivalent is likely under www.loc.gov/law/help/... or a Law Library of Congress report page) |
| amendments/pardon-reform.mdx | https://www.cnn.com/2020/12/01/politics/pardon-investigation-doj/index.html (404 — try without /index.html; or the AP/Reuters/NYT report of the same Dec 1, 2020 unsealed DOJ filing on a possible pardon-bribery scheme) |
| amendments/ethics.mdx | https://harvardharrispoll.com/category/2017-01-national-poll/may-2025/ (500 — find the May 2025 Harvard CAPS/Harris poll PDF or results page on harvardharrispoll.com; the footnote's number must be in it) |
| rejected/voting-rights.mdx | https://news.gallup.com/file/poll/652532/2024_10_23_Election%20Laws%20Topline%20and%20Tabs.pdf (404 — find Gallup's Oct 2024 election-laws topline/tabs PDF or article; the footnote's number must be in it) |

## Procedure per URL
1. Read the footnote on the page (the `[^key]: … — [Source](URL).` line) to see exactly what fact/number it supports.
2. Search; fetch candidates; confirm the fact/number is on the page you would cite.
3. If FOUND: (a) append a dated line to the END of the matching research memo (research/CAMPAIGN_FINANCE_RESEARCH.md,
   research/PARDON_RESEARCH.md, research/ETHICS_RESEARCH.md, research/rejected/VOTING_RIGHTS_REJECTED.md) under a
   heading `## URL updates (2026-08-18)` — `- <old URL> → <new URL> (<one line why>)` — so the site's provenance
   check passes; (b) replace the URL in the page footnote (only the URL; keep the footnote text unless the source
   name changed).
4. If NOT FOUND: leave the URL as is and append to the footnote text, before the final period:
   ` (link no longer resolves as of August 2026)`. Do not remove the citation.
5. Run `node scripts/check-site.mjs` at the end; it must print ALL CHECKS PASS.

## Return JSON
{"results": [{"page": "...", "old": "...", "new": "<url or null>", "action": "swapped|marked-dead", "evidence": "<what you fetched and saw>"}], "checkSite": "<last line>"}
