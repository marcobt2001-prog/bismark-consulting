import { Link } from 'react-router-dom';
import { ArrowRight, Users, Cog, Building2, BarChart3, TrendingUp } from 'lucide-react';

const BismarkMethodPage = () => {
  const principles = [
    {
      icon: Users,
      number: '01',
      title: 'Customer Profile',
      description: 'Generate Precise Generalized Information (PGI) about how your customers interact with your processes. We map every touchpoint, decision point, and pain point to create a comprehensive understanding of the customer journey and process interactions.',
      keyPoints: [
        'Deep customer journey mapping',
        'Process interaction analysis',
        'Pain point identification',
        'Touchpoint optimization'
      ]
    },
    {
      icon: Cog,
      number: '02',
      title: 'Process Design & Engineering',
      description: 'Transform your subject matter experts (SMEs) into process designers. We teach your team how to engineer processes that are efficient, scalable, and aligned with customer needs—not just document what exists today.',
      keyPoints: [
        'SME empowerment and training',
        'Process re-engineering methodology',
        'Scalability frameworks',
        'Customer-aligned design'
      ]
    },
    {
      icon: Building2,
      number: '03',
      title: 'Organizational Strategy',
      description: 'Modify your organizational structure to match your optimized process design. Structure follows strategy, and strategy follows process. We align teams, roles, and reporting structures to support the new operating model.',
      keyPoints: [
        'Org structure optimization',
        'Role clarity and definition',
        'Team alignment strategies',
        'Reporting structure redesign'
      ]
    },
    {
      icon: BarChart3,
      number: '04',
      title: 'Measurement',
      description: 'Create a management operating system with the right metrics at every level. We establish leading and lagging indicators that drive decision-making and enable real-time performance management.',
      keyPoints: [
        'Leading indicator development',
        'Performance dashboards',
        'Real-time visibility',
        'Data-driven decision frameworks'
      ]
    },
    {
      icon: TrendingUp,
      number: '05',
      title: 'Continuous Improvement',
      description: 'Separate signals from noise to sustain results over time. We implement governance structures and improvement methodologies that ensure gains are maintained and compounded year over year.',
      keyPoints: [
        'Governance frameworks',
        'Improvement methodologies',
        'Sustainment strategies',
        'Results amplification'
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
              OUR METHODOLOGY
            </span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl mb-6 tracking-wide">
            THE BISMARK METHOD™
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A systematic approach to transforming operational teams into high-performing,
            self-sustaining organizations that deliver measurable, guaranteed results.
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-5xl text-navy-900 mb-6">
              FIVE PRINCIPLES THAT TRANSFORM OPERATIONS
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              The Bismark Method isn't just consulting—it's a comprehensive transformation
              framework built on five interconnected principles. Each principle builds on the
              last, creating a foundation for sustainable operational excellence.
            </p>
            <div className="bg-gold-600 h-1 w-24 mx-auto" />
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {principles.map((principle, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 rounded-lg p-8 md:p-12 hover:border-gold-600 transition-colors duration-300"
              >
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="w-20 h-20 bg-navy-900 rounded-lg flex items-center justify-center">
                        <principle.icon className="w-10 h-10 text-gold-600" />
                      </div>
                      <div className="absolute -top-3 -right-3 bg-gold-600 text-navy-900 w-10 h-10 rounded-full flex items-center justify-center font-display text-lg">
                        {principle.number}
                      </div>
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="font-display text-3xl text-navy-900 mb-4">
                      {principle.title}
                    </h3>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      {principle.description}
                    </p>

                    <div className="grid md:grid-cols-2 gap-4">
                      {principle.keyPoints.map((point, idx) => (
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
        </div>
      </section>

      {/* Learn and Do Approach */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-4xl md:text-5xl mb-6">
                THE LEARN AND DO APPROACH
              </h2>
              <div className="bg-gold-600 h-1 w-24 mx-auto mb-8" />
              <p className="text-xl text-gray-300 leading-relaxed">
                We don't just advise—we transform alongside you
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-navy-800 p-8 rounded-lg">
                <h3 className="font-display text-2xl text-gold-600 mb-4">LEARN</h3>
                <p className="text-gray-300 leading-relaxed">
                  Your team learns the Bismark Method principles through intensive training
                  and workshops. We transfer knowledge, not just implement solutions. Your
                  people become the experts.
                </p>
              </div>

              <div className="bg-navy-800 p-8 rounded-lg">
                <h3 className="font-display text-2xl text-gold-600 mb-4">DO</h3>
                <p className="text-gray-300 leading-relaxed">
                  Immediate application to real operational challenges. We work side-by-side
                  with your team to implement changes, measure results, and adjust in real-time.
                  Theory becomes practice.
                </p>
              </div>
            </div>

            <div className="bg-navy-800 p-8 rounded-lg text-center">
              <h3 className="font-display text-3xl mb-4">16-WEEK TRANSFORMATION PROGRAMS</h3>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Our standard engagement is a 16-week intensive transformation where your team
                learns and applies all five principles. By the end, you have both the results
                and the capability to sustain and improve them independently.
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-gold-600 rounded-full" />
                  <span>Week 1-4: Discovery & Design</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-gold-600 rounded-full" />
                  <span>Week 5-8: Implementation</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-gold-600 rounded-full" />
                  <span>Week 9-12: Optimization</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-gold-600 rounded-full" />
                  <span>Week 13-16: Sustainment</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-5xl text-navy-900 mb-6">
              WHY THE BISMARK METHOD WORKS
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-12">
              Traditional consulting creates dependency. The Bismark Method creates capability.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg border-2 border-gray-200">
                <div className="text-4xl font-display text-gold-600 mb-3">01</div>
                <h3 className="font-display text-xl text-navy-900 mb-2">SYSTEMATIC</h3>
                <p className="text-gray-600">
                  Every principle connects to the next, creating a comprehensive system rather
                  than isolated improvements.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border-2 border-gray-200">
                <div className="text-4xl font-display text-gold-600 mb-3">02</div>
                <h3 className="font-display text-xl text-navy-900 mb-2">TRANSFERABLE</h3>
                <p className="text-gray-600">
                  Your team gains the knowledge and skills to continue improving long after
                  we're gone.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border-2 border-gray-200">
                <div className="text-4xl font-display text-gold-600 mb-3">03</div>
                <h3 className="font-display text-xl text-navy-900 mb-2">MEASURABLE</h3>
                <p className="text-gray-600">
                  Results are quantified at every stage. We guarantee outcomes because we can
                  measure them.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl md:text-5xl mb-6">
            READY TO TRANSFORM YOUR OPERATIONS?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Experience the Bismark Method firsthand with a complimentary walkthrough at your site.
          </p>
          <Link
            to="/walkthrough"
            className="inline-flex items-center gap-2 bg-gold-600 text-navy-900 px-8 py-4 font-display text-lg hover:bg-gold-500 transition-colors"
          >
            SCHEDULE A WALKTHROUGH
            <ArrowRight className="w-5 h-5" />
          </Link>
          <p className="text-sm text-gray-400 mt-6">
            See why our clients call it "the most rigorous vendor interview they've ever experienced."
          </p>
        </div>
      </section>
    </div>
  );
};

export default BismarkMethodPage;
