# New Bill of Rights Foundation

**Constitutional amendments every American can agree on.**

This repository is the working home of the [New Bill of Rights Foundation](https://newbillofrights.net): the research behind each proposed amendment, the draft constitutional text, the selection method that decides what makes the list, and the source of the public website.

Every proposal must clear the **full-spectrum test** — credible evidence of support in both parties, from MAGA Republicans to socialist Democrats — before it is published. What fails the test is published too, with the reason.

## What's here

| Path | What it is |
| --- | --- |
| [research/](research/) | The research corpus: [MISSION.md](research/MISSION.md), [SELECTION_METHOD.md](research/SELECTION_METHOD.md), one memo per amendment category, the [polling compendium](research/POLLING_RESEARCH.md), and [PROPOSED_AMENDMENTS.md](research/PROPOSED_AMENDMENTS.md) (the canonical draft text). [research/rejected/](research/rejected/) holds the memos for the ten rejected categories. |
| [site/](site/) | The website — [Astro](https://astro.build), static, no CMS. Content lives in `site/src/content/`; the draft text there is mirrored byte-for-byte from `PROPOSED_AMENDMENTS.md` and checked by `scripts/check-site.mjs`. |
| [functions/](functions/) | One Cloud Function (`submitForm`) that stores mailing-list, seed-donor, and volunteer form submissions. |
| [scripts/](scripts/) | Deploy, integrity check, favicon/logo generation, and the prompt files used for agent-assisted research passes. |
| [design/](design/) | Logo explorations. |
| [docs/conversations/](docs/conversations/) | Archive of the working sessions that produced all of the above (tool output elided). |
| [HANDOFF.md](HANDOFF.md), [WEBSITE_OUTLINE.md](WEBSITE_OUTLINE.md), [COPY_VOICE_GUIDE.md](COPY_VOICE_GUIDE.md) | How the project is run: current status, the site plan, and the rules for public copy. |

## Working on the site

```sh
cd site && npm install && npm run dev      # local dev server
node scripts/check-site.mjs                # integrity check (draft text, footnotes, URL provenance, banned words) — must print ALL CHECKS PASS
scripts/deploy.sh preview                  # Firebase preview channel
scripts/deploy.sh prod                     # production
```

## Contributing

Ideas are welcome — the bar is the full-spectrum test, and every factual claim needs a primary source with a party breakdown where one exists. Read [SELECTION_METHOD.md](research/SELECTION_METHOD.md) first, then open an issue or email contact@newbillofrights.net.

## License

- **Code** (site, functions, scripts, config): [MIT](LICENSE).
- **Research, proposed amendment text, website copy, design assets, and the session archive:** [CC BY 4.0](LICENSE-CONTENT) — share it, adapt it, put it in front of your legislator; just credit the New Bill of Rights Foundation.
