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
      title: { en: 'Where the Course Arc Begins', he: 'איפה קשת הקורס מתחילה' },
      note: {
        en: 'Card 02, sourced from Session 01: The German Tank Problem — What Five Numbers Can Honestly Tell You.',
        he: 'כרטיס 02, נלקח ממפגש 01: בעיית הטנק הגרמני — מה חמישה מספרים באמת יכולים לגלות.',
      },
    },
    {
      href: `/${locale}/project/session-22`,
      index: '1',
      title: { en: "In Dr. Zuari's Own Words — Live From Session 22", he: 'בקולו של ד״ר זוארי — הליכה חיה במפגש 22' },
      note: {
        en: 'The real characterization chat, its full verbatim script, the questioning that produced it, and the git submission walkthrough.',
        he: 'שיחת האפיון האמיתית, התסריט המלא שלה, השאלות שהובילו אליה, וההליכה בהגשת הפרויקט ל-Git.',
      },
    },
    {
      href: `/${locale}/project/roadmap`,
      index: '2',
      title: { en: "Dr. Zuari's Instructions for Building a Project Plan", he: 'הוראות ד״ר זוארי ליצירת תוכנית פרויקט' },
      note: {
        en: 'An 18-step roadmap — idea to production — from the instructor\'s own "Building a Project from Scratch" deck.',
        he: 'מפת דרכים בת 18 שלבים — מרעיון ועד פרודקשן — ממדריך "בניית פרויקט מאפס" של המרצה עצמו.',
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
          ? 'שלושה חלקים, כל אחד עומד בפני עצמו — מהיכן הקשת מתחילה, ועד להוראות המלאות לבניית פרויקט מאפס.'
          : 'Three parts, each significant on its own — from where the arc begins to the full instructions for building a project from scratch.'}
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
