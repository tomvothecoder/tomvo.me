# IMPLEMENTATION

## Summary
Implemented the approved `/coach` redesign using Tailwind CSS + shadcn-style UI primitives + Framer Motion, preserved client-side KwesForms submission, and removed AOS from the codebase.

## What changed

### 1) Stack migration groundwork
- Added dependencies for redesign stack:
  - `framer-motion`, `lucide-react`
  - shadcn-style utility deps: `@radix-ui/react-accordion`, `@radix-ui/react-slot`, `class-variance-authority`, `clsx`, `tailwind-merge`
  - Tailwind build deps: `tailwindcss`, `postcss`, `autoprefixer`
- Added Tailwind/PostCSS config:
  - `tailwind.config.ts`
  - `postcss.config.cjs`
- Added shared utility:
  - `src/lib/utils.ts` (`cn` helper)

### 2) New `/coach` architecture (section-based)
- Replaced old `Coach` page composition with a new landing page implementation:
  - `src/components/CoachRedesign/CoachLandingPage.tsx`
- Added new sections:
  - `HeroSection.tsx`
  - `StatsSection.tsx`
  - `ServicesSection.tsx`
  - `TransformationGallery.tsx`
  - `TestimonialsSection.tsx`
  - `PricingSection.tsx`
  - `CoachCredibilitySection.tsx`
  - `FAQSection.tsx`
  - `ConsultationFormSection.tsx`
  - `FinalCTASection.tsx`
- Added shared section/animation primitives:
  - `SectionWrapper.tsx`
  - `animations.ts`
- Updated view entrypoint:
  - `src/views/Coach.tsx` now renders `CoachLandingPage`

### 3) shadcn-style component primitives
Added reusable UI building blocks under `src/components/ui/`:
- `button.tsx`
- `card.tsx`
- `input.tsx`
- `textarea.tsx`
- `badge.tsx`
- `accordion.tsx`

### 4) AOS removal and Framer Motion adoption
- Removed AOS runtime/init from `src/main.tsx`.
- Removed all `data-aos` attributes from `src` components.
- Removed `aos` and `@types/aos` from dependencies.
- Framer Motion now powers hero entry, section reveals, and staggered cards.

### 5) Form integration (KwesForms retained)
- Implemented redesigned consultation form in:
  - `src/components/CoachRedesign/ConsultationFormSection.tsx`
- Kept KwesForms model:
  - foreign action URL unchanged
  - `className="kwes-form"`
  - field-level `data-kw-rules`
- Required fields implemented:
  - Name, Email, Phone, Training Goal
  - Message optional
- Primary CTA text: `Book Free Consultation`

### 6) Shared shell and metadata refresh
- Updated app shell styles:
  - `src/components/NavBar/NavBar.tsx`
  - `src/components/Footer.tsx`
  - `src/index.css`
  - `src/App.css`
- Updated SEO-facing metadata:
  - `index.html` title + description
  - `public/manifest.json`

### 7) Test stability updates
- Added `IntersectionObserver` test mock in `src/setupTests.ts` to support Framer Motion viewport features in jsdom.

## Validation
- `rg -n "aos|data-aos|AOS.init" src package.json` -> no matches
- `pnpm test` -> pass (1 test)
- `pnpm build` -> pass

## Notes
- `/career` route remains intact and routable.
- Redesigned surfaces are implemented with Tailwind + shadcn-style primitives and Framer Motion.

## Incremental polish (2026-03-14)

### Summary
Applied focused `/coach` conversion polish for readability and messaging clarity without changing page architecture.

### What changed
- Updated micro-proof stats in `src/components/CoachRedesign/StatsSection.tsx`:
  - `5 Years` -> `Private coaching experience`
  - `Hybrid` -> `In-person + online coaching`
  - `4 Cities` copy retained with Fremont/Newark/Milpitas/Santa Clara
  - `Weekly` -> `Plan adjustments and check-ins`
- Increased readability in conversion-critical text blocks:
  - `src/components/CoachRedesign/HeroSection.tsx` (supporting paragraph + trust bullets)
  - `src/components/CoachRedesign/ServicesSection.tsx` (section description, card descriptions, bullets)
  - `src/components/CoachRedesign/PricingSection.tsx` (section description, plan focus, feature lines, footer note)
  - `src/components/CoachRedesign/FAQSection.tsx` (section description + accordion answers)
- Tightened consultation left-column content in `src/components/CoachRedesign/ConsultationFormSection.tsx`:
  - Replaced paragraph with a shorter single-paragraph value statement
  - Kept exactly 3 bullets with clearer format/location/coaching-mode language

### Validation
- `pnpm test` -> pass
- `pnpm build` -> pass

## Incremental results refresh (2026-03-14)

### Summary
Updated the `/coach` transformation section with concrete case studies and added an additional-results highlight while keeping the existing 3-card layout and interaction style.

### What changed
- Updated case-study cards in `src/components/CoachRedesign/TransformationGallery.tsx`:
  - Advanced remote powerlifting meet-prep result (+55.1 lb total, first-place finish)
  - Remote body-composition result (~210 lb to 190 lb)
  - Beginner female strength/muscle-gain result (107 lb to 115 lb, 115 lb squat)
- Preserved equal-height card structure with bottom-aligned metric lines.
- Added a compact panel below the 3-card grid:
  - `Additional result: novice to meet-ready`
  - Includes in-person novice meet-prep outcome (~898 total, 8/9 attempts).

### Validation
- `pnpm test` -> pass
- `pnpm build` -> pass
