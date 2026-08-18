import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

/**
 * Loads HOME.md (repo root) at build time and returns a map of
 * `## Heading` → body text, so the home page copy is editable in Markdown.
 * Body text is passed through as light inline markdown: *em* only.
 * Builds always run from site/, so the repo root is one level up from cwd.
 */
const HOME_MD = resolve(process.cwd(), '..', 'HOME.md');

function inlineMd(text: string): string {
  return text.replace(/\*([^*]+)\*/g, '<em>$1</em>');
}

export function loadHomeCopy(): Record<string, string> {
  const raw = readFileSync(HOME_MD, 'utf8');
  const sections: Record<string, string> = {};
  const parts = raw.split(/^## /m).slice(1);
  for (const part of parts) {
    const nl = part.indexOf('\n');
    const heading = part.slice(0, nl).trim();
    const body = part.slice(nl + 1).trim();
    sections[heading] = inlineMd(body);
  }
  return sections;
}
