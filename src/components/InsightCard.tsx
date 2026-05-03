import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { InsightMeta } from '../data/insights';

type Props = {
  article: InsightMeta;
};

export default function InsightCard({ article }: Props) {
  const date = new Date(article.publishedDate + 'T00:00:00');
  const formatted = date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
  });

  return (
    <Link
      href={`/insights/${article.slug}`}
      className="block border-l-4 border-gold-600 pl-8 py-6 hover:bg-gray-50 transition-colors"
    >
      <h3 className="font-display text-2xl md:text-3xl text-navy-900 mb-2">
        {article.title}
      </h3>
      <p className="text-gray-500 italic text-lg mb-4">{article.subtitle}</p>
      <p className="text-gray-700 leading-relaxed mb-4">{article.excerpt}</p>
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
}
