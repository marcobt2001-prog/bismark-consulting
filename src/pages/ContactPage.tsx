import { useState } from 'react';
import { ArrowRight, Mail, Phone, MapPin, Calendar, Building } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic will be implemented later
    console.log('Form submitted:', formData);
    alert('Thank you for your message. We will be in touch shortly.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-navy-900 text-white py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 opacity-90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-6">
            <span className="bg-gold-600 text-navy-900 px-4 py-2 font-display text-sm tracking-wider">
              GET IN TOUCH
            </span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl mb-6 tracking-wide">
            LET'S DISCUSS YOUR OPERATIONS
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your operations? Start with a conversation about your
            challenges and objectives.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column - Contact Form */}
            <div>
              <h2 className="font-display text-3xl md:text-4xl text-navy-900 mb-6">
                SEND US A MESSAGE
              </h2>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Tell us about your operational challenges, and we'll get back to you within
                24 hours to discuss how the Bismark Method can help.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block font-medium text-navy-900 mb-2"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-gold-600 focus:outline-none transition-colors"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block font-medium text-navy-900 mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-gold-600 focus:outline-none transition-colors"
                    placeholder="your.email@company.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block font-medium text-navy-900 mb-2"
                  >
                    Company *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-gold-600 focus:outline-none transition-colors"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block font-medium text-navy-900 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-gold-600 focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your operational challenges and what you're looking to achieve..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-navy-900 text-white px-8 py-4 font-display text-lg hover:bg-navy-800 transition-colors flex items-center justify-center gap-2"
                >
                  SEND MESSAGE
                  <ArrowRight className="w-5 h-5" />
                </button>

                <p className="text-sm text-gray-600">
                  * Required fields. We respect your privacy and will never share your information.
                </p>
              </form>
            </div>

            {/* Right Column - Info & Calendly */}
            <div className="space-y-8">
              {/* Company Info */}
              <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-8">
                <h3 className="font-display text-2xl text-navy-900 mb-6">
                  BISMARK CONSULTING
                </h3>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-gold-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Email</p>
                      <a
                        href="mailto:info@bismarkconsulting.com"
                        className="text-navy-900 hover:text-gold-600 transition-colors font-medium"
                      >
                        info@bismarkconsulting.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-gold-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Phone</p>
                      <a
                        href="tel:+1234567890"
                        className="text-navy-900 hover:text-gold-600 transition-colors font-medium"
                      >
                        [Phone Number]
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-gold-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Headquarters</p>
                      <p className="text-navy-900 font-medium">
                        [City, State]
                      </p>
                      <p className="text-sm text-gray-600 mt-1">
                        We work on-site nationwide
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Building className="w-5 h-5 text-gold-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Founded</p>
                      <p className="text-navy-900 font-medium">1998</p>
                      <p className="text-sm text-gray-600 mt-1">
                        20+ years of operational excellence
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-2 border-gold-600 rounded-lg p-6">
                  <p className="text-sm font-medium text-navy-900 mb-2">
                    BUSINESS HOURS
                  </p>
                  <p className="text-gray-700">
                    Monday - Friday: 8:00 AM - 6:00 PM EST
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    For urgent matters, please call our main line.
                  </p>
                </div>
              </div>

              {/* Schedule Walkthrough CTA */}
              <div className="bg-navy-900 text-white rounded-lg p-8">
                <div className="w-16 h-16 bg-gold-600 rounded-full flex items-center justify-center mb-6">
                  <Calendar className="w-8 h-8 text-navy-900" />
                </div>

                <h3 className="font-display text-2xl mb-4">
                  SCHEDULE A WALKTHROUGH
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Skip the back-and-forth. Book a discovery call directly and we'll discuss
                  scheduling your complimentary on-site walkthrough.
                </p>

                {/* Calendly Placeholder */}
                <div className="bg-navy-800 border-2 border-dashed border-navy-700 rounded-lg p-8 mb-6 text-center">
                  <p className="text-gray-400 mb-2">
                    [Calendly Scheduling Widget]
                  </p>
                  <p className="text-sm text-gray-500">
                    Book a 30-minute discovery call
                  </p>
                </div>

                <a
                  href="#"
                  className="block w-full bg-gold-600 text-navy-900 px-6 py-3 font-display text-center hover:bg-gold-500 transition-colors"
                >
                  OPEN CALENDAR
                </a>
              </div>

              {/* Engagement Note */}
              <div className="bg-gold-600 rounded-lg p-6">
                <h4 className="font-display text-xl text-navy-900 mb-3">
                  MINIMUM ENGAGEMENT
                </h4>
                <p className="text-navy-900 leading-relaxed">
                  We focus on transformation engagements of <strong>$1M+</strong> where
                  the scale and complexity justify the rigor of the Bismark Method. Our
                  typical clients see 5-10x ROI within the first year.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location/Service Area Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-5xl text-navy-900 mb-6">
              WHERE WE WORK
            </h2>
            <div className="bg-gold-600 h-1 w-24 mx-auto mb-8" />
            <p className="text-xl text-gray-700 leading-relaxed mb-12">
              While headquartered in [Location], we serve clients nationwide and
              internationally. The Bismark Method requires on-site engagement, and
              we travel to you.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg border-2 border-gray-200">
                <div className="w-12 h-12 bg-navy-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-gold-600" />
                </div>
                <h3 className="font-display text-lg text-navy-900 mb-2">NATIONWIDE</h3>
                <p className="text-gray-600 text-sm">
                  Active client engagements across all major U.S. markets
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border-2 border-gray-200">
                <div className="w-12 h-12 bg-navy-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Building className="w-6 h-6 text-gold-600" />
                </div>
                <h3 className="font-display text-lg text-navy-900 mb-2">ON-SITE</h3>
                <p className="text-gray-600 text-sm">
                  We work where you work—at your operations, with your team
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border-2 border-gray-200">
                <div className="w-12 h-12 bg-navy-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-gold-600" />
                </div>
                <h3 className="font-display text-lg text-navy-900 mb-2">ACCESSIBLE</h3>
                <p className="text-gray-600 text-sm">
                  Direct access to senior consultants throughout every engagement
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl text-navy-900 mb-12 text-center">
            COMMON QUESTIONS
          </h2>

          <div className="space-y-6">
            <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-6">
              <h3 className="font-display text-xl text-navy-900 mb-3">
                How long does a typical engagement last?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Our standard transformation program is 16 weeks, following a 4-week discovery
                phase. This timeline ensures complete knowledge transfer and sustainable results.
              </p>
            </div>

            <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-6">
              <h3 className="font-display text-xl text-navy-900 mb-3">
                What makes the walkthrough "free"?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                The walkthrough is complimentary because we're confident in our ability to
                identify significant value and demonstrate our methodology. There's no
                obligation to engage further, but our clients universally find the walkthrough
                itself valuable.
              </p>
            </div>

            <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-6">
              <h3 className="font-display text-xl text-navy-900 mb-3">
                Do you guarantee results?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Yes. We guarantee specific, measurable outcomes defined during the discovery
                phase. Our fees are structured to align with results delivery, and we've
                delivered on our guarantees for 20+ years.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl md:text-5xl mb-6">
            READY TO START THE CONVERSATION?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Whether you choose to send a message or schedule a call, you'll speak with
            experienced operational consultants who understand your challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center justify-center gap-2 bg-gold-600 text-navy-900 px-8 py-4 font-display text-lg hover:bg-gold-500 transition-colors"
            >
              SEND A MESSAGE
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="tel:+1234567890"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 font-display text-lg hover:bg-white hover:text-navy-900 transition-colors"
            >
              CALL US NOW
              <Phone className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
