import type { APIRoute, GetStaticPaths } from 'astro';
import { getCollection } from 'astro:content';
import { renderOg } from '../../../lib/og';

export const getStaticPaths: GetStaticPaths = async () => {
  const rejected = await getCollection('rejected');
  return rejected.map((r) => ({
    params: { slug: r.id },
    props: {
      spec: {
        kicker: `Rejected category · ${r.data.failedTest}`,
        title: r.data.title,
        summary: r.data.summary,
      },
    },
  }));
};

export const GET: APIRoute = async ({ props }) => {
  const png = await renderOg(props.spec);
  return new Response(png, { headers: { 'Content-Type': 'image/png' } });
};
