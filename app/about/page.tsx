import type { Metadata } from 'next';
import AboutPage from '@/views/AboutPage';

export const metadata: Metadata = {
  title: 'About | Bismark Consulting Group',
  description: 'Meet the team behind Bismark Consulting Group and the Transformative Leadership Mastery program.',
};

export default function About() {
  return <AboutPage />;
}
