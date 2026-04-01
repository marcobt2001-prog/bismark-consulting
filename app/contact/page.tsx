import type { Metadata } from 'next';
import ContactPage from '@/views/ContactPage';

export const metadata: Metadata = {
  title: 'Contact | Bismark Consulting Group',
  description: 'Ready to transform your operations? Start with a conversation about your challenges and objectives.',
};

export default function Contact() {
  return <ContactPage />;
}
