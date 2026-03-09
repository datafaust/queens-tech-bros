# AGENTS.md — Queens Tech Bros (IT Solutions Website)

## Project overview
- This is a **Next.js** website for an IT solutions business.
- Primary goals: **reliable UX**, **clear marketing copy**, **fast performance**, and **clean, maintainable code**.

## Default behavior
- Make changes **carefully** and **minimally**.
- Prefer the **smallest functional fix** over refactors.
- Keep edits **scoped to the task**—avoid unrelated cleanup.
- Preserve existing styling and patterns unless asked to redesign.

## Quality standards
- All changes must be **functional** and should not break:
  - routing/navigation
  - forms/contact flows
  - responsive/mobile layouts
  - SEO metadata (titles/descriptions)
- If you change behavior, explain the impact and how to verify.

## Code conventions
- Follow existing repo structure and conventions (App Router vs Pages Router, component patterns, naming).
- Reuse existing utilities/components instead of creating duplicates.
- Avoid adding new dependencies unless necessary; **ask before installing new packages**.

## Verification
- Prefer running existing scripts from `package.json` when relevant:
  - `npm run lint`
  - `npm run build`
  - `npm run test` (if present)
- If tests/lint fail due to pre-existing issues, note that clearly.

## Output expectations
- When you finish a task, provide:
  - what changed (files)
  - why it was changed
  - how to verify (steps/commands)