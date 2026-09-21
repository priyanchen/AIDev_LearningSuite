import { getTranslations, setRequestLocale } from 'next-intl/server';
import { syntaxGuide, otherLanguages, type SyntaxTopic } from '@/content/syntax-guide';
import PrintButton from '@/components/PrintButton';
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

function TopicCard({ topic, locale, printLabel }: { topic: SyntaxTopic; locale: Locale; printLabel: string }) {
  return (
    <div id={`topic-${topic.number}`} className="border border-rule p-6 bg-codebg/30">
      <div className="flex items-baseline gap-3 mb-4 pb-3 border-b border-rule">
        <span className="text-[10px] tracking-brand uppercase text-accent font-sans font-semibold">
          {topic.number}
        </span>
        <h2 className="small-caps tracking-wide text-xl flex-1">
          {topic.title[locale]}
        </h2>
        <span className="text-[9px] tracking-brand uppercase text-muted font-sans font-mono">
          {topic.source}
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

      <div className="flex justify-end mt-4">
        <PrintButton
          title={topic.title[locale]}
          sections={[
            { heading: locale === 'he' ? 'נקודות' : 'Points', body: topic.points.map((p) => p[locale]).join('\n') },
            ...(topic.keyTakeaway
              ? [{ heading: locale === 'he' ? 'תובנת מפתח' : 'Key Takeaway', body: topic.keyTakeaway[locale] }]
              : []),
          ]}
          dir={locale === 'he' ? 'rtl' : 'ltr'}
          label={printLabel}
        />
      </div>
    </div>
  );
}

export default async function SyntaxGuidePage({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  setRequestLocale(locale);
  const nav = await getTranslations('nav');
  const cards = await getTranslations('cards');

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

      <p className="text-center italic text-muted max-w-2xl mx-auto mb-8">
        {locale === 'he'
          ? 'סיכום התחביר שנלמד לאורך מודול Python, ממוחזר מתקציר הסיום של כל מחברת Jupyter בקורס — לא תיעוד פייתון כללי. כל נושא ממוספר לפי מספר המחברת המקורית שלו.'
          : 'A summary of the syntax taught across the Python module, recovered from the closing summary of every Jupyter notebook in the course — not generic Python documentation. Each topic is numbered by its original notebook number.'}
      </p>

      {/* Jump nav — click a language to scroll straight to its section */}
      <nav className="flex flex-wrap justify-center gap-2 mb-16">
        <a
          href="#lang-python"
          className="text-[9px] tracking-brand uppercase text-accent font-sans font-semibold border border-accent px-3 py-1.5 hover:bg-accent hover:text-paper transition"
        >
          Python
        </a>
        {otherLanguages.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className="text-[9px] tracking-brand uppercase text-accent font-sans font-semibold border border-accent px-3 py-1.5 hover:bg-accent hover:text-paper transition"
          >
            {section.language[locale]}
          </a>
        ))}
      </nav>

      <section id="lang-python" className="scroll-mt-24">
        <div className="text-[10px] tracking-brand uppercase text-accent font-sans font-semibold text-center mb-3">
          {locale === 'he' ? 'השפה המרכזית' : 'Core Language'}
        </div>
        <h2 className="text-2xl md:text-3xl small-caps tracking-wide mb-10 text-center">
          Python
        </h2>
        <div className="grid gap-8">
          {syntaxGuide.map((topic) => (
            <TopicCard key={topic.number} topic={topic} locale={locale} printLabel={cards('printCard')} />
          ))}
        </div>
      </section>

      {otherLanguages.map((section) => (
        <section key={section.id} id={section.id} className="mt-20 scroll-mt-24">
          <div className="text-[10px] tracking-brand uppercase text-accent font-sans font-semibold text-center mb-3">
            {locale === 'he' ? 'שפה נוספת' : 'Additional Language'}
          </div>
          <h2 className="text-2xl md:text-3xl small-caps tracking-wide mb-4 text-center">
            {section.language[locale]}
          </h2>
          <p className="text-center italic text-muted max-w-2xl mx-auto mb-10 text-sm">
            {section.note[locale]}
          </p>
          <div className="grid gap-8">
            {section.topics.map((topic) => (
              <TopicCard key={topic.number} topic={topic} locale={locale} printLabel={cards('printCard')} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
