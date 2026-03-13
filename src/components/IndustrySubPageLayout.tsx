import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import type { Industry } from '../data/industries';
import { industries } from '../data/industries';

type Props = {
  industry: Industry;
};

export default function IndustrySubPageLayout({ industry }: Props) {
  const prevIndustry = industry.prev
    ? industries.find((i) => i.slug === industry.prev)
    : null;
  const nextIndustry = industry.next
    ? industries.find((i) => i.slug === industry.next)
    : null;

  return (
    <div className="bg-white">
      {/* Header Bar */}
      <section className="bg-navy-900 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-5xl md:text-7xl mb-6 tracking-wide">
            {industry.name.toUpperCase()}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl leading-relaxed mb-8">
            {industry.descriptor}
          </p>
          <div className="flex flex-wrap gap-3">
            {industry.activeArchetypes.map((archetype) => (
              <span
                key={archetype}
                className="border border-gold-600 text-gold-600 px-3 py-1 text-sm font-medium"
              >
                {archetype}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* What It Feels Like */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-[70ch]">
            <h2 className="font-display text-4xl md:text-5xl text-navy-900 mb-6">
              WHAT IT FEELS LIKE
            </h2>
            <div className="bg-gold-600 h-1 w-24 mb-8" />
            {industry.operationalContext.split('\n\n').map((paragraph, i) => (
              <p
                key={i}
                className="text-lg text-gray-700 leading-relaxed mb-6"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Process Map */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl md:text-5xl text-navy-900 mb-6">
            PROCESS MAP: {industry.name.toUpperCase()} OPERATIONS
          </h2>
          <div className="bg-gold-600 h-1 w-24 mb-12" />

          <div className="grid md:grid-cols-2 gap-6">
            {industry.processes.map((process, i) => (
              <div
                key={i}
                className="bg-white border-2 border-gray-200 p-8 hover:border-gold-600 transition-colors"
              >
                <h3 className="font-display text-xl text-navy-900 font-bold mb-3">
                  {process.name}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {process.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {process.archetypes.map((archetype) => (
                    <span
                      key={archetype}
                      className="border border-gold-600 text-gold-700 px-2 py-0.5 text-xs font-medium"
                    >
                      {archetype}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Where Transformation Happens */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-[70ch]">
            <h2 className="font-display text-4xl md:text-5xl mb-6">
              WHERE TRANSFORMATION HAPPENS
            </h2>
            <div className="bg-gold-600 h-1 w-24 mb-8" />
            {industry.transformationSummary
              .split('\n\n')
              .map((paragraph, i) => (
                <p key={i} className="text-lg text-gray-300 leading-relaxed mb-6">
                  {paragraph}
                </p>
              ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl md:text-5xl text-navy-900 mb-6">
            SEE YOUR OPERATION CLEARLY FOR THE FIRST TIME
          </h2>
          <p className="text-xl text-gray-700 mb-10 leading-relaxed">
            The Walkthrough is a complimentary 3&ndash;5 day on-site assessment
            where we examine your operations with the same rigor we bring to a
            full engagement.
          </p>
          <Link
            to="/walkthrough"
            className="inline-flex items-center gap-2 bg-gold-600 text-navy-900 px-12 py-5 font-display text-xl hover:bg-gold-500 transition-colors"
          >
            Schedule a Walkthrough
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Sub-page Navigation */}
      <section className="py-12 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-6">
              {prevIndustry && (
                <Link
                  to={`/industries/${prevIndustry.slug}`}
                  className="flex items-center gap-2 text-navy-700 hover:text-gold-600 transition-colors font-medium"
                >
                  <ArrowLeft className="w-4 h-4" />
                  {prevIndustry.name}
                </Link>
              )}
            </div>

            <Link
              to="/industries"
              className="text-navy-700 hover:text-gold-600 transition-colors font-medium"
            >
              &larr; Back to Industries
            </Link>

            <div className="flex items-center gap-6">
              {nextIndustry && (
                <Link
                  to={`/industries/${nextIndustry.slug}`}
                  className="flex items-center gap-2 text-navy-700 hover:text-gold-600 transition-colors font-medium"
                >
                  {nextIndustry.name}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
