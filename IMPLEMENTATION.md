# IMPLEMENTATION

## Assessment (previous vs current redesign)
- Improved: section order and messaging are more conversion-focused than the previous version.
- Regression fixed: secondary hero CTA (`View Services`) looked disabled due to low-contrast outlined styling.
- Regression fixed: iconography was inconsistent (mixed raster styles/sizes), which lowered perceived visual quality.

## What changed in this follow-up
- Added a scoped hero secondary CTA class and explicit contrast/hover states to make `View Services` clearly interactive.
- Replaced coach audience card icons with consistent Font Awesome vector icons.
- Replaced coaching system icons with Font Awesome vectors and added reusable icon badge styles.
- Updated `SystemComponent` to render typed icon props instead of image paths.
- Documented benchmark references and findings for coaching-website comparison.

## Files modified
- `src/components/Coach/Hero.tsx`
- `src/views/Coach.css`
- `src/components/Coach/CoreValues.tsx`
- `src/components/Coach/Services/System.tsx`
- `src/components/Coach/Services/SystemComponent.tsx`
- `PLANNING.md`

## Benchmark references reviewed
- `https://www.nerdfitness.com/coaching-overview-page/`
- `https://future.co/pro`
- `https://www.startingstrengthgyms.com/online-coaching.html`
- `https://caliberstrong.com/`
- `https://www.barbellmedicine.com/coaching/`

## Comparison findings applied
- Top-of-page CTA clarity is critical: strong primary action plus clearly visible secondary path.
- "How coaching works" should stay short, ordered, and scannable.
- Social proof and results should be visible before the final contact form.
- Offer positioning benefits from clear audience-fit language and explicit deliverables.

## Validation
- `npx prettier --write "src/components/Coach/Hero.tsx" "src/components/Coach/CoreValues.tsx" "src/components/Coach/Services/System.tsx" "src/components/Coach/Services/SystemComponent.tsx" "src/views/Coach.css" "PLANNING.md"`
- `npx tsc --noEmit` passed.
- `npm run build` passed.
- `./node_modules/.bin/eslint "src/**/*.{ts,tsx}"` failed: no ESLint config detected in this environment.
