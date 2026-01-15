import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Settings, Zap, Briefcase, ArrowRight } from 'lucide-react';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const services = [
    {
      icon: TrendingUp,
      title: 'Strategy Consulting',
      description: 'Define clear paths to sustainable competitive advantage with data-driven insights and rigorous analysis.',
      link: '/services',
    },
    {
      icon: Settings,
      title: 'Operations Excellence',
      description: 'Optimize processes, reduce costs, and improve efficiency through proven operational frameworks.',
      link: '/services',
    },
    {
      icon: Zap,
      title: 'Digital Transformation',
      description: 'Accelerate innovation and modernize your business with cutting-edge technology and digital capabilities.',
      link: '/services',
    },
    {
      icon: Briefcase,
      title: 'M&A Advisory',
      description: 'Navigate complex transactions with confidence through comprehensive due diligence and integration planning.',
      link: '/services',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-950 mb-4">
            How We Help
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions tailored to your most critical challenges
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative bg-white border border-gray-200 rounded-lg p-8 hover:shadow-xl transition-all duration-300 hover:border-accent-500"
              >
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-accent-50 rounded-lg group-hover:bg-accent-500 transition-colors duration-300">
                    <Icon className="text-accent-500 group-hover:text-white transition-colors duration-300" size={28} />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-primary-950 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <Link
                  to={service.link}
                  className="inline-flex items-center text-accent-600 font-semibold group-hover:text-accent-700 transition-colors"
                >
                  Learn more
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
