import type { Metadata } from 'next';
import InsightsPage from '@/views/InsightsPage';

export const metadata: Metadata = {
  title: 'Insights | Bismark Consulting Group',
  description: 'Articles and perspectives on operational transformation from Bismark Consulting Group.',
};

export default function Insights() {
  return <InsightsPage />;
}
