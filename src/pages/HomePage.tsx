import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, TrendingUp, Users, Award, Target } from 'lucide-react';

const HomePage = () => {
  const stats = [
    { value: '20+', label: 'Years of sustained results' },
    { value: '$1B+', label: 'In client value delivered' },
    { value: '1,600+', label: 'Apprentices trained in the Method' },
    { value: '80+', label: 'Operations transformed' }
  ];

  const methodPillars = [
    {
      number: '01',
      title: 'Customer Profile',
      description: 'Generate Precise Generalized Information about customer-process interactions',
      icon: Users
    },
    {
      number: '02',
      title: 'Process Design & Engineering',
      description: 'Transform SMEs into process designers who build scalable, efficient operations',
      icon: Target
    },
    {
      number: '03',
      title: 'Organizational Strategy',
      description: 'Align structure with process design for maximum operational efficiency',
      icon: TrendingUp
    },
    {
      number: '04',
      title: 'Measurement',
      description: 'Create management operating systems with metrics that drive decisions',
      icon: Award
    },
    {
      number: '05',
      title: 'Continuous Improvement',
      description: 'Separate signals from noise to sustain and compound results over time',
      icon: CheckCircle2
    }
  ];

  const industries = [
    {
      title: 'Insurance',
      operations: ['Underwriting', 'Claims', 'Subrogation', 'Policy Administration']
    },
    {
      title: 'Banking',
      operations: ['Loan Origination', 'Foreclosures & Repossessions']
    },
    {
      title: 'Response Centers',
      operations: ['Inbound/Outbound Calling', 'After-Call Work', 'Forecasting & Scheduling']
    }
  ];

  const insights = [
    { title: "Why We Won't Guarantee Your Results (Unless You Do This)" },
    { title: 'A Pillar Deep Dive: Process Design & Engineering' },
    { title: 'The Pattern Every Struggling Operation Shares' }
  ];

  return (
    <div className="bg-white">
      {/* SECTION 1 — HERO */}
      <section className="relative bg-navy-900 text-white py-32 md:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 opacity-90" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-gold-600 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold-600 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl mb-8 tracking-wide leading-tight">
              YOUR OPERATIONS SHOULD BE RUNNING BETTER. YOU KNOW IT.
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
              Failed initiatives. Rising costs. Results that don't stick. You've seen the
              pattern — and traditional consulting only made it worse. The Bismark Method is a
              systematic, guaranteed approach to transforming high-volume, transaction-intensive
              operations. Your team learns it, owns it, and the results compound long after we leave.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/walkthrough"
                className="inline-flex items-center justify-center gap-2 bg-gold-600 text-navy-900 px-8 py-4 font-display text-lg hover:bg-gold-500 transition-colors"
              >
                SCHEDULE A WALKTHROUGH
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/method"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 font-display text-lg hover:bg-white hover:text-navy-900 transition-colors"
              >
                LEARN THE METHOD
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — CREDIBILITY BAR */}
      <section className="py-16 bg-gray-50 border-b-4 border-gold-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-display text-5xl md:text-6xl text-navy-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — WHY TRADITIONAL CONSULTING FAILS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-4xl md:text-5xl text-navy-900 mb-6">
                WHY TRADITIONAL CONSULTING FAILS
              </h2>
              <div className="bg-gold-600 h-1 w-24 mx-auto mb-8" />
              <p className="text-xl text-gray-700 leading-relaxed">
                Most consulting engagements deliver short-term results that evaporate the
                moment consultants leave. The problem isn't the analysis — it's the approach.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 border-l-4 border-red-600 p-6">
                <h3 className="font-display text-xl text-navy-900 mb-3">
                  TRADITIONAL CONSULTING
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1">×</span>
                    <span>Outsourced thinking, no knowledge transfer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1">×</span>
                    <span>Results fade within months of departure</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1">×</span>
                    <span>Generic frameworks without operational rigor</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1">×</span>
                    <span>No accountability for sustained outcomes</span>
                  </li>
                </ul>
              </div>

              <div className="bg-navy-900 text-white border-l-4 border-gold-600 p-6">
                <h3 className="font-display text-xl mb-3">
                  THE BISMARK METHOD
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-gold-600 flex-shrink-0 mt-0.5" />
                    <span>Learn and do: your team becomes the experts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-gold-600 flex-shrink-0 mt-0.5" />
                    <span>Results compound year over year</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-gold-600 flex-shrink-0 mt-0.5" />
                    <span>Systematic methodology proven across 80+ operations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-gold-600 flex-shrink-0 mt-0.5" />
                    <span>Guaranteed, measurable outcomes — tied to a structural commitment</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gold-600 p-8 rounded-lg text-center">
              <p className="text-2xl text-navy-900 font-medium italic">
                "The difference isn't what we know. It's what your team will know when we're done."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — THE BISMARK METHOD (The Hand) */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl mb-6">
              THE BISMARK METHOD
            </h2>
            <div className="bg-gold-600 h-1 w-24 mx-auto mb-8" />
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Think of it as a hand. The palm is TLM — Transformation Leadership Mastery — the
              foundation that everything else depends on. The five fingers are the pillars that
              deliver results. Without the palm, the fingers can't grip anything.
            </p>
          </div>

          {/* TLM Card */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-navy-800 border-2 border-gold-600 rounded-lg p-8 md:p-10">
              <h3 className="font-display text-2xl text-gold-600 mb-4">
                THE PALM: TLM — TRANSFORMATION LEADERSHIP MASTERY
              </h3>
              <p className="text-gray-300 leading-relaxed">
                TLM is what makes the Bismark Method fundamentally different. It transforms your
                leadership team into operational architects — people who don't just manage processes
                but design, measure, and continuously improve them. TLM is also why we can guarantee
                results. No other consulting firm ties their guarantee to a structural commitment. We
                do — because we know it works.
              </p>
            </div>
          </div>

          {/* Five Pillars */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {methodPillars.map((pillar, index) => (
              <div
                key={index}
                className="bg-navy-800 border-2 border-gray-700 rounded-lg p-6 hover:border-gold-600 transition-colors group"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-navy-900 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-gold-600 transition-colors">
                    <pillar.icon className="w-6 h-6 text-gold-600 group-hover:text-navy-900 transition-colors" />
                  </div>
                  <div className="font-display text-3xl text-gold-600">
                    {pillar.number}
                  </div>
                </div>
                <h3 className="font-display text-xl mb-3">
                  {pillar.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}

            <div className="bg-navy-800 border-2 border-gray-700 rounded-lg p-6 flex items-center justify-center hover:border-gold-600 transition-colors md:col-span-2 lg:col-span-1">
              <div className="text-center">
                <p className="font-display text-2xl mb-4">LEARN MORE</p>
                <Link
                  to="/method"
                  className="inline-flex items-center gap-2 bg-gold-600 text-navy-900 px-6 py-3 font-display hover:bg-gold-500 transition-colors"
                >
                  LEARN THE COMPLETE METHOD
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — HOW IT COMES TOGETHER */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl text-navy-900 mb-6">
              FROM FIRST LOOK TO GUARANTEED RESULTS
            </h2>
            <div className="bg-gold-600 h-1 w-24 mx-auto mb-8" />
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-8 hover:border-gold-600 transition-colors">
              <div className="w-12 h-12 bg-navy-900 rounded-lg flex items-center justify-center mb-4">
                <span className="font-display text-xl text-gold-600">1</span>
              </div>
              <h3 className="font-display text-xl text-navy-900 mb-2">
                THE WALKTHROUGH
              </h3>
              <span className="inline-block bg-gold-600 text-navy-900 px-3 py-1 text-xs font-display mb-4">
                FREE
              </span>
              <p className="text-gray-700 text-sm leading-relaxed">
                2-4 days on-site. We touch all five pillars at the surface — observing,
                analyzing, interviewing. You experience our rigor firsthand. No obligation.
              </p>
            </div>

            <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-8 hover:border-gold-600 transition-colors">
              <div className="w-12 h-12 bg-navy-900 rounded-lg flex items-center justify-center mb-4">
                <span className="font-display text-xl text-gold-600">2</span>
              </div>
              <h3 className="font-display text-xl text-navy-900 mb-4">
                DISCOVERY & PROPOSAL
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                We go deep. Targeted analysis with quantified opportunities. A detailed engagement
                proposal built on what we actually found — not a template.
              </p>
            </div>

            <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-8 hover:border-gold-600 transition-colors">
              <div className="w-12 h-12 bg-navy-900 rounded-lg flex items-center justify-center mb-4">
                <span className="font-display text-xl text-gold-600">3</span>
              </div>
              <h3 className="font-display text-xl text-navy-900 mb-4">
                ENGAGEMENT WITH GUARANTEE
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Commit to TLM and we guarantee the results. Your team learns the method, owns the
                outcomes, and the results compound year over year.
              </p>
            </div>
          </div>

          <div className="max-w-3xl mx-auto text-center mb-8">
            <p className="text-gray-700 leading-relaxed">
              The guarantee isn't a sales tactic. It's a structural commitment — from both sides.
              No TLM, no guarantee. We can still engage, but TLM is what makes the results stick.
            </p>
          </div>

          <div className="text-center">
            <Link
              to="/walkthrough"
              className="inline-flex items-center justify-center gap-2 bg-gold-600 text-navy-900 px-8 py-4 font-display text-lg hover:bg-gold-500 transition-colors"
            >
              START WITH A WALKTHROUGH
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 6 — INDUSTRIES */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl text-navy-900 mb-6">
              WHERE THE METHOD HAS BEEN PROVEN
            </h2>
            <div className="bg-gold-600 h-1 w-24 mx-auto mb-8" />
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              The Bismark Method works wherever high-volume, process-dependent operations drive
              performance. These are the verticals where we've delivered the deepest results — but
              the methodology isn't limited to them.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-gold-600 transition-colors"
              >
                <h3 className="font-display text-2xl text-navy-900 mb-4">
                  {industry.title}
                </h3>
                <p className="font-display text-sm text-gold-600 mb-4 tracking-wider">OPERATIONS</p>
                <ul className="space-y-2">
                  {industry.operations.map((operation, opIndex) => (
                    <li key={opIndex} className="flex items-start gap-2 text-gray-700">
                      <div className="w-1.5 h-1.5 bg-gold-600 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm">{operation}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/industries"
              className="inline-flex items-center gap-2 bg-navy-900 text-white px-8 py-4 font-display text-lg hover:bg-navy-800 transition-colors"
            >
              VIEW ALL INDUSTRIES & OPERATIONS
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 7 — INSIGHTS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl text-navy-900 mb-6">
              PERSPECTIVES ON OPERATIONS
            </h2>
            <div className="bg-gold-600 h-1 w-24 mx-auto mb-8" />
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Over 20 years of transforming operations. Here's what we've learned.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {insights.map((article, index) => (
              <div
                key={index}
                className="bg-gray-50 border-2 border-gray-200 rounded-lg p-8 hover:border-gold-600 transition-colors"
              >
                <span className="inline-block bg-gray-200 text-gray-500 px-3 py-1 text-xs font-display mb-4">
                  COMING SOON
                </span>
                <h3 className="font-display text-xl text-navy-900 leading-snug">
                  {article.title}
                </h3>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-navy-900 text-white px-8 py-4 font-display text-lg hover:bg-navy-800 transition-colors"
            >
              VIEW ALL INSIGHTS
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 8 — WALKTHROUGH CTA */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-5xl mb-6">
              SEE IT FOR YOURSELF
            </h2>
            <div className="bg-gold-600 h-1 w-24 mx-auto mb-8" />
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              The best proof doesn't come from other companies. It comes from you, after
              experiencing the Bismark Method firsthand. We invest 2-4 days on-site at your
              operations — analyzing data, observing processes, interviewing stakeholders — and
              present preliminary findings with quantified opportunities.
            </p>

            <div className="bg-navy-800 border-2 border-gold-600 rounded-lg p-8 mb-8">
              <p className="font-display text-2xl text-gold-600 mb-2">
                Cost: $0 in consulting fees.
              </p>
              <p className="text-gray-300">
                You cover travel-related expenses.
              </p>
            </div>

            <p className="text-gray-300 leading-relaxed mb-10">
              We're confident enough in our rigor, expertise, and methodology that we let the work
              speak for itself. Our clients call it the most rigorous vendor interview they've ever
              experienced.
            </p>

            <Link
              to="/walkthrough"
              className="inline-flex items-center justify-center gap-2 bg-gold-600 text-navy-900 px-8 py-4 font-display text-lg hover:bg-gold-500 transition-colors"
            >
              SCHEDULE YOUR WALKTHROUGH
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 9 — ABOUT/FOUNDER */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-navy-900 text-white p-8 md:p-12 rounded-lg mb-8">
              <blockquote className="text-2xl md:text-3xl font-medium mb-4 leading-relaxed italic">
                "We don't create PowerPoint decks. We create capability."
              </blockquote>
              <p className="text-gold-600 font-display">
                — Luis Telleria, Founder
              </p>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Founded in 1998, Bismark Consulting was born from a simple observation: traditional
              consulting creates dependency, not capability. For over 20 years, we've refined a
              systematic methodology that transforms operations while transferring knowledge.
            </p>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 bg-navy-900 text-white px-8 py-4 font-display text-lg hover:bg-navy-800 transition-colors"
            >
              LEARN MORE ABOUT US
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Version Comparison Link */}
      <div className="py-4 text-center bg-gray-100 border-t border-gray-200">
        <Link to="/homepage-old" className="text-xs text-gray-400 hover:text-gray-600 underline">
          View Previous Homepage Version
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
