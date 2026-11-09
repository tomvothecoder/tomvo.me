# Homepage redesign

## Refinement pass (2026-11-08)

An iterative refinement of the redesign below, aimed at removing templated
landing-page patterns. No route, form field, endpoint, or dependency changed.

- **Removed:** numbered eyebrows (`01 /` … `06 /`), numbered process and service
  rows, the hero eyebrow/credential footer/scroll arrow, all image captions, the
  results subtitle that repeated its heading, OpenPowerlifting profile links
  (meet-record links remain), the footer tagline, and the homepage FAQ.
- **Consolidated:** "Your starting point" and "The coaching" are one section
  (`ServicesSection`). "How coaching works" is now prose in `ApproachSection`
  (renamed from `PricingSection`), which also absorbs the services note and the
  FAQ's weekly-review and medical-care answers. The FAQ's "what happens next"
  answer moved into the application copy. `StatsSection` and `FAQSection` were
  deleted; `TransformationGallery` was renamed `ResultsSection`.
- **Composition:** one 12-column grid with columns 1 and 8 as recurring axes.
  Hero copy is bottom-aligned to the photograph; formats read across three
  columns; the approach statement is the page's one oversized line; results
  are full-width rows; about places the portrait to the right of a prose column.
  Hairline section dividers were removed in favor of spacing.
- **Imagery:** a second still (deadlift setup) from the existing training video
  was added here, then removed in round 2. See `homepage-refinement-2.md`.
- **Results:** each lifter leads with a plain-language outcome; one sentence
  explains attempts and totals. Figures are unchanged and remain linked.
- **Anchors:** the approach section id changed from `#packages` to `#approach`
  (nav updated). `#coaching`, `#services`, `#results`, `#about`, and `#apply`
  are unchanged; `#fit` and `#faq` no longer exist.

Validation for this pass: `pnpm test` (11 tests) and `pnpm build` pass;
`docs/homepage-qa.cjs` passes at 320/375/768/1024/1440px with zero axe
violations (FAQ steps removed from the harness). The typecheck and ESLint
limitations described below are unchanged.

## Implementation

The coaching homepage remains at `/coach`; the existing root redirect and
`/career` route are unchanged. React, Vite, co-located CSS, and existing service
content are retained. No runtime dependency was added.

- `CoachLandingPage.tsx` now orders the audience, process, services, recorded
  results, coach, FAQ, and application after the hero.
- `CoachLandingPage.css` centralizes the design-system colors, spacing, type,
  controls, and responsive layouts for the homepage and shared coaching header/footer.
- The section components refine headlines and clarify the individualized,
  exercise-science-informed approach using the existing business content.
  Actual services, pricing context, NASM credential, recorded totals, and proof
  destinations are retained. The redundant second crop of the same lifting photo
  was removed; no original training media was deleted.
- `NavBar.tsx` adds an Approach link and improves disclosure keyboard focus.
  The existing skip link now targets a focusable main landmark.
- Round-trip screenshot review exposed a pre-existing global `#hero-title`
  collision and Bulma link-color leakage after visiting Career. The career
  selector is now scoped to `#career`, and coaching link colors are explicit.
  Browser QA compares rendered type/color styles before and after navigation.
- `ConsultationFormSection.tsx` preserves all field names, requirements, rules,
  endpoint, and method. It adds required-field guidance and supports the current
  CDN's `kwesFormsInitialize` API as well as the older `kwesforms.init` API.
  It avoids duplicate initialization under StrictMode and reinitializes a newly
  mounted form after a career/coaching round-trip.
- `src/index.css` self-hosts the Latin variable Manrope and Inter fonts from
  Google Fonts; OFL licenses are included in `public/fonts/`. Obsolete external
  font imports used by the former coaching treatments were removed. Career's
  existing Manrope family is retained.
- Existing titles, description, favicon, manifest, routing, and web-vitals setup
  are unchanged. No separate analytics/event integration was found in the active
  source. No scheduling URL, new service, research citation, or testimonial was invented.

## Reference review and art direction

Four archived images were downloaded from the documented sources. Playwright
also visited all five live sites and saved focused 1440 × 1000 screenshots to
`design/references/*-live.png`. The actual images were opened and reviewed.
The Forner, Linear, and IntervalCoach captures were repeated after loading to
avoid reviewing an entrance animation instead of the page.

Reference image binaries and `design/qa/` output are local-only and gitignored.
The reference source README and downloader are versioned; run the downloader
or browser QA to recreate local review artifacts where the sources are available.

| Reference     | Observed quality adopted                                                                                                                                                                                 | Deliberately avoided                                                                       |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| Forner        | Archived warm canvas, wide negative space, and composed image/text groupings; live full-frame photography provides a clear visual anchor. Applied to spacing, asymmetric hero, and photograph placement. | Script type, extreme wordmark scale, full-bleed brand takeover, and copied compositions.   |
| Linear        | Large concise left-aligned headline, controlled text width, quiet navigation, consistent edges, and fine rules. Applied to Manrope hierarchy, grid, links, and controls.                                 | Dark mode, product screenshots, dashboard density, and dim body copy.                      |
| Future        | Human photography, a simple offer, and an unmistakable next action in both archived and live heroes. Applied to welcoming copy, genuine photography, and one application destination.                    | Its photos, subscriptions, pricing, phone mockups, and lifestyle-only positioning.         |
| JuggernautAI  | Recognizable barbell practice and a direct training proposition. Applied only to selecting Tom's existing deadlift photo and explaining meet preparation.                                                | Dark aggressive styling, badges, AI claims, exaggerated headlines, and competitor imagery. |
| IntervalCoach | Live hero explains a training adjustment with a short reason, rather than leaving a metric unexplained. Applied as a plain-language assessment → plan → feedback sequence.                               | Endurance metrics, readiness scores, product claims, and decorative/fabricated charts.     |

The archived `05-intervalcoach-analytics.png` could not be retrieved: the
documented optimizer URL returned HTTP 400, and the direct image path returned 404. That specific analytics image remains **unreviewed**. The live screenshot
and the brief's written guidance were used instead. No reference image is
imported, embedded, or copied into the site.

## Validation

There is no repository Makefile or lint script.

- `pnpm test`: **9 tests pass**. Covers page structure, photographs, recorded
  result destinations, anchors, menu selection/Escape/focus, process/service
  content, FAQ disclosure, required fields, and both SDK initialization APIs.
- `pnpm build`: **passes**.
- `pnpm exec tsc --noEmit --ignoreDeprecations 6.0`: still fails with the same
  pre-existing errors recorded before implementation: legacy `ContactForm.tsx`
  uses ReactPlayer's removed `url` prop; unused `CoachSubNav.tsx` has an untyped
  spring transition; `setupTests.ts` lacks `IntersectionObserver.scrollMargin`
  (reported at its implementation and usage). No redesign-file errors reported.
- `pnpm exec eslint src`: blocked because installed ESLint 9 requires a flat
  `eslint.config.*`; the repository only supplies the older `.eslint.js`.
  Lint has **not** passed. Configuration migration is outside this redesign.
- Chromium browser checks at **320, 375, 768, 1024, and 1440px** pass: no
  horizontal overflow, one H1, loaded images/fonts, valid local anchors, skip
  link focus, keyboard menu opening/Escape/selection, native FAQ Enter/Space,
  CTA target clearance below the sticky header, native required/email validation,
  root redirect, and career/coaching round-trip including SDK remount registration.
- axe WCAG 2 A/AA, 2.1 AA, and 2.2 AA scans report **zero violations** at those
  widths, including open menus where applicable. Reduced-motion scrolling is
  checked. This does not replace assistive-technology/manual conformance review.
- Full-page and hero screenshots at **1440, 768, and 375px** are saved in
  `design/qa/`, alongside application crops, a mobile-menu capture, and a JSON
  report. Application-only crops hide the sticky header during capture so it
  does not obscure a tall element screenshot; full-page and hero captures do not.
  The checks also run against the production preview, including a screenshot
  after visiting Career and returning to coaching.

### Reproduce browser QA

Install optional tooling outside the application (no lockfile changes):

```sh
export QA_ROOT="$(mktemp -d "${TMPDIR%/}/homepage-qa.XXXXXX")"
npm install --prefix "$QA_ROOT" playwright @axe-core/playwright
"$QA_ROOT/node_modules/.bin/playwright" install chromium
pnpm dev --host 127.0.0.1
```

In another terminal, with the same `QA_ROOT` value:

```sh
QA_TOOLS="$QA_ROOT/node_modules" node docs/homepage-qa.cjs
```

Use `QA_URL=http://127.0.0.1:4173` against `pnpm preview --host 127.0.0.1`
to check the production build. `QA_OUTPUT` can redirect the artifacts elsewhere.

The harness loads the real CDN SDK but intentionally blocks **all Kwes API
writes**, including its `/favicon` configuration/domain-registration POST.
The vendor's error handler throws when that request is aborted; these expected
SDK errors and blocked URLs are retained separately in the JSON report. All
other page errors fail the check. Native form validation and SDK registration
are tested, but server acceptance, email delivery, and success/error feedback
from a real submission are **not verified**. No application is sent.

## Publication review

- The repository's existing photography and factual business content are treated
  as approved source material. No imagery placeholders are required. Additional
  authorized coaching/beginner photography would broaden representation, but is
  not a blocker for this implementation.
- Owner review should confirm current services, credential, response timeframe,
  and existing client-result publication permissions. Recorded meet results do
  not independently verify coaching attribution; the latter comes from existing
  site content. No new outcome claims were added.
- The unchanged SEO description promises a free consultation, while the page's
  real action is a coaching request. Owner should confirm that existing promise
  before changing metadata; no booking link or free-consultation offer was invented.
- Before launch, the owner should test a permitted real submission on the
  deployed domain and confirm privacy requirements and any needed policy URL.
  No policy or legal assurances were fabricated.
- Safari/Firefox, screen-reader interaction, physical devices, and field Core
  Web Vitals were not tested. Resolve the existing repository lint/typecheck
  setup separately.
