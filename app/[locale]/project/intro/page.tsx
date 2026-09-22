import Link from 'next/link';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { cardDecks } from '@/content/cards';
import { getSession } from '@/lib/registry';
import Card from '@/components/Card';
import type { Locale } from '@/i18n';

const introSlug = 'session-01-intro';
const introCardNumber = '02';

export default async function ProjectIntroPage({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  setRequestLocale(locale);
  const nav = await getTranslations('nav');
  const deck = cardDecks[introSlug];
  const introCard = deck?.find((c) => c.number === introCardNumber);
  const introSession = getSession(introSlug);

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

      <h1 className="text-4xl small-caps tracking-wide mb-2 text-center">
        {locale === 'he' ? 'פרויקט' : 'Project'}
      </h1>
      <div className="ornament text-xl text-accent text-center mb-8"></div>

      <p className="text-center italic text-muted max-w-2xl mx-auto mb-12">
        {locale === 'he'
          ? 'הקורס נע לאורך קשת אחת רציפה, שכל מודול מוסיף שכבה עליה, ומגיעה לשיאה בפרויקט. הכרטיס למטה — מפגש 1 — הוא המקום שבו הקשת הזו הוצגה לראשונה.'
          : "The course moves along a single continuous arc, each module a layer added on top of the last, culminating in a project. The card below — from Session 1 — is where that arc was first laid out."}
      </p>

      {introCard && (
        <div className="mb-8 max-w-3xl mx-auto">
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

      <div className="text-center mt-12">
        <Link
          href={`/${locale}/project/session-22`}
          className="text-[9px] tracking-brand uppercase text-ink border border-ink px-4 py-2 hover:bg-ink hover:text-paper transition font-sans"
        >
          {locale === 'he' ? 'הבא — בקולו של ד״ר זוארי, מפגש 22 →' : "Next — In Dr. Zuari's Own Words, Session 22 →"}
        </Link>
      </div>
    </div>
  );
}
