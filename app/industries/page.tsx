import type { Metadata } from 'next';
import IndustriesPage from '@/views/IndustriesPage';
import { SITE_URL } from '@/lib/site-config';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Industries | Bismark Consulting Group',
  description: 'We transform operations across Banking, Insurance, Manufacturing, Oil & Gas, and more. The method works because operational patterns repeat across industries.',
  alternates: { canonical: `${SITE_URL}/industries` },
  openGraph: {
    title: 'Industries | Bismark Consulting Group',
    description: 'We transform operations across Banking, Insurance, Manufacturing, Oil & Gas, and more. The method works because operational patterns repeat across industries.',
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
  },
};

export default function Industries() {
  return <IndustriesPage />;
}
