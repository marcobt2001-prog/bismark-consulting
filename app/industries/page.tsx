import type { Metadata } from 'next';
import IndustriesPage from '@/views/IndustriesPage';

export const metadata: Metadata = {
  title: 'Industries | Bismark Consulting Group',
  description: 'We transform operations across Banking, Insurance, Manufacturing, Oil & Gas, and more. The method works because operational patterns repeat across industries.',
};

export default function Industries() {
  return <IndustriesPage />;
}
