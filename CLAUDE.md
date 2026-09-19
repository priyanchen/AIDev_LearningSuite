# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at http://localhost:3000 (redirects to /en)
npm run build    # Production build
npm run start    # Serve production build
npm run lint     # next lint
```

There is no test suite in this repo.

## Architecture

Next.js 14 App Router site delivering a bilingual (EN/HE) course curriculum through a **module → session → card deck** hierarchy. All content is hardcoded TypeScript data, not a CMS or database.

**Data flow:** `lib/registry.ts` defines `modules[]` and `sessions[]` (the syllabus skeleton: dates, titles, source links, status) → `content/cards/index.ts` maps a session `slug` to an optional `CardContent[]` deck defined in `content/cards/session{N}.ts` → pages in `app/[locale]/` read both and render.

- **`lib/registry.ts`** is the single source of truth for the 10-module / 35-session structure. Every session has a `status` (`complete` | `planned` | `deferred`) and a `moduleId`. Modules 6–10 are `visibility: 'hidden'` until material arrives — hidden modules/sessions still exist in the data but are filtered out by `getVisibleModules()`. Session numbers are fixed syllabus numbers (e.g. session 2 = n8n, session 19 = logistic regression) — never renumber.
- **`content/cards/`** holds the actual lesson content: one file per ingested session, each exporting an array of `CardContent` objects (`content/cards/types.ts`). Every card has bilingual (`{ en, he }`) `title`, `subtitle`, `sections[]`, and a closing `principle`. A session only gets a page with content once its deck is added to `cardDecks` in `content/cards/index.ts` — the registry's `hasCardDeck: true` flag is set manually in tandem with that.
- **Bilingual content** is stored as inline `{ en, he }` objects (the `Bilingual` type in `lib/registry.ts`) directly in the data files — not via `next-intl` message catalogs. `messages/en.json` and `messages/he.json` are only for UI chrome strings (nav, buttons), wired through `next-intl` via `i18n.ts` and `middleware.ts`. Locale routing uses `localePrefix: 'always'` (`/en/...`, `/he/...`); `app/page.tsx` at the true root just redirects to `/en`.
- **Routing:** `app/[locale]/modules/[id]` (module landing), `app/[locale]/lessons/[slug]` (single session + its card deck), `app/[locale]/cards` (cumulative card library across all ingested sessions). `app/[locale]/layout.tsx` owns the `<html lang dir>` shell and flips `dir="rtl"` for `he`.

## Ingestion protocol (adding a new session)

When asked to ingest a session, follow the README's protocol exactly:
1. Read the transcript `.vtt`, chat log, and instructor slides from the linked Drive folder (topical scope only — never reproduce slide content verbatim; the site links out to source material rather than hosting it, per the Copyright Position in README.md).
2. Author an 11-card deck (numbered `"00"` through `"10"`) in EN + HE simultaneously in `content/cards/session{N}.ts`, following the existing section/principle slot shape used by `session02.ts` and `session19.ts`.
3. Register the deck in `content/cards/index.ts`.
4. Update the matching entry in `lib/registry.ts`: `status: 'complete'`, `hasCardDeck: true`, real `title`/`headline`/`concepts`.
5. If a runnable project accompanies the session, add the zip to `public/downloads/` and set `hasProject` / `projectFile` on the session.

Ingestion order is chronological (session 3 → session 22), with session 1 backfilled last.

## Aesthetic tokens

Defined in `tailwind.config.js` and `app/globals.css` — reuse these rather than introducing new colors: `paper` (#faf8f3 background), `ink` (#1a1a1a text), `accent` (#8b2a2a burgundy, sparing use), `muted` (#6b6b6b), `rule` (#d4d0c8 dividers), `codebg` (#efece5). Georgia serif for body, Helvetica Neue for metadata, Consolas for code; small caps for headings.
