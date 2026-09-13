# Response plan: Waleed Aly, "Time of Monsters" (Guardian, 2026-09-07)

*Prepared 2026-09-07. Status: plan approved by Michael; drafts below are not yet Gemini-passed.*

## The source

Waleed Aly, "That sound you hear is not the world ending – it's liberalism being monstered,"
The Guardian Opinion, published 2026-09-06 15:00 UTC (dated 7 September). An edited extract
from Quarterly Essay 103, *Time of Monsters: What future for liberalism?* (Black Inc, 7 September 2026).
Cached: `research/cache/pages/20260906-guardian-aly-time-of-monsters.md` (index entry same date).

Aly's argument, in his own terms:

- Most people no longer believe in progress. "Now they're the majority."
- Across left and right there is "a common verdict that the conventional order has failed.
  It cannot be reformed." The aim of the insurgent politics "is not a policy win. It's to break the system."
- The movements are all reactions to liberalism ("post-liberal"), which he defines
  institutionally: a free press, an independent judiciary, the separation of powers,
  governments hemmed in by constitutions, the sovereignty of the people.
- Liberalism promised "progress without sacrifice or serious restraint."
- He is not convinced liberalism is dead, but thinks it "is in trouble for reasons it
  often fails to understand."
- Opening device: whatever in his list of "monsters" outraged you, "you're probably
  seeing monsters in whoever sees different monsters from you."

**Do not quote:** the passages naming current US officeholders and candidates
(the "commotion of our times" sentence, the JD Vance sentence, the trade-war sentence).
Nonpartisan rule.

## The hook

Aly names a mood; the site already holds the American measurement of it and a reformist
answer to it. `/why-now` cites Pew's spring 2025 survey: 77% say the political system
needs major change or complete reform; only 27% want major change *and* believe it can
happen; the 49% in between are Pew's "pessimistic reformers." That 49% is Aly's majority.

**Pitch in one sentence:** the claim that the system cannot be reformed is testable, and we test it.

## Three angles (all already supported on the site)

1. **Everyone sees different monsters; a fair rule binds all of them.**
   Aly's opening device is the mission's fourth principle in plain words. Amendments
   written behind a veil of ignorance — binding all future presidents and majorities
   equally — are the one reform both sets of monster-watchers can accept, because no
   one knows who a fair rule will bind next.

2. **Americans do not disagree about the rules; they disagree about who holds power under them.**
   Post-liberal despair says agreement is impossible. The structural numbers say it
   already exists (all Pew 2023, as cited on `/why-now`):
   - Congressional term limits: 87% overall — 90% of Republicans, 86% of Democrats
   - Age limits for federal officials: 79% — 82% R, 76% D
   - Limits on campaign spending: 72% — 71% R, 76% D

3. **"Progress without sacrifice" is what broke; mutual disarmament is the repair.**
   Aly's critique of liberalism is that it promised gains without restraint. The
   foundation's method asks each side to give up a weapon at the same moment the other
   does. Concede the diagnosis; answer it with the method.

## Channels, fastest first

| # | Channel | Owner | Timing | Depends on |
|---|---------|-------|--------|------------|
| 1 | LinkedIn post (founder) | Michael | Sept 7–8, while the essay circulates | Gemini pass on the draft below |
| 2 | New ~150-word section on `/why-now` | Claude drafts, Michael reads | Same week | Footnotes; Gemini pass; deploy |
| 3 | Next salon prompt | Michael | Next salon | Nothing |
| 4 | Op-ed pitch to a US outlet | Michael | 2–3 weeks | Pitch the post-liberal trend, not this Australian piece |

Additional channels to consider once the first four are done: mailing-list note (short,
link to `/why-now`), and a quote card for the volunteer/handout QR (`/q/b`) audience.

## Draft 1 — LinkedIn post (founder voice; NOT yet Gemini-passed)

> Waleed Aly's new essay says something I keep hearing in every conversation about
> politics: most people no longer believe the system can be fixed, so the goal becomes
> breaking it.
>
> In America, Pew has measured that mood. 49% of us want the political system changed
> and don't believe it will happen.
>
> We built the New Bill of Rights Foundation to test that belief instead of accepting it.
> We only propose amendments that clear a bipartisan floor, measured in the less
> supportive party. Congressional term limits: 90% of Republicans, 86% of Democrats.
> Age limits for federal officials: 82% and 76%. Limits on campaign spending: 71% and 76%.
> All Pew, 2023.
>
> Everyone sees different monsters. A rule written so nobody knows who it binds next is
> the one kind of reform both sides can live with. That's the test we apply, in public,
> to every proposal, including the ones we reject.
>
> The measurements, the drafts, and the rejections: newbillofrights.net/why-now

Sources for every number: Pew, "Americans stand out internationally for their pessimism
about the nation's political system" (April 2026, on the spring 2025 survey); Pew, "Most
Americans favor big changes to the political system that likely would require amending
the Constitution" (July 2026, citing 2023 figures). Both linked from `/why-now`.

## Draft 2 — salon prompt

> Is the system unreformable? Bring one rule you would accept even if the other side wins
> the next three elections.

## Draft 3 — `/why-now` section (outline only; write to sourcing standard before use)

Heading: *The verdict that reform is impossible* (working). One quoted sentence from Aly
("a common verdict that the conventional order has failed. It cannot be reformed"), the
Pew pessimistic-reformer figure already on the page, then the bipartisan-floor method as
the answer, linking to `/scorecard`. Footnote the Guardian URL. 120–160 words. No new
numbers; reuse the page's existing citations.

## Guardrails

- Never name current or recent officeholders; do not quote Aly's lines that do.
- Do not call the essay "a trend" in public copy; it is one voice in the post-liberal debate.
- Aly writes from Australia. Use him for the diagnosis; use Pew for the American evidence.
- Hedge to the evidence ("evidence that", "has measured"); no "proof", no predictions.
- Every draft above goes through `scripts/gemini-review.sh` before posting; verify any
  factual claim Gemini adds before applying it.

## Checklist

- [ ] Gemini pass on Draft 1; post to LinkedIn
- [ ] Write `/why-now` section to sourcing standard; Gemini pass; check-site; deploy
- [ ] Salon prompt scheduled
- [ ] Op-ed pitch drafted (target outlet TBD)
- [ ] Log outcomes here (reach, replies, sign-ups) for the next plan
