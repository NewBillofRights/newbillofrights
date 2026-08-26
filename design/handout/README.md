# Event handout (two-page one-pager)

Generated 2026-08-25 from `research/ONE_PAGER.md` (copy as of its 2026-08-24 Gemini pass — no copy edits made here; layout only).

- `handout.html` — the master. Fonts are referenced relative (`site/public/fonts/*.woff2`); copy those three woff2 files next to the HTML before rendering, or render from a directory containing them.
- `handout.pdf` — rendered output (US Letter, 2 pages). Regenerate with:
  `"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless --no-pdf-header-footer --print-to-pdf=handout.pdf file://$PWD/handout.html`
- `chart.svg` — "The nine floors at a glance" (floors + party splits from the registry, verified 2026-08-25). Style follows the site's FullSpectrumChart: gold only, floor labeled, no threshold line (founder decision).
- `qr-*.svg` — QR codes (qrencode): site root, /get-involved/volunteer, /get-involved/seed-donors. Payloads verified by decoding the rendered PDF (macOS Vision).

Before printing: re-check floors/counts against polling.json and the registry (day-of-print rule in ONE_PAGER.md), and Michael's read.
