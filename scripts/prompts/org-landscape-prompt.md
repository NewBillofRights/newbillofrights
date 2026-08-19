# Org-landscape research prompt (template, 2026-08-19)

One agent per amendment area (plus one cross-cutting agent). Repo: /Users/michaelhamilton/Documents/newbillofrights.

## Founder direction (2026-08-19, record verbatim in each memo's header)

> Michael prefers to adopt, as close to 100% as the evidence supports, amendment language already proposed by established organizations that have invested deeply in their issue (he named American Promise and U.S. Term Limits), rather than maintaining bespoke drafts — *especially* where an org has deep focus on language relevant to one of our nine amendments. The comparison memos produced by this pass are the input to that decision. Draft-text changes still happen only in research/PROPOSED_AMENDMENTS.md with a dated revision note, after Michael decides per article.

## Read first

- research/PROPOSED_AMENDMENTS.md — your assigned article, verbatim.
- The relevant research memo in research/ (e.g. CAMPAIGN_FINANCE_RESEARCH.md) — especially trap notes and held-back clauses.
- COPY_VOICE_GUIDE.md §hard rules (applies to any text that might later reach the site).

## Task

For your assigned amendment area, find every significant organization advocating constitutional amendment or closely related structural reform on the issue — national orgs, major state campaigns whose ballot language passed, and Article V–route groups. Include known adversary orgs (those organized *against* the reform). For each org:

1. **Identity & scale:** full name, founding year, HQ, budget/staff (latest Form 990 via ProPublica Nonprofit Explorer where findable), tax status (c3/c4/527/PAC and affiliated entities).
2. **Proposed language:** the org's actual amendment text or model bill — VERBATIM where it exists, with the primary source (org site PDF, congress.gov joint-resolution number, or state ballot text). This is the heart of the task. If the org has no drafted text, say so explicitly.
3. **Route & track record:** congressional proposal vs Article V convention vs state ballot; states/resolutions won; votes held; polling they commission.
4. **Partisan coding:** how the org reads across the spectrum (founders, funders, endorsers, press framing); is it genuinely cross-partisan by our standard?
5. **Language comparison vs our draft:** section-by-section — what their text covers that ours doesn't, what ours covers that theirs doesn't, and specifically which of our memo's trap notes their language does or does not avoid. End with a table: "if we adopted their language 100%, here is what we would gain / lose / need to add back."
6. **Partnership vs conflict:** could we endorse their text, join their coalition, or would association code us? Note where reform orgs conflict (e.g., several oppose an Article V convention).

## Hard constraints

- EVERY factual claim web-verified at its source in this session; never invent or guess a URL; list anything unverifiable in the JSON return. Use Firecrawl for 403/JS-blocked hosts (approved server-wide).
- Quote amendment text exactly; never paraphrase inside quotation marks.
- No banned vocabulary (COPY_VOICE_GUIDE).
- Do not edit any existing repo file. Write ONLY your new memo.

## Output

Write `research/orgs/<SLUG>_ORGS.md` (template order: Founder direction header · orgs table · per-org detail · language comparison · adversaries · partnership/conflict · sources). Then return JSON:
{"file": "...", "orgs_found": n, "orgs_with_drafted_amendment_text": ["..."], "closest_language_match": "...", "adoption_recommendation": "1-3 sentences", "unverifiable": ["..."]}
