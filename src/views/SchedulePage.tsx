import CalendlyEmbed from '../components/CalendlyEmbed';

const SchedulePage = () => {
  return (
    <div className="bg-white">
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="font-display text-5xl md:text-6xl text-navy-900 mb-6">
              SCHEDULE A WALKTHROUGH
            </h1>
            <div className="bg-gold-600 h-1 w-24 mx-auto mb-8" />
            <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              The first step is a 30&ndash;45 minute call where we discuss your
              operational landscape, confirm mutual fit, and schedule your on-site
              walkthrough. This isn&rsquo;t a sales call &mdash; it&rsquo;s the
              same rigor in miniature. Come ready to talk about your operations,
              and we&rsquo;ll come ready to listen.
            </p>
          </div>

          <p className="text-lg text-gray-600 text-center mb-8">
            Select a time below to book your 30&ndash;45 minute discovery call.
          </p>

          <CalendlyEmbed url="https://calendly.com/bismarkconsulting-info/walkthrough" />

          <p className="text-sm text-gray-600 text-center mt-10">
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
};

export default SchedulePage;
