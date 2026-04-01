import type { Metadata } from 'next';
import FAQPage from '@/views/FAQPage';

export const metadata: Metadata = {
  title: 'FAQ | Bismark Consulting Group',
  description: 'Straight answers about how we work, what we deliver, and why it holds.',
};

export default function FAQ() {
  return <FAQPage />;
}
