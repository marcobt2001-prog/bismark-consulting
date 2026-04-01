# Bismark Consulting Group — Codebase Audit
**Date:** 2026-03-31
**Branch audited:** main (formerly nextjs-migration)
**React/Vite backup preserved at:** react-vite-backup

---

## Summary
The codebase is in good shape after the Next.js migration. The build passes with zero errors and all 22 routes render correctly as static HTML. The main issues are cleanup debt: 3 orphaned visual components, 2 dead npm dependencies (`react-calendly`, `framer-motion`), a stale ESLint config referencing a removed Vite plugin, a leftover `src/assets/` directory, and a `console.log` in production code. Total: **14 issues across 8 categories**.

---

## Category A — Dead / Orphaned Files
| File Path | Reason it's dead | Recommended Action |
|-----------|-----------------|-------------------|
| `src/components/visuals/ConsultingFailureCycle.tsx` | Never imported by any file | Delete |
| `src/components/visuals/CrossIndustryMatrix.tsx` | Superseded by `FindYourOperationMatrix.tsx` — never imported | Delete |
| `src/components/visuals/FAQSectionDivider.tsx` | Never imported by any file | Delete |
| `src/assets/image004.jpg` | Duplicated to `public/images/image004.jpg` during migration — `src/assets/` is no longer used by Next.js | Delete entire `src/assets/` directory |
| `src/assets/luis-telleria-xucla.jpg` | Same — duplicated to `public/images/` | Delete with directory |
| `src/assets/react.svg` | Vite scaffold artifact — never referenced anywhere | Delete with directory |
| `public/images/react.svg` | Vite scaffold artifact copied to public — never referenced | Delete |

---

## Category B — Unused Imports
| File | Unused Symbol(s) | Line(s) |
|------|-----------------|---------|
| `src/components/IndustrySubPageLayout.tsx` | `ArrowLeft` (from lucide-react) | Line 2 |

---

## Category C — Dead Code
| File | Description | Lines | Action |
|------|-------------|-------|--------|
| `src/views/ContactPage.tsx` | `console.log('Form submitted:', formData)` left in production | Line 18 | Remove |

---

## Category D — Legacy / Inconsistent Naming
| File | Issue | Current Value | Expected Value |
|------|-------|--------------|----------------|
| `eslint.config.js` | References removed Vite plugin | `import reactRefresh from 'eslint-plugin-react-refresh'` + `reactRefresh.configs.vite` | Remove Vite-specific ESLint config; replace with Next.js lint config or remove entirely (scripts already use `next lint`) |
| Multiple SVG components in `src/components/visuals/` | Hardcoded hex colors in SVG markup | `#0c1742`, `#c9a227`, `#c0392b` | Acceptable for SVG (can't use Tailwind classes inside `<svg>`) — informational only |

---

## Category E — Routing Issues
| Route / File | Issue | Action |
|-------------|-------|--------|
| (none) | All 12 routes properly configured, all views exist | No action needed |

---

## Category F — Type Safety Issues
| File | Issue | Severity |
|------|-------|---------|
| (none) | `npx tsc --noEmit` passes with zero errors | Clean |

---

## Category G — Performance / Bundle Risks
| File | Issue | Impact |
|------|-------|--------|
| `package.json` | `react-calendly` (^4.4.0) in dependencies — never imported anywhere in codebase | Dead dependency adds ~50KB to install; safe to uninstall |
| `package.json` | `framer-motion` (^12.26.2) in dependencies — never imported anywhere in codebase | Dead dependency adds ~150KB to install; safe to uninstall |
| `package.json` | `eslint-plugin-react-refresh` referenced in `eslint.config.js` but not in devDependencies (was uninstalled during migration) | `npm run lint` will fail if ESLint config is not updated |
| `eslint.config.js` | Imports `eslint-plugin-react-refresh` which was uninstalled | ESLint broken — needs config update or removal |

---

## Category H — Brand / Content Violations
| File | Violation | Correct Value |
|------|-----------|--------------|
| (none) | All brand content verified correct | N/A |

**Verified correct:**
- "Transformative Leadership Mastery" (TLM) — correct throughout
- "Bismark Consulting Group" — correct throughout
- "25+ years" — correct throughout (no legacy "20+")
- Founded 1998 — correct
- Miami, Florida (no street address) — correct
- info@bismarkconsulting.net — correct throughout
- No testimonials present — correct per policy
- No phone numbers hardcoded — correct

---

## Recommended Cleanup Order

### Tier 1 — Safe to delete immediately (no dependencies, no risk)
- `src/components/visuals/ConsultingFailureCycle.tsx`
- `src/components/visuals/CrossIndustryMatrix.tsx`
- `src/components/visuals/FAQSectionDivider.tsx`
- `src/assets/` (entire directory — all files duplicated to `public/images/`)
- `public/images/react.svg`
- Remove `console.log` from `src/views/ContactPage.tsx:18`
- Remove unused `ArrowLeft` import from `src/components/IndustrySubPageLayout.tsx:2`

### Tier 2 — Requires code change before deleting (has dependents)
- **Uninstall `react-calendly`**: Run `npm uninstall react-calendly` — no code imports it
- **Uninstall `framer-motion`**: Run `npm uninstall framer-motion` — no code imports it
- **Fix `eslint.config.js`**: Remove `eslint-plugin-react-refresh` import and `reactRefresh.configs.vite` reference. Either rewrite for Next.js or delete the file entirely (the `next lint` script in package.json handles linting natively)

### Tier 3 — Needs review before acting (ambiguous intent)
- **Placeholder visual components** (`HandMethodDiagram.tsx`, `OriginMap.tsx`): Both render correctly as styled placeholders with "Custom illustration to be commissioned" notes. Keep until custom illustrations are ready.
- **`$1M+` engagement minimum** on ContactPage: Verify this figure is still current with stakeholders.

---

## Build Validation
```
$ npm run build

▲ Next.js 16.2.2 (Turbopack)

  Creating an optimized production build ...
✓ Compiled successfully in 1998ms
  Running TypeScript ...
  Finished TypeScript in 2.2s ...
  Collecting page data using 9 workers ...
✓ Generating static pages using 9 workers (22/22) in 338ms
  Finalizing page optimization ...

Route (app)
┌ ○ /
├ ○ /_not-found
├ ○ /about
├ ○ /ai
├ ○ /contact
├ ○ /faq
├ ○ /industries
├ ● /industries/[slug] (10 paths)
├ ○ /insights
├ ○ /method
├ ○ /schedule
└ ○ /walkthrough

○  (Static)  prerendered as static content
●  (SSG)     prerendered as static HTML (uses generateStaticParams)

BUILD STATUS: ✅ PASSED — zero errors, zero warnings
TypeScript: ✅ PASSED — npx tsc --noEmit clean
```
