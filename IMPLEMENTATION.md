# IMPLEMENTATION

## Root cause
- AOS was initialized in `src/main.tsx` at module scope.
- In Safari refresh/page lifecycle paths, AOS could initialize before routed `data-aos` nodes were fully in place.
- Since AOS CSS keeps `data-aos` nodes hidden until animation classes are applied, those sections remained invisible.

## Fix applied
- Removed module-scope `AOS.init` from `src/main.tsx`.
- Added `AOSLifecycle` in `src/App.tsx` to manage AOS inside React lifecycle:
  - Initialize AOS once in `useEffect` after app mount.
  - Call `AOS.refreshHard()` on `window` `load` and `pageshow` events (Safari lifecycle-safe).
  - Call `AOS.refreshHard()` after route path changes via `useLocation`, deferred with `requestAnimationFrame`.

## Files modified
- `src/main.tsx`
- `src/App.tsx`
- `PLANNING.md`
- `IMPLEMENTATION.md`

## Validation
- `pnpm test -- --watch=false` passed (1 test).
- `pnpm build` passed.
