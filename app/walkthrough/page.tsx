import type { Metadata } from 'next';
import WalkthroughPage from '@/views/WalkthroughPage';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Schedule a Walkthrough | Bismark Consulting Group',
  description: 'A complimentary 3-5 day on-site operational assessment. See our rigor firsthand before any engagement begins.',
  openGraph: {
    title: 'Schedule a Walkthrough | Bismark Consulting Group',
    description: 'A complimentary 3-5 day on-site operational assessment. See our rigor firsthand before any engagement begins.',
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
  },
};

export default function Walkthrough() {
  return <WalkthroughPage />;
}
