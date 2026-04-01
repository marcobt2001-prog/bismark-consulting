import type { Metadata } from 'next';
import AIPage from '@/views/AIPage';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'AI | Bismark Consulting Group',
  description: 'Bismark is developing a proprietary AI system designed to protect and sustain operational gains after a Bismark Method engagement.',
  openGraph: {
    title: 'AI | Bismark Consulting Group',
    description: 'Bismark is developing a proprietary AI system designed to protect and sustain operational gains after a Bismark Method engagement.',
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
  },
};

export default function AI() {
  return <AIPage />;
}
