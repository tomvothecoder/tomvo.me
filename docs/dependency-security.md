# Dependency security remediation — 2026-11-07

## Scope and result

The initial full npm audit reported **71 advisories**: 33 high, 31 moderate,
and 7 low. This differs from the earlier GitHub push warning's count of 49;
the current registry audit includes newer advisory data and development packages.

After remediation, both the full audit and production-only audit report
**no known vulnerabilities**. No advisory is ignored or suppressed.

### Direct dependency changes

| Package          | Before | After  |
| ---------------- | ------ | ------ |
| react-router-dom | 7.15.1 | 7.18.5 |
| vite             | 8.0.14 | 8.3.6  |
| vitest           | 4.1.7  | 4.1.12 |
| postcss          | 8.5.15 | 8.5.32 |
| autoprefixer     | 10.5.0 | 10.6.2 |
| eslint           | 9.39.4 | 9.39.5 |

The lockfile also updates affected transitive packages: undici 7.30.2,
js-yaml 4.3.2, @babel/core 7.29.13, brace-expansion 1.1.21/5.0.12,
nanoid 3.3.20, browserslist 4.29.5, baseline-browser-mapping 2.11.35,
source-map-js 1.2.2, zod 4.6.7, and the Vitest/React Router companion packages.
These compatible transitive updates do not require additional manifest overrides.

### Scoped minimatch override

[GHSA-g3hv-75wg-m249](https://github.com/advisories/GHSA-g3hv-75wg-m249)
affects minimatch `>=7.0.0 <11.0.1`, including the 10.x dependency of
`@typescript-eslint/typescript-estree`. Its supported range does not yet include
the patched major, so `package.json` overrides only this affected version range
to `^11.0.5`.

The existing minimatch 3.x consumers retain their API-compatible 3.1.5 release;
the override must not force these older callers onto the different 11.x API.
`src/dependencies.test.ts` checks typed-project glob resolution and valid/invalid
TSX linting through the real parser and ESLint. Reassess the override once the
upstream parser accepts a patched minimatch release. The existing flatted
override is unchanged.

## Prevention and reproducible validation

`pnpm audit:security` audits production and development dependencies, failing
on any reported severity from low upward. CI now runs this audit and the tests
before building/publishing, using Node 22 instead of end-of-life Node 20.

```sh
pnpm install --frozen-lockfile
pnpm audit:security
pnpm audit --prod
pnpm test
pnpm build
```

These commands pass on Node 22.22.3 with pnpm 10.0.0; all **11 tests** pass,
including the two new dependency-compatibility tests.

The workflow YAML was parsed locally to check its install/audit/test/build steps.
The existing browser harness can check the production preview without sending
an application (setup is documented in `homepage-redesign.md`):

```sh
pnpm preview --host 127.0.0.1 --port 4174 --strictPort
QA_URL=http://127.0.0.1:4174 QA_TOOLS="/path/to/qa/node_modules" \
QA_OUTPUT="/path/to/local/artifacts" node docs/homepage-qa.cjs
```

The Chromium harness passes at 320, 375, 768, 1024, and 1440px against the updated
production build: routing/redirects, career/coaching style isolation, keyboard
navigation, FAQ controls, native form validation, image/font loading, horizontal
overflow, and axe accessibility scans (zero reported violations). Kwes API writes
are intentionally blocked, so delivery and server-side form acceptance are not
verified. Local screenshot/report artifacts are not committed.

## Limits and follow-up

- GitHub's repository Dependabot-alert API returned HTTP 401 without authenticated
  API access. This work remediates the current npm/GHSA audit findings, but does
  not claim that GitHub's alert dashboard has already closed its alerts. That
  requires publishing the updated manifest/lockfile and GitHub rescanning them.
- Existing repository-wide typecheck failures in legacy `ContactForm.tsx`,
  unused `CoachSubNav.tsx`, and the observer mock in `setupTests.ts` are separate
  from dependency remediation. The legacy lint configuration still needs an
  ESLint flat-config migration. The isolated compatibility lint test does not
  represent a successful repository-wide lint run.
- ESLint 9 is deprecated. Migrating its configuration and plugin stack to
  ESLint 10 is a separate maintenance task; the retained 9.x dependency tree
  currently has no audit findings. Vite also warns that the existing CommonJS
  config needs migration before a future native config-loader default; the
  current build/test commands still succeed.
- npm audit covers the lockfile's packages, not externally loaded Kwes CDN
  JavaScript, GitHub Actions implementations, application logic, or future
  advisories. No real form submission, deployment, or GitHub-hosted workflow
  execution is performed by these local checks.
