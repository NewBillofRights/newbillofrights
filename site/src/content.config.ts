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

// Rejected categories: one MDX page per category, drafted from the memo in
// research/rejected/<SLUG>_REJECTED.md (footnoted to the same sources).
const rejected = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/rejected' }),
  schema: z.object({
    title: z.string(),
    order: z.number().int(),
    rejectedOn: z.string(),
    // The test the category failed, in a few words (index + page kicker)
    failedTest: z.string(),
    // One-line reason for the index (names the failed test)
    summary: z.string(),
    // Repo-relative path of the research memo the page is drafted from
    memo: z.string(),
    // 'draft' until Michael's read (decision 9), then 'reviewed'
    status: z.enum(['draft', 'reviewed']).default('draft'),
  }),
});

// Candidate categories: one MDX page per category, drafted from the memo in
// research/candidates/<SLUG>_CANDIDATE.md (footnoted to the same sources).
// Same shape as `rejected` so the two evidence sections stay parallel.
const candidates = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/candidates' }),
  schema: z.object({
    title: z.string(),
    order: z.number().int(),
    // Date the category entered the candidate list (CATEGORIES.md)
    candidateSince: z.string(),
    // What the category is waiting on, in a few words (index + page kicker)
    gate: z.string(),
    // One-line status for the index (the floor/verdict and the open test)
    summary: z.string(),
    // Repo-relative path of the research memo the page is drafted from
    memo: z.string(),
    // 'draft' until Michael's read (decision 9), then 'reviewed'
    status: z.enum(['draft', 'reviewed']).default('draft'),
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
