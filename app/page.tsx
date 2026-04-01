import type { Metadata } from 'next';
import HomePage from '@/views/HomePage';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Bismark Consulting Group | We Guarantee Our Results',
  description: 'Bismark Consulting Group transforms operations and guarantees results through the Transformative Leadership Mastery program. 25+ years of sustained results.',
  openGraph: {
    title: 'Bismark Consulting Group | We Guarantee Our Results',
    description: 'Bismark Consulting Group transforms operations and guarantees results through the Transformative Leadership Mastery program. 25+ years of sustained results.',
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
  },
};

export default function Home() {
  return <HomePage />;
}
