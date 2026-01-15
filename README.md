# Bismark Consulting Website

Enterprise-grade marketing website for Bismark Consulting, a management consulting firm specializing in Insurance, Mining, and Industrial Operations.

## Tech Stack

- **React** with TypeScript
- **Tailwind CSS** for styling
- **Vite** for build tooling
- **React Router** for navigation
- **Framer Motion** for animations

## Features

- Fully responsive mobile-first design
- Smooth scroll-based animations
- Professional enterprise design
- Multiple pages with routing
- Case studies with dynamic detail pages
- Contact forms and CTAs

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   └── home/
│       ├── Hero.tsx
│       ├── Services.tsx
│       ├── Industries.tsx
│       ├── Stats.tsx
│       ├── CaseStudies.tsx
│       ├── ClientLogos.tsx
│       └── CTASection.tsx
├── pages/
│   ├── HomePage.tsx
│   ├── AboutPage.tsx
│   ├── ServicesPage.tsx
│   ├── CaseStudiesPage.tsx
│   └── CaseStudyDetailPage.tsx
├── App.tsx
└── main.tsx
```

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import repository in Vercel
3. Deploy with default settings

### Manual Build

```bash
npm run build
# Deploy dist/ folder to any static hosting
```

## License

© 2026 Bismark Consulting. All rights reserved.
