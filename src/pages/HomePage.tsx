import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, TrendingUp, Users, Award, Target } from 'lucide-react';

const HomePage = () => {
  const stats = [
    { value: '20+', label: 'Years of Excellence', description: 'Proven methodology since 1998' },
    { value: '$1B+', label: 'Client Savings', description: 'Guaranteed, measurable results' },
    { value: '1,600+', label: 'Apprentices Trained', description: 'Knowledge transfer at scale' },
    { value: '80+', label: 'Clients Transformed', description: 'Fortune 500 to mid-market' }
  ];

  const methodPrinciples = [
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
      operations: ['Underwriting', 'Claims', 'Subrogation', 'Policy Administration'],
      impact: '40% faster cycle times, 60% cost reduction'
    },
    {
      title: 'Banking',
      operations: ['Loan Origination', 'Foreclosures & Repossessions'],
      impact: '50% faster approvals, 35% cost savings'
    },
    {
      title: 'Response Centers',
      operations: ['Inbound/Outbound Calling', 'After-Call Work', 'Forecasting & Scheduling'],
      impact: '30% handle time reduction, 45% improved FCR'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-navy-900 text-white py-32 md:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 opacity-90" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-gold-600 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold-600 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-8">
              <span className="bg-gold-600 text-navy-900 px-4 py-2 font-display text-sm tracking-wider">
                OPERATIONAL EXCELLENCE SINCE 1998
              </span>
            </div>

            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl mb-8 tracking-wide leading-tight">
              WE GUARANTEE OUR RESULTS
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
              The Bismark Method transforms operations in insurance, banking, and response
              centers with measurable, sustainable results. We don't just consult—we guarantee.
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

      {/* Stats Grid */}
      <section className="py-20 bg-gray-50 border-b-4 border-gold-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-display text-5xl md:text-6xl text-navy-900 mb-2">
                  {stat.value}
                </div>
                <div className="font-display text-lg md:text-xl text-gold-600 mb-2">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-600">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Section */}
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
                moment consultants leave. The problem isn't the analysis—it's the approach.
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
                    <span>Systematic methodology proven across 80+ clients</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-gold-600 flex-shrink-0 mt-0.5" />
                    <span>Guaranteed, measurable outcomes</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gold-600 p-8 rounded-lg text-center">
              <p className="text-2xl text-navy-900 font-medium">
                The difference isn't what we know. It's what your team will know when we're done.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Method Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl text-navy-900 mb-6">
              THE BISMARK METHOD
            </h2>
            <div className="bg-gold-600 h-1 w-24 mx-auto mb-8" />
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Five interconnected principles that transform operations into high-performing,
              self-sustaining systems
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {methodPrinciples.map((principle, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-gold-600 transition-colors group"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-navy-900 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-gold-600 transition-colors">
                    <principle.icon className="w-6 h-6 text-gold-600 group-hover:text-navy-900 transition-colors" />
                  </div>
                  <div className="font-display text-3xl text-gold-600">
                    {principle.number}
                  </div>
                </div>
                <h3 className="font-display text-xl text-navy-900 mb-3">
                  {principle.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}

            <div className="bg-navy-900 text-white rounded-lg p-6 flex items-center justify-center md:col-span-2 lg:col-span-1">
              <div className="text-center">
                <p className="font-display text-2xl mb-4">LEARN MORE</p>
                <Link
                  to="/method"
                  className="inline-flex items-center gap-2 bg-gold-600 text-navy-900 px-6 py-3 font-display hover:bg-gold-500 transition-colors"
                >
                  THE COMPLETE METHOD
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl text-navy-900 mb-6">
              INDUSTRIES WE TRANSFORM
            </h2>
            <div className="bg-gold-600 h-1 w-24 mx-auto mb-8" />
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Deep expertise in high-volume, transaction-intensive operations where
              process precision drives competitive advantage
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-gray-50 border-2 border-gray-200 rounded-lg p-8 hover:border-gold-600 transition-colors"
              >
                <h3 className="font-display text-2xl text-navy-900 mb-4">
                  {industry.title}
                </h3>
                <ul className="space-y-2 mb-6">
                  {industry.operations.map((operation, opIndex) => (
                    <li key={opIndex} className="flex items-start gap-2 text-gray-700">
                      <div className="w-1.5 h-1.5 bg-gold-600 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm">{operation}</span>
                    </li>
                  ))}
                </ul>
                <div className="bg-gold-600 p-4 rounded">
                  <p className="text-navy-900 font-medium text-sm">
                    {industry.impact}
                  </p>
                </div>
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

      {/* Walkthrough CTA */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-4xl md:text-5xl mb-6">
                SEE IT FOR YOURSELF
              </h2>
              <div className="bg-gold-600 h-1 w-24 mx-auto mb-8" />
              <p className="text-xl text-gray-300 leading-relaxed">
                The best testimonial doesn't come from other companies. It comes from you,
                after experiencing the Bismark Method firsthand.
              </p>
            </div>

            <div className="bg-navy-800 border-2 border-gold-600 rounded-lg p-8 md:p-12 mb-8">
              <h3 className="font-display text-2xl text-gold-600 mb-6 text-center">
                THE WALKTHROUGH EXPERIENCE
              </h3>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="font-display text-lg mb-3">WHAT WE DO</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-gold-600 flex-shrink-0 mt-0.5" />
                      <span>2-4 days on-site at your operations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-gold-600 flex-shrink-0 mt-0.5" />
                      <span>Analyze data, observe processes, interview stakeholders</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-gold-600 flex-shrink-0 mt-0.5" />
                      <span>Present preliminary findings with quantified opportunities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-gold-600 flex-shrink-0 mt-0.5" />
                      <span>Deliver detailed engagement proposal</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-display text-lg mb-3">WHAT IT COSTS</h4>
                  <div className="bg-gold-600 p-6 rounded-lg text-center">
                    <p className="font-display text-5xl text-navy-900 mb-2">$0</p>
                    <p className="text-navy-900 font-medium">Completely free</p>
                    <p className="text-navy-800 text-sm mt-2">No obligation to engage</p>
                  </div>
                  <p className="text-gray-300 text-sm mt-4 leading-relaxed">
                    We invest 2-4 days because we're confident you'll see the difference
                    in our rigor, expertise, and methodology.
                  </p>
                </div>
              </div>

              <div className="bg-gold-600 p-6 rounded-lg text-center mb-6">
                <blockquote className="text-xl md:text-2xl text-navy-900 font-medium">
                  "Our clients call it the most rigorous vendor interview they've ever experienced."
                </blockquote>
              </div>

              <div className="text-center">
                <Link
                  to="/walkthrough"
                  className="inline-flex items-center gap-2 bg-gold-600 text-navy-900 px-8 py-4 font-display text-lg hover:bg-gold-500 transition-colors"
                >
                  REQUEST YOUR WALKTHROUGH
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block mb-6">
                  <span className="bg-navy-900 text-gold-600 px-4 py-2 font-display text-sm tracking-wider">
                    ABOUT BISMARK CONSULTING
                  </span>
                </div>
                <h2 className="font-display text-4xl md:text-5xl text-navy-900 mb-6">
                  FOUNDED ON RESULTS, BUILT ON RIGOR
                </h2>
                <div className="bg-gold-600 h-1 w-24 mb-8" />

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Founded in 1998 by Luis Telleria, Bismark Consulting was born from a simple
                  observation: traditional consulting creates dependency, not capability.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  For over 20 years, we've refined a systematic methodology that transforms
                  operations while transferring knowledge. Our clients don't just get better
                  results—they become better operators.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-navy-900 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-6 h-6 text-gold-600" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg text-navy-900">GUARANTEED RESULTS</h3>
                      <p className="text-gray-600 text-sm">Every engagement includes specific, measurable guarantees</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-navy-900 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-6 h-6 text-gold-600" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg text-navy-900">KNOWLEDGE TRANSFER</h3>
                      <p className="text-gray-600 text-sm">1,600+ apprentices trained in the Bismark Method</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-navy-900 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-6 h-6 text-gold-600" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg text-navy-900">SUSTAINED IMPACT</h3>
                      <p className="text-gray-600 text-sm">Results that compound year over year, not fade</p>
                    </div>
                  </div>
                </div>

                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 bg-navy-900 text-white px-8 py-4 font-display text-lg hover:bg-navy-800 transition-colors"
                >
                  LEARN MORE ABOUT US
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>

              <div className="bg-navy-900 text-white p-8 md:p-12 rounded-lg">
                <blockquote className="text-2xl md:text-3xl font-medium mb-8 leading-relaxed">
                  "We don't create PowerPoint decks. We create capability."
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gold-600 rounded-full flex items-center justify-center">
                    <Users className="w-8 h-8 text-navy-900" />
                  </div>
                  <div>
                    <p className="font-display text-lg">Luis Telleria</p>
                    <p className="text-gray-400">Founder, Bismark Consulting</p>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-700">
                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <div className="font-display text-4xl text-gold-600 mb-2">$1B+</div>
                      <div className="text-sm text-gray-400">Client Value Delivered</div>
                    </div>
                    <div>
                      <div className="font-display text-4xl text-gold-600 mb-2">80+</div>
                      <div className="text-sm text-gray-400">Clients Transformed</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl md:text-5xl mb-6">
            READY TO TRANSFORM YOUR OPERATIONS?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Start with a free walkthrough. No sales pitch, just rigorous analysis and
            preliminary findings that demonstrate what's possible.
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
              to="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 font-display text-lg hover:bg-white hover:text-navy-900 transition-colors"
            >
              CONTACT US
            </Link>
          </div>
          <p className="text-sm text-gray-400 mt-8">
            Minimum engagement: $1M+ | Typical ROI: 5-10x in year one
          </p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
