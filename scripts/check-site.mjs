#!/usr/bin/env node
// Site integrity check — run before every deploy that touches content.
//   node scripts/check-site.mjs
// Verifies, for every amendment page:
//   1. draft constitutional text is byte-identical to research/PROPOSED_AMENDMENTS.md
//   2. every footnote reference has a definition and vice versa
//   3. every URL on the page appears somewhere in the research corpus (no invented sources)
//   4. no banned vocabulary (COPY_VOICE_GUIDE.md) and no "landslide" (house rule: "wide margins")
// and, for every rejected-category page (site/src/content/rejected), checks 2–4
// (the corpus includes research/rejected/*.md). Standalone MDX under site/src/copy/ is
//   checked the same way (footnotes, provenance, banned words).
// Exits non-zero on any failure.
import { readFileSync, readdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const canonical = readFileSync(resolve(root, 'research/PROPOSED_AMENDMENTS.md'), 'utf8')
  .split('\n').filter((l) => l.startsWith('**Section'));
const corpusFiles = [
  ...readdirSync(resolve(root, 'research')).filter((f) => f.endsWith('.md')).map((f) => resolve(root, 'research', f)),
  ...readdirSync(resolve(root, 'research/rejected')).filter((f) => f.endsWith('.md')).map((f) => resolve(root, 'research/rejected', f)),
];
const corpus = corpusFiles.map((f) => readFileSync(f, 'utf8')).join('\n');
const decode = (u) => u.replace(/%28/g, '(').replace(/%29/g, ')');
const BANNED = /\b(populist|elites?|establishment|woke|weaponized|radical (left|right)|far[- ](left|right)|landslides?)\b/gi;

let ok = true, total = 0;
function checkDir(sub, { draftText, base = 'site/src/content' }) {
const dir = resolve(root, base, sub);
for (const f of readdirSync(dir).filter((f) => f.endsWith('.mdx')).sort()) {
  const mdx = readFileSync(resolve(dir, f), 'utf8');
  const article = draftText ? (mdx.split('class="article-text"')[1] || '').split('</div>')[0] : '';
  const sections = article.split('\n').filter((l) => l.startsWith('**Section'));
  const badSections = sections.filter((s) => !canonical.includes(s));
  const markerInArticle = /\[\^[^\]]+\]/.test(article);
  const defs = [...mdx.matchAll(/^\[\^([^\]]+)\]:/gm)].map((m) => m[1]);
  const body = mdx.split(/^\[\^[^\]]+\]:/m)[0];
  const refs = [...body.matchAll(/\[\^([^\]]+)\]/g)].map((m) => m[1]);
  const undefinedRefs = [...new Set(refs)].filter((r) => !defs.includes(r));
  const orphanDefs = defs.filter((d) => !refs.includes(d));
  const urls = [...mdx.matchAll(/\]\((https?:[^)\s]+)\)/g)].map((m) => m[1]);
  const unsourced = urls.filter((u) => !corpus.includes(u) && !corpus.includes(decode(u)));
  const banned = mdx.match(BANNED) || [];
  const problems = [];
  if (draftText && !sections.length) problems.push('no draft text sections found');
  if (badSections.length) problems.push(`draft text differs from canonical (${badSections.length})`);
  if (markerInArticle) problems.push('footnote marker inside draft text');
  if (undefinedRefs.length) problems.push(`undefined refs: ${undefinedRefs.join(',')}`);
  if (orphanDefs.length) problems.push(`orphan defs: ${orphanDefs.join(',')}`);
  if (unsourced.length) problems.push(`URLs not in research corpus: ${unsourced.join(' ')}`);
  if (banned.length) problems.push(`banned words: ${banned.join(',')}`);
  total += defs.length;
  console.log(problems.length ? 'PROBLEM' : 'OK     ', `${sub}/${f}`.padEnd(38), draftText ? `sections ${sections.length}, ` : '', `footnotes ${defs.length}`, problems.length ? '— ' + problems.join('; ') : '');
  if (problems.length) ok = false;
}
}
checkDir('amendments', { draftText: true });
checkDir('rejected', { draftText: false });
// Standalone MDX copy rendered by .astro pages (e.g. /amendments/after-ratification)
checkDir('copy', { draftText: false, base: 'site/src' });
console.log(`${total} footnotes; ${ok ? 'ALL CHECKS PASS' : 'FIX NEEDED'}`);
process.exit(ok ? 0 : 1);
