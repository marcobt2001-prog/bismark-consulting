import Link from 'next/link';
import CalendlyButton from '../components/CalendlyButton';
import { industries } from '../data/industries';
import ArchetypeIconSet from '../components/visuals/ArchetypeIconSet';
import FindYourOperationMatrix from '../components/FindYourOperationMatrix';
import WireframePlaceholder from '../components/WireframePlaceholder';

const IndustriesPage = () => {
  return (
    <div className="bg-white">
      {/* SECTION 1 — Hero */}
      <section className="relative bg-navy-900 text-white py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 opacity-90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-5xl md:text-7xl mb-6 tracking-wide">
            WE DON&rsquo;T CONSULT TO INDUSTRIES.{' '}
            <span className="text-gold-600">WE TRANSFORM OPERATIONS.</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl leading-relaxed">
            The Bismark Method works because operational processes follow
            patterns &mdash; regardless of industry. A loan application and an
            insurance claim move through the same structural archetypes. A
            warehouse pick-and-pack and a well workover face the same scheduling
            and fulfillment physics. We don&rsquo;t need to &ldquo;learn your
            industry.&rdquo; We need to see your operation &mdash; because
            we&rsquo;ve already seen the pattern underneath it.
          </p>
        </div>
      </section>

      <div className="w-full">
        <WireframePlaceholder
          label="Photo: Operations environment — wide industrial or professional setting"
          aspectRatio="aspect-[21/9]"
          className="w-full"
        />
      </div>

      {/* SECTION 2 — The Patterns Behind Every Operation */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl md:text-5xl text-navy-900 mb-6">
            THE PATTERNS BEHIND EVERY OPERATION
          </h2>
          <div className="bg-gold-600 h-1 w-24 mb-8" />
          <p className="text-lg text-gray-700 max-w-4xl leading-relaxed mb-12">
            Over two decades of transforming high-volume operations, we&rsquo;ve
            identified a set of repeating process patterns &mdash; archetypes
            &mdash; that generate nearly every transactional operation in the
            world. Our deep understanding of these archetypes, combined with our
            knowledge of the specific processes inside each industry, is what
            allows us to design a tailored 16-week curriculum for any operation
            we walk into. We don&rsquo;t map your processes to a template. We
            read the operation and build the program around what it actually
            needs.
          </p>

          <ArchetypeIconSet />

          <p className="text-lg text-gray-700 max-w-4xl leading-relaxed mt-12">
            These 12 archetypes aren&rsquo;t a framework we impose on your
            operation. They&rsquo;re the vocabulary we carry into every
            engagement &mdash; the reason a Bismark coach can walk your floor
            and see the improvement opportunities within days, regardless of
            your industry.
          </p>
        </div>
      </section>

      {/* SECTION 3 — Industry Navigation Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl md:text-5xl text-navy-900 mb-6">
            FIND YOUR OPERATION
          </h2>
          <div className="bg-gold-600 h-1 w-24 mb-8" />
          <p className="text-lg text-gray-700 max-w-4xl leading-relaxed mb-12">
            Select an industry to see its complete process map, active
            archetypes, and where The Bismark Method creates transformation.
          </p>

          <div className="mt-12 mb-12">
            <FindYourOperationMatrix />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {industries.map((industry) => (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                className="block border-2 p-8 transition-all border-gray-200 hover:border-gold-600"
              >
                <h3 className="font-display text-2xl text-navy-900 mb-2">
                  {industry.name}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  {industry.descriptor}
                </p>
                <p className="text-sm font-medium text-navy-700">
                  {industry.processCount} processes
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — Bridge CTA */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl md:text-5xl mb-6">
            YOU&rsquo;VE SEEN YOUR PROCESSES. NOW SEE WHAT&rsquo;S HIDDEN
            INSIDE THEM.
          </h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            The process maps above show you what your operation does. The
            Walkthrough shows you what it costs, where it breaks, and what
            it&rsquo;s capable of becoming. It&rsquo;s a complimentary 3&ndash;5
            day on-site assessment &mdash; no theory, no pitch deck, just your
            operations examined with the same rigor we bring to a full
            engagement.
          </p>
          <CalendlyButton label="Schedule a Walkthrough" className="inline-flex items-center gap-2 bg-gold-600 text-navy-900 px-12 py-5 font-display text-xl hover:bg-gold-500 transition-colors" />
        </div>
      </section>
    </div>
  );
};

export default IndustriesPage;
