// Four sample logo directions for the New Bill of Rights Foundation, drawn from
// the brand tokens (ink / parchment / gold; Libre Caslon Text + Public Sans).
// Renders SVG (text as paths, so no font dependency) and a PNG of each, plus a
// contact sheet, into design/logo-samples/.
//
// Usage (from repo root): node scripts/make-logo-samples.mjs
import satori from '../site/node_modules/satori/dist/index.js';
import { Resvg } from '../site/node_modules/@resvg/resvg-js/index.js';
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const out = resolve(root, 'design/logo-samples');
mkdirSync(out, { recursive: true });
const font = (n) => readFileSync(resolve(root, 'site/src/og/fonts', n));
const fonts = [
  { name: 'Libre Caslon Text', data: font('LibreCaslonText-Regular.ttf'), weight: 400, style: 'normal' },
  { name: 'Libre Caslon Text', data: font('LibreCaslonText-Bold.ttf'), weight: 700, style: 'normal' },
  { name: 'Public Sans', data: font('PublicSans-Regular.ttf'), weight: 400, style: 'normal' },
  { name: 'Public Sans', data: font('PublicSans-SemiBold.ttf'), weight: 600, style: 'normal' },
];
const PAPER = '#faf7f1', INK = '#1c2b3a', INK_SOFT = '#46566b', ACCENT = '#a97d1c', RULE = '#ddd6c8';

const el = (type, style = {}, ...children) => ({
  type,
  props: { style: { display: 'flex', ...style }, children: children.length === 1 ? children[0] : children },
});
const text = (s, style) => el('div', style, s);
const diamond = (size, color = ACCENT) => el('div', { width: size, height: size, background: color, transform: 'rotate(45deg)' });
const serif = { fontFamily: 'Libre Caslon Text' };
const sans = { fontFamily: 'Public Sans' };
const caps = (s, size, color = INK_SOFT, weight = 600) =>
  text(s, { ...sans, fontSize: size, letterSpacing: size * 0.22, color, fontWeight: weight, textTransform: 'uppercase' });

// The document mark: a "bill" — a rectangle of parchment with ink lines and a
// gold seal, drawn from primitives. Used by directions C and D.
function billMark(h, ink = INK, paper = PAPER, seal = ACCENT) {
  const w = h * 0.78, pad = h * 0.16, line = Math.max(2, h * 0.055), gap = h * 0.11;
  const lines = [0.62, 0.9, 0.9, 0.72].map((f, i) =>
    el('div', { position: 'absolute', left: pad, top: pad + i * gap + h * 0.05, width: (w - 2 * pad) * f, height: line, background: paper, borderRadius: line }));
  return el(
    'div',
    { position: 'relative', width: w, height: h, background: ink, borderRadius: h * 0.06 },
    ...lines,
    el('div', { position: 'absolute', right: pad * 0.75, bottom: pad * 0.75, width: h * 0.19, height: h * 0.19, background: seal, transform: 'rotate(45deg)' })
  );
}

const W = 1600, H = 800;
const stage = (bg, ...children) =>
  el('div', { width: W, height: H, background: bg, alignItems: 'center', justifyContent: 'center' }, ...children);

const directions = [
  {
    slug: 'A-wordmark',
    name: 'A — Typographic wordmark (the current identity, formalized)',
    tree: stage(
      PAPER,
      el('div', { flexDirection: 'column', alignItems: 'center', gap: 22 },
        el('div', { alignItems: 'center', gap: 22 },
          text('New Bill of Rights', { ...serif, fontWeight: 700, fontSize: 118, color: INK, letterSpacing: 1 }),
          diamond(30)),
        el('div', { alignItems: 'center', gap: 26 },
          el('div', { width: 120, height: 2, background: RULE }),
          caps('Foundation', 30, INK_SOFT),
          el('div', { width: 120, height: 2, background: RULE })))
    ),
  },
  {
    slug: 'B-monogram-seal',
    name: 'B — Monogram seal (N with the gold mark) + stacked wordmark',
    tree: stage(
      PAPER,
      el('div', { alignItems: 'center', gap: 64 },
        el('div', { position: 'relative', width: 300, height: 300, borderRadius: 150, background: INK, alignItems: 'center', justifyContent: 'center' },
          el('div', { position: 'absolute', left: 14, top: 14, width: 272, height: 272, borderRadius: 136, border: `2px solid ${ACCENT}` }),
          text('N', { ...serif, fontWeight: 700, fontSize: 200, color: PAPER, paddingBottom: 14, paddingRight: 30 }),
          el('div', { position: 'absolute', right: 74, bottom: 76, width: 34, height: 34, background: ACCENT, transform: 'rotate(45deg)' })),
        el('div', { flexDirection: 'column', gap: 6 },
          text('New Bill', { ...serif, fontWeight: 700, fontSize: 112, color: INK, lineHeight: 1 }),
          text('of Rights', { ...serif, fontWeight: 700, fontSize: 112, color: INK, lineHeight: 1 }),
          el('div', { marginTop: 22, alignItems: 'center', gap: 18 },
            el('div', { width: 44, height: 2, background: ACCENT }),
            caps('Foundation', 30, INK_SOFT))))
    ),
  },
  {
    slug: 'C-bill-mark',
    name: 'C — The bill mark (document with gold seal) + wordmark',
    tree: stage(
      PAPER,
      el('div', { alignItems: 'center', gap: 60 },
        billMark(300),
        el('div', { flexDirection: 'column', gap: 4 },
          caps('The', 30, ACCENT),
          text('New Bill of Rights', { ...serif, fontWeight: 700, fontSize: 96, color: INK, lineHeight: 1.05, marginTop: 6 }),
          text('Foundation', { ...serif, fontWeight: 400, fontSize: 60, color: INK_SOFT, lineHeight: 1.05 })))
    ),
  },
  {
    slug: 'D-reverse-band',
    name: 'D — Reverse (ink ground) with a numbered-article motif',
    tree: stage(
      INK,
      el('div', { flexDirection: 'column', alignItems: 'center', gap: 30 },
        el('div', { alignItems: 'center', gap: 34 },
          ...['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII'].map((n) =>
            text(n, { ...serif, fontWeight: 400, fontSize: 30, color: ACCENT, letterSpacing: 2 }))),
        el('div', { width: 900, height: 2, background: ACCENT, opacity: 0.7 }),
        text('New Bill of Rights', { ...serif, fontWeight: 700, fontSize: 124, color: PAPER, letterSpacing: 1, marginTop: 8 }),
        el('div', { alignItems: 'center', gap: 22, marginTop: 4 },
          diamond(14),
          caps('Foundation', 32, PAPER, 400),
          diamond(14)))
    ),
  },
];

const pngs = [];
for (const d of directions) {
  const svg = await satori(d.tree, { width: W, height: H, fonts });
  writeFileSync(resolve(out, `${d.slug}.svg`), svg);
  const png = new Resvg(svg, { fitTo: { mode: 'width', value: W } }).render().asPng();
  writeFileSync(resolve(out, `${d.slug}.png`), png);
  pngs.push({ d, svg });
  console.log('wrote', d.slug);
}

// Contact sheet: 2×2 grid of the PNGs with captions (plain SVG rasterized by
// resvg with Public Sans supplied explicitly — no system fonts required).
const esc = (t) => t.replace(/&/g, '&amp;').replace(/</g, '&lt;');
const cells = pngs.map(({ d }, i) => {
  const x = 40 + (i % 2) * 1180, y = 40 + Math.floor(i / 2) * 680;
  const b64 = readFileSync(resolve(out, `${d.slug}.png`)).toString('base64');
  return `<image x="${x}" y="${y}" width="1140" height="570" href="data:image/png;base64,${b64}"/>
  <text x="${x}" y="${y + 616}" font-family="Public Sans" font-weight="600" font-size="30" fill="${INK}">${esc(d.name)}</text>`;
}).join('\n');
const sheetSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="2400" height="1400" viewBox="0 0 2400 1400"><rect width="2400" height="1400" fill="#e9e2d3"/>${cells}</svg>`;
writeFileSync(resolve(out, 'contact-sheet.png'), new Resvg(sheetSvg, {
  fitTo: { mode: 'width', value: 2400 },
  font: { loadSystemFonts: false, fontFiles: [resolve(root, 'site/src/og/fonts/PublicSans-SemiBold.ttf')], defaultFontFamily: 'Public Sans' },
}).render().asPng());
writeFileSync(resolve(out, 'README.md'), `# Logo samples (2026-08-17)

Four directions generated from the brand tokens by \`scripts/make-logo-samples.mjs\`.
Each has an SVG (vector, text outlined) and a PNG. \`contact-sheet.png\` shows all four.

${directions.map((d) => `- **${d.slug}** — ${d.name}`).join('\n')}
`);
console.log('contact sheet written');
