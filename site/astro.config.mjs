import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://newbillofrights.net',
  // Firebase Hosting serves every page without a trailing slash
  // (firebase.json: trailingSlash false). Astro must agree, or the sitemap and
  // every <link rel="canonical"> point at /about/ — which Firebase 301s to
  // /about. Search Console reported all sitemap URLs as "Page with redirect"
  // (2026-09-06) because of that mismatch.
  trailingSlash: 'never',
  integrations: [
    mdx(),
    sitemap({
      // Internal design-system page; indexable pages only in the sitemap.
      filter: (page) => !page.startsWith('https://newbillofrights.net/styleguide'),
    }),
  ],
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
