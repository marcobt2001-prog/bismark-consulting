import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import '@/index.css';

export const metadata: Metadata = {
  title: 'Bismark Consulting Group | We Guarantee Our Results',
  description: 'Bismark Consulting Group transforms operations through the Transformative Leadership Mastery program. 25+ years, 1,600+ apprentices trained, 10 industries, 16-week engagements.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
