import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Building, Headphones, FileText, TrendingUp, Users, Phone, Calendar } from 'lucide-react';

const IndustriesPage = () => {
  const industries = [
    {
      icon: Shield,
      title: 'Insurance',
      description: 'From underwriting to claims resolution, we optimize the entire insurance value chain with process precision and measurable results.',
      operations: [
        {
          name: 'Underwriting',
          icon: FileText,
          details: 'Risk assessment workflows, decision automation, turnaround time optimization, capacity planning'
        },
        {
          name: 'Claims',
          icon: TrendingUp,
          details: 'First notice of loss processing, adjudication workflows, settlement optimization, fraud detection'
        },
        {
          name: 'Subrogation',
          icon: Users,
          details: 'Recovery workflows, negotiation processes, legal coordination, success rate improvement'
        },
        {
          name: 'Policy Administration',
          icon: FileText,
          details: 'Policy issuance, endorsements, renewals, cancellations, customer service integration'
        }
      ],
      stats: [
        { value: '40%', label: 'Faster Cycle Times' },
        { value: '60%', label: 'Cost Reduction' },
        { value: '99%', label: 'Accuracy Rates' }
      ]
    },
    {
      icon: Building,
      title: 'Banking',
      description: 'Streamline lending operations and asset management with data-driven process engineering and organizational alignment.',
      operations: [
        {
          name: 'Loan Origination',
          icon: FileText,
          details: 'Application processing, underwriting workflows, document verification, funding coordination, compliance'
        },
        {
          name: 'Foreclosures & Repossessions',
          icon: TrendingUp,
          details: 'Default management, legal process coordination, asset recovery, timeline optimization, vendor management'
        }
      ],
      stats: [
        { value: '50%', label: 'Faster Approvals' },
        { value: '35%', label: 'Cost Savings' },
        { value: '25%', label: 'Capacity Increase' }
      ]
    },
    {
      icon: Headphones,
      title: 'Response Centers',
      description: 'Transform contact centers into strategic assets with optimized workflows, predictive scheduling, and performance management.',
      operations: [
        {
          name: 'Inbound/Outbound Calling',
          icon: Phone,
          details: 'Call handling workflows, script optimization, first-call resolution, quality assurance, performance metrics'
        },
        {
          name: 'After-Call Work Activities',
          icon: FileText,
          details: 'Documentation workflows, data entry optimization, system integration, time reduction strategies'
        },
        {
          name: 'Forecasting & Scheduling',
          icon: Calendar,
          details: 'Demand prediction models, capacity planning, schedule optimization, real-time adjustments, adherence management'
        }
      ],
      stats: [
        { value: '30%', label: 'Handle Time Reduction' },
        { value: '45%', label: 'Improved FCR' },
        { value: '20%', label: 'Lower Attrition' }
      ]
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-navy-900 text-white py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 opacity-90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-6">
            <span className="bg-gold-600 text-navy-900 px-4 py-2 font-display text-sm tracking-wider">
              OUR EXPERTISE
            </span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl mb-6 tracking-wide">
            INDUSTRIES & OPERATIONS WE SERVE
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Deep operational expertise in high-volume, transaction-intensive environments
            where process precision drives competitive advantage.
          </p>
        </div>
      </section>

      {/* Industries Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl text-navy-900 mb-6">
              WHERE WE EXCEL
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Over 20 years specializing in operations that demand accuracy, efficiency, and
              scalability. We don't just understand your industry—we've transformed it.
            </p>
          </div>
        </div>
      </section>

      {/* Industry Details */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {industries.map((industry, index) => (
            <div key={index} className="bg-white">
              {/* Industry Header */}
              <div className="bg-navy-900 text-white p-8 md:p-12 rounded-t-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-gold-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <industry.icon className="w-8 h-8 text-navy-900" />
                  </div>
                  <h2 className="font-display text-4xl md:text-5xl">{industry.title}</h2>
                </div>
                <p className="text-xl text-gray-300 leading-relaxed">
                  {industry.description}
                </p>
              </div>

              {/* Operations Grid */}
              <div className="border-2 border-navy-900 border-t-0 rounded-b-lg p-8 md:p-12">
                <h3 className="font-display text-2xl text-navy-900 mb-8">
                  OPERATIONS WE TRANSFORM
                </h3>
                <div className="grid md:grid-cols-2 gap-6 mb-12">
                  {industry.operations.map((operation, opIndex) => (
                    <div
                      key={opIndex}
                      className="bg-gray-50 p-6 rounded-lg border-2 border-gray-200 hover:border-gold-600 transition-colors"
                    >
                      <div className="flex items-start gap-4 mb-3">
                        <div className="w-12 h-12 bg-navy-900 rounded-lg flex items-center justify-center flex-shrink-0">
                          <operation.icon className="w-6 h-6 text-gold-600" />
                        </div>
                        <h4 className="font-display text-xl text-navy-900 leading-tight pt-2">
                          {operation.name}
                        </h4>
                      </div>
                      <p className="text-gray-600 leading-relaxed ml-16">
                        {operation.details}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Stats */}
                <div className="bg-gold-600 p-8 rounded-lg">
                  <h4 className="font-display text-2xl text-navy-900 mb-6 text-center">
                    TYPICAL RESULTS
                  </h4>
                  <div className="grid grid-cols-3 gap-8">
                    {industry.stats.map((stat, statIndex) => (
                      <div key={statIndex} className="text-center">
                        <div className="font-display text-4xl md:text-5xl text-navy-900 mb-2">
                          {stat.value}
                        </div>
                        <div className="text-sm text-navy-800 font-medium">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Target Client Profile */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl mb-6">
              WHO WE WORK WITH
            </h2>
            <div className="bg-gold-600 h-1 w-24 mx-auto mb-8" />
            <p className="text-xl text-gray-300 leading-relaxed">
              We partner with established organizations ready for enterprise-scale transformation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-navy-800 p-8 rounded-lg">
              <h3 className="font-display text-2xl text-gold-600 mb-4">COMPANY PROFILE</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gold-600 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-300">
                    <strong className="text-white">$100M+ in annual revenue</strong> with established
                    operations seeking measurable improvement
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gold-600 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-300">
                    <strong className="text-white">High-volume, transaction-intensive</strong> operations
                    in insurance, banking, or response centers
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gold-600 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-300">
                    <strong className="text-white">Process-driven environments</strong> where efficiency
                    and accuracy directly impact profitability
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-navy-800 p-8 rounded-lg">
              <h3 className="font-display text-2xl text-gold-600 mb-4">DECISION MAKERS</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gold-600 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-300">
                    <strong className="text-white">C-Suite Executives</strong> (CEO, COO, CFO) driving
                    operational excellence initiatives
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gold-600 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-300">
                    <strong className="text-white">Private Equity & Asset Managers</strong> optimizing
                    portfolio company performance
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gold-600 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-300">
                    <strong className="text-white">Operations Leaders</strong> with authority to
                    implement enterprise-wide transformation
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gold-600 p-8 rounded-lg text-center">
            <p className="text-navy-900 text-lg font-medium mb-2">
              MINIMUM ENGAGEMENT THRESHOLD
            </p>
            <p className="text-navy-900 text-3xl font-display mb-4">
              $1M+ PROJECT ENGAGEMENTS
            </p>
            <p className="text-navy-800">
              We focus on transformations where the scale justifies the rigor of the Bismark Method
              and delivers 5-10x ROI within the first year.
            </p>
          </div>
        </div>
      </section>

      {/* Case Study Highlight */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white border-2 border-navy-900 rounded-lg p-8 md:p-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-gold-600 h-1 w-12" />
                <span className="font-display text-sm text-navy-900 tracking-wider">
                  REAL RESULTS
                </span>
              </div>
              <blockquote className="text-2xl md:text-3xl text-navy-900 mb-8 leading-relaxed">
                "Bismark didn't just improve our processes—they transformed our entire
                operational culture. Our team now thinks like process engineers, and the
                results have been sustained for over three years."
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-navy-900 rounded-full flex items-center justify-center">
                  <Users className="w-8 h-8 text-gold-600" />
                </div>
                <div>
                  <p className="font-medium text-navy-900">VP of Operations</p>
                  <p className="text-gray-600">Fortune 500 Insurance Company</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl md:text-5xl mb-6">
            SEE THE BISMARK METHOD IN ACTION
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Experience a complimentary walkthrough at your site. We'll analyze your operations
            and present preliminary findings—no obligation, just rigorous analysis.
          </p>
          <Link
            to="/walkthrough"
            className="inline-flex items-center gap-2 bg-gold-600 text-navy-900 px-8 py-4 font-display text-lg hover:bg-gold-500 transition-colors"
          >
            REQUEST A WALKTHROUGH
            <ArrowRight className="w-5 h-5" />
          </Link>
          <p className="text-sm text-gray-400 mt-6">
            2-4 days on-site. Free. Our clients call it unforgettable.
          </p>
        </div>
      </section>
    </div>
  );
};

export default IndustriesPage;
