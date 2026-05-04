import type { Metadata } from 'next';
import BismarkMethodPage from '@/views/BismarkMethodPage';
import { SITE_URL } from '@/lib/site-config';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'The Bismark Method | Bismark Consulting Group',
  description: 'A 16-week Learn and Do engagement that transforms your internal teams into the people who improve your operations — with guaranteed results.',
  alternates: { canonical: `${SITE_URL}/method` },
  openGraph: {
    title: 'The Bismark Method | Bismark Consulting Group',
    description: 'A 16-week Learn and Do engagement that transforms your internal teams into the people who improve your operations — with guaranteed results.',
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
  },
};

export default function Method() {
  return <BismarkMethodPage />;
}
