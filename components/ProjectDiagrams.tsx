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
