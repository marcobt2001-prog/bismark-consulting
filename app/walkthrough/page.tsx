import type { Metadata } from 'next';
import WalkthroughPage from '@/views/WalkthroughPage';

export const metadata: Metadata = {
  title: 'Schedule a Walkthrough | Bismark Consulting Group',
  description: 'A complimentary 3-5 day on-site operational assessment. See our rigor firsthand before any engagement begins.',
};

export default function Walkthrough() {
  return <WalkthroughPage />;
}
