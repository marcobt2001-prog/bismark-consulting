import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Shield, Mountain, Factory } from 'lucide-react';

const Industries = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const industries = [
    {
      icon: Shield,
      title: 'Insurance',
      description: 'Transform claims processing, underwriting operations, and customer experience to drive efficiency and growth in the insurance sector.',
      stats: '180+ Projects',
      bgColor: 'from-blue-600 to-blue-800',
    },
    {
      icon: Mountain,
      title: 'Mining',
      description: 'Optimize production, enhance safety protocols, and implement sustainable practices across mining operations worldwide.',
      stats: '140+ Projects',
      bgColor: 'from-amber-700 to-amber-900',
    },
    {
      icon: Factory,
      title: 'Industrial Operations',
      description: 'Drive operational excellence across manufacturing, energy, and utilities through lean processes and digital transformation.',
      stats: '220+ Projects',
      bgColor: 'from-gray-700 to-gray-900',
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
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="industries" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-950 mb-4">
            Industries We Serve
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Deep expertise across the sectors shaping the global economy
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all duration-500"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${industry.bgColor} opacity-90 group-hover:opacity-100 transition-opacity duration-300`} />

                {/* Content */}
                <div className="relative p-8 h-full flex flex-col text-white">
                  <div className="mb-4">
                    <Icon size={40} className="opacity-90" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">
                    {industry.title}
                  </h3>
                  <p className="text-white/90 mb-6 flex-grow leading-relaxed">
                    {industry.description}
                  </p>
                  <div className="pt-4 border-t border-white/30">
                    <span className="text-sm font-semibold">{industry.stats}</span>
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Industries;
