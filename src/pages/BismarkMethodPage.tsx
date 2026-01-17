import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Users,
  Target,
  Layers,
  BarChart3,
  RefreshCw,
  Hand,
  Brain,
  MessageSquare,
  CheckCircle2,
  ChevronDown,
  Award
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
            <h2 className="font-display text-4xl md:text-5xl text-navy-900 mb-8 text-center">
              Two Interconnected Components
            </h2>

            <p className="text-xl text-gray-700 leading-relaxed mb-12 text-center">
              The Bismark Method is built on two interconnected components: Transformative Leadership Mastery (TLM) and The 5 Pillars.
            </p>

            {/* Hand Metaphor - Prominent Callout */}
            {/* TODO: Add hand imagery - palm = TLM, 5 fingers = 5 Pillars */}
            <div className="bg-gradient-to-br from-gold-50 to-gold-100 border-4 border-gold-600 p-8 md:p-12 shadow-xl">
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
          <div className="max-w-5xl mx-auto mb-16 text-center">
            <h2 className="font-display text-4xl md:text-6xl text-navy-900 mb-4">
              Transformative Leadership Mastery
            </h2>
            <p className="text-2xl text-gray-600 font-light">
              Component 1: Leadership Foundation
            </p>
          </div>

          {/* Intro Paragraph */}
          <div className="max-w-5xl mx-auto mb-12">
            <p className="text-xl text-gray-700 leading-relaxed">
              Our approach centers on preparing leadership before transforming operations. Transformative Leadership Mastery shifts focus from managing change to leading performance—ensuring your organization is ready to own and sustain results.
            </p>
          </div>

          {/* Quote Callout */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-gold-600 p-8 md:p-10 border-l-4 border-navy-900 shadow-lg">
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

            <div className="grid md:grid-cols-3 gap-8">
              {/* Principle 1 */}
              <div className="bg-white border-l-4 border-gold-600 p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-center w-16 h-16 bg-gold-600 text-white rounded-full mb-6 mx-auto">
                  <span className="font-display text-2xl font-bold">1</span>
                </div>
                <h4 className="font-display text-xl text-navy-900 mb-4 text-center leading-tight">
                  How People Perform Correlates to How Situations Occur to Them
                </h4>
                <div className="space-y-3 text-gray-700">
                  <p>Actions are always consistent with perception</p>
                  <p className="font-semibold text-navy-900">The Occurring (Perceptions) → Actions → Results</p>
                  <p className="italic text-sm">
                    "Top management's job is to design context rather than invent content"
                  </p>
                </div>
              </div>

              {/* Principle 2 */}
              <div className="bg-white border-l-4 border-gold-600 p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-center w-16 h-16 bg-gold-600 text-white rounded-full mb-6 mx-auto">
                  <span className="font-display text-2xl font-bold">2</span>
                </div>
                <h4 className="font-display text-xl text-navy-900 mb-4 text-center leading-tight">
                  How a Situation Occurs Arises in Language
                </h4>
                <div className="space-y-3 text-gray-700">
                  <p>Foreground conversation (what's said) vs. Background conversation (what's unsaid)</p>
                  <p className="font-semibold text-navy-900">The unsaid—reactive, habitual, past-based—has the real power and impact</p>
                  <p>Two types of language: <span className="font-semibold">Descriptive</span> (past-based) vs. <span className="font-semibold">Committed</span> (future-based)</p>
                </div>
              </div>

              {/* Principle 3 */}
              <div className="bg-white border-l-4 border-gold-600 p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-center w-16 h-16 bg-gold-600 text-white rounded-full mb-6 mx-auto">
                  <span className="font-display text-2xl font-bold">3</span>
                </div>
                <h4 className="font-display text-xl text-navy-900 mb-4 text-center leading-tight">
                  Future-Based Language Transforms How Situations Occur
                </h4>
                <div className="space-y-3 text-gray-700">
                  <p><span className="font-semibold text-navy-900">Descriptive language:</span> explanations, justifications, complaints, predictions</p>
                  <p><span className="font-semibold text-navy-900">Committed language:</span> declarations, promises, requests, taking a stand</p>
                  <p className="italic">Committed language makes things possible AND makes things happen</p>
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
                  className="bg-white border-2 border-gray-300 overflow-hidden transition-all duration-300 hover:border-gold-600"
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
          <div className="max-w-5xl mx-auto mb-16 text-center">
            <h2 className="font-display text-4xl md:text-6xl text-navy-900 mb-4">
              The 5 Pillars
            </h2>
            <p className="text-2xl text-gray-600 font-light">
              Component 2: Operational Framework
            </p>
          </div>

          {/* Intro Paragraph */}
          <div className="max-w-5xl mx-auto mb-16">
            <p className="text-xl text-gray-700 leading-relaxed text-center">
              With leadership aligned, the 5 Pillars provide the operational framework that delivers measurable, sustainable results.
            </p>
          </div>

          {/* The 5 Pillars - Cards with Navy Accents */}
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Pillar 1 */}
            <div className="bg-white border-l-4 border-navy-900 p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center w-16 h-16 bg-navy-900 text-gold-600 rounded-full mb-6 mx-auto">
                <Users className="w-8 h-8" />
              </div>
              <h4 className="font-display text-2xl text-navy-900 mb-4 text-center">
                Customer Profile
              </h4>
              <p className="text-gray-700 leading-relaxed">
                We show you how to generate Process Generated Information (PGI) about how your customers interact with your processes and understand how potential changes impact your customer base.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="bg-white border-l-4 border-navy-900 p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center w-16 h-16 bg-navy-900 text-gold-600 rounded-full mb-6 mx-auto">
                <Layers className="w-8 h-8" />
              </div>
              <h4 className="font-display text-2xl text-navy-900 mb-4 text-center">
                Process Design & Engineering
              </h4>
              <p className="text-gray-700 leading-relaxed">
                Improvements occur at the process level. Our curriculum transforms your internal subject matter experts into bona-fide process designers.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="bg-white border-l-4 border-navy-900 p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center w-16 h-16 bg-navy-900 text-gold-600 rounded-full mb-6 mx-auto">
                <Target className="w-8 h-8" />
              </div>
              <h4 className="font-display text-2xl text-navy-900 mb-4 text-center">
                Organizational Strategy
              </h4>
              <p className="text-gray-700 leading-relaxed">
                We show you how to analyze and modify the organizational structure to match your process design to ensure service level agreements are met at optimal cost to serve.
              </p>
            </div>

            {/* Pillar 4 */}
            <div className="bg-white border-l-4 border-navy-900 p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center w-16 h-16 bg-navy-900 text-gold-600 rounded-full mb-6 mx-auto">
                <BarChart3 className="w-8 h-8" />
              </div>
              <h4 className="font-display text-2xl text-navy-900 mb-4 text-center">
                Measurement
              </h4>
              <p className="text-gray-700 leading-relaxed">
                We show you how to create a management operating system that measures how well your design and organizational structure are working to serve your customers.
              </p>
            </div>

            {/* Pillar 5 */}
            <div className="bg-white border-l-4 border-navy-900 p-8 shadow-lg hover:shadow-xl transition-shadow md:col-span-2 lg:col-span-1">
              <div className="flex items-center justify-center w-16 h-16 bg-navy-900 text-gold-600 rounded-full mb-6 mx-auto">
                <RefreshCw className="w-8 h-8" />
              </div>
              <h4 className="font-display text-2xl text-navy-900 mb-4 text-center">
                Continuous Improvement
              </h4>
              <p className="text-gray-700 leading-relaxed">
                We show you how to separate signals from noise in launching further improvement efforts and ensure internal capability to sustain and maximize your own results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: THE GUARANTEE */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <h2 className="font-display text-4xl md:text-6xl text-navy-900 mb-8">
              The Guarantee
            </h2>
          </div>

          {/* Opening Paragraph - Value Proposition */}
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-2xl text-gray-700 leading-relaxed text-center font-light">
              We guarantee our results. When you complete The Bismark Method in full—both TLM and the 5 Pillars—we guarantee the outcome.
            </p>
          </div>

          {/* Explanation Paragraph */}
          <div className="max-w-5xl mx-auto mb-16">
            <div className="bg-white border-4 border-navy-900 p-8 md:p-10 shadow-xl">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                The guarantee isn't a marketing promise. It's a structural outcome. When leadership is transformed through TLM and operations are redesigned through the 5 Pillars, results don't depend on us staying—they're built into how your organization now operates. <span className="font-semibold text-navy-900">That's why we can guarantee it.</span>
              </p>
            </div>
          </div>

          {/* Alternative Path - Respectful, Honest */}
          <div className="max-w-5xl mx-auto mb-16">
            <div className="bg-white border-2 border-gray-300 p-8 md:p-10 shadow-lg">
              <p className="text-xl text-gray-700 leading-relaxed">
                Some clients choose to engage with the 5 Pillars alone—and we're glad to work that way. You'll still get operational transformation and trained internal practitioners. What we can't do in that case is guarantee the results will sustain, because without the leadership foundation, the structural support isn't there. <span className="font-semibold text-navy-900">It's not a lesser engagement—it's an incomplete methodology, by design.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: CTA */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl md:text-5xl mb-6">
            See The Bismark Method in Action
          </h2>
          <p className="text-2xl text-gray-300 mb-10">
            Schedule a free walkthrough of your operations
          </p>

          <Link
            to="/walkthrough"
            className="inline-block bg-gold-600 text-navy-900 px-12 py-5 font-display text-xl font-semibold hover:bg-gold-500 transition-colors shadow-lg"
          >
            Schedule a Walkthrough
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BismarkMethodPage;
