import type { Metadata } from 'next';
import IndustriesPage from '@/views/IndustriesPage';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Industries | Bismark Consulting Group',
  description: 'We transform operations across Banking, Insurance, Manufacturing, Oil & Gas, and more. The method works because operational patterns repeat across industries.',
  openGraph: {
    title: 'Industries | Bismark Consulting Group',
    description: 'We transform operations across Banking, Insurance, Manufacturing, Oil & Gas, and more. The method works because operational patterns repeat across industries.',
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
  },
};

export default function Industries() {
  return <IndustriesPage />;
}
