# AGENTS.md

This file is the canonical source of truth for automated coding-agent instructions in this repository.
If any other agent-specific instruction file conflicts with this document, follow this document.

## Repository Overview

This repository contains the source for `tomvo.me`, a personal website with multiple routed pages.
The project is a frontend application with reusable UI components, static assets, and CI workflows for build and publish automation.

## Architecture Overview

High-level structure:

- `src/main.tsx`: application entry point and global initialization
- `src/App.tsx`: top-level layout and route wiring
- `src/views/`: page-level views
- `src/components/`: reusable UI components grouped by domain
- `src/assets/`: images, icons, and asset helpers
- `public/`: static public files
- `.github/workflows/`: CI workflow definitions

Conventions to preserve:

- Keep routing behavior aligned with `src/App.tsx`.
- Use existing path aliases configured in project config.
- Keep styles co-located where that pattern already exists.
- Avoid introducing tools, frameworks, or patterns that are not already established unless explicitly requested.

## Development Workflow

Choose workflow based on task scope.

### Lightweight Workflow for Small Changes

Planning and implementation templates are not required for trivial changes.
A change is typically trivial when all of the following are true:

- modifies only a small number of files (typically 1-2)
- changes a limited number of lines
- does not alter architecture or system design
- does not introduce dependencies
- does not modify public APIs, schemas, or interfaces

Examples include documentation edits, typo fixes, formatting/lint fixes, and small single-file bug fixes.

For trivial changes, agents should:

1. Make the minimal change required.
2. Verify the change does not break expected behavior.
3. Provide a short explanation of what changed.

### Planning Workflow for Non-Trivial Changes

For larger or riskier tasks, follow this process:

1. Understand the task.
2. Identify relevant files.
3. Create an implementation plan.
4. Review the plan for completeness.
5. Implement minimal and focused changes.
6. Validate the result.
7. Summarize modifications.

Interactive sessions:

- Present the plan first.
- Wait for user confirmation before implementing.

## Coding Expectations

Agents should:

- read relevant files before making changes
- preserve existing architecture, naming, and conventions
- keep changes minimal and task-focused
- avoid unnecessary dependencies
- avoid breaking changes unless explicitly requested
- avoid unrelated refactors while completing a task

## Planning and Implementation Templates

Reusable templates are located in `docs/ai/`:

- `docs/ai/planning_template.md`
- `docs/ai/implementation_template.md`

Agents must:

- use `docs/ai/planning_template.md` when creating plans
- use `docs/ai/implementation_template.md` when documenting implementations
- write the active task plan to `PLANNING.md`
- write implementation notes to `IMPLEMENTATION.md`

Rules:

- Do not modify files inside `docs/ai/` during normal task execution.
- Treat `PLANNING.md` and `IMPLEMENTATION.md` as local working artifacts.
- `PLANNING.md` and `IMPLEMENTATION.md` should generally be gitignored to reduce merge conflicts and stale task history.

## Testing and Validation

Agents should:

- run existing tests when available
- run relevant build or verification commands for changed areas
- add or update tests when behavior changes and coverage is appropriate
- provide clear, reproducible verification steps for humans
- explicitly state what was not validated and why if validation cannot be run

## Pull Requests

When creating pull requests:

- use existing `.github` pull request templates when available
- choose the most appropriate template if multiple exist
- follow repository contribution and CI expectations
- summarize what changed and why
- describe how changes were validated and note any remaining risks

## Handling Missing Information

If required information is missing:

- ask clarifying questions
- avoid guessing architecture or behavior
- document assumptions when proceeding is necessary
- flag ambiguities and risks in planning or implementation notes
