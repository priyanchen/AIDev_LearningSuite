import type { SyntaxTopic } from '@/content/syntax-guide';
import type { Locale } from '@/i18n';
import PrintButton from './PrintButton';

// Renders `code` spans as real inline code — this page is a syntax reference,
// so backtick-delimited snippets earn real monospace styling (unlike card prose).
export function renderWithCode(text: string) {
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

export default function SyntaxTopicCard({
  topic,
  locale,
  printLabel,
}: {
  topic: SyntaxTopic;
  locale: Locale;
  printLabel: string;
}) {
  return (
    <div id={`topic-${topic.number}`} className="border border-rule p-6 bg-codebg/30 scroll-mt-24">
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
