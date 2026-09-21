import Link from 'next/link';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { promptModules } from '@/content/prompts';
import { getSession } from '@/lib/registry';
import PrintButton from '@/components/PrintButton';
import type { Locale } from '@/i18n';

export default async function PromptsPage({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  setRequestLocale(locale);
  const nav = await getTranslations('nav');
  const cards = await getTranslations('cards');

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl small-caps tracking-wide mb-2 text-center">
        {nav('prompts')}
      </h1>
      <div className="ornament text-xl text-accent text-center mb-8"></div>

      <p className="text-center italic text-muted max-w-2xl mx-auto mb-6">
        {locale === 'he'
          ? 'כל פרומפט שד״ר זוארי הקליד בעצמו בצ׳אט הכיתה בזום — מילולית, לא משוחזר מהקלטה — נמצא בסריקה של יומני הצ׳אט הזמינים לכל 22 המפגשים. מאורגן לפי מודול ומפגש.'
          : "Every prompt Dr. Zuari typed himself into the live Zoom class chat — verbatim, not reconstructed from a recording — found by scanning the available chat logs across all 22 sessions. Organized by module and session."}
      </p>
      <p className="text-center text-xs text-muted max-w-2xl mx-auto mb-16">
        {locale === 'he'
          ? 'מפגשים 1–7, 15, ו-22 נסרקו במלואם ולא נמצאו בהם פרומפטים מתאימים. יומן הצ׳אט של מפגש 20 חרג ממגבלת גודל הכלי ונסרק חלקית בלבד — היעדרות שם אינה מאושרת. למפגש 21 אין יומן צ׳אט בתיק.'
          : "Sessions 1–7, 15, and 22 were fully scanned with no qualifying prompts found. Session 20's chat log exceeded a tool size limit and was only partially reviewed — absence there is not confirmed. Session 21 has no chat log on file."}
      </p>

      {promptModules.map((mod) => (
        <section key={mod.moduleId} className="mb-16">
          <h2 className="small-caps tracking-wide text-xl border-b border-rule pb-3 mb-6">
            {mod.title[locale]}
          </h2>

          <div className="grid gap-6">
            {mod.prompts.map((p, i) => {
              const s = getSession(p.sessionSlug);
              const sessionLabel = `${locale === 'he' ? 'מפגש' : 'Session'} ${String(p.sessionNumber).padStart(2, '0')}`;
              const promptDir = p.verbatim === 'he' ? 'rtl' : 'ltr';
              return (
                <div key={`${p.sessionSlug}-${i}`} className="border border-rule p-6 bg-codebg/30">
                  <div className="flex flex-wrap items-baseline justify-between gap-3 mb-4">
                    {s ? (
                      <Link
                        href={`/${locale}/lessons/${s.slug}`}
                        className="text-[9px] tracking-brand uppercase text-muted hover:text-accent font-sans border border-rule px-2 py-1"
                      >
                        {sessionLabel}
                      </Link>
                    ) : (
                      <span className="text-[9px] tracking-brand uppercase text-muted font-sans border border-rule px-2 py-1">
                        {sessionLabel}
                      </span>
                    )}
                  </div>

                  <blockquote
                    dir={promptDir}
                    className="border-s-2 border-accent ps-4 mb-3 font-mono text-sm leading-relaxed whitespace-pre-wrap"
                  >
                    {p.text[p.verbatim]}
                  </blockquote>

                  {p.verbatim === 'he' && p.text.en && (
                    <p dir="ltr" className="text-sm italic text-muted mb-3 ps-4">
                      {p.text.en}
                    </p>
                  )}

                  <div className="border-t border-rule pt-3 mt-3">
                    <div className="text-[9px] tracking-brand uppercase text-accent font-sans font-semibold mb-2">
                      {locale === 'he' ? 'ההקשר' : 'Context'}
                    </div>
                    <p className="text-xs italic text-muted leading-relaxed">{p.context[locale]}</p>
                  </div>

                  <div className="flex justify-end mt-3">
                    <PrintButton
                      title={sessionLabel}
                      subtitle={mod.title[locale]}
                      sections={[
                        { heading: locale === 'he' ? 'פרומפט' : 'Prompt', body: p.text[p.verbatim] },
                        { heading: locale === 'he' ? 'ההקשר' : 'Context', body: p.context[locale] },
                      ]}
                      dir={locale === 'he' ? 'rtl' : 'ltr'}
                      label={cards('printCard')}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}
