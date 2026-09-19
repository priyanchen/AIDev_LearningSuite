import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import {
  sessions,
  getSession,
  getModule,
  getAdjacentSessions,
} from '@/lib/registry';
import { getDeck } from '@/content/cards';
import Card from '@/components/Card';
import type { Locale } from '@/i18n';

export function generateStaticParams() {
  return sessions.map((s) => ({ slug: s.slug }));
}

export default async function SessionPage({
  params: { locale, slug },
}: {
  params: { locale: Locale; slug: string };
}) {
  setRequestLocale(locale);
  const session = getSession(slug);
  if (!session) notFound();

  const module = getModule(session.moduleId);
  if (!module || module.visibility === 'hidden') notFound();

  const t = await getTranslations('session');
  const nav = await getTranslations('nav');
  const { previous, next } = getAdjacentSessions(slug);
  const cards = session.hasCardDeck ? getDeck(slug) : undefined;

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      {/* Breadcrumb */}
      <nav className="mb-8 text-[10px] tracking-brand uppercase text-muted font-sans">
        <Link href={`/${locale}`} className="hover:text-accent">
          {nav('home')}
        </Link>
        <span className="mx-2">·</span>
        <Link href={`/${locale}/modules/${module.id}`} className="hover:text-accent">
          {module.title[locale]}
        </Link>
        <span className="mx-2">·</span>
        <span>
          {t('session')} {String(session.number).padStart(2, '0')}
        </span>
      </nav>

      {/* Hero */}
      <section className="text-center mb-12 pb-12 border-b border-rule">
        <div className="text-[10px] tracking-brand uppercase text-accent font-sans mb-3">
          {t('session')} {String(session.number).padStart(2, '0')}
          {session.date && ` · ${session.date}`}
          {' · '}
          {session.format === 'zoom' ? t('zoom') : t('inPerson')}
        </div>
        <h1 className="text-3xl md:text-4xl small-caps tracking-wide mb-4">
          {session.title[locale]}
        </h1>
        <p className="text-base italic text-muted max-w-2xl mx-auto">
          {session.headline[locale]}
        </p>
        {session.concepts && session.concepts.length > 0 && (
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {session.concepts.map((c) => (
              <span
                key={c}
                className="text-[9px] tracking-brand uppercase text-muted font-sans border border-rule px-3 py-1"
              >
                {c}
              </span>
            ))}
          </div>
        )}
      </section>

      {session.status === 'planned' && (
        <section className="mb-12 border border-ink p-8 text-center">
          <p className="italic text-muted">{t('awaitingSource')}</p>
        </section>
      )}

      {session.status === 'deferred' && (
        <section className="mb-12 border border-accent p-8 text-center">
          <p className="italic text-accent">{session.headline[locale]}</p>
        </section>
      )}

      {/* Card Deck */}
      {cards && (
        <section className="mb-16">
          <h2 className="text-[10px] tracking-brand uppercase text-accent font-sans font-semibold border-b border-rule pb-2 mb-6">
            {t('cardDeck')}
          </h2>
          <div className="grid gap-6">
            {cards.map((card) => (
              <Card key={card.number} card={card} locale={locale} total={cards.length} />
            ))}
          </div>
        </section>
      )}

      {/* Downloads */}
      {session.hasProject && session.projectFile && (
        <section className="mb-12">
          <a
            href={`/downloads/${session.projectFile}`}
            className="block border border-ink p-6 hover:bg-ink hover:text-paper transition group"
          >
            <div className="text-[10px] tracking-brand uppercase text-accent group-hover:text-paper font-sans mb-2">
              {t('project')}
            </div>
            <div className="small-caps tracking-wide text-lg">
              {t('downloadProject')} →
            </div>
            <p className="text-xs mt-2 opacity-70">
              notebook · app.py · requirements.txt
            </p>
          </a>
        </section>
      )}

      {/* Source Materials */}
      {session.sourceLinks && (
        <section className="mb-12 border border-rule p-6 bg-codebg/40">
          <h3 className="text-[10px] tracking-brand uppercase text-accent font-sans font-semibold mb-3">
            {t('materials')}
          </h3>
          <p className="text-xs italic text-muted mb-4">{t('materialsNote')}</p>
          <div className="flex flex-wrap gap-3">
            {session.sourceLinks.recording && (
              <a
                href={session.sourceLinks.recording}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] tracking-brand uppercase text-ink border border-ink px-3 py-1.5 hover:bg-ink hover:text-paper transition font-sans"
              >
                {t('openRecording')} ↗
              </a>
            )}
            {session.sourceLinks.chat && (
              <a
                href={session.sourceLinks.chat}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] tracking-brand uppercase text-ink border border-ink px-3 py-1.5 hover:bg-ink hover:text-paper transition font-sans"
              >
                {t('openChat')} ↗
              </a>
            )}
            {session.sourceLinks.slides &&
              session.sourceLinks.slides.map((slideLink, i, slides) => (
                <a
                  key={i}
                  href={slideLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] tracking-brand uppercase text-ink border border-ink px-3 py-1.5 hover:bg-ink hover:text-paper transition font-sans"
                >
                  {t('openSlides')} {slides.length > 1 ? i + 1 : ''} ↗
                </a>
              ))}
          </div>
        </section>
      )}

      {/* Navigation */}
      <nav className="flex justify-between items-center pt-8 border-t border-rule">
        {previous ? (
          <Link
            href={`/${locale}/lessons/${previous.slug}`}
            className="text-[10px] tracking-brand uppercase text-ink hover:text-accent font-sans"
          >
            ← {nav('previousSession')} · {String(previous.number).padStart(2, '0')}
          </Link>
        ) : (
          <span />
        )}

        <Link
          href={`/${locale}/modules/${module.id}`}
          className="text-[10px] tracking-brand uppercase text-muted hover:text-accent font-sans"
        >
          {nav('backToModule')}
        </Link>

        {next ? (
          <Link
            href={`/${locale}/lessons/${next.slug}`}
            className="text-[10px] tracking-brand uppercase text-ink hover:text-accent font-sans"
          >
            {nav('nextSession')} · {String(next.number).padStart(2, '0')} →
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </div>
  );
}
