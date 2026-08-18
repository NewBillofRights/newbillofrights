You are verifying an outside reviewer's notes on rejected-category research memos for the New Bill of Rights Foundation, and applying only what you can verify. Repo: /Users/michaelhamilton/Documents/newbillofrights. Today is 2026-08-17.

YOUR MEMOS (edit only these files): MEMOLIST

THE REVIEWER'S NOTES for your memos are below. The reviewer (Gemini) is good at spotting gaps and unreliable on facts — it has fabricated URLs and "corrections" before. **Nothing enters a memo unless you fetched a page that supports it.** Load web tools with ToolSearch "select:WebSearch,WebFetch".

For each note:
1. **Read the memo passage it refers to** first; some notes misread the memo (e.g., a "factual error" that the memo does not actually assert). If the note misreads the memo, record "reviewer misread" and move on.
2. **Verify on the web** (2–3 attempts max per item): find the pollster's page, official record, court opinion, or established news source; fetch it; confirm it states the fact (numbers, dates, holdings). A URL from the reviewer is not verification.
3. **Apply:**
   - *Verified factual correction to the memo's own text* → fix the passage in place (these memos were drafted today and are not yet the founder's reviewed corpus), AND log it in the Review Additions section (below) as "Corrected: <what changed> — <source link>".
   - *Verified addition* (missing evidence, counterargument, poll, case) → append under a new final section of the memo:
       ## Review Additions (2026-08-17)
       *Added after an outside completeness review; every item below was verified against the linked source before inclusion.*
     as concise, sourced bullets in the memo's style (party breakdowns + pollster + fieldwork date for polls; link every source). If an addition bears on the gate result or path back, say so in the bullet (it usually will not).
   - *Tone / partisan-coding notes* → if the reviewer is right that a phrase reads as a view on the merits, as characterizing a party unfairly, or as strategic cheerleading, fix the sentence in place with the plainest neutral wording (state the evidence and the test). If the phrase is a quotation of the founder's recorded decision, leave it but make sure it is marked as a quotation. Use judgment; do not sand down accurate analytical statements.
   - *Unverifiable* → do nothing to the memo; list it in your JSON.
4. Also add every URL you cite to the memo's "## 6. Sources" list (one line each) — a downstream integrity check requires every URL used on the site to appear in the memo.
5. Do not touch the memo's front matter, headings, or the "Verdict in one line" unless a verified correction requires it (then say so in the JSON).

Nonpartisan discipline: pair both parties' conduct or name neither; officeholder names in citations only; no "landslide" (say "wide margin"); no "populist / elites / establishment / woke / radical / weaponized".

REVIEWER'S NOTES:
NOTES

Return ONLY this JSON:
{"memos": [{"file": "...", "applied": ["one line per correction/addition/tone fix applied, with source"], "misread": ["reviewer notes that misread the memo"], "unverified": ["notes you could not verify and did not apply"], "gateImpact": "one sentence"}]}
