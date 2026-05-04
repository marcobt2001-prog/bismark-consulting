import type { Metadata } from 'next';
import SchedulePage from '@/views/SchedulePage';
import { SITE_URL } from '@/lib/site-config';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Schedule a Walkthrough | Bismark Consulting Group',
  description: 'Book a 30-45 minute discovery call to discuss your operational landscape and schedule your complimentary on-site walkthrough.',
  alternates: { canonical: `${SITE_URL}/schedule` },
  openGraph: {
    title: 'Schedule a Walkthrough | Bismark Consulting Group',
    description: 'Book a 30-45 minute discovery call to discuss your operational landscape and schedule your complimentary on-site walkthrough.',
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
  },
};

export default function Schedule() {
  return <SchedulePage />;
}
