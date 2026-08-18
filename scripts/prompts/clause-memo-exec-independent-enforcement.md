You are writing ONE short "clause-variant" memo for the New Bill of Rights Foundation: a held-back clause inside an accepted amendment, which the foundation now tracks in the same three buckets as whole categories (proposed / candidate / rejected). Repo: /Users/michaelhamilton/Documents/newbillofrights. Today is 2026-08-18.

CLAUSE exec-independent-enforcement: exec-independent-enforcement
Executive Compliance with the Courts AMENDMENT: Executive Compliance with the Courts (research memo: research/EXECUTIVE_COMPLIANCE_RESEARCH.md; site page: /amendments/executive-compliance)
INTENDED candidate: candidate
OUTPUT (create; touch nothing else): /Users/michaelhamilton/Documents/newbillofrights/research/candidates/clauses/EXEC_INDEPENDENT_ENFORCEMENT_CLAUSE.md

## Read first
1. research/SELECTION_METHOD.md §4.1–4.3, §5, §6.2–6.4, §11.
2. research/REGISTRY_INVENTORY_2026-08-18.md — your clause's row in table A and its line in D.2 (the parent-memo passages to draw on).
3. The parent research memo's "Held back" / "What we left out" passages for this clause, plus its Review Additions; the parent's amendment page section "What we left out" (site/src/content/amendments/executive-compliance.mdx).
4. Any candidate memo the inventory names as related (research/candidates/*.md), and research/POLLING_RESEARCH.md entries on the topic.
5. One candidate memo for register (research/candidates/APPOINTMENT_DEFAULT_CANDexec-independent-enforcementATE.md, §3–§5) and COPY_VOICE_GUexec-independent-enforcementE.md "Nonpartisan discipline".

## Rules
- Reuse the corpus's verified figures with their URLs. Load ToolSearch "select:WebSearch,WebFetch" (and "select:mcp__firecrawl__firecrawl_scrape" for 403s — approved, ~6 scrapes max) only to (a) re-verify a figure you rely on and (b) find NEW party-split polling on the clause if the corpus has none — search once, honestly; if nothing exists, that is the finding. Every number: overall/R/D(/I), pollster, fieldwork date, link. Advocacy polls labeled. Nothing from memory; list the unverifiable in the JSON.
- The memo is short — roughly 600–1,500 words as the inventory suggests for this clause — and ends with a POLL QUESTION written out verbatim (forward-looking, both-parties, mechanism-specific; with a costs-named follow-up and the floor it must clear), or, for a rejected clause, a path back or "none identified."
- Nonpartisan discipline; officeholder names in citations only; pair or omit abuse examples.

## Template (exact H2s)
# <Clause title> — Clause Memo (Executive Compliance with the Courts)
*Held back in research/EXECUTIVE_COMPLIANCE_RESEARCH.md; tracked as a candidate clause of the Executive Compliance with the Courts amendment from 2026-08-18. Every figure verified against the linked source.*
**Status in one line:** <floor or unpolled> — <verdict> — <what holds it> — <status: candidate clause (gate: …) | rejected clause (test: …) | recommend folding now>.
## 1. The clause — the drafted text (quote it), what it would add to the ratified article, why the parent memo held it back.
## 2. The evidence — best first; then Nuances & caveats.
## 3. The gate result — floor/verdict; failure modes; non-polling tests (existential, symmetry, why-an-amendment) — noting that as a clause its why-an-amendment answer is usually the parent's.
## 4. Poll question — the exact wording(s), follow-ups, threshold; or path back / none identified.
## 5. Recommendation — candidate clause / rejected clause / fold now — 2–4 sentences.
## 6. Sources — every URL.

Return ONLY this JSON:
{"id":"exec-independent-enforcement","file":"research/candidates/clauses/EXEC_INDEPENDENT_ENFORCEMENT_CLAUSE.md","status":"candidate|rejected|fold","words":<n>,"floor":<n or null>,"verdict":"","gate":"<2–6 words>","pollQuestion":{"wording":"<verbatim>","followUps":["..."],"threshold":"<e.g. ≥60% in both parties>"},"decisiveNumber":{"proposal":"","dem":0,"rep":0,"ind":null,"overall":null,"pollster":"","year":0,"url":""} or null,"unverified":["..."],"notes":"..."}
