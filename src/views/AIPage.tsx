import CalendlyButton from '../components/CalendlyButton';

export default function AIPage() {
  return (
    <div className="bg-white">
      {/* SECTION 1 — HERO */}
      <section className="relative bg-navy-900 text-white py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 opacity-90" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-display text-gold-600 tracking-wider mb-6 text-6xl md:text-9xl">COMING 2026</p>
          <h1 className="font-display text-5xl md:text-6xl mb-6 tracking-wide">
            REAL AI LEVERAGE STARTS WITH OPERATIONAL DEPTH.
          </h1>
          <div className="bg-gold-600 h-1 w-24 mx-auto mb-8" />
        </div>
      </section>

      {/* SECTION 2 — HOW WE THINK ABOUT AI */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl md:text-5xl text-navy-900 mb-6">
            HOW WE THINK ABOUT AI
          </h2>
          <div className="bg-gold-600 h-1 w-24 mb-8" />
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Functioning workflows are not imported; they are uncovered. The Bismark Method is built around that: walking your operation, sitting with your people, and surfacing how the work actually gets done. Twenty-five years of doing this has taught us one thing: automation only works on operations that have been seen clearly first. The Bismark Method comes first. Automation comes second.
            </p>
            <p>
              Once an operation has been rebuilt the right way, the next question is keeping it that way: holding gains, catching drift, and monitoring what matters. The engagement ends; the results shouldn&rsquo;t.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 — CTA */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl md:text-5xl mb-6">
            THE FOUNDATION COMES FIRST
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-10">
            Every Bismark AI deployment begins with the Bismark Method. The Walkthrough is where that journey starts &mdash; a complimentary 3&ndash;5 day on-site assessment of your operation.
          </p>
          <CalendlyButton label="SCHEDULE A MEETING" className="inline-flex items-center gap-2 bg-gold-600 text-navy-900 px-12 py-5 font-display text-xl hover:bg-gold-500 transition-colors" />
        </div>
      </section>
    </div>
  );
}
