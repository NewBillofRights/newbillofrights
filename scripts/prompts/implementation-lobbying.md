# Task: "If it passes: the law today and the day after" — one amendment

You are drafting one new section for an amendment page on newbillofrights.net, plus the research
that backs it. Amendment slug: `lobbying`. Work only on this amendment.

## Read first (all in the repo at /Users/michaelhamilton/Documents/newbillofrights)
1. `COPY_VOICE_GUIDE.md` — hard rules for public copy. Nonpartisan discipline is absolute.
2. `research/LOBBYING_RESEARCH.md` — the research memo for this amendment (already deep on federal/state law).
3. `site/src/content/amendments/lobbying.mdx` — the live page: its existing footnote keys, its
   draft text (with any transition/enforcement clauses), and its "What we left out" section.
4. `research/PROPOSED_AMENDMENTS.md` — the canonical draft text (never edit).
5. `research/RATIFICATION_EFFECTS_RESEARCH.md` — the general law of how ratified amendments
   interact with existing law (supremacy, self-execution vs. enabling legislation, enforcement
   clauses, trigger laws, effective dates). Your section is the amendment-specific companion to
   the general page built from that memo; do not repeat the general law — apply it.

## What to produce

### A. Research (append-only)
Append a new dated section to the END of `research/LOBBYING_RESEARCH.md`:

```
## Implementation: the law today and the day after (2026-08-18)
```

with these subsections, each factual and sourced:
1. **Federal law today** — the statutes, regulations, and controlling court doctrine that this
   amendment would override, confirm, or leave untouched. Name the specific statute/case.
2. **State law today** — how many states already do some version of this and how (with counts
   and a citation for the count); state constitutional provisions; state laws that would conflict
   with the amendment and become unenforceable.
3. **The day after ratification** — concretely: (a) which existing laws become unenforceable or
   moot (and whether courts or repeal would clear them); (b) which stand; (c) what the draft's own
   transition/enforcement/effective-date clauses do (quote the section number); (d) what enabling
   legislation Congress would need or likely pass, and what an existing bill already looks like if
   one exists; (e) plausible state "trigger" or conforming legislation (states pre-passing laws
   that take effect on ratification) — describe the mechanism neutrally, and cite an actual
   example only if one exists for this subject; (f) the litigation questions the wording leaves to
   the courts (be candid; the drafts have "by law" hooks and exceptions — respect them exactly).
4. **Sources** — every URL you relied on. Existing memo URLs may be reused. **Every NEW URL must be
   fetched and confirmed to say what you cite** (WebFetch; if a host blocks fetching, find an
   accessible primary source instead — do not cite what you could not open). Never invent URLs.
   Prefer primary/official sources (statutes on law.cornell.edu or govinfo.gov, court opinions on
   supreme.justia.com or law.cornell.edu, archives.gov, state legislature sites, NCSL, Ballotpedia
   for state counts, CRS via everycrsreport.com).

Do NOT edit any existing text in the memo. Append only.

### B. The page section
Return (in your JSON, not written to disk) the MDX for a new section that will be inserted into
`site/src/content/amendments/lobbying.mdx` between "## Why it can pass" and "## What we left out":

```
## If it passes: the law today and the day after

<one-sentence orientation, then 3 short subsections with h3 headings:>

### Federal law today
### State law today
### The day after
```

Rules for the section:
- 250–450 words total, plain declarative sentences, research-institution register (see guide).
  No exhortation, no predictions in "we" voice, no metaphors, no officeholder names, never an
  example that implicates one party alone.
- Every factual claim carries a GFM footnote `[^key]`. Reuse the page's existing footnote keys
  where the same fact/source is already footnoted; add new keys for new facts. Return the new
  footnote definitions separately (`[^key]: <fact> — [Source name](URL).` — facts and sources
  only, never a correction narrative). New keys must not collide with existing ones.
- Every URL in a footnote must appear in `research/LOBBYING_RESEARCH.md` (which is why you append them there).
- Refer to the general page like this, once, at the end of the orientation sentence:
  `(How ratified amendments interact with existing law in general is covered in [After ratification](/amendments/after-ratification).)`
- Respect the draft text exactly: if a section says "as provided by law", the day-after
  description must say Congress has to legislate that piece; if a section is self-executing,
  say what becomes unenforceable without any further law.
- Banned words (site check will fail): populist, elite(s), establishment, woke, weaponized,
  radical left/right, far-left/right, landslide(s).
- Do not run the site build or the check script; the integrator will.

## Return
Return ONLY a JSON object:
{
  "slug": "lobbying",
  "memoAppended": true,
  "section": "<the MDX section, headings through last paragraph, no footnote definitions>",
  "footnotes": "<the NEW footnote definition lines, one per line>",
  "reusedKeys": ["..."],
  "unverifiable": ["<anything you wanted to cite but could not verify — and what you did instead>"],
  "notes": "<anything the integrator should know: ambiguities in the draft text, facts the memo got wrong (do NOT edit them; report), etc.>"
}
