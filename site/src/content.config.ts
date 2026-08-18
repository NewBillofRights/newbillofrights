import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

const amendments = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/amendments' }),
  schema: z.object({
    title: z.string(),
    order: z.number().int(),
    problemSummary: z.string(),
    principleSummary: z.string(),
    // 'draft' until Michael's voice pass (decision 9), then 'reviewed'
    status: z.enum(['draft', 'reviewed']).default('draft'),
    pollingKeys: z.array(z.string()).default([]),
  }),
});

const rejected = defineCollection({
  loader: file('./src/content/data/rejected.json'),
  schema: z.object({
    title: z.string(),
    rejectedOn: z.string(),
    reason: z.string(),
  }),
});

const candidates = defineCollection({
  loader: file('./src/content/data/candidates.json'),
  schema: z.object({
    title: z.string(),
    note: z.string().optional(),
  }),
});

const polling = defineCollection({
  loader: file('./src/content/data/polling.json'),
  schema: z.object({
    proposal: z.string(),
    amendment: z.string(),
    support: z.object({
      dem: z.number(),
      rep: z.number(),
      ind: z.number().optional(),
      overall: z.number().optional(),
    }),
    source: z.string(),
    url: z.string().url().optional(),
    year: z.number(),
    placeholder: z.boolean().default(false),
  }),
});

export const collections = { amendments, rejected, candidates, polling };
