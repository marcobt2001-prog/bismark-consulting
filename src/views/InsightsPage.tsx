import { insights } from '../data/insights';
import InsightCard from '../components/InsightCard';

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
            {insights.map((article) => (
              <InsightCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default InsightsPage;
