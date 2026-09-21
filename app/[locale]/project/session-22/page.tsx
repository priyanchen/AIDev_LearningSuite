import Link from 'next/link';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { cardDecks } from '@/content/cards';
import {
  projectSpokenExcerpts,
  projectPromptPath,
  characterizationReconstruction,
  gitSubmissionStages,
} from '@/content/project-guide';
import { chatGptScript, chatGptScriptNote } from '@/content/chatgpt-script';
import { getSession } from '@/lib/registry';
import Card from '@/components/Card';
import { WorktreeDiagram } from '@/components/ProjectDiagrams';
import type { Locale } from '@/i18n';

const branchSlug = 'session-08-python-5';
const branchCardNumber = '01';

export default async function ProjectSession22Page({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  setRequestLocale(locale);
  const nav = await getTranslations('nav');
  const branchDeck = cardDecks[branchSlug];
  const branchCard = branchDeck?.find((c) => c.number === branchCardNumber);
  const branchSession = getSession(branchSlug);

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <nav className="mb-8 text-[10px] tracking-brand uppercase text-muted font-sans">
        <Link href={`/${locale}`} className="hover:text-accent">
          {nav('home')}
        </Link>
        <span className="mx-2">·</span>
        <Link href={`/${locale}/project`} className="hover:text-accent">
          {nav('project')}
        </Link>
      </nav>

      <section className="max-w-3xl mx-auto">
        <h1 className="text-2xl small-caps tracking-wide text-center mb-2">
          {locale === 'he' ? 'בקולו של ד״ר זוארי — הליכה חיה במפגש 22' : "In Dr. Zuari's Own Words — Live From Session 22"}
        </h1>
        <p className="text-center italic text-muted text-sm mb-2">
          {locale === 'he'
            ? 'לא שקפים — המילים שנאמרו בפועל, בזמן שד״ר זוארי הדגים "פרויקט לדוגמה" חי (אפליקציית זיהוי תרופות צמחיות) יחד עם הכיתה — אותה נקודת-ביקורת מעשית שמוזכרת בקשת הקורס של מפגש 1, מול אותם שלבים במפת הדרכים.'
            : 'Not slides — the words he actually said, live-demonstrating a "Sample Project" (a herbal-remedy identification app) with the class — the same practical checkpoint named in Session 1\'s course arc, against the same steps documented in the roadmap.'}
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

        {/* Card 1 — the end prompt, reconstructed (short summary; verbatim is Card 2 below) */}
        <div className="mb-10 border border-rule p-6 bg-codebg/30">
          <header className="flex items-baseline justify-between border-b border-ink pb-3 mb-4">
            <span className="text-[9px] tracking-brand uppercase text-accent font-sans font-semibold">
              {locale === 'he' ? 'כרטיס 1 — האפיון הסופי' : 'Card 1 — The End Characterization'}
            </span>
          </header>
          <p className="text-xs italic text-muted mb-4 leading-relaxed">
            {locale === 'he'
              ? 'לא ציטוט מילולי — זהו סיכום קצר של המסקנות. הפרומפט המלא והמילולי נשלף בהצלחה בהמשך session זה וזמין להלן ב"כרטיס 2 — התסריט המלא," אחרי שניסיונות קודמים נחסמו על ידי Cloudflare.'
              : 'Not a verbatim quote — this is a short summary of the conclusions. The full, verbatim prompt was successfully retrieved later in this same session and is available below in "Card 2 — The Full Script," after earlier attempts were Cloudflare-blocked.'}
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

        {/* Card 2 — the full, verbatim ChatGPT conversation, retrieved live from the share link */}
        <div className="mb-10 border border-rule p-6 bg-codebg/30">
          <header className="flex items-baseline justify-between border-b border-ink pb-3 mb-4">
            <span className="text-[9px] tracking-brand uppercase text-accent font-sans font-semibold">
              {locale === 'he' ? 'כרטיס 2 — התסריט המלא של ChatGPT' : 'Card 2 — The Full ChatGPT Script'}
            </span>
          </header>
          <p className="text-xs italic text-muted mb-4 leading-relaxed">
            {locale === 'he'
              ? 'לא שחזור — השיחה המלאה, מילה במילה, נשלפה חי מהקישור ל-ChatGPT למטה. עברית היא המקור המקורי; אנגלית היא תרגום.'
              : "Not a reconstruction — the full conversation, word for word, retrieved live from the ChatGPT link below. Hebrew is the original; English is a translation."}
            {' '}{chatGptScriptNote[locale]}
          </p>
          <div className="max-h-[32rem] overflow-y-auto border border-rule p-4 bg-paper grid gap-4">
            {chatGptScript.map((turn, i) => (
              <div
                key={i}
                className={`border-s-2 ps-3 ${turn.role === 'user' ? 'border-accent' : turn.role === 'tool' ? 'border-rule' : 'border-ink'}`}
              >
                <span className="text-[8px] tracking-brand uppercase text-muted font-sans">
                  {turn.role === 'user'
                    ? (locale === 'he' ? 'משתמש' : 'User')
                    : turn.role === 'tool'
                      ? (locale === 'he' ? 'כלי' : 'Tool')
                      : 'ChatGPT'}
                </span>
                <p dir="rtl" className="text-xs leading-relaxed whitespace-pre-wrap mt-1 mb-1">{turn.he}</p>
                <p dir="ltr" className="text-xs italic text-muted leading-relaxed whitespace-pre-wrap">{turn.en}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Card 3 — the questioning & decision process that produced Card 1 above */}
        <div className="mb-10 border border-rule p-6 bg-codebg/30">
          <header className="flex items-baseline justify-between border-b border-ink pb-3 mb-4">
            <span className="text-[9px] tracking-brand uppercase text-accent font-sans font-semibold">
              {locale === 'he' ? 'כרטיס 3 — השאלות וההחלטות' : 'Card 3 — The Questioning & Decisions'}
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

        {/* Card 4 — his own live walkthrough of actually submitting/deploying the Herbal project */}
        <div className="mb-10 border border-rule p-6 bg-codebg/30">
          <header className="flex items-baseline justify-between border-b border-ink pb-3 mb-4">
            <span className="text-[9px] tracking-brand uppercase text-accent font-sans font-semibold">
              {locale === 'he' ? 'כרטיס 4 — הגשת הפרויקט ל-Git, בשלבים' : 'Card 4 — Submitting the Project to Git, Staged'}
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
                <div className="flex-1">
                  <h4 className="small-caps tracking-wide text-sm mb-1">{stage.title[locale]}</h4>
                  <p className="text-xs leading-relaxed text-muted">{stage.body[locale]}</p>
                  {i === 7 && <WorktreeDiagram locale={locale} />}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
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

        <div className="flex justify-center gap-3">
          <Link
            href={`/${locale}/project/intro`}
            className="text-[9px] tracking-brand uppercase text-muted hover:text-accent font-sans"
          >
            {locale === 'he' ? '← הקודם' : '← Previous'}
          </Link>
          <Link
            href={`/${locale}/project/roadmap`}
            className="text-[9px] tracking-brand uppercase text-ink border border-ink px-4 py-2 hover:bg-ink hover:text-paper transition font-sans"
          >
            {locale === 'he' ? 'הבא — מפת הדרכים בת 18 השלבים →' : 'Next — The 18-Step Roadmap →'}
          </Link>
        </div>
      </section>
    </div>
  );
}
