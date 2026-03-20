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
