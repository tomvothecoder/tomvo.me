# PLANNING

## Task understanding
Investigate why `tomvo.me` renders as a blank/black page in production, apply a minimal fix, validate locally, and prepare the fix branch for push.

## Findings so far
- Console error points to a runtime crash in bundled `kwesforms` code:
  - `Uncaught TypeError: can't access property "webpackChunkkwesforms", this is undefined`
- `src/components/Coach/ContactForm.tsx` imports `kwesforms` and calls `kwesforms.init()` on mount.
- The installed `kwesforms` package bundle references top-level `this.webpackChunkkwesforms`, which fails under Vite's strict ESM execution context.

## Files reviewed
- `.github/workflows/build_workflow.yml`
- `src/components/Coach/ContactForm.tsx`
- `src/views/Coach.tsx`
- `src/views/Coach.css`
- `package.json`
- `node_modules/kwesforms/index.js`

## Exact files planned for modification
1. `src/components/Coach/ContactForm.tsx`
   - Replace npm runtime import/init with browser script loading and safe `window.kwesforms.init()` call.
2. `IMPLEMENTATION.md`
   - Document root cause, fix, and validation commands/results.

## Validation plan
- Run `pnpm test`.
- Run `pnpm build`.
- Confirm built JS no longer includes the npm `webpackChunkkwesforms` runtime payload.
