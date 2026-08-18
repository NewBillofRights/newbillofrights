import type { APIRoute, GetStaticPaths } from 'astro';
import { getCollection } from 'astro:content';
import { renderOg } from '../../../lib/og';

export const getStaticPaths: GetStaticPaths = async () => {
  const candidates = await getCollection('candidates');
  return candidates.map((c) => ({
    params: { slug: c.id },
    props: {
      spec: {
        kicker: `Candidate category · ${c.data.gate}`,
        title: c.data.title,
        summary: c.data.summary,
      },
    },
  }));
};

export const GET: APIRoute = async ({ props }) => {
  const png = await renderOg(props.spec);
  return new Response(png, { headers: { 'Content-Type': 'image/png' } });
};
