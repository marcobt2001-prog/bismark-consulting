'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqClusters } from '../data/faq';

export default function FAQAccordion() {
  const [openItems, setOpenItems] = useState<Record<string, number | null>>({});

  const toggleItem = (clusterId: string, index: number) => {
    setOpenItems((prev) => ({
      ...prev,
      [clusterId]: prev[clusterId] === index ? null : index,
    }));
  };

  return (
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
  );
}
