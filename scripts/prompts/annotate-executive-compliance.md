You are adding plain-English annotations to the draft constitutional text on ONE amendment page of the New Bill of Rights Foundation site. Repo: /Users/michaelhamilton/Documents/newbillofrights.

PAGE (edit only this file): /Users/michaelhamilton/Documents/newbillofrights/site/src/content/amendments/executive-compliance.mdx
RESEARCH EXECUTIVE_COMPLIANCE_RESEARCH.md (the source of the reasoning): /Users/michaelhamilton/Documents/newbillofrights/research/EXECUTIVE_COMPLIANCE_RESEARCH.md
CANONICAL TEXT: /Users/michaelhamilton/Documents/newbillofrights/research/PROPOSED_AMENDMENTS.md (article "7. Executive Compliance with the Courts")

## Read first
1. /Users/michaelhamilton/Documents/newbillofrights/COPY_VOICE_GUIDE.md (hard rules for public copy).
2. The page's own "The principle" and "What we left out" sections — the annotations must agree with them and never contradict them.
3. The research memo: especially the sections "Constitutional Abstraction Candidates" (each candidate carries ⚠️ trap notes — rigidity trap, review-standard trap, mercy-destruction trap, blast-radius trap, motive-test trap, and so on), "Amendment-grade principles," "Held back," and "Package skeleton." Also the international "evasion file" where the memo has one, and any "Review Additions" that bear on wording.
4. /Users/michaelhamilton/Documents/newbillofrights/site/src/components/Note.astro (the component you will use).

## What to write
For EVERY `**Section N.**` paragraph inside the `<div class="article-text">` on the page, add one annotation directly after that paragraph:

```
<Note>

Two to four sentences of plain English.

</Note>
```

Each annotation does two things: (1) says what the section does in ordinary language — a reader with no legal training should understand it in one pass; (2) says why it is worded the way it is, **naming the trap the wording avoids** where the memo identifies one (e.g., "The clause is written as a categorical rule rather than a motive test, because motive tests invite courts to excavate intent and are rarely provable"; "'Investigative or intelligence purposes' is the scoping that keeps a judge out of tax returns and Census forms — the blast-radius problem"; "'By law' hands the dollar figure to Congress: constitutional text carries the principle, not the machinery"). Where a phrase was chosen because of a court holding or a state model, say so briefly in words (no citations, no URLs, no footnotes in annotations — the page's footnotes already source the facts).

## Hard rules
- **Do not change a single character of any existing line.** Only insert `<Note>…</Note>` blocks (each preceded and followed by a blank line) after each `**Section N.**` paragraph, and add one import line `import Note from '../../components/Note.astro';` directly after the existing `import FullSpectrumChart …` line. An integrity script compares the `**Section` lines byte-for-byte to the canonical file and will fail otherwise.
- Annotation text: plain sentences only. No markdown emphasis, no links, no footnote markers, no curly braces, no angle brackets, no HTML. Straight ASCII apostrophes and quotes are fine; so are em dashes.
- Voice per COPY_VOICE_GUIDE: research institution, plain English with gravitas, no jargon ("valence," "salience"), no academic hedging, no exhortation. Nonpartisan: never name an officeholder; never an example that implicates one party alone; if an abuse is mentioned, pair both sides or use none. "We" only for the foundation's choices ("we chose the categorical form because…").
- Do not describe the section as doing more than its text does; do not import claims from outside the memo and the page. Where the memo gives no design reasoning for a section (e.g., an enforcement or savings clause), explain the section's ordinary function and its purpose in the package (savings clauses protect speech, press, petition, or mercy; enforcement clauses follow the Reconstruction-amendment pattern), briefly.
- 2–4 sentences each, 40–90 words. Consistent register across all sections of the page.

## Verify before returning
Run: `node /Users/michaelhamilton/Documents/newbillofrights/scripts/check-site.mjs` — it must print `ALL CHECKS PASS`. Do NOT run the site build (other agents share the directory); the editor will build afterwards.

## Return value (final message = ONLY this JSON)
{"slug": "executive-compliance", "sections": <count annotated>, "annotations": [{"section": 1, "text": "<the annotation text>"}, ...], "notes": "<anything the editor should know: a section where the memo gave no reasoning, a place where you were unsure of the trap name, etc.>"}
