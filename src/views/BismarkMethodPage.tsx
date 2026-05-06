import Link from 'next/link';
import {
  ArrowRight,
  Users,
  BarChart3,
  Award,
  Building2,
  Cog,
  RefreshCw,
  BookOpen,
  Layers,
  CheckCircle2,
  Eye
} from 'lucide-react';
import Image from 'next/image';
import WeeklyRhythmTimeline from '../components/visuals/WeeklyRhythmTimeline';
import CalendlyButton from '../components/CalendlyButton';

const BismarkMethodPage = () => {
  const pillars = [
    {
      icon: Users,
      number: '01',
      title: 'Customer Profile',
      description: "Your apprentices learn to generate Precise Generalized Information (PGI) about how customers interact with your processes. They map every touchpoint, decision point, and pain point, building a comprehensive picture of the customer journey that most organizations think they have but don't.",
      keyPoints: [
        'PGI development and customer journey mapping',
        'Touchpoint and decision point analysis',
        'Pain point identification',
        'Gap between perceived and actual customer experience'
      ]
    },
    {
      icon: Cog,
      number: '02',
      title: 'Process Design & Engineering',
      description: "Your subject matter experts become process designers. Apprentices learn how to engineer processes that are efficient, scalable, and aligned with what the customer profile revealed, not just document what exists today.",
      keyPoints: [
        'End-to-end process engineering',
        'Efficiency and scalability design',
        'Alignment with customer profile findings',
        'Future-state process documentation'
      ]
    },
    {
      icon: Building2,
      number: '03',
      title: 'Organizational Strategy',
      description: "Structure follows process. Apprentices redesign organizational alignment (teams, roles, reporting structures) to support the new operating model rather than the old one.",
      keyPoints: [
        'Organizational alignment to new processes',
        'Team and role redesign',
        'Reporting structure optimization',
        'Operating model support'
      ]
    },
    {
      icon: BarChart3,
      number: '04',
      title: 'Measurement',
      description: "Apprentices build a management operating system with leading and lagging indicators at every level. The right metrics, visible in real time, driving decisions rather than decorating dashboards.",
      keyPoints: [
        'Leading and lagging indicator design',
        'Management operating system build',
        'Real-time visibility structures',
        'Decision-driving metrics (not decorative dashboards)'
      ]
    },
    {
      icon: RefreshCw,
      number: '05',
      title: 'Continuous Improvement',
      description: "The final 8 weeks. Apprentices learn to separate signals from noise, implement governance structures, and establish the improvement disciplines that compound results year over year. Because they've already internalized leadership principles and executed Pillars 1\u20134 hands-on, this isn't theory. It's practice becoming habit.",
      keyPoints: [
        'Signal vs. noise discipline',
        'Governance structure implementation',
        'Compounding improvement habits',
        'Sustainability by design'
      ]
    }
  ];

  const phases = [
    {
      number: '01',
      title: 'Foundation',
      weeks: 'Weeks 1\u20134',
      description: 'TLM executive track launches. SMART goals are set with leadership. Apprentices begin Customer Profile and Process Design. The Stake occurs at Week 4: goals are validated and the guarantee is anchored.'
    },
    {
      number: '02',
      title: 'Build',
      weeks: 'Weeks 5\u20138',
      description: 'TLM executive track concludes. Apprentices complete Organizational Strategy and Measurement. The operating system is taking shape: new processes, new structures, new metrics, all built by your people.'
    },
    {
      number: '03',
      title: 'Sustain',
      weeks: 'Weeks 9\u201312',
      description: 'Continuous Improvement pillar begins. Apprentices learn governance, signal vs. noise, and improvement disciplines. Focus shifts from building to sustaining.'
    },
    {
      number: '04',
      title: 'Own',
      weeks: 'Weeks 13\u201316',
      description: 'Full ownership transfer. Apprentices are operating the methodology independently. Final weeks are about refinement, confidence, and readiness to run without Bismark.'
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
              THE BISMARK METHOD&trade;
            </span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl mb-6 tracking-wide">
            A CONSULTING METHOD DESIGNED TO SUSTAIN RESULTS
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-10">
            The Bismark Method is a 16-week &ldquo;Learn and Do&rdquo; engagement that transforms your internal teams into the people who improve your operations, not consultants who do it for you. When it&rsquo;s done right, we guarantee the results.
          </p>
          <CalendlyButton label="SCHEDULE A MEETING" className="inline-block bg-gold-600 text-navy-900 px-10 py-4 font-display text-lg hover:bg-gold-500 transition-colors" showArrow={false} />
        </div>
      </section>

      {/* SECTION 2 — THE PROBLEM */}
      <section className="bg-navy-900 text-white py-16 border-t border-navy-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xl text-gray-300 leading-relaxed text-center">
            Most consulting engagements produce a deliverable: a report, a recommendation, a redesign. Then the consultants leave and the organization is left holding a binder full of ideas and no capability to execute them. Results erode. The dependency cycle starts again. The Bismark Method was built to break that cycle. We don&rsquo;t deliver recommendations. We build the people and the operating system that make results inevitable,{' '}
            <span className="text-gold-600 font-semibold">and sustainable.</span>
          </p>
        </div>
      </section>

      {/* SECTION 3 — TWO TRACKS, ONE METHOD */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-4xl md:text-5xl text-navy-900 mb-6">
                TWO TRACKS, ONE METHOD
              </h2>
              <div className="bg-gold-600 h-1 w-24 mx-auto mb-8" />
            </div>

            <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-8 md:p-12 hover:border-gold-600 transition-colors">
              <div className="flex flex-col items-center text-center">
                <Image
                  src="/images/the-bismark-method-hand.png"
                  alt="The Bismark Method — Five Pillars and Transformative Leadership Mastery"
                  width={520}
                  height={520}
                  className="object-contain mx-auto"
                />
                <p className="text-xl md:text-2xl text-navy-900 leading-relaxed font-light mt-8">
                  Think of it as a hand. The 5 Pillars are the fingers: they do the work, they touch the operations, they execute. Transformative Leadership Mastery is the palm: it connects everything, gives the fingers stability and coordination. <span className="font-semibold">A hand without a palm is just disconnected digits. You need both.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — TRANSFORMATIVE LEADERSHIP MASTERY */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-4xl md:text-5xl text-navy-900 mb-6">
                TRACK 1: TRANSFORMATIVE LEADERSHIP MASTERY (TLM)
              </h2>
              <div className="bg-gold-600 h-1 w-24 mx-auto mb-8" />
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <span className="bg-gold-600 text-navy-900 px-4 py-2 font-display text-sm tracking-wider">
                  WHO: YOUR EXECUTIVE SPONSOR GROUP
                </span>
                <span className="bg-gold-600 text-navy-900 px-4 py-2 font-display text-sm tracking-wider">
                  DURATION: FIRST 8 WEEKS OF THE ENGAGEMENT
                </span>
              </div>
            </div>

            <div className="mb-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                TLM doesn&rsquo;t teach management techniques. It shifts how your leaders relate to performance, language, and accountability, so they can hold the results your teams create.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                The curriculum is built on three core principles: how performance follows perception, how reality arises in language, and how committed language transforms what&rsquo;s possible. Through these, your leaders work through concepts including:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                {[
                  'The Power of Context',
                  'Two Modes of Listening',
                  'Integrity vs. Sincerity',
                  '5 Types of Conversations',
                  'The 5-Step Transformation Model',
                  '7 Commitments to Breaking Down Barriers'
                ].map((concept, index) => (
                  <div
                    key={index}
                    className="bg-white border-l-4 border-gold-600 px-6 py-4"
                  >
                    <p className="font-display text-xs tracking-widest text-gold-600 mb-1">
                      {String(index + 1).padStart(2, '0')}
                    </p>
                    <p className="font-display text-base text-navy-900 tracking-wide">
                      {concept}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-navy-900 text-white p-8 md:p-10 rounded-lg">
              <h3 className="font-display text-2xl text-gold-600 mb-4">
                WHY TLM MATTERS FOR THE GUARANTEE
              </h3>
              <p className="text-gray-300 leading-relaxed">
                TLM is the structural foundation. Without it, operational improvements are real but fragile; they depend on conditions staying favorable. With it, your leadership team has the capacity to sustain and extend results through whatever comes next. This is why the guarantee requires full executive participation in TLM.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — THE 5 PILLARS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl text-navy-900 mb-6">
              TRACK 2: THE 5 PILLARS
            </h2>
            <div className="bg-gold-600 h-1 w-24 mx-auto mb-8" />
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <span className="bg-gold-600 text-navy-900 px-4 py-2 font-display text-sm tracking-wider">
                WHO: YOUR APPRENTICES (DEDICATED, FULL-TIME RESOURCES)
              </span>
              <span className="bg-gold-600 text-navy-900 px-4 py-2 font-display text-sm tracking-wider">
                MINIMUM: ONE PER IMPROVEMENT GOAL OR PROCESS
              </span>
            </div>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Five interconnected principles, taught in sequence and applied immediately to your real operations. Your apprentices don&rsquo;t study these in theory. They use them to redesign how your organization works, while learning the discipline to keep doing it after we leave.
            </p>
          </div>

          <div className="space-y-16 mb-16">
            {pillars.map((pillar, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 rounded-lg p-8 md:p-12 hover:border-gold-600 transition-colors duration-300"
              >
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="w-20 h-20 bg-navy-900 flex items-center justify-center">
                        <pillar.icon className="w-10 h-10 text-gold-600" />
                      </div>
                      <div className="absolute -top-3 -right-3 bg-gold-600 text-navy-900 w-10 h-10 rounded-full flex items-center justify-center font-display text-lg">
                        {pillar.number}
                      </div>
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="font-display text-3xl text-navy-900 mb-4">
                      {pillar.title}
                    </h3>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      {pillar.description}
                    </p>

                    <div className="grid md:grid-cols-2 gap-4">
                      {pillar.keyPoints.map((point, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-gold-600 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-gray-600">{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Why The Order Is Non-Negotiable */}
          <Image
            src="/content/why-the-order-is-non-negotiable.png"
            alt="Why the order of the five pillars is non-negotiable: customers first, then process, then organization, then measurement, then continuous improvement — with continuous improvement as the only legitimate re-entry point"
            width={1672}
            height={941}
            className="w-full h-auto rounded-lg"
          />
        </div>
      </section>

      {/* SECTION 6 — THE WEEKLY RHYTHM */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl text-navy-900 mb-6">
              THE WEEKLY RHYTHM
            </h2>
            <div className="bg-gold-600 h-1 w-24 mx-auto mb-8" />
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              The Bismark Method isn&rsquo;t a workshop series. It&rsquo;s a 16-week operating rhythm that your team lives inside of.
            </p>
          </div>

          <WeeklyRhythmTimeline />

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-gold-600 transition-colors">
              <div className="relative w-full aspect-[4/3] overflow-hidden mb-6">
                <Image
                  src="/images/experienced-female-teacher-who-specializes-in-adult-education-teaches-a-lesson-to-adult-students-2172691007.jpg"
                  alt="Classroom training session"
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="w-20 h-20 bg-navy-900 flex items-center justify-center mb-6">
                <BookOpen className="w-10 h-10 text-gold-600" />
              </div>
              <h3 className="font-display text-xl text-navy-900 mb-2">MONDAY: LEARN</h3>
              <p className="text-gray-700 leading-relaxed">
                In-class training sessions led by 1&ndash;2 Bismark coaches. TLM principles are woven throughout all 16 Mondays. The 5 Pillars are taught in order: Pillars 1 through 4 across the first 8 weeks, Pillar 5 across the final 8. Each session sets up what your apprentices will apply that week.
              </p>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-gold-600 transition-colors">
              <div className="relative w-full aspect-[4/3] overflow-hidden mb-6">
                <Image
                  src="/images/two-workers-wearing-safety-nets-and-white-lab-coats-observing-machinery-and-equipment-in-food-2575453649.jpg"
                  alt="Team working on the floor observing machinery"
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="w-20 h-20 bg-navy-900 flex items-center justify-center mb-6">
                <Layers className="w-10 h-10 text-gold-600" />
              </div>
              <h3 className="font-display text-xl text-navy-900 mb-2">TUESDAY&ndash;THURSDAY: DO</h3>
              <p className="text-gray-700 leading-relaxed">
                Bismark coaches work side-by-side with your apprentices, applying what was taught on Monday directly to your operations. This isn&rsquo;t observation or advising. It&rsquo;s hands-on execution with real-time coaching. Your processes are being redesigned, your measurements rebuilt, your organizational alignment challenged and improved, all by your own people, with our coaches right there.
              </p>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-gold-600 transition-colors">
              <div className="relative w-full aspect-[4/3] overflow-hidden mb-6">
                <Image
                  src="/images/happy-latin-business-man-company-executive-manager-giving-presentation-on-whiteboard-at-employees-2353374135.jpg"
                  alt="Leader giving a presentation to the team"
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="w-20 h-20 bg-navy-900 flex items-center justify-center mb-6">
                <CheckCircle2 className="w-10 h-10 text-gold-600" />
              </div>
              <h3 className="font-display text-xl text-navy-900 mb-2">FRIDAY: OWN</h3>
              <p className="text-gray-700 leading-relaxed">
                Our coaches go home. Your apprentices keep working. They have assignments that feed into the following Monday&rsquo;s session. Work that can only be done independently, by people who are learning to operate without us. Every Friday is a rehearsal for life after the 16 weeks. By the end of the engagement, Friday is just another day, because your team doesn&rsquo;t need us anymore.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7 — THE STAKE */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-4xl md:text-5xl text-navy-900 mb-6">
                THE STAKE&trade;
              </h2>
              <div className="bg-gold-600 h-1 w-24 mx-auto mb-8" />
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-10">
              In the first session of the executive TLM track, your leadership team participates in a structured goal-setting exercise to define the SMART goals that will drive the entire engagement. These aren&rsquo;t aspirational targets. They&rsquo;re specific, measurable, and owned by the people in the room.
            </p>

            <div className="bg-navy-900 text-white p-8 md:p-10 rounded-lg mb-10">
              <h3 className="font-display text-2xl text-gold-600 mb-4">
                WEEK 4: THE STAKE
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Four weeks in, your apprentices present back to the executive team. They&rsquo;ve been inside the operations. They&rsquo;ve seen the data. They&rsquo;ve started mapping the reality. At The Stake, they either confirm the original goals or propose adjusted targets, refining the magnitude or timing based on what they&rsquo;ve discovered. This is the moment the guarantee is anchored. The goals validated at The Stake become the goals Bismark guarantees.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="border-2 border-gray-200 rounded-lg p-8 hover:border-gold-600 transition-colors">
                <h3 className="font-display text-xl text-navy-900 mb-4">
                  WHAT&rsquo;S BEING GUARANTEED
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If the agreed-upon goals from The Stake are not achieved by the end of the engagement, the Bismark coaching leader returns and continues working with your team (consulting fees waived) until those goals are met.*
                </p>
                <p className="text-sm text-gray-500 italic">
                  *The guarantee covers consulting fees only. Standard travel and lodging expenses for on-site coaching remain the client&rsquo;s responsibility.
                </p>
              </div>

              <div className="border-2 border-gray-200 rounded-lg p-8 hover:border-gold-600 transition-colors">
                <h3 className="font-display text-xl text-navy-900 mb-4">
                  WHAT ACTIVATES THE GUARANTEE
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  The guarantee requires that your executive leadership team attends all TLM sessions (or completes make-up sessions within the first 8 weeks). Full participation in TLM is not optional for the guarantee. It&rsquo;s the structural condition that makes sustained results possible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7B — ENGAGING WITH THE 5 PILLARS ALONE */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-4xl md:text-5xl text-navy-900 mb-6">
                ENGAGING WITH THE 5 PILLARS ALONE
              </h2>
              <div className="bg-gold-600 h-1 w-24 mx-auto mb-8" />
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Some clients choose to engage with the 5 Pillars without the TLM executive track. The operational transformation is still real: your apprentices still learn and do, your processes are still redesigned, your team still builds the capability to improve independently.
            </p>

            <div className="bg-navy-900 text-white p-8 md:p-10 rounded-lg mb-8">
              <p className="text-gray-300 leading-relaxed">
                What we can&rsquo;t do in that case is guarantee the results will sustain. Without the leadership foundation, the structural support for long-term performance isn&rsquo;t there. The improvements are genuine, but they&rsquo;re more vulnerable to organizational drift, leadership turnover, and the gravitational pull of old habits.
              </p>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed text-center">
              It&rsquo;s not a lesser engagement. It&rsquo;s an incomplete methodology, by design. The full Bismark Method includes both tracks because that&rsquo;s what it takes to guarantee outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 8 — THE 16-WEEK ARC */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl text-navy-900 mb-6">
              THE 16-WEEK ARC
            </h2>
            <div className="bg-gold-600 h-1 w-24 mx-auto mb-8" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {phases.map((phase, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-gold-600 transition-colors relative"
              >
                <div className="absolute -top-3 -right-3 bg-gold-600 text-navy-900 w-10 h-10 rounded-full flex items-center justify-center font-display text-lg">
                  {phase.number}
                </div>
                <h3 className="font-display text-2xl text-navy-900 mb-2">
                  {phase.title.toUpperCase()}
                </h3>
                <p className="font-display text-sm text-gold-600 mb-4">{phase.weeks}</p>
                <p className="text-gray-700 leading-relaxed">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9 — WHAT YOUR ORGANIZATION NEEDS TO COMMIT */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl text-navy-900 mb-6">
              WHAT YOUR ORGANIZATION NEEDS TO COMMIT
            </h2>
            <div className="bg-gold-600 h-1 w-24 mx-auto mb-8" />
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              The Bismark Method asks more of you than traditional consulting. That&rsquo;s by design, because you&rsquo;re getting more back.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-gold-600 transition-colors">
              <div className="w-20 h-20 bg-navy-900 flex items-center justify-center mb-6">
                <Users className="w-10 h-10 text-gold-600" />
              </div>
              <h3 className="font-display text-xl text-navy-900 mb-4">DEDICATED APPRENTICES</h3>
              <p className="text-gray-700 leading-relaxed">
                At least one full-time resource per improvement goal or process being tackled. These aren&rsquo;t people doing this on the side of their day job. They&rsquo;re fully dedicated to the engagement for 16 weeks. This is non-negotiable. It&rsquo;s what makes the transfer real.
              </p>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-gold-600 transition-colors">
              <div className="w-20 h-20 bg-navy-900 flex items-center justify-center mb-6">
                <Award className="w-10 h-10 text-gold-600" />
              </div>
              <h3 className="font-display text-xl text-navy-900 mb-4">EXECUTIVE PARTICIPATION IN TLM</h3>
              <p className="text-gray-700 leading-relaxed">
                Your senior leadership team commits to the TLM track during the first 8 weeks. This is the condition for the guarantee, but more importantly, it&rsquo;s what ensures your leaders can hold the results your apprentices create.
              </p>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-gold-600 transition-colors">
              <div className="w-20 h-20 bg-navy-900 flex items-center justify-center mb-6">
                <Eye className="w-10 h-10 text-gold-600" />
              </div>
              <h3 className="font-display text-xl text-navy-900 mb-4">ACCESS AND OPENNESS</h3>
              <p className="text-gray-700 leading-relaxed">
                Floor access, system access, data access. We need your apprentices and our coaches to be where the work happens. And we need leadership willing to hear what the data says, even when it&rsquo;s uncomfortable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10 — WHY IT WORKS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-4xl md:text-5xl text-navy-900 mb-6">
                WHY IT WORKS
              </h2>
              <div className="bg-gold-600 h-1 w-24 mx-auto mb-8" />
              <p className="text-lg text-gray-700 leading-relaxed">
                Traditional consulting creates dependency. The Bismark Method creates capability. Here&rsquo;s the structural reason.
              </p>
            </div>

            <div className="space-y-8">
              <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-gold-600 transition-colors">
                <div className="flex items-start gap-6">
                  <div className="font-display text-4xl text-gold-600 flex-shrink-0">01</div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    The knowledge transfers because your people do the work. We don&rsquo;t hand you a playbook. Your apprentices build it: process by process, pillar by pillar, week by week. By Week 16, there&rsquo;s nothing to &ldquo;hand off&rdquo; because nothing was ever taken away.
                  </p>
                </div>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-gold-600 transition-colors">
                <div className="flex items-start gap-6">
                  <div className="font-display text-4xl text-gold-600 flex-shrink-0">02</div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    The results sustain because leadership is transformed first. TLM isn&rsquo;t a nice-to-have bolted onto an operational engagement. It&rsquo;s the foundation that makes everything else hold. Leaders who understand how performance occurs (who can use committed language to shift context) don&rsquo;t need consultants to maintain momentum.
                  </p>
                </div>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-gold-600 transition-colors">
                <div className="flex items-start gap-6">
                  <div className="font-display text-4xl text-gold-600 flex-shrink-0">03</div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    The guarantee is structural, not promotional. We can guarantee results because the method is designed so that results are a natural consequence of the process. When your people learn and do, when your leaders are equipped to lead performance, the outcomes aren&rsquo;t dependent on Bismark being in the room.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 11 — CTA */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl md:text-5xl mb-6">
            SEE WHAT THE BISMARK METHOD LOOKS LIKE IN YOUR OPERATIONS
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            The first step is a 30&ndash;45 minute call where we discuss your operational landscape, confirm mutual fit, and schedule your on-site Walkthrough. It&rsquo;s not a sales call. It&rsquo;s the same rigor in miniature. Come ready to talk about your operations, and we&rsquo;ll come ready to listen.
          </p>

          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            Click below to choose a time that works for you.
          </p>

          <CalendlyButton label="SCHEDULE A MEETING" className="inline-block bg-gold-600 text-navy-900 px-12 py-5 font-display text-xl hover:bg-gold-500 transition-colors" showArrow={false} />

          <p className="text-sm text-gray-400 mt-6 mb-8">
            Prefer email? Reach us at{' '}
            <a
              href="mailto:info@bismarkconsulting.net"
              className="text-gold-600 hover:text-gold-400 underline transition-colors"
            >
              info@bismarkconsulting.net
            </a>
          </p>

          <div>
            <Link
              href="/walkthrough"
              className="text-gold-600 hover:text-gold-500 font-display text-sm tracking-wider inline-flex items-center gap-2"
            >
              Learn more about The Walkthrough
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BismarkMethodPage;
