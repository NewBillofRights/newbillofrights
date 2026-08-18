# Public Copy Voice Guide

How public-facing site copy is written. Distilled from the mission (research/MISSION.md), the
editorial constraints in WEBSITE_OUTLINE.md, and an external voice review (2026-08-14).
The reference implementation is [site/src/content/amendments/term-limits.mdx](site/src/content/amendments/term-limits.mdx).

## Register

- **Research institution, not advocacy campaign.** Present evidence and reasoning;
  let the data persuade. Never exhort the reader.
- **Plain English with gravitas.** Short declarative sentences. Precision over
  vocabulary. No academic jargon ("valence", "salience"), no bureaucratic hedging
  ("introduces costs beyond a potential for").
- **At most one vivid metaphor per page.** Kill colloquial idioms ("cutting-room
  floor", "jackpot", "silver bullet").

## Nonpartisan discipline (hard rules)

- Never code left or right in vocabulary, examples, or framing. No "populist",
  "elites", "establishment", "radical", "woke", "MAGA" (except when quoting the
  mission's own full-spectrum phrasing).
- Never name a current or recent officeholder, and never use an example that
  implicates one party alone. When abuses are cited, pair both sides' abuses in
  the same sentence, per the mission.
- Wording that polls differently by party is a finding, not a trick — state it
  openly when relevant (e.g., "fixed terms" vs. "term limits").

## Claims and evidence

- Hedge to the evidence: "evidence that", "has historically", never "proof" or
  "guarantees".
- Every polling number carries its party breakdown and source name + year.
  Never invent or round numbers beyond the source.
- State trade-offs factually. Never defensively engage an anticipated attack
  ("we accept the hypocrisy charge") — describe the trade and the reason it was
  taken.

## The "we" voice

- "We" appears only for the foundation's decisions and measurements ("we
  rejected", "we have measured"), never for predictions or moral verdicts.

## Amendment-page structure (fixed)

1. **The problem** — plain-English, ends by establishing why this is amendment
   territory (not legislation).
2. **The principle** — what the amendment does and why each design choice was
   made, before any legal text.
3. **The draft text** — VERBATIM from research/PROPOSED_AMENDMENTS.md; never edit
   constitutional text in a copy pass.
4. **Why it can pass** — polling with party breakdowns (FullSpectrumChart for
   the 1–2 strongest numbers), precedents, near-misses.
5. **If it passes: the law today and the day after** (added 2026-08-18) — three
   h3 subsections: *Federal law today* (the statutes and controlling doctrine the
   amendment overrides, confirms, or leaves alone), *State law today* (how many
   states already do a version, with a cited count; what would become
   unenforceable), *The day after* (what falls, what stands, what the draft's own
   transition/enforcement clauses do by section number, what enabling or
   conforming legislation would follow, what the courts are left to decide).
   250–450 words, fully footnoted from the category memo's "Implementation" section;
   one link to the general page `/amendments/after-ratification`. Respect every
   "by law" and "except" in the draft: never claim the text does more or less than
   it says.
6. **What we left out** — opens with "What we considered and set aside, and
   why:", from the research doc's held-back list. Transparency is the brand.

## Rejected-category page structure (fixed)

Pages under `/evidence/rejected/<slug>` (MDX in `site/src/content/rejected/`, drafted
from the memo in `research/rejected/`; facts and URLs come only from that memo):

1. **The proposal** — as commonly framed as an amendment, and its variants. No contributor names.
2. **The evidence** — best polling with party breakdowns (independent pollsters first; ballots
   and roll calls; advocacy polls labeled), with a `FullSpectrumChart` of the decisive number
   where one exists (none for categories rejected on a non-polling test).
3. **The test it failed** — the bipartisan floor and verdict (Strong ≥ 60 / Moderate 45–59 /
   Weak < 45 / Unpolled) and only the failure modes that apply, with the numbers.
4. **Framings we tested** — alternatives and their numbers; whether any clears honestly, and if
   so why it does or does not rescue the category (usually: a different proposal wearing the name,
   or it already lives in a target amendment).
5. **The path back** — the specific evidence that would reopen it, or "none identified."

Nonpartisan discipline matters most on these pages: pollster wording for each side's position,
symmetric treatment, no contested labels, no view on the merits.

## Draft-text annotations (`<Note>`)

Each `**Section N.**` paragraph in an amendment's draft text is followed by a `<Note>` block
(2–4 sentences, 40–90 words): what the section does in ordinary language, and why it is worded
that way — naming the trap the wording avoids, from the research memo. Plain sentences only:
no links, footnotes, emphasis, or officeholder names. Notes never claim the text does more or
less than it says (respect every "by law," "except," and "unless" in the section).
