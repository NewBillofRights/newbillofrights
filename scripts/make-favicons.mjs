// Generate the favicon set into site/public/ from the brand tokens and fonts.
// The seal mark (ink disc, gold ring, Caslon "N", gold diamond) — text is
// rendered to paths (satori), so the SVG needs no font at display time.
//
// Usage (from repo root):  node scripts/make-favicons.mjs
// Outputs: favicon.svg, favicon.ico (16+32), favicon-32.png, apple-touch-icon.png (180),
//          icon-192.png, icon-512.png, manifest.webmanifest
import satori from '../site/node_modules/satori/dist/index.js';
import { Resvg } from '../site/node_modules/@resvg/resvg-js/index.js';
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const out = resolve(root, 'site/public');
mkdirSync(out, { recursive: true });

const PAPER = '#faf7f1';
const INK = '#1c2b3a';
const ACCENT = '#a97d1c';

// The seal mark (identity direction B) on a transparent ground for the
// browser tab; launcher icons get a parchment square behind it (iOS masks its
// own corners; Android maskable safe zone is the centre 80%, which the disc
// respects at 84% of the tile).
import { sealTree } from './make-seal.mjs';
const S = 64;
const tree = {
  type: 'div',
  props: { style: { display: 'flex', width: `${S}px`, height: `${S}px`, alignItems: 'center', justifyContent: 'center' }, children: sealTree(S) },
};
import { sealFonts } from './make-seal.mjs';
const svg = await satori(tree, { width: S, height: S, fonts: sealFonts });
writeFileSync(resolve(out, 'favicon.svg'), svg);

// Tab icons: transparent ground. Launcher icons: parchment square, seal at 84%.
function png(size, background) {
  const opts = { fitTo: { mode: 'width', value: size } };
  if (background) opts.background = background;
  return new Resvg(svg, opts).render().asPng();
}
const launcherSvg = svg.replace(/^<svg([^>]*)>/, (m, attrs) => `<svg${attrs}><rect width="${S}" height="${S}" fill="${PAPER}"/><g transform="translate(${S * 0.08} ${S * 0.08}) scale(0.84)">`).replace(/<\/svg>$/, '</g></svg>');
const launcher = (size) => new Resvg(launcherSvg, { fitTo: { mode: 'width', value: size } }).render().asPng();
writeFileSync(resolve(out, 'favicon-32.png'), png(32));
writeFileSync(resolve(out, 'apple-touch-icon.png'), launcher(180));
writeFileSync(resolve(out, 'icon-192.png'), launcher(192));
writeFileSync(resolve(out, 'icon-512.png'), launcher(512));

// ICO container holding PNG-encoded 16 and 32 px images (valid since Vista).
function ico(pngs) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); header.writeUInt16LE(1, 2); header.writeUInt16LE(pngs.length, 4);
  const dir = []; let offset = 6 + 16 * pngs.length;
  for (const { size, buf } of pngs) {
    const e = Buffer.alloc(16);
    e.writeUInt8(size === 256 ? 0 : size, 0); e.writeUInt8(size === 256 ? 0 : size, 1);
    e.writeUInt8(0, 2); e.writeUInt8(0, 3); e.writeUInt16LE(1, 4); e.writeUInt16LE(32, 6);
    e.writeUInt32LE(buf.length, 8); e.writeUInt32LE(offset, 12);
    offset += buf.length; dir.push(e);
  }
  return Buffer.concat([header, ...dir, ...pngs.map((p) => p.buf)]);
}
writeFileSync(resolve(out, 'favicon.ico'), ico([{ size: 16, buf: png(16) }, { size: 32, buf: png(32) }]));

writeFileSync(
  resolve(out, 'manifest.webmanifest'),
  JSON.stringify(
    {
      name: 'New Bill of Rights Foundation',
      short_name: 'New Bill of Rights',
      description: 'Constitutional amendments every American can agree on.',
      start_url: '/',
      display: 'browser',
      background_color: PAPER,
      theme_color: INK,
      icons: [
        { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
        { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
      ],
    },
    null,
    2
  ) + '\n'
);
console.log('favicons written to site/public/');
