import type { Metadata } from 'next';
import ContactPage from '@/views/ContactPage';
import { SITE_URL } from '@/lib/site-config';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Contact | Bismark Consulting Group',
  description: 'Ready to transform your operations? Start with a conversation about your challenges and objectives.',
  alternates: { canonical: `${SITE_URL}/contact` },
  openGraph: {
    title: 'Contact | Bismark Consulting Group',
    description: 'Ready to transform your operations? Start with a conversation about your challenges and objectives.',
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
  },
};

export default function Contact() {
  return <ContactPage />;
}
