import Link from 'next/link';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { sessions } from '@/lib/registry';
import { cardDecks } from '@/content/cards';
import type { Locale } from '@/i18n';

export default async function CardsLibraryPage({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  setRequestLocale(locale);
  const nav = await getTranslations('nav');
  const populatedSessions = sessions.filter((s) => s.hasCardDeck && cardDecks[s.slug]);

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-4xl small-caps tracking-wide mb-2 text-center">
        {nav('cards')}
      </h1>
      <div className="ornament text-xl text-accent text-center mb-12"></div>

      <p className="text-center italic text-muted max-w-2xl mx-auto mb-12">
        {locale === 'he'
          ? 'ספריית הכרטיסים המצטברת של הקורס. כל מפגש תורם חפיסה של עד אחד-עשר כרטיסים לגוף הידע הכולל.'
          : 'The cumulative card library. Each session contributes up to eleven cards to the collective body of knowledge.'}
      </p>

      {populatedSessions.map((session) => {
        const cards = cardDecks[session.slug];
        return (
          <section key={session.slug} className="mb-16">
            <div className="flex items-baseline justify-between mb-6 pb-3 border-b border-rule">
              <h2 className="small-caps tracking-wide text-xl">
                <span className="text-accent mr-3">
                  {String(session.number).padStart(2, '0')}
                </span>
                <Link
                  href={`/${locale}/lessons/${session.slug}`}
                  className="hover:text-accent transition"
                >
                  {session.title[locale]}
                </Link>
              </h2>
              <Link
                href={`/${locale}/lessons/${session.slug}`}
                className="text-[10px] tracking-brand uppercase text-muted hover:text-accent font-sans"
              >
                {locale === 'he' ? 'פתחי מפגש →' : 'Open session →'}
              </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              {cards.map((card) => (
                <Link
                  key={card.number}
                  href={`/${locale}/lessons/${session.slug}#card-${card.number}`}
                  className="border border-rule p-4 hover:border-ink hover:bg-codebg transition"
                >
                  <div className="text-[9px] tracking-brand uppercase text-accent font-sans mb-2 flex items-center gap-1.5">
                    <span aria-hidden="true" className="text-base leading-none not-italic normal-case">🕎</span>
                    {locale === 'he' ? `כרטיס ${card.number}` : `Card ${card.number}`}
                  </div>
                  <div className="small-caps tracking-wide font-bold text-sm mb-1">
                    {card.title[locale]}
                  </div>
                  <div className="text-xs italic text-muted line-clamp-2">
                    {card.subtitle[locale]}
                  </div>
                </Link>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
