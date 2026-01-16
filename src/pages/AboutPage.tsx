import { Award, TrendingUp, CheckCircle, Lightbulb, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            ABOUT BISMARK CONSULTING
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Since 1998, we've been transforming service industry operations through a unique approach that guarantees sustainable results.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-navy-900 mb-12 text-center">
            OUR STORY
          </h2>
          <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Bismark Consulting was founded in 1998 by Luis Telleria as a contractor-for-hire, providing operational expertise to service industry companies. Through years of traditional consulting work, Luis recognized a critical flaw in the industry: results don't sustain after consultants leave.
            </p>
            <p>
              In 2007, everything changed. Luis reinvented Bismark Consulting with the creation of <span className="font-semibold text-navy-900">The Bismark Method™</span>, a revolutionary "Learn and Do" methodology that transforms clients into experts rather than creating dependency on consultants.
            </p>
            <p>
              Focusing primarily on insurance, banking, and response centers, Bismark Consulting runs intensive 16-week programs that don't just deliver results—they transfer knowledge. With over 1,600 apprentices trained and more than $1 billion saved across 80+ clients, our track record speaks for itself.
            </p>
            <p className="font-semibold text-navy-900 text-xl">
              The key differentiator? Our clients sustain and build upon their results long after we're gone, without consultant dependency.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-navy-900 mb-16 text-center">
            OUR JOURNEY
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* 1998 */}
            <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-gold-600 hover:shadow-xl transition-shadow">
              <div className="text-4xl font-display font-bold text-gold-600 mb-4">1998</div>
              <h3 className="font-display text-2xl font-bold text-navy-900 mb-3">Founded</h3>
              <p className="text-gray-700">
                Luis Telleria establishes Bismark Consulting as a contractor-for-hire, providing operational expertise to service industries.
              </p>
            </div>

            {/* 2007 */}
            <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-gold-600 hover:shadow-xl transition-shadow">
              <div className="text-4xl font-display font-bold text-gold-600 mb-4">2007</div>
              <h3 className="font-display text-2xl font-bold text-navy-900 mb-3">Reinvention</h3>
              <p className="text-gray-700">
                The Bismark Method™ is created, revolutionizing consulting with a "Learn and Do" approach that ensures sustainable results.
              </p>
            </div>

            {/* 2015 */}
            <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-gold-600 hover:shadow-xl transition-shadow">
              <div className="text-4xl font-display font-bold text-gold-600 mb-4">2015</div>
              <h3 className="font-display text-2xl font-bold text-navy-900 mb-3">Major Milestone</h3>
              <p className="text-gray-700">
                Surpassed $1 billion in total savings achieved across all client engagements, validating our methodology.
              </p>
            </div>

            {/* 2025 */}
            <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-gold-600 hover:shadow-xl transition-shadow">
              <div className="text-4xl font-display font-bold text-gold-600 mb-4">2025</div>
              <h3 className="font-display text-2xl font-bold text-navy-900 mb-3">Today</h3>
              <p className="text-gray-700">
                1,600+ apprentices trained, 80+ clients served, and over 20 years of proven, sustainable results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-navy-900 mb-16 text-center">
            WHAT SETS US APART
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Results Guaranteed */}
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gold-600 text-white rounded-full mb-6 group-hover:scale-110 transition-transform">
                <Shield className="w-10 h-10" />
              </div>
              <h3 className="font-display text-2xl font-bold text-navy-900 mb-4">
                Results Guaranteed
              </h3>
              <p className="text-gray-700">
                We guarantee results, and your team sustains improvements long after our engagement ends.
              </p>
            </div>

            {/* Learn and Do */}
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gold-600 text-white rounded-full mb-6 group-hover:scale-110 transition-transform">
                <Lightbulb className="w-10 h-10" />
              </div>
              <h3 className="font-display text-2xl font-bold text-navy-900 mb-4">
                Learn and Do
              </h3>
              <p className="text-gray-700">
                Our 16-week programs train your team as process experts through hands-on learning and doing.
              </p>
            </div>

            {/* Sustainable Change */}
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gold-600 text-white rounded-full mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-10 h-10" />
              </div>
              <h3 className="font-display text-2xl font-bold text-navy-900 mb-4">
                Sustainable Change
              </h3>
              <p className="text-gray-700">
                No consultant dependency. Your team owns the process and continues to improve independently.
              </p>
            </div>

            {/* Proven Methodology */}
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gold-600 text-white rounded-full mb-6 group-hover:scale-110 transition-transform">
                <Award className="w-10 h-10" />
              </div>
              <h3 className="font-display text-2xl font-bold text-navy-900 mb-4">
                Proven Methodology
              </h3>
              <p className="text-gray-700">
                80+ clients and significant measurable results demonstrate the power of The Bismark Method™.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            {/* Years in Business */}
            <div>
              <div className="text-6xl md:text-7xl font-display font-bold text-gold-600 mb-4">
                20+
              </div>
              <div className="text-2xl font-semibold">Years in Business</div>
              <p className="text-gray-300 mt-2">
                Delivering sustainable results since 1998
              </p>
            </div>

            {/* Saved by Clients */}
            <div>
              <div className="text-6xl md:text-7xl font-display font-bold text-gold-600 mb-4">
                $1B+
              </div>
              <div className="text-2xl font-semibold">Saved by Clients</div>
              <p className="text-gray-300 mt-2">
                Total documented savings across all engagements
              </p>
            </div>

            {/* Apprentices Trained */}
            <div>
              <div className="text-6xl md:text-7xl font-display font-bold text-gold-600 mb-4">
                1,600+
              </div>
              <div className="text-2xl font-semibold">Apprentices Trained</div>
              <p className="text-gray-300 mt-2">
                Professionals transformed into process experts
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Bio */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-navy-900 mb-16 text-center">
            MEET OUR FOUNDER
          </h2>
          <div className="max-w-5xl mx-auto bg-gray-50 rounded-2xl shadow-xl overflow-hidden">
            <div className="md:flex">
              {/* Image Placeholder */}
              <div className="md:w-1/3 bg-gradient-to-br from-navy-900 to-navy-800 flex items-center justify-center p-12">
                <div className="text-center">
                  <div className="w-40 h-40 bg-gold-600 rounded-full flex items-center justify-center text-white text-6xl font-display font-bold mb-4 mx-auto">
                    LT
                  </div>
                  <div className="text-white">
                    <h3 className="font-display text-2xl font-bold">Luis Telleria</h3>
                    <p className="text-gold-400">Founder, COO/CTO</p>
                  </div>
                </div>
              </div>

              {/* Bio Content */}
              <div className="md:w-2/3 p-8 md:p-12">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-display text-3xl font-bold text-navy-900 mb-4">
                      Luis Telleria
                    </h3>
                    <p className="text-lg text-gold-600 font-semibold mb-6">
                      Founder, COO/CTO
                    </p>
                  </div>

                  <div className="space-y-4 text-gray-700">
                    <p>
                      Born in Nicaragua and raised in the United States, Luis Telleria brings a unique global perspective to operational excellence.
                    </p>
                    <p>
                      Luis holds a Bachelor of Science in Chemical Engineering from Washington University in St. Louis and founded Bismark Consulting in 1998.
                    </p>
                    <p>
                      As a certified LEAN trainer and Six Sigma Black Belt, Luis has personally coached over 80 clients through transformative operational improvements. His creation of The Bismark Method™ in 2007 revolutionized how consulting delivers sustainable results.
                    </p>
                    <p>
                      Luis is fluent in English and Spanish, and conversationally proficient in Portuguese, allowing him to serve diverse client organizations across multiple markets.
                    </p>
                  </div>

                  {/* Credentials */}
                  <div className="pt-6 border-t border-gray-300">
                    <h4 className="font-display text-xl font-bold text-navy-900 mb-4">
                      Professional Credentials
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-gold-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">BS Chemical Engineering, Washington University in St. Louis</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-gold-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Certified LEAN Trainer</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-gold-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Six Sigma Black Belt</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-gold-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">80+ Clients Coached</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-gold-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Fluent: English, Spanish | Conversant: Portuguese</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            READY TO TRANSFORM YOUR OPERATIONS?
          </h2>
          <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
            Discover how The Bismark Method™ can deliver guaranteed, sustainable results for your organization.
          </p>
          <Link
            to="/walkthrough"
            className="inline-block bg-gold-600 text-white px-10 py-4 rounded-lg text-lg font-semibold hover:bg-gold-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Start Your Journey
          </Link>
        </div>
      </section>
    </div>
  );
}
