import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Users,
  Target,
  TrendingUp,
  Award,
  CheckCircle2,
  ChevronDown,
  Brain,
  MessageSquare,
  Layers,
  BarChart3,
  RefreshCw,
  Hand
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
            Context is the invisible lens through which people view reality. It's like water to a fish—we don't see it, but it defines our environment.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Leaders must expose existing context, then intentionally create new context that enables breakthrough performance.
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
              Filters through judgments, past experiences → automatic responses, missed opportunities
            </p>
          </div>
          <div>
            <h4 className="font-display text-lg text-navy-900 mb-2">Generative Listening</h4>
            <p className="text-gray-700 leading-relaxed">
              Opens through curiosity, future orientation → new possibilities, breakthrough insights
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
              <span className="text-gray-700"> Great intention with no structural commitment</span>
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
              <span className="text-gray-700"> Generate deeper connection (when not aligned)</span>
            </div>
            <div>
              <span className="font-semibold text-navy-900">Possibility:</span>
              <span className="text-gray-700"> Expand possibilities (when not inspired)</span>
            </div>
            <div>
              <span className="font-semibold text-navy-900">Opportunity:</span>
              <span className="text-gray-700"> Focus on outcomes (when stalled)</span>
            </div>
            <div>
              <span className="font-semibold text-navy-900">Action:</span>
              <span className="text-gray-700"> Establish commitments (when deadlines missed)</span>
            </div>
            <div>
              <span className="font-semibold text-navy-900">Completion:</span>
              <span className="text-gray-700"> Generate closure (when stuck in past)</span>
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
      {/* Hero Section */}
      <section className="relative bg-navy-900 text-white py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 opacity-90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-5xl md:text-7xl mb-6 tracking-wide">
            THE COMPLETE TRANSFORMATION FRAMEWORK
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12">
            From Leadership Foundation to Operational Excellence
          </p>

          {/* Anchor Navigation */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <a
              href="#tlm"
              className="bg-navy-800 hover:bg-navy-700 px-6 py-3 text-sm md:text-base transition-colors border border-gray-700"
            >
              The Foundation: TLM
            </a>
            <a
              href="#bismark-method"
              className="bg-gold-600 hover:bg-gold-500 text-navy-900 px-6 py-3 text-sm md:text-base font-semibold transition-colors"
            >
              The Destination: The Bismark Method
            </a>
            <a
              href="#guarantee"
              className="bg-navy-800 hover:bg-navy-700 px-6 py-3 text-sm md:text-base transition-colors border border-gray-700"
            >
              The Guarantee
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 1: TLM - The Foundation */}
      <section id="tlm" className="py-20 bg-gray-50 relative">
        {/* Foundation visual motif */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-300 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-5xl mx-auto mb-16">
            <div className="inline-block mb-4">
              <span className="bg-gray-300 text-gray-700 px-4 py-2 font-display text-sm tracking-wider">
                THE FOUNDATION
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-6xl text-navy-900 mb-6">
              IT STARTS WITH TRANSFORMATIVE LEADERSHIP MASTERY™
            </h2>
            <p className="text-2xl text-gray-600 mb-8 leading-relaxed">
              The Foundation That Prepares You for Lasting Results
            </p>
            <div className="bg-gold-600 p-6 md:p-8 border-l-4 border-navy-900">
              <p className="text-xl md:text-2xl text-navy-900 italic font-light">
                "It Doesn't Matter What We Cover. It Matters What We Discover."
              </p>
              <p className="text-right text-navy-900 mt-2 font-semibold">
                — Viktor Weisskopf
              </p>
            </div>
          </div>

          {/* Intro Paragraph */}
          <div className="max-w-5xl mx-auto mb-16">
            <p className="text-lg text-gray-700 leading-relaxed">
              Before operational transformation can take hold, leadership must be ready to sustain it. TLM is a fresh perspective on organizational change that shifts focus from managing change to leading performance. Traditional change management is often met with resistance—past failures create barriers. TLM reframes this entirely: <span className="font-semibold text-navy-900">Leaders create what does not exist. Managers optimize what already exists.</span>
            </p>
          </div>

          {/* The 3 Core Principles */}
          <div className="max-w-6xl mx-auto mb-20">
            <h3 className="font-display text-3xl md:text-4xl text-navy-900 mb-12 text-center">
              The 3 Core Principles of TLM
            </h3>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Principle 1 */}
              <div className="bg-white border-2 border-gray-300 p-8 shadow-lg">
                <div className="flex items-center justify-center w-16 h-16 bg-navy-900 text-gold-600 rounded-full mb-6 mx-auto">
                  <span className="font-display text-2xl">1</span>
                </div>
                <h4 className="font-display text-xl text-navy-900 mb-4 text-center">
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
              <div className="bg-white border-2 border-gray-300 p-8 shadow-lg">
                <div className="flex items-center justify-center w-16 h-16 bg-navy-900 text-gold-600 rounded-full mb-6 mx-auto">
                  <span className="font-display text-2xl">2</span>
                </div>
                <h4 className="font-display text-xl text-navy-900 mb-4 text-center">
                  How a Situation Occurs Arises in Language
                </h4>
                <div className="space-y-3 text-gray-700">
                  <p>Foreground conversation (what's said) vs. Background conversation (what's unsaid)</p>
                  <p className="font-semibold text-navy-900">The unsaid—reactive, habitual, past-based—has the real power</p>
                  <p>Two types of language: <span className="font-semibold">Descriptive</span> (past-based) vs. <span className="font-semibold">Committed</span> (future-based)</p>
                </div>
              </div>

              {/* Principle 3 */}
              <div className="bg-white border-2 border-gray-300 p-8 shadow-lg">
                <div className="flex items-center justify-center w-16 h-16 bg-navy-900 text-gold-600 rounded-full mb-6 mx-auto">
                  <span className="font-display text-2xl">3</span>
                </div>
                <h4 className="font-display text-xl text-navy-900 mb-4 text-center">
                  Future-Based Language Transforms How Situations Occur
                </h4>
                <div className="space-y-3 text-gray-700">
                  <p><span className="font-semibold text-navy-900">Descriptive language:</span> explanations, justifications, complaints (past-focused)</p>
                  <p><span className="font-semibold text-navy-900">Committed language:</span> declarations, promises, requests (future-focused)</p>
                  <p className="italic">Committed language makes things possible AND makes things happen</p>
                </div>
              </div>
            </div>
          </div>

          {/* Key TLM Concepts - Accordion */}
          <div className="max-w-5xl mx-auto mb-16">
            <h3 className="font-display text-3xl md:text-4xl text-navy-900 mb-8">
              Key TLM Concepts
            </h3>

            <div className="space-y-4">
              {tlmConcepts.map((concept, index) => (
                <div
                  key={index}
                  className="bg-white border-2 border-gray-300 overflow-hidden transition-all duration-300"
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

          {/* Transition to Bismark Method */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-gray-200 to-gold-600 p-8 md:p-12 text-center border-4 border-navy-900 shadow-xl">
              <Hand className="w-16 h-16 text-navy-900 mx-auto mb-4" />
              <p className="text-xl md:text-2xl text-navy-900 font-semibold leading-relaxed">
                With your leadership transformed and your organization aligned, you're ready for the operational framework that delivers results: The Bismark Method.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: The Bismark Method - The Destination */}
      <section id="bismark-method" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header - ELEVATED STYLING */}
          <div className="max-w-5xl mx-auto mb-20 text-center">
            <div className="inline-block mb-6">
              <span className="bg-gold-600 text-navy-900 px-6 py-3 font-display text-base tracking-widest font-bold">
                THE DESTINATION
              </span>
            </div>
            <h2 className="font-display text-5xl md:text-7xl text-navy-900 mb-8 tracking-tight leading-tight">
              THE BISMARK METHOD™
            </h2>
            <div className="bg-gold-600 h-2 w-32 mx-auto mb-8" />
            <p className="text-2xl md:text-3xl text-gray-600 leading-relaxed font-light">
              The Operational Framework for Significant, Sustainable Results
            </p>
          </div>

          {/* Intro Paragraph */}
          <div className="max-w-5xl mx-auto mb-20">
            <p className="text-xl text-gray-700 leading-relaxed">
              The Bismark Method is a "Learn and Do" implementation approach that transforms your internal teams into certified practitioners. Over a 16-week engagement, we don't just improve your operations—we transfer the knowledge so you can sustain and maximize results on your own, without ongoing consultant dependency. <span className="font-semibold text-navy-900 text-2xl">This is what it's all been building to.</span>
            </p>
          </div>

          {/* The 5 Pillars - PROMINENT CARDS */}
          <div className="mb-20">
            <h3 className="font-display text-4xl text-navy-900 mb-12 text-center">
              The 5 Pillars
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Pillar 1 */}
              <div className="bg-navy-900 text-white p-8 shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <div className="flex items-center justify-center w-20 h-20 bg-gold-600 rounded-full mb-6">
                  <Users className="w-10 h-10 text-navy-900" />
                </div>
                <h4 className="font-display text-2xl mb-4 text-gold-600">
                  Customer Profile
                </h4>
                <p className="text-gray-300 leading-relaxed">
                  Generate Process Generated Information (PGI) about how customers interact with your processes. Understand how potential changes impact your customer base before you make them.
                </p>
              </div>

              {/* Pillar 2 */}
              <div className="bg-navy-900 text-white p-8 shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <div className="flex items-center justify-center w-20 h-20 bg-gold-600 rounded-full mb-6">
                  <Layers className="w-10 h-10 text-navy-900" />
                </div>
                <h4 className="font-display text-2xl mb-4 text-gold-600">
                  Process Design & Engineering
                </h4>
                <p className="text-gray-300 leading-relaxed">
                  Improvements occur at the process level. Our curriculum transforms your internal subject matter experts into bona-fide process designers capable of engineering solutions from scratch.
                </p>
              </div>

              {/* Pillar 3 */}
              <div className="bg-navy-900 text-white p-8 shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <div className="flex items-center justify-center w-20 h-20 bg-gold-600 rounded-full mb-6">
                  <Target className="w-10 h-10 text-navy-900" />
                </div>
                <h4 className="font-display text-2xl mb-4 text-gold-600">
                  Organizational Strategy
                </h4>
                <p className="text-gray-300 leading-relaxed">
                  Analyze and modify your organizational structure to match your process design. Ensure service level agreements are met at optimal cost to serve.
                </p>
              </div>

              {/* Pillar 4 */}
              <div className="bg-navy-900 text-white p-8 shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <div className="flex items-center justify-center w-20 h-20 bg-gold-600 rounded-full mb-6">
                  <BarChart3 className="w-10 h-10 text-navy-900" />
                </div>
                <h4 className="font-display text-2xl mb-4 text-gold-600">
                  Measurement
                </h4>
                <p className="text-gray-300 leading-relaxed">
                  Create a management operating system that measures how well your design and organizational structure are working. Gain deep insights into process and organizational capabilities.
                </p>
              </div>

              {/* Pillar 5 */}
              <div className="bg-navy-900 text-white p-8 shadow-2xl transform hover:scale-105 transition-transform duration-300 md:col-span-2 lg:col-span-1">
                <div className="flex items-center justify-center w-20 h-20 bg-gold-600 rounded-full mb-6">
                  <RefreshCw className="w-10 h-10 text-navy-900" />
                </div>
                <h4 className="font-display text-2xl mb-4 text-gold-600">
                  Continuous Improvement
                </h4>
                <p className="text-gray-300 leading-relaxed">
                  Separate signals from noise when launching further improvement efforts. Build the internal capability to sustain and maximize your own results indefinitely.
                </p>
              </div>
            </div>
          </div>

          {/* Key Differentiator */}
          <div className="max-w-5xl mx-auto">
            <div className="bg-gold-600 p-8 md:p-12 border-4 border-navy-900 shadow-2xl">
              <div className="flex items-start gap-4 mb-4">
                <Award className="w-12 h-12 text-navy-900 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-display text-2xl md:text-3xl text-navy-900 mb-4">
                    The Key Differentiator
                  </h3>
                  <p className="text-xl text-navy-900 leading-relaxed font-semibold">
                    Unlike traditional consulting where results diminish after the team leaves, The Bismark Method trains your people to own the results. That's how our clients have achieved over $1B in sustainable savings.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: The Guarantee */}
      <section id="guarantee" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <h2 className="font-display text-4xl md:text-6xl text-navy-900 mb-6">
              THE BISMARK METHOD GUARANTEE
            </h2>
            <div className="bg-gold-600 h-1 w-24 mx-auto mb-8" />
            <p className="text-xl text-gray-700 leading-relaxed">
              When you complete Transformative Leadership Mastery before implementing The Bismark Method, you qualify for our results guarantee. TLM prepares your leadership; The Bismark Method transforms your operations. Together, we guarantee the outcome.
            </p>
          </div>

          {/* Two Paths - Side by Side Comparison */}
          <div className="max-w-6xl mx-auto mb-16">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Recommended Path */}
              <div className="bg-white border-4 border-gold-600 p-8 md:p-10 shadow-2xl relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gold-600 text-navy-900 px-6 py-2 font-display text-sm tracking-wider font-bold">
                    RECOMMENDED
                  </span>
                </div>

                <h3 className="font-display text-3xl text-navy-900 mb-6 mt-4 text-center">
                  TLM + Bismark Method
                </h3>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-gold-600 flex-shrink-0 mt-1" />
                    <span className="text-lg text-gray-700">Leadership foundation established</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-gold-600 flex-shrink-0 mt-1" />
                    <span className="text-lg text-gray-700">Full operational transformation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-gold-600 flex-shrink-0 mt-1" />
                    <span className="text-lg text-gray-700">Internal capability transfer</span>
                  </li>
                </ul>

                <div className="bg-navy-900 p-6 text-center">
                  <div className="flex items-center justify-center gap-3 mb-2">
                    <Award className="w-8 h-8 text-gold-600" />
                    <span className="font-display text-2xl text-gold-600">
                      RESULTS GUARANTEED
                    </span>
                    <CheckCircle2 className="w-8 h-8 text-gold-600" />
                  </div>
                  <p className="text-gray-300 text-sm">
                    Backed by our performance guarantee
                  </p>
                </div>
              </div>

              {/* Available Path */}
              <div className="bg-white border-2 border-gray-300 p-8 md:p-10 shadow-lg opacity-90">
                <div className="h-8 mb-4" /> {/* Spacer to align with recommended */}

                <h3 className="font-display text-3xl text-navy-900 mb-6 text-center">
                  Bismark Method Only
                </h3>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-gray-400 flex-shrink-0 mt-1" />
                    <span className="text-lg text-gray-700">Operational transformation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-gray-400 flex-shrink-0 mt-1" />
                    <span className="text-lg text-gray-700">Internal capability transfer</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 flex-shrink-0 mt-1" /> {/* Spacer */}
                    <span className="text-lg text-gray-500 invisible">Placeholder</span>
                  </li>
                </ul>

                <div className="bg-gray-200 p-6 text-center">
                  <span className="font-display text-xl text-gray-600">
                    No Guarantee
                  </span>
                  <p className="text-gray-500 text-sm mt-2">
                    Results not guaranteed without TLM foundation
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="max-w-3xl mx-auto text-center">
            <Link
              to="/walkthrough"
              className="inline-flex items-center gap-3 bg-gold-600 text-navy-900 px-10 py-5 font-display text-xl hover:bg-gold-500 transition-colors shadow-lg"
            >
              <TrendingUp className="w-6 h-6" />
              SCHEDULE A WALKTHROUGH
            </Link>
            <p className="text-gray-600 mt-6">
              Experience the complete framework and see which path is right for your organization
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BismarkMethodPage;
