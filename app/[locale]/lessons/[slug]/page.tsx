import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import {
  sessions,
  getSession,
  getModule,
  getAdjacentSessions,
  type Bilingual,
} from '@/lib/registry';
import { getDeck } from '@/content/cards';
import { externalResources } from '@/content/external-resources';
import { sessionPractice } from '@/content/session-practice';
import { sessionSlidesExtra } from '@/content/session-slides-extra';
import Card from '@/components/Card';
import ResourceTree from '@/components/ResourceTree';
import type { Locale } from '@/i18n';

export function generateStaticParams() {
  return sessions.map((s) => ({ slug: s.slug }));
}

// Concept tags that should link to a section of this site itself (e.g. the Installation Guide)
// rather than an external MIT/Harvard lecture — checked before externalResources.
const internalLinks: Record<string, { path: string; label: Bilingual }> = {
  'Python Installation': {
    path: '/install#python',
    label: {
      en: 'Full step-by-step Python installation guide (Mac & Windows)',
      he: 'מדריך התקנת פייתון מלא, שלב אחר שלב (Mac ו-Windows)',
    },
  },
  '.env & dotenv': {
    path: '/install#dotenv',
    label: {
      en: 'Full step-by-step .env & python-dotenv guide (Mac & Windows)',
      he: 'מדריך .env ו-python-dotenv מלא, שלב אחר שלב (Mac ו-Windows)',
    },
  },
};

// Custom display names for specific slide/source links, keyed by URL — falls back to the
// generic "Open Lecture Slides {n}" label when a link isn't listed here.
const slideLabels: Record<string, Bilingual> = {
  'https://drive.google.com/file/d/1MQ_FWuhjk3RQzObVDHf47UOr3wiHFkLu/view': {
    en: 'Building a Project from Scratch',
    he: 'בניית פרויקט מאפס',
  },
};

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
  const practice = sessionPractice[slug];
  const slidesExtra = sessionSlidesExtra[slug];

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
        <div className="flex items-center justify-center gap-3 text-[10px] tracking-brand uppercase text-accent font-sans mb-3">
          {previous ? (
            <Link
              href={`/${locale}/lessons/${previous.slug}`}
              title={previous.title[locale]}
              className="text-sm leading-none text-muted hover:text-accent transition"
              aria-label={nav('previousSession')}
            >
              ‹
            </Link>
          ) : (
            <span className="text-sm leading-none w-2.5" />
          )}
          <span>
            {t('session')} {String(session.number).padStart(2, '0')}
            {session.date && ` · ${session.date}`}
            {' · '}
            {session.format === 'zoom' ? t('zoom') : t('inPerson')}
          </span>
          {next ? (
            <Link
              href={`/${locale}/lessons/${next.slug}`}
              title={next.title[locale]}
              className="text-sm leading-none text-muted hover:text-accent transition"
              aria-label={nav('nextSession')}
            >
              ›
            </Link>
          ) : (
            <span className="text-sm leading-none w-2.5" />
          )}
        </div>
        <h1 className="text-3xl md:text-4xl small-caps tracking-wide mb-4">
          {session.title[locale]}
        </h1>
        <p className="text-base italic text-muted max-w-2xl mx-auto">
          {session.headline[locale]}
        </p>
        {session.concepts && session.concepts.length > 0 && (
          <>
            <div className="flex flex-wrap justify-center gap-2 mt-6">
              {session.concepts.map((c) => {
                const internal = internalLinks[c];
                const resource = externalResources[c];
                if (internal) {
                  return (
                    <Link
                      key={c}
                      href={`/${locale}${internal.path}`}
                      title={internal.label[locale]}
                      className="text-[9px] tracking-brand uppercase text-accent font-sans border border-accent px-3 py-1 hover:bg-accent hover:text-paper transition"
                    >
                      {c} →
                    </Link>
                  );
                }
                return resource ? (
                  <a
                    key={c}
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`${resource.source}: ${resource.label[locale]}`}
                    className="text-[9px] tracking-brand uppercase text-accent font-sans border border-accent px-3 py-1 hover:bg-accent hover:text-paper transition"
                  >
                    {c} ↗
                  </a>
                ) : (
                  <span
                    key={c}
                    className="text-[9px] tracking-brand uppercase text-muted font-sans border border-rule px-3 py-1"
                  >
                    {c}
                  </span>
                );
              })}
            </div>
            {(session.concepts.some((c) => externalResources[c]) || session.concepts.some((c) => internalLinks[c])) && (
              <p className="text-[10px] italic text-muted mt-3">
                {locale === 'he'
                  ? '↗ תגיות מקושרות מובילות למקורות אמיתיים להעמקה — הרצאות אוניברסיטת MIT והרווארד, תיעוד רשמי של תוכנות, או משאבים נוספים שזוהו כשימושיים אפשריים · → תגיות מקושרות מובילות למדריך באתר עצמו.'
                  : '↗ Linked tags lead to real sources for further reading — MIT and Harvard university lectures, official program documentation, or other resources identified as possibly useful · → linked tags lead to a guide on this site.'}
              </p>
            )}
          </>
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

      {/* Slides — essential reference material, always ahead of the video */}
      {session.sourceLinks?.slides && session.sourceLinks.slides.length > 0 && (
        <section className="mb-12">
          <h2 className="text-[10px] tracking-brand uppercase text-accent font-sans font-semibold border-b border-rule pb-2 mb-6">
            {t('slides')}
          </h2>
          <div className="flex flex-wrap gap-3">
            {session.sourceLinks.slides.map((slideLink, i, slides) => (
              <a
                key={i}
                href={slideLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] tracking-brand uppercase text-ink border border-ink px-3 py-1.5 hover:bg-ink hover:text-paper transition font-sans"
              >
                {slideLabels[slideLink]?.[locale] ?? `${t('openSlides')} ${slides.length > 1 ? i + 1 : ''}`} ↗
              </a>
            ))}
            {session.exampleUrl && (
              <a
                href={session.exampleUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] tracking-brand uppercase text-accent border border-accent px-3 py-1.5 hover:bg-accent hover:text-paper transition font-sans"
              >
                {t('viewExample')} ↗
              </a>
            )}
            {slidesExtra?.notebooks?.map((notebook) => (
              <a
                key={notebook.url}
                href={notebook.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] tracking-brand uppercase text-ink border border-ink px-3 py-1.5 hover:bg-ink hover:text-paper transition font-sans"
              >
                {notebook.label[locale]} ↗
              </a>
            ))}
          </div>
          {slidesExtra?.problemSet && (
            <div className="mt-4">
              <ResourceTree tree={[slidesExtra.problemSet]} locale={locale} />
            </div>
          )}
        </section>
      )}

      {/* Practice Material — the targil files for this lesson, next to Session Slides */}
      {practice && practice.length > 0 && (
        <section className="mb-12 border border-rule p-6 bg-codebg/30">
          <div className="flex flex-wrap items-baseline justify-between gap-3 border-b border-rule pb-2 mb-4">
            <h2 className="text-[10px] tracking-brand uppercase text-accent font-sans font-semibold">
              {t('practiceMaterial')}
            </h2>
            <Link
              href={`/${locale}/modules/${module.id}#practice-companion`}
              className="text-[9px] tracking-brand uppercase font-bold text-accent hover:text-paper hover:bg-accent font-sans border border-accent px-2 py-1 transition"
            >
              {locale === 'he' ? 'כל חומרי התרגול של המודול →' : "Module's Full Practice Companion →"}
            </Link>
          </div>
          <ResourceTree tree={practice} locale={locale} />
        </section>
      )}

      {/* Lesson Video */}
      {session.videoLinks && (session.videoLinks.lecture || session.videoLinks.tirgul) && (
        <section className="mb-12">
          <h2 className="text-[10px] tracking-brand uppercase text-accent font-sans font-semibold border-b border-rule pb-2 mb-6">
            {t('lessonVideo')}
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {session.videoLinks.lecture && (
              <a
                href={session.videoLinks.lecture}
                target="_blank"
                rel="noopener noreferrer"
                className="block border border-ink p-6 hover:bg-ink hover:text-paper transition group"
              >
                <div className="text-[10px] tracking-brand uppercase text-accent group-hover:text-paper font-sans mb-2">
                  {t('session')} {String(session.number).padStart(2, '0')}
                </div>
                <div className="small-caps tracking-wide text-lg">
                  {t('watchLecture')} →
                </div>
              </a>
            )}
            {session.videoLinks.tirgul && (
              <a
                href={session.videoLinks.tirgul}
                target="_blank"
                rel="noopener noreferrer"
                className="block border border-ink p-6 hover:bg-ink hover:text-paper transition group"
              >
                <div className="text-[10px] tracking-brand uppercase text-accent group-hover:text-paper font-sans mb-2">
                  {t('moduleSession')}
                </div>
                <div className="small-caps tracking-wide text-lg">
                  {t('watchTirgul')} →
                </div>
              </a>
            )}
          </div>
          <p className="text-xs italic text-muted mt-4">{t('videoNote')}</p>
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

      {/* Source Materials — recording and chat log; slides moved above, ahead of the video */}
      {session.sourceLinks && (session.sourceLinks.recording || session.sourceLinks.chat) && (
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
            {session.sourceLinks.slides?.map((slideLink, i, slides) => (
              <a
                key={slideLink}
                href={slideLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] tracking-brand uppercase text-ink border border-ink px-3 py-1.5 hover:bg-ink hover:text-paper transition font-sans"
              >
                {slideLabels[slideLink]?.[locale] ?? `${t('openSlides')} ${slides.length > 1 ? i + 1 : ''}`} ↗
              </a>
            ))}
          </div>
        </section>
      )}

      {practice && practice.length > 0 && (
        <div className="mb-12 flex justify-end">
          <Link
            href={`/${locale}/modules/${module.id}#practice-companion`}
            className="text-[9px] tracking-brand uppercase font-bold text-accent hover:text-paper hover:bg-accent font-sans border border-accent px-2 py-1 transition"
          >
            {locale === 'he' ? 'כל חומרי התרגול של המודול →' : "Module's Full Practice Companion →"}
          </Link>
        </div>
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
