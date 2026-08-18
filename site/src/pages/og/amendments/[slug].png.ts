import type { APIRoute, GetStaticPaths } from 'astro';
import { getCollection } from 'astro:content';
import { renderOg } from '../../../lib/og';

export const getStaticPaths: GetStaticPaths = async () => {
  const amendments = await getCollection('amendments');
  return amendments.map((a) => ({
    params: { slug: a.id },
    props: {
      spec: {
        kicker: `Amendment ${String(a.data.order).padStart(2, '0')}`,
        title: a.data.title,
        summary: a.data.principleSummary,
      },
    },
  }));
};

export const GET: APIRoute = async ({ props }) => {
  const png = await renderOg(props.spec);
  return new Response(png, { headers: { 'Content-Type': 'image/png' } });
};
