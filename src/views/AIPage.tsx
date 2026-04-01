import Link from 'next/link';
import { ArrowRight, Shield, Eye, Zap } from 'lucide-react';

export default function AIPage() {
  return (
    <div className="bg-white">
      {/* SECTION 1 — HERO */}
      <section className="relative bg-navy-900 text-white py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 opacity-90" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-display text-sm text-gold-600 tracking-wider mb-6">COMING 2026</p>
          <h1 className="font-display text-5xl md:text-6xl mb-6 tracking-wide">
            THE ENGAGEMENT ENDS. THE RESULTS SHOULDN&rsquo;T.
          </h1>
          <div className="bg-gold-600 h-1 w-24 mx-auto mb-8" />
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Bismark is developing a proprietary AI system designed for one purpose: to protect and sustain the operational gains our clients achieve during a Bismark Method engagement &mdash; long after our team has left the building.
          </p>
        </div>
      </section>

      {/* SECTION 2 — THE SUSTAINABILITY GAP */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl md:text-5xl text-navy-900 mb-6">
            THE SUSTAINABILITY GAP
          </h2>
          <div className="bg-gold-600 h-1 w-24 mb-8" />
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Every consulting engagement faces the same risk: results that erode after the consultants leave. Processes drift. Habits revert. The discipline that drove the improvement slowly dissolves under the pressure of day-to-day operations.
            </p>
            <p>
              We&rsquo;ve spent over two decades studying exactly how and why this happens. Now we&rsquo;re building something to make sure it doesn&rsquo;t.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 — WHAT WE CAN TELL YOU */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl md:text-5xl mb-6">
            WHAT WE CAN TELL YOU
          </h2>
          <div className="bg-gold-600 h-1 w-24 mx-auto mb-12" />

          <div className="grid md:grid-cols-3 gap-8">
            <div className="border border-navy-700 p-8 text-center">
              <Shield className="w-10 h-10 text-gold-600 mx-auto" />
              <h3 className="font-display text-xl text-white mt-4 mb-3">BUILT TO PROTECT</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Designed specifically to safeguard the operational improvements achieved through the Bismark Method.
              </p>
            </div>

            <div className="border border-navy-700 p-8 text-center">
              <Eye className="w-10 h-10 text-gold-600 mx-auto" />
              <h3 className="font-display text-xl text-white mt-4 mb-3">ALWAYS WATCHING</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Continuous oversight of the processes, habits, and standards that sustain performance &mdash; so nothing slips quietly.
              </p>
            </div>

            <div className="border border-navy-700 p-8 text-center">
              <Zap className="w-10 h-10 text-gold-600 mx-auto" />
              <h3 className="font-display text-xl text-white mt-4 mb-3">YOUR OPERATION, YOUR SYSTEM</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Not a generic platform. An AI system configured to the specific reality of your operation after a Bismark engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — TIMELINE HINT */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl md:text-5xl text-navy-900 mb-6">
            FIRST DEPLOYMENT: LATE 2026
          </h2>
          <div className="bg-gold-600 h-1 w-24 mx-auto mb-8" />
          <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
            We&rsquo;re currently in active development with a select group of existing Bismark clients. When we&rsquo;re ready, you&rsquo;ll hear about it here first. In the meantime, the best way to prepare for what&rsquo;s coming is to get the foundation right.
          </p>
        </div>
      </section>

      {/* SECTION 5 — CTA */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl md:text-5xl mb-6">
            THE FOUNDATION COMES FIRST
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-10">
            Every Bismark AI deployment begins with the Bismark Method. The Walkthrough is where that journey starts &mdash; a complimentary 3&ndash;5 day on-site assessment of your operation.
          </p>
          <Link
            href="/schedule"
            className="inline-flex items-center gap-2 bg-gold-600 text-navy-900 px-12 py-5 font-display text-xl hover:bg-gold-500 transition-colors"
          >
            Schedule a Walkthrough
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
