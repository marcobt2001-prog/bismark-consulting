import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, TrendingUp } from 'lucide-react';

const CaseStudyDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // In a real app, this would fetch from an API or database
  const caseStudyData: Record<string, any> = {
    'claims-processing-transformation': {
      title: 'Claims Processing Transformation',
      industry: 'Insurance',
      client: 'Leading Regional Insurer',
      duration: '9 months',
      challenge:
        'A regional insurance provider was struggling with manual claims processing that resulted in slow turnaround times, high operational costs, and declining customer satisfaction. With over 50,000 claims processed annually, the company needed to modernize its operations to remain competitive.',
      approach: [
        'Conducted comprehensive process mapping and identified 15 key bottlenecks',
        'Implemented automated claims triage and routing system',
        'Deployed AI-powered fraud detection capabilities',
        'Redesigned workflows to eliminate redundant steps',
        'Trained 200+ staff on new systems and processes',
        'Established continuous improvement metrics and dashboards',
      ],
      results: [
        '55% reduction in average claims processing time',
        '30% decrease in operational costs',
        '42-point increase in customer satisfaction scores',
        '80% of claims now auto-adjudicated',
        '$12M annual savings',
        'Zero data security incidents during transition',
      ],
      metrics: [
        { label: 'Processing Time Reduction', value: '55%' },
        { label: 'Cost Reduction', value: '30%' },
        { label: 'Customer Satisfaction', value: '+42pts' },
        { label: 'Annual Savings', value: '$12M' },
      ],
      testimonial: {
        quote:
          'Bismark Consulting transformed our claims operation from a cost center into a competitive advantage. Their team\'s deep insurance expertise and hands-on approach delivered results beyond our expectations.',
        author: 'Chief Operating Officer',
        company: 'Regional Insurance Provider',
      },
    },
  };

  const study = caseStudyData[id as string] || {
    title: 'Case Study',
    industry: 'Industry',
    client: 'Client Name',
    duration: '6-12 months',
    challenge: 'This is a placeholder case study. The full details would be loaded dynamically based on the case study ID.',
    approach: [
      'Comprehensive discovery and assessment phase',
      'Development of tailored transformation roadmap',
      'Implementation of proven methodologies',
      'Change management and training programs',
      'Ongoing support and optimization',
    ],
    results: [
      'Significant operational improvements',
      'Measurable cost reductions',
      'Enhanced employee engagement',
      'Improved customer satisfaction',
      'Sustainable long-term benefits',
    ],
    metrics: [
      { label: 'Efficiency Gain', value: '30%' },
      { label: 'Cost Reduction', value: '25%' },
      { label: 'ROI', value: '3.5x' },
      { label: 'Time to Value', value: '6 mo' },
    ],
    testimonial: {
      quote: 'The team delivered exceptional results and exceeded our expectations.',
      author: 'Executive Leader',
      company: 'Client Company',
    },
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 text-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate('/case-studies')}
            className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Case Studies
          </button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-4">
              {study.industry}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{study.title}</h1>
            <p className="text-xl text-gray-200">{study.client}</p>
          </motion.div>
        </div>
      </section>

      {/* Metrics Overview */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {study.metrics.map((metric: any, index: number) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-accent-500 mb-2">
                  {metric.value}
                </div>
                <div className="text-sm text-gray-600">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Challenge */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-primary-950 mb-4">The Challenge</h2>
            <p className="text-lg text-gray-700 leading-relaxed">{study.challenge}</p>
          </div>

          {/* Approach */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-primary-950 mb-6">Our Approach</h2>
            <div className="space-y-4">
              {study.approach.map((item: string, index: number) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="text-accent-500 mr-3 flex-shrink-0 mt-1" size={24} />
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Results */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-primary-950 mb-6">Results & Impact</h2>
            <div className="space-y-4">
              {study.results.map((item: string, index: number) => (
                <div key={index} className="flex items-start">
                  <TrendingUp className="text-accent-500 mr-3 flex-shrink-0 mt-1" size={24} />
                  <p className="text-gray-700 font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <blockquote className="text-lg italic text-gray-700 mb-4">
              "{study.testimonial.quote}"
            </blockquote>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-950 to-primary-800 rounded-full mr-4" />
              <div>
                <p className="font-semibold text-primary-950">{study.testimonial.author}</p>
                <p className="text-sm text-gray-600">{study.testimonial.company}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for Similar Results?</h2>
          <p className="text-xl text-gray-200 mb-8">
            Let's discuss how we can help transform your operations.
          </p>
          <a
            href="mailto:contact@bismarkconsulting.com"
            className="inline-flex items-center px-8 py-4 bg-accent-500 text-white font-semibold rounded-md hover:bg-accent-600 transition-colors"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>
    </div>
  );
};

export default CaseStudyDetailPage;
