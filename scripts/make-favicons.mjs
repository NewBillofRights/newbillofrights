// Generate the favicon set into site/public/ from the brand tokens and fonts.
// Ink square, parchment Caslon "N", the gold diamond mark. Text is rendered to
// paths (satori), so the SVG needs no font at display time.
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
const caslonBold = readFileSync(resolve(root, 'site/src/og/fonts/LibreCaslonText-Bold.ttf'));

// One design at a 64-unit canvas; rasterized at every size from the same SVG.
const S = 64;
const tree = {
  type: 'div',
  props: {
    style: {
      width: `${S}px`, height: `${S}px`, display: 'flex',
      background: INK, position: 'relative',
    },
    children: [
      {
        type: 'div',
        props: {
          style: {
            position: 'absolute', left: '0px', top: '0px', width: `${S}px`, height: `${S}px`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: 'Libre Caslon Text', fontWeight: 700, fontSize: '46px',
            color: PAPER, paddingBottom: '2px', paddingRight: '6px',
          },
          children: 'N',
        },
      },
      {
        // the gold diamond from the wordmark, tucked at the lower right
        type: 'div',
        props: {
          style: {
            position: 'absolute', right: '9px', bottom: '11px', width: '9px', height: '9px',
            background: ACCENT, transform: 'rotate(45deg)',
          },
        },
      },
    ],
  },
};

const svg = await satori(tree, {
  width: S, height: S,
  fonts: [{ name: 'Libre Caslon Text', data: caslonBold, weight: 700, style: 'normal' }],
});
writeFileSync(resolve(out, 'favicon.svg'), svg);

function png(size, radius = 0) {
  // Apple/Android launcher icons look better with the corner radius baked in
  // (iOS masks its own; Android maskable wants square + safe zone — we keep
  // the glyph well inside the center 80%, so square works for both).
  const r = new Resvg(svg, { fitTo: { mode: 'width', value: size }, background: INK });
  return r.render().asPng();
}
writeFileSync(resolve(out, 'favicon-32.png'), png(32));
writeFileSync(resolve(out, 'apple-touch-icon.png'), png(180));
writeFileSync(resolve(out, 'icon-192.png'), png(192));
writeFileSync(resolve(out, 'icon-512.png'), png(512));

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
