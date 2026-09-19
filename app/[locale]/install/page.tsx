import Link from 'next/link';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { sessions } from '@/lib/registry';
import { installGuide } from '@/content/install-guide';
import type { Locale } from '@/i18n';

export default async function InstallGuidePage({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  setRequestLocale(locale);
  const nav = await getTranslations('nav');
  const sessionBySlug = new Map(sessions.map((s) => [s.number, s]));

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl small-caps tracking-wide mb-2 text-center">
        {nav('install')}
      </h1>
      <div className="ornament text-xl text-accent text-center mb-8"></div>

      <p className="text-center italic text-muted max-w-2xl mx-auto mb-16">
        {locale === 'he'
          ? 'כל כלי וחבילה מרכזיים שהותקנו לאורך הקורס, עם הסבר ועצות מעוגנים בחומר המקור עצמו — לא תיעוד כללי. כל פריט מקושר למפגש שבו הוא נלמד.'
          : 'Every main tool and package installed across the course, with explanations and tips grounded in the source material itself — not generic documentation. Each item links back to the session it was taught in.'}
      </p>

      {installGuide.map((category) => (
        <section key={category.title.en} className="mb-16">
          <h2 className="small-caps tracking-wide text-xl border-b border-rule pb-3 mb-8">
            {category.title[locale]}
          </h2>

          <div className="grid gap-6">
            {category.items.map((item) => (
              <div key={item.name} className="border border-rule p-6 bg-codebg/30">
                <div className="flex flex-wrap items-baseline justify-between gap-3 mb-3">
                  <h3 className="text-lg font-bold font-mono tracking-tight">
                    {item.name}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {item.sessions.map((num) => {
                      const s = sessionBySlug.get(num);
                      const label = `${locale === 'he' ? 'מפגש' : 'Session'} ${String(num).padStart(2, '0')}`;
                      return s ? (
                        <Link
                          key={num}
                          href={`/${locale}/lessons/${s.slug}`}
                          className="text-[9px] tracking-brand uppercase text-muted hover:text-accent font-sans border border-rule px-2 py-1"
                        >
                          {label}
                        </Link>
                      ) : (
                        <span
                          key={num}
                          className="text-[9px] tracking-brand uppercase text-muted font-sans border border-rule px-2 py-1"
                        >
                          {label}
                        </span>
                      );
                    })}
                  </div>
                </div>

                <p className="text-sm leading-relaxed mb-3">
                  {item.whatItDoes[locale]}
                </p>

                {item.tips && (
                  <div className="border-t border-rule pt-3 mt-3">
                    <div className="text-[9px] tracking-brand uppercase text-accent font-sans font-semibold mb-2">
                      {locale === 'he' ? 'טיפים ואזהרות' : 'Tips & Warnings'}
                    </div>
                    <p className="text-xs italic text-muted leading-relaxed">
                      {item.tips[locale]}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
