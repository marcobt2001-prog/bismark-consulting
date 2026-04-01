import type { Metadata } from 'next';
import AIPage from '@/views/AIPage';

export const metadata: Metadata = {
  title: 'AI | Bismark Consulting Group',
  description: 'Bismark is developing a proprietary AI system designed to protect and sustain operational gains after a Bismark Method engagement.',
};

export default function AI() {
  return <AIPage />;
}
