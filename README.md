# AI Developer Course Site — v2.0

A bilingual (EN/HE) Next.js course website presenting a 10-module, 35-session AI developer curriculum through the card system. Neoclassical Pop Art aesthetic. Vercel-ready.

---

## Current State — Phase 1 Complete

**Architecture:**
- 10 modules registered · 5 visible (1–5) · 5 hidden (6–10)
- 35 sessions registered with correct dates and module mappings
- 20 sessions have source links wired in and buttons to open originals
- Module-aware navigation with breadcrumbs
- Card system with EN/HE bilingual content

**Populated card decks:**
- Session 2 · n8n (11 cards)
- Session 19 · Logistic Regression, Evaluation, K-Means (11 cards)

**Ready to ingest next:**
- Session 3 · Python (module opener) · 05.07.2026

---

## Local Setup

```bash
cd ai-course-site
npm install
npm run dev
```

Open http://localhost:3000 — redirects to `/en`. Switch to Hebrew via header button (top right).

---

## Deploy to Vercel

**Option A · CLI:**
```bash
npm install -g vercel
vercel
```

**Option B · GitHub:**
1. `git init && git add . && git commit -m "Initial commit"`
2. Push to a new GitHub repo
3. vercel.com/new → Import repo
4. Zero configuration needed. Auto-deploy on every push.

---

## Adding a New Session (Ingestion Protocol)

For each session I ingest, you send a new message. I do the rest.

**What you send:** confirmation that a session is next, and any additional context you want reflected.

**What I do:**
1. Read the transcript `.vtt` from your Drive
2. Read the chat log
3. Read the instructor slides (for topical scope only, never for reproduction)
4. Author the 11-card deck in EN + HE simultaneously, following the established card slot system
5. Update `content/cards/session{N}.ts`
6. Add it to `content/cards/index.ts`
7. Update `lib/registry.ts` — change status from `planned` to `complete`, set `hasCardDeck: true`, add real title, headline, concepts
8. Include a runnable project zip if applicable
9. Deliver the incremental site archive

Session numbers are the syllabus numbers. Session 2 = n8n. Session 19 = logistic regression.

---

## Project Structure

```
ai-course-site/
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx              RTL/LTR wrapper
│   │   ├── page.tsx                Home · module-map landing
│   │   ├── modules/
│   │   │   ├── page.tsx            Modules index
│   │   │   └── [id]/page.tsx       Individual module landing
│   │   ├── lessons/
│   │   │   └── [slug]/page.tsx     Individual session
│   │   └── cards/page.tsx          Cumulative card library
│   ├── page.tsx                    Root redirect → /en
│   └── globals.css                 Aesthetic tokens, print styles
├── components/
│   ├── Header.tsx                  Nav + language switcher
│   ├── Footer.tsx
│   ├── Card.tsx                    Individual card with expand + print
│   └── ModuleBand.tsx              Home page module row
├── content/
│   └── cards/
│       ├── types.ts                CardContent type
│       ├── session02.ts            n8n · 11 cards bilingual
│       ├── session19.ts            Logistic regression · 11 cards bilingual
│       └── index.ts                Card deck registry
├── lib/
│   └── registry.ts                 Modules + sessions data model
├── messages/
│   ├── en.json
│   └── he.json
├── public/
│   └── downloads/                  Zip files served for download
├── i18n.ts
├── middleware.ts
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

---

## Copyright Position

This site hosts **only original teaching materials** authored for the site. Instructor PDFs, videos, and course-provided datasets are **not hosted** — they are linked out to the original source folder, which requires student access.

Each session page includes:
- A "Source Materials" section linking to the external Drive files
- A clear note that access may require enrollment
- No embedded copies of copyrighted material

---

## Aesthetic Tokens

Defined once in `tailwind.config.js` and `app/globals.css`:

| Token | Value | Use |
|---|---|---|
| paper | `#faf8f3` | Background |
| ink | `#1a1a1a` | Primary text |
| accent | `#8b2a2a` | Burgundy · sparingly for emphasis |
| muted | `#6b6b6b` | Captions, metadata |
| rule | `#d4d0c8` | Dividers |
| codebg | `#efece5` | Code blocks |

- Georgia serif body · Helvetica Neue sans for metadata · Consolas mono for code
- Small caps for headings · italic subtitles
- `❦` ornament as recurring mark

---

## Ingestion Progress

| Module | Sessions | Ingested | Remaining |
|---|---|---|---|
| 1 · Intro | 1 | 0 | 1 (backfill last) |
| 2 · n8n | 1 | ✓ 1 | 0 |
| 3 · Python | 10 | 0 | 10 |
| 4 · Intro to DS | 9 | ✓ 1 (Session 19) | 8 |
| 5 · Computer Vision | 1 | 0 | 1 |
| **Total Volume I** | **22** | **2** | **20** |

Ingestion order: Session 3 → Session 22 chronologically, then Session 1 as the finale.
