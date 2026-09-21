import Link from 'next/link';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { cardDecks } from '@/content/cards';
import Card from '@/components/Card';
import type { Locale } from '@/i18n';

const introSlug = 'session-01-intro';
const introCardNumber = '02';

export default async function ProjectPage({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  setRequestLocale(locale);
  const nav = await getTranslations('nav');
  const deck = cardDecks[introSlug];
  const introCard = deck?.find((c) => c.number === introCardNumber);

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
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
        <div className="mb-12">
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
