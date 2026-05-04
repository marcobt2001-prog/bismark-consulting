import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import IndustrySubPageLayout from '@/components/IndustrySubPageLayout';
import { industries } from '@/data/industries';
import { SITE_URL } from '@/lib/site-config';

export const dynamic = 'force-static';

export function generateStaticParams() {
  return industries.map((industry) => ({
    slug: industry.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const industry = industries.find((ind) => ind.slug === slug);
  return {
    title: `${industry?.name ?? 'Industry'} | Bismark Consulting Group`,
    description: industry?.descriptor ?? '',
    alternates: { canonical: `${SITE_URL}/industries/${slug}` },
    openGraph: {
      title: `${industry?.name ?? 'Industry'} | Bismark Consulting Group`,
      description: industry?.descriptor ?? '',
      images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    },
  };
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = industries.find((ind) => ind.slug === slug);

  if (!industry) {
    notFound();
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: SITE_URL,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Industries',
        item: `${SITE_URL}/industries`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: industry.name,
        item: `${SITE_URL}/industries/${industry.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <IndustrySubPageLayout industry={industry} />
    </>
  );
}
