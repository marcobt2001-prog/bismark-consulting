import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp } from 'lucide-react';

const CaseStudies = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const caseStudies = [
    {
      title: 'Claims Processing Transformation',
      industry: 'Insurance',
      challenge: 'Manual claims processes causing delays and customer dissatisfaction',
      result: '55% faster claims processing, 30% cost reduction',
      metrics: [
        { label: 'Processing Time', value: '-55%' },
        { label: 'Cost Reduction', value: '30%' },
        { label: 'Customer Satisfaction', value: '+42pts' },
      ],
      bgGradient: 'from-blue-600 to-blue-800',
    },
    {
      title: 'Mine Safety & Production Optimization',
      industry: 'Mining',
      challenge: 'Safety incidents impacting productivity and increasing operational costs',
      result: 'Zero lost-time incidents, 25% production increase',
      metrics: [
        { label: 'Safety Incidents', value: '0 LTI' },
        { label: 'Production Increase', value: '+25%' },
        { label: 'Cost per Ton', value: '-18%' },
      ],
      bgGradient: 'from-amber-700 to-amber-900',
    },
    {
      title: 'Manufacturing Excellence Program',
      industry: 'Industrial Operations',
      challenge: 'Inefficient production lines and high waste rates across facilities',
      result: '$45M annual savings, 40% waste reduction',
      metrics: [
        { label: 'Annual Savings', value: '$45M' },
        { label: 'Waste Reduction', value: '40%' },
        { label: 'OEE Improvement', value: '+35%' },
      ],
      bgGradient: 'from-gray-700 to-gray-900',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="case-studies" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-950 mb-4">
            Proven Results
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real transformations, measurable impact, lasting partnerships
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${study.bgGradient}`} />

              {/* Content */}
              <div className="relative p-8 text-white h-full flex flex-col">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
                    {study.industry}
                  </span>
                </div>

                <h3 className="text-2xl font-bold mb-4 group-hover:text-accent-300 transition-colors">
                  {study.title}
                </h3>

                <div className="mb-6 flex-grow">
                  <p className="text-sm font-semibold mb-2 text-white/80">Challenge</p>
                  <p className="text-white/90 mb-4 leading-relaxed">
                    {study.challenge}
                  </p>
                  <p className="text-sm font-semibold mb-2 text-white/80">Result</p>
                  <p className="font-semibold text-accent-300">
                    {study.result}
                  </p>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/20 mb-6">
                  {study.metrics.map((metric, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-xl font-bold text-accent-300">
                        {metric.value}
                      </div>
                      <div className="text-xs text-white/80 mt-1">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>

                <Link
                  to="/case-studies"
                  className="inline-flex items-center text-white font-semibold group-hover:text-accent-300 transition-colors"
                >
                  Read full case study
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                </Link>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-300" />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link
            to="/case-studies"
            className="inline-flex items-center px-8 py-4 bg-primary-950 text-white font-semibold rounded-md hover:bg-primary-900 transition-colors duration-200 group"
          >
            View All Case Studies
            <TrendingUp className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;
