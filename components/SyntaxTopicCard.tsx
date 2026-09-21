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

// Every point in this dataset follows a "Label: description" shape (see content/syntax-guide.ts) —
// split on the first colon that precedes any backtick, so a colon inside `{key: value}` code
// is never mistaken for the label separator. Returns null when a point doesn't fit the pattern.
function splitKeyValue(text: string): [string, string] | null {
  const colonIndex = text.indexOf(':');
  if (colonIndex === -1) return null;
  const backtickIndex = text.indexOf('`');
  if (backtickIndex !== -1 && colonIndex > backtickIndex) return null;
  return [text.slice(0, colonIndex), text.slice(colonIndex + 1).trim()];
}

// Ester's Pandas/NumPy reference sheet packs several `code()` — description pairs into one point,
// separated by ";". Split each into its own term/definition row; returns null (fall back to a plain
// bullet) unless every semicolon-separated segment actually has a " — " term/definition split.
function splitDashEntries(text: string): [string, string][] | null {
  const segments = text.split(';').map((s) => s.trim()).filter(Boolean);
  if (segments.length === 0) return null;
  const entries: [string, string][] = [];
  for (const segment of segments) {
    const dashIndex = segment.indexOf(' — ');
    if (dashIndex === -1) return null;
    entries.push([segment.slice(0, dashIndex).trim(), segment.slice(dashIndex + 3).trim()]);
  }
  return entries;
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
  const isPython = /^\d+$/.test(topic.number);

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

      {isPython ? (
        <div className="grid gap-y-2 gap-x-2 mb-4 sm:grid-cols-[auto_1fr]">
          {topic.points.map((point, i) => {
            const split = splitKeyValue(point[locale]);
            return split ? (
              <div key={i} className="contents">
                <span className="text-xs font-sans font-semibold text-accent sm:pt-0.5 sm:whitespace-nowrap">{split[0]}</span>
                <span className="text-sm leading-relaxed pb-2 sm:pb-0 border-b sm:border-b-0 border-rule/50">
                  {renderWithCode(split[1])}
                </span>
              </div>
            ) : (
              <div key={i} className="sm:col-span-2 text-sm leading-relaxed flex gap-2">
                <span className="text-accent flex-shrink-0">·</span>
                <span>{renderWithCode(point[locale])}</span>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="grid gap-y-2 gap-x-2 mb-4 sm:grid-cols-[auto_1fr]">
          {topic.points.map((point, i) => {
            const entries = splitDashEntries(point[locale]);
            return entries ? (
              entries.map(([term, definition], j) => (
                <div key={`${i}-${j}`} className="contents">
                  <span className="text-xs font-sans sm:pt-0.5 sm:whitespace-nowrap">{renderWithCode(term)}</span>
                  <span className="text-sm leading-relaxed pb-2 sm:pb-0 border-b sm:border-b-0 border-rule/50 text-muted">
                    {definition}
                  </span>
                </div>
              ))
            ) : (
              <div key={i} className="sm:col-span-2 text-sm leading-relaxed flex gap-2">
                <span className="text-accent flex-shrink-0">·</span>
                <span>{renderWithCode(point[locale])}</span>
              </div>
            );
          })}
        </div>
      )}

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
