import type { APIRoute, GetStaticPaths } from 'astro';
import { renderOg } from '../../lib/og';
import { ogPages, OG_DEFAULT } from '../../lib/ogPages';

export const getStaticPaths: GetStaticPaths = () => [
  { params: { slug: OG_DEFAULT.slug }, props: { spec: { title: OG_DEFAULT.title, summary: OG_DEFAULT.summary, footer: OG_DEFAULT.footer } } },
  ...ogPages.map((p) => ({
    params: { slug: p.slug },
    props: { spec: { kicker: p.kicker, title: p.title, summary: p.summary } },
  })),
];

export const GET: APIRoute = async ({ props }) => {
  const png = await renderOg(props.spec);
  return new Response(png, { headers: { 'Content-Type': 'image/png' } });
};
