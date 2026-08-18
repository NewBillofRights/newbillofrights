/**
 * Build-time social share images (1200×630) — "official brief" look:
 * parchment ground, ink type, one gold rule, the typographic wordmark.
 * satori lays out a small element tree; resvg rasterizes the SVG to PNG.
 * Used by the endpoints under src/pages/og/.
 */
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

// Fonts live in the source tree (satori needs TTF, not the site's woff2);
// resolve from the project root, where `astro build` runs.
const font = (name: string) => readFileSync(resolve(process.cwd(), 'src/og/fonts', name));

const fonts = [
  { name: 'Libre Caslon Text', data: font('LibreCaslonText-Regular.ttf'), weight: 400 as const, style: 'normal' as const },
  { name: 'Libre Caslon Text', data: font('LibreCaslonText-Bold.ttf'), weight: 700 as const, style: 'normal' as const },
  { name: 'Public Sans', data: font('PublicSans-Regular.ttf'), weight: 400 as const, style: 'normal' as const },
  { name: 'Public Sans', data: font('PublicSans-SemiBold.ttf'), weight: 600 as const, style: 'normal' as const },
];

// Brand tokens (mirror src/styles/tokens.css)
const PAPER = '#faf7f1';
const INK = '#1c2b3a';
const INK_SOFT = '#46566b';
const ACCENT = '#a97d1c';
const ACCENT_TEXT = '#7c5c12';

export interface OgSpec {
  /** Small caps line above the title, e.g. "Amendment 08" or "Rejected category" */
  kicker?: string;
  title: string;
  /** One line of Public Sans under the title (wraps to two if needed) */
  summary?: string;
  /** Footer line at right; defaults to the thesis. */
  footer?: string;
}

// Every box is display:flex — satori requires it on any element with more
// than one child, and it is harmless elsewhere.
const h = (type: string, props: Record<string, unknown>, ...children: unknown[]) => ({
  type,
  props: {
    ...props,
    style: { display: 'flex', ...((props.style as Record<string, unknown>) ?? {}) },
    children: children.length === 1 ? children[0] : children,
  },
});

function titleSize(title: string): number {
  if (title.length <= 24) return 84;
  if (title.length <= 40) return 68;
  if (title.length <= 60) return 56;
  return 46;
}

export async function renderOg(spec: OgSpec): Promise<Buffer> {
  const { kicker, title, summary, footer = 'Constitutional amendments every American can agree on.' } = spec;
  const tree = h(
    'div',
    {
      style: {
        width: '1200px',
        height: '630px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        background: PAPER,
        color: INK,
        padding: '64px 72px 56px',
        fontFamily: 'Public Sans',
      },
    },
    // wordmark
    h(
      'div',
      { style: { display: 'flex', alignItems: 'center', gap: '14px' } },
      h('div', { style: { fontFamily: 'Libre Caslon Text', fontWeight: 700, fontSize: '34px', color: INK } }, 'New Bill of Rights'),
      h('div', { style: { width: '12px', height: '12px', background: ACCENT, transform: 'rotate(45deg)' } })
    ),
    // title block
    h(
      'div',
      { style: { display: 'flex', flexDirection: 'column', gap: '18px', maxWidth: '1040px' } },
      kicker
        ? h(
            'div',
            {
              style: {
                fontFamily: 'Libre Caslon Text',
                fontSize: '22px',
                letterSpacing: '4px',
                textTransform: 'uppercase',
                color: ACCENT_TEXT,
              },
            },
            kicker
          )
        : h('div', { style: { display: 'flex' } }),
      h(
        'div',
        {
          style: {
            fontFamily: 'Libre Caslon Text',
            fontWeight: 700,
            fontSize: `${titleSize(title)}px`,
            lineHeight: 1.12,
            color: INK,
          },
        },
        title
      ),
      h('div', { style: { width: '120px', height: '4px', background: ACCENT, marginTop: '6px' } }),
      summary
        ? h(
            'div',
            { style: { fontSize: '28px', lineHeight: 1.4, color: INK_SOFT, marginTop: '4px' } },
            summary
          )
        : h('div', { style: { display: 'flex' } })
    ),
    // footer
    h(
      'div',
      { style: { display: 'flex', justifyContent: 'space-between', fontSize: '22px', color: INK_SOFT } },
      h('div', {}, 'newbillofrights.net'),
      h('div', {}, footer)
    )
  );

  const svg = await satori(tree as any, { width: 1200, height: 630, fonts });
  const png = new Resvg(svg, { fitTo: { mode: 'width', value: 1200 } }).render().asPng();
  return Buffer.from(png);
}
