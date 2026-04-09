export interface InsightMeta {
  slug: string;
  title: string;
  subtitle: string;
  author: string;
  authorTitle: string;
  publishedDate: string;
  readingTimeMinutes: number;
  excerpt: string;
}

export const insights: InsightMeta[] = [
  {
    slug: 'what-happens-after-consultants-leave',
    title: 'What Happens After the Consultants Leave',
    subtitle: 'And Why Nobody in the Industry Wants to Talk About It',
    author: 'Luis Telleria-Xucla',
    authorTitle: 'Founder & Managing Director',
    publishedDate: '2026-04-09',
    readingTimeMinutes: 14,
    excerpt:
      'The results faded. The metrics drifted. Every time. Different company, different industry, different country — same outcome. Here is an honest account of why consulting results don\'t last, and what has to be structurally different.',
  },
];
