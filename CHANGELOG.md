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

### 2026-05-04 — SEO/AEO foundation: sitemap, robots.txt, Organization JSON-LD

**Files Created:**
- src/lib/site-config.ts
- app/sitemap.ts
- app/robots.ts

**Files Modified:**
- app/layout.tsx

**Summary:**
Added SEO/AEO foundation. New src/lib/site-config.ts exports SITE_URL
(defaulting to https://bismarkconsulting.net, overridable via
NEXT_PUBLIC_SITE_URL env var) and SITE_NAME as the single source of truth
for production URL references. Generated sitemap covers all static routes
plus dynamic industry and insight slugs. robots.txt explicitly allows major
search and AI crawlers (Googlebot, Bingbot, GPTBot, ClaudeBot, PerplexityBot,
Google-Extended, OAI-SearchBot, CCBot, anthropic-ai). Root layout now emits
Organization (ProfessionalService) JSON-LD with founder, founding date,
Miami HQ, and 12 areas of expertise. metadataBase and openGraph.url in
app/layout.tsx now read from SITE_URL.

### 2026-05-04 — Contact page: drop "U.S." from international markets line

**Files Modified:**
- src/views/ContactPage.tsx

**Files Created:**
- (none)

**Files Deleted:**
- (none)

**Summary:**
Changed "Active client engagements across all major U.S. markets" to "Active client engagements across all major markets" on the Contact page. Aligns the body with the section's "INTERNATIONALLY" framing.

---

### 2026-05-04 — Align all page CTAs with Walkthrough-page CTA pattern; fix Contact page phrasing

**Files Modified:**
- src/views/HomePage.tsx
- src/views/AboutPage.tsx
- src/views/BismarkMethodPage.tsx
- src/views/IndustriesPage.tsx
- src/views/FAQPage.tsx
- src/views/ContactPage.tsx
- src/components/IndustrySubPageLayout.tsx

**Files Created:**
- (none)

**Files Deleted:**
- (none)

**Summary:**
After renaming the primary CTA button from "Schedule a Walkthrough" to "Schedule a Meeting", the surrounding CTA copy on six pages still described the Walkthrough rather than the meeting. Aligned every CTA section to mirror the Walkthrough page's "READY TO START?" pattern: a short body framing the meeting as the first step toward a Walkthrough, a "Click below to choose a time that works for you." line, the SCHEDULE A MEETING button (component unchanged on five pages, swapped on the About page where it replaced a redundant "Learn About the Walkthrough" button), and the "Prefer email?" fallback line. Also corrected one stale "schedule a walkthrough" phrase on the Contact page to "schedule a meeting." No structural, image, link, or component changes outside the About page button swap.

---

### 2026-05-03 — Align footer logo subtitle with nav bar logo

**Files Modified:**
- `src/components/layout/Logo.tsx`

**Summary:**
Aligned footer logo subtitle typography with nav bar logo (dark `Logo` variant). The "CONSULTING GROUP" subtitle on the dark variant now matches the light variant's typography, so the wordmark looks consistent in the navy footer and the white navbar. Old → new values for the dark variant subtitle:

- font-size: `9.5px` → `13px`
- font-weight: `700` → `700` (no change; the prior `isDark ? 700 : 700` ternary collapsed to a single value)
- letter-spacing: `0.22em` → `0.16em`
- paddingLeft: `0.22em` → `0.16em` (kept paired with letter-spacing for optical centering)

Light variant untouched. Gold divider, BISMARK wordmark sizing, color tokens (`titleColor`, `subtitleColor`), and the Cinzel `font-logo` font family all unchanged.

---

### 2026-05-03 — Swap licensed stock photos in and rename for consistency

**Summary:**
Replaced watermarked stock photos with licensed versions and renamed for consistency. Each licensed file in `public/images/stock-photos/` (named `shutterstock_NNNNNNNN.jpg`) was paired with its watermarked counterpart in `public/images/stock-watermarked/` (named `stock-photo-{description}-NNNNNNNN.jpg`) by trailing numeric ID; the licensed file was moved to `public/images/{description}-NNNNNNNN.jpg` (watermarked filename with `stock-photo-` prefix stripped) and the watermarked counterpart was deleted. 48 pairs swapped. All code references in `src/data/industries.ts`, `src/views/HomePage.tsx`, `src/views/BismarkMethodPage.tsx`, and `src/views/WalkthroughPage.tsx` updated to point at the new paths.

**Files Modified:**
- `src/data/industries.ts` — 20 image-path references updated from `/images/stock-watermarked/stock-photo-{description}-{ID}.jpg` to `/images/{description}-{ID}.jpg` across the 10 industry records' `heroImage` and `tileImage` fields.
- `src/views/HomePage.tsx` — 2 image-path references updated (factory floor + collaborative meeting hero/feature images).
- `src/views/BismarkMethodPage.tsx` — 3 image-path references updated (Weekly Rhythm card images).
- `src/views/WalkthroughPage.tsx` — 4 image-path references updated (`walkthroughPhases[].photo`).
- `CHANGELOG.md` — this entry.

**Files Created (image renames — licensed file moved into `public/images/`):**
  - `stock-watermarked/stock-photo-group-of-businesspeople-meeting-around-boardroom-table-284522282.jpg` → `group-of-businesspeople-meeting-around-boardroom-table-284522282.jpg` (licensed: `stock-photos/shutterstock_284522282.jpg`)
  - `stock-watermarked/stock-photo-group-of-businesspeople-meeting-around-boardroom-table-289559987.jpg` → `group-of-businesspeople-meeting-around-boardroom-table-289559987.jpg` (licensed: `stock-photos/shutterstock_289559987.jpg`)
  - `stock-watermarked/stock-photo-group-of-businesspeople-meeting-around-boardroom-table-290606381.jpg` → `group-of-businesspeople-meeting-around-boardroom-table-290606381.jpg` (licensed: `stock-photos/shutterstock_290606381.jpg`)
  - `stock-watermarked/stock-photo-point-of-view-shot-of-businesspeople-around-boardroom-table-290606432.jpg` → `point-of-view-shot-of-businesspeople-around-boardroom-table-290606432.jpg` (licensed: `stock-photos/shutterstock_290606432.jpg`)
  - `stock-watermarked/stock-photo-manager-in-discussion-with-coworker-in-an-open-plan-office-314863934.jpg` → `manager-in-discussion-with-coworker-in-an-open-plan-office-314863934.jpg` (licensed: `stock-photos/shutterstock_314863934.jpg`)
  - `stock-watermarked/stock-photo-smiling-professor-and-professionals-at-extension-business-courses-599459048.jpg` → `smiling-professor-and-professionals-at-extension-business-courses-599459048.jpg` (licensed: `stock-photos/shutterstock_599459048.jpg`)
  - `stock-watermarked/stock-photo-trains-at-railroad-yard-at-station-district-aerial-in-netherlands-1228227193.jpg` → `trains-at-railroad-yard-at-station-district-aerial-in-netherlands-1228227193.jpg` (licensed: `stock-photos/shutterstock_1228227193.jpg`)
  - `stock-watermarked/stock-photo-image-of-concentrated-office-worker-s-wearing-white-shirt-working-with-laptop-and-notebook-in-1303805275.jpg` → `image-of-concentrated-office-worker-s-wearing-white-shirt-working-with-laptop-and-notebook-in-1303805275.jpg` (licensed: `stock-photos/shutterstock_1303805275.jpg`)
  - `stock-watermarked/stock-photo-work-of-trucks-and-the-excavator-in-an-open-pit-on-gold-mining-soft-focus-1741881131.jpg` → `work-of-trucks-and-the-excavator-in-an-open-pit-on-gold-mining-soft-focus-1741881131.jpg` (licensed: `stock-photos/shutterstock_1741881131.jpg`)
  - `stock-watermarked/stock-photo-work-of-heavy-equipment-in-an-open-pit-for-gold-ore-mining-soft-focus-1951657093.jpg` → `work-of-heavy-equipment-in-an-open-pit-for-gold-ore-mining-soft-focus-1951657093.jpg` (licensed: `stock-photos/shutterstock_1951657093.jpg`)
  - `stock-watermarked/stock-photo-interior-of-an-empty-hotel-meeting-room-2046710963.jpg` → `interior-of-an-empty-hotel-meeting-room-2046710963.jpg` (licensed: `stock-photos/shutterstock_2046710963.jpg`)
  - `stock-watermarked/stock-photo-presentation-in-multi-ethnic-office-conference-room-meeting-of-diverse-young-entrepreneurs-2101929358.jpg` → `presentation-in-multi-ethnic-office-conference-room-meeting-of-diverse-young-entrepreneurs-2101929358.jpg` (licensed: `stock-photos/shutterstock_2101929358.jpg`)
  - `stock-watermarked/stock-photo-office-conference-room-meeting-presentation-black-businessman-talks-uses-tv-screen-to-show-2104457714.jpg` → `office-conference-room-meeting-presentation-black-businessman-talks-uses-tv-screen-to-show-2104457714.jpg` (licensed: `stock-photos/shutterstock_2104457714.jpg`)
  - `stock-watermarked/stock-photo-system-administration-and-machine-learning-engineer-programming-at-his-workstation-man-plans-and-2136788185.jpg` → `system-administration-and-machine-learning-engineer-programming-at-his-workstation-man-plans-and-2136788185.jpg` (licensed: `stock-photos/shutterstock_2136788185.jpg`)
  - `stock-watermarked/stock-photo-solo-brainstorming-shot-of-a-mature-businessman-writing-notes-at-his-desk-in-the-office-2139544961.jpg` → `solo-brainstorming-shot-of-a-mature-businessman-writing-notes-at-his-desk-in-the-office-2139544961.jpg` (licensed: `stock-photos/shutterstock_2139544961.jpg`)
  - `stock-watermarked/stock-photo-experienced-female-teacher-who-specializes-in-adult-education-teaches-a-lesson-to-adult-students-2172691007.jpg` → `experienced-female-teacher-who-specializes-in-adult-education-teaches-a-lesson-to-adult-students-2172691007.jpg` (licensed: `stock-photos/shutterstock_2172691007.jpg`)
  - `stock-watermarked/stock-photo-medical-ampoule-production-line-at-modern-modern-pharmaceutical-factory-glass-ampoules-are-being-2229913173.jpg` → `medical-ampoule-production-line-at-modern-modern-pharmaceutical-factory-glass-ampoules-are-being-2229913173.jpg` (licensed: `stock-photos/shutterstock_2229913173.jpg`)
  - `stock-watermarked/stock-photo-young-diverse-people-working-at-computers-call-center-office-men-and-women-in-headsets-talking-2231810853.jpg` → `young-diverse-people-working-at-computers-call-center-office-men-and-women-in-headsets-talking-2231810853.jpg` (licensed: `stock-photos/shutterstock_2231810853.jpg`)
  - `stock-watermarked/stock-photo-power-station-clean-modern-factory-petroleum-petrochemical-industry-building-outdoors-landscape-2264383115.jpg` → `power-station-clean-modern-factory-petroleum-petrochemical-industry-building-outdoors-landscape-2264383115.jpg` (licensed: `stock-photos/shutterstock_2264383115.jpg`)
  - `stock-watermarked/stock-photo-business-people-group-meeting-shot-from-top-view-in-office-profession-businesswomen-businessmen-2341450757.jpg` → `business-people-group-meeting-shot-from-top-view-in-office-profession-businesswomen-businessmen-2341450757.jpg` (licensed: `stock-photos/shutterstock_2341450757.jpg`)
  - `stock-watermarked/stock-photo-happy-latin-business-man-company-executive-manager-giving-presentation-on-whiteboard-at-employees-2353374135.jpg` → `happy-latin-business-man-company-executive-manager-giving-presentation-on-whiteboard-at-employees-2353374135.jpg` (licensed: `stock-photos/shutterstock_2353374135.jpg`)
  - `stock-watermarked/stock-photo-ev-production-line-on-advanced-automated-smart-factory-high-performance-electric-car-manufacturing-2374438937.jpg` → `ev-production-line-on-advanced-automated-smart-factory-high-performance-electric-car-manufacturing-2374438937.jpg` (licensed: `stock-photos/shutterstock_2374438937.jpg`)
  - `stock-watermarked/stock-photo-business-man-laptop-and-documents-with-reading-scroll-and-thinking-with-finance-review-budget-or-2383286421.jpg` → `business-man-laptop-and-documents-with-reading-scroll-and-thinking-with-finance-review-budget-or-2383286421.jpg` (licensed: `stock-photos/shutterstock_2383286421.jpg`)
  - `stock-watermarked/stock-photo-senior-older-indian-business-man-director-boss-ceo-leading-employees-team-meeting-presenting-2383724139.jpg` → `senior-older-indian-business-man-director-boss-ceo-leading-employees-team-meeting-presenting-2383724139.jpg` (licensed: `stock-photos/shutterstock_2383724139.jpg`)
  - `stock-watermarked/stock-photo-conveyor-line-for-production-cookies-at-confectionery-factory-modern-plant-for-biscuit-2385950087.jpg` → `conveyor-line-for-production-cookies-at-confectionery-factory-modern-plant-for-biscuit-2385950087.jpg` (licensed: `stock-photos/shutterstock_2385950087.jpg`)
  - `stock-watermarked/stock-photo-food-industry-biscuit-production-in-factory-on-conveyor-belt-modern-line-for-bakery-cookies-2395896913.jpg` → `food-industry-biscuit-production-in-factory-on-conveyor-belt-modern-line-for-bakery-cookies-2395896913.jpg` (licensed: `stock-photos/shutterstock_2395896913.jpg`)
  - `stock-watermarked/stock-photo-portrait-of-young-business-woman-working-at-computer-in-home-office-2396697369.jpg` → `portrait-of-young-business-woman-working-at-computer-in-home-office-2396697369.jpg` (licensed: `stock-photos/shutterstock_2396697369.jpg`)
  - `stock-watermarked/stock-photo-advanced-bright-modern-pharmaceutical-factory-medical-ampoule-production-line-rows-of-glass-vials-2422913545.jpg` → `advanced-bright-modern-pharmaceutical-factory-medical-ampoule-production-line-rows-of-glass-vials-2422913545.jpg` (licensed: `stock-photos/shutterstock_2422913545.jpg`)
  - `stock-watermarked/stock-photo-in-big-corporate-skyscraper-office-beautiful-caucasian-female-business-manager-using-computer-2435222639.jpg` → `in-big-corporate-skyscraper-office-beautiful-caucasian-female-business-manager-using-computer-2435222639.jpg` (licensed: `stock-photos/shutterstock_2435222639.jpg`)
  - `stock-watermarked/stock-photo--d-render-modern-manufacturing-plant-with-advanced-robotic-arms-operating-on-an-assembly-line-with-2445629951.jpg` → `-d-render-modern-manufacturing-plant-with-advanced-robotic-arms-operating-on-an-assembly-line-with-2445629951.jpg` (licensed: `stock-photos/shutterstock_2445629951.jpg`)
  - `stock-watermarked/stock-photo-a-diverse-group-of-smiling-industrial-professionals-collaborates-over-a-laptop-on-the-factory-floor-2455170065.jpg` → `a-diverse-group-of-smiling-industrial-professionals-collaborates-over-a-laptop-on-the-factory-floor-2455170065.jpg` (licensed: `stock-photos/shutterstock_2455170065.jpg`)
  - `stock-watermarked/stock-photo-a-warehouse-manager-guiding-a-diverse-team-during-an-inspection-pointing-out-details-while-staff-2512193885.jpg` → `a-warehouse-manager-guiding-a-diverse-team-during-an-inspection-pointing-out-details-while-staff-2512193885.jpg` (licensed: `stock-photos/shutterstock_2512193885.jpg`)
  - `stock-watermarked/stock-photo-engineer-and-technician-including-a-female-professional-engage-in-precise-measurement-and-data-2524747207.jpg` → `engineer-and-technician-including-a-female-professional-engage-in-precise-measurement-and-data-2524747207.jpg` (licensed: `stock-photos/shutterstock_2524747207.jpg`)
  - `stock-watermarked/stock-photo-crushing-stones-in-a-quarry-for-processing-minerals-cement-limestone-distribution-and-screening-2550718247.jpg` → `crushing-stones-in-a-quarry-for-processing-minerals-cement-limestone-distribution-and-screening-2550718247.jpg` (licensed: `stock-photos/shutterstock_2550718247.jpg`)
  - `stock-watermarked/stock-photo-fuel-tanker-car-refueling-large-quarry-dump-truck-in-mining-quarry-night-work-2563694017.jpg` → `fuel-tanker-car-refueling-large-quarry-dump-truck-in-mining-quarry-night-work-2563694017.jpg` (licensed: `stock-photos/shutterstock_2563694017.jpg`)
  - `stock-watermarked/stock-photo-spreadsheet-document-information-financial-startup-concept-data-and-graphs-in-spreadsheet-2569398921.jpg` → `spreadsheet-document-information-financial-startup-concept-data-and-graphs-in-spreadsheet-2569398921.jpg` (licensed: `stock-photos/shutterstock_2569398921.jpg`)
  - `stock-watermarked/stock-photo-two-workers-wearing-safety-nets-and-white-lab-coats-observing-machinery-and-equipment-in-food-2575453649.jpg` → `two-workers-wearing-safety-nets-and-white-lab-coats-observing-machinery-and-equipment-in-food-2575453649.jpg` (licensed: `stock-photos/shutterstock_2575453649.jpg`)
  - `stock-watermarked/stock-photo-senior-businessman-signing-a-contract-during-a-team-meeting-in-a-modern-office-surrounded-by-2601004763.jpg` → `senior-businessman-signing-a-contract-during-a-team-meeting-in-a-modern-office-surrounded-by-2601004763.jpg` (licensed: `stock-photos/shutterstock_2601004763.jpg`)
  - `stock-watermarked/stock-photo-the-image-showcases-professionals-engaged-in-a-collaborative-meeting-highlighting-teamwork-2608768835.jpg` → `the-image-showcases-professionals-engaged-in-a-collaborative-meeting-highlighting-teamwork-2608768835.jpg` (licensed: `stock-photos/shutterstock_2608768835.jpg`)
  - `stock-watermarked/stock-photo-businessman-stamping-approved-on-real-estate-contract-concept-of-property-agreement-mortgage-2623011873.jpg` → `businessman-stamping-approved-on-real-estate-contract-concept-of-property-agreement-mortgage-2623011873.jpg` (licensed: `stock-photos/shutterstock_2623011873.jpg`)
  - `stock-watermarked/stock-photo-quarry-excavator-works-at-night-loading-ore-open-pit-mine-2635969119.jpg` → `quarry-excavator-works-at-night-loading-ore-open-pit-mine-2635969119.jpg` (licensed: `stock-photos/shutterstock_2635969119.jpg`)
  - `stock-watermarked/stock-photo-aerial-view-of-offshore-jack-up-drilling-rig-during-sunset-oil-and-gas-industry-2649447229.jpg` → `aerial-view-of-offshore-jack-up-drilling-rig-during-sunset-oil-and-gas-industry-2649447229.jpg` (licensed: `stock-photos/shutterstock_2649447229.jpg`)
  - `stock-watermarked/stock-photo-industrial-ball-mill-grinds-ore-at-mining-and-concentrating-plant-concentration-factory-for-copper-2659599515.jpg` → `industrial-ball-mill-grinds-ore-at-mining-and-concentrating-plant-concentration-factory-for-copper-2659599515.jpg` (licensed: `stock-photos/shutterstock_2659599515.jpg`)
  - `stock-watermarked/stock-photo-glasses-asian-woman-holding-pencil-and-thinking-beside-laptop-and-coffee-on-wooden-table-in-library-2662150007.jpg` → `glasses-asian-woman-holding-pencil-and-thinking-beside-laptop-and-coffee-on-wooden-table-in-library-2662150007.jpg` (licensed: `stock-photos/shutterstock_2662150007.jpg`)
  - `stock-watermarked/stock-photo-close-up-of-hand-stamping-a-contract-clipboard-contracts-and-the-final-stages-of-a-business-2663071951.jpg` → `close-up-of-hand-stamping-a-contract-clipboard-contracts-and-the-final-stages-of-a-business-2663071951.jpg` (licensed: `stock-photos/shutterstock_2663071951.jpg`)
  - `stock-watermarked/stock-photo-a-group-of-four-diverse-colleagues-of-various-ages-all-dressed-in-business-suits-sitting-at-their-2676202263.jpg` → `a-group-of-four-diverse-colleagues-of-various-ages-all-dressed-in-business-suits-sitting-at-their-2676202263.jpg` (licensed: `stock-photos/shutterstock_2676202263.jpg`)
  - `stock-watermarked/stock-photo-business-professionals-and-workers-in-safety-gear-discuss-operations-on-the-manufacturing-floor-of-2682848161.jpg` → `business-professionals-and-workers-in-safety-gear-discuss-operations-on-the-manufacturing-floor-of-2682848161.jpg` (licensed: `stock-photos/shutterstock_2682848161.jpg`)
  - `stock-watermarked/stock-photo-ostrava-czech-republic-sept-container-trains-transport-freight-to-and-from-a-shipping-2736633411.jpg` → `ostrava-czech-republic-sept-container-trains-transport-freight-to-and-from-a-shipping-2736633411.jpg` (licensed: `stock-photos/shutterstock_2736633411.jpg`)

**Files Deleted (watermarked counterparts):**
- All 48 watermarked counterparts listed in the rename table above are now removed from `public/images/stock-watermarked/`.

**Files Intentionally Left Alone (unmatched, no counterpart):**
- `public/images/stock-photos/shutterstock_1476196685.jpg` — licensed image with no watermarked counterpart; kept in place.
- `public/images/stock-photos/shutterstock_2231710989.jpg` — licensed image with no watermarked counterpart; kept in place.
- `public/images/stock-watermarked/stock-photo-close-shot-of-a-worker-standing-on-a-platform-and-examining-potatoes-on-conveyor-belt-in-a-factory-1869278881.jpg` — watermarked image with no licensed counterpart; kept in place.
- `public/images/stock-watermarked/stock-photo-robotic-manufacturing-conveyor-production-line-belgian-waffles-automatic-bakery-plant-food-factory-2409842881.jpg` — watermarked image with no licensed counterpart; kept in place.

**Build verification:**
- `npm run build` clean — 25 static pages generated, TypeScript compilation succeeded, zero errors and zero warnings.
- Final `ls public/images/ | grep -E '(shutterstock|stock-photo)'` shows only the `stock-photos/` and `stock-watermarked/` subdirectories (no stray watermarked or shutterstock-prefixed files in `public/images/` itself).

---

### 2026-05-03 — Apply cleaned copy across HomePage, AboutPage, BismarkMethodPage, WalkthroughPage, IndustriesPage, FAQ, and industries data

**Files Modified:**
- `src/views/HomePage.tsx` — body copy across all 9 sections aligned to cleaned-copy punctuation rhythm (em-dashes converted to commas/colons/parens/periods per the cleaned-copy editorial style); replaced `getRandomPairings(5)` with a static 5-item array of curated industry/operation pairings (Food Production & Distribution / Enterprise Technology / Industrial Technology / Healthcare / Financial Processing). Note: HEALTHCARE and FINANCIAL PROCESSING are intentional marketing-display variants and are not links to industry sub-pages. Removed `getRandomPairings` import. Section headings, JSX scaffolding, image references, links, Calendly buttons, and the Insights teaser data import were all preserved.
- `src/views/AboutPage.tsx` — body copy in "Our Origin", "What We Believe", founder bio, "The Team Behind the Method", bridge CTA, and final CTA aligned to cleaned-copy punctuation rhythm. Hero, credentials list (4 items in same order), and section structure unchanged.
- `src/views/BismarkMethodPage.tsx` — hero subhead, "The Problem" body, hand-metaphor body, TLM body + "Why TLM Matters", 5 Pillar lede + all 5 pillar `description` fields in the in-file `pillars[]` array, Weekly Rhythm card subheaders (e.g., `MONDAY: LEARN`), Weekly Rhythm card bodies, "The Stake" copy + WHAT'S BEING GUARANTEED + WHAT ACTIVATES THE GUARANTEE, "Engaging With the 5 Pillars Alone" body, "What Your Organization Needs to Commit" lede + 3 commitment bodies, "Why It Works" lede + 3 numbered bodies, and final CTA all aligned to cleaned-copy punctuation. The 6 TLM concepts list, the in-file `phases[]` array (em-dash → colon in Phase 1 + Phase 2 descriptions), and the Stake™ trademark symbol all preserved.
- `src/views/WalkthroughPage.tsx` — hero subhead, "What the Walkthrough Actually Is" trailing paragraph, all 4 `walkthroughPhases` `description` and `activities` fields, the trailing forward-paths line ("...We don't decide in advance. The data does."), `walkthroughIs[3]` colon → comma, all 4 `idealCandidates` bodies, all 4 `preparationItems` bodies, idealCandidates trailing paragraph, and "Ready to Start?" lede aligned to cleaned-copy punctuation. The "THE WALKTHROUGH EXPERIENCE" eyebrow pill was intentionally preserved (cleaned copy is silent on it).
- `src/views/IndustriesPage.tsx` — hero subhead, "Patterns Behind Every Operation" body + trailing line, and final CTA body aligned to cleaned-copy punctuation. The 12 archetypes are rendered by `<ArchetypeIconSet />` in `src/components/visuals/` (out-of-scope per "Do Not Touch") so the archetype labels themselves were not modified. The matrix legend ("Active archetype", "Not active", "Hover to highlight") inside `<FindYourOperationMatrix />` was also not touched per the "Do Not Touch" guard. No new "Industries We Serve" section was added — the existing grid already renders the 10 industry/descriptor pairs.
- `src/data/industries.ts` — 89 em-dash escapes (`—`) converted to commas across all 10 industry records, with targeted follow-up fixes converting 27 specific cases to colons (e.g., "across channels: broker, direct, digital, correspondent"), parens (e.g., "Gathering required documentation (income, assets, identity, property) and validating..."), or periods (Industrial Tech transformationSummary). All 10 industry records' `slug`, `name`, `descriptor`, `processCount`, `activeArchetypes`, `prev`/`next`, `heroImage`, and `tileImage` fields preserved. Process counts (16/14/14/16/14/14/16/16/14/14) match the cleaned copy exactly. Process record order, archetype activation flags, and the `Industry`/`Process` types are unchanged.
- `src/data/faq.ts` — 51 em-dash escapes converted to commas across all 4 clusters' `answer` fields, with targeted follow-up fixes converting specific cases to em-dashes (the 5 pillar definitions: `Pillar 1: Customer Profile — Defining...`), parens (`without TLM (and some clients do) but the hand`), and periods ("...built in a lab. It was built in operations..." / "right tools in the right situations. And through that coaching..."). Cluster count (4), cluster order (Understanding Bismark / Evaluating the Method / Planning the Engagement / Assessing Risk and Results), question order (4/5/8/6 questions per cluster), and the `FAQItem`/`FAQCluster` types are unchanged.
- `CHANGELOG.md` — this entry.

**Files Created:**
- (none)

**Files Deleted:**
- `src/data/industryRotation.ts` — orphan after HomePage was switched from random rotation to a static 5-item array. No other consumers (verified via grep).

**Build verification:**
- `npx tsc --noEmit` clean — zero errors.
- `npm run build` clean — 25 static pages generated, TypeScript ok with strict unused-import checking. No console warnings from this change.

**Pre-flight gaps that required user decisions (all confirmed by Marco before editing):**
- **G1 (em-dash normalization):** Cleaned copy uses commas/colons/parens/periods in place of em-dashes throughout. Followed cleaned copy character-for-character; did not preserve `&mdash;` for "stylistic emphasis."
- **G3 (industry rotation):** Replaced random `getRandomPairings(5)` with a static 5-item array per cleaned copy. `industryRotation.ts` deleted as orphan. HEALTHCARE and FINANCIAL PROCESSING in the static array are intentional marketing-display variants (not links to `industries.ts` sub-pages).
- **G10 (Industries We Serve list):** No new section added — the existing grid already renders the 10 industry/descriptor pairs. Cleaned copy's "Industries We Serve" block is documentation of where descriptors live.
- **G7 (image stands in for the "non-negotiable order" line):** Left alone (alt text on `/content/why-the-order-is-non-negotiable.png` already carries the line, and the image is in the "Do Not Touch" image-references list).
- **G9 ("THE WALKTHROUGH EXPERIENCE" eyebrow):** Left alone (cleaned copy is silent on it; silence = leave alone per Step 4 rule #1).
- **G11 (`<ArchetypeIconSet />`):** Left alone (lives in `src/components/visuals/**`, hard "Do Not Touch").
- **G13/G14 (FAQ hero, FAQ closing CTA):** Already correct in code — no change needed.

**Known follow-up:**
The em-dash → comma global replace inside `faq.ts` produced ~50 comma-separated clauses where the cleaned copy might have used a different punctuation choice in 5–10 individual cases (period split, paren wrap, or colon). The dominant editorial pattern (comma) was applied; targeted follow-up fixes covered the most awkward cases. A future copy-consistency pass against the cleaned copy can resolve any remaining individual-clause readability issues.

---

### 2026-05-03 — Refresh CTAs, contact copy, industry nav, hand image, and AI page copy

**Files Modified:**
- `src/views/WalkthroughPage.tsx` — CalendlyButton label changed from `SELECT A DATE & TIME` to `SCHEDULE A MEETING`.
- `src/views/ContactPage.tsx` — `WHERE WE WORK` section's first card label changed from `NATIONWIDE` to `INTERNATIONALLY` (preserved uppercase). The card's body copy ("Active client engagements across all major U.S. markets") was left untouched per scope.
- `src/components/IndustrySubPageLayout.tsx` — removed the `{/* Sub-page Navigation */}` `<section>` block that rendered the prev/next industry links and the "Back to Industries" link above the footer on every dynamic `/industries/[slug]` page. Removed the now-unused `prevIndustry`/`nextIndustry` lookup logic and the now-unused imports: `Link` from `next/link`, `ArrowLeft`/`ArrowRight` from `lucide-react`, and the `industries` named import from `../data/industries`. Kept `Image`, `CalendlyButton`, `WireframePlaceholder`, the `Industry` type import, and the `ArrowRight`-unrelated remaining icons all unchanged. The `prev` / `next` fields on individual `Industry` entries in `src/data/industries.ts` are now dead data (no consumer) but were intentionally left in place per scope.
- `src/views/AIPage.tsx` — `HOW WE THINK ABOUT AI` section paragraph 1: changed `automation only works on operations that have been seen clearly first` to `automation only works on operations that have been optimized`. Paragraph 2: changed `holding gains, catching drift, and monitoring what matters` to `holding gains, monitoring what matters and understanding where change is needed`. The closing `The engagement ends; the results shouldn't.` (with curly apostrophe via `&rsquo;`) is unchanged.
- `public/images/the-bismark-method-hand.png` — cropped from 1162 × 1354 to 1162 × 1224 (removed the bottom 130px / 9.6% of height). The cropped strip held the `MANUFACTURING THE BACK OFFICE: THE BISMARK METHOD™` two-line text band and a thin white footer bar. Saved back to the same filename so all existing references continue to work without source changes. No `@2x` or other variant exists.

**Files Created:**
- (none)

**Files Deleted:**
- (none — `IndustrySubPageLayout.tsx` is still the right component; only the prev/next section inside it was removed.)

**Build verification:**
- `npm run build` clean — 25 static pages generated, TypeScript ok with strict unused-import checking. Static-HTML grep confirmed: `walkthrough.html` shows `SCHEDULE A MEETING` × 1 and `SELECT A DATE` × 0; `contact.html` shows `INTERNATIONALLY` and `NATIONWIDE` × 0; `ai.html` shows `have been optimized` and `understanding where change is needed` and `seen clearly first` × 0 and `catching drift` × 0; `industries/banking-lending.html` shows `Back to Industries` × 0. Hand image was viewed after cropping — text band confirmed gone, hand silhouette and all five labels intact, navy padding balanced top and bottom.

**Decisions and notes:**
- **Task 1 (`virtual meeting` → `walkthrough`):** Grep returned no live code hits — only one historical mention inside `CHANGELOG.md` describing the *previous* short-lived rename. Per project standard, CHANGELOG history is immutable. **No code change made.** The `SCHEDULE A MEETING` button label site-wide is unrelated to this grep target.
- **Task 2 (`Select a Date and Time`):** Grep found exactly one in-code hit in `WalkthroughPage.tsx` (case A — a `CalendlyButton` `label` prop on our side). Renamed. The text **also** appears inside Calendly's hosted iframe (case B), which we cannot modify cross-origin per project standard. Flagged: *"Select a Date and Time" lives in Calendly's iframe and must be changed in Calendly event settings, not in code* — applies to the booking widget itself once it loads.
- **Task 5 (hand image):** Chose **crop**, not paint-over. The text band sits at the bottom edge of the canvas, separated from the hand wrist by a clean ~40px navy gap, with no overlap on the hand or any of the five pillar labels. Cropping at y=1224 produced a tighter composition with balanced navy padding above and below the hand; painting over would have left an awkward solid navy strip below the wrist and made the canvas feel artificially padded.

---

### 2026-05-03 — Replace Non-Negotiable Order callout with static diagram image

**Files Created:**
- (none)

**Files Modified:**
- `src/views/BismarkMethodPage.tsx`

**Files Deleted:**
- (none)

**Summary:**
Bismark Method page: replaced the entire gold-bordered "WHY THE ORDER IS NON-NEGOTIABLE" callout (heading, `PillarCircularFlow` SVG, three body paragraphs) with a single `next/image` embed of `/content/why-the-order-is-non-negotiable.png` (1672 × 941) — a self-contained designed asset that includes its own heading, circular five-pillar diagram, "Most firms start here" callout, and explanatory body text. Removed the now-unused `PillarCircularFlow` import. The `PillarCircularFlow.tsx` and `PillarSequenceFlow.tsx` component files are intentionally left in place as orphans (not referenced anywhere). The hand image swap from the previous run (`/images/the-bismark-method-hand.png`) is unchanged.

---

### 2026-05-03 — Swap hand image and rebuild Non-Negotiable Order diagram

**Files Created:**
- `src/components/visuals/PillarCircularFlow.tsx`

**Files Modified:**
- `src/views/BismarkMethodPage.tsx`

**Files Deleted:**
- (none)

**Summary:**
Two Tracks, One Method section: replaced hand image src from `/images/image004.jpg` to the new `/images/the-bismark-method-hand.png` (alt, dimensions, className unchanged). Non-Negotiable Order Callout: replaced horizontal `PillarSequenceFlow` SVG with new `PillarCircularFlow` component — five pillar nodes arranged in a clockwise pentagon connected by curved gold arrows, with red "Most firms start here" callout pointing at Pillar 03. Body text in the callout updated from single paragraph to three paragraphs covering the disciplined cycle and Continuous Improvement as the only legitimate re-entry point. Old `PillarSequenceFlow.tsx` and `image004.jpg` files left in place untouched.

---

### 2026-05-03 — AI page hero: remove bold from COMING 2026

**Files Modified:**
- `src/views/AIPage.tsx`

**Summary:**
Removed `font-bold` from the COMING 2026 hero label on the AI page. Size, color, font family, tracking, and margin unchanged.

---

### 2026-05-03 — Navbar capitalization, contact reach text, AI page hero polish

**Files Modified:**
- `src/components/layout/Navbar.tsx`
- `src/views/ContactPage.tsx`
- `src/views/AIPage.tsx`

**Summary:**
Navbar: capitalized "M" in "meeting" on the Schedule button (both desktop and mobile, kept identical) so it now reads "Schedule a Meeting". Contact page WHERE WE WORK section: dropped "nationwide and" so the sentence now reads "we serve clients internationally." AI page hero: deleted the subhead paragraph ("Bismark is developing a proprietary AI system…"); replaced the "COMING 2026" gold pill with large bold gold text (text-6xl mobile / text-9xl desktop, font-bold, no background) sized to roughly span the width of the H1's first line. Gold divider below H1 left in place.

---

### 2026-05-03 — AI page Section 2 heading rename

**Files Modified:**
- `src/views/AIPage.tsx`

**Summary:**
Renamed Section 2 heading on the AI page from "THE SUSTAINABILITY GAP" to "HOW WE THINK ABOUT AI". Section comment updated to match. Body copy and styling unchanged.

---

### 2026-05-03 — AI page content updates

**Files Modified:**
- `src/views/AIPage.tsx`

**Summary:**
Hero: replaced plain gold "COMING 2026" text with a solid gold pill matching the Bismark Method hero pattern; replaced H1 "THE ENGAGEMENT ENDS. THE RESULTS SHOULDN'T." with "REAL AI LEVERAGE STARTS WITH OPERATIONAL DEPTH." Sustainability Gap section body rewritten — new copy frames the Bismark Method as a prerequisite to automation and ends on "the engagement ends; the results shouldn't." Deleted "What We Can Tell You" section (three icon cards: Shield, Eye, Zap) and "First Deployment: Late 2026" section. Removed unused lucide-react imports. Renumbered remaining CTA section comment from SECTION 5 to SECTION 3. Page now has 3 sections: Hero, Sustainability Gap, CTA.

---

### 2026-05-03 — CTA rename + contact page layout

**Files Modified:**
- `src/components/CalendlyButton.tsx` — default `label` prop value changed from `'SCHEDULE A WALKTHROUGH'` to `'SCHEDULE A MEETING'`. Component still uses the same prop pattern; no API change.
- `src/components/layout/Navbar.tsx` — both gold CTA buttons (desktop nav at line 48, mobile nav at line 78) changed from `Schedule a Walkthrough` to `Schedule a meeting` (sentence case, intentional deviation from the site-wide uppercase button convention). No `uppercase` utility class needed to be removed — these buttons use `text-sm font-semibold` only and render their source string verbatim, so the previous "Schedule a Walkthrough" was already rendering in the case of its source. The "Walkthrough" link inside `navigation.map(...)` (the actual nav menu link to `/walkthrough`) was intentionally left unchanged.
- `src/views/HomePage.tsx` — both `<CalendlyButton>` callsites updated (`label="SCHEDULE A WALKTHROUGH"` → `label="SCHEDULE A MEETING"`).
- `src/views/IndustriesPage.tsx` — single `<CalendlyButton>` callsite updated.
- `src/views/BismarkMethodPage.tsx` — both `<CalendlyButton>` callsites updated.
- `src/views/AIPage.tsx` — single `<CalendlyButton>` callsite updated.
- `src/components/IndustrySubPageLayout.tsx` — single `<CalendlyButton>` callsite updated (drives the CTA on all 10 dynamic `/industries/[slug]` pages).
- `src/views/insights/WhatHappensAfterConsultantsLeave.tsx` — `<CalendlyButton>` callsite at the article footer updated.
- `src/views/insights/WhyImprovementTeamStartsAtOrgChart.tsx` — `<CalendlyButton>` callsite at the article footer updated.
- `src/views/ContactPage.tsx` — deleted the entire right-column block: the `BISMARK CONSULTING GROUP` info card (email, headquarters, founded blocks) plus the `BUSINESS HOURS` strip; the `SCHEDULE A WALKTHROUGH` heading + descriptive sentence + plain `<button>` CTA card; and the `MINIMUM ENGAGEMENT` $1M+ / 5–10x ROI gold card. Replaced the wrapping `<div className="grid md:grid-cols-2 gap-12">` 2-column grid + outer `<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">` with a single centered `<div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">` container. The form's outer `<section className="py-20">` vertical padding is preserved. Form fields, validation, submit handler against `/api/contact`, success/error UI states, and the `SEND US A MESSAGE` heading + intro paragraph above the form are unchanged. Removed two now-unused imports: `Mail` from `lucide-react` (was only used in the deleted company-info card) and the entire `openCalendlyPopup` import from `../utils/openCalendlyPopup` (was only used by the deleted plain-`<button>` walkthrough CTA).

**Files Created:**
- (none)

**Files Deleted:**
- (none)

**Build verification:**
- `npm run build` clean — 25 static pages generated, TypeScript ok with strict unused-import checking enabled. No console warnings introduced.
- Verification grep run after the rename: zero remaining hits for `Schedule a Walkthrough` / `SCHEDULE A WALKTHROUGH` in any category-A button-label context. Remaining hits are all intentionally preserved page metadata (`<title>`/OG titles in `app/walkthrough/page.tsx` and `app/schedule/page.tsx`), the `<h1>` page heading on `src/views/SchedulePage.tsx`, and the email-template button text inside `app/api/contact/route.ts` (left untouched per the explicit "DO NOT CHANGE: The Resend API route" guard).

**Summary:**
Renamed all Calendly CTA button labels site-wide. Default label is now `SCHEDULE A MEETING` (uppercase, matching the site's button convention). The single exception is the nav-bar CTA, which renders as `Schedule a meeting` in sentence case — a deliberate visual deviation. The button's destination is the Calendly booking flow, which schedules a 30-minute virtual intro meeting; the on-site Walkthrough is then scheduled from that meeting. Section headings, body copy describing the Walkthrough, the `/walkthrough` page name, and the Calendly URL slug were intentionally left unchanged — they describe the actual on-site engagement, which is unchanged.

Contact page: removed the right-side info column entirely (company details, business hours, walkthrough CTA card, minimum engagement card) and centered the contact form in the available space (single `max-w-2xl mx-auto` container).

**Known follow-up needed:**
- `<h1>SCHEDULE A WALKTHROUGH</h1>` on `src/views/SchedulePage.tsx` and the page `<title>`/OG metadata on `app/walkthrough/page.tsx` and `app/schedule/page.tsx` still say "Walkthrough" — they sit directly above buttons that now read "SCHEDULE A MEETING". Copy-consistency review pending.
- Body copy describing the Walkthrough as a "complimentary, on-site assessment" / "3–5 day on-site" appears on multiple views (HomePage, AIPage, BismarkMethodPage, IndustrySubPageLayout, insight articles) and may need reconciliation with the new "schedule a meeting" CTA framing — though the spec frames the new CTA as scheduling the *intro virtual meeting* that leads into the on-site Walkthrough, so this body copy may still be correct.
- `app/api/contact/route.ts:74` — the `SCHEDULE A WALKTHROUGH` button inside the Resend confirmation email HTML template was intentionally NOT renamed; the spec's "DO NOT CHANGE: The Resend API route" guard applied. End users receiving the confirmation email will see this CTA in the old wording until that template is also updated.
- No analytics event names referencing "walkthrough" were found in this codebase (`openCalendlyPopup` triggers Calendly's own popup without any custom analytics dispatch). Nothing to preserve.

---

### 2026-05-03 — Insights: revised existing article + added new "Org Chart" article

**Files Modified:**
- `src/views/insights/WhatHappensAfterConsultantsLeave.tsx` — aligned the rendered prose with the revised v2 markdown at `public/content/what-happens-after-consultants-leave.md`. Removed two stale `<RelatedCallout>` blocks (and the now-unused `RelatedCallout` component definition) that referenced articles not present in the revised source. Updated the author bio strip to read "Founder & Managing Director of Bismark Consulting" (was "Bismark Consulting Group") to match the bio text in the revised markdown. Section structure (opening → Condition → Mercenary Model → Survive Until They Leave → Maintenance Trap → Grand Misperception → The Objections I Know You're Thinking → What Has to Be Structurally Different → closing → bio → CTA), the "Grand Misperception" pull quote, and the five bolded objection sub-headings were already present and verified against the markdown.
- `src/data/insights.ts` — appended a second `InsightMeta` entry for the new article (`slug: 'org-chart-guarantees-rework'`, title "Why Your Improvement Team Starts at the Org Chart", subtitle "And Why That Guarantees Rework", author Luis Telleria-Xucla, `publishedDate: '2026-05-03'`, `readingTimeMinutes: 18`, plus the spec-mandated excerpt). Existing entry untouched.
- `app/insights/[slug]/page.tsx` — imported the new `WhyImprovementTeamStartsAtOrgChart` view and added the `'org-chart-guarantees-rework'` key to the `articleComponents` map so the dynamic route resolves the new slug. `generateStaticParams` already iterates `insights`, so the new slug is statically generated automatically.

**Files Created:**
- `src/views/insights/WhyImprovementTeamStartsAtOrgChart.tsx` — new article view, mirroring the structural pattern of `WhatHappensAfterConsultantsLeave.tsx` (hero block, `SectionBreak` component, `border-l-4 border-gold-600` pull quotes, bolded objection sub-headings, gray-50 author bio strip with gold top border, navy-900 CTA strip with `CalendlyButton`). 11 prose sections (opening + 10 named) plus bio and CTA, three pull quotes (one inside "The Way Companies Are Actually Built", one closing "The Sequence That Actually Matters", one inside "The Deeper Problem"), six bolded objection sub-headings inside "The Objections I Know Are Coming". Prose copied verbatim from the markdown source — emphasis preserved (`*italic*` → `<em>`, `**bold**` → `<strong className="text-navy-900">`).

**Files Deleted:**
- (none — the markdown sources at `public/content/what-happens-after-consultants-leave.md` and `public/content/org-chart-guarantees-rework.md` were placed by the user prior to this session and are retained as the authoritative prose source.)

**Build verification:**
- `npm run build` clean — 25 static pages generated. Both insight URLs (`/insights/what-happens-after-consultants-leave` and `/insights/org-chart-guarantees-rework`) listed under the SSG `/insights/[slug]` route. TypeScript ok, zero compile errors, zero warnings from our code (the inferred-workspace-root warning about the parent `package-lock.json` is pre-existing and unrelated to this change). Home page Insights section auto-pulls from `src/data/insights.ts` via the shared `InsightCard`, so the new article appears on `/` and `/insights` without any further wiring.

**Summary:**
Aligned the existing "What Happens After the Consultants Leave" article view with its revised v2 markdown (removed stale Related callouts, fixed author bio firm name) and added a new full-length insight article "Why Your Improvement Team Starts at the Org Chart" at `/insights/org-chart-guarantees-rework`, mirroring the existing article's hero, section, pull-quote, and CTA treatments. Both articles now expose objection sub-headings in the same bolded inline style.

---

### 2026-05-03 — Reverts, carousel pause removal, founder photo

**Files Modified:**
- `src/views/HomePage.tsx` — reverted the Five Pillars right-column image sizing to its pre-resize state (parent commit `2f4cee9`): outer `<div>` no longer has `flex md:justify-end`, inner `<div>` no longer has `max-w-[200px]`, and `sizes` is restored to `"(min-width: 768px) 50vw, 100vw"`. Insights section, carousel-arrows commit, and image swaps from `0aa137b` are all preserved — only the resize portion was undone via manual line restore.
- `src/components/IndustryHeroCarousel.tsx` — removed pause-on-hover. Dropped the `isPaused` state and its setter, the `if (isPaused || …)` gate inside `startTimer`, and the `onMouseEnter` / `onMouseLeave` / `onFocus` / `onBlur` handlers from the carousel container. The carousel now advances every 3s unconditionally. Arrow controls and their reset-and-restart timer behavior are unchanged.
- `src/views/AboutPage.tsx` — swapped the Luis headshot slot's image `src` to `/images/Luis-Telleria-Professional-Photo.png` and updated `alt` to `Luis Telleria-Xucla — Founder & Managing Director, Bismark Consulting Group`. The wrapper (`<div className="relative w-full aspect-[3/4] overflow-hidden">`) and `<Image fill … />` structure were already in place from the earlier placeholder pass — only `src` and `alt` changed.

**Files Created:**
- (none)

**Files Deleted:**
- (none)

**Summary:**
Reverted the home-page Five Pillars adjacent image to its prior size. Removed pause-on-hover from the industries hero carousel — it now advances every 3s regardless of mouse position. Arrow controls and their interval-reset behavior preserved. Added the real founder photo to the About page; other wireframes elsewhere on the site remain as placeholders pending sourced imagery.

---

### 2026-05-03 — Home Insights section + Industries carousel arrows + image swaps

**Files Modified:**
- `src/views/HomePage.tsx` — replaced "INSIGHTS — COMING SOON" placeholder with a real Insights section rendering all articles via the new `InsightCard` (single-column list, `max-w-4xl`, `space-y-8`, mirroring `/insights`). Heading set to `INSIGHTS`. Added `View all insights →` link in gold-600. Resized the Five Pillars right-column image from `aspect-[3/4]` filling the column (~50vw) to `max-w-[200px]` so the rendered height (~267px) sits a few percent above the pillars list (~252px).
- `src/views/InsightsPage.tsx` — refactored the inline article-row JSX to use the shared `InsightCard` component. No visual change.
- `src/components/IndustryHeroCarousel.tsx` — interval `SLIDE_INTERVAL_MS` 6000 → **3000ms**. Added `clearTimer` / `startTimer` helpers via `useCallback`; `goTo` and the new `goPrev`/`goNext` now reset and restart the timer (previously dot clicks killed the auto-advance permanently). Added overlaid prev/next arrow buttons at the left/right edges (`72px` wide, full height, `z-20`); `lucide-react` `ChevronLeft`/`ChevronRight` icons start at `opacity-0` and fade in with a subtle dark gradient on hover and focus-visible. Focus-visible ring uses the gold token. Dot indicator container received `pointer-events-none` (with dot buttons themselves opting back in via `pointer-events-auto`) so the arrow hit areas remain clickable in the bottom strip.
- `src/data/industries.ts` — Industrial Technology `heroImage` swapped to `industrial-ball-mill...copper-2659599515.jpg` (this single field drives BOTH the carousel slide AND the industry detail page header — they share the field by design, satisfying Tasks 4 and 7 with one edit). Industrial Technology `tileImage` set to `ev-production-line...electric-car-manufacturing-2374438937.jpg` per the Task 6 table. Mining & Metals `tileImage` → `work-of-heavy-equipment-in-an-open-pit-for-gold-ore-mining...1951657093.jpg`. Manufacturing `tileImage` → `medical-ampoule-production-line-at-modern-modern-pharmaceutical-factory...2229913173.jpg`. Distribution & Logistics `tileImage` → `trains-at-railroad-yard-at-station-district-aerial-in-netherlands-1228227193.jpg`. No other industry's image fields were touched.

**Files Created:**
- `src/components/InsightCard.tsx` — extracted the article-row JSX from `InsightsPage` into a shared component. Used by both `/insights` and the home-page Insights section so they stay in sync.

**Files Deleted:**
- (none)

**Summary:**
Replaced the home-page Insights placeholder with a real Insights section using a newly-extracted `InsightCard` shared with `/insights`. Resized the Five Pillars right-column image so it sits a few percent above the pillars list (was previously dominating). Industries hero carousel now auto-advances every 3 seconds and exposes prev/next arrow controls that are invisible at rest, fade in on hover/focus-visible, navigate with wraparound, reset the auto-advance timer, and are keyboard-reachable. Industrial Technology slide and detail page hero both swapped to the ball-mill image (shared field). Mining & Metals, Manufacturing, Industrial Technology, and Distribution & Logistics tile images updated per spec; the other six industries' images were not touched.

---

### 2026-04-28 — Remaining image placeholder pass (site-wide)

**Files Modified:**
- `src/components/IndustrySubPageLayout.tsx` — replaced the single `WireframePlaceholder` header background with `next/image` driven by `industry.heroImage` (covers all 10 dynamic `/industries/[slug]` pages). Kept `WireframePlaceholder` as a guarded fallback.
- `src/views/HomePage.tsx` — replaced two placeholders:
  - "Five Pillars" right-column 3:4 image → `stock-photo-a-diverse-group-of-smiling-industrial-professionals-collaborates-over-a-laptop-on-the-factory-floor-2455170065.jpg`
  - "From First Conversation to Guaranteed Results" 16:7 wide image → `stock-photo-the-image-showcases-professionals-engaged-in-a-collaborative-meeting-highlighting-teamwork-2608768835.jpg`
  - Dropped `WireframePlaceholder` import (no remaining usages on this page).
- `src/views/AboutPage.tsx` — "Meet the Founder" 3:4 portrait → `stock-photo-solo-brainstorming-shot-of-a-mature-businessman-writing-notes-at-his-desk-in-the-office-2139544961.jpg`. **Note:** this is NOT actually Luis; placeholder pending real founder headshot. Dropped `WireframePlaceholder` import.
- `src/views/BismarkMethodPage.tsx` — "Weekly Rhythm" 3 cards:
  - Monday / Classroom → `stock-photo-experienced-female-teacher-who-specializes-in-adult-education-teaches-a-lesson-to-adult-students-2172691007.jpg`
  - Tuesday-Thursday / Floor → `stock-photo-two-workers-wearing-safety-nets-and-white-lab-coats-observing-machinery-and-equipment-in-food-2575453649.jpg`
  - Friday / Leader presenting → `stock-photo-happy-latin-business-man-company-executive-manager-giving-presentation-on-whiteboard-at-employees-2353374135.jpg`
  - Dropped `WireframePlaceholder` import.
- `src/views/WalkthroughPage.tsx` — added `photo` + `photoAlt` fields to each entry of the `walkthroughPhases` data array; replaced the single `WireframePlaceholder` inside the `.map()` with `next/image` reading from each phase. Per-phase images:
  - Phase 1 Stakeholder Engagement → `stock-photo-senior-older-indian-business-man-director-boss-ceo-leading-employees-team-meeting-presenting-2383724139.jpg`
  - Phase 2 Data & Documentation Analysis → `stock-photo-glasses-asian-woman-holding-pencil-and-thinking-beside-laptop-and-coffee-on-wooden-table-in-library-2662150007.jpg`
  - Phase 3 Operational Observation → `stock-photo-manager-in-discussion-with-coworker-in-an-open-plan-office-314863934.jpg`
  - Phase 4 Findings & Recommendation → `stock-photo-office-conference-room-meeting-presentation-black-businessman-talks-uses-tv-screen-to-show-2104457714.jpg`
  - Dropped `WireframePlaceholder` import.

**Files Created:**
- (none)

**Files Deleted:**
- (none)

**Data fields added:**
- (none in `industries.ts` — the dynamic detail page only has one image slot, so `heroImage` was sufficient and a `secondaryImage` field would have been unused)
- `walkthroughPhases` array in `WalkthroughPage.tsx` gained `photo` and `photoAlt` per entry.

**Placeholders intentionally left in place (guarded fallbacks, never render):**
- `src/views/IndustriesPage.tsx:109` — tile fallback when `tileImage` undefined.
- `src/components/IndustrySubPageLayout.tsx` — header fallback when `heroImage` undefined.

**Summary:**
Replaced every remaining wireframe `WireframePlaceholder` rendering on the site with watermarked stock photos from the existing pool: 1 industry-detail-page header (covers 10 routes), 2 Home, 1 About, 3 Method, 4 Walkthrough. Photos are still watermarked placeholder previews pending final licensing. The About founder photo is a placeholder pending an actual portrait of Luis. Build passes clean (24 static pages, TypeScript ok).

---

### 2026-04-28 — Stock photo integration (placeholder pass)

**Files Modified:**
- `src/data/industries.ts` — added optional `heroImage` and `tileImage` fields to the `Industry` type and populated both for all 10 industries with watermarked stock photo paths.
- `src/views/IndustriesPage.tsx` — replaced the wide hero placeholder with `<IndustryHeroCarousel />`; rebuilt the grid tiles to layer `next/image` backgrounds with a navy gradient overlay, white text, and a hover treatment that deepens the overlay and scales the image only.
- `src/views/HomePage.tsx` — Three Reasons section converted to a white-background section: removed the `WireframePlaceholder` background layer and the `bg-navy-900/80` overlay, switched headings to `text-navy-900` and body copy to `text-navy-800/80`, kept gold accents and existing padding/typography untouched.

**Files Created:**
- `src/components/IndustryHeroCarousel.tsx` — auto-cycling industry hero carousel (6s interval, 300ms crossfade, dot navigation, pause on hover/focus, full-slide `<Link>` to industry page). No new dependencies; uses `useState` + `useEffect` + `setInterval`.

**Files Deleted:**
- (none)

**Folder Renames:**
- `public/images/stock photos watermark/` → `public/images/stock-watermarked/` (49 watermarked stock photos). Note: the source folder was untracked, so a regular `mv` was used in place of `git mv` — there was no git history to preserve.

**Summary:**
Replaced wireframe placeholders on the Industries page (hero + grid tiles) with watermarked stock photos and converted the Home page "Three Reasons" section from a dark photo-background treatment to a white background. All photos are watermarked placeholder previews pending final licensing — final licensed versions will be swapped in later. `npm run build` passes clean (24 static pages, TypeScript OK). `npm run lint` is non-functional in this repo (Next 16 removed `next lint` and there is no `eslint.config.js` — pre-existing condition, not introduced by this change).

---

### 2026-04-09 — Increase navbar logo subtitle size and weight
**Files Modified:**
- src/components/layout/Logo.tsx

**Summary:**
Updated CONSULTING GROUP subtitle in the light (navbar) variant: fontSize 9.5px → 13px, fontWeight 400 → 700, letterSpacing 0.50em → 0.16em, paddingLeft 0.50em → 0.16em. Dark (footer) variant unchanged.

### 2026-04-09 — Build Insights section: index page + first article

**Files Created:**
- src/data/insights.ts
- app/insights/[slug]/page.tsx
- src/views/insights/WhatHappensAfterConsultantsLeave.tsx

**Files Modified:**
- src/views/InsightsPage.tsx

**Summary:**
Replaced "coming soon" Insights placeholder with a working article index page and dynamic article route. Added insights.ts data file for article metadata. Created first article view: "What Happens After the Consultants Leave" by Luis Telleria-Xucla, with full prose rendering, section breaks, pull quotes, Related callouts, author bio strip, and Walkthrough CTA.

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
