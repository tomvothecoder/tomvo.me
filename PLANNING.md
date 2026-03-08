# PLANNING

## Task understanding
Assess the quality regressions introduced in the current `/coach` redesign, fix UI issues called out by the user (especially the low-contrast "View Services" button), upgrade icon quality/consistency, and benchmark the page against current coaching websites.

## Files reviewed
- `src/views/Coach.css`
- `src/components/Coach/Hero.tsx`
- `src/components/Coach/CoreValues.tsx`
- `src/components/Coach/Services/System.tsx`
- `src/components/Coach/Services/SystemComponent.tsx`
- `src/components/Coach/Services/ServicesList.tsx`
- `src/components/Coach/Banner.tsx`
- `src/components/Coach/Testimonials.tsx`
- `src/components/Coach/Facts.tsx`
- `src/components/Coach/ContactForm.tsx`

## Exact files planned for modification
1. `src/components/Coach/Hero.tsx`
   - Fix secondary CTA styling hook for "View Services" to remove washed-out/disabled appearance.
2. `src/views/Coach.css`
   - Add explicit secondary CTA contrast styles and hover states.
   - Add reusable icon-badge styles for consistent, modern icon rendering across cards/system rows.
3. `src/components/Coach/CoreValues.tsx`
   - Replace low-resolution/mixed-style image icons with consistent Font Awesome icons.
4. `src/components/Coach/Services/System.tsx`
   - Replace legacy image icons with Font Awesome icon definitions.
5. `src/components/Coach/Services/SystemComponent.tsx`
   - Update props/rendering from image-based icons to Font Awesome icon rendering.
6. `IMPLEMENTATION.md`
   - Document what changed, what was validated, and online benchmark findings.

## Web benchmarking plan
- Compare current `/coach` layout and messaging against:
  - `https://caliberstrong.com/`
  - `https://www.nerdfitness.com/coaching-overview-page/`
  - `https://future.co/pro`
  - `https://www.startingstrengthgyms.com/online-coaching.html`
  - `https://www.barbellmedicine.com/coaching/`
- Extract concrete patterns to apply (CTA clarity, "how it works" structure, proof/testimonials, offer specificity, pricing/expectation framing).

## Validation plan
- Run typecheck: `npx tsc --noEmit`
- Run build: `npm run build`
- Attempt lint with existing repo command used in prior work: `./node_modules/.bin/eslint "src/**/*.{ts,tsx}"`
