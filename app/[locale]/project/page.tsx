import Link from 'next/link';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Locale } from '@/i18n';

export default async function ProjectDirectoryPage({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  setRequestLocale(locale);
  const nav = await getTranslations('nav');

  const parts = [
    {
      href: `/${locale}/project/intro`,
      index: '0',
      title: { en: 'Herbal Project Demo', he: 'הדגמת פרויקט הצמחים' },
      note: {
        en: 'Card 02, sourced from Session 01: The German Tank Problem — What Five Numbers Can Honestly Tell You.',
        he: 'כרטיס 02, נלקח ממפגש 01: בעיית הטנק הגרמני — מה חמישה מספרים באמת יכולים לגלות.',
      },
    },
    {
      href: `/${locale}/project/session-22`,
      index: '1',
      title: { en: "In Dr. Zuari's Own Words — Live Prompt From Session 22", he: 'בקולו של ד״ר זוארי — פרומפט חי ממפגש 22' },
      note: {
        en: 'The real characterization chat, its full verbatim script, the reconstructed development prompt, and the questioning that produced it.',
        he: 'שיחת האפיון האמיתית, התסריט המלא שלה, פרומפט הפיתוח המשוחזר, והשאלות שהובילו אליה.',
      },
    },
    {
      href: `/${locale}/project/git-upload`,
      index: '2',
      title: { en: 'Uploading to Git', he: 'העלאה ל-Git' },
      note: {
        en: 'Isolating work on a branch before merging, then Session 22\'s own live walkthrough of actually submitting the project — staging vs. production, and the push → merge flow.',
        he: 'בידוד עבודה בענף לפני מיזוג, ואז ההליכה החיה של מפגש 22 בהגשת הפרויקט בפועל — staging מול production, וזרימת ה-push ← merge.',
      },
    },
    {
      href: `/${locale}/project/roadmap`,
      index: '3',
      title: { en: "Dr. Zuari's Instructions for Building The Herbal Project Plan", he: 'הוראות ד״ר זוארי לבניית תוכנית פרויקט הצמחים' },
      note: {
        en: 'An 18-step roadmap — idea to production — from the instructor\'s own "Building a Project from Scratch" deck.',
        he: 'מפת דרכים בת 18 שלבים — מרעיון ועד פרודקשן — ממדריך "בניית פרויקט מאפס" של המרצה עצמו.',
      },
    },
    {
      href: `/${locale}/project/pr-homeopathy-proposal`,
      index: '4',
      title: { en: 'PR #1 — Homeopathy Oncology Evidence Proposal', he: 'PR #1 — פרופוזל ראיות הומאופתיה באונקולוגיה' },
      note: {
        en: 'A real, open, unmerged pull request on herbal-evidence — 14 files, 13 evidence cards, 21 classified sources, and a dual-approval gate.',
        he: 'pull request אמיתי, פתוח ולא ממוזג ב-herbal-evidence — 14 קבצים, 13 כרטיסי ראיות, 21 מקורות מסווגים, ושער אישור כפול.',
      },
    },
    {
      href: `/${locale}/project/phases`,
      index: '5',
      title: { en: "Phases — The Real Build Log", he: 'שלבים — יומן הבנייה האמיתי' },
      note: {
        en: "Six real Phase files from Dr. Zuari's own log — database, backend, research worker, frontend, and a real dev → main merge to Railway.",
        he: 'שישה קובצי Phase אמיתיים מהיומן של ד״ר זוארי עצמו — בסיס נתונים, backend, worker מחקר, frontend, ומיזוג dev → main אמיתי ל-Railway.',
      },
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl small-caps tracking-wide mb-2 text-center">
        {nav('project')}
      </h1>
      <div className="ornament text-xl text-accent text-center mb-8"></div>

      <p className="text-center italic text-muted max-w-2xl mx-auto mb-16">
        {locale === 'he'
          ? 'שישה חלקים, כל אחד עומד בפני עצמו — מהיכן הקשת מתחילה, ועד להוראות המלאות לבניית פרויקט מאפס, ועד ל-pull request אמיתי ופתוח ויומן הבנייה בפועל.'
          : 'Six parts, each significant on its own — from where the arc begins, through the full instructions for building a project from scratch, to a real, open pull request and the actual build log.'}
      </p>

      <div className="grid gap-4">
        {parts.map((part) => (
          <Link
            key={part.href}
            href={part.href}
            className="border border-rule p-6 hover:border-ink hover:bg-codebg/40 transition block"
          >
            <div className="flex items-baseline gap-3 mb-2">
              <span className="text-[10px] tracking-brand uppercase text-accent font-sans font-semibold">
                {part.index}
              </span>
              <h2 className="small-caps tracking-wide text-xl flex-1">{part.title[locale]}</h2>
            </div>
            <p className="text-xs italic text-muted leading-relaxed">
              {part.note[locale]}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
