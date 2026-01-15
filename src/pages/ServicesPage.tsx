import { motion } from 'framer-motion';
import { TrendingUp, Settings, Zap, Briefcase, CheckCircle } from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      icon: TrendingUp,
      title: 'Strategy Consulting',
      description: 'Define clear paths to sustainable competitive advantage',
      details: [
        'Corporate strategy development',
        'Market entry and expansion',
        'Competitive analysis',
        'Growth strategy',
        'Business model innovation',
      ],
    },
    {
      icon: Settings,
      title: 'Operations Excellence',
      description: 'Optimize processes and drive efficiency',
      details: [
        'Process optimization',
        'Lean Six Sigma implementation',
        'Supply chain optimization',
        'Cost reduction programs',
        'Performance management',
      ],
    },
    {
      icon: Zap,
      title: 'Digital Transformation',
      description: 'Accelerate innovation and modernize operations',
      details: [
        'Digital strategy development',
        'Technology roadmapping',
        'Data analytics and AI',
        'Automation and robotics',
        'Change management',
      ],
    },
    {
      icon: Briefcase,
      title: 'M&A Advisory',
      description: 'Navigate complex transactions with confidence',
      details: [
        'Due diligence',
        'Integration planning',
        'Synergy capture',
        'Post-merger optimization',
        'Carve-out support',
      ],
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Comprehensive solutions tailored to your most critical challenges. We combine
              deep industry expertise with proven methodologies to deliver measurable results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`grid md:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-100 rounded-lg mb-6">
                      <Icon className="text-accent-600" size={32} />
                    </div>
                    <h2 className="text-3xl font-bold text-primary-950 mb-4">{service.title}</h2>
                    <p className="text-lg text-gray-700 mb-6">{service.description}</p>
                    <ul className="space-y-3">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="text-accent-500 mr-3 flex-shrink-0 mt-1" size={20} />
                          <span className="text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                    <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg aspect-video flex items-center justify-center">
                      <Icon className="text-gray-400" size={80} />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Operations?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Let's discuss how we can help you achieve your goals.
          </p>
          <a
            href="mailto:contact@bismarkconsulting.com"
            className="inline-flex items-center px-8 py-4 bg-accent-500 text-white font-semibold rounded-md hover:bg-accent-600 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
