/**
 * Static pages that get their own share image. Keyed by route path so
 * Base.astro can look up the image for the current page; the OG endpoint
 * renders one PNG per entry. Amendment and rejected-category pages are
 * generated from their collections instead (see src/pages/og/).
 */
export interface OgPage {
  slug: string; // file name under /og/
  path: string; // route path with trailing slash
  kicker?: string;
  title: string;
  summary: string;
}

export const OG_DEFAULT = {
  slug: 'default',
  title: 'Constitutional amendments every American can agree on.',
  summary: 'Freedom · Democracy · Rule of Law · Good Government',
  footer: 'New Bill of Rights Foundation',
};

export const ogPages: OgPage[] = [
  { slug: 'mission', path: '/mission/', title: 'Mission', summary: 'Bipartisanship as a fundamental, not a tactic. Only amendments that pass the full-spectrum test.' },
  { slug: 'amendments', path: '/amendments/', title: 'The Amendments', summary: 'Nine proposed amendments, each with a bipartisan floor measured before it made the list.' },
  { slug: 'after-ratification', path: '/amendments/after-ratification/', kicker: 'The amendments', title: 'After ratification', summary: 'What happens to the laws already on the books when an amendment passes — and what it leaves to statute.' },
  { slug: 'polling', path: '/polling/', title: 'Polling', summary: 'Support among Democrats, Republicans, and independents for every proposal — and each proposal’s bipartisan floor.' },
  { slug: 'rejected', path: '/rejected/', title: 'Rejected Categories', summary: 'What could not pass the full-spectrum test, the test each failed, and what would bring it back.' },
  { slug: 'candidates', path: '/candidates/', title: 'Candidate Categories', summary: 'The open pipeline: ideas under consideration and the evidence that would move each in or out.' },
  { slug: 'polling-questions', path: '/candidates/polling-questions/', kicker: 'Candidates', title: 'Polling questions', summary: 'The exact wording each candidate is waiting on, and the bipartisan floor it must clear.' },
  { slug: 'get-involved', path: '/get-involved/', title: 'Get Involved', summary: 'Join the mailing list, volunteer, attend a salon, or help found the institution.' },
  { slug: 'seed-donors', path: '/get-involved/seed-donors/', kicker: 'Get involved', title: 'Become a Founding Donor', summary: 'Help formally launch the New Bill of Rights Foundation.' },
  { slug: 'salons', path: '/get-involved/salons/', kicker: 'Get involved', title: 'Salons', summary: 'Monthly conversations on the open questions in the amendments.' },
  { slug: 'volunteer', path: '/get-involved/volunteer/', kicker: 'Get involved', title: 'Volunteer', summary: 'Research, analytics, polling, salons, and fundraising.' },
  { slug: 'about', path: '/about/', title: 'About', summary: 'Who we are, how the work is done, and how to reach us.' },
  { slug: 'faq', path: '/faq/', title: 'FAQ', summary: 'Recurring questions about the New Bill of Rights project, answered.' },
];

export function ogImageForPath(path: string): string {
  const p = path.endsWith('/') ? path : `${path}/`;
  const hit = ogPages.find((x) => x.path === p);
  return `/og/${hit ? hit.slug : OG_DEFAULT.slug}.png`;
}
