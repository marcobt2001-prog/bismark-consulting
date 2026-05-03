import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { insights } from '@/data/insights';
import WhatHappensAfterConsultantsLeave from '@/views/insights/WhatHappensAfterConsultantsLeave';
import WhyImprovementTeamStartsAtOrgChart from '@/views/insights/WhyImprovementTeamStartsAtOrgChart';

export const dynamic = 'force-static';

export async function generateStaticParams() {
  return insights.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = insights.find((a) => a.slug === slug);
  if (!article) return {};
  return {
    title: `${article.title} | Bismark Consulting Group`,
    description: article.excerpt,
    openGraph: {
      title: `${article.title} | Bismark Consulting Group`,
      description: article.excerpt,
      images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    },
  };
}

const articleComponents: Record<string, React.ComponentType> = {
  'what-happens-after-consultants-leave': WhatHappensAfterConsultantsLeave,
  'org-chart-guarantees-rework': WhyImprovementTeamStartsAtOrgChart,
};

export default async function InsightArticle({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const ArticleComponent = articleComponents[slug];
  if (!ArticleComponent) notFound();
  return <ArticleComponent />;
}
