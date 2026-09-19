import { getTranslations, setRequestLocale } from 'next-intl/server';
import { getVisibleModules, getSessionsForModule } from '@/lib/registry';
import ModuleBand from '@/components/ModuleBand';
import type { Locale } from '@/i18n';

export default async function ModulesIndexPage({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  setRequestLocale(locale);
  const nav = await getTranslations('nav');
  const visibleModules = getVisibleModules();

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-4xl small-caps tracking-wide mb-2 text-center">
        {nav('modules')}
      </h1>
      <div className="ornament text-xl text-accent text-center mb-12"></div>

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
