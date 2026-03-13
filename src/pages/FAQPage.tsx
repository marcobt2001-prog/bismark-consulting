import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { faqClusters } from '../data/faq';

const FAQPage = () => {
  const [openItems, setOpenItems] = useState<Record<string, number | null>>({});

  const toggleItem = (clusterId: string, index: number) => {
    setOpenItems((prev) => ({
      ...prev,
      [clusterId]: prev[clusterId] === index ? null : index,
    }));
  };

  return (
    <div className="bg-white">
      {/* SECTION 1 — PAGE TITLE */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-5xl md:text-6xl text-navy-900 mb-6">
            FREQUENTLY ASKED QUESTIONS
          </h1>
          <p className="text-xl text-gray-500 max-w-3xl leading-relaxed">
            Straight answers about how we work, what we deliver, and why it holds.
          </p>
        </div>
      </section>

      {/* SECTION 2 — THE QUESTIONS */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {faqClusters.map((cluster) => (
              <div key={cluster.id}>
                {/* Cluster heading */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-1 h-8 bg-gold-600 flex-shrink-0" />
                  <h2 className="font-display text-2xl text-navy-900 tracking-wider uppercase">
                    {cluster.title}
                  </h2>
                </div>

                {/* Q&A accordion card */}
                <div className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden">
                  {cluster.items.map((item, index) => {
                    const isOpen = openItems[cluster.id] === index;
                    const isLast = index === cluster.items.length - 1;

                    return (
                      <div
                        key={index}
                        className={!isLast ? 'border-b border-gray-200' : ''}
                      >
                        <button
                          onClick={() => toggleItem(cluster.id, index)}
                          className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition-colors"
                        >
                          <span className="font-display text-lg text-navy-900 pr-4">
                            {item.question}
                          </span>
                          <ChevronDown
                            className={
                              'w-5 h-5 text-gold-600 flex-shrink-0 transition-transform duration-300 ' +
                              (isOpen ? 'rotate-180' : '')
                            }
                          />
                        </button>

                        <div
                          className={
                            'overflow-hidden transition-all duration-300 ease-in-out ' +
                            (isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0')
                          }
                        >
                          <div className="px-6 pb-6 pt-0">
                            <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                              {item.answer}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — CLOSING CTA */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl md:text-5xl mb-6">
            STILL HAVE QUESTIONS?
          </h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto">
            The fastest way to get answers is a conversation. Book a 30&ndash;45 minute
            discovery call and bring every question on your list. This isn&rsquo;t a sales
            pitch &mdash; it&rsquo;s the same rigor in miniature.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-gold-600 text-navy-900 px-8 py-4 font-display text-lg hover:bg-gold-500 transition-colors"
          >
            SCHEDULE A DISCOVERY CALL
            <ArrowRight className="w-5 h-5" />
          </Link>

          <p className="text-sm text-gray-400 mt-6">
            Prefer email? Reach us at{' '}
            <a
              href="mailto:info@bismarkconsulting.com"
              className="text-gold-600 hover:text-gold-500 font-medium"
            >
              info@bismarkconsulting.com
            </a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;
