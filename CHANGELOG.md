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
