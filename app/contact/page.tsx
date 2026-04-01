import type { Metadata } from 'next';
import ContactPage from '@/views/ContactPage';

export const metadata: Metadata = {
  title: 'Contact | Bismark Consulting Group',
  description: 'Ready to transform your operations? Start with a conversation about your challenges and objectives.',
  openGraph: {
    title: 'Contact | Bismark Consulting Group',
    description: 'Ready to transform your operations? Start with a conversation about your challenges and objectives.',
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
  },
};

export default function Contact() {
  return <ContactPage />;
}
