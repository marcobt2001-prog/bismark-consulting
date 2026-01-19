import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Users,
  Target,
  Layers,
  BarChart3,
  RefreshCw,
  TrendingUp,
  Hand,
  Brain,
  MessageSquare,
  CheckCircle2,
  ChevronDown,
  Award,
  Building2,
  Cog
} from 'lucide-react';

const BismarkMethodPage = () => {
  // State for accordion sections
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const tlmConcepts = [
    {
      title: 'The Power of Context',
      icon: Brain,
      content: (
        <>
          <p className="text-lg text-gray-700 leading-relaxed mb-4 italic">
            "The context you don't see is running you. The context you create runs your organization."
          </p>
          <p className="text-gray-700 leading-relaxed mb-3">
            Context is the invisible lens through which people view reality. Like water to a fish—we don't see it, but it defines our environment.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Leaders must first expose existing context, then intentionally create new context that enables breakthrough performance.
          </p>
        </>
      )
    },
    {
      title: 'Two Modes of Listening',
      icon: MessageSquare,
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-display text-lg text-navy-900 mb-2">Restrictive Listening</h4>
            <p className="text-gray-700 leading-relaxed">
              Filters through pre-existing judgments, past experiences, personal biases → automatic responses, missed opportunities, default future
            </p>
          </div>
          <div>
            <h4 className="font-display text-lg text-navy-900 mb-2">Generative Listening</h4>
            <p className="text-gray-700 leading-relaxed">
              Opens through genuine curiosity, future orientation, suspended judgment → new possibilities, breakthrough insights, created future
            </p>
          </div>
        </div>
      )
    },
    {
      title: 'Integrity vs. Sincerity',
      icon: Award,
      content: (
        <>
          <div className="space-y-3 mb-4">
            <div>
              <span className="font-semibold text-navy-900">Sincerity:</span>
              <span className="text-gray-700"> Great intention with no structural commitment to keeping your word</span>
            </div>
            <div>
              <span className="font-semibold text-navy-900">Integrity:</span>
              <span className="text-gray-700"> Genuine intention + structural commitment + consistent action</span>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed italic">
            "The difference is that sincerity lies in the mind and not in the structure"
          </p>
        </>
      )
    },
    {
      title: '5 Types of Conversations',
      icon: MessageSquare,
      content: (
        <>
          <p className="text-lg text-gray-700 mb-4 italic">"What is missing is always a conversation"</p>
          <div className="space-y-3">
            <div>
              <span className="font-semibold text-navy-900">Related:</span>
              <span className="text-gray-700"> Generate deeper connection (when people aren't aligned)</span>
            </div>
            <div>
              <span className="font-semibold text-navy-900">Possibility:</span>
              <span className="text-gray-700"> Generate and expand possibilities (when people aren't inspired)</span>
            </div>
            <div>
              <span className="font-semibold text-navy-900">Opportunity:</span>
              <span className="text-gray-700"> Focus on outcomes and structures (when people are stalled)</span>
            </div>
            <div>
              <span className="font-semibold text-navy-900">Action:</span>
              <span className="text-gray-700"> Establish specific commitments (when deadlines are missed)</span>
            </div>
            <div>
              <span className="font-semibold text-navy-900">Completion:</span>
              <span className="text-gray-700"> Generate closure to move forward (when people are stuck in the past)</span>
            </div>
          </div>
        </>
      )
    },
    {
      title: 'The 5-Step Transformation Model',
      icon: Layers,
      content: (
        <ol className="space-y-3">
          <li className="flex gap-3">
            <span className="font-display text-gold-600 font-semibold">1.</span>
            <div>
              <span className="font-semibold text-navy-900">Current State Reality:</span>
              <span className="text-gray-700"> What is predictable?</span>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="font-display text-gold-600 font-semibold">2.</span>
            <div>
              <span className="font-semibold text-navy-900">Problems:</span>
              <span className="text-gray-700"> Constraints & Limits</span>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="font-display text-gold-600 font-semibold">3.</span>
            <div>
              <span className="font-semibold text-navy-900">Extraordinary Possibility:</span>
              <span className="text-gray-700"> What's possible?</span>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="font-display text-gold-600 font-semibold">4.</span>
            <div>
              <span className="font-semibold text-navy-900">Commitment (your word):</span>
              <span className="text-gray-700"> Vision & Outcomes</span>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="font-display text-gold-600 font-semibold">5.</span>
            <div>
              <span className="font-semibold text-navy-900">Transformation:</span>
              <span className="text-gray-700"> Vision and Outcome Realized</span>
            </div>
          </li>
        </ol>
      )
    },
    {
      title: '7 Commitments to Breaking Down Barriers',
      icon: Target,
      content: (
        <ol className="space-y-2">
          <li className="flex gap-3">
            <span className="font-display text-gold-600 font-semibold">1.</span>
            <span className="text-gray-700">Get out of the stands</span>
          </li>
          <li className="flex gap-3">
            <span className="font-display text-gold-600 font-semibold">2.</span>
            <span className="text-gray-700">Create a new game</span>
          </li>
          <li className="flex gap-3">
            <span className="font-display text-gold-600 font-semibold">3.</span>
            <span className="text-gray-700">Make the obstacles conditions of the game</span>
          </li>
          <li className="flex gap-3">
            <span className="font-display text-gold-600 font-semibold">4.</span>
            <span className="text-gray-700">Share insights</span>
          </li>
          <li className="flex gap-3">
            <span className="font-display text-gold-600 font-semibold">5.</span>
            <span className="text-gray-700">Find the right coaching</span>
          </li>
          <li className="flex gap-3">
            <span className="font-display text-gold-600 font-semibold">6.</span>
            <span className="text-gray-700">Start filing the past in the past</span>
          </li>
          <li className="flex gap-3">
            <span className="font-display text-gold-600 font-semibold">7.</span>
            <span className="text-gray-700">Play the game as if life depended on it</span>
          </li>
        </ol>
      )
    }
  ];

  return (
    <div className="bg-white">
      {/* SECTION 1: HERO */}
      <section className="relative bg-navy-900 text-white py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 opacity-90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-5xl md:text-7xl mb-6 tracking-wide">
            THE BISMARK METHOD™
          </h1>
          <p className="text-2xl md:text-3xl text-gold-600 font-semibold mb-8">
            We Guarantee Our Results
          </p>

          <div className="max-w-4xl mx-auto mb-8">
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              The Bismark Method is a "Learn and Do" implementation approach that transforms your internal teams into certified practitioners. Over a 16-week engagement, we don't just improve your operations—we transfer the knowledge so you can sustain and maximize results on your own, without ongoing consultant dependency.
            </p>
            <p className="text-lg text-gray-400 italic">
              The full implementation methodology is developed in consultation with your leadership team, tailored to your specific operations.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: PROBLEM FRAME */}
      <section className="bg-navy-900 text-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xl text-gray-300 leading-relaxed text-center">
            Traditional consulting approaches—whether external firms or internal improvement teams—seldom achieve both significant AND sustainable results. Once the consultants leave, results often diminish. The methodology wasn't transferred. The leadership wasn't prepared. <span className="text-gold-600 font-semibold">The Bismark Method was built to solve this.</span>
          </p>
        </div>
      </section>

      {/* SECTION 3: SOLUTION OVERVIEW */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-4xl md:text-5xl text-navy-900 mb-6">
                TWO INTERCONNECTED COMPONENTS
              </h2>
              <div className="bg-gold-600 h-1 w-24 mx-auto mb-8" />

              <p className="text-xl text-gray-700 leading-relaxed">
                The Bismark Method is built on two interconnected components: Transformative Leadership Mastery (TLM) and The 5 Pillars.
              </p>
            </div>

            {/* Hand Metaphor - Prominent Callout */}
            {/* TODO: Add hand imagery - palm = TLM, 5 fingers = 5 Pillars */}
            <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-8 hover:border-gold-600 transition-colors">
              <div className="flex flex-col items-center text-center">
                <Hand className="w-20 h-20 text-gold-600 mb-6" />
                <p className="text-2xl md:text-3xl text-navy-900 leading-relaxed font-light">
                  Think of it as a hand. The 5 Pillars are the fingers—they do the work, they execute, they touch the operations. TLM is the palm—it's what connects everything, what gives the fingers stability and coordination. <span className="font-semibold">A hand without a palm is just disconnected digits. When you have both, you can grip results and hold onto them.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: TRANSFORMATIVE LEADERSHIP MASTERY (TLM) */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl text-navy-900 mb-6">
              TRANSFORMATIVE LEADERSHIP MASTERY
            </h2>
            <div className="bg-gold-600 h-1 w-24 mx-auto mb-8" />
          </div>

          {/* Intro Paragraph */}
          <div className="max-w-5xl mx-auto mb-12">
            <p className="text-xl text-gray-700 leading-relaxed">
              Our approach centers on preparing leadership before transforming operations. Transformative Leadership Mastery shifts focus from managing change to leading performance—ensuring your organization is ready to own and sustain results.
            </p>
          </div>

          {/* Quote Callout */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-gold-600 p-6 rounded-lg">
              <p className="text-2xl md:text-3xl text-navy-900 italic font-light text-center">
                "It Doesn't Matter What We Cover. It Matters What We Discover."
              </p>
              <p className="text-right text-navy-900 mt-4 font-semibold text-lg">
                — Viktor Weisskopf
              </p>
            </div>
          </div>

          {/* The 3 Core Principles */}
          <div className="max-w-6xl mx-auto mb-20">
            <h3 className="font-display text-3xl md:text-4xl text-navy-900 mb-12 text-center">
              The 3 Core Principles
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Principle 01 */}
              <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-gold-600 transition-colors group">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-navy-900 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-gold-600 transition-colors">
                    <Brain className="w-6 h-6 text-gold-600 group-hover:text-navy-900 transition-colors" />
                  </div>
                  <div className="font-display text-3xl text-gold-600">01</div>
                </div>
                <h3 className="font-display text-xl text-navy-900 mb-3">
                  How People Perform Correlates to How Situations Occur to Them
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Actions are always consistent with perception. The occurring (how situations show up to people) determines their actions, which determine results.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <p className="flex items-start gap-2">
                    <span className="text-gold-600">•</span>
                    The Occurring (Perceptions) → Actions → Results
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-gold-600">•</span>
                    "Top management's job is to design context rather than invent content"
                  </p>
                </div>
              </div>

              {/* Principle 02 */}
              <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-gold-600 transition-colors group">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-navy-900 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-gold-600 transition-colors">
                    <MessageSquare className="w-6 h-6 text-gold-600 group-hover:text-navy-900 transition-colors" />
                  </div>
                  <div className="font-display text-3xl text-gold-600">02</div>
                </div>
                <h3 className="font-display text-xl text-navy-900 mb-3">
                  How a Situation Occurs Arises in Language
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Language creates reality. Foreground conversation (what's said) vs. Background conversation (what's unsaid). The unsaid—reactive, habitual, past-based—has the real power and impact.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <p className="flex items-start gap-2">
                    <span className="text-gold-600">•</span>
                    <span><span className="font-semibold">Descriptive language:</span> past-based, explains what happened</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-gold-600">•</span>
                    <span><span className="font-semibold">Committed language:</span> future-based, creates what's possible</span>
                  </p>
                </div>
              </div>

              {/* Principle 03 */}
              <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-gold-600 transition-colors group md:col-span-2 lg:col-span-1">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-navy-900 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-gold-600 transition-colors">
                    <Target className="w-6 h-6 text-gold-600 group-hover:text-navy-900 transition-colors" />
                  </div>
                  <div className="font-display text-3xl text-gold-600">03</div>
                </div>
                <h3 className="font-display text-xl text-navy-900 mb-3">
                  Future-Based Language Transforms How Situations Occur
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Committed language makes things possible AND makes things happen. It shifts the occurring, which shifts actions, which shifts results.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <p className="flex items-start gap-2">
                    <span className="text-gold-600">•</span>
                    Declarations, promises, requests, taking a stand
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-gold-600">•</span>
                    Creates new context that enables breakthrough performance
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Key TLM Concepts - Accordion */}
          <div className="max-w-5xl mx-auto mb-12">
            <h3 className="font-display text-3xl md:text-4xl text-navy-900 mb-8">
              Key TLM Concepts
            </h3>

            <div className="space-y-4">
              {tlmConcepts.map((concept, index) => (
                <div
                  key={index}
                  className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden transition-all duration-300 hover:border-gold-600"
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex items-center justify-between p-6 hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <concept.icon className="w-6 h-6 text-gold-600" />
                      <h4 className="font-display text-xl text-navy-900 text-left">
                        {concept.title}
                      </h4>
                    </div>
                    <ChevronDown
                      className={`w-6 h-6 text-navy-900 transition-transform duration-300 ${
                        openAccordion === index ? 'transform rotate-180' : ''
                      }`}
                    />
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openAccordion === index ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="p-6 pt-0 border-t border-gray-200">
                      {concept.content}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Closing Line */}
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-600 italic">
              These principles are applied through a structured curriculum tailored to your operations and leadership team.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5: THE 5 PILLARS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl text-navy-900 mb-6">
              THE 5 PILLARS
            </h2>
            <div className="bg-gold-600 h-1 w-24 mx-auto mb-8" />
          </div>

          {/* Intro Paragraph */}
          <div className="max-w-5xl mx-auto mb-16">
            <p className="text-xl text-gray-700 leading-relaxed text-center">
              With leadership aligned, the 5 Pillars provide the operational framework that delivers measurable, sustainable results.
            </p>
          </div>

          {/* The 5 Pillars */}
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Pillar 01 */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-gold-600 transition-colors group">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-navy-900 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-gold-600 transition-colors">
                  <Users className="w-6 h-6 text-gold-600 group-hover:text-navy-900 transition-colors" />
                </div>
                <div className="font-display text-3xl text-gold-600">01</div>
              </div>
              <h3 className="font-display text-xl text-navy-900 mb-3">
                Customer Profile
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                We show you how to generate Process Generated Information (PGI) about how your customers interact with your processes and understand how potential changes impact your customer base.
              </p>
            </div>

            {/* Pillar 02 */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-gold-600 transition-colors group">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-navy-900 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-gold-600 transition-colors">
                  <Layers className="w-6 h-6 text-gold-600 group-hover:text-navy-900 transition-colors" />
                </div>
                <div className="font-display text-3xl text-gold-600">02</div>
              </div>
              <h3 className="font-display text-xl text-navy-900 mb-3">
                Process Design & Engineering
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Improvements occur at the process level. Our curriculum transforms your internal subject matter experts into bona-fide process designers.
              </p>
            </div>

            {/* Pillar 03 */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-gold-600 transition-colors group">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-navy-900 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-gold-600 transition-colors">
                  <Building2 className="w-6 h-6 text-gold-600 group-hover:text-navy-900 transition-colors" />
                </div>
                <div className="font-display text-3xl text-gold-600">03</div>
              </div>
              <h3 className="font-display text-xl text-navy-900 mb-3">
                Organizational Strategy
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                We show you how to analyze and modify the organizational structure to match your process design to ensure service level agreements are met at optimal cost to serve.
              </p>
            </div>

            {/* Pillar 04 */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-gold-600 transition-colors group">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-navy-900 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-gold-600 transition-colors">
                  <BarChart3 className="w-6 h-6 text-gold-600 group-hover:text-navy-900 transition-colors" />
                </div>
                <div className="font-display text-3xl text-gold-600">04</div>
              </div>
              <h3 className="font-display text-xl text-navy-900 mb-3">
                Measurement
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                We show you how to create a management operating system that measures how well your design and organizational structure are working to serve your customers.
              </p>
            </div>

            {/* Pillar 05 */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-gold-600 transition-colors group md:col-span-2 lg:col-span-1">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-navy-900 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-gold-600 transition-colors">
                  <RefreshCw className="w-6 h-6 text-gold-600 group-hover:text-navy-900 transition-colors" />
                </div>
                <div className="font-display text-3xl text-gold-600">05</div>
              </div>
              <h3 className="font-display text-xl text-navy-900 mb-3">
                Continuous Improvement
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                We show you how to separate signals from noise in launching further improvement efforts and ensure internal capability to sustain and maximize your own results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: LEARN AND DO APPROACH */}
      <section className="py-24 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl mb-6">
              THE "LEARN AND DO" APPROACH
            </h2>
            <div className="bg-gold-600 h-1 w-24 mx-auto mb-8" />
            <p className="text-xl text-gray-300">
              Knowledge transfer happens during implementation, not after
            </p>
          </div>

          {/* Two Cards: LEARN and DO */}
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 mb-16">
            {/* LEARN Card */}
            <div className="bg-white text-navy-900 p-8 rounded-lg">
              <div className="flex items-center justify-center w-16 h-16 bg-gold-600 text-white rounded-full mb-6 mx-auto">
                <Brain className="w-8 h-8" />
              </div>
              <h3 className="font-display text-3xl text-gold-600 mb-4 text-center">
                LEARN
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                We teach your internal teams the methodology—not through theoretical training sessions, but through real application on your actual operations.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gold-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Curriculum tailored to your operations</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gold-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Applied learning on real problems</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gold-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Certification as practitioners</span>
                </li>
              </ul>
            </div>

            {/* DO Card */}
            <div className="bg-white text-navy-900 p-8 rounded-lg">
              <div className="flex items-center justify-center w-16 h-16 bg-gold-600 text-white rounded-full mb-6 mx-auto">
                <Cog className="w-8 h-8" />
              </div>
              <h3 className="font-display text-3xl text-gold-600 mb-4 text-center">
                DO
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Your teams implement the improvements themselves, under our guidance. By the end of 16 weeks, they've both transformed operations and learned how to do it again.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gold-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Real operational transformation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gold-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Ownership from day one</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gold-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Sustainable internal capability</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Timeline Callout */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-gold-600 text-navy-900 p-6 rounded-lg">
              <div className="flex items-center justify-center gap-4 mb-6">
                <TrendingUp className="w-12 h-12" />
                <h3 className="font-display text-3xl">16-Week Engagement</h3>
              </div>
              <p className="text-lg leading-relaxed text-center">
                By the end of our engagement, your internal teams are certified practitioners who can sustain results, identify new opportunities, and lead future improvements—without ongoing consultant dependency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: WHY IT WORKS */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl text-navy-900 mb-6">
              WHY IT WORKS
            </h2>
            <div className="bg-gold-600 h-1 w-24 mx-auto mb-8" />
            <p className="text-xl text-gray-700">
              Three principles that make results sustainable
            </p>
          </div>

          {/* Three Numbered Cards */}
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-lg border-2 border-gray-200 hover:border-gold-600 transition-colors">
              <div className="flex items-center justify-center w-16 h-16 bg-navy-900 text-gold-600 rounded-full mb-6 mx-auto">
                <span className="font-display text-3xl font-bold">1</span>
              </div>
              <h3 className="font-display text-2xl text-navy-900 mb-4 text-center">
                Systematic
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Not ad-hoc fixes or best practices borrowed from other companies. A complete methodology designed to work as an integrated system.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-lg border-2 border-gray-200 hover:border-gold-600 transition-colors">
              <div className="flex items-center justify-center w-16 h-16 bg-navy-900 text-gold-600 rounded-full mb-6 mx-auto">
                <span className="font-display text-3xl font-bold">2</span>
              </div>
              <h3 className="font-display text-2xl text-navy-900 mb-4 text-center">
                Transferable
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Your teams learn by doing. By the end, they don't just have better operations—they know how to improve operations, independently.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-lg border-2 border-gray-200 hover:border-gold-600 transition-colors">
              <div className="flex items-center justify-center w-16 h-16 bg-navy-900 text-gold-600 rounded-full mb-6 mx-auto">
                <span className="font-display text-3xl font-bold">3</span>
              </div>
              <h3 className="font-display text-2xl text-navy-900 mb-4 text-center">
                Measurable
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Clear metrics, transparent progress, and outcomes that are verified before we guarantee them. Results aren't promised—they're proven.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: THE GUARANTEE */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl text-navy-900 mb-6">
              THE GUARANTEE
            </h2>
            <div className="bg-gold-600 h-1 w-24 mx-auto mb-8" />
          </div>

          {/* Opening Paragraph - Value Proposition */}
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-2xl text-gray-700 leading-relaxed text-center font-light">
              We guarantee our results. When you complete The Bismark Method in full—both TLM and the 5 Pillars—we guarantee the outcome.
            </p>
          </div>

          {/* Three Styled Boxes */}
          <div className="max-w-5xl mx-auto space-y-8">
            {/* Box 1: Why We Can Guarantee */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-gold-600 transition-colors">
              <h3 className="font-display text-2xl text-navy-900 mb-4">
                Why We Can Guarantee It
              </h3>
              <p className="text-xl text-gray-700 leading-relaxed">
                The guarantee isn't a marketing promise. It's a structural outcome. When leadership is transformed through TLM and operations are redesigned through the 5 Pillars, results don't depend on us staying—they're built into how your organization now operates.
              </p>
            </div>

            {/* Box 2: Full Method = Guaranteed Results */}
            <div className="bg-navy-900 text-white p-8 rounded-lg">
              <h3 className="font-display text-2xl text-gold-600 mb-4">
                Full Method = Guaranteed Results
              </h3>
              <p className="text-xl text-gray-300 leading-relaxed">
                When you engage with both components—TLM and the 5 Pillars—you get certified internal practitioners, transformed operations, and a guarantee. That's the complete Bismark Method.
              </p>
            </div>

            {/* Box 3: Pillars Alone */}
            <div className="bg-gray-100 border-2 border-gray-200 rounded-lg p-8 hover:border-gold-600 transition-colors">
              <h3 className="font-display text-2xl text-navy-900 mb-4">
                Pillars Alone: Powerful, But Incomplete
              </h3>
              <p className="text-xl text-gray-700 leading-relaxed">
                Some clients choose to engage with the 5 Pillars alone—and we're glad to work that way. You'll still get operational transformation and trained internal practitioners. What we can't do in that case is guarantee the results will sustain, because without the leadership foundation, the structural support isn't there. <span className="font-semibold">It's not a lesser engagement—it's an incomplete methodology, by design.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: CTA */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl md:text-5xl mb-6">
            SEE THE BISMARK METHOD IN ACTION
          </h2>
          <p className="text-2xl text-gray-300 mb-10">
            Schedule a free walkthrough of your operations
          </p>

          <Link
            to="/walkthrough"
            className="inline-block bg-gold-600 text-navy-900 px-12 py-5 font-display text-xl font-semibold hover:bg-gold-500 transition-colors"
          >
            Schedule a Walkthrough
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BismarkMethodPage;
