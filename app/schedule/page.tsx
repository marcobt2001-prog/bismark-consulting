import type { Metadata } from 'next';
import SchedulePage from '@/views/SchedulePage';

export const metadata: Metadata = {
  title: 'Schedule a Walkthrough | Bismark Consulting Group',
  description: 'Book a 30-45 minute discovery call to discuss your operational landscape and schedule your complimentary on-site walkthrough.',
};

export default function Schedule() {
  return <SchedulePage />;
}
