# PLANNING

## Task understanding
Implement the approved 2025/2026 premium redesign for `/coach` using Tailwind CSS, shadcn-style UI primitives, Framer Motion animations, and KwesForms. Remove AOS completely and migrate coach surfaces away from Bulma while preserving `/career` behavior.

## Files reviewed
- `package.json`
- `src/main.tsx`
- `src/App.tsx`
- `src/views/Coach.tsx`
- `src/views/Coach.css`
- `src/components/Coach/*`
- `src/components/NavBar/NavBar.tsx`
- `src/components/Footer.tsx`

## Implementation plan
1. Add frontend dependencies/config for Tailwind + shadcn-style primitives + Framer Motion + Lucide.
2. Introduce shared UI primitives (`Button`, `Card`, `Input`, `Textarea`, `Accordion`, `Badge`) and utility helpers.
3. Replace `/coach` with a new section-based architecture (hero, stats, services, transformations, testimonials, pricing, credibility, FAQ, consultation form, final CTA).
4. Implement Framer Motion animation utilities and apply reveal/stagger/hero entrance patterns.
5. Preserve KwesForms integration in the new consultation form with required fields and validation attributes.
6. Remove AOS usage from the entire codebase (imports/init/data attributes) and remove package dependencies.
7. Update shared shell styling (navbar/footer/app styles) to align with redesign while keeping `/career` route functional.
8. Validate via search checks, tests, and production build; document results in `IMPLEMENTATION.md`.

## Validation plan
- `rg -n "aos|data-aos|AOS.init" src package.json`
- `pnpm test`
- `pnpm build`
