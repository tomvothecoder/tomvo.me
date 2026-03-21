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

## Incremental security remediation (2026-03-15)

### Summary

Resolved all four active Dependabot alerts tied to `pnpm-lock.yaml` by upgrading direct dependencies and pinning one transitive package to a patched version.

### What changed

- Updated `react-router-dom` from `^6.23.1` to `^6.30.2` (resolved to `6.30.3`), which pulls patched:
  - `react-router@6.30.3`
  - `@remix-run/router@1.23.2`
- Updated `vitest` from `^2.1.0` to `^4.1.0`, removing the vulnerable transitive `vite@5`/`esbuild@0.21.x` path and resolving to:
  - `vite@6.4.1`
  - `esbuild@0.25.12`
- Added a `pnpm` override in `package.json` to force patched `flatted`:
  - `"pnpm": { "overrides": { "flatted": "^3.4.1" } }`
- Regenerated `pnpm-lock.yaml` with `pnpm install`.

### Validation

- `pnpm why flatted esbuild react-router @remix-run/router`:
  - `flatted@3.4.1`
  - `esbuild@0.25.12`
  - `react-router@6.30.3`
  - `@remix-run/router@1.23.2`
- `pnpm audit --json` -> zero vulnerabilities (`high: 0`, `moderate: 0`).
- `pnpm test` -> pass (1/1).
- `pnpm build` -> pass.

## Incremental uncodixfy refinement (2026-03-20)

### Summary

Applied a focused `/coach` cleanup pass to remove decorative AI-style landing-page patterns while preserving the existing route, content, CTAs, and consultation form contract.

### What changed

- Simplified the live coach-page shell in `src/components/CoachRedesign/CoachLandingPage.tsx`:
  - removed the decorative top gradient
  - removed the mobile sticky booking CTA
  - removed the trailing `FinalCTASection` from the rendered page
- Simplified shared coach section framing in `src/components/CoachRedesign/SectionWrapper.tsx`:
  - removed the `eyebrow` API and uppercase mini-heading pattern
  - removed section-heading Framer Motion wrappers
- Refined active coach sections to use flatter bordered layouts and simpler hierarchy:
  - `HeroSection.tsx`
  - `CoachSubNav.tsx`
  - `StatsSection.tsx`
  - `ServicesSection.tsx`
  - `TransformationGallery.tsx`
  - `PricingSection.tsx`
  - `CoachCredibilitySection.tsx`
  - `FAQSection.tsx`
  - `ConsultationFormSection.tsx`
- Simplified `/coach` navbar styling in `src/components/NavBar/NavBar.tsx`:
  - removed the icon bubble, backdrop blur, and chip-style active links
  - kept the same links and booking action
- Tightened shared form/button radii used by the coach page:
  - `src/components/ui/button.tsx`
  - `src/components/ui/input.tsx`
  - `src/components/ui/textarea.tsx`
- Expanded `src/App.test.tsx` to verify:
  - the coach hero, packages, FAQ, and consultation sections render
  - consultation CTAs still target `#consultation`
  - the consultation form fields still render
  - OpenPowerlifting proof links are present
  - the removed final CTA copy is no longer rendered

### Validation

- `pnpm test` -> pass (1/1)
- `pnpm build` -> pass

## Incremental coach hierarchy second pass (2026-03-20)

### Summary

Applied a second refinement pass to the cleaner `/coach` version to recover hierarchy, section rhythm, and focal emphasis without reintroducing the older decorative landing-page treatment.

### What changed

- Strengthened the hero in `src/components/CoachRedesign/HeroSection.tsx`:
  - reduced the trust list to the highest-value proof points
  - added clearer supporting CTA copy
  - made the image column more deliberate with simple supporting quick facts
- Rebuilt `src/components/CoachRedesign/StatsSection.tsx` as a stronger proof strip instead of a weak text list.
- Tightened structure in `src/components/CoachRedesign/ServicesSection.tsx`:
  - stronger row padding
  - clearer separation between service summary and bullet column
- Improved hierarchy in `src/components/CoachRedesign/TransformationGallery.tsx`:
  - stronger card titles and result blocks
  - clearer metadata hierarchy
  - more deliberate spacing between content, outcomes, and verification links
- Increased focal weight in `src/components/CoachRedesign/PricingSection.tsx`:
  - stronger highlighted plan treatment without restoring badges
  - clearer internal separation between cadence, focus, features, and CTA
- Tightened the credibility and FAQ sections:
  - `src/components/CoachRedesign/CoachCredibilitySection.tsx`
  - `src/components/CoachRedesign/FAQSection.tsx`
- Made the consultation section feel more action-oriented in `src/components/CoachRedesign/ConsultationFormSection.tsx` by increasing the form panel emphasis and clarifying the info column.
- Strengthened the active state and brand presence in `src/components/NavBar/NavBar.tsx` while keeping the simpler navigation treatment.

### Validation

- `pnpm test` -> pass (1/1)
- `pnpm build` -> pass

## Incremental coach motion restraint pass (2026-03-20)

### Summary

Added only the motion that improves the `/coach` experience: a subtle, reduced-motion-aware hero entrance and intentional FAQ accordion open/close transitions. Decorative section reveals and card motion remain disabled.

### What changed

- Updated `src/components/CoachRedesign/HeroSection.tsx`:
  - added a small first-render fade/y entrance on the hero copy and image columns
  - respected `prefers-reduced-motion` by disabling those motion props when requested
- Updated `src/components/ui/accordion.tsx`:
  - added open/close transitions for accordion content using state-driven grid-row/opacity transitions
  - kept the existing chevron rotation and content model intact

### Validation

- `pnpm test` -> pass (1/1)
- `pnpm build` -> pass
- `pnpm build` still emits the existing chunk-size warning for the main bundle; no new build errors were introduced
