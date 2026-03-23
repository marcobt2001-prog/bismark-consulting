import ScrollLink from '../components/ScrollLink';
import { ArrowRight } from 'lucide-react';
import { industries } from '../data/industries';

const archetypeDefinitions = [
  {
    name: 'Intake',
    definition:
      'Something enters the system and needs to move. The first touch \u2014 capturing, logging, and routing incoming work so it can be acted on.',
  },
  {
    name: 'Verification',
    definition:
      'Confirming that what came in is what it claims to be. Identity checks, document validation, eligibility determination, specification compliance \u2014 the gate between receipt and action.',
  },
  {
    name: 'Authorization',
    definition:
      'A decision is made: yes, no, or not yet. Approval routing, credit decisioning, underwriting, release authority \u2014 the process that commits the organization to act.',
  },
  {
    name: 'Scheduling',
    definition:
      'Allocating time and capacity to work. Production scheduling, maintenance windows, dispatch planning, route sequencing \u2014 converting demand into an executable plan.',
  },
  {
    name: 'Fulfillment',
    definition:
      'The work gets done and something goes out the door. Order picking, shipment dispatch, service delivery, assembly, installation \u2014 the execution of the commitment.',
  },
  {
    name: 'Processing',
    definition:
      'Inputs become outputs. Manufacturing operations, refining, data transformation, batch runs \u2014 the conversion step where raw material becomes product.',
  },
  {
    name: 'Monitoring',
    definition:
      'Watching what\u2019s moving and catching what isn\u2019t. Production tracking, pipeline flow, network uptime, well output, inventory levels \u2014 the ongoing visibility that enables intervention.',
  },
  {
    name: 'Billing',
    definition:
      'Creating the financial obligation. Invoice generation, premium billing, subscription charges, usage metering \u2014 the process that translates work into revenue.',
  },
  {
    name: 'Collection',
    definition:
      'Collecting what\u2019s owed. Payment posting, debt recovery, delinquency management, payment arrangement processing \u2014 closing the financial loop.',
  },
  {
    name: 'Reconciliation',
    definition:
      'Making two sets of records agree. Bank reconciliation, payment matching, inventory counts, settlement balancing \u2014 the process that proves accuracy.',
  },
  {
    name: 'Exception Handling',
    definition:
      'When the process breaks, something has to catch it. Billing disputes, shipment errors, claim denials, service failures \u2014 the recovery path for work that didn\u2019t follow the normal flow.',
  },
  {
    name: 'Recovery',
    definition:
      'Getting back what\u2019s been lost or owed. Repossession, foreclosure, subrogation, insurance recovery, asset liquidation \u2014 the process that recaptures value after a default or loss.',
  },
];

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

          <div className="space-y-0">
            {archetypeDefinitions.map((archetype) => (
              <div
                key={archetype.name}
                className="w-full text-left px-6 py-5 border-b border-gray-200 bg-white text-navy-900"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
                  <h3 className="font-display text-xl flex-shrink-0 md:w-48 text-navy-900">
                    {archetype.name}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600">
                    {archetype.definition}
                  </p>
                </div>
              </div>
            ))}
          </div>

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

          <div className="grid md:grid-cols-2 gap-6">
            {industries.map((industry) => (
              <ScrollLink
                key={industry.slug}
                to={`/industries/${industry.slug}`}
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
              </ScrollLink>
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
          <ScrollLink
            to="/walkthrough"
            className="inline-flex items-center gap-2 bg-gold-600 text-navy-900 px-12 py-5 font-display text-xl hover:bg-gold-500 transition-colors"
          >
            Schedule a Walkthrough
            <ArrowRight className="w-5 h-5" />
          </ScrollLink>
        </div>
      </section>
    </div>
  );
};

export default IndustriesPage;
