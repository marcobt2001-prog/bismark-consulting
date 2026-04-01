import type { Metadata } from 'next';
import AboutPage from '@/views/AboutPage';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'About | Bismark Consulting Group',
  description: 'Meet the team behind Bismark Consulting Group and the Transformative Leadership Mastery program.',
  openGraph: {
    title: 'About | Bismark Consulting Group',
    description: 'Meet the team behind Bismark Consulting Group and the Transformative Leadership Mastery program.',
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
  },
};

export default function About() {
  return <AboutPage />;
}
