import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://newbillofrights.net',
  integrations: [mdx(), sitemap()],
  // The three-bucket re-architecture (2026-08-18) moved the evidence section to
  // top-level URLs. Astro emits static redirect pages for these; firebase.json
  // also carries 301s so the old paths resolve either way.
  redirects: {
    '/evidence': '/candidates',
    '/evidence/candidates': '/candidates',
    '/evidence/candidates/[slug]': '/candidates/[slug]',
    '/evidence/rejected': '/rejected',
    '/evidence/rejected/[slug]': '/rejected/[slug]',
    '/evidence/polling': '/polling',
  },
  markdown: {
    remarkRehype: {
      footnoteLabel: 'Sources',
      footnoteLabelProperties: {}, // render the heading visibly (default hides it)
      footnoteBackLabel: 'Back to text',
    },
  },
  // Astro's HTML compression strips the space where a line break sits between
  // text and an inline element ("Reach us at<a"), which mangled prose across
  // the site. Bytes saved are negligible for a document site; correctness isn't.
  compressHTML: false,
});
