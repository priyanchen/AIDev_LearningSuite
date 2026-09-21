import Link from 'next/link';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { sessions } from '@/lib/registry';
import { recommendationCategories } from '@/content/recommendations';
import PrintButton from '@/components/PrintButton';
import type { Locale } from '@/i18n';
import type { RecommendationType } from '@/content/recommendations';

function typeLabel(type: RecommendationType, locale: Locale) {
  if (type === 'book') return locale === 'he' ? 'ספר' : 'Book';
  if (type === 'course') return locale === 'he' ? 'קורס' : 'Course';
  if (type === 'dataset') return locale === 'he' ? 'נתונים' : 'Data';
  return locale === 'he' ? 'אדם' : 'Person';
}

export default async function RecommendedPage({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  setRequestLocale(locale);
  const nav = await getTranslations('nav');
  const cards = await getTranslations('cards');
  const sessionByNumber = new Map(sessions.map((s) => [s.number, s]));

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl small-caps tracking-wide mb-2 text-center">
        {nav('recommended')}
      </h1>
      <div className="ornament text-xl text-accent text-center mb-8"></div>

      <p className="text-center italic text-muted max-w-2xl mx-auto mb-16">
        {locale === 'he'
          ? 'כל ספר ואדם שד״ר זוארי הזכיר או המליץ עליהם לאורך הקורס, מאורגנים לפי נושא — נמצאו בסריקה של כל מפגש זמין. כל פריט מקושר למפגש שבו הוא עלה.'
          : 'Every book and person Dr. Zuari mentioned or recommended across the course, organized by topic — found by scanning every available session. Each item links back to the session it came up in.'}
      </p>

      {recommendationCategories.map((category) => (
        <section key={category.topic.en} className="mb-16">
          <h2 className="small-caps tracking-wide text-xl border-b border-rule pb-3 mb-3">
            {category.topic[locale]}
          </h2>
          <p className="text-xs italic text-muted mb-6 leading-relaxed">
            {category.influence[locale]}
          </p>

          <div className="grid gap-6">
            {category.items.map((item) => {
              const s = sessionByNumber.get(item.sessionNumber);
              const sessionLabel = `${locale === 'he' ? 'מפגש' : 'Session'} ${String(item.sessionNumber).padStart(2, '0')}`;
              return (
                <div key={item.name} className="border border-rule p-6 bg-codebg/30">
                  <div className="flex flex-wrap items-baseline justify-between gap-3 mb-3">
                    <div className="flex items-baseline gap-3">
                      <span className="text-[9px] tracking-brand uppercase text-accent font-sans font-semibold border border-accent px-2 py-0.5">
                        {typeLabel(item.type, locale)}
                      </span>
                      <h3 className="text-lg small-caps tracking-wide">{item.name}</h3>
                    </div>
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

                  <p className="text-sm leading-relaxed mb-3">{item.bio[locale]}</p>

                  {item.links && item.links.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-3">
                      {item.links.map((link) => (
                        <a
                          key={link.url}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[10px] tracking-brand uppercase text-ink border border-ink px-3 py-1.5 hover:bg-ink hover:text-paper transition font-sans"
                        >
                          {link.label} ↗
                        </a>
                      ))}
                    </div>
                  )}

                  <div className="border-t border-rule pt-3 mt-3">
                    <div className="text-[9px] tracking-brand uppercase text-accent font-sans font-semibold mb-2">
                      {locale === 'he' ? 'ההקשר במפגש' : 'Session Context'}
                    </div>
                    <p className="text-xs italic text-muted leading-relaxed">{item.context[locale]}</p>
                  </div>

                  {!item.verified && (
                    <p className="text-[10px] text-muted mt-3">
                      {locale === 'he'
                        ? '⚠ הקלטת המפגש הזה לא זמינה — פריט זה מבוסס על אישור ישיר ולא על תמלול מאומת.'
                        : "⚠ This session's recording is unavailable — this entry rests on direct confirmation, not a verified transcript."}
                    </p>
                  )}

                  {item.editorial && (
                    <p className="text-[10px] text-muted mt-3">
                      {locale === 'he'
                        ? '✎ תוספת עריכתית — לא משהו שד״ר זוארי אמר בשידור חי, אלא הרחבה מוסמכת של נושא המפגש.'
                        : "✎ Editorially added — not something Dr. Zuari said live, but a grounded extension of the session's own subject."}
                    </p>
                  )}

                  <div className="flex justify-end mt-3">
                    <PrintButton
                      title={item.name}
                      subtitle={typeLabel(item.type, locale)}
                      sections={[
                        { heading: locale === 'he' ? 'רקע' : 'Bio', body: item.bio[locale] },
                        { heading: locale === 'he' ? 'ההקשר במפגש' : 'Session Context', body: item.context[locale] },
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
