import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import '@/index.css';

export const metadata: Metadata = {
  title: 'Bismark Consulting Group | We Guarantee Our Results',
  description: 'Bismark Consulting Group transforms operations through the Transformative Leadership Mastery program. 25+ years, 1,600+ apprentices trained, 10 industries, 16-week engagements.',
  metadataBase: new URL('https://bismark-consulting.vercel.app'),
  openGraph: {
    title: 'Bismark Consulting Group | We Guarantee Our Results',
    description: 'Transforming high-volume operations since 1998. 25+ years, 1,600+ apprentices trained, 10 industries.',
    url: 'https://bismark-consulting.vercel.app',
    siteName: 'Bismark Consulting Group',
    images: [
      {
        url: '/images/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'Bismark Consulting Group — We Guarantee Our Results',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bismark Consulting Group | We Guarantee Our Results',
    description: 'Transforming high-volume operations since 1998. 25+ years, 1,600+ apprentices trained, 10 industries.',
    images: ['/images/og-default.jpg'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Cinzel:wght@400;700&family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
        <script src="https://assets.calendly.com/assets/external/widget.js" async></script>
      </head>
      <body className="min-h-screen bg-white font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
