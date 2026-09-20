import Link from 'next/link';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { sessions, modules } from '@/lib/registry';
import { installGuide } from '@/content/install-guide';
import type { Locale } from '@/i18n';

// Renders `code` spans as real inline code — same convention as the Syntax page.
function renderWithCode(text: string) {
  const parts = text.split('`');
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <code
        key={i}
        dir="ltr"
        className="inline-block bg-ink text-paper font-mono text-[0.85em] px-1.5 py-0.5 rounded-sm"
      >
        {part}
      </code>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}

export default async function InstallGuidePage({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  setRequestLocale(locale);
  const nav = await getTranslations('nav');
  const sessionBySlug = new Map(sessions.map((s) => [s.number, s]));
  const moduleById = new Map(modules.map((m) => [m.id, m]));

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
              <div key={item.name} id={item.id} className="border border-rule p-6 bg-codebg/30 scroll-mt-24">
                <div className="flex flex-wrap items-baseline justify-between gap-3 mb-3">
                  <h3 className="text-lg font-bold font-mono tracking-tight">
                    {item.officialUrl ? (
                      <a
                        href={item.officialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={locale === 'he' ? 'עמוד ההתקנה הרשמי' : "Official installation page"}
                        className="hover:text-accent transition underline decoration-rule underline-offset-4 hover:decoration-accent"
                      >
                        {item.name} ↗
                      </a>
                    ) : (
                      item.name
                    )}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {item.moduleId && moduleById.get(item.moduleId) && (
                      <Link
                        href={`/${locale}/modules/${item.moduleId}`}
                        className="text-[9px] tracking-brand uppercase text-accent hover:text-paper hover:bg-accent font-sans border border-accent px-2 py-1 transition"
                      >
                        {locale === 'he' ? 'מודול →' : 'Module →'}
                      </Link>
                    )}
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

                <p className="text-sm leading-relaxed mb-4">
                  {renderWithCode(item.whatItDoes[locale])}
                </p>

                {item.steps && (
                  <div className="mb-6">
                    <div className="text-[9px] tracking-brand uppercase text-accent font-sans font-semibold mb-3">
                      {locale === 'he' ? 'מדריך התקנה מלא, שלב אחר שלב' : 'Full Step-by-Step Installation Guide'}
                    </div>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <div className="text-xs font-bold uppercase tracking-wide mb-3 border-b border-rule pb-1">
                          Mac
                        </div>
                        <ol className="grid gap-3">
                          {item.steps.mac.map((step, i) => (
                            <li key={i}>
                              <div className="text-xs font-bold mb-0.5">{renderWithCode(step.title[locale])}</div>
                              <div className="text-xs text-muted leading-relaxed">{renderWithCode(step.detail[locale])}</div>
                            </li>
                          ))}
                        </ol>
                      </div>
                      <div>
                        <div className="text-xs font-bold uppercase tracking-wide mb-3 border-b border-rule pb-1">
                          Windows
                        </div>
                        <ol className="grid gap-3">
                          {item.steps.windows.map((step, i) => (
                            <li key={i}>
                              <div className="text-xs font-bold mb-0.5">{renderWithCode(step.title[locale])}</div>
                              <div className="text-xs text-muted leading-relaxed">{renderWithCode(step.detail[locale])}</div>
                            </li>
                          ))}
                        </ol>
                      </div>
                    </div>
                  </div>
                )}

                {item.commands && (
                  <div className="grid sm:grid-cols-2 gap-4 mb-1">
                    <div>
                      <div className="text-[9px] tracking-brand uppercase text-accent font-sans font-semibold mb-2">
                        {locale === 'he' ? 'Mac' : 'Mac'}
                      </div>
                      <pre className="bg-ink text-paper text-xs font-mono p-3 overflow-x-auto whitespace-pre-wrap break-all" dir="ltr">
                        {item.commands.mac.join('\n')}
                      </pre>
                    </div>
                    <div>
                      <div className="text-[9px] tracking-brand uppercase text-accent font-sans font-semibold mb-2">
                        {locale === 'he' ? 'Windows' : 'Windows'}
                      </div>
                      <pre className="bg-ink text-paper text-xs font-mono p-3 overflow-x-auto whitespace-pre-wrap break-all" dir="ltr">
                        {item.commands.windows.join('\n')}
                      </pre>
                    </div>
                  </div>
                )}

                {item.tips && (
                  <div className="border-t border-rule pt-3 mt-3">
                    <div className="text-[9px] tracking-brand uppercase text-accent font-sans font-semibold mb-2">
                      {locale === 'he' ? 'טיפים ואזהרות' : 'Tips & Warnings'}
                    </div>
                    <p className="text-xs italic text-muted leading-relaxed">
                      {renderWithCode(item.tips[locale])}
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
