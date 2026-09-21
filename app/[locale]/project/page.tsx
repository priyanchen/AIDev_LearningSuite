import Link from 'next/link';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { cardDecks } from '@/content/cards';
import {
  projectPhases,
  projectSpokenExcerpts,
  projectPromptPath,
  characterizationReconstruction,
  gitSubmissionStages,
} from '@/content/project-guide';
import { getSession } from '@/lib/registry';
import Card from '@/components/Card';
import type { Locale } from '@/i18n';

const introSlug = 'session-01-intro';
const introCardNumber = '02';
const branchSlug = 'session-08-python-5';
const branchCardNumber = '01';

function DiagramBox({ label }: { label: string }) {
  return (
    <span className="inline-block border border-ink px-3 py-2 text-xs text-center bg-paper">
      {label}
    </span>
  );
}

function DiagramArrow({ label }: { label: string }) {
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
function GitDiagrams({ locale }: { locale: Locale }) {
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

function TreeLine({ label, note, depth = 0 }: { label: string; note?: string; depth?: number }) {
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
function HerbalSetupDiagram({ locale }: { locale: Locale }) {
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
function HerbalArchitectureDiagram({ locale }: { locale: Locale }) {
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

// The actual user journey he generated live in Session 22, walking through it screen-by-screen —
// not a hypothetical UX flow. Source: the session's own caption transcript.
function HerbalUXFlowDiagram({ locale }: { locale: Locale }) {
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
function HerbalUIDesignSystem({ locale }: { locale: Locale }) {
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

export default async function ProjectPage({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  setRequestLocale(locale);
  const nav = await getTranslations('nav');
  const deck = cardDecks[introSlug];
  const introCard = deck?.find((c) => c.number === introCardNumber);
  const introSession = getSession(introSlug);
  const branchDeck = cardDecks[branchSlug];
  const branchCard = branchDeck?.find((c) => c.number === branchCardNumber);
  const branchSession = getSession(branchSlug);

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl small-caps tracking-wide mb-2 text-center">
        {nav('project')}
      </h1>
      <div className="ornament text-xl text-accent text-center mb-8"></div>

      <p className="text-center italic text-muted max-w-2xl mx-auto mb-12">
        {locale === 'he'
          ? 'הקורס נע לאורך קשת אחת רציפה, שכל מודול מוסיף שכבה עליה, ומגיעה לשיאה בפרויקט. הכרטיס למטה — מפגש 1 — הוא המקום שבו הקשת הזו הוצגה לראשונה.'
          : "The course moves along a single continuous arc, each module a layer added on top of the last, culminating in a project. The card below — from Session 1 — is where that arc was first laid out."}
      </p>

      {introCard && (
        <div className="mb-16 max-w-3xl mx-auto">
          {introSession && (
            <p className="text-center text-[10px] tracking-brand uppercase text-muted font-sans mb-3">
              {locale === 'he' ? 'כרטיס 02 — נלקח ממפגש' : 'Card 02 — sourced from Session'}{' '}
              {String(introSession.number).padStart(2, '0')}: {introSession.title[locale]}
            </p>
          )}
          <Card card={introCard} locale={locale} total={deck!.length} />
          <div className="text-center mt-3">
            <Link
              href={`/${locale}/lessons/${introSlug}#card-${introCardNumber}`}
              className="text-[9px] tracking-brand uppercase text-muted hover:text-accent font-sans"
            >
              {locale === 'he' ? 'צפייה במפגש המקורי →' : 'View in its original session →'}
            </Link>
          </div>
        </div>
      )}

      <section className="mb-16 max-w-3xl mx-auto border-t border-rule pt-12">
        <h2 className="text-2xl small-caps tracking-wide text-center mb-2">
          {locale === 'he' ? 'בקולו של ד״ר זוארי — הליכה חיה במפגש 22' : "In Dr. Zuari's Own Words — Live From Session 22"}
        </h2>
        <p className="text-center italic text-muted text-sm mb-2">
          {locale === 'he'
            ? 'לא שקפים — המילים שנאמרו בפועל, בזמן שד״ר זוארי הדגים "פרויקט לדוגמה" חי (אפליקציית זיהוי תרופות צמחיות) יחד עם הכיתה — אותה נקודת-ביקורת מעשית שמוזכרת בקשת הקורס של מפגש 1 למעלה, מול אותם שלבים שלמטה.'
            : 'Not slides — the words he actually said, live-demonstrating a "Sample Project" (a herbal-remedy identification app) with the class — the same practical checkpoint named in Session 1\'s course arc above, against the same steps documented below.'}
        </p>
        <p className="text-center text-[10px] text-muted max-w-2xl mx-auto mb-8">
          {locale === 'he'
            ? 'תיקון רמה: נכון לעכשיו זהו המפגש האחרון הזמין באתר (מודול 5, ראייה ממוחשבת) — לפי קשת הקורס של מפגש 1, "פרויקט לדוגמה" מגיע רק אחרי ראייה ממוחשבת, ולפני LLM/RAG וסוכני AI. ההדגמה החיה הזו כבר כוללת אימות ראיות מבוסס-סוכן ותפקיד "חוקר" AI — מושגים ממודולים מאוחרים יותר שטרם נלמדו רשמית. זו לא הייתה תרגיל "רק ממה שלמדנו עד עכשיו" — זו הצצה מכוונת קדימה.'
            : "Level correction: as of now, this is the last available session on the site (Module 5, Computer Vision) — per Session 1's own course arc, the \"Sample Project\" checkpoint comes only after Computer Vision, before the LLM/RAG and AI Agents modules. This live demo already involves agent-based evidence validation and an AI \"researcher\" role — concepts from later modules not yet formally taught. This wasn't a \"only what we've covered so far\" exercise — it was a deliberate look ahead."}
        </p>
        <p className="text-center text-[10px] text-muted mb-8">
          {locale === 'he'
            ? 'מקור: תמליל כתוביות אוטומטי של הקלטת מפגש 22 — נוקה קלות מרעש זיהוי, לא נוסח מחדש.'
            : "Source: Session 22's auto-generated caption transcript — lightly cleaned of recognition noise, not rewritten."}
        </p>
        <div className="grid gap-4 mb-8">
          {projectSpokenExcerpts.map((ex, i) => (
            <blockquote key={i} className="border-s-2 border-accent ps-4">
              <p dir="rtl" className="text-sm leading-relaxed mb-1">{ex.he}</p>
              <p dir="ltr" className="text-sm italic text-muted leading-relaxed">{ex.en}</p>
            </blockquote>
          ))}
        </div>

        {/* Card 1 — the end prompt, reconstructed (not verbatim; source blocked, see disclaimer) */}
        <div className="mb-10 border border-rule p-6 bg-codebg/30">
          <header className="flex items-baseline justify-between border-b border-ink pb-3 mb-4">
            <span className="text-[9px] tracking-brand uppercase text-accent font-sans font-semibold">
              {locale === 'he' ? 'כרטיס 1 — האפיון הסופי' : 'Card 1 — The End Characterization'}
            </span>
          </header>
          <p className="text-xs italic text-muted mb-4 leading-relaxed">
            {locale === 'he'
              ? 'לא ציטוט מילולי — הפרומפט האמיתי חי בקישור ה-ChatGPT למטה, ולא ניתן היה לשלוף אותו בכלים אוטומטיים ב-session הזה (הדף נטען בצד-לקוח מאחורי הגנת Cloudflare). מה שלמטה משוחזר משני מקורות עצמאיים: יומן הצ׳אט החי ותמליל הכתוביות האוטומטי — מדויק להחלטות בפועל, גם אם הוא לא ציטוט ישיר.'
              : "Not a verbatim quote — the real prompt lives at the ChatGPT link below, and couldn't be pulled through any automated tool this session (the page loads client-side behind Cloudflare). What follows is reconstructed from two independent sources instead: the live chat log and the auto-caption transcript — accurate to the actual decisions, even if not a direct quote."}
          </p>
          <ul className="grid gap-2">
            {characterizationReconstruction.map((point, i) => (
              <li key={i} className="text-sm leading-relaxed flex gap-2">
                <span className="text-accent flex-shrink-0">·</span>
                <span>{point[locale]}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Card 2 — the questioning & decision process that produced Card 1 above */}
        <div className="mb-10 border border-rule p-6 bg-codebg/30">
          <header className="flex items-baseline justify-between border-b border-ink pb-3 mb-4">
            <span className="text-[9px] tracking-brand uppercase text-accent font-sans font-semibold">
              {locale === 'he' ? 'כרטיס 2 — השאלות וההחלטות' : 'Card 2 — The Questioning & Decisions'}
            </span>
          </header>
          <p className="text-xs italic text-muted mb-4 leading-relaxed">
            {locale === 'he'
              ? 'משוחזר מיומן הצ׳אט החי של מפגש 22 עצמו (לא התמליל) — הרצף בפועל שהכיתה עברה כדי להגיע לכרטיס 1. שמות סטודנטים הושמטו לפרטיות; PriYa N. Chen, מחברת האתר, מוזכרת במקומות שבהם ההודעות האמיתיות שלה בצ׳אט עיצבו החלטה.'
              : "Reconstructed from Session 22's own live chat log (not the transcript) — the actual sequence the class worked through to arrive at Card 1. Student names omitted for privacy; PriYa N. Chen, this site's own author, is named where her real chat messages shaped a decision."}
          </p>
          <div className="grid gap-4">
            {projectPromptPath.map((step, i) => (
              <div key={i} className="flex gap-4">
                <span className="text-[10px] tracking-brand uppercase text-accent font-sans font-semibold flex-shrink-0 w-6 pt-0.5">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h4 className="small-caps tracking-wide text-sm mb-1">{step.title[locale]}</h4>
                  <p className="text-xs leading-relaxed text-muted">{step.body[locale]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {branchCard && (
          <div className="mb-10">
            {branchSession && (
              <p className="text-center text-[10px] tracking-brand uppercase text-muted font-sans mb-3">
                {locale === 'he' ? 'כרטיס 01 — נלקח ממפגש' : 'Card 01 — sourced from Session'}{' '}
                {String(branchSession.number).padStart(2, '0')}: {branchSession.title[locale]}
              </p>
            )}
            <Card card={branchCard} locale={locale} total={branchDeck!.length} />
            <div className="text-center mt-3">
              <Link
                href={`/${locale}/lessons/${branchSlug}#card-${branchCardNumber}`}
                className="text-[9px] tracking-brand uppercase text-muted hover:text-accent font-sans"
              >
                {locale === 'he' ? 'צפייה במפגש המקורי →' : 'View in its original session →'}
              </Link>
            </div>
          </div>
        )}

        {/* Card 3 — his own live walkthrough of actually submitting/deploying the Herbal project */}
        <div className="mb-10 border border-rule p-6 bg-codebg/30">
          <header className="flex items-baseline justify-between border-b border-ink pb-3 mb-4">
            <span className="text-[9px] tracking-brand uppercase text-accent font-sans font-semibold">
              {locale === 'he' ? 'כרטיס 3 — הגשת הפרויקט ל-Git, בשלבים' : 'Card 3 — Submitting the Project to Git, Staged'}
            </span>
          </header>
          <p className="text-xs italic text-muted mb-4 leading-relaxed">
            {locale === 'he'
              ? 'הליכה חיה נוספת מתמליל מפגש 22 (קטע מאוחר יותר מהציטוטים למעלה) — staging מול production, למה main זה הלקוח, זרימת ה-push ← merge בפועל, ולמה עבודה לוקאלית לא מבטיחה שזה יעבוד בענן.'
              : "Another live walkthrough from Session 22's transcript (a later segment than the excerpts above) — staging vs. production, why main is the client, the actual push → merge flow, and why local success doesn't guarantee cloud success."}
          </p>
          <div className="grid gap-4">
            {gitSubmissionStages.map((stage, i) => (
              <div key={i} className="flex gap-4">
                <span className="text-[10px] tracking-brand uppercase text-accent font-sans font-semibold flex-shrink-0 w-6 pt-0.5">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h4 className="small-caps tracking-wide text-sm mb-1">{stage.title[locale]}</h4>
                  <p className="text-xs leading-relaxed text-muted">{stage.body[locale]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          <a
            href="https://chatgpt.com/share/6aaa65d1-3fe8-83eb-95f0-28dd4a97f8f7"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[9px] tracking-brand uppercase text-ink border border-ink px-3 py-1.5 hover:bg-ink hover:text-paper transition font-sans"
          >
            {locale === 'he' ? 'שיחת האפיון המקורית (ChatGPT)' : 'The Original Characterization Chat (ChatGPT)'} ↗
          </a>
          <a
            href="https://github.com/JonathanZouari/herbal-evidence"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[9px] tracking-brand uppercase text-ink border border-ink px-3 py-1.5 hover:bg-ink hover:text-paper transition font-sans"
          >
            {locale === 'he' ? 'המאגר שיצא מזה (GitHub)' : 'The Resulting Repo (GitHub)'} ↗
          </a>
        </div>
      </section>

      <section className="mb-16 border-t border-rule pt-12">
        <h2 className="text-2xl small-caps tracking-wide text-center mb-2">
          {locale === 'he' ? "הוראות ד״ר זוארי ליצירת תוכנית פרויקט" : "Dr. Zuari's Instructions for Building a Project Plan"}
        </h2>
        <p className="text-center italic text-muted max-w-2xl mx-auto text-sm mb-12">
          {locale === 'he'
            ? 'מפת דרכים בת 18 שלבים — מרעיון ועד פרודקשן — ממדריך "בניית פרויקט מאפס" של המרצה עצמו.'
            : 'An 18-step roadmap — idea to production — from the instructor\'s own "Building a Project from Scratch" deck.'}
        </p>

        <div className="grid gap-12">
          {projectPhases.map((phase) => (
            <div key={phase.id}>
              <div className="text-center mb-6">
                <div className="text-[9px] tracking-brand uppercase text-accent font-sans font-semibold mb-1">
                  {phase.phaseLabel[locale]}
                </div>
                <h3 className="text-xl small-caps tracking-wide">{phase.title[locale]}</h3>
              </div>
              <div className="grid gap-6">
                {phase.steps.map((step) => (
                  <div key={step.number} className="border border-rule p-6 bg-codebg/30">
                    <div className="flex items-baseline gap-3 mb-4 pb-3 border-b border-rule">
                      <span className="text-[10px] tracking-brand uppercase text-accent font-sans font-semibold">
                        {String(step.number).padStart(2, '0')}
                      </span>
                      <h4 className="small-caps tracking-wide text-lg">{step.title[locale]}</h4>
                    </div>
                    <ul className="grid gap-2">
                      {step.points.map((point, i) => (
                        <li key={i} className="text-sm leading-relaxed flex gap-2">
                          <span className="text-accent flex-shrink-0">·</span>
                          <span>{point[locale]}</span>
                        </li>
                      ))}
                    </ul>
                    {step.number === 4 && <HerbalUXFlowDiagram locale={locale} />}
                    {step.number === 5 && <HerbalUIDesignSystem locale={locale} />}
                    {step.number === 6 && <HerbalArchitectureDiagram locale={locale} />}
                    {step.number === 8 && <HerbalSetupDiagram locale={locale} />}
                    {step.number === 9 && <GitDiagrams locale={locale} />}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="border border-rule p-6 bg-codebg/40 text-center">
        <h3 className="text-[10px] tracking-brand uppercase text-accent font-sans font-semibold mb-3">
          {locale === 'he' ? 'חומר הפרויקט' : 'Project Material'}
        </h3>
        <p className="text-xs italic text-muted mb-4">
          {locale === 'he'
            ? 'המדריך המלא של ד״ר זוארי לבניית פרויקט מאפס.'
            : "Dr. Zuari's own full guide to building a project from scratch."}
        </p>
        <a
          href="https://drive.google.com/file/d/1MQ_FWuhjk3RQzObVDHf47UOr3wiHFkLu/view"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-[10px] tracking-brand uppercase text-ink border border-ink px-4 py-2 hover:bg-ink hover:text-paper transition font-sans"
        >
          {locale === 'he' ? 'בניית פרויקט מאפס (PDF)' : 'Building a Project from Scratch (PDF)'} ↗
        </a>
      </div>
    </div>
  );
}
