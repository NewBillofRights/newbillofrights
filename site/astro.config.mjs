import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://newbillofrights.net',
  integrations: [mdx(), sitemap()],
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
