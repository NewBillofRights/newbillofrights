# Business card — Michael Hamilton (2" x 3.5")

Built 2026-08-26. `card.pdf` is the print master (vector, fonts embedded): two pages
(front/back) at 3.75" x 2.25" = 3.5" x 2" trim + 0.125" bleed on every side; content
sits 0.125" inside the trim (safe zone). `card-front-300dpi.png` / `card-back-300dpi.png`
are 1125x675 rasters if the printer prefers PNG.

## The programmable QR codes (back)

The codes encode stable slugs on our own domain; destinations live in
`firebase.json` redirects (deliberately **302, not 301** — so scanners never cache
a stale target and the codes stay retargetable forever):

| Code | Encodes | Currently redirects to |
|---|---|---|
| A | https://newbillofrights.net/q/a | / (home) |
| B | https://newbillofrights.net/q/b | /get-involved/volunteer |
| C | https://newbillofrights.net/q/c | https://www.linkedin.com/in/mrh2/ |

**To retarget a code:** edit its `destination` in `firebase.json` and run
`scripts/deploy.sh prod`. No reprint needed.

**Status:** the `/q/*` redirects are in the repo but NOT deployed yet (deploy needs
Michael). Codes are dead until `scripts/deploy.sh prod` runs. Payloads verified by
decoding the 300-DPI render (macOS Vision framework).

Regenerate: edit `card.html`, then
`"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless --no-pdf-header-footer --print-to-pdf=card.pdf file://$PWD/card.html`
(the three woff2 fonts from `site/public/fonts/` must sit next to the HTML).
