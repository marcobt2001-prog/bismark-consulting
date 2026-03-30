import { Link } from 'react-router-dom';
import { ArrowRight, Users, BarChart3, FileSearch, Presentation, Calendar, Building, TrendingUp, BookOpen, Clock, Shield, Database, Brain } from 'lucide-react';
import { InlineWidget } from 'react-calendly';
import WalkthroughProcessFlow from '../components/visuals/WalkthroughProcessFlow';

const WalkthroughPage = () => {
  const walkthroughPhases = [
    {
      icon: Users,
      phase: 'Phase 1',
      title: 'Stakeholder Engagement',
      description: "We meet with executives, operations leaders, and frontline managers \u2014 not to pitch, but to listen. We need to understand your strategic objectives, the performance targets you're measured against, and the operational reality behind the reports. This is a deep discovery conversation, not a slideshow.",
      activities: [
        'Executive and leadership interviews',
        'Strategic objective alignment',
        'Stakeholder mapping \u2014 who owns what, who influences what',
        "Current state framing \u2014 what you believe is working, what you know isn't"
      ]
    },
    {
      icon: BarChart3,
      phase: 'Phase 2',
      title: 'Data & Documentation Analysis',
      description: "We dig into your operational data, performance metrics, and process documentation. We're looking for the patterns, disconnects, and bottlenecks that live in the gaps between what's reported and what's real. This is where the Bismark Method lens does its heaviest lifting \u2014 we know what to look for because we've seen it hundreds of times.",
      activities: [
        'Performance data review and validation',
        'Process flow and documentation analysis',
        "Metric gap identification \u2014 what's measured vs. what matters",
        'Benchmarking against industry and cross-industry standards'
      ]
    },
    {
      icon: FileSearch,
      phase: 'Phase 3',
      title: 'Operational Observation',
      description: "We go to the floor, the desks, the systems. We watch your operations in action and talk to the people doing the work. There is no substitute for direct observation \u2014 reports tell you what happened, observation tells you why.",
      activities: [
        'Process observation and time studies',
        'Frontline employee interviews',
        'System and tool usage analysis',
        'Waste identification and efficiency mapping'
      ]
    },
    {
      icon: Presentation,
      phase: 'Phase 4',
      title: 'Findings & Recommendation',
      description: "We deliver an Executive Summary with Data Exhibits \u2014 in both written and oral presentation to your leadership team. This is not a vague deck of observations. It includes quantified findings, specific improvement opportunities, and projected financial impact.",
      activities: [
        'Executive Summary with Data Exhibits',
        'Quantified improvement opportunities',
        'Projected financial impact',
        'One of two forward paths (see below)'
      ]
    }
  ];

  const walkthroughIs = [
    'A structured operational assessment using the Bismark Method lens',
    '3\u20135 days on-site with your team, your data, your operations',
    "Led by senior practitioners who've run these operations",
    "An honest read of where you are \u2014 including what's working"
  ];

  const walkthroughIsnt = [
    'A sales presentation disguised as analysis',
    'A remote desk review of your annual report',
    'Staffed by junior analysts learning on your dime',
    'A tear-down designed to manufacture urgency'
  ];

  const idealCandidates = [
    {
      icon: Building,
      title: 'Established Operations at Scale',
      description: "You're past the startup phase. You have real operational infrastructure \u2014 processes, teams, systems, data \u2014 and you're looking to optimize what exists, not build from scratch. Typically $100M+ in revenue, though the real qualifier is operational complexity, not a number."
    },
    {
      icon: Users,
      title: 'Executive Sponsorship',
      description: "Someone at the C-suite or senior VP level is driving this. Not because they're the only stakeholder \u2014 but because the Bismark Method requires enterprise-wide visibility and the authority to act on what we find. This can't live in a single department."
    },
    {
      icon: TrendingUp,
      title: 'Willingness to Invest in Transformation',
      description: "Our engagements typically start at $300K per identified end-to-end process because the scope demands it. The Bismark Method delivers 3\u201310x return within 18\u201324 months, with your team owning the method after approximately 16 weeks of implementation. That requires committed investment in both dollars and organizational attention. If you're looking for a quick fix or a benchmarking exercise, we're not the right fit."
    },
    {
      icon: BookOpen,
      title: 'A Culture of Learning, Not Just Outsourcing',
      description: "The Bismark Method is built on knowledge transfer. We don't do the work for you and leave. We build capability into your organization. That means your team needs to be willing to learn, participate, and own the results. This is the single biggest predictor of sustained success."
    }
  ];

  const preparationItems = [
    {
      icon: Users,
      title: 'Stakeholder Availability',
      description: "Block time for 3\u20135 key leaders across the walkthrough window. We'll need 60\u201390 minutes with each, and ideally a 2-hour block with the executive sponsor on day one and again for the findings presentation."
    },
    {
      icon: Database,
      title: 'Operational Data',
      description: "Share what you can in advance \u2014 we'll send a specific data request after the discovery call, but the basics include: current performance dashboards and KPI reports, process documentation or workflow maps (whatever exists \u2014 perfection not required), org charts for the operational areas in scope, and any recent audit, assessment, or consulting reports."
    },
    {
      icon: Shield,
      title: 'Physical & System Access',
      description: "We need to be where the work happens. That means floor access, desk access, and ideally observer-level access to the systems your teams use daily. Visitor badging, NDAs, and security requirements \u2014 we're used to all of it."
    },
    {
      icon: Brain,
      title: 'An Open Mind',
      description: "The walkthrough works best when leaders are genuinely curious about what we'll find \u2014 including the uncomfortable parts. We're not here to confirm what you already believe. We're here to show you what you can't see from the inside."
    }
  ];

  return (
    <div className="bg-white">
      {/* SECTION 1 — HERO */}
      <section className="relative bg-navy-900 text-white py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 opacity-90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-6">
            <span className="bg-gold-600 text-navy-900 px-4 py-2 font-display text-sm tracking-wider">
              THE WALKTHROUGH EXPERIENCE
            </span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl mb-6 tracking-wide">
            SEE IT BEFORE YOU BUY IT
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Most consulting firms ask you to trust their track record. We'd rather show you what we can do &mdash; on your floor, with your team, on your data. The Walkthrough is a 3&ndash;5 day operational assessment that delivers real findings before any engagement begins.
          </p>
          <p className="text-sm text-gray-400 max-w-2xl mx-auto">
            Complimentary consulting fees. Client covers travel-related expenses.*
          </p>
        </div>
      </section>

      {/* SECTION 2 — WHAT THE WALKTHROUGH ACTUALLY IS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-4xl md:text-5xl text-navy-900 mb-6">
                WHAT THE WALKTHROUGH ACTUALLY IS
              </h2>
              <div className="bg-gold-600 h-1 w-24 mx-auto mb-8" />
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-gold-600 transition-colors">
                <h3 className="font-display text-xl text-navy-900 mb-6">THE WALKTHROUGH IS</h3>
                <ul className="space-y-4">
                  {walkthroughIs.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-gold-600 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-gold-600 transition-colors">
                <h3 className="font-display text-xl text-navy-900 mb-6">THE WALKTHROUGH ISN'T</h3>
                <ul className="space-y-4">
                  {walkthroughIsnt.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-navy-900 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
              We've conducted these assessments for over 25 years. We've never completed one without identifying significant, quantifiable improvement opportunities. Not because we're looking for problems &mdash; because operational complexity always creates them.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 — WHAT HAPPENS DURING YOUR WALKTHROUGH */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl text-navy-900 mb-6">
              WHAT HAPPENS DURING YOUR WALKTHROUGH
            </h2>
            <div className="bg-gold-600 h-1 w-24 mx-auto mb-8" />
          </div>

          <WalkthroughProcessFlow />

          <div className="grid gap-8 mb-12">
            {walkthroughPhases.map((step, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 rounded-lg p-8 md:p-10 hover:border-gold-600 transition-colors"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-navy-900 flex items-center justify-center">
                      <step.icon className="w-10 h-10 text-gold-600" />
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="font-display text-sm text-gold-600 bg-gold-50 px-3 py-1">
                        {step.phase}
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

          {/* Forward Paths */}
          <div className="bg-navy-900 text-white p-8 md:p-12 rounded-lg">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border-2 border-gray-700 rounded-lg p-6 hover:border-gold-600 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6 text-gold-600" />
                  <h3 className="font-display text-xl text-gold-600">PATH A &mdash; DISCOVERY PROPOSAL (PHASE 1)</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  When the walkthrough identifies complex, interconnected opportunities that require deeper diagnostic work before implementation design. Discovery is a paid 4-week engagement that produces the full transformation blueprint.
                </p>
              </div>

              <div className="border-2 border-gray-700 rounded-lg p-6 hover:border-gold-600 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <ArrowRight className="w-6 h-6 text-gold-600" />
                  <h3 className="font-display text-xl text-gold-600">PATH B &mdash; DIRECT TO IMPLEMENTATION (DTI)</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  When the walkthrough reveals that the operational picture is clear enough &mdash; the diagnosis is confirmed, the organization has the foundation, and the path is evident. A DTI engagement skips the extended discovery phase and moves directly into implementation design and deployment. This isn't a shortcut. It's a recognition that some organizations are further along than they realize.
                </p>
              </div>
            </div>

            <p className="text-center text-gray-400 mt-8 text-lg">
              The walkthrough always tells us which path is right. We don't decide in advance &mdash; the data does.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4 — WHO GETS THE MOST FROM THE WALKTHROUGH */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl text-navy-900 mb-6">
              WHO GETS THE MOST FROM THE WALKTHROUGH
            </h2>
            <div className="bg-gold-600 h-1 w-24 mx-auto mb-8" />
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              The Walkthrough delivers the most value for organizations that share a few characteristics. Not because we're selective for its own sake &mdash; but because the Bismark Method works best when these conditions are present.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {idealCandidates.map((candidate, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-gold-600 transition-colors"
              >
                <div className="w-20 h-20 bg-navy-900 flex items-center justify-center mb-6">
                  <candidate.icon className="w-10 h-10 text-gold-600" />
                </div>
                <h3 className="font-display text-xl text-navy-900 mb-4">
                  {candidate.title.toUpperCase()}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {candidate.description}
                </p>
              </div>
            ))}
          </div>

          <p className="text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
            The method is built around operational processes, not industry labels. If your organization runs claims processing, policy administration, customer service operations, payment processing, loan origination, compliance workflows, or contact center operations &mdash; the walkthrough will find value.{' '}
            <Link to="/industries" className="text-gold-600 hover:text-gold-700 font-medium">
              Industries & Services &rarr;
            </Link>
          </p>
        </div>
      </section>

      {/* SECTION 5 — GETTING READY FOR YOUR WALKTHROUGH */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-4xl md:text-5xl text-navy-900 mb-6">
                GETTING READY FOR YOUR WALKTHROUGH
              </h2>
              <div className="bg-gold-600 h-1 w-24 mx-auto mb-8" />
              <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                You don't need to prepare a formal package. But the more access and context you provide upfront, the more value the walkthrough delivers from day one. Here's what helps us hit the ground running.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {preparationItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-gold-600 transition-colors"
                >
                  <div className="w-20 h-20 bg-navy-900 flex items-center justify-center mb-6">
                    <item.icon className="w-10 h-10 text-gold-600" />
                  </div>
                  <h3 className="font-display text-xl text-navy-900 mb-4">
                    {item.title.toUpperCase()}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — CTA / SCHEDULING */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="font-display text-sm text-gold-600 tracking-wider mb-4">START THE CONVERSATION</p>
            <h2 className="font-display text-4xl md:text-5xl text-navy-900 mb-6">
              BOOK A DISCOVERY CALL
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              The first step is a 30&ndash;45 minute call where we discuss your operational landscape, confirm mutual fit, and schedule your on-site walkthrough. This isn't a sales call &mdash; it's the same rigor in miniature. Come ready to talk about your operations, and we'll come ready to listen.
            </p>
          </div>

          <div className="bg-white border-2 border-navy-900 rounded-lg p-8 md:p-12 text-center">
            <div className="w-20 h-20 bg-navy-900 flex items-center justify-center mx-auto mb-6">
              <Calendar className="w-10 h-10 text-gold-600" />
            </div>

            <div className="mb-8">
              <InlineWidget
                url="https://calendly.com/bismarkconsulting-info/walkthrough"
                styles={{ height: '700px' }}
                pageSettings={{
                  backgroundColor: 'ffffff',
                  hideEventTypeDetails: false,
                  hideLandingPageDetails: false,
                  primaryColor: 'b8860b',
                  textColor: '1a2332',
                }}
              />
            </div>

            <div className="space-y-4">
              <p className="text-sm text-gray-600">
                Prefer email? Reach us at{' '}
                <a href="mailto:info@bismarkconsulting.com" className="text-gold-600 hover:text-gold-700 font-medium">
                  info@bismarkconsulting.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7 — FOOTER CLOSER */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl mb-6">
            THE CONSULTING IS COMPLIMENTARY. THE INSIGHT IS IMMEDIATE. THE DECISION IS YOURS.
          </h2>
          <div className="inline-block bg-gold-600 px-6 py-3 mt-4">
            <p className="text-navy-900 font-display text-lg">
              TYPICAL ENGAGEMENT ROI: 3&ndash;10X RETURN WITHIN 18&ndash;24 MONTHS
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WalkthroughPage;
