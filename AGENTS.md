# AGENTS.md

This file is the canonical source of truth for automated coding-agent instructions in this repository.  
If other agent-specific instruction files conflict with this document, follow this document.

## Repository Overview

This repository contains the source for `tomvo.me`, a personal website with multiple routed pages.  
The project is a frontend web application with static assets, componentized UI code, and a CI workflow that builds and publishes the site.

## Architecture Overview

High-level structure:

- `src/main.tsx`: application entry point and global initialization
- `src/App.tsx`: top-level layout and route wiring
- `src/views/`: page-level views (for example, `Career`, `Coach`)
- `src/components/`: reusable UI grouped by domain (`Career`, `Coach`, `NavBar`, shared footer)
- `src/assets/`: images, logos, icons, and utility asset helpers
- `public/`: static public files
- `build/`: generated production output
- `.github/workflows/`: CI workflow definitions

Project conventions to preserve:

- Use existing path aliases configured in `tsconfig.json` and `vite.config.ts`.
- Keep routing behavior aligned with `src/App.tsx`.
- Keep styles co-located when that pattern is already used (`*.css` near related components/views).

## Development Workflow

Planning before implementation is required for non-trivial changes.

Required workflow:

1. Understand the task.
2. Identify relevant files.
3. Create an implementation plan using `PLANNING.md`.
4. Review the plan for completeness.
5. Implement minimal and focused changes.
6. Validate the result.
7. Summarize modifications using `IMPLEMENTATION.md`.

Additional workflow rules:

- Do not begin implementation before a plan is written.
- In interactive sessions, present the plan and wait for confirmation before implementing.
- Only skip formal planning for extremely small, low-risk edits.

## Coding Expectations

Agents should:

- Read relevant files before changing code.
- Preserve existing architecture, naming, and repository conventions.
- Prefer small, focused edits over broad refactors.
- Avoid adding dependencies unless clearly necessary.
- Avoid breaking changes unless explicitly requested.
- Keep changes scoped to the task and avoid unrelated rewrites.

## Testing and Validation

Agents should:

- Run the repository’s existing test suite when available.
- Run relevant build or verification commands for changed areas.
- Add or update tests when behavior changes and test coverage is appropriate.
- Provide clear, reproducible validation steps in implementation notes.
- If validation cannot be run, explicitly state what was not verified and why.

## Pull Requests

When preparing pull requests:

- Use `.github` pull request templates if present.
- If multiple templates exist, choose the one that best matches the change.
- Follow repository contribution and CI expectations.
- Summarize what changed and why.
- Describe how the changes were tested and any remaining risks.

## Handling Missing Information

If required information is missing:

- Ask clarifying questions instead of guessing.
- Avoid making undocumented architecture assumptions.
- Record assumptions explicitly when proceeding is necessary.
- Flag ambiguities or risks in planning and implementation notes.
