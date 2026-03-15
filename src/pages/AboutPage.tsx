import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="bg-[#0a1628]">
      {/* SECTION 1 — PAGE HERO */}
      <section className="relative bg-navy-900 text-white py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 opacity-90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-5xl md:text-7xl mb-8 tracking-wide">
            ABOUT BISMARK CONSULTING
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl leading-relaxed">
            We didn&rsquo;t start with a methodology. We started with a problem no one in consulting wanted to talk about.
          </p>
        </div>
      </section>

      {/* SECTION 2 — HOW WE GOT HERE */}
      <section className="py-20 border-t border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-display text-sm text-gold-600 tracking-wider mb-4">OUR ORIGIN</p>
          <h2 className="font-display text-4xl md:text-5xl text-white mb-12">
            HOW WE GOT HERE
          </h2>

          <div className="max-w-3xl space-y-6 text-lg text-gray-300 leading-relaxed">
            <p>
              In 1998, Luis Telleria-Xucla founded Bismark Consulting as a contractor-for-hire, providing hands-on operational expertise to companies that needed help running their operations better. He worked inside gold mines in Peru, inside financial services companies processing millions of transactions, inside food production facilities and energy utilities and tire manufacturing plants. He worked in the United States, Canada, and South Africa. He worked across more industries than most consultants see in a career &mdash; not because he was chasing breadth, but because the problems kept looking the same.
            </p>
            <p>
              The throughput problem at the mine looked like the turnaround-time problem at the insurer. The supply chain mess at the food company looked like the cost structure problem at the bank. Different industries, different jargon, different org charts &mdash; but the same operational patterns underneath, and the same reason improvement efforts kept failing.
            </p>
            <p>
              The consultants would leave. The results would fade. The client would call someone new.
            </p>
            <p>
              Luis spent nearly a decade watching this cycle repeat &mdash; sometimes from the outside, sometimes from inside engagements where he could see the decay beginning before the final report was even delivered. The insight that eventually became The Bismark Method didn&rsquo;t arrive as a single moment. It accumulated across hundreds of operations, on three continents, in industries that had nothing in common except the way they broke down.
            </p>
            <p>
              By 2007, Luis had seen enough. He rebuilt Bismark Consulting from the ground up around a single premise: if the client&rsquo;s team doesn&rsquo;t learn to do the work themselves, the results will never survive the consultant&rsquo;s departure. That premise became The Bismark Method &mdash; a structured engagement where the consultant&rsquo;s job isn&rsquo;t to fix the operation but to make the client&rsquo;s own people capable of fixing it, sustaining it, and improving it independently.
            </p>
            <p>
              It&rsquo;s the reason Bismark still guarantees results nearly two decades later. Not because the methodology is clever &mdash; but because the people who do the work are the people who stay.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 — WHAT WE BELIEVE */}
      <section className="py-20 border-t border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-display text-sm text-gold-600 tracking-wider mb-4">OUR PHILOSOPHY</p>
          <h2 className="font-display text-4xl md:text-5xl text-white mb-12">
            WHAT WE BELIEVE
          </h2>

          <div className="max-w-3xl space-y-6 text-lg text-gray-300 leading-relaxed">
            <p>
              Most consulting firms sell expertise. We sell transfer of expertise. The distinction matters more than it sounds like it should.
            </p>
            <p>
              When a consulting firm sells expertise, the engagement is structured around the consultant&rsquo;s knowledge. The consultant diagnoses, designs, recommends, and sometimes implements. The client receives deliverables &mdash; reports, playbooks, process maps, org charts. When the engagement ends, the client has a shelf full of documents and a team that watched someone else do the work.
            </p>
            <p>
              When we sell transfer of expertise, the engagement is structured around the client&rsquo;s people. Our coaches work alongside dedicated client resources &mdash; apprentices &mdash; who learn the methodology by applying it to their own operation, on their own processes, in real time. By the end of the engagement, the client doesn&rsquo;t just have improved results. They have the people who produced those results, who understand why they work, and who can continue improving without us.
            </p>
            <p>
              This isn&rsquo;t a philosophical preference. It&rsquo;s a structural commitment. It&rsquo;s why the engagement is 16 weeks, not 16 months. It&rsquo;s why we require dedicated apprentices, not part-time participation. It&rsquo;s why we ask leadership to commit to Transformative Leadership Mastery as the condition for our guarantee. Every design decision in The Bismark Method exists to answer the same question: will this still be working two years after we leave?
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4 — MEET THE FOUNDER */}
      <section className="py-20 border-t border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-display text-sm text-gold-600 tracking-wider mb-4">LEADERSHIP</p>
          <h2 className="font-display text-4xl md:text-5xl text-white mb-8">
            MEET THE FOUNDER
          </h2>

          <div className="mb-12">
            <h3 className="font-display text-3xl text-white mb-2">
              Luis Telleria-Xucla
            </h3>
            <p className="text-gold-600 font-display text-lg">
              Founder &amp; Managing Director
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Headshot Placeholder */}
            <div className="flex items-center justify-center border-2 border-navy-700 bg-navy-800 rounded-lg" style={{ minHeight: '500px', aspectRatio: '4/5' }}>
              <p className="text-gray-500 font-display text-sm tracking-wider text-center px-8">
                [Photo &mdash; Luis Telleria-Xucla]
              </p>
            </div>

            {/* Bio Copy */}
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                Luis was born in Nicaragua and raised in the United States. He studied Chemical Engineering at Washington University in St. Louis &mdash; a discipline that taught him to think in systems, measure what matters, and treat every process as something that can be understood, modeled, and improved.
              </p>
              <p>
                He started his career in operations, not consulting. That matters. Before he ever advised a client, he worked inside the operations themselves &mdash; learning how things actually run, where they actually break, and why the people closest to the work usually know more about both than anyone in a conference room.
              </p>
              <p>
                When he founded Bismark Consulting in 1998, he brought that orientation with him. Over the next decade, he worked across mining, financial services, energy, chemicals, food production, insurance, banking, automotive, metals, pulp and paper, and contract electronics &mdash; in the United States, Canada, Peru, and South Africa. He is fluent in English and Spanish and conversationally proficient in Portuguese, which has allowed him to work directly with teams across Latin America, North America, and Africa without translators or intermediaries.
              </p>
              <p>
                That range of experience is what made The Bismark Method possible. The patterns Luis saw repeating across industries &mdash; the same failure modes, the same structural gaps, the same reasons results didn&rsquo;t sustain &mdash; are what the methodology was built to solve. He didn&rsquo;t design a framework and look for places to apply it. He watched operations fail in the same ways for a decade, then built a framework around what he&rsquo;d learned about why.
              </p>
              <p>
                Luis leads every Monday classroom session in every Bismark engagement and frequently leads the Transformative Leadership Mastery executive track as well. He remains the firm&rsquo;s lead practitioner and the architect of every client&rsquo;s transformation plan.
              </p>
            </div>
          </div>

          {/* Credentials Block */}
          <div className="mt-12 pt-8 border-t border-navy-700 max-w-3xl">
            <ul className="space-y-2 text-sm text-gray-400 tracking-wide">
              <li>BS Chemical Engineering, Washington University in St. Louis</li>
              <li>Certified LEAN Trainer</li>
              <li>Six Sigma Black Belt</li>
              <li>Fluent: English, Spanish | Conversant: Portuguese</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 5 — THE TEAM BEHIND THE METHOD */}
      <section className="py-20 border-t border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-display text-sm text-gold-600 tracking-wider mb-4">OUR TEAM</p>
          <h2 className="font-display text-4xl md:text-5xl text-white mb-12">
            THE TEAM BEHIND THE METHOD
          </h2>

          <div className="max-w-3xl space-y-6 text-lg text-gray-300 leading-relaxed">
            <p>
              Luis doesn&rsquo;t work alone. But he doesn&rsquo;t hire the way most consulting firms hire, either.
            </p>
            <p>
              Every Bismark coach has been handpicked by Luis &mdash; selected not just for technical ability but for the same orientation toward operations that defines the firm. Some are experienced practitioners who are the best in their respective industries. Others are former apprentices &mdash; people who went through The Bismark Method as client resources, proved they could sustain and build on the results, and were recruited by Luis to coach the next generation of clients.
            </p>
            <p>
              That second group is worth pausing on. When a former apprentice joins the Bismark coaching team, they bring something no amount of consulting experience can replicate: they&rsquo;ve been on the other side. They know what it feels like to be the person inside the operation learning the method for the first time, because they were that person. They know which moments are hard, which concepts click slowly, and which breakthroughs change how someone sees their own work. That lived experience makes them unusually effective coaches &mdash; and their presence on the team is one of the strongest proof points that the methodology works exactly as designed.
            </p>
            <p>
              This team structure is what allows Bismark to move fast. When a client is ready to engage, we can have a full coaching team on-site within two weeks &mdash; in any industry, in any geography we serve. That speed isn&rsquo;t about having a bench of generalists on standby. It&rsquo;s about having a team that understands the operational patterns deeply enough to walk into an unfamiliar industry and know what they&rsquo;re looking at, because the patterns are the same patterns they&rsquo;ve been coaching against for years.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 6 — TESTIMONIAL PLACEHOLDER */}
      <section className="py-16 border-t border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-2 border-dashed border-navy-700 rounded-lg py-16 px-8">
            <p className="text-gray-500 text-center font-display text-sm tracking-wider">
              [Testimonial &mdash; to be added]
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 7 — CALL TO ACTION */}
      <section className="py-20 bg-navy-900 border-t border-navy-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl md:text-5xl text-white mb-6">
            SEE IT FOR YOURSELF
          </h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto">
            The best way to understand how we work is to experience it firsthand. Our complimentary Walkthrough puts Bismark coaches on-site in your operation for 3&ndash;5 days &mdash; long enough to show you what we see, how we think, and what&rsquo;s possible.
          </p>

          <Link
            to="/walkthrough"
            className="inline-flex items-center gap-2 bg-gold-600 text-navy-900 px-12 py-5 font-display text-xl hover:bg-gold-500 transition-colors"
          >
            Learn About the Walkthrough
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
