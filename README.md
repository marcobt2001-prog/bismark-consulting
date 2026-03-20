# Bismark Consulting Group — Website

Professional marketing website for Bismark Consulting Group, a management consulting
firm specializing in operational transformation across 10 industries. Built on a
proprietary methodology — The Bismark Method™ — backed by a results guarantee.

## Tech Stack

- **React 18** with TypeScript
- **Tailwind CSS** — custom navy-and-gold design system
- **Vite** — build tooling
- **React Router v6** — client-side navigation
- **Lucide React** — icon library

## Pages & Routes

| Route | Component | Notes |
|-------|-----------|-------|
| `/` | HomePage | Main landing page |
| `/about` | AboutPage | Firm history, founder bio, team |
| `/method` | BismarkMethodPage | The Bismark Method, TLM, 5 Pillars |
| `/industries` | IndustriesPage | Archetype grid + 10-industry nav |
| `/industries/banking-lending` | BankingLendingPage | |
| `/industries/distribution-logistics` | DistributionLogisticsPage | |
| `/industries/enterprise-technology` | EnterpriseTechnologyPage | |
| `/industries/financial-processors` | FinancialProcessorsPage | |
| `/industries/food-production` | FoodProductionPage | |
| `/industries/industrial-technology` | IndustrialTechnologyPage | |
| `/industries/insurance` | InsurancePage | |
| `/industries/manufacturing` | ManufacturingPage | |
| `/industries/mining-metals` | MiningMetalsPage | |
| `/industries/oil-gas` | OilGasPage | |
| `/walkthrough` | WalkthroughPage | Complimentary on-site assessment |
| `/faq` | FAQPage | Accordion FAQ clusters |
| `/insights` | InsightsPage | Coming soon placeholder |
| `/contact` | ContactPage | Contact form + Calendly embed |

## Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── Logo.tsx
│   └── IndustrySubPageLayout.tsx
├── data/
│   ├── archetypes.ts
│   ├── faq.ts
│   ├── industries.ts
│   └── industryRotation.ts
├── pages/
│   ├── industries/          (10 industry sub-pages)
│   ├── HomePage.tsx
│   ├── AboutPage.tsx
│   ├── BismarkMethodPage.tsx
│   ├── IndustriesPage.tsx
│   ├── WalkthroughPage.tsx
│   ├── FAQPage.tsx
│   ├── InsightsPage.tsx
│   └── ContactPage.tsx
├── App.tsx
└── main.tsx
```

## Development

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Deployment

```bash
npm run build
# Deploy dist/ folder to any static hosting
```

© 2026 Bismark Consulting Group. All rights reserved.
