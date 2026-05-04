import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site-config';
import { industries } from '@/data/industries';
import { insights } from '@/data/insights';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { path: '', priority: 1.0 },
    { path: '/about', priority: 0.8 },
    { path: '/method', priority: 0.8 },
    { path: '/industries', priority: 0.8 },
    { path: '/walkthrough', priority: 0.8 },
    { path: '/faq', priority: 0.8 },
    { path: '/insights', priority: 0.8 },
    { path: '/contact', priority: 0.8 },
    { path: '/ai', priority: 0.8 },
    { path: '/schedule', priority: 0.8 },
  ].map(({ path, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority,
  }));

  const industryRoutes: MetadataRoute.Sitemap = industries.map((industry) => ({
    url: `${SITE_URL}/industries/${industry.slug}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  const insightRoutes: MetadataRoute.Sitemap = insights.map((article) => ({
    url: `${SITE_URL}/insights/${article.slug}`,
    lastModified: new Date(article.publishedDate),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [...staticRoutes, ...industryRoutes, ...insightRoutes];
}
