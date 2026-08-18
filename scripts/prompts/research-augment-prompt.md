You are reviewing and augmenting ONE research document in the New Bill of Rights Foundation's research corpus for completeness, using Gemini's strongest model as an outside reviewer and the live web to verify everything before it enters the corpus. Repo: /Users/michaelhamilton/Documents/newbillofrights

THE DOCUMENT: /Users/michaelhamilton/Documents/newbillofrights/research/DOC

CONTEXT TO READ FIRST: /Users/michaelhamilton/Documents/newbillofrights/research/MISSION.md (the mission — the full-spectrum test, nonpartisan discipline, "principles not machinery"). The research docs feed a public website; their job is to give the founder a complete, honest, sourced picture of a category: US legal landscape, prior amendment attempts, state models, international models, polling with party breakdowns, the strongest counterarguments, and the held-back/gate-check reasoning.

STEP 1 — Outside review. Write a system-instruction file and a prompt file in /tmp, then run:
  /Users/michaelhamilton/Documents/newbillofrights/scripts/gemini-review.sh /tmp/DOC-sys.txt /tmp/DOC-prompt.txt
(Calls gemini-3.1-pro-preview; can take 2–4 minutes; use a Bash timeout of 300000. If it errors, retry once.)
  - System instruction: "You are a senior research editor at a nonpartisan constitutional-reform institute. You are reviewing a research memo for COMPLETENESS and ACCURACY. Be specific and sourced. For every gap you identify, state the missing fact or development precisely and name the best primary or authoritative source (court opinion, statute, official report, peer-reviewed study, major pollster, or established news organization) — with a URL if you are confident of it, otherwise a citation the editor can search for. Flag anything in the memo you believe is factually wrong or outdated, with your reasoning. Do not pad; do not restate what the memo already covers."
  - Prompt: a two-paragraph summary of the mission (nonpartisan; full-spectrum test; research institution; both sides' abuses paired; principles not machinery), then the FULL text of the research doc, then these asks: (1) What significant items are MISSING — major cases, statutes, bills, historical episodes, state models, international models, datasets, polls (especially with party breakdowns), scholarly work, or the strongest counterarguments — that a complete memo on this category should include? For each: the fact, why it matters to this memo, and the source. (2) What in the memo looks factually WRONG, OUTDATED (note today is 2026-08-17; developments through mid-2026 may exist), or overstated? (3) Any evidence that would change the memo's gate-check / held-back conclusions? Ask for a numbered list; ask it to mark each item's confidence in the source (HIGH/MEDIUM/LOW).

STEP 2 — VERIFY EVERY PROPOSED ADDITION ON THE WEB BEFORE ADDING IT. This is the critical step. For each proposed item:
  - Use WebSearch (load via ToolSearch "select:WebSearch,WebFetch") to find an authoritative source; then WebFetch it and confirm the page actually states the fact (numbers, dates, holdings). Prefer primary/official sources; for polls, get the party breakdown from the pollster's own page when possible.
  - An item is VERIFIED only if you fetched a page that supports it. Gemini's URL alone is not verification — Gemini invents URLs.
  - If you cannot verify an item after a reasonable search (2–3 attempts), do NOT add it; list it under "unverified" in your report.
  - For "possibly wrong/outdated" flags: verify the same way. If the memo IS wrong and you have a source proving it, note it as a flagged correction (do not silently rewrite the memo's original text — see Step 3).
  - Budget: aim for the 6–15 most valuable additions, not exhaustive trivia. Quality over quantity.

STEP 3 — Write the additions into the document. Rules:
  - Do NOT rewrite, delete, or reorder existing text. The founder knows this document; existing content must stay where it is.
  - Append a new top-level section at the END of the document:
      ## Review Additions (2026-08-17)
      *Added after an outside completeness review; every item below was verified against the linked source before inclusion. Items are grouped by the memo section they extend.*
    Under it, use `### Extends: <existing section name>` subheadings, and under each a bulleted list of the verified additions — each bullet a concise, sourced statement in the memo's existing style, with markdown links to the verified source(s). Match the memo's tone (analytical, dense, linked). Where an addition bears on the gate check or held-back list, say so explicitly.
  - If you verified that something in the existing memo is wrong or outdated, add a final subsection `### Flagged corrections (verified — founder to apply)` listing each: what the memo says, what the source shows, the link. Do not edit the original passage.
  - Polls added MUST include party breakdowns if the source publishes them, and the pollster + fieldwork date.
  - Never add anything that codes partisan; when adding examples of abuses, pair both parties' if the sources support it.
  - Do not touch any file outside research/DOC.

FINAL OUTPUT (return value) — a JSON object:
{"doc": "DOC",
 "added": <number of verified additions written>,
 "highlights": ["one line each for the 3–5 most consequential additions"],
 "corrections": ["one line each for verified corrections flagged, or empty"],
 "unverified": ["one line each for Gemini suggestions you could not verify and therefore did not add"],
 "gateImpact": "one sentence: does anything added change the memo's gate-check/held-back conclusions? (usually 'no')"}
Return ONLY the JSON.
