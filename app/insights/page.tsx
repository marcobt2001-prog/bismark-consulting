import type { Metadata } from 'next';
import InsightsPage from '@/views/InsightsPage';
import { SITE_URL } from '@/lib/site-config';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Insights | Bismark Consulting Group',
  description: 'Articles and perspectives on operational transformation from Bismark Consulting Group.',
  alternates: { canonical: `${SITE_URL}/insights` },
  openGraph: {
    title: 'Insights | Bismark Consulting Group',
    description: 'Articles and perspectives on operational transformation from Bismark Consulting Group.',
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
  },
};

export default function Insights() {
  return <InsightsPage />;
}
