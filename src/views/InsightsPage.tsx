import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { insights } from '../data/insights';

const InsightsPage = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-navy-900 text-white py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 opacity-90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-5xl md:text-7xl mb-6 tracking-wide">
            INSIGHTS
          </h1>
          <div className="bg-gold-600 h-1 w-24 mx-auto mb-8" />
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Perspectives on operational transformation, leadership, and the
            realities of sustained change.
          </p>
        </div>
      </section>

      {/* Article Listing */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {insights.map((article) => {
              const date = new Date(article.publishedDate + 'T00:00:00');
              const formatted = date.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
              });

              return (
                <Link
                  key={article.slug}
                  href={`/insights/${article.slug}`}
                  className="block border-l-4 border-gold-600 pl-8 py-6 hover:bg-gray-50 transition-colors"
                >
                  <h2 className="font-display text-2xl md:text-3xl text-navy-900 mb-2">
                    {article.title}
                  </h2>
                  <p className="text-gray-500 italic text-lg mb-4">
                    {article.subtitle}
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-display text-gray-400 uppercase tracking-wider">
                      {article.readingTimeMinutes} min read &middot; {formatted}
                    </p>
                    <span className="inline-flex items-center gap-1 text-gold-600 font-display text-sm tracking-wider">
                      READ ARTICLE <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default InsightsPage;
