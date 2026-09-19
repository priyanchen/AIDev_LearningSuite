import { getTranslations, setRequestLocale } from 'next-intl/server';
import { syntaxGuide } from '@/content/syntax-guide';
import type { Locale } from '@/i18n';

// Renders `code` spans as real inline code — this page is a syntax reference,
// so backtick-delimited snippets earn real monospace styling (unlike card prose).
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

export default async function SyntaxGuidePage({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  setRequestLocale(locale);
  const nav = await getTranslations('nav');

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="text-[10px] tracking-brand uppercase text-accent font-sans font-semibold text-center mb-4">
        {nav('syntax')}
      </div>
      <h1 className="text-3xl md:text-4xl small-caps tracking-wide mb-2 text-center">
        {locale === 'he'
          ? 'פייתון היא שפת תכנות מונחית עצמים'
          : 'Python Is an Object-Oriented Programming Language'}
      </h1>
      <p className="text-center text-xs tracking-brand uppercase text-muted font-sans mb-2">
        {locale === 'he' ? '— ד״ר יונתן זוארי' : '— Dr. Jonathan Zuari'}
      </p>
      <div className="ornament text-xl text-accent text-center mb-8"></div>

      <p className="text-center italic text-muted max-w-2xl mx-auto mb-16">
        {locale === 'he'
          ? 'סיכום התחביר שנלמד לאורך מודול Python, ממוחזר מתקציר הסיום של כל מחברת Jupyter בקורס — לא תיעוד פייתון כללי. כל נושא ממוספר לפי מספר המחברת המקורית שלו.'
          : 'A summary of the syntax taught across the Python module, recovered from the closing summary of every Jupyter notebook in the course — not generic Python documentation. Each topic is numbered by its original notebook number.'}
      </p>

      <div className="grid gap-8">
        {syntaxGuide.map((topic) => (
          <div key={topic.number} id={`topic-${topic.number}`} className="border border-rule p-6 bg-codebg/30">
            <div className="flex items-baseline gap-3 mb-4 pb-3 border-b border-rule">
              <span className="text-[10px] tracking-brand uppercase text-accent font-sans font-semibold">
                {topic.number}
              </span>
              <h2 className="small-caps tracking-wide text-xl flex-1">
                {topic.title[locale]}
              </h2>
              <span className="text-[9px] tracking-brand uppercase text-muted font-sans font-mono">
                {topic.sourceNotebook}
              </span>
            </div>

            <ul className="grid gap-2 mb-4">
              {topic.points.map((point, i) => (
                <li key={i} className="text-sm leading-relaxed flex gap-2">
                  <span className="text-accent flex-shrink-0">·</span>
                  <span>{renderWithCode(point[locale])}</span>
                </li>
              ))}
            </ul>

            {topic.keyTakeaway && (
              <div className="border-t border-rule pt-3 mt-3">
                <div className="text-[9px] tracking-brand uppercase text-accent font-sans font-semibold mb-2">
                  {locale === 'he' ? 'תובנת מפתח' : 'Key Takeaway'}
                </div>
                <p className="text-xs italic text-muted leading-relaxed">
                  {renderWithCode(topic.keyTakeaway[locale])}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
