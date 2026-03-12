# IMPLEMENTATION

## Root cause
- Production startup crashed from `kwesforms` npm bundle execution.
- `src/components/Coach/ContactForm.tsx` imported `kwesforms` and called `kwesforms.init()` in `useEffect`.
- The package bundle references `this.webpackChunkkwesforms` at runtime, which is `undefined` under Vite's module execution context, causing the crash seen in production.

## Fix applied
- Kept KwesForms usage for form handling.
- Replaced npm runtime import/init with browser script loading in `ContactForm`:
  - Load `https://kwesforms.com/v2/kwes-script.js` once via a guarded `<script>` injection.
  - Call `window.kwesforms?.init()` after script load (or immediately if already present).
  - Keep form markup (`className="kwes-form"`, Kwes action URL, `data-kw-rules`) unchanged.

## Files modified
- `src/components/Coach/ContactForm.tsx`
- `PLANNING.md`

## Validation
- `pnpm test` passed (1 test).
- `pnpm build` passed.
- Verified built app JS no longer contains:
  - `webpackChunkkwesforms`
  - `requireKwesforms`
