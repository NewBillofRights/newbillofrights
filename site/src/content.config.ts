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

// The three-bucket registry: every idea in the corpus — whole category or
// clause variant inside a proposed amendment — is exactly one entry, with one
// bucket and (for candidates) one gate. Schema per
// research/REGISTRY_INVENTORY_2026-08-18.md §B. Fields are optional/nullable
// and unknown keys pass through, so the file can be populated incrementally
// without breaking the build.
const registryPollQuestion = z.object({
  wording: z.string(),
  followUps: z.array(z.string()).default([]),
  threshold: z.string().nullable().optional(),
  verbatim: z.boolean().optional(),
});

const registryFloor = z
  .object({
    rep: z.number().nullable().optional(),
    dem: z.number().nullable().optional(),
    ind: z.number().nullable().optional(),
    overall: z.number().nullable().optional(),
    pollster: z.string().nullable().optional(),
    year: z.number().nullable().optional(),
    url: z.string().nullable().optional(),
  })
  .passthrough();

const registrySubItem = z
  .object({
    id: z.string(),
    title: z.string().optional(),
    status: z.enum(['proposed', 'candidate', 'rejected']).optional(),
    gate: z.string().nullable().optional(),
    failedTest: z.string().nullable().optional(),
    section: z.string().nullable().optional(),
    summary: z.string().nullable().optional(),
    pollQuestion: registryPollQuestion.nullable().optional(),
    page: z.string().nullable().optional(),
    memo: z.string().nullable().optional(),
    note: z.string().nullable().optional(),
  })
  .passthrough();

const registry = defineCollection({
  loader: file('./src/content/data/registry.json'),
  schema: z
    .object({
      title: z.string(),
      kind: z.enum(['category', 'clause']),
      parent: z.string().nullable().optional(),
      status: z.enum(['proposed', 'candidate', 'rejected']),
      tags: z.array(z.string()).default([]),
      floor: registryFloor.nullable().optional(),
      verdict: z.string().nullable().optional(),
      failedTest: z.string().nullable().optional(),
      gate: z.string().nullable().optional(),
      section: z.string().nullable().optional(),
      summary: z.string().nullable().optional(),
      pollQuestion: registryPollQuestion.nullable().optional(),
      pathBack: z.union([z.string(), z.object({ wording: z.string().nullable().optional(), threshold: z.string().nullable().optional() }).passthrough()]).nullable().optional(),
      pathBackNote: z.string().nullable().optional(),
      memo: z.string().nullable().optional(),
      page: z.string().nullable().optional(),
      since: z.string().nullable().optional(),
      decidedOn: z.string().nullable().optional(),
      alsoListedUnder: z.array(z.string()).default([]),
      supersedes: z.array(z.string()).default([]),
      twinOf: z.string().nullable().optional(),
      subItems: z.array(registrySubItem).default([]),
      note: z.string().nullable().optional(),
    })
    .passthrough(),
});

export const collections = { amendments, rejected, candidates, polling, registry };
