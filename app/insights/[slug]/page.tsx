import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { insights } from '@/data/insights';
import { SITE_URL } from '@/lib/site-config';
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
    alternates: { canonical: `${SITE_URL}/insights/${article.slug}` },
    openGraph: {
      title: `${article.title} | Bismark Consulting Group`,
      description: article.excerpt,
      type: 'article',
      publishedTime: article.publishedDate,
      authors: [article.author],
      section: 'Operational Consulting',
      url: `${SITE_URL}/insights/${article.slug}`,
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
  const article = insights.find((a) => a.slug === slug);
  const ArticleComponent = articleComponents[slug];
  if (!article || !ArticleComponent) notFound();

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt,
    author: {
      '@type': 'Person',
      name: article.author,
      jobTitle: article.authorTitle,
      url: `${SITE_URL}/about`,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Bismark Consulting Group',
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/images/og-default.jpg`,
      },
    },
    datePublished: article.publishedDate,
    dateModified: article.publishedDate,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/insights/${article.slug}`,
    },
    image: `${SITE_URL}/images/og-default.jpg`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <ArticleComponent />
    </>
  );
}
