import type { Metadata } from 'next';
import HomePage from '@/views/HomePage';

export const metadata: Metadata = {
  title: 'Bismark Consulting Group | We Guarantee Our Results',
  description: 'Bismark Consulting Group transforms operations and guarantees results through the Transformative Leadership Mastery program. 25+ years of sustained results.',
};

export default function Home() {
  return <HomePage />;
}
