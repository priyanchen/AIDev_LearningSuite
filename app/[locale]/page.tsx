import Link from 'next/link';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { modules, sessions, getSessionsForModule, getVisibleModules } from '@/lib/registry';
import ModuleBand from '@/components/ModuleBand';
import type { Locale } from '@/i18n';

export default async function HomePage({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  setRequestLocale(locale);
  const t = await getTranslations('home');
  const site = await getTranslations('site');

  const visibleModules = getVisibleModules();
  const totalSessions = sessions.length;
  const completedSessions = sessions.filter((s) => s.status === 'complete').length;

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <section className="text-center mb-16">
        <div className="text-[10px] tracking-brand uppercase text-muted font-sans mb-4">
          {site('brand')} · Volume I
        </div>
        <h1 className="text-5xl md:text-6xl small-caps tracking-wide mb-4">
          {t('hero')}
        </h1>
        <p className="text-lg italic text-muted max-w-2xl mx-auto mb-8">
          {t('subtitle')}
        </p>
        <div className="ornament text-2xl text-accent my-6"></div>
        <p className="text-base leading-relaxed max-w-2xl mx-auto mb-10">
          {t('intro')}
        </p>
        <Link
          href={`/${locale}/modules/02-n8n`}
          className="inline-block border border-ink px-8 py-3 text-sm tracking-brand uppercase font-sans hover:bg-ink hover:text-paper transition"
        >
          {t('startLearning')}
        </Link>
      </section>

      <section className="grid grid-cols-3 gap-6 mb-16 border-y border-rule py-8">
        <div className="text-center">
          <div className="text-4xl small-caps text-accent">{visibleModules.length}</div>
          <div className="text-[10px] tracking-brand uppercase text-muted font-sans mt-2">
            {t('modulesCount')}
          </div>
        </div>
        <div className="text-center">
          <div className="text-4xl small-caps text-accent">
            {completedSessions} <span className="text-muted">/ {totalSessions}</span>
          </div>
          <div className="text-[10px] tracking-brand uppercase text-muted font-sans mt-2">
            {t('sessionsCount')}
          </div>
        </div>
        <div className="text-center">
          <div className="text-4xl small-caps text-accent">11</div>
          <div className="text-[10px] tracking-brand uppercase text-muted font-sans mt-2">
            {t('cardsPerSession')}
          </div>
        </div>
      </section>

      <section>
        {visibleModules.map((module) => (
          <ModuleBand
            key={module.id}
            module={module}
            sessions={getSessionsForModule(module.id)}
            locale={locale}
          />
        ))}
      </section>
    </div>
  );
}
