import Image from 'next/image';
import CalendlyButton from './CalendlyButton';
import WireframePlaceholder from './WireframePlaceholder';
import type { Industry } from '../data/industries';

type Props = {
  industry: Industry;
};

export default function IndustrySubPageLayout({ industry }: Props) {
  return (
    <div className="bg-white">
      {/* Header Bar */}
      <section className="bg-navy-900 text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          {industry.heroImage ? (
            <Image
              src={industry.heroImage}
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover"
              aria-hidden="true"
            />
          ) : (
            <WireframePlaceholder
              label={`Photo: ${industry.name} — operational setting`}
              aspectRatio=""
              className="w-full h-full"
            />
          )}
        </div>
        <div className="absolute inset-0 z-10 bg-navy-900/75" />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-5xl md:text-7xl mb-6 tracking-wide">
            {industry.name.toUpperCase()}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
            {industry.descriptor}
          </p>
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
            PROCESSES: {industry.name.toUpperCase()} OPERATIONS
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
                <p className="text-gray-700 leading-relaxed">
                  {process.description}
                </p>
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
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            The first step is a 30&ndash;45 minute call where we discuss your operational landscape, confirm mutual fit, and schedule your on-site Walkthrough. It&rsquo;s not a sales call. It&rsquo;s the same rigor in miniature.
          </p>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Click below to choose a time that works for you.
          </p>
          <CalendlyButton label="SCHEDULE A MEETING" className="inline-flex items-center gap-2 bg-gold-600 text-navy-900 px-12 py-5 font-display text-xl hover:bg-gold-500 transition-colors" />
          <p className="text-sm text-gray-600 mt-6">
            Prefer email? Reach us at{' '}
            <a
              href="mailto:info@bismarkconsulting.net"
              className="text-gold-600 hover:text-gold-700 font-medium"
            >
              info@bismarkconsulting.net
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
