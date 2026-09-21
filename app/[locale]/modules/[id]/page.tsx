import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { modules, getModule, getSessionsForModule } from '@/lib/registry';
import { moduleResources } from '@/content/module-resources';
import ResourceTree from '@/components/ResourceTree';
import type { Locale } from '@/i18n';

export function generateStaticParams() {
  return modules.filter((m) => m.visibility === 'public').map((m) => ({ id: m.id }));
}

export default async function ModulePage({
  params: { locale, id },
}: {
  params: { locale: Locale; id: string };
}) {
  setRequestLocale(locale);
  const module = getModule(id);
  if (!module || module.visibility === 'hidden') notFound();

  const t = await getTranslations('module');
  const nav = await getTranslations('nav');
  const sessionT = await getTranslations('session');
  const sessions = getSessionsForModule(id);
  const resources = moduleResources[id];

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <nav className="mb-8 text-[10px] tracking-brand uppercase text-muted font-sans">
        <Link href={`/${locale}`} className="hover:text-accent">
          {nav('home')}
        </Link>
        <span className="mx-2">·</span>
        <Link href={`/${locale}/modules`} className="hover:text-accent">
          {nav('modules')}
        </Link>
      </nav>

      <section className="text-center mb-12 pb-12 border-b border-rule">
        <div className="text-[10px] tracking-brand uppercase text-accent font-sans mb-3">
          {locale === 'he' ? 'מודול' : 'Module'} {String(module.number).padStart(2, '0')}
        </div>
        <h1 className="text-4xl small-caps tracking-wide mb-4">
          {module.title[locale]}
        </h1>
        <p className="text-base italic text-muted max-w-2xl mx-auto">
          {module.description[locale]}
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-[10px] tracking-brand uppercase text-accent font-sans font-semibold border-b border-rule pb-2 mb-6">
          {t('sessionsInModule')}
        </h2>
        <div className="space-y-1">
          {sessions.map((s) => (
            <Link
              key={s.slug}
              href={`/${locale}/lessons/${s.slug}`}
              className={`grid grid-cols-[60px_1fr_auto] gap-4 items-baseline py-4 border-b border-dashed border-rule hover:bg-codebg transition px-3 ${
                s.status === 'planned' || s.status === 'deferred' ? 'opacity-60' : ''
              }`}
            >
              <span className="text-2xl small-caps text-accent font-bold text-right">
                {String(s.number).padStart(2, '0')}
              </span>
              <div>
                <h3 className="small-caps tracking-wide text-base font-bold">
                  {s.title[locale]}
                </h3>
                <p className="text-xs text-muted italic mt-1">
                  {s.headline[locale]}
                </p>
                {s.date && (
                  <p className="text-[9px] tracking-brand uppercase text-muted font-sans mt-1">
                    {s.date} · {s.format === 'zoom' ? sessionT('zoom') : sessionT('inPerson')}
                  </p>
                )}
              </div>
              <span className="text-[9px] tracking-brand uppercase text-muted font-sans">
                {s.status === 'complete' ? '●' : s.status === 'deferred' ? '◐' : '○'}
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section id="practice-companion" className="border border-rule p-6 bg-codebg/30 scroll-mt-24">
        <h3 className="text-[10px] tracking-brand uppercase text-accent font-sans font-semibold mb-3">
          {t('practiceCompanion')}
        </h3>
        {resources ? (
          <>
            <p className="text-xs italic text-muted mb-4">
              {locale === 'he'
                ? 'תרגילי כיתה וחומר אימון נוסף, באותו מבנה תיקיות כמו התיקייה המקורית.'
                : 'Class exercises and additional training material, in the same folder structure as the original.'}
            </p>
            <ResourceTree tree={resources.tree} locale={locale} />
            {resources.estherTree && (
              <div className="mt-6 pt-6 border-t border-dashed border-rule">
                <h4 className="text-[10px] tracking-brand uppercase text-accent font-sans font-semibold mb-3">
                  {locale === 'he' ? 'מלווה תרגול אסתר' : 'Ester Practice Companion'}
                </h4>
                <ResourceTree tree={resources.estherTree} locale={locale} />
              </div>
            )}
          </>
        ) : (
          <p className="text-xs italic text-muted">{t('practicePlaceholder')}</p>
        )}
      </section>
    </div>
  );
}
