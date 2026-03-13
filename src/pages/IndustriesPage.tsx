import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { archetypes } from '../data/archetypes';
import { industries } from '../data/industries';
import type { Archetype } from '../data/archetypes';

const IndustriesPage = () => {
  const [selectedArchetype, setSelectedArchetype] = useState<Archetype | null>(null);

  const handleArchetypeClick = (name: Archetype) => {
    setSelectedArchetype((prev) => (prev === name ? null : name));
  };

  const isIndustryHighlighted = (industrySlug: string) => {
    if (!selectedArchetype) return false;
    const archetype = archetypes.find((a) => a.name === selectedArchetype);
    return archetype ? archetype.industries.includes(industrySlug) : false;
  };

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

      {/* SECTION 2 — Process Archetype Frame */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl md:text-5xl text-navy-900 mb-6">
            EVERY OPERATION YOU RUN IS BUILT FROM THE SAME MOVING PARTS
          </h2>
          <div className="bg-gold-600 h-1 w-24 mb-8" />
          <p className="text-lg text-gray-700 max-w-4xl leading-relaxed mb-12">
            We&rsquo;ve identified 12 process archetypes that appear in every
            operation we&rsquo;ve transformed. Your industry determines which
            ones are active and how they combine. The archetypes determine where
            the waste, risk, and capacity constraints live. Click any archetype
            to see which industries use it.
          </p>

          <div className="space-y-0">
            {archetypes.map((archetype) => {
              const isSelected = selectedArchetype === archetype.name;
              return (
                <button
                  key={archetype.name}
                  onClick={() => handleArchetypeClick(archetype.name)}
                  className={
                    'w-full text-left px-6 py-5 border-b border-gray-200 transition-colors ' +
                    (isSelected
                      ? 'bg-navy-900 text-white'
                      : 'bg-white hover:bg-gray-50 text-navy-900')
                  }
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
                    <h3
                      className={
                        'font-display text-xl flex-shrink-0 md:w-48 ' +
                        (isSelected ? 'text-gold-600' : 'text-navy-900')
                      }
                    >
                      {archetype.name}
                    </h3>
                    <p
                      className={
                        'text-sm leading-relaxed ' +
                        (isSelected ? 'text-gray-300' : 'text-gray-600')
                      }
                    >
                      {archetype.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
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
            {industries.map((industry) => {
              const highlighted = isIndustryHighlighted(industry.slug);
              return (
                <Link
                  key={industry.slug}
                  to={`/industries/${industry.slug}`}
                  className={
                    'block border-2 p-8 transition-all ' +
                    (highlighted
                      ? 'border-gold-600 ring-2 ring-gold-600/30'
                      : 'border-gray-200 hover:border-gold-600')
                  }
                >
                  <h3 className="font-display text-2xl text-navy-900 mb-2">
                    {industry.name}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    {industry.descriptor}
                  </p>
                  <p className="text-sm font-medium text-navy-700 mb-4">
                    {industry.processCount} processes
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {industry.activeArchetypes.map((archetype) => {
                      const isActive =
                        selectedArchetype === archetype && highlighted;
                      return (
                        <span
                          key={archetype}
                          className={
                            'px-2 py-0.5 text-xs font-medium border transition-colors ' +
                            (isActive
                              ? 'bg-gold-600 text-navy-900 border-gold-600'
                              : 'border-gold-600 text-gold-700')
                          }
                        >
                          {archetype}
                        </span>
                      );
                    })}
                  </div>
                </Link>
              );
            })}
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
          <Link
            to="/walkthrough"
            className="inline-flex items-center gap-2 bg-gold-600 text-navy-900 px-12 py-5 font-display text-xl hover:bg-gold-500 transition-colors"
          >
            Schedule a Walkthrough
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default IndustriesPage;
