import type { Metadata } from 'next';
import AboutPage from '@/views/AboutPage';
import { SITE_URL } from '@/lib/site-config';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'About | Bismark Consulting Group',
  description: 'Meet the team behind Bismark Consulting Group and the Transformative Leadership Mastery program.',
  alternates: { canonical: `${SITE_URL}/about` },
  openGraph: {
    title: 'About | Bismark Consulting Group',
    description: 'Meet the team behind Bismark Consulting Group and the Transformative Leadership Mastery program.',
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
  },
};

export default function About() {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Luis Telleria-Xucla',
    jobTitle: 'Founder & Managing Director',
    worksFor: {
      '@type': 'ProfessionalService',
      name: 'Bismark Consulting Group',
      url: SITE_URL,
    },
    image: `${SITE_URL}/images/Luis-Telleria-Professional-Photo.png`,
    url: `${SITE_URL}/about`,
    description:
      'Founder of Bismark Consulting Group (1998) and creator of The Bismark Method (2007). Has personally coached over 80 clients through operational transformations across ten industries on three continents.',
    nationality: 'Nicaraguan-American',
    knowsLanguage: ['English', 'Spanish', 'Portuguese'],
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'Washington University in St. Louis',
    },
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'degree',
        name: 'BS Chemical Engineering',
      },
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'certification',
        name: 'Certified LEAN Trainer',
      },
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'certification',
        name: 'Six Sigma Black Belt',
      },
    ],
    knowsAbout: [
      'Operational Transformation',
      'Transformative Leadership Mastery',
      'Process Engineering',
      'Lean Methodology',
      'Six Sigma',
      'Apprenticeship-Based Consulting',
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <AboutPage />
    </>
  );
}
