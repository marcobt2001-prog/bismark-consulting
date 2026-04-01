import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import IndustrySubPageLayout from '@/components/IndustrySubPageLayout';
import { industries } from '@/data/industries';

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

  return <IndustrySubPageLayout industry={industry} />;
}
