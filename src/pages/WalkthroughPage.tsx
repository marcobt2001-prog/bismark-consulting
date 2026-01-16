import { Link } from 'react-router-dom';
import { ArrowRight, Eye, Users, BarChart3, FileSearch, Presentation, Calendar, CheckCircle2 } from 'lucide-react';

const WalkthroughPage = () => {
  const walkthroughSteps = [
    {
      icon: Users,
      day: 'Day 1',
      title: 'Engage with Key Stakeholders',
      description: 'We meet with C-suite, operations leaders, and frontline managers to understand your strategic objectives, current challenges, and performance targets. This isn\'t a sales pitch—it\'s a deep discovery session.',
      activities: [
        'Executive interviews and alignment sessions',
        'Stakeholder mapping and influence analysis',
        'Strategic objective clarification',
        'Current state assessment discussions'
      ]
    },
    {
      icon: BarChart3,
      day: 'Day 1-2',
      title: 'Analyze Preliminary Data',
      description: 'Our team dives into your operational data, metrics, and process documentation. We identify patterns, bottlenecks, and opportunities that most consultants miss because they don\'t know what to look for.',
      activities: [
        'Performance data analysis',
        'Process flow documentation review',
        'Metric validation and gap analysis',
        'Benchmarking against industry standards'
      ]
    },
    {
      icon: FileSearch,
      day: 'Day 2-3',
      title: 'Conduct Sample Observations',
      description: 'We observe your operations in action—on the floor, at the desks, in the systems. We apply the Bismark Method lens to see what\'s really happening versus what reports say is happening.',
      activities: [
        'Process observation and time studies',
        'Employee interviews and feedback',
        'System and tool usage analysis',
        'Waste and efficiency identification'
      ]
    },
    {
      icon: Presentation,
      day: 'Day 3-4',
      title: 'Present Preliminary Findings',
      description: 'We deliver a comprehensive presentation of what we found, what it means, and what we propose. This includes specific improvement opportunities, projected impact, and a detailed engagement proposal.',
      activities: [
        'Executive findings presentation',
        'Quantified opportunity analysis',
        'Proposed transformation roadmap',
        'Detailed engagement proposal with guarantees'
      ]
    }
  ];

  const engagementProcess = [
    {
      phase: '01',
      title: 'Walkthrough',
      duration: '2-4 Days',
      description: 'Complimentary on-site assessment',
      status: 'FREE'
    },
    {
      phase: '02',
      title: 'Walkthrough Proposal',
      duration: '1-2 Weeks',
      description: 'Detailed engagement scope and guarantees',
      status: 'Review'
    },
    {
      phase: '03',
      title: 'Launch Discovery',
      duration: '4 Weeks',
      description: 'Deep-dive analysis and design phase',
      status: 'Paid'
    },
    {
      phase: '04',
      title: 'Launch Implementation',
      duration: '12-16 Weeks',
      description: 'Full transformation deployment',
      status: 'Paid'
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
              EXPERIENCE IT YOURSELF
            </span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl mb-6 tracking-wide">
            THE WALKTHROUGH EXPERIENCE
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            The best testimonial doesn't come from other companies. It comes from you,
            after experiencing the Bismark Method firsthand.
          </p>
          <div className="flex items-center justify-center gap-2 text-gold-600">
            <Eye className="w-6 h-6" />
            <span className="font-display text-lg">SEE IT FOR YOURSELF</span>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-4xl md:text-5xl text-navy-900 mb-6">
                WHY WE OFFER FREE WALKTHROUGHS
              </h2>
              <div className="bg-gold-600 h-1 w-24 mx-auto mb-8" />
            </div>

            <div className="bg-white border-2 border-navy-900 rounded-lg p-8 md:p-12 mb-12">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Most consulting firms talk about what they've done for others. We show you
                what we can do for <strong className="text-navy-900">you</strong>.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The Walkthrough isn't a sales presentation—it's a genuine operational assessment
                that delivers immediate value. We invest 2-4 days analyzing your operations
                because we're confident in two things:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-gold-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-display text-lg text-navy-900 mb-2">WE'LL FIND VALUE</h3>
                    <p className="text-gray-600">
                      In 20+ years, we've never completed a walkthrough without identifying
                      significant improvement opportunities.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-gold-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-display text-lg text-navy-900 mb-2">YOU'LL SEE THE DIFFERENCE</h3>
                    <p className="text-gray-600">
                      Our rigor, expertise, and methodology become evident immediately. No other
                      vendor interview compares.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gold-600 p-8 rounded-lg text-center">
              <blockquote className="text-2xl md:text-3xl text-navy-900 font-medium mb-4">
                "Our clients call it the most rigorous vendor interview they've ever experienced."
              </blockquote>
              <p className="text-navy-800 text-lg">
                That's because it's not an interview—it's a transformation preview.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Happens Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl text-navy-900 mb-6">
              WHAT HAPPENS DURING THE WALKTHROUGH
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              2-4 days on-site, working directly with your team and operations
            </p>
          </div>

          <div className="grid gap-8 mb-12">
            {walkthroughSteps.map((step, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 rounded-lg p-8 md:p-10 hover:border-gold-600 transition-colors"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-navy-900 rounded-lg flex items-center justify-center mb-4 md:mb-0">
                      <step.icon className="w-10 h-10 text-gold-600" />
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="font-display text-sm text-gold-600 bg-gold-50 px-3 py-1 rounded">
                        {step.day}
                      </span>
                      <h3 className="font-display text-2xl md:text-3xl text-navy-900">
                        {step.title}
                      </h3>
                    </div>

                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      {step.description}
                    </p>

                    <div className="grid md:grid-cols-2 gap-3">
                      {step.activities.map((activity, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-gold-600 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-gray-600 text-sm">{activity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-navy-900 text-white p-8 md:p-12 rounded-lg">
            <h3 className="font-display text-3xl mb-6 text-center">WHAT YOU RECEIVE</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gold-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-8 h-8 text-navy-900" />
                </div>
                <h4 className="font-display text-xl mb-2">QUANTIFIED ANALYSIS</h4>
                <p className="text-gray-300 text-sm">
                  Specific improvement opportunities with projected financial impact
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gold-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Presentation className="w-8 h-8 text-navy-900" />
                </div>
                <h4 className="font-display text-xl mb-2">EXECUTIVE PRESENTATION</h4>
                <p className="text-gray-300 text-sm">
                  Comprehensive findings delivered to stakeholders
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gold-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileSearch className="w-8 h-8 text-navy-900" />
                </div>
                <h4 className="font-display text-xl mb-2">DETAILED PROPOSAL</h4>
                <p className="text-gray-300 text-sm">
                  Engagement scope, timeline, investment, and guaranteed results
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Process Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl text-navy-900 mb-6">
              THE COMPLETE ENGAGEMENT PROCESS
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              From walkthrough to transformation—here's how we work together
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6">
              {engagementProcess.map((phase, index) => (
                <div key={index} className="relative">
                  <div className="bg-white border-2 border-navy-900 rounded-lg p-6 text-center h-full">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-navy-900 text-gold-600 rounded-full font-display text-xl mb-4">
                      {phase.phase}
                    </div>
                    <h3 className="font-display text-xl text-navy-900 mb-2">
                      {phase.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">{phase.duration}</p>
                    <p className="text-sm text-gray-700 mb-3">{phase.description}</p>
                    <span className={`inline-block px-3 py-1 rounded text-xs font-medium ${
                      phase.status === 'FREE'
                        ? 'bg-gold-600 text-navy-900'
                        : phase.status === 'Review'
                        ? 'bg-gray-200 text-gray-700'
                        : 'bg-navy-900 text-white'
                    }`}>
                      {phase.status}
                    </span>
                  </div>
                  {index < engagementProcess.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                      <ArrowRight className="w-6 h-6 text-gold-600" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-4xl md:text-5xl mb-6">
                IS YOUR ORGANIZATION READY?
              </h2>
              <div className="bg-gold-600 h-1 w-24 mx-auto mb-8" />
            </div>

            <div className="bg-navy-800 rounded-lg p-8 md:p-10 mb-8">
              <h3 className="font-display text-2xl text-gold-600 mb-6">
                IDEAL WALKTHROUGH CANDIDATES
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-gold-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">
                    Organizations with <strong className="text-white">$100M+ revenue</strong> and
                    established operations in insurance, banking, or response centers
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-gold-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">
                    C-suite or senior operations leaders with <strong className="text-white">authority
                    to implement</strong> enterprise-wide change
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-gold-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">
                    Companies ready to invest <strong className="text-white">$1M+</strong> in a
                    transformation that delivers 5-10x ROI
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-gold-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">
                    Teams willing to <strong className="text-white">learn and do</strong>—not just
                    outsource the work
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-gold-600 p-6 rounded-lg text-center">
              <p className="text-navy-900 font-medium">
                We're selective about engagements because the Bismark Method demands full commitment
                from both sides. If you meet these criteria, let's talk.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact/Calendly Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl text-navy-900 mb-6">
              SCHEDULE YOUR WALKTHROUGH
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              Ready to experience the Bismark Method firsthand? Let's start the conversation.
            </p>
          </div>

          <div className="bg-gray-50 border-2 border-navy-900 rounded-lg p-8 md:p-12 text-center">
            <div className="w-20 h-20 bg-navy-900 rounded-full flex items-center justify-center mx-auto mb-6">
              <Calendar className="w-10 h-10 text-gold-600" />
            </div>

            <h3 className="font-display text-2xl text-navy-900 mb-4">
              BOOK A DISCOVERY CALL
            </h3>
            <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
              We'll discuss your operational challenges, confirm fit, and schedule your
              on-site walkthrough. The discovery call takes 30-45 minutes.
            </p>

            {/* Calendly Placeholder */}
            <div className="bg-white border-2 border-dashed border-gray-300 rounded-lg p-12 mb-8">
              <p className="text-gray-500 mb-4">
                [Calendly scheduling widget will be embedded here]
              </p>
              <p className="text-sm text-gray-400">
                Integration Point: Calendly embed for discovery call scheduling
              </p>
            </div>

            <div className="space-y-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-navy-900 text-white px-8 py-4 font-display text-lg hover:bg-navy-800 transition-colors"
              >
                OR CONTACT US DIRECTLY
                <ArrowRight className="w-5 h-5" />
              </Link>

              <p className="text-sm text-gray-600">
                Prefer email? Reach us at <a href="mailto:info@bismarkconsulting.com" className="text-gold-600 hover:text-gold-700 font-medium">info@bismarkconsulting.com</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl md:text-5xl mb-6">
            THE WALKTHROUGH IS FREE. THE INSIGHT IS PRICELESS.
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            See what makes the Bismark Method different. No risk, no obligation—just rigorous
            operational analysis and actionable recommendations.
          </p>
          <div className="inline-block bg-gold-600 px-6 py-3 rounded">
            <p className="text-navy-900 font-display text-lg">
              AVERAGE WALKTHROUGH ROI IDENTIFIED: $5M-$20M
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WalkthroughPage;
