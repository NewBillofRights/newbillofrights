# Scrape cache (convention since 2026-08-19)

Michael's rule: when we scrape/fetch a source page, save the raw result locally and remember it, so we never scrape the same thing twice.

- **Blobs:** `research/cache/pages/<YYYYMMDD>-<slug>.md` (or .html/.pdf) — the raw fetched content plus a one-line header (`<!-- url · fetched YYYY-MM-DD · by <session/agent> -->`). **Gitignored — never committed** (copyrighted content; the repo is public-bound).
- **Index:** `research/cache/index.jsonl` — committed. One JSON line per fetch: `{"url","file","fetched","note"}`. This is the memory: **grep the index before fetching anything.**
- **Cache hit ≠ verification.** For time-sensitive claims (polls, bill status, live pages) verify at the live source before publishing; use the cache to avoid refetching stable documents (court opinions, ratified texts, archived PDFs) and as a provenance snapshot of what a page said on the fetch date.
- Applies to Firecrawl, WebFetch, curl — anything that pulls a source page during research.
