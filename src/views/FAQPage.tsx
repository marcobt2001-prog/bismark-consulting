import FAQAccordion from '../components/FAQAccordion';
import CalendlyButton from '../components/CalendlyButton';

const FAQPage = () => {
  return (
    <div className="bg-white">
      {/* SECTION 1 — PAGE TITLE */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-5xl md:text-6xl text-navy-900 mb-6">
            FREQUENTLY ASKED QUESTIONS
          </h1>
          <p className="text-xl text-gray-500 max-w-3xl leading-relaxed">
            Straight answers about how we work, what we deliver, and why it holds.
          </p>
        </div>
      </section>

      {/* SECTION 2 — THE QUESTIONS */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQAccordion />
        </div>
      </section>

      {/* SECTION 3 — CLOSING CTA */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl md:text-5xl mb-6">
            STILL HAVE QUESTIONS?
          </h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto">
            The fastest way to get answers is a conversation. Schedule a 30&ndash;45 minute
            discovery call and bring every question on your list. This isn&rsquo;t a sales
            pitch &mdash; it&rsquo;s the same rigor in miniature.
          </p>

          <CalendlyButton />

          <p className="text-sm text-gray-400 mt-6">
            Prefer email? Reach us at{' '}
            <a
              href="mailto:info@bismarkconsulting.net"
              className="text-gold-600 hover:text-gold-500 font-medium"
            >
              info@bismarkconsulting.net
            </a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;
