import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Shield, Mountain, Factory } from 'lucide-react';

const CaseStudiesPage = () => {
  const navigate = useNavigate();

  const caseStudies = [
    {
      id: 'claims-processing-transformation',
      icon: Shield,
      title: 'Claims Processing Transformation',
      industry: 'Insurance',
      client: 'Leading Regional Insurer',
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
      id: 'mine-safety-production',
      icon: Mountain,
      title: 'Mine Safety & Production Optimization',
      industry: 'Mining',
      client: 'Global Mining Corporation',
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
      id: 'manufacturing-excellence',
      icon: Factory,
      title: 'Manufacturing Excellence Program',
      industry: 'Industrial Operations',
      client: 'Fortune 500 Manufacturer',
      challenge: 'Inefficient production lines and high waste rates across facilities',
      result: '$45M annual savings, 40% waste reduction',
      metrics: [
        { label: 'Annual Savings', value: '$45M' },
        { label: 'Waste Reduction', value: '40%' },
        { label: 'OEE Improvement', value: '+35%' },
      ],
      bgGradient: 'from-gray-700 to-gray-900',
    },
    {
      id: 'insurance-digital-transformation',
      icon: Shield,
      title: 'Insurance Digital Transformation',
      industry: 'Insurance',
      client: 'National Insurance Provider',
      challenge: 'Legacy systems preventing digital customer experience',
      result: '70% digital adoption, 50% faster policy issuance',
      metrics: [
        { label: 'Digital Adoption', value: '70%' },
        { label: 'Policy Issuance', value: '-50%' },
        { label: 'NPS Improvement', value: '+35pts' },
      ],
      bgGradient: 'from-blue-700 to-blue-900',
    },
    {
      id: 'mining-supply-chain',
      icon: Mountain,
      title: 'Mining Supply Chain Optimization',
      industry: 'Mining',
      client: 'Regional Mining Company',
      challenge: 'Complex supply chain leading to equipment downtime',
      result: '$12M annual savings, 85% equipment availability',
      metrics: [
        { label: 'Annual Savings', value: '$12M' },
        { label: 'Equipment Uptime', value: '85%' },
        { label: 'Inventory Reduction', value: '-35%' },
      ],
      bgGradient: 'from-amber-600 to-amber-800',
    },
    {
      id: 'energy-efficiency-program',
      icon: Factory,
      title: 'Energy Efficiency Program',
      industry: 'Industrial Operations',
      client: 'Utility Company',
      challenge: 'Rising energy costs and environmental concerns',
      result: '30% energy reduction, carbon neutral operations',
      metrics: [
        { label: 'Energy Savings', value: '30%' },
        { label: 'Cost Reduction', value: '$8M' },
        { label: 'Carbon Reduction', value: '100%' },
      ],
      bgGradient: 'from-gray-600 to-gray-800',
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Case Studies</h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Real transformations, measurable impact, lasting partnerships. Explore how we've
              helped clients across insurance, mining, and industrial operations achieve their goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => {
              const Icon = study.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => navigate(`/case-studies/${study.id}`)}
                  className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
                >
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${study.bgGradient}`} />

                  {/* Content */}
                  <div className="relative p-8 text-white">
                    <div className="mb-4 flex items-center justify-between">
                      <Icon size={40} className="opacity-90" />
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
                        {study.industry}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold mb-2 group-hover:text-accent-300 transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-sm text-white/80 mb-4">{study.client}</p>

                    <div className="mb-6">
                      <p className="text-sm font-semibold mb-2 text-white/80">Challenge</p>
                      <p className="text-white/90">{study.challenge}</p>
                    </div>

                    <div className="mb-6">
                      <p className="text-sm font-semibold mb-2 text-white/80">Result</p>
                      <p className="font-semibold text-accent-300">{study.result}</p>
                    </div>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/20 mb-6">
                      {study.metrics.map((metric, idx) => (
                        <div key={idx} className="text-center">
                          <div className="text-xl font-bold text-accent-300">{metric.value}</div>
                          <div className="text-xs text-white/80 mt-1">{metric.label}</div>
                        </div>
                      ))}
                    </div>

                    <div className="inline-flex items-center text-white font-semibold group-hover:text-accent-300 transition-colors">
                      Read full case study
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                    </div>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-300" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;
