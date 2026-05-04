import type { Metadata } from 'next';
import FAQPage from '@/views/FAQPage';
import { SITE_URL } from '@/lib/site-config';
import { faqClusters } from '@/data/faq';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'FAQ | Bismark Consulting Group',
  description: 'Straight answers about how we work, what we deliver, and why it holds.',
  alternates: { canonical: `${SITE_URL}/faq` },
  openGraph: {
    title: 'FAQ | Bismark Consulting Group',
    description: 'Straight answers about how we work, what we deliver, and why it holds.',
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
  },
};

export default function FAQ() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqClusters.flatMap((cluster) =>
      cluster.items.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      }))
    ),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <FAQPage />
    </>
  );
}
