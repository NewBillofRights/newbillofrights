// The seal mark (logo direction B): ink disc, gold inner ring, Caslon "N" in
// parchment, the gold diamond. Renders once with satori (text → paths) and
// writes the SVG the site inlines (site/src/components/SealMark.astro reads it
// at build time) plus site/public/brand/seal.svg for downloads/press use.
//
// Usage (from repo root): node scripts/make-seal.mjs
import satori from '../site/node_modules/satori/dist/index.js';
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const PAPER = '#faf7f1', INK = '#1c2b3a', ACCENT = '#a97d1c';
const caslonBold = readFileSync(resolve(root, 'site/src/og/fonts/LibreCaslonText-Bold.ttf'));

// Same proportions as design/logo-samples/B-monogram-seal (300 px master).
export const SEAL = 300;
export function sealTree(size = SEAL, { ink = INK, paper = PAPER, accent = ACCENT } = {}) {
  const k = size / 300;
  return {
    type: 'div',
    props: {
      style: { display: 'flex', position: 'relative', width: size, height: size, borderRadius: size / 2, background: ink, alignItems: 'center', justifyContent: 'center' },
      children: [
        { type: 'div', props: { style: { display: 'flex', position: 'absolute', left: 14 * k, top: 14 * k, width: 272 * k, height: 272 * k, borderRadius: 136 * k, border: `${Math.max(1, 2 * k)}px solid ${accent}` } } },
        { type: 'div', props: { style: { display: 'flex', fontFamily: 'Libre Caslon Text', fontWeight: 700, fontSize: 200 * k, color: paper, paddingBottom: 14 * k, paddingRight: 30 * k }, children: 'N' } },
        { type: 'div', props: { style: { display: 'flex', position: 'absolute', right: 74 * k, bottom: 76 * k, width: 34 * k, height: 34 * k, background: accent, transform: 'rotate(45deg)' } } },
      ],
    },
  };
}
export const sealFonts = [{ name: 'Libre Caslon Text', data: caslonBold, weight: 700, style: 'normal' }];

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const svg = await satori(sealTree(SEAL), { width: SEAL, height: SEAL, fonts: sealFonts });
  mkdirSync(resolve(root, 'site/public/brand'), { recursive: true });
  writeFileSync(resolve(root, 'site/public/brand/seal.svg'), svg);
  writeFileSync(resolve(root, 'site/src/components/seal.svg'), svg);
  console.log('seal.svg written (public/brand + components)');
}
