import type { Locale } from '@/i18n';

export function DiagramBox({ label }: { label: string }) {
  return (
    <span className="inline-block border border-ink px-3 py-2 text-xs text-center bg-paper">
      {label}
    </span>
  );
}

export function DiagramArrow({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center px-1 flex-shrink-0">
      <span className="text-[9px] tracking-brand uppercase text-accent font-sans">{label}</span>
      <span className="text-accent">→</span>
    </div>
  );
}

// Recreated faithfully from Dr. Zuari's own hand-drawn diagrams in "02-Git and Github.pdf" — box
// layout, labels, and grouping match the source slides; restyled to the site's own visual language
// rather than reproduced as an image.
export function GitDiagrams({ locale }: { locale: Locale }) {
  return (
    <div className="mt-4 pt-4 border-t border-dashed border-rule grid gap-6">
      <div>
        <p className="text-[9px] tracking-brand uppercase text-muted font-sans mb-2 text-center">
          {locale === 'he' ? 'התרשים של ד״ר זוארי — יסודי' : "Dr. Zuari's Diagram — Fundamental"}
        </p>
        <div className="flex items-center justify-center flex-wrap gap-1">
          <DiagramBox label="working directory" />
          <DiagramArrow label="git add" />
          <DiagramBox label="staging area" />
          <DiagramArrow label="git commit" />
          <DiagramBox label="repository" />
        </div>
      </div>
      <div>
        <p className="text-[9px] tracking-brand uppercase text-muted font-sans mb-2 text-center">
          {locale === 'he' ? 'התרשים של ד״ר זוארי — זרימת עבודה מלאה' : "Dr. Zuari's Diagram — Complete Workflow"}
        </p>
        <div className="flex items-stretch justify-center flex-wrap gap-2">
          <div className="border border-dashed border-rule p-3">
            <p className="text-[8px] tracking-brand uppercase text-accent font-sans mb-2 text-center">Local Machine</p>
            <div className="flex items-center flex-wrap gap-1">
              <DiagramBox label="Code" />
              <DiagramArrow label="Add" />
              <DiagramBox label="Staged Changes" />
              <span className="text-accent px-1">→</span>
              <DiagramBox label="Committed Changes" />
            </div>
          </div>
          <div className="flex items-center px-1">
            <span className="text-[9px] tracking-brand uppercase text-accent font-sans">Push →</span>
          </div>
          <div className="border border-dashed border-rule p-3 flex items-center">
            <div>
              <p className="text-[8px] tracking-brand uppercase text-accent font-sans mb-2 text-center">GitHub</p>
              <DiagramBox label="Your GitHub Repo" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="text-[9px] tracking-brand uppercase text-muted font-sans mb-2 text-center">
          {locale === 'he' ? 'התרשים של ד״ר זוארי — עבודת צוות (שיתוף פעולה)' : "Dr. Zuari's Diagram — Working in a Team (Collaboration)"}
        </p>
        <div className="flex items-stretch justify-center flex-wrap gap-2">
          <div className="border border-dashed border-rule p-3">
            <p className="text-[8px] tracking-brand uppercase text-accent font-sans mb-2 text-center">Local Machine</p>
            <div className="text-[8px] tracking-brand uppercase text-accent font-sans text-center mb-1">↖ Pull</div>
            <div className="flex items-center flex-wrap gap-1">
              <DiagramBox label="Code" />
              <DiagramArrow label="Add" />
              <DiagramBox label="Staged Changes" />
              <span className="text-accent px-1">→</span>
              <DiagramBox label="Committed Changes" />
            </div>
          </div>
          <div className="flex items-center px-1">
            <span className="text-[9px] tracking-brand uppercase text-accent font-sans">Push →</span>
          </div>
          <div className="border border-dashed border-rule p-3">
            <p className="text-[8px] tracking-brand uppercase text-accent font-sans mb-2 text-center">GitHub</p>
            <div className="grid gap-2 justify-items-center">
              <DiagramBox label="Your GitHub Repo" />
              <div className="flex items-center gap-3 text-[8px] tracking-brand uppercase text-accent font-sans">
                <span>↓ Pull Request</span>
                <span>Sync Fork ↑</span>
              </div>
              <DiagramBox label="Other GitHub Repo" />
            </div>
          </div>
        </div>
        <p className="text-[10px] italic text-muted text-center mt-3">
          {locale === 'he'
            ? '"Other GitHub Repo" הוא ה-fork המקורי שממנו את התחלת — כאן נכנסים pull request (הצעת שינוי חזרה למקור) ו-sync fork (עדכון העותק שלך ממנו), אותו זוג פעולות שכבר מוגדר למעלה בשלב הזה.'
            : '"Other GitHub Repo" is the original fork source you started from — this is where pull request (proposing your change back upstream) and sync fork (updating your copy from it) come in, the same pair already defined above in this step.'}
        </p>
      </div>
    </div>
  );
}

// The real, current state of the repo's branches and pull requests — pulled live from the GitHub
// API, not a snapshot frozen at course-time. All three open PRs are the site author's own, proposing
// oncology-evidence content modules — the same fork/PR discipline from the diagram above, now live.
export function HerbalRepoStatusDiagram({ locale }: { locale: Locale }) {
  const prs: { number: number; en: string; he: string }[] = [
    { number: 1, en: 'Homeopathy oncology evidence and safety module', he: 'מודול ראיות ובטיחות הומאופתיה באונקולוגיה' },
    { number: 2, en: 'Chinese herbal oncology evidence and nutrition module', he: 'מודול ראיות ותזונה צמחי מרפא סיניים באונקולוגיה' },
    { number: 3, en: 'Ayurveda oncology supportive-care evidence and nutrition', he: 'ראיות טיפול תומך ותזונה איורוודה באונקולוגיה' },
  ];
  return (
    <div className="mt-4 pt-4 border-t border-dashed border-rule">
      <a
        href="https://github.com/JonathanZouari/herbal-evidence"
        target="_blank"
        rel="noopener noreferrer"
        className="block text-[9px] tracking-brand uppercase text-muted font-sans mb-1 text-center hover:text-accent transition"
      >
        {locale === 'he' ? 'המאגר האמיתי, כרגע — מ-GitHub API' : 'The Real Repo, Right Now — from the GitHub API'} ↗
      </a>
      <p className="text-[10px] italic text-muted text-center mb-4">
        {locale === 'he'
          ? 'לא תמונת מצב קפואה מזמן הקורס — נשלף חי, כולל ה-pull requests הפתוחים כרגע.'
          : "Not a snapshot frozen at course-time — pulled live, including whatever pull requests are open right now."}
      </p>
      <div className="flex items-center justify-center flex-wrap gap-2 mb-4">
        <div className="border border-dashed border-rule p-3">
          <p className="text-[8px] tracking-brand uppercase text-accent font-sans mb-2 text-center">main</p>
          <DiagramBox label="b247759 — monorepo skeleton, decisions, env examples" />
        </div>
        <div className="flex items-center px-1">
          <span className="text-[9px] tracking-brand uppercase text-accent font-sans">
            {locale === 'he' ? 'לפני ↔' : '↔ ahead'}
          </span>
        </div>
        <div className="border border-dashed border-rule p-3">
          <p className="text-[8px] tracking-brand uppercase text-accent font-sans mb-2 text-center">dev</p>
          <DiagramBox label="048f084" />
        </div>
      </div>
      <div className="border border-rule max-w-lg mx-auto divide-y divide-rule">
        {prs.map((pr) => (
          <div key={pr.number} className="flex items-center gap-3 px-4 py-2">
            <span className="text-[9px] tracking-brand uppercase text-accent font-sans flex-shrink-0">
              #{pr.number} → main
            </span>
            <span className="text-xs">{locale === 'he' ? pr.he : pr.en}</span>
          </div>
        ))}
      </div>
      <p className="text-[10px] italic text-muted text-center mt-3">
        {locale === 'he'
          ? 'שלושת ה-PRs הפתוחים הם של מחברת האתר עצמה — אותה משמעת fork/PR מלמעלה, לא היפותטית.'
          : "All three open PRs are the site author's own — the same fork/PR discipline above, not hypothetical."}
      </p>
    </div>
  );
}

// Illustrates the one concept from Session 22's git walkthrough he named but didn't demo live —
// a worktree as a full separate copy of the repo, vs. a branch as one shared working directory.
export function WorktreeDiagram({ locale }: { locale: Locale }) {
  return (
    <div className="mt-3 ps-10">
      <div className="border border-dashed border-rule p-4">
        <p className="text-[9px] tracking-brand uppercase text-muted font-sans mb-3 text-center">
          {locale === 'he' ? 'ענף אחד מול Worktrees נפרדים' : 'One Branch vs. Separate Worktrees'}
        </p>
        <div className="flex items-stretch justify-center flex-wrap gap-4">
          <div className="border border-rule p-3">
            <p className="text-[8px] tracking-brand uppercase text-accent font-sans mb-2 text-center">
              {locale === 'he' ? 'ענף — תיקיית עבודה אחת' : 'A Branch — One Working Directory'}
            </p>
            <div className="grid gap-1 justify-items-center">
              <DiagramBox label="~/herbal-evidence" />
              <span className="text-accent text-xs">↕ checkout</span>
              <DiagramBox label="feature-a" />
            </div>
            <p className="text-[9px] italic text-muted text-center mt-2 max-w-[10rem]">
              {locale === 'he'
                ? 'סוכן אחד בכל פעם — checkout מחליף את מה שעל הדיסק'
                : 'One agent at a time — checkout swaps what\'s on disk'}
            </p>
          </div>
          <div className="flex items-center px-1">
            <span className="text-accent">→</span>
          </div>
          <div className="border border-rule p-3">
            <p className="text-[8px] tracking-brand uppercase text-accent font-sans mb-2 text-center">
              {locale === 'he' ? 'Worktrees — תיקיות נפרדות פיזית' : 'Worktrees — Physically Separate Directories'}
            </p>
            <div className="grid gap-1">
              <div className="flex items-center gap-2">
                <DiagramBox label="~/herbal-evidence-a" />
                <span className="text-[8px] tracking-brand uppercase text-muted font-sans">{locale === 'he' ? 'סוכן A' : 'Agent A'}</span>
              </div>
              <div className="flex items-center gap-2">
                <DiagramBox label="~/herbal-evidence-b" />
                <span className="text-[8px] tracking-brand uppercase text-muted font-sans">{locale === 'he' ? 'סוכן B' : 'Agent B'}</span>
              </div>
              <div className="flex items-center gap-2">
                <DiagramBox label="~/herbal-evidence-c" />
                <span className="text-[8px] tracking-brand uppercase text-muted font-sans">{locale === 'he' ? 'סוכן C' : 'Agent C'}</span>
              </div>
            </div>
            <p className="text-[9px] italic text-muted text-center mt-2">
              {locale === 'he' ? 'כולם מאותו .git — רצים במקביל, בלי לדרוס זה את זה' : 'All from the same .git — run in parallel, without overwriting each other'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function TreeLine({ label, note, depth = 0 }: { label: string; note?: string; depth?: number }) {
  return (
    <div className="flex items-baseline gap-2 font-mono text-xs" style={{ paddingInlineStart: `${depth * 1.25}rem` }}>
      <span>{depth > 0 ? '└─' : ''}</span>
      <span className="text-accent">{label}</span>
      {note && <span className="text-muted italic font-sans text-[10px]">— {note}</span>}
    </div>
  );
}

// Real, live directory structure of the actual herbal-evidence repo (verified via the GitHub API,
// not invented) — Dr. Zuari's own "always ask for a diagram to understand the whole process" habit
// (quoted above), applied to the real project setup instead of left abstract.
export function HerbalSetupDiagram({ locale }: { locale: Locale }) {
  return (
    <div className="mt-4 pt-4 border-t border-dashed border-rule">
      <p className="text-[9px] tracking-brand uppercase text-muted font-sans mb-1 text-center">
        {locale === 'he'
          ? '"תכיני לי איזה תרשים כזה, שיעזור לי להבין איך כל התהליך הזה הולך לעבוד" — מיושם על ההגדרה האמיתית'
          : '"Prepare me a diagram like this, to help me understand how this whole process is going to work" — applied to the real setup'}
      </p>
      <p className="text-[10px] italic text-muted text-center mb-4">
        {locale === 'he'
          ? 'מבנה התיקיות האמיתי של herbal-evidence כפי שהוא היום, מ-GitHub — לא תרשים כללי.'
          : 'The real folder structure of herbal-evidence as it exists today, pulled from GitHub — not a generic diagram.'}
      </p>
      <div className="border border-rule p-4 bg-paper grid gap-1 max-w-md mx-auto">
        <TreeLine label="herbal-evidence/" />
        <TreeLine depth={1} label="frontend/" note={locale === 'he' ? 'HTML/CSS/JS סטטי — שירות Railway משלו' : 'static HTML/CSS/JS — own Railway service'} />
        <TreeLine depth={1} label="backend/" note={locale === 'he' ? 'FastAPI + Uvicorn — שירות Railway משלו' : 'FastAPI + Uvicorn — own Railway service'} />
        <TreeLine depth={2} label="app/" />
        <TreeLine depth={3} label="ai/  api/  auth/  domain/  jobs/  research/  services/" />
        <TreeLine depth={2} label="tests/" />
        <TreeLine depth={1} label="supabase/" note={locale === 'he' ? 'קונפיגורציית CLI, migrations, seed' : 'CLI config, migrations, seed'} />
        <TreeLine depth={1} label="docs/" note={locale === 'he' ? 'ארכיטקטורה, החלטות, מודל נתונים, מדריך חוקר' : 'architecture, decisions, data model, researcher guide'} />
        <TreeLine depth={1} label="README.md" />
        <TreeLine depth={1} label=".gitignore" />
      </div>
      <p className="text-[10px] italic text-muted text-center mt-3">
        {locale === 'he'
          ? 'שימו לב: frontend ו-backend הם שני שירותים נפרדים, בדיוק כמו שד״ר זוארי תיאר בכרטיס 3 למעלה — לא חבילה אחת.'
          : "Note: frontend and backend are two separate services, exactly as Dr. Zuari described in Card 3 above — not one bundle."}
      </p>
    </div>
  );
}

// Both branches' folder trees, pulled live from the GitHub API — same file layout on main and dev,
// but dev's docs/design/stitch.md is genuinely ahead: a real Stitch MCP screen-generation log with
// session ids, timestamps, and an explicit "don't claim success without a confirmed payload" note.
export function HerbalBranchTreesDiagram({ locale }: { locale: Locale }) {
  const treeNodes = (
    <>
      <TreeLine label="herbal-evidence/" />
      <TreeLine depth={1} label="frontend/" />
      <TreeLine depth={1} label="backend/" />
      <TreeLine depth={2} label="app/" />
      <TreeLine depth={3} label="ai/ api/ auth/ domain/ jobs/ research/ services/" />
      <TreeLine depth={2} label="tests/" />
      <TreeLine depth={1} label="supabase/" />
      <TreeLine depth={1} label="docs/" note={locale === 'he' ? 'כולל design/stitch.md' : 'incl. design/stitch.md'} />
      <TreeLine depth={1} label="README.md" />
      <TreeLine depth={1} label=".gitignore" />
    </>
  );
  const screens: { en: string; he: string; status: 'ok' | 'timeout' | 'none' }[] = [
    { en: 'Landing page', he: 'עמוד נחיתה', status: 'ok' },
    { en: 'Authentication', he: 'אימות', status: 'ok' },
    { en: 'User dashboard "My Requests"', he: 'דשבורד משתמש "הבקשות שלי"', status: 'ok' },
    { en: 'New request form', he: 'טופס בקשה חדשה', status: 'timeout' },
    { en: 'Waiting status + clarification', he: 'סטטוס המתנה + בירור', status: 'timeout' },
    { en: 'Approved response view + 5 more', he: 'תצוגת תשובה מאושרת + 5 נוספים', status: 'none' },
  ];
  return (
    <div className="mt-4 pt-4 border-t border-dashed border-rule">
      <p className="text-[9px] tracking-brand uppercase text-muted font-sans mb-1 text-center">
        {locale === 'he' ? 'main מול dev — מה באמת שם' : "main vs. dev — What's Actually There"}
      </p>
      <p className="text-[10px] italic text-muted text-center mb-4">
        {locale === 'he'
          ? 'שני העצים נמשכו חי מ-GitHub — אותו מבנה תיקיות בדיוק בשני הענפים; ההבדל האמיתי חבוי בתוך docs/design/stitch.md.'
          : "Both trees pulled live from GitHub — the exact same folder layout on both branches; the real difference is hidden inside docs/design/stitch.md."}
      </p>
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="border border-rule p-4 bg-paper">
          <p className="text-[8px] tracking-brand uppercase text-accent font-sans font-semibold mb-2 text-center">
            main — b247759
          </p>
          <div className="grid gap-1">{treeNodes}</div>
        </div>
        <div className="border border-rule p-4 bg-paper">
          <p className="text-[8px] tracking-brand uppercase text-accent font-sans font-semibold mb-2 text-center">
            dev — 048f084
          </p>
          <div className="grid gap-1">{treeNodes}</div>
        </div>
      </div>
      <p className="text-[9px] tracking-brand uppercase text-muted font-sans mt-4 mb-2 text-center">
        {locale === 'he' ? 'docs/design/stitch.md ב-dev — לוג יצירת מסכי Stitch, 2026-09-16' : 'docs/design/stitch.md on dev — Stitch screen-generation log, 2026-09-16'}
      </p>
      <div className="border border-rule max-w-lg mx-auto divide-y divide-rule">
        {screens.map((s) => (
          <div key={s.en} className="flex items-center justify-between gap-3 px-4 py-1.5">
            <span className="text-xs">{s[locale]}</span>
            <span
              className={`text-[9px] tracking-brand uppercase font-sans font-semibold ${
                s.status === 'ok' ? 'text-accent' : s.status === 'timeout' ? 'text-muted' : 'text-muted opacity-60'
              }`}
            >
              {s.status === 'ok'
                ? (locale === 'he' ? 'נוצר' : 'Generated')
                : s.status === 'timeout'
                  ? (locale === 'he' ? 'תם הזמן' : 'Timed out')
                  : (locale === 'he' ? 'טרם התבקש' : 'Not requested')}
            </span>
          </div>
        ))}
      </div>
      <p className="text-[10px] italic text-muted text-center mt-3 max-w-md mx-auto">
        {locale === 'he'
          ? '"שום דבר למעלה לא טוען שמסך קיים אלא אם כלי היצירה החזיר payload מאושר." — ציטוט ישיר מ-docs/design/stitch.md על dev'
          : '"Nothing above claims a screen exists unless the generation tool returned a success payload." — a direct quote from docs/design/stitch.md on dev'}
      </p>
    </div>
  );
}

// Flask itself — named live by Dr. Zuari in Session 22's characterization chat as part of the
// generic reference stack ("I want it to — for it to be fast. Flask."). The real herbal-evidence
// repo chose FastAPI instead (see the Real Stack diagram, Step 7) — this explains what was actually
// named, not what shipped.
export function FlaskExplainerCard({ locale }: { locale: Locale }) {
  const concepts: { term: string; en: string; he: string }[] = [
    {
      term: 'Micro-framework',
      en: "Lightweight — gives you the essentials without much extra overhead, so you're free to structure the rest of the app however you want.",
      he: 'קליל — נותן את היסודות בלי הרבה עומס נוסף, כך שאת חופשייה לבנות את שאר האפליקציה איך שתרצי.',
    },
    {
      term: 'Routes',
      en: 'Map a URL to a Python function — when a user visits that URL, Flask runs the function and returns its response (e.g. the homepage route).',
      he: 'ממפות כתובת URL לפונקציית פייתון — כשמשתמש מבקר בכתובת הזו, Flask מריצה את הפונקציה ומחזירה את התגובה שלה (למשל, ה-route של דף הבית).',
    },
    {
      term: 'Templates (Jinja)',
      en: "HTML with placeholders for dynamic content — lets you insert a Python variable straight into a web page.",
      he: 'HTML עם placeholders לתוכן דינמי — מאפשר להכניס משתנה פייתון ישירות לתוך דף אינטרנט.',
    },
    {
      term: 'Requests',
      en: 'Handles HTTP requests — GET to retrieve data, POST to submit it (a form, for instance).',
      he: 'מטפלת בבקשות HTTP — GET לשליפת נתונים, POST לשליחתם (טופס, למשל).',
    },
    {
      term: 'Sessions',
      en: "Remembers information about a user across pages — like whether they're logged in.",
      he: 'זוכרת מידע על משתמש לאורך דפים — כמו אם היא מחוברת.',
    },
  ];
  return (
    <div className="mt-4 pt-4 border-t border-dashed border-rule">
      <p className="text-[9px] tracking-brand uppercase text-muted font-sans mb-1 text-center">
        {locale === 'he' ? 'Flask — מה שנקרא בפועל, לא מה שנשלח' : 'Flask — What Was Actually Named, Not What Shipped'}
      </p>
      <blockquote className="border-s-2 border-accent ps-4 mb-4 max-w-md mx-auto">
        <p dir="rtl" className="text-sm leading-relaxed mb-1">
          "אני רוצה שיהיה — שזה יהיה מהיר. Flask."
        </p>
        <p dir="ltr" className="text-sm italic text-muted leading-relaxed">
          "I want it to — for it to be fast. Flask."
        </p>
        <p className="text-[9px] tracking-brand uppercase text-muted font-sans mt-1">
          — {locale === 'he' ? 'ד״ר זוארי, שיחת האפיון של מפגש 22' : "Dr. Zuari, Session 22's characterization chat"}
        </p>
      </blockquote>
      <div className="border border-rule max-w-lg mx-auto divide-y divide-rule">
        {concepts.map((c) => (
          <div key={c.term} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 px-4 py-2.5">
            <span className="text-[9px] tracking-brand uppercase text-accent font-sans font-semibold flex-shrink-0 sm:w-32">
              {c.term}
            </span>
            <span className="text-xs leading-relaxed">{locale === 'he' ? c.he : c.en}</span>
          </div>
        ))}
      </div>
      <p className="text-[10px] italic text-muted text-center mt-3 max-w-md mx-auto">
        {locale === 'he'
          ? 'ביחד הם מחברים את ה-front end (HTML/CSS) ללוגיקת ה-backend (Python) ולנתונים (בסיס נתונים) — אבל herbal-evidence האמיתי בחר ב-FastAPI במקום Flask (ראו שלב 7 למעלה).'
          : 'Together they connect the front end (HTML/CSS) to back-end logic (Python) and data (a database) — but the real herbal-evidence repo chose FastAPI over Flask (see Step 7 above).'}
      </p>
    </div>
  );
}

// Real architecture, pulled from the repo's own docs/decisions.md (a live engineering decision log,
// not a placeholder — its docs/architecture.md is literally still a stub) — the actual stack, not the
// generic Python/Flask reference example in the points above.
export function HerbalArchitectureDiagram({ locale }: { locale: Locale }) {
  return (
    <div className="mt-4 pt-4 border-t border-dashed border-rule">
      <p className="text-[9px] tracking-brand uppercase text-muted font-sans mb-1 text-center">
        {locale === 'he' ? 'הארכיטקטורה האמיתית — מ-docs/decisions.md' : 'The Real Architecture — from docs/decisions.md'}
      </p>
      <p className="text-[10px] italic text-muted text-center mb-4">
        {locale === 'he'
          ? 'לא הערימה הכללית לדוגמה למעלה — ההחלטות ההנדסיות בפועל שנרשמו בפרויקט עצמו (D-002 עד D-011).'
          : "Not the generic example stack above — the actual engineering decisions logged in the project itself (D-002 through D-011)."}
      </p>
      <div className="flex items-stretch justify-center flex-wrap gap-2">
        <div className="border border-dashed border-rule p-3">
          <p className="text-[8px] tracking-brand uppercase text-accent font-sans mb-2 text-center">
            {locale === 'he' ? 'Frontend (Railway)' : 'Frontend (Railway)'}
          </p>
          <DiagramBox label="HTML / CSS / JS + Caddy" />
        </div>
        <div className="flex items-center px-1">
          <span className="text-[9px] tracking-brand uppercase text-accent font-sans">↔</span>
        </div>
        <div className="border border-dashed border-rule p-3">
          <p className="text-[8px] tracking-brand uppercase text-accent font-sans mb-2 text-center">
            {locale === 'he' ? 'Backend (Railway)' : 'Backend (Railway)'}
          </p>
          <DiagramBox label="Python 3.13 · FastAPI · Uvicorn" />
        </div>
        <div className="flex items-center px-1">
          <span className="text-[9px] tracking-brand uppercase text-accent font-sans">↔</span>
        </div>
        <div className="border border-dashed border-rule p-3">
          <p className="text-[8px] tracking-brand uppercase text-accent font-sans mb-2 text-center">Supabase</p>
          <div className="grid gap-1">
            <DiagramBox label="Auth (JWT)" />
            <DiagramBox label="Postgres + Job Queue" />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-2 mt-3">
        <span className="text-[9px] tracking-brand uppercase text-accent font-sans">↓</span>
      </div>
      <div className="flex items-center justify-center gap-2">
        <DiagramBox label="OpenAI (AI drafts)" />
        <DiagramBox label="PubMed + Europe PMC (evidence)" />
      </div>
      <p className="text-[10px] italic text-muted text-center mt-3">
        {locale === 'he'
          ? 'החלטות אמיתיות: Postgres כתור עבודות עמיד — בלי Redis, בלי שירות שלישי (D-010). לטיוטות ולחומרי צוות אין מדיניות RLS — נגישים רק דרך ה-backend עם מפתח service-role (D-011).'
          : "Real decisions: Postgres as a durable job queue — no Redis, no third service (D-010). Drafts and staff artifacts have no RLS policies — reachable only through the backend with a service-role key (D-011)."}
      </p>
    </div>
  );
}

// The real stack, laid out as choices-by-category rather than data-flow (that's Step 6's diagram) —
// every row cites its own docs/decisions.md entry, not the generic Python/Flask example above.
export function HerbalTechStackDiagram({ locale }: { locale: Locale }) {
  const rows: { categoryEn: string; categoryHe: string; choice: string; decision: string }[] = [
    { categoryEn: 'Language & Runtime', categoryHe: 'שפה וסביבת ריצה', choice: 'Python 3.13', decision: 'D-002' },
    { categoryEn: 'Web Framework', categoryHe: 'Web Framework', choice: 'FastAPI · Uvicorn', decision: 'D-002' },
    { categoryEn: 'Dependency Management', categoryHe: 'ניהול תלויות', choice: '`uv`', decision: 'D-002' },
    { categoryEn: 'Frontend', categoryHe: 'Frontend', choice: 'Plain HTML/CSS/JS — no framework', decision: 'D-003' },
    { categoryEn: 'Frontend Server', categoryHe: 'שרת Frontend', choice: 'Caddy', decision: 'D-003' },
    { categoryEn: 'Auth', categoryHe: 'אימות', choice: 'Supabase — email/password, JWT', decision: 'D-004' },
    { categoryEn: 'AI Provider', categoryHe: 'ספק AI', choice: 'OpenAI, behind a replaceable interface', decision: 'D-009' },
    { categoryEn: 'Evidence Sources', categoryHe: 'מקורות ראיות', choice: 'PubMed E-utilities · Europe PMC REST API', decision: 'D-012' },
    { categoryEn: 'Design Tool', categoryHe: 'כלי עיצוב', choice: 'Google Stitch', decision: '—' },
  ];
  return (
    <div className="mt-4 pt-4 border-t border-dashed border-rule">
      <p className="text-[9px] tracking-brand uppercase text-muted font-sans mb-1 text-center">
        {locale === 'he' ? 'הערימה האמיתית, לפי קטגוריה — מ-docs/decisions.md' : 'The Real Stack, By Category — from docs/decisions.md'}
      </p>
      <p className="text-[10px] italic text-muted text-center mb-4">
        {locale === 'he'
          ? 'לא הדוגמה הכללית למעלה — הבחירות בפועל שד״ר זוארי רשם ונימק בפרויקט עצמו.'
          : 'Not the generic example above — the actual choices Dr. Zuari logged and justified in the project itself.'}
      </p>
      <div className="border border-rule max-w-lg mx-auto divide-y divide-rule">
        {rows.map((row) => (
          <div key={row.categoryEn} className="flex items-center justify-between gap-3 px-4 py-2">
            <span className="text-[9px] tracking-brand uppercase text-accent font-sans flex-shrink-0 w-32">
              {locale === 'he' ? row.categoryHe : row.categoryEn}
            </span>
            <span className="text-xs text-end flex-1">{row.choice}</span>
            <span className="text-[9px] text-muted font-mono flex-shrink-0">{row.decision}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// The real problem statement he reached live, plus the safety constraint that shaped the whole
// product — Session 22's transcript, the actual opening of the characterization.
export function HerbalProblemCallout({ locale }: { locale: Locale }) {
  return (
    <div className="mt-4 pt-4 border-t border-dashed border-rule">
      <p className="text-[9px] tracking-brand uppercase text-muted font-sans mb-3 text-center">
        {locale === 'he' ? 'הבעיה בפועל — מפגש 22, לא היפותטית' : 'The Actual Problem — Session 22, Not Hypothetical'}
      </p>
      <blockquote className="border-s-2 border-accent ps-4 mb-4">
        <p dir="rtl" className="text-sm leading-relaxed mb-1">
          "שמעתי שצמח X עוזר למחלה שלי — האם הטענה הזו באמת מבוססת?"
        </p>
        <p dir="ltr" className="text-sm italic text-muted leading-relaxed">
          "I heard herb X helps with my condition — is that claim actually evidence-based?"
        </p>
      </blockquote>
      <div className="border border-accent p-4 max-w-md mx-auto">
        <p className="text-[9px] tracking-brand uppercase text-accent font-sans font-semibold mb-2 text-center">
          {locale === 'he' ? 'האילוץ שעיצב הכול' : 'The Constraint That Shaped Everything'}
        </p>
        <p className="text-xs leading-relaxed text-center">
          {locale === 'he'
            ? 'צמח שנחקר לא אומר שהוא מועיל — רשימה גולמית עלולה להיקרא כהמלצה. הסיכון הזה עיצב את המוצר מההתחלה.'
            : "A plant being researched doesn't mean it's beneficial — a bare list risks being read as a recommendation. That risk shaped the product from the start."}
        </p>
      </div>
    </div>
  );
}

// The real user, straight from the repo's own README plus the screen flow walked through live —
// not a hypothetical persona.
export function HerbalPersonaCard({ locale }: { locale: Locale }) {
  const rows: { labelEn: string; labelHe: string; en: string; he: string }[] = [
    {
      labelEn: 'Who', labelHe: 'מי',
      en: 'A cancer patient, or their caregiver — a family member (README + Session 22 screen flow)',
      he: 'מטופלת סרטן, או המטפל/ת שלה — בן משפחה (README + זרימת המסך של מפגש 22)',
    },
    {
      labelEn: 'Goal', labelHe: 'מטרה',
      en: 'Check whether one specific herb genuinely helps with appetite improvement',
      he: 'לבדוק אם צמח ספציפי אחד באמת עוזר לשיפור תיאבון',
    },
    {
      labelEn: 'Blocked by', labelHe: 'חסומה על ידי',
      en: 'Mixed, unsourced herbal claims online — no single place grades evidence AND has a human check it',
      he: 'טענות צמחיות מעורבות וחסרות-מקור באינטרנט — אין מקום אחד שמדרג ראיות וגם יש בו בדיקה אנושית',
    },
    {
      labelEn: 'Wants to feel', labelHe: 'רוצה להרגיש',
      en: 'Confident the answer was actually reviewed by a person, not just an AI output',
      he: 'בטוחה שהתשובה נבדקה בפועל על ידי אדם, לא רק פלט AI',
    },
  ];
  return (
    <div className="mt-4 pt-4 border-t border-dashed border-rule">
      <p className="text-[9px] tracking-brand uppercase text-muted font-sans mb-3 text-center">
        {locale === 'he' ? 'הפרסונה האמיתית — README + מפגש 22' : 'The Real Persona — README + Session 22'}
      </p>
      <div className="border border-rule max-w-md mx-auto">
        {rows.map((r, i) => (
          <div key={i} className={`flex gap-3 px-4 py-2.5 ${i > 0 ? 'border-t border-rule' : ''}`}>
            <span className="text-[9px] tracking-brand uppercase text-accent font-sans font-semibold flex-shrink-0 w-24">
              {locale === 'he' ? r.labelHe : r.labelEn}
            </span>
            <span className="text-xs leading-relaxed">{locale === 'he' ? r.he : r.en}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// The real V1 boundary — a long live brainstorm narrowed down to one symptom, plus the README's own
// explicit out-of-scope statement. Source: Session 22's chat/transcript + the repo's README.
export function HerbalMVPDiagram({ locale }: { locale: Locale }) {
  const brainstormed = [
    { en: 'Cancer support', he: 'תמיכה בסרטן' },
    { en: 'Winter illnesses', he: 'מחלות חורף' },
    { en: "Children's illnesses", he: 'מחלות ילדים' },
    { en: 'Immune support', he: 'חיזוק חיסוני' },
    { en: 'Pain', he: 'כאב' },
    { en: 'Nausea', he: 'בחילה' },
    { en: 'Fatigue', he: 'עייפות' },
    { en: 'Sleep issues', he: 'בעיות שינה' },
  ];
  return (
    <div className="mt-4 pt-4 border-t border-dashed border-rule">
      <p className="text-[9px] tracking-brand uppercase text-muted font-sans mb-3 text-center">
        {locale === 'he' ? 'מסיעור מוחות ל-V1 אחד — ממפגש 22 + ה-README' : 'From Brainstorm to One V1 — Session 22 + the README'}
      </p>
      <div className="flex flex-wrap justify-center gap-1.5 mb-3 max-w-md mx-auto">
        {brainstormed.map((s, i) => (
          <span key={i} className="text-[10px] border border-rule text-muted px-2 py-1 line-through decoration-accent/60">
            {s[locale]}
          </span>
        ))}
      </div>
      <div className="flex justify-center mb-3">
        <span className="text-accent">↓</span>
      </div>
      <div className="flex justify-center mb-4">
        <span className="text-sm border-2 border-accent text-accent px-4 py-2 font-semibold small-caps tracking-wide">
          {locale === 'he' ? 'צמח אחד + שיפור תיאבון' : 'One herb + appetite improvement'}
        </span>
      </div>
      <div className="grid sm:grid-cols-2 gap-3 max-w-lg mx-auto">
        <div className="border border-rule p-3">
          <p className="text-[8px] tracking-brand uppercase text-accent font-sans font-semibold mb-2 text-center">
            {locale === 'he' ? 'בתחום (README)' : 'In Scope (README)'}
          </p>
          <p className="text-[11px] leading-relaxed text-center">
            {locale === 'he'
              ? 'דירוג עד כמה טענה מבוססת ראיות, עם מקורות ואישור חוקר'
              : 'Rating how evidence-based a claim is, with sources and researcher approval'}
          </p>
        </div>
        <div className="border border-rule p-3 bg-codebg/40">
          <p className="text-[8px] tracking-brand uppercase text-muted font-sans font-semibold mb-2 text-center">
            {locale === 'he' ? 'מחוץ לתחום (README)' : 'Out of Scope (README)'}
          </p>
          <p className="text-[11px] leading-relaxed text-center text-muted">
            {locale === 'he'
              ? 'המלצה איזה צמח לקחת, רישום מינון, אישור שילוב עם טיפול'
              : 'Recommending which herb to take, dosing, approving treatment combinations'}
          </p>
        </div>
      </div>
    </div>
  );
}

// The actual user journey he generated live in Session 22, walking through it screen-by-screen —
// not a hypothetical UX flow. Source: the session's own caption transcript.
export function HerbalUXFlowDiagram({ locale }: { locale: Locale }) {
  const steps: { en: string; he: string }[] = [
    { en: 'Family member logs in', he: 'בן משפחה — כניסה לחשבון' },
    { en: 'Submits a request to check a plant', he: 'הגשת בקשה לבדיקת צמח' },
    { en: 'Brief clarification if ambiguous', he: 'בירור קצר במקרה של עמימות' },
    { en: 'Request queued — waiting status shown', he: 'הבקשה בתור — סטטוס המתנה מוצג' },
    { en: 'AI prepares a draft (research search)', he: 'AI מכין טיוטה (חיפוש מחקרי)' },
    { en: 'Draft with findings ready', he: 'טיוטה עם ממצאים מוכנה' },
    { en: "Researcher's decision", he: 'החלטת החוקר' },
  ];
  return (
    <div className="mt-4 pt-4 border-t border-dashed border-rule">
      <p className="text-[9px] tracking-brand uppercase text-muted font-sans mb-1 text-center">
        {locale === 'he' ? 'המסע האמיתי — ממפגש 22, לא היפותטי' : 'The Real Journey — from Session 22, Not Hypothetical'}
      </p>
      <div className="grid gap-2 max-w-md mx-auto">
        {steps.map((s, i) => (
          <div key={i} className="flex items-center gap-2">
            <span className="text-[9px] tracking-brand uppercase text-accent font-sans font-semibold flex-shrink-0 w-5">
              {String(i + 1).padStart(2, '0')}
            </span>
            <span className="flex-1 border border-ink px-3 py-1.5 text-xs bg-paper text-center">
              {s[locale]}
            </span>
          </div>
        ))}
        <div className="flex items-center gap-2">
          <span className="text-[9px] tracking-brand uppercase text-accent font-sans font-semibold flex-shrink-0 w-5">→</span>
          <div className="flex-1 grid grid-cols-2 gap-2">
            <span className="border border-accent text-accent px-2 py-1.5 text-[11px] bg-paper text-center">
              {locale === 'he' ? 'תיקון נדרש ↺' : 'Needs correction ↺'}
            </span>
            <span className="border border-accent text-accent px-2 py-1.5 text-[11px] bg-paper text-center">
              {locale === 'he' ? 'מאושרת לפרסום' : 'Approved for publish'}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[9px] tracking-brand uppercase text-accent font-sans font-semibold flex-shrink-0 w-5">08</span>
          <span className="flex-1 border border-ink px-3 py-1.5 text-xs bg-paper text-center">
            {locale === 'he' ? 'תשובה אישית בחשבון · גרסה נשמרת לעדכון עתידי' : "Personal answer in the user's account · version saved for a future update"}
          </span>
        </div>
      </div>
    </div>
  );
}

// The real design system, from docs/design/stitch.md — not a generic palette.
export function HerbalUIDesignSystem({ locale }: { locale: Locale }) {
  return (
    <div className="mt-4 pt-4 border-t border-dashed border-rule">
      <p className="text-[9px] tracking-brand uppercase text-muted font-sans mb-1 text-center">
        {locale === 'he' ? 'מערכת העיצוב האמיתית — "Herbal Evidence – Calm Research"' : 'The Real Design System — "Herbal Evidence – Calm Research"'}
      </p>
      <div className="flex items-center justify-center gap-4 mt-4">
        <div className="text-center">
          <div className="w-14 h-14 rounded-lg border border-ink" style={{ backgroundColor: '#3F6B5A' }} />
          <span className="text-[9px] font-mono text-muted mt-1 block">#3F6B5A</span>
          <span className="text-[8px] tracking-brand uppercase text-accent font-sans">
            {locale === 'he' ? 'ראשי' : 'Primary'}
          </span>
        </div>
        <div className="text-center">
          <div className="w-14 h-14 rounded-lg border border-ink" style={{ backgroundColor: '#F7F7F4' }} />
          <span className="text-[9px] font-mono text-muted mt-1 block">#F7F7F4</span>
          <span className="text-[8px] tracking-brand uppercase text-accent font-sans">
            {locale === 'he' ? 'ניטרלי' : 'Neutral'}
          </span>
        </div>
        <div className="text-center">
          <div className="w-14 h-14 rounded-lg border border-ink flex items-center justify-center bg-paper" style={{ borderRadius: '8px' }}>
            <span className="text-[9px] font-sans">Aa</span>
          </div>
          <span className="text-[9px] font-mono text-muted mt-1 block">Noto Sans</span>
          <span className="text-[8px] tracking-brand uppercase text-accent font-sans">
            {locale === 'he' ? 'גופן' : 'Typeface'}
          </span>
        </div>
        <div className="text-center">
          <div className="w-14 h-14 border border-ink bg-paper" style={{ borderRadius: '8px' }} />
          <span className="text-[9px] font-mono text-muted mt-1 block">8px</span>
          <span className="text-[8px] tracking-brand uppercase text-accent font-sans">
            {locale === 'he' ? 'רדיוס' : 'Radius'}
          </span>
        </div>
      </div>
    </div>
  );
}

// Everything below is real, pulled live via the GitHub API from
// github.com/JonathanZouari/herbal-evidence/pull/1 (head sha 9c97a52, opened 2026-09-16 by
// priyanchen) — a real, open, unmerged proposal PR: a new "supportive_care_evidence" module for
// homeopathy-oncology evidence education. Nothing here is patient-visible or clinically approved;
// the PR's own explicit point is that no card in it can pass its publish gate yet.

export function PrOverviewDiagram({ locale }: { locale: Locale }) {
  const stats = [
    { labelEn: 'Files changed', labelHe: 'קבצים שהשתנו', v: '14' },
    { labelEn: 'Additions', labelHe: 'הוספות', v: '+1,832' },
    { labelEn: 'Deletions', labelHe: 'מחיקות', v: '0' },
    { labelEn: 'Commits', labelHe: 'קומיטים', v: '1' },
  ];
  return (
    <div className="mt-4 pt-4 border-t border-dashed border-rule">
      <p className="text-[9px] tracking-brand uppercase text-muted font-sans mb-1 text-center">
        {locale === 'he' ? 'PR #1 — פרופוזל: מודול ראיות ובטיחות הומאופתיה באונקולוגיה' : 'PR #1 — Proposal: Homeopathy Oncology Evidence and Safety Module'}
      </p>
      <p className="text-[10px] italic text-muted text-center mb-4">
        {locale === 'he'
          ? 'נפתח ב-2026-09-16 על ידי priyanchen · main ← proposal/homeopathy-oncology-evidence · עדיין פתוח, לא ממוזג'
          : 'Opened 2026-09-16 by priyanchen · main ← proposal/homeopathy-oncology-evidence · still open, unmerged'}
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        {stats.map((s) => (
          <div key={s.labelEn} className="border border-rule px-4 py-2 text-center">
            <div className="text-[9px] tracking-brand uppercase text-muted font-sans">{locale === 'he' ? s.labelHe : s.labelEn}</div>
            <div className="font-mono text-sm">{s.v}</div>
          </div>
        ))}
      </div>
      <p className="text-[10px] italic text-muted text-center mt-4 max-w-lg mx-auto">
        {locale === 'he'
          ? 'תוספת בלבד (לא תכונה חיה): הומאופתיה מוסברת חינוכית באונקולוגיה, לעולם לא המלצה על תרופה. הראיות האמינות הנוכחיות (NCCIH, Cancer Research UK, Macmillan, FDA, וסקירות שיטתיות משנת 2006 ו-2022) לא מראות שהומאופתיה מונעת, מטפלת, שולטת, מכווצת או מרפאה סרטן.'
          : 'Additive only (not a live feature): homeopathy explained educationally in oncology, never a remedy recommendation. Current reliable evidence (NCCIH, Cancer Research UK, Macmillan, FDA, and 2006/2022 systematic reviews) does not show that homeopathy prevents, treats, controls, shrinks, or cures cancer.'}
      </p>
    </div>
  );
}

export function PrFileTreeDiagram({ locale }: { locale: Locale }) {
  return (
    <div className="mt-4 pt-4 border-t border-dashed border-rule">
      <p className="text-[9px] tracking-brand uppercase text-muted font-sans mb-1 text-center">
        {locale === 'he' ? 'כל 14 הקבצים שהשתנו — מ-GitHub, לא מודגם' : 'All 14 changed files — from GitHub, not staged'}
      </p>
      <div className="border border-rule p-4 bg-paper grid gap-1 max-w-lg mx-auto">
        <TreeLine label="README.md" note={locale === 'he' ? 'שונה, +4' : 'modified, +4'} />
        <TreeLine label="docs/decisions.md" note={locale === 'he' ? 'שונה, +1' : 'modified, +1'} />
        <TreeLine label="docs/proposals/homeopathy-oncology-evidence/" />
        <TreeLine depth={1} label="README.md" note="+44" />
        <TreeLine depth={1} label="clinical-evidence-map.md" note="+21" />
        <TreeLine depth={1} label="evidence-and-safety.md" note="+60" />
        <TreeLine depth={1} label="implementation-phases.md" note="+15" />
        <TreeLine depth={1} label="integration-plan.md" note="+42" />
        <TreeLine depth={1} label="interview-decisions.md" note="+27" />
        <TreeLine depth={1} label="review-request-for-jonathan.md" note="+25" />
        <TreeLine depth={1} label="source-assessment.md" note="+75" />
        <TreeLine label="knowledge/homeopathy-oncology/" />
        <TreeLine depth={1} label="example_evidence_cards.json" note={locale === 'he' ? '13 כרטיסי ראיות, +518' : '13 evidence cards, +518'} />
        <TreeLine depth={1} label="source_registry.json" note={locale === 'he' ? '21 מקורות, +296' : '21 sources, +296'} />
        <TreeLine label="scripts/validate_homeopathy_proposal.py" note="+426" />
        <TreeLine label="backend/tests/test_homeopathy_knowledge_contract.py" note="+278" />
      </div>
    </div>
  );
}

const evidenceCardStates = [
  { key: 'research_only', labelEn: 'research_only', n: 4 },
  { key: 'insufficient_evidence', labelEn: 'insufficient_evidence', n: 4 },
  { key: 'avoid', labelEn: 'avoid', n: 2 },
  { key: 'blocked_unsupported', labelEn: 'blocked_unsupported', n: 1 },
  { key: 'blocked_integrity', labelEn: 'blocked_integrity', n: 1 },
  { key: 'blocked_no_results', labelEn: 'blocked_no_results', n: 1 },
];

export function PrEvidenceCardsDiagram({ locale }: { locale: Locale }) {
  const max = 4;
  return (
    <div className="mt-4 pt-4 border-t border-dashed border-rule">
      <p className="text-[9px] tracking-brand uppercase text-muted font-sans mb-1 text-center">
        {locale === 'he' ? '13 כרטיסי ראיות לדוגמה, לפי מצב — knowledge/homeopathy-oncology/example_evidence_cards.json' : '13 example evidence cards, by state — knowledge/homeopathy-oncology/example_evidence_cards.json'}
      </p>
      <p className="text-[10px] italic text-muted text-center mb-4">
        {locale === 'he' ? 'שמונה מצבים מותרים מוגדרים; רק שישה בשימוש בפועל בדוגמאות. אין אף כרטיס במצב clinician_discussion_only או general_education.' : 'Eight allowed states are defined; only six are actually used in the examples. No card is in clinician_discussion_only or general_education.'}
      </p>
      <div className="space-y-1.5 max-w-md mx-auto">
        {evidenceCardStates.map((s) => (
          <div key={s.key} className="flex items-center gap-2">
            <span className="text-[9px] font-mono w-40 flex-shrink-0 text-end">{s.labelEn}</span>
            <div className="flex-1 bg-codebg/40 h-4 relative">
              <div className="bg-accent h-4" style={{ width: `${(s.n / max) * 100}%` }} />
            </div>
            <span className="text-[9px] font-mono w-4">{s.n}</span>
          </div>
        ))}
      </div>
      <p className="text-[10px] italic text-muted text-center mt-4 max-w-lg mx-auto">
        {locale === 'he'
          ? 'שני הכרטיסים במצב "avoid" הם מקרים תיעודיים (החלפת טיפול גרורתי, סדרת מקרים ב-Psorinum) — לא טענות תועלת. אין אף כרטיס "מומלץ" — המצב הזה לא קיים ברשימת המצבים המותרים כלל.'
          : 'The two "avoid" cards are documented instances (a metastatic treatment substitution, a Psorinum case series) — not benefit claims. There is no "recommended" state at all — it doesn\'t exist in the allowed-states list.'}
      </p>
    </div>
  );
}

const sourceEligibility = [
  { key: 'eligible', labelEn: 'eligible', n: 10 },
  { key: 'context_only', labelEn: 'context_only', n: 5 },
  { key: 'safety_signal_only', labelEn: 'safety_signal_only', n: 2 },
  { key: 'ineligible_retracted', labelEn: 'ineligible_retracted', n: 1 },
  { key: 'ineligible_withdrawn_no_results', labelEn: 'ineligible_withdrawn_no_results', n: 1 },
  { key: 'ineligible_pending_verification', labelEn: 'ineligible_pending_verification', n: 1 },
  { key: 'out_of_scope', labelEn: 'out_of_scope', n: 1 },
];

export function PrSourceRegistryDiagram({ locale }: { locale: Locale }) {
  const max = 10;
  return (
    <div className="mt-4 pt-4 border-t border-dashed border-rule">
      <p className="text-[9px] tracking-brand uppercase text-muted font-sans mb-1 text-center">
        {locale === 'he' ? '21 מקורות, לפי כשירות ראייתית — knowledge/homeopathy-oncology/source_registry.json' : '21 sources, by evidence eligibility — knowledge/homeopathy-oncology/source_registry.json'}
      </p>
      <div className="space-y-1.5 max-w-md mx-auto">
        {sourceEligibility.map((s) => (
          <div key={s.key} className="flex items-center gap-2">
            <span className="text-[9px] font-mono w-52 flex-shrink-0 text-end">{s.labelEn}</span>
            <div className="flex-1 bg-codebg/40 h-4 relative">
              <div className={`h-4 ${s.key === 'eligible' ? 'bg-accent' : 'bg-muted'}`} style={{ width: `${(s.n / max) * 100}%` }} />
            </div>
            <span className="text-[9px] font-mono w-4">{s.n}</span>
          </div>
        ))}
      </div>
      <p className="text-[10px] italic text-muted text-center mt-4 max-w-lg mx-auto">
        {locale === 'he'
          ? 'מקור החומרה הכפולה (Milazzo, Russell & Ernst 2006), שסופק דרך שני URL-ים שונים של מו״לים, נפתר לרשומה קנונית אחת עם שתי המופעים נשמרים בשובל הביקורת.'
          : 'The duplicate-publication source (Milazzo, Russell & Ernst 2006), supplied via two different publisher URLs, is resolved to one canonical record with both occurrences preserved in the audit trail.'}
      </p>
    </div>
  );
}

const prPhases = [
  { n: 1, titleEn: 'Repository reconciliation & source-integrity audit', titleHe: 'התאמת המאגר וביקורת שלמות מקורות', reviewEn: 'Jonathan Zouari product/merge confirmation', reviewHe: 'אישור מוצר/מיזוג של Jonathan Zouari', built: true },
  { n: 2, titleEn: 'Durable machine-readable contracts (DB foundation)', titleHe: 'חוזים קריאים-למכונה עמידים (יסוד DB)', reviewEn: 'Engineering review of schema/migration safety', reviewHe: 'סקירת הנדסה לבטיחות schema/migration', built: false },
  { n: 3, titleEn: 'Source intake, AI-assisted extraction to draft rows only', titleHe: 'קליטת מקורות, חילוץ בסיוע AI לשורות טיוטה בלבד', reviewEn: 'Confirm AI drafts cannot reach published without human action', reviewHe: 'אישור שטיוטות AI לא יכולות להגיע לפרסום ללא פעולה אנושית', built: false },
  { n: 4, titleEn: 'Evidence & safety review, dual-approval gate', titleHe: 'סקירת ראיות ובטיחות, שער אישור כפול', reviewEn: 'Confirm the dual-approval gate cannot be bypassed', reviewHe: 'אישור שלא ניתן לעקוף את שער האישור הכפול', built: false },
  { n: 5, titleEn: 'Staff review experience', titleHe: 'חוויית סקירת צוות', reviewEn: 'Confirm staff cannot mistake a domain review for approval', reviewHe: 'אישור שהצוות לא יכול לטעות בסקירת תחום כאישור', built: false },
  { n: 6, titleEn: 'Restricted patient education', titleHe: 'חינוך מטופלים מוגבל', reviewEn: 'Clinical + product review of actual rendered patient copy', reviewHe: 'סקירה קלינית ומוצרית של התוכן המוצג בפועל', built: false },
  { n: 7, titleEn: 'Surveillance & release validation', titleHe: 'מעקב ואימות שחרור', reviewEn: 'Final go/no-go before the feature flag is ever turned on', reviewHe: 'החלטת go/no-go סופית לפני הפעלת דגל התכונה', built: false },
];

export function PrPhasesDiagram({ locale }: { locale: Locale }) {
  return (
    <div className="mt-4 pt-4 border-t border-dashed border-rule">
      <p className="text-[9px] tracking-brand uppercase text-muted font-sans mb-1 text-center">
        {locale === 'he' ? 'שבעה שלבי הטמעה — docs/proposals/homeopathy-oncology-evidence/implementation-phases.md' : 'Seven implementation phases — docs/proposals/homeopathy-oncology-evidence/implementation-phases.md'}
      </p>
      <p className="text-[10px] italic text-muted text-center mb-4">
        {locale === 'he' ? 'שלב 1 הוא היחיד שממומש ב-PR הזה. שלבים 2–7 מתוארים אך לא נבנו — שום תכונת פרודקשן לא ממומשת בענף הזה.' : 'Phase 1 is the only phase this branch implements. Phases 2–7 are described but not built — no production feature is implemented on this branch.'}
      </p>
      <div className="border border-rule max-w-2xl mx-auto divide-y divide-rule">
        {prPhases.map((p) => (
          <div key={p.n} className={`flex items-start gap-3 px-4 py-2 ${p.built ? 'bg-accent/10' : ''}`}>
            <span className={`text-[10px] font-mono font-bold flex-shrink-0 w-5 ${p.built ? 'text-accent' : 'text-muted'}`}>{p.n}</span>
            <div className="flex-1">
              <div className={`text-[10px] font-sans ${p.built ? 'font-semibold text-accent' : ''}`}>{locale === 'he' ? p.titleHe : p.titleEn}</div>
              <div className="text-[9px] italic text-muted mt-0.5">{locale === 'he' ? p.reviewHe : p.reviewEn}</div>
            </div>
            {p.built && (
              <span className="text-[8px] tracking-brand uppercase text-accent font-sans font-semibold flex-shrink-0">
                {locale === 'he' ? 'בנוי' : 'built'}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export function PrIntegrityDiagram({ locale }: { locale: Locale }) {
  const cases = [
    {
      key: 'frass',
      titleEn: 'Frass et al. 2020 — NSCLC / add-on homeopathy survival',
      titleHe: 'Frass ואחרים 2020 — הישרדות NSCLC / הומאופתיה תוספת',
      stateEn: 'blocked_integrity',
      detailEn: 'Retracted 2025-11-24 — data falsification finding by the Austrian Agency for Research Integrity.',
      detailHe: 'נמשך ב-2025-11-24 — ממצא זיוף נתונים מטעם הסוכנות האוסטרית לשלמות מחקר.',
    },
    {
      key: 'banerji',
      titleEn: 'NCT02190539 — Banerji-protocol advanced-breast-cancer trial',
      titleHe: 'NCT02190539 — ניסוי פרוטוקול Banerji לסרטן שד מתקדם',
      stateEn: 'blocked_no_results',
      detailEn: 'Withdrawn with zero enrollment and no results.',
      detailHe: 'נסוג עם אפס גיוס ואפס תוצאות.',
    },
  ];
  return (
    <div className="mt-4 pt-4 border-t border-dashed border-rule">
      <p className="text-[9px] tracking-brand uppercase text-muted font-sans mb-1 text-center">
        {locale === 'he' ? 'נמשך ונסוג — מאומת חי, לא לפי אמונה' : 'Retracted and withdrawn — verified live, not taken on faith'}
      </p>
      <div className="grid sm:grid-cols-2 gap-3 max-w-2xl mx-auto">
        {cases.map((c) => (
          <div key={c.key} className="border-2 border-accent p-3">
            <div className="text-[10px] font-sans font-semibold">{locale === 'he' ? c.titleHe : c.titleEn}</div>
            <div className="text-[9px] font-mono text-accent mt-1">{c.stateEn}</div>
            <p className="text-[9px] text-muted mt-1.5 leading-relaxed">{locale === 'he' ? c.detailHe : c.detailEn}</p>
          </div>
        ))}
      </div>
      <p className="text-[10px] italic text-muted text-center mt-4 max-w-lg mx-auto">
        {locale === 'he'
          ? 'Frass ו-Frenkel כל אחד מופיע גם כמקור "חיובי" מצוטט וגם כנושא ממצא שלמות/נסיגה שאומת באופן עצמאי במקום אחר בספרות — ריכוז חוקר שנרשם במפורש.'
          : 'Frass and Frenkel each appear as both a cited "positive" source and the subject of an independently verified integrity/withdrawal finding elsewhere in the literature — an investigator-concentration finding, explicitly logged.'}
      </p>
    </div>
  );
}

const prOpenItems = [
  { id: 'H-001', en: 'Staff-only vs. patient-education launch scope not yet decided.', he: 'היקף השקה staff-only מול חינוך מטופלים עדיין לא הוחלט.' },
  { id: 'H-002', en: 'Launch jurisdiction(s) not yet decided.', he: 'שיפוט(י) השקה עדיין לא הוחלטו.' },
  { id: 'H-004', en: 'Reviewer identities for the two required approval roles undefined.', he: 'זהויות הסוקרים עבור שני תפקידי האישור הנדרשים לא מוגדרות.' },
  { id: 'H-007', en: 'Six-plus literature items remain pending_manual_verification, cited for no claim.', he: 'שישה+ פריטי ספרות נותרים pending_manual_verification, לא מצוטטים לאף טענה.' },
  { id: 'H-009', en: 'No jurisdiction/regulatory-claims framework chosen.', he: 'לא נבחר מסגרת שיפוט/טענות רגולטוריות.' },
  { id: 'H-010', en: 'Credentialing process for the two review roles undefined.', he: 'תהליך ההסמכה עבור שני תפקידי הסקירה לא מוגדר.' },
];

export function PrOpenItemsDiagram({ locale }: { locale: Locale }) {
  return (
    <div className="mt-4 pt-4 border-t border-dashed border-rule">
      <p className="text-[9px] tracking-brand uppercase text-muted font-sans mb-1 text-center">
        {locale === 'he' ? 'פריטים פתוחים — docs/proposals/homeopathy-oncology-evidence/interview-decisions.md' : 'Open items — docs/proposals/homeopathy-oncology-evidence/interview-decisions.md'}
      </p>
      <p className="text-[10px] italic text-muted text-center mb-4">
        {locale === 'he' ? 'אף אחד מהם לא חוסם את השלמת שלב 1 — נרשמו לתשומת לב ד״ר זוארי ולסוקרים עתידיים.' : "None of these block Phase 1 completion — recorded for Dr. Zuari's and future reviewers' attention."}
      </p>
      <div className="border border-rule max-w-lg mx-auto divide-y divide-rule">
        {prOpenItems.map((item) => (
          <div key={item.id} className="flex items-start gap-3 px-4 py-2">
            <span className="text-[9px] font-mono text-accent flex-shrink-0 w-12">{item.id}</span>
            <span className="text-[10px] leading-relaxed">{locale === 'he' ? item.he : item.en}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
