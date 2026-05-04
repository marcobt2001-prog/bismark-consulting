import { SITE_URL } from '@/lib/site-config';
import { industries } from '@/data/industries';
import { insights } from '@/data/insights';

export const dynamic = 'force-static';

export function GET() {
  const sortedIndustries = [...industries].sort((a, b) => a.name.localeCompare(b.name));
  const sortedInsights = [...insights].sort(
    (a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
  );

  const industryLines = sortedIndustries
    .map((i) => `- [${i.name}](${SITE_URL}/industries/${i.slug}): ${i.descriptor}`)
    .join('\n');

  const insightLines = sortedInsights
    .map((a) => `- [${a.title}](${SITE_URL}/insights/${a.slug}): ${a.excerpt}`)
    .join('\n');

  const markdown = `# Bismark Consulting Group

> Operational consulting firm specializing in transformation across
> high-volume industries. We guarantee our results.

Bismark Consulting Group is a management consulting firm founded in 1998
by Luis Telleria-Xucla. We transform operations through The Bismark
Method, a proprietary methodology built on Transformative Leadership
Mastery (TLM) and the Five Pillars of Operational Excellence. Over 25+
years, we have trained 1,600+ apprentices across 10 industries through
16-week engagements that deliver sustained results.

Unlike traditional consulting firms, we do not advise from the side or
implement for the client. We coach client teams to redesign their own
operations through an apprenticeship model — which is why results hold
long after the engagement ends.

## Core Pages
- [Home](${SITE_URL}/): Overview of Bismark Consulting Group, the firm's methodology, and the results guarantee.
- [About](${SITE_URL}/about): The firm's origin, founder Luis Telleria-Xucla's background, credentials, and the team behind the method.
- [The Bismark Method](${SITE_URL}/method): Detailed explanation of the proprietary methodology, including Transformative Leadership Mastery and the Five Pillars of Operational Excellence.
- [The Walkthrough](${SITE_URL}/walkthrough): The complimentary on-site assessment that precedes any engagement — what it covers, what to expect, and how to schedule one.
- [FAQ](${SITE_URL}/faq): Detailed answers to common questions about how Bismark works, what the engagement involves, and why results sustain.
- [Contact](${SITE_URL}/contact): How to reach Bismark Consulting Group.

## Industries Served
Bismark works at the process level across diverse industries because
operational patterns repeat across sectors. Each industry page covers the
specific processes, archetypes, and operational realities of that sector.

- [Industries Overview](${SITE_URL}/industries): Cross-industry view of operational archetypes and the industries Bismark serves.
${industryLines}

## Insights & Articles
Original perspectives on operational transformation, leadership, and the
realities of sustained change — written by Luis Telleria-Xucla.

- [All Insights](${SITE_URL}/insights): Index of all published articles.
${insightLines}

## Key Concepts
- **The Bismark Method**: Proprietary operational transformation methodology integrating leadership and operational excellence.
- **Transformative Leadership Mastery (TLM)**: The leadership component of the methodology — the conditions under which Bismark guarantees results.
- **Five Pillars of Operational Excellence**: The sequential operational component — Customer Profile, Process Design, Organizational Strategy, Measurement Architecture, Continuous Improvement.
- **The Apprentice Model**: Bismark coaches client team members ("apprentices") through real engagement work, ensuring knowledge transfer and result sustainability.
- **The Walkthrough**: A complimentary on-site assessment that precedes any engagement.
- **The 16-Week Engagement**: The standard duration of a full Bismark engagement, deliberately structured around how long real transformation takes.

## Contact & Booking
- Email: info@bismarkconsulting.net
- Headquarters: Miami, Florida
- Schedule a call: ${SITE_URL}/contact

## About This File
This is an llms.txt file (https://llmstxt.org), a structured map of the
Bismark Consulting Group website intended for AI agents and language
models. The information here is curated by Bismark Consulting Group and
reflects the firm's authoritative description of its services,
methodology, and content. For the full set of indexable URLs, see
${SITE_URL}/sitemap.xml.
`;

  return new Response(markdown, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
