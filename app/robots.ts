import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site-config';

const allowedAgents = [
  'Googlebot',
  'Bingbot',
  'DuckDuckBot',
  'GPTBot',
  'ClaudeBot',
  'PerplexityBot',
  'Google-Extended',
  'OAI-SearchBot',
  'CCBot',
  'anthropic-ai',
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      ...allowedAgents.map((userAgent) => ({ userAgent, allow: '/' })),
      { userAgent: '*', allow: '/' },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
