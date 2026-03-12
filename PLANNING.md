# PLANNING

## Task understanding
Fix a Safari refresh issue where sections using AOS stay hidden (appearing as content disappearing under headers), then deliver the fix on a new branch with a pushed PR.

## Findings so far
- `src/main.tsx` initialized AOS at module scope (`AOS.init({ once: true })`).
- AOS hides `[data-aos]` elements until animation classes are applied.
- On Safari refresh/page lifecycle, initializing AOS outside React mount can miss mounted routed content, leaving animated sections hidden.

## Files reviewed
- `src/main.tsx`
- `src/App.tsx`
- `src/App.css`
- `src/components/NavBar/NavBar.css`

## Exact files planned for modification
1. `src/main.tsx`
   - Remove module-scope AOS initialization.
2. `src/App.tsx`
   - Add React lifecycle-based AOS initialization and refresh behavior.
   - Refresh on route changes and on `load`/`pageshow` to cover Safari page lifecycle.
3. `IMPLEMENTATION.md`
   - Record root cause, patch, and validation outputs.

## Validation plan
- Run `pnpm test -- --watch=false`.
- Run `pnpm build`.

## Delivery plan
- Create branch `codex/fix-aos-refresh-hidden-content`.
- Commit minimal diff.
- Push branch.
- Open PR against `main`.
