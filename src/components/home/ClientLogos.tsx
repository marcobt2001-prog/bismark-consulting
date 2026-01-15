import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const ClientLogos = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // Placeholder client names - in production these would be actual logo images
  const clients = [
    'GlobalBank Corp',
    'TechVentures Inc',
    'ManuFacture Co',
    'HealthFirst',
    'EnergyPlus',
    'RetailMax',
    'FinanceHub',
    'AutoDrive',
    'PharmaCare',
    'LogisticsPro',
    'DataSystems',
    'CloudNine',
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-primary-950 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're proud to partner with some of the world's most innovative organizations
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {clients.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
              >
                {/* Placeholder for actual logo - using text for now */}
                <div className="text-center">
                  <div className="w-full h-16 flex items-center justify-center bg-white rounded-lg shadow-sm border border-gray-200 px-4 hover:shadow-md transition-shadow">
                    <span className="text-xs md:text-sm font-bold text-gray-700 whitespace-nowrap">
                      {client}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-gray-500 text-sm">
            And hundreds more across Financial Services, Manufacturing, Healthcare, and Energy sectors
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientLogos;
