import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { getRandomPairings } from '../data/industryRotation';
import { insights } from '../data/insights';
import CalendlyButton from '../components/CalendlyButton';
import InsightCard from '../components/InsightCard';

const HomePage = () => {
  const pairings = getRandomPairings(5);

  return (
    <div className="bg-white">

      {/* ===================== SECTION 1 — HERO ===================== */}
      <section className="relative bg-navy-900 text-white py-32 md:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 opacity-90" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-gold-600 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold-600 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl mb-8 tracking-wide leading-tight">
              YOUR OPERATION IS UNDERPERFORMING. YOU ALREADY KNOW IT. THE QUESTION IS WHAT TO DO ABOUT IT.
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Bismark Consulting Group transforms high-volume, transaction-intensive operations — and guarantees the results. We've been doing it since 1998.
            </p>

            <div className="space-y-6 text-gray-300 leading-relaxed mb-10">
              <p>
                You've tried the internal task force. You've brought in the Big Four. You've launched the Lean initiative, the Six Sigma program, the digital transformation. Some of it helped — for a while. Then the consultants left, the momentum faded, and the operation drifted back to where it started. Or worse.
              </p>
              <p>
                That's not a people problem. It's not a technology problem. It's a methodology problem. The approach most firms use — diagnose, recommend, leave — is structurally designed to produce temporary results. Knowledge doesn't transfer. Leadership doesn't shift. And without both, improvement doesn't sustain.
              </p>
              <p>
                The Bismark Method was built to solve all three — simultaneously. Your team learns our methodology by doing real work on your operation, under our guidance. They don't just implement changes — they become the people who know how to design, measure, and continuously improve the operation long after we leave.
              </p>
            </div>

            <div>
              <CalendlyButton label="SCHEDULE A MEETING" className="inline-flex items-center justify-center gap-2 bg-gold-600 text-navy-900 px-8 py-4 font-display text-lg hover:bg-gold-500 transition-colors" />
              <p className="text-sm text-gray-400 mt-4">
                Complimentary. On-site. 3–5 days. No consulting fees.
              </p>
              <p className="text-xs text-gray-500 mt-1">
                * Travel-related expenses apply.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== SECTION 2 — THE PROBLEM WE SOLVE ===================== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="font-display text-4xl md:text-5xl text-navy-900 mb-12">
              THREE REASONS OPERATIONAL TRANSFORMATIONS FAIL. WE DESIGNED A METHOD THAT ELIMINATES ALL THREE.
            </h2>

            <div className="space-y-8 mb-12">
              <div className="border-l-4 border-gold-600 pl-6">
                <h3 className="font-display text-xl text-navy-900 mb-3">THE KNOWLEDGE DOESN'T TRANSFER.</h3>
                <p className="text-navy-800/80 leading-relaxed">
                  Traditional consulting firms send smart people to analyze your operation, build a set of recommendations, and hand them off. Your team gets a deliverable — but not the thinking behind it. When conditions change, they can't adapt the solution because they didn't build it. The expertise walks out the door with the consultants.
                </p>
              </div>

              <div className="border-l-4 border-gold-600 pl-6">
                <h3 className="font-display text-xl text-navy-900 mb-3">THE LEADERSHIP DOESN'T SHIFT.</h3>
                <p className="text-navy-800/80 leading-relaxed">
                  Most engagements treat leadership development and operational improvement as separate workstreams — if they address leadership at all. But operational transformation requires leaders who think differently about how work gets designed, measured, and managed. Without that shift, every improvement is temporary. The operation reverts to its prior state because the management system hasn't changed.
                </p>
              </div>

              <div className="border-l-4 border-gold-600 pl-6">
                <h3 className="font-display text-xl text-navy-900 mb-3">THE IMPROVEMENT DOESN'T SUSTAIN.</h3>
                <p className="text-navy-800/80 leading-relaxed">
                  Even when a consulting engagement produces real gains, those gains typically erode within 12–18 months. The reason is structural: the organization hasn't built the capability to continuously improve on its own. Without that capability — the skills, the systems, the management discipline — entropy wins. Results decay. And the cycle starts over.
                </p>
              </div>
            </div>

            <p className="text-navy-800/80 leading-relaxed mb-8">
              The Bismark Method addresses all three simultaneously — not sequentially, not optionally. That's why we can guarantee results.
            </p>

            <Link
              href="/method"
              className="inline-flex items-center gap-2 text-navy-900 font-display hover:text-gold-600 transition-colors"
            >
              LEARN ABOUT THE BISMARK METHOD
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===================== SECTION 3 — THE METHOD OVERVIEW ===================== */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="font-display text-4xl md:text-5xl mb-6">
              A PROVEN METHODOLOGY. A GUARANTEED OUTCOME.
            </h2>

            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              The Bismark Method is built on two interdependent components working together across a 16-week engagement.
            </p>

            <div className="mb-10">
              <h3 className="font-display text-2xl text-gold-600 mb-4">
                TLM — TRANSFORMATIVE LEADERSHIP MASTERY
              </h3>
              <p className="text-gray-300 leading-relaxed">
                TLM is the foundation — the palm of the hand. It transforms your leadership team into operational architects through six core concepts: The Power of Context, Two Modes of Listening, Integrity vs. Sincerity, 5 Types of Conversations, 5-Step Transformation Model, and 7 Commitments to Breaking Down Barriers. These aren't theoretical frameworks — they're practical tools your leaders apply immediately to how they manage, communicate, and drive accountability across the operation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-10">

              {/* LEFT — heading + list together */}
              <div>
                <h3 className="font-display text-2xl text-gold-600 mb-4">
                  THE FIVE PILLARS
                </h3>
                <ol className="space-y-4">
                  <li className="flex items-start gap-4">
                    <span className="font-display text-2xl text-gold-600 flex-shrink-0">1.</span>
                    <span className="font-display text-xl text-gold-400">Customer Profile</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="font-display text-2xl text-gold-600 flex-shrink-0">2.</span>
                    <span className="font-display text-xl text-gold-400">Process Design & Engineering</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="font-display text-2xl text-gold-600 flex-shrink-0">3.</span>
                    <span className="font-display text-xl text-gold-400">Organizational Strategy</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="font-display text-2xl text-gold-600 flex-shrink-0">4.</span>
                    <span className="font-display text-xl text-gold-400">Measurement</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="font-display text-2xl text-gold-600 flex-shrink-0">5.</span>
                    <span className="font-display text-xl text-gold-400">Continuous Improvement</span>
                  </li>
                </ol>
              </div>

              {/* RIGHT — photo placeholder */}
              <div>
                <div className="relative w-full aspect-[3/4] overflow-hidden">
                  <Image
                    src="/images/stock-watermarked/stock-photo-a-diverse-group-of-smiling-industrial-professionals-collaborates-over-a-laptop-on-the-factory-floor-2455170065.jpg"
                    alt="Bismark coaches working with operations team on the factory floor"
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>

            </div>

            <p className="text-gray-300 leading-relaxed mb-10 mt-10">
              Your team doesn't watch us do this — they learn it by doing it, under our guidance. We call it the apprentice model. Your subject-matter experts work side by side with our consultants, building the skills and systems they'll own permanently. By the end of the engagement, your team doesn't need us. That's the point.
            </p>

            <div className="bg-navy-800 border-l-4 border-gold-600 p-8 mb-10">
              <h4 className="font-display text-xl text-gold-600 mb-3">THE GUARANTEE</h4>
              <p className="text-gray-300 leading-relaxed">
                When a client commits to the full method — TLM plus all five pillars — Bismark guarantees measurable, sustained results. Consulting fees during the guarantee period are waived if targets aren't met. That's not a marketing line. It's the contractual structure of every full engagement.
              </p>
            </div>

            <Link
              href="/method"
              className="inline-flex items-center gap-2 text-gold-600 font-display hover:text-gold-400 transition-colors"
            >
              EXPLORE THE BISMARK METHOD
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===================== SECTION 4 — INDUSTRY ROTATION DISPLAY ===================== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl md:text-5xl text-navy-900 mb-12">
            PROVEN ACROSS INDUSTRIES. APPLIED AT THE PROCESS LEVEL.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12 text-left">
            {pairings.map((pairing, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 p-6 hover:border-gold-600 transition-colors"
              >
                <p className="font-display text-xs tracking-wider text-gray-500 mb-3">
                  {pairing.industry.toUpperCase()}
                </p>
                <p className="font-display text-lg text-navy-900">
                  {pairing.operation}
                </p>
              </div>
            ))}
          </div>

          <p className="text-gray-700 leading-relaxed mb-8 max-w-4xl mx-auto">
            The Bismark Method works because operational excellence follows patterns, not industry boundaries. Claims adjudication in insurance and loan underwriting in banking are variations of the same archetype — authorization and verification under volume and time pressure. We see the pattern. We transform the process. We guarantee the result.
          </p>

          <Link
            href="/industries"
            className="inline-flex items-center gap-2 text-navy-900 font-display hover:text-gold-600 transition-colors"
          >
            EXPLORE ALL INDUSTRIES
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* ===================== SECTION 5 — THE ENGAGEMENT JOURNEY ===================== */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="font-display text-4xl md:text-5xl mb-12">
              FROM FIRST CONVERSATION TO GUARANTEED RESULTS — HERE'S HOW IT WORKS.
            </h2>

            <div className="relative w-full aspect-[16/7] overflow-hidden mb-12">
              <Image
                src="/images/stock-watermarked/stock-photo-the-image-showcases-professionals-engaged-in-a-collaborative-meeting-highlighting-teamwork-2608768835.jpg"
                alt="Professionals collaborating on operational engagement"
                fill
                sizes="(min-width: 1280px) 1024px, 100vw"
                className="object-cover"
              />
            </div>

            {/* Step 1 */}
            <div className="mb-16">
              <p className="font-display text-sm tracking-wider text-gold-600 mb-2">STEP 1</p>
              <h3 className="font-display text-3xl mb-2">THE WALKTHROUGH</h3>
              <p className="font-display text-lg text-gray-400 mb-6">Complimentary. On-site. 3–5 days.</p>

              <div className="space-y-4 text-gray-300 leading-relaxed mb-6">
                <p>
                  The Walkthrough isn't a sales pitch. It's a working engagement — compressed, on-site, and designed to give both sides a clear-eyed view of the operation's current state. Our team spends 3–5 days embedded in your operation: observing workflows, interviewing frontline staff and leadership, analyzing process data, and mapping how work actually moves through the system.
                </p>
                <p>
                  At the end, we present what we found — not a generic deck, but a specific, evidence-based assessment of where your operation is underperforming and why. We quantify the opportunities. We identify the root causes. And we outline what a full engagement would look like if you decide to move forward.
                </p>
                <p>
                  There's no obligation. Many of our longest client relationships started with a Walkthrough that surprised both sides — the operation had more opportunity than anyone expected.
                </p>
              </div>

              <p className="text-sm text-gray-500 mb-6">
                Consulting fees waived. Travel-related expenses apply.
              </p>

              <div className="bg-navy-800 p-6 mb-6">
                <p className="font-display text-sm tracking-wider text-gold-600 mb-3">WHO IT'S FOR:</p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-gold-600 rounded-full mt-2 flex-shrink-0" />
                    <span>Operations leaders who suspect their operation is underperforming but lack a clear diagnosis</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-gold-600 rounded-full mt-2 flex-shrink-0" />
                    <span>Executives evaluating whether a full transformation engagement is warranted</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-gold-600 rounded-full mt-2 flex-shrink-0" />
                    <span>Organizations that have tried other approaches and want to see a fundamentally different methodology in action</span>
                  </li>
                </ul>
              </div>

              <Link
                href="/walkthrough"
                className="inline-flex items-center gap-2 text-gold-600 font-display hover:text-gold-400 transition-colors"
              >
                LEARN MORE ABOUT THE WALKTHROUGH
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Step 2 */}
            <div className="mb-16">
              <p className="font-display text-sm tracking-wider text-gold-600 mb-2">STEP 2</p>
              <h3 className="font-display text-3xl mb-6">DISCOVERY OR DIRECT-TO-IMPLEMENTATION</h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white text-navy-900 border-2 border-gray-200 p-6">
                  <h4 className="font-display text-xl text-navy-900 mb-3">DISCOVERY PHASE</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    A deeper diagnostic engagement — typically 2–4 weeks — where we quantify opportunities, map process architectures in detail, and build a comprehensive engagement proposal. Discovery is recommended when the operation is large, complex, or spans multiple sites. It produces the baseline data and transformation roadmap that the full engagement is built on.
                  </p>
                </div>
                <div className="bg-white text-navy-900 border-2 border-gray-200 p-6">
                  <h4 className="font-display text-xl text-navy-900 mb-3">RAPID DEPLOYMENT</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    For operations where the Walkthrough findings are clear enough to move directly into implementation. The scope, targets, and engagement structure are defined based on Walkthrough data, and the 16-week engagement begins without an intermediate discovery phase. This path is common for focused, single-process transformations.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div>
              <p className="font-display text-sm tracking-wider text-gold-600 mb-2">STEP 3</p>
              <h3 className="font-display text-3xl mb-2">THE ENGAGEMENT — WITH GUARANTEE</h3>
              <p className="font-display text-lg text-gray-400 mb-6">16 weeks. Four phases. Four weeks each.</p>

              <div className="space-y-6 mb-8">
                <div className="border-l-4 border-gold-600 pl-6">
                  <p className="font-display text-lg text-gold-600 mb-1">PHASE 1 — FOUNDATION</p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Baseline measurement, team formation, TLM launch, and initial process mapping. Your team begins learning the methodology immediately — not in a classroom, but on the operation floor.
                  </p>
                </div>
                <div className="border-l-4 border-gold-600 pl-6">
                  <p className="font-display text-lg text-gold-600 mb-1">PHASE 2 — DESIGN</p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Process redesign across all five pillars. Customer profiles are built, processes are re-engineered, organizational structures are aligned, measurement systems are created, and continuous improvement protocols are established.
                  </p>
                </div>
                <div className="border-l-4 border-gold-600 pl-6">
                  <p className="font-display text-lg text-gold-600 mb-1">PHASE 3 — IMPLEMENTATION</p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    New processes go live. Your team leads the implementation with our consultants in a coaching role. Results begin showing against baseline metrics. Management operating systems are activated.
                  </p>
                </div>
                <div className="border-l-4 border-gold-600 pl-6">
                  <p className="font-display text-lg text-gold-600 mb-1">PHASE 4 — SUSTAINMENT</p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Results are validated, continuous improvement cycles are tested, and your team demonstrates independent ownership of the new operation. By the end of Phase 4, your team runs the operation — and the methodology — without us.
                  </p>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed">
                When a client commits to TLM and all five pillars, Bismark guarantees the results. If targets aren't met during the guarantee period, consulting fees are waived. That guarantee is contractual — not promotional. It exists because the method works, and because we're willing to stake our fees on it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== SECTION 6 — WHY BISMARK ===================== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="font-display text-4xl md:text-5xl text-navy-900 mb-12">
              WHAT MAKES THIS DIFFERENT FROM EVERY OTHER CONSULTING ENGAGEMENT YOU'VE BEEN THROUGH.
            </h2>

            <div className="space-y-8">
              <div className="border-l-4 border-gold-600 pl-6">
                <h3 className="font-display text-xl text-navy-900 mb-3">WE DON'T DELIVER A PLAYBOOK AND LEAVE.</h3>
                <p className="text-gray-700 leading-relaxed">
                  Your team builds the playbook — under our guidance, using our methodology, on your operation. They learn process design, measurement, and continuous improvement by doing it. When we leave, the capability stays because your people own it.
                </p>
              </div>

              <div className="border-l-4 border-gold-600 pl-6">
                <h3 className="font-display text-xl text-navy-900 mb-3">WE DON'T SEPARATE LEADERSHIP DEVELOPMENT FROM OPERATIONAL WORK.</h3>
                <p className="text-gray-700 leading-relaxed">
                  TLM isn't a workshop bolted onto the side of a process engagement. It's the foundation that makes the process work stick. Leaders learn to think differently about context, accountability, and communication — and they apply it in real time to the transformation they're leading.
                </p>
              </div>

              <div className="border-l-4 border-gold-600 pl-6">
                <h3 className="font-display text-xl text-navy-900 mb-3">WE DON'T HEDGE ON OUTCOMES.</h3>
                <p className="text-gray-700 leading-relaxed">
                  When a client commits to the full method, we guarantee the results — contractually. Consulting fees during the guarantee period are waived if targets aren't met. We can make that guarantee because the method is proven, and because TLM ensures your leadership team has the capability to sustain what we build together.
                </p>
              </div>

              <div className="border-l-4 border-gold-600 pl-6">
                <h3 className="font-display text-xl text-navy-900 mb-3">WE DON'T NEED YOUR INDUSTRY EXPERIENCE TO TRANSFORM YOUR OPERATION.</h3>
                <p className="text-gray-700 leading-relaxed">
                  Operational excellence follows patterns, not industry boundaries. The methodology we apply to claims adjudication in insurance is structurally the same as what we apply to loan underwriting in banking or order fulfillment in logistics. Your subject-matter experts bring the domain knowledge. We bring the methodology. Together, we redesign the operation.
                </p>
              </div>

              <div className="border-l-4 border-gold-600 pl-6">
                <h3 className="font-display text-xl text-navy-900 mb-3">WE PROVE IT BEFORE YOU COMMIT.</h3>
                <p className="text-gray-700 leading-relaxed">
                  The Walkthrough is a complimentary, on-site engagement — 3–5 days of real analysis on your operation. No pitch decks, no generic frameworks. You see our rigor, our methodology, and our findings before you decide whether to engage. Most clients tell us it's the most thorough vendor evaluation they've ever experienced.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== SECTION 7 — WHO WE WORK WITH ===================== */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl md:text-5xl mb-8">
            BUILT FOR LEADERS WHO OWN OPERATIONAL OUTCOMES.
          </h2>

          <p className="text-gray-300 leading-relaxed mb-6 max-w-4xl mx-auto">
            The Bismark Method is designed for senior operations leaders — VPs, SVPs, COOs, and division heads — who are directly accountable for the performance of high-volume, transaction-intensive operations. These are leaders who know their operation should be performing better, who have the authority to commit to a transformation, and who are willing to invest in building lasting capability rather than buying temporary fixes.
          </p>
          <p className="text-gray-300 leading-relaxed max-w-4xl mx-auto">
            Our clients have typically cycled through internal initiatives, Lean/Six Sigma programs, or traditional consulting engagements — and found that results either never materialized or didn't sustain. They're looking for something structurally different. That's what the Bismark Method delivers.
          </p>
        </div>
      </section>

      {/* ===================== SECTION 8 — INSIGHTS ===================== */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl md:text-5xl text-navy-900 mb-12">
            INSIGHTS
          </h2>

          <div className="space-y-8">
            {insights.map((article) => (
              <InsightCard key={article.slug} article={article} />
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 text-gold-600 font-display hover:text-gold-400 transition-colors"
            >
              View all insights
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===================== SECTION 9 — CTA ===================== */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-5xl mb-8">
              SEE WHAT WE SEE. SCHEDULE YOUR WALKTHROUGH.
            </h2>

            <p className="text-gray-300 leading-relaxed mb-6">
              The best way to evaluate the Bismark Method isn't a brochure or a reference call — it's watching us work on your operation. The Walkthrough is a complimentary, on-site engagement where our team spends 3–5 days embedded in your operation, analyzing processes, interviewing your people, and identifying quantified opportunities for improvement.
            </p>
            <p className="text-gray-300 leading-relaxed mb-10">
              There's no obligation to move forward. But every client who has engaged us started here — and most will tell you the Walkthrough alone changed how they saw their operation.
            </p>

            <CalendlyButton label="SCHEDULE A MEETING" className="inline-flex items-center justify-center gap-2 bg-gold-600 text-navy-900 px-8 py-4 font-display text-lg hover:bg-gold-500 transition-colors" />

            <p className="text-gray-400 text-sm mt-6">
              Prefer email?{' '}
              <a href="mailto:info@bismarkconsulting.net" className="text-gold-600 hover:text-gold-400 underline transition-colors">
                info@bismarkconsulting.net
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* ===================== SECTION 10 — FOOTER (site-wide component) ===================== */}
    </div>
  );
};

export default HomePage;
