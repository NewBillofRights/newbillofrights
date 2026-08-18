# Task: apply the flagged corpus corrections in place (founder-authorized 2026-08-18)

Repo: /Users/michaelhamilton/Documents/newbillofrights. Michael has authorized applying, IN PLACE, every
correction that earlier passes verified and flagged "founder to apply". Until now the research corpus was
append-only; for THIS task you edit existing lines — but every edit must leave an audit trail.

## What to apply
1. `research/POLLING_RESEARCH.md` → section "## Review Additions (2026-08-17, rejected-categories pass)" →
   "### Flagged corrections (verified — founder to apply)". Apply each bullet to the line(s) it names in
   POLLING_RESEARCH.md itself AND in every other file it names (CATEGORIES.md, PARDON_RESEARCH.md,
   SELECTION_METHOD.md §4.3/§10, AMENDMENT_IDEAS.md, etc.). Read the named rejected memo when the bullet
   points to one, to get the exact verified figures.
2. Every category memo `research/*_RESEARCH.md` → its "## Review Additions (2026-08-17)" section →
   "### Flagged corrections" subsection (if present): apply each to the memo's own body text.
3. `research/REDISTRICTING_RESEARCH.md`: the "Federal legislative vehicles" bullet says Kiley introduced
   H.R. 4358; per the memo's own 2026-08-18 Implementation section, H.R. 4358 is the Anti-Rigging Act
   (Veasey, July 10, 2025) and Kiley's bill is H.R. 4889 (Aug 5, 2025). Fix the bullet.
4. Do NOT touch: research/PROPOSED_AMENDMENTS.md (draft text — another editor is revising it right now),
   any file under site/, or the "## Implementation: the law today and the day after (2026-08-18)" sections.

## Audit trail (required)
- For each corrected line, append a short bracketed note at the end of the sentence or bullet:
  `[corrected 2026-08-18; was: <the old figure/attribution in ≤ 12 words>]`.
- In each file you edit, add one line at the very top of the file's existing "## Review Additions" section
  (or, if the file has none, at the end of the file under `## Corrections applied (2026-08-18)`):
  `*Corrections from the 2026-08-17 review passes applied in place on 2026-08-18 (founder-authorized); each corrected line carries a bracketed note.*`
- Then, in POLLING_RESEARCH.md's "### Flagged corrections (verified — founder to apply)" heading, change
  "founder to apply" to "applied 2026-08-18". Same for any memo's "### Flagged corrections" heading.

## Rules
- Change ONLY what the flagged correction says; do not rewrite surrounding prose, do not add new claims.
- If a flagged correction is ambiguous about which line it targets, apply it where the old figure literally
  appears; if you cannot find the target text, do not guess — report it.
- Preserve every URL exactly. Do not add URLs. (`scripts/check-site.mjs` must still pass — run it at the
  end and report the result; if it fails because a site page cites a URL you altered, revert that URL.)

## Return JSON
{"edited": [{"file": "...", "changes": <count>, "notes": "..."}], "couldNotApply": ["..."], "checkSite": "<last line of node scripts/check-site.mjs>"}
