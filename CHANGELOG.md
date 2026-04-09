# Bismark Consulting Group — Changelog

All notable changes to the website codebase are recorded here.
Entries are added by Claude Code at the end of every prompt session.

## Format

Each entry should follow this structure:

### [DATE] — [Short description of the session]
**Files Modified:**
- list of files changed

**Files Created:**
- list of new files added

**Files Deleted:**
- list of files removed

**Summary:**
One or two sentences describing what the session accomplished.

---

<!-- Entries below this line are added chronologically, newest first -->

### 2026-04-08 — Contact form wired to Resend with two-email confirmation system
**Files Created:**
- app/api/contact/route.ts

**Files Modified:**
- src/views/ContactPage.tsx
- package.json (added resend)

**Summary:**
Wired contact form to Resend API. Sends internal notification to info@bismarkconsulting.net and branded confirmation email to submitter with Calendly link and Luis sign-off. Form shows loading state, inline success/error banners, and clears on success.

### 2026-04-08 — Revert HomePage hero centering, add gold label to Industries hero
**Files Modified:**
- src/views/HomePage.tsx
- src/views/IndustriesPage.tsx

**Summary:**
Reverted hero text centering on HomePage (back to left-aligned). Added "OUR INDUSTRIES" gold label badge above the Industries page hero heading.

### 2026-04-08 — Center hero text on HomePage and IndustriesPage
**Files Modified:**
- src/views/HomePage.tsx
- src/views/IndustriesPage.tsx

**Summary:**
Centered hero section text on HomePage (text-center + mx-auto on inner container) and IndustriesPage (text-center on container, mx-auto on paragraph). No other sections changed.

### 2026-04-07 — Bold footer logo subtitle, center text on HomePage and IndustriesPage
**Files Modified:**
- src/components/layout/Logo.tsx
- src/views/HomePage.tsx
- src/views/IndustriesPage.tsx

**Summary:**
Footer logo: made CONSULTING GROUP bold (weight 700) with tighter letter-spacing (0.22em) in dark variant to stay within BISMARK width. HomePage: centered text in Industry Rotation, Who We Work With, and Insights sections. IndustriesPage: centered headings and paragraphs in Patterns and Find Your Operation sections; card grids and matrix kept left-aligned.

### 2026-04-07 — Add w-fit to dark variant logo wrapper
**Files Modified:**
- src/components/layout/Logo.tsx

**Summary:**
Added w-fit to the dark variant logo wrapper so the gold divider line collapses to the intrinsic width of the BISMARK text, matching navbar logo behavior.

### 2026-04-02 — Redesign TLM concepts list as numbered card grid
**Files Modified:**
- src/views/BismarkMethodPage.tsx

**Summary:**
Replaced pill/chip layout for 6 TLM concepts with a 2-column numbered card grid. Each card has a gold left border, zero-padded numeral (01–06), and concept name in display font.

### 2026-04-02 — Increase CONSULTING GROUP subtitle size in logo
**Files Modified:**
- src/components/layout/Logo.tsx

**Summary:**
Increased "CONSULTING GROUP" font size from 8px to 9.5px (~19% larger) for better readability. BISMARK size unchanged at 28px.

### 2026-04-02 — Replace PillarStaircase with PillarSequenceFlow horizontal diagram
**Files Created:**
- src/components/visuals/PillarSequenceFlow.tsx

**Files Modified:**
- src/views/BismarkMethodPage.tsx

**Summary:**
Replaced PillarStaircase with a new horizontal flow diagram showing 5 numbered pillar nodes connected by gold arrows. Red callout between Pillar 02 and 03 reads "Most firms start here" to communicate why the sequence is non-negotiable.

### 2026-04-02 — Replace HandMethodDiagram with real image, replace EngagementPathway with wireframe
**Files Modified:**
- src/views/BismarkMethodPage.tsx
- src/views/HomePage.tsx
- src/components/visuals/EngagementPathway.tsx

**Summary:**
Two Tracks, One Method section: replaced HandMethodDiagram placeholder with real hand image (image004.jpg) via next/image. Engagement Pathway section on HomePage: replaced SVG component with single wireframe placeholder, removed caption text from EngagementPathway component.

### 2026-04-01 — Fix logo sizing
**Files Modified:**
- src/components/layout/Logo.tsx

**Summary:**
Fixed logo sizing — reduced from clamp(28-40px) to fixed 24px to fit navbar without displacing nav tabs. Subtitle reduced proportionally to 7px. Cinzel font loading already correct via Google Fonts link tag.

### 2026-04-01 — Add photo wireframe placeholders across remaining sections
**Files Modified:**
- src/views/AboutPage.tsx
- src/views/HomePage.tsx
- src/views/IndustriesPage.tsx
- src/components/IndustrySubPageLayout.tsx

**Summary:**
Add photo wireframe placeholders: About page headshot (Luis portrait in 3-col grid with bio), Industry sub-page hero backgrounds (full background layer with dark overlay), Industries page full-width photo band below hero, Five Pillars section (hand illustration replaced with field photo placeholder). Removed unused handFivePillarsImg variable from HomePage.

### 2026-04-01 — Update logo to Cinzel serif font
**Files Modified:**
- src/components/layout/Logo.tsx
- app/layout.tsx
- tailwind.config.js

**Files Deleted:**
- public/images/bismark-logo-white-bg.svg
- public/vite.svg
- public/images/OG_IMAGE_NEEDED.md

**Summary:**
Updated logo to Cinzel serif — BISMARK in Cinzel Bold 700 (navy), gold gradient divider, CONSULTING GROUP in Cinzel Regular 400 (gold). Added Cinzel to Google Fonts link and Tailwind font-logo utility. Both light (navbar) and dark (footer) variants use the same Cinzel markup with appropriate colors. Deleted old outlined SVG logo and Vite scaffold artifact.

### 2026-04-01 — Add photo wireframe placeholders across 6 sections
**Files Created:**
- src/components/WireframePlaceholder.tsx

**Files Modified:**
- src/views/BismarkMethodPage.tsx
- src/views/WalkthroughPage.tsx
- src/views/IndustriesPage.tsx
- src/components/IndustrySubPageLayout.tsx
- src/views/HomePage.tsx

**Summary:**
Created reusable WireframePlaceholder component with camera icon and label. Added placeholders across 6 sections: Weekly Rhythm cards on Method page (3), Walkthrough phases in alternating 2-column grid (4), Industries hero (wide), Industry sub-page heroes (dynamic), HomePage "Problem We Solve" section (full background with dark overlay), and EngagementPathway section (side panel).

### 2026-04-01 — Update Logo component to use outlined SVG
**Files Modified:**
- src/components/layout/Logo.tsx
- src/components/layout/Footer.tsx

**Summary:**
Updated Logo component to render the outlined SVG from /images/bismark-logo-white-bg.svg in the navbar (light variant). Added variant prop: 'light' (default, SVG image) for white backgrounds, 'dark' (white text) for the navy footer. Footer now uses variant="dark" with white/gray text colors.

### 2026-04-01 — Convert logo SVG text to outlined vector paths
**Files Modified:**
- public/images/bismark-logo-white-bg.svg

**Summary:**
Converted logo SVG text to outlined vector paths — eliminates external font dependency (Cinzel via Google Fonts @import) that caused silent fallback to Times New Roman in most rendering contexts. Used opentype.js to convert "BISMARK" (Cinzel Black 900) and "CONSULTING GROUP" (Cinzel Regular 400) to <path> elements. Zero <text>, @import, or font-family references remain.

### 2026-04-01 — Add force-static export to all app/ page routes
**Files Modified:**
- app/page.tsx
- app/about/page.tsx
- app/ai/page.tsx
- app/contact/page.tsx
- app/faq/page.tsx
- app/industries/page.tsx
- app/industries/[slug]/page.tsx
- app/insights/page.tsx
- app/method/page.tsx
- app/schedule/page.tsx
- app/walkthrough/page.tsx

**Summary:**
Added `export const dynamic = 'force-static'` to all 11 app/ page route files. Forces Next.js to statically generate every page at build time, ensuring full HTML content is served to search engines, social crawlers, and AI tools on first request.

### 2026-04-01 — Replace Calendly inline embeds with popup button
**Files Modified:**
- src/views/WalkthroughPage.tsx
- src/index.css

**Files Deleted:**
- src/components/CalendlyEmbed.tsx

**Summary:**
Removed the inline Calendly embed from /walkthrough. Replaced with CalendlyButton that opens the Calendly popup overlay on click. Deleted CalendlyEmbed.tsx (120 lines of MutationObserver/setInterval hacks). Removed dead .calendly-inline-widget CSS from index.css. Both /walkthrough and /schedule now show a clean CTA button; all existing popup buttons on other pages are unaffected.

### 2026-04-01 — SSR refactor: remove 'use client' from server-renderable page views
**Files Modified:**
- src/views/HomePage.tsx
- src/views/AIPage.tsx
- src/views/BismarkMethodPage.tsx
- src/views/IndustriesPage.tsx
- src/views/SchedulePage.tsx
- src/views/FAQPage.tsx
- src/components/IndustrySubPageLayout.tsx

**Files Created:**
- src/components/CalendlyButton.tsx
- src/components/FAQAccordion.tsx

**Summary:**
Removed 'use client' from all server-renderable page views. Interactive pieces (FAQ accordion, Calendly popup buttons) extracted into isolated client components. Server-rendered pages now emit full HTML content for Google, social crawlers, and AI tools to index.

### 2026-04-01 — Convert all schedule buttons to Calendly popup
**Files Created:**
- src/utils/openCalendlyPopup.ts
- src/types/global.d.ts

**Files Modified:**
- app/layout.tsx — load Calendly script/CSS globally
- src/components/layout/Navbar.tsx
- src/views/HomePage.tsx
- src/views/FAQPage.tsx
- src/views/ContactPage.tsx
- src/views/AIPage.tsx
- src/views/BismarkMethodPage.tsx
- src/views/IndustriesPage.tsx
- src/views/SchedulePage.tsx
- src/components/IndustrySubPageLayout.tsx
- src/components/CalendlyEmbed.tsx — removed duplicate global type declaration

**Summary:**
Converted all "Schedule a Walkthrough" buttons site-wide to open Calendly popup directly — no page navigation. Calendly script loaded globally in layout.tsx. Created shared openCalendlyPopup utility. Inline embed on /walkthrough page unchanged. /schedule page simplified to popup button.

### 2026-03-31 — Add openGraph metadata to all page routes
**Files Modified:**
- app/page.tsx
- app/about/page.tsx
- app/method/page.tsx
- app/industries/page.tsx
- app/industries/[slug]/page.tsx
- app/walkthrough/page.tsx
- app/faq/page.tsx
- app/insights/page.tsx
- app/contact/page.tsx
- app/ai/page.tsx
- app/schedule/page.tsx

**Summary:**
Added openGraph property (title, description, og:image) to the metadata export in all 11 page routes. Each openGraph title and description mirrors the existing page metadata. All pages share a default OG image at /images/og-default.jpg (1200x630). The dynamic industry [slug] route's generateMetadata also includes openGraph in its return object.

### 2026-04-01 — Fix HomePage industry rotation for SSR
**Files Modified:**
- src/views/HomePage.tsx

**Summary:**
Fixed HomePage industry rotation to render during SSR instead of client-side useEffect — pairings now appear in initial HTML for crawlers and link previews. Removed useEffect import (no longer needed).

### 2026-04-01 — Verify SSR rendering is working correctly
**Summary:**
Diagnosed and verified SSR rendering. All configuration is correct: no output: 'export', no 'use client' in app/ files, no rendering gates. curl tests confirm all pages (/, /about, /industries) return full HTML with real content — titles, meta descriptions, nav, headings, and body text. Crawlers and social previews receive complete page markup.

### 2026-04-01 — Finalize SSR on main and delete nextjs-migration branch
**Summary:**
Finalized SSR on main. All pages server-render full HTML. Deleted nextjs-migration branch (local and remote). Verified via curl that homepage, about, and industries pages return real HTML content.

### 2026-04-01 — Switch from static export to Vercel SSR
**Files Modified:**
- next.config.ts — removed output: 'export' and images: { unoptimized: true }
- src/views/BismarkMethodPage.tsx — removed unnecessary 'use client'
- src/views/WalkthroughPage.tsx — removed unnecessary 'use client'
- src/views/SchedulePage.tsx — removed unnecessary 'use client'

**Summary:**
Switched from static export (output: 'export') to Vercel SSR. Pages now server-render full HTML content — crawlers, social previews, and non-JS readers get complete page markup. App-level page files are server components; client interactivity (forms, accordions, Calendly) hydrates after initial load. Removed 'use client' from 3 view files that had no hooks or client-side dependencies.

### 2026-04-01 — Codebase cleanup based on AUDIT.md
**Files Deleted:**
- src/components/visuals/ConsultingFailureCycle.tsx — orphaned, never imported
- src/components/visuals/CrossIndustryMatrix.tsx — superseded by FindYourOperationMatrix, never imported
- src/components/visuals/FAQSectionDivider.tsx — orphaned, never imported
- src/assets/ directory — all images duplicated to public/images/ during migration
- public/images/react.svg — Vite scaffold artifact, never referenced
- eslint.config.js — referenced removed Vite plugin, replaced by Next.js built-in lint

**Dependencies Removed:**
- react-calendly — never imported in codebase
- framer-motion — never imported in codebase

**Files Modified:**
- src/views/ContactPage.tsx — removed console.log from form handler

**Summary:**
Removed 3 orphaned visual components, legacy asset directory, dead npm dependencies, stale ESLint config, and a console.log in production code. Build passes with zero errors.

### 2026-03-31 — Restore Calendly embed on Walkthrough page
**Files Modified:**
- src/views/WalkthroughPage.tsx

**Summary:**
Restored Calendly inline embed on the Walkthrough page — both /walkthrough and /schedule now have the calendar widget.

### 2026-03-31 — Create /schedule page and rewire all CTA buttons
**Files Created:**
- src/views/SchedulePage.tsx
- app/schedule/page.tsx

**Files Modified:**
- src/components/layout/Navbar.tsx
- src/views/HomePage.tsx
- src/views/WalkthroughPage.tsx
- src/views/ContactPage.tsx
- src/views/FAQPage.tsx
- src/views/BismarkMethodPage.tsx
- src/views/IndustriesPage.tsx
- src/views/AIPage.tsx
- src/components/IndustrySubPageLayout.tsx

**Summary:**
Created dedicated /schedule page with Calendly embed for streamlined booking. Rewired all "Schedule a Walkthrough" buttons site-wide to point to /schedule. Renamed all "Book a Discovery Call" / "Schedule a Discovery Call" buttons to "Schedule a Walkthrough". Removed Calendly embeds from Walkthrough and Contact pages (replaced with buttons linking to /schedule). The Walkthrough nav tab still points to the informational /walkthrough page.

### 2026-03-31 — Fix Calendly embed — absolute iframe with MutationObserver
**Files Modified:**
- src/components/CalendlyEmbed.tsx
- src/views/WalkthroughPage.tsx
- src/views/ContactPage.tsx
- src/index.css

**Summary:**
Fixed Calendly embed sizing — uses absolute-positioned iframe with MutationObserver to force full container fill. Fixed 900px container height. Eliminated all internal scrolling. Removed overflow-hidden from ContactPage wrapper. Simplified CSS overrides.

### 2026-03-31 — Fix Calendly embed sizing and layout
**Files Modified:**
- src/components/CalendlyEmbed.tsx
- src/views/WalkthroughPage.tsx
- src/views/ContactPage.tsx
- src/index.css

**Summary:**
Fixed Calendly embed sizing — removed constraining bordered wrapper containers on both Walkthrough and Contact pages. Increased minimum height to 1000px. Added dynamic iframe resizing via Calendly postMessage events. Updated CSS overrides. Calendar now displays at full size with no internal scrolling.

### 2026-03-31 — Fix Calendly embed — use explicit initInlineWidget API
**Files Modified:**
- src/components/CalendlyEmbed.tsx

**Summary:**
Fixed Calendly embed that wasn't loading due to reliance on data-url auto-detection (fails in React). Replaced with explicit Calendly.initInlineWidget() call. Added widget.css stylesheet loading, global Window type declaration, and three-phase loading (observe → load script → init widget). Real event URL confirmed on both Walkthrough and Contact pages.

### 2026-03-31 — Fix Find Your Operation matrix layout
**Files Modified:**
- src/components/FindYourOperationMatrix.tsx

**Summary:**
Fixed Find Your Operation matrix layout — now spans full section width using table-fixed layout. Removed horizontal scroll. Archetype columns distribute evenly across available space. Smaller dots and text on mobile for readability.

### 2026-03-31 — Implement Calendly inline embed with lazy loading
**Files Modified:**
- src/views/WalkthroughPage.tsx
- src/views/ContactPage.tsx
- src/views/HomePage.tsx
- src/index.css

**Files Created:**
- src/components/CalendlyEmbed.tsx

**Summary:**
Implemented Calendly inline embed on Walkthrough and Contact pages. Lazy-loads on scroll for performance. Branded with navy/gold colors. Shows loading skeleton while Calendly script initializes. Set minimum height to prevent internal scrolling. Replaced react-calendly PopupButton on HomePage with a Link to the Walkthrough page. Removed all react-calendly imports.

### 2026-03-31 — Replace Find Your Operation matrix with dot-matrix component
**Files Modified:**
- src/views/IndustriesPage.tsx

**Files Created:**
- src/components/FindYourOperationMatrix.tsx

**Summary:**
Replaced Find Your Operation matrix — industries now on left column, archetypes across top row. New dot-matrix visual style with hover-to-gold interaction. Improved legibility with larger text and clearer active/inactive states.

### 2026-03-31 — Fix font loading for Next.js migration
**Files Modified:**
- app/layout.tsx
- tailwind.config.js
- src/index.css

**Summary:**
Fixed font loading for Next.js — added Google Fonts `<link>` tags for Inter and Bebas Neue in layout.tsx (replacing CSS @import that only loaded Inter). Removed stale @import from index.css. Bebas Neue was previously loaded via index.html which was deleted during migration. Tailwind content paths confirmed correct for both app/ and src/ directories.

### 2026-03-31 — Migrate from Vite + React Router (CSR) to Next.js App Router (SSG)
**Summary:**
- Migrated entire site from Vite + React Router (CSR) to Next.js App Router (SSG)
- Every page now pre-rendered as static HTML — crawlers and social previews get real content
- Replaced 10 individual industry sub-page files with single dynamic [slug] route
- Package name corrected from "apex-consulting" to "bismark-consulting"
- Added SEO metadata (title + description) to every page route
- Removed react-router-dom, Vite, and all Vite config files
- Removed ScrollToTop component (Next.js handles scroll restoration natively)
- Deleted orphaned legacy files: ServicesPage, CaseStudiesPage, CaseStudyDetailPage, and unused home components
- Renamed src/pages to src/views to avoid Next.js pages directory conflict
- Moved static assets to public/images/

### 2026-03-31 — Migrate react-router-dom to Next.js routing
**Files Modified:**
- src/components/layout/Navbar.tsx
- src/components/layout/Footer.tsx
- src/components/layout/Logo.tsx
- src/components/IndustrySubPageLayout.tsx
- src/pages/HomePage.tsx
- src/pages/AboutPage.tsx
- src/pages/BismarkMethodPage.tsx
- src/pages/IndustriesPage.tsx
- src/pages/WalkthroughPage.tsx
- src/pages/FAQPage.tsx
- src/pages/AIPage.tsx
- src/pages/CaseStudiesPage.tsx
- src/pages/CaseStudyDetailPage.tsx
- src/components/home/CaseStudies.tsx
- src/components/home/Services.tsx
- src/components/home/Hero.tsx
- src/components/home/Industries.tsx
- src/components/home/ClientLogos.tsx
- src/components/home/Stats.tsx
- src/components/home/CTASection.tsx

**Files Deleted:**
- src/components/ScrollToTop.tsx

**Summary:**
Replaced all react-router-dom imports with Next.js equivalents (next/link, next/navigation). Changed Link `to=` props to `href=`, replaced useLocation with usePathname, useNavigate with useRouter, and useParams with next/navigation useParams. Added 'use client' directive to all files using React hooks, framer-motion, react-calendly, or Next.js navigation hooks.

### 2026-03-30 — Restored gold vertical bar accent on FAQ cluster headings
**Files Modified:**
- src/pages/FAQPage.tsx

**Summary:**
Restored the gold vertical bar (w-1 h-8 bg-gold-600) on each FAQ cluster heading with flex wrapper and gap-4 spacing.

### 2026-03-30 — Email domain update
**Files Modified:**
- src/pages/HomePage.tsx
- src/pages/ContactPage.tsx
- src/pages/WalkthroughPage.tsx
- src/pages/FAQPage.tsx
- src/pages/ServicesPage.tsx
- src/pages/CaseStudyDetailPage.tsx
- src/components/home/CTASection.tsx

**Summary:**
Changed email domain from bismarkconsulting.com to bismarkconsulting.net site-wide (11 occurrences across 7 files).

### 2026-03-30 — ContactPage, AboutPage, FAQPage targeted edits
**Files Modified:**
- src/pages/ContactPage.tsx
- src/pages/AboutPage.tsx
- src/pages/FAQPage.tsx

**Files Created:**
- (none)

**Files Deleted:**
- (none)

**Summary:**
- ContactPage: Updated reach text from "nationwide" to "nationally and internationally"
- AboutPage: Removed headshot image, OriginMap, and ConsultingFailureCycle; converted founder section to single-column layout
- FAQPage: Removed decorative gold bar dividers and rhombus section separators between FAQ clusters

### 2026-03-30 — Calendly Integration
**Files Modified:**
- src/pages/WalkthroughPage.tsx
- src/pages/ContactPage.tsx
- src/pages/HomePage.tsx
- package.json

**Files Created:**
- (none)

**Files Deleted:**
- (none)

**Summary:**
Embedded live Calendly scheduling widget on Walkthrough page (inline, 700px), Contact page (inline, 500px), and Home page CTA section (popup button). Removed all placeholder scheduling UI. Calendly URL: https://calendly.com/bismarkconsulting-info/walkthrough

### 2026-03-23 — Add AI teaser page at /ai
**Files Modified:**
- src/App.tsx
- src/components/layout/Navbar.tsx
- src/components/layout/Footer.tsx

**Files Created:**
- src/pages/AIPage.tsx

**Files Deleted:**
- (none)

**Summary:**
Created a teaser page announcing Bismark's proprietary AI system in development. Added /ai route, navbar link between FAQ and Contact, and footer link in the company group.

### 2026-03-23 — Resize hand illustration to align with Five Pillars list
**Files Modified:**
- src/pages/HomePage.tsx

**Files Created:**
- (none)

**Files Deleted:**
- (none)

**Summary:**
Constrained the hand image height to match the pillar list (max-h-[320px]), made the grid responsive (stacks on mobile), and vertically centered both columns.

### 2026-03-22 — Add visual enhancements: diagrams, process flows, and placeholder wireframes
**Files Modified:**
- src/pages/HomePage.tsx
- src/pages/AboutPage.tsx
- src/pages/BismarkMethodPage.tsx
- src/pages/WalkthroughPage.tsx
- src/pages/IndustriesPage.tsx
- src/pages/FAQPage.tsx

**Files Created:**
- src/components/visuals/EngagementPathway.tsx
- src/components/visuals/ConsultingFailureCycle.tsx
- src/components/visuals/HandMethodDiagram.tsx
- src/components/visuals/PillarStaircase.tsx
- src/components/visuals/WeeklyRhythmTimeline.tsx
- src/components/visuals/WalkthroughProcessFlow.tsx
- src/components/visuals/ArchetypeIconSet.tsx
- src/components/visuals/CrossIndustryMatrix.tsx
- src/components/visuals/OriginMap.tsx
- src/components/visuals/FAQSectionDivider.tsx

**Files Deleted:**
- (none)

**Summary:**
Created 10 custom SVG-based visual components (diagrams, process flows, icon grids, data matrix, placeholder wireframes) using the navy/gold design system and integrated them across 6 pages. Replaced the archetype text table on IndustriesPage with an icon grid, replaced the Hand icon on BismarkMethodPage with a hand-metaphor wireframe.

### 2026-03-22 — Fix scroll-to-top: remove smooth scroll CSS, clean up all workarounds
**Files Modified:**
- src/index.css
- src/App.tsx
- src/components/layout/Navbar.tsx
- src/components/layout/Footer.tsx
- src/components/layout/Logo.tsx
- src/components/IndustrySubPageLayout.tsx
- src/components/home/CaseStudies.tsx
- src/components/home/Services.tsx
- src/pages/HomePage.tsx
- src/pages/AboutPage.tsx
- src/pages/BismarkMethodPage.tsx
- src/pages/FAQPage.tsx
- src/pages/IndustriesPage.tsx
- src/pages/WalkthroughPage.tsx

**Files Created:**
- src/components/ScrollToTop.tsx

**Files Deleted:**
- src/components/ScrollLink.tsx
- src/components/TransitionLink.tsx
- src/pages/TransitionPage.tsx

**Summary:**
Removed `scroll-behavior: smooth` from index.css (the root cause), deleted all previous scroll workarounds (ScrollLink, TransitionLink, TransitionPage, /go route), reverted all Link imports to react-router-dom, and added a clean ScrollToTop component using useLayoutEffect in App.tsx.

### 2026-03-22 — Render white background div in TransitionPage instead of null
**Files Modified:**
- src/pages/TransitionPage.tsx

**Files Created:**
- (none)

**Files Deleted:**
- (none)

**Summary:**
TransitionPage now renders a full-height white div instead of null to prevent flash of previous page content during transition.

### 2026-03-22 — Use requestAnimationFrame in TransitionPage instead of setTimeout
**Files Modified:**
- src/pages/TransitionPage.tsx

**Files Created:**
- (none)

**Files Deleted:**
- (none)

**Summary:**
Replaced setTimeout-based navigation in TransitionPage with nested requestAnimationFrame calls for more reliable scroll-then-navigate timing.

### 2026-03-22 — Add TransitionPage and TransitionLink for scroll-then-navigate
**Files Modified:**
- src/App.tsx
- src/components/layout/Navbar.tsx
- src/components/layout/Footer.tsx

**Files Created:**
- src/pages/TransitionPage.tsx
- src/components/TransitionLink.tsx

**Files Deleted:**
- (none)

**Summary:**
Added a /go transition route that scrolls to top before navigating, and a TransitionLink wrapper component. Navbar and Footer now use TransitionLink instead of ScrollLink.

### 2026-03-22 — Revert to ScrollLink approach
**Files Modified:**
- src/main.tsx
- src/components/layout/Navbar.tsx
- src/components/layout/Footer.tsx
- src/components/layout/Logo.tsx
- src/components/IndustrySubPageLayout.tsx
- src/components/home/CaseStudies.tsx
- src/components/home/Services.tsx
- src/pages/AboutPage.tsx
- src/pages/BismarkMethodPage.tsx
- src/pages/FAQPage.tsx
- src/pages/HomePage.tsx
- src/pages/IndustriesPage.tsx
- src/pages/WalkthroughPage.tsx
- CHANGELOG.md

**Files Created:**
- (none)

**Files Deleted:**
- src/components/ScrollToTop.tsx

**Summary:**
Reverted two commits (scrollRestoration API and useLayoutEffect ScrollToTop) to restore the ScrollLink wrapper approach from commit 1b1b0ef.

### 2026-03-22 — Replace ScrollToTop with ScrollLink wrapper component
**Files Modified:**
- src/main.tsx
- src/components/layout/Navbar.tsx
- src/components/layout/Footer.tsx
- src/components/layout/Logo.tsx
- src/components/IndustrySubPageLayout.tsx
- src/components/home/CaseStudies.tsx
- src/components/home/Services.tsx
- src/pages/AboutPage.tsx
- src/pages/BismarkMethodPage.tsx
- src/pages/FAQPage.tsx
- src/pages/HomePage.tsx
- src/pages/IndustriesPage.tsx
- src/pages/WalkthroughPage.tsx

**Files Created:**
- src/components/ScrollLink.tsx

**Files Deleted:**
- src/components/ScrollToTop.tsx

**Summary:**
Replaced the ScrollToTop effect-based approach with a ScrollLink wrapper component that scrolls to top instantly before navigating. All internal `<Link>` usages swapped to `<ScrollLink>` across 12 files.

### 2026-03-22 — Use instant scroll behavior in ScrollToTop
**Files Modified:**
- src/components/ScrollToTop.tsx

**Files Created:**
- (none)

**Files Deleted:**
- (none)

**Summary:**
Changed ScrollToTop to use `behavior: 'instant'` to bypass the global smooth scroll CSS rule on route changes.

### 2026-03-22 — Add ScrollToTop utility component
**Files Modified:**
- src/main.tsx

**Files Created:**
- src/components/ScrollToTop.tsx

**Files Deleted:**
- (none)

**Summary:**
Added a ScrollToTop component that resets scroll position to the top on every route change, wired into BrowserRouter in main.tsx.

### 2026-03-19 — Scale Five Pillars image to match left column height
**Files Modified:**
- src/pages/HomePage.tsx
- CHANGELOG.md

**Files Created:**
- (none)

**Files Deleted:**
- (none)

**Summary:**
Changed Five Pillars grid to equal columns with items-stretch so the image fills the same height as the left column content.

### 2026-03-19 — Five Pillars heading inside grid, 1fr/auto columns, 160px image
**Files Modified:**
- src/pages/HomePage.tsx
- CHANGELOG.md

**Files Created:**
- (none)

**Files Deleted:**
- (none)

**Summary:**
Moved the "THE FIVE PILLARS" heading inside the left grid column alongside the list. Changed grid to grid-cols-[1fr_auto] with items-start alignment and set the image to a fixed 160px width.

### 2026-03-19 — Asymmetric grid and constrained image in Five Pillars layout
**Files Modified:**
- src/pages/HomePage.tsx
- CHANGELOG.md

**Files Created:**
- (none)

**Files Deleted:**
- (none)

**Summary:**
Changed the Five Pillars/image grid to an asymmetric 2fr/1fr split and capped the image width at 210px to prevent it from dominating the layout.

### 2026-03-19 — Five Pillars list and image side-by-side in Section 3
**Files Modified:**
- src/pages/HomePage.tsx
- CHANGELOG.md

**Files Created:**
- (none)

**Files Deleted:**
- (none)

**Summary:**
Restructured Section 3 so the Five Pillars ordered list and the hand metaphor image sit side by side in a nested two-column grid, with TLM content and remaining text above and below.

### 2026-03-19 — Converted Section 3 to two-column layout with image
**Files Modified:**
- src/pages/HomePage.tsx
- CHANGELOG.md

**Files Created:**
- (none)

**Files Deleted:**
- (none)

**Summary:**
Restructured HomePage Section 3 ("A Proven Methodology") into a two-column grid layout — left column contains all text content (TLM, Five Pillars, guarantee), right column contains the hand/five-pillars image.

### 2026-03-19 — Added hand/five-pillars image to HomePage and created CHANGELOG
**Files Modified:**
- src/pages/HomePage.tsx

**Files Created:**
- CHANGELOG.md

**Files Deleted:**
- (none)

**Summary:**
Added the hand/five-pillars metaphor image (src/assets/image004.jpg) to Section 3 of HomePage.tsx between the Five Pillars list and the apprentice model paragraph. Created CHANGELOG.md at the project root.
