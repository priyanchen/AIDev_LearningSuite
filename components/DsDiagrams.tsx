import type { Locale } from '@/i18n';

// Recreates the real "Low vs High σ" dispersion comparison from Dr. Zuari's Practical Statistics
// deck (slide 18) — two clusters of points around a shared center, one tight, one scattered.
function DispersionComparison({ locale }: { locale: Locale }) {
  const low = [
    [40, 42], [58, 55], [45, 60], [52, 48], [50, 50],
  ];
  const high = [
    [20, 30], [75, 62], [35, 78], [65, 22], [50, 48],
  ];
  return (
    <div className="grid sm:grid-cols-2 gap-4">
      {[
        { points: low, labelEn: 'Low Variability', labelHe: 'שונות נמוכה', noteEn: 'Tightly clustered values', noteHe: 'ערכים צמודים זה לזה' },
        { points: high, labelEn: 'High Variability', labelHe: 'שונות גבוהה', noteEn: 'Widely scattered values', noteHe: 'ערכים מפוזרים בהרחבה' },
      ].map((panel, i) => (
        <div key={i} className="border border-rule p-4">
          <div className="relative w-full bg-paper border border-dashed border-rule" style={{ height: '110px' }}>
            <span
              className="absolute w-1.5 h-1.5 rounded-full bg-ink"
              style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}
            />
            {panel.points.map(([x, y], j) => (
              <span
                key={j}
                className="absolute w-2 h-2 rounded-full bg-accent"
                style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%, -50%)' }}
              />
            ))}
          </div>
          <p className="text-[10px] tracking-brand uppercase text-accent font-sans font-semibold text-center mt-3">
            {locale === 'he' ? panel.labelHe : panel.labelEn}
          </p>
          <p className="text-[10px] italic text-muted text-center">
            {locale === 'he' ? panel.noteHe : panel.noteEn}
          </p>
        </div>
      ))}
    </div>
  );
}

// An illustrative worked example (not the deck's literal numbers) showing the real explanation
// quoted above in action: deviation → squared deviation → variance (their average) → σ (its root).
function DeviationWalkthrough({ locale }: { locale: Locale }) {
  const values = [2, 4, 4, 4, 5, 5, 7, 9];
  const mean = values.reduce((a, b) => a + b, 0) / values.length;
  const deviations = values.map((v) => v - mean);
  const squares = deviations.map((d) => d * d);
  const variance = squares.reduce((a, b) => a + b, 0) / squares.length;
  const std = Math.sqrt(variance);

  return (
    <div>
      <p className="text-[9px] tracking-brand uppercase text-muted font-sans mb-3 text-center">
        {locale === 'he' ? 'דוגמה להמחשה — לא המספרים המילוליים של המצגת' : "Illustrative Example — Not the Deck's Literal Numbers"}
      </p>
      <div className="overflow-x-auto">
        <table className="w-full text-xs border-collapse">
          <thead>
            <tr className="border-b border-ink">
              <th className="text-start py-1.5 pe-3 font-sans text-[9px] tracking-brand uppercase text-accent">
                {locale === 'he' ? 'ערך' : 'Value'}
              </th>
              {values.map((_, i) => (
                <th key={i} className="text-center py-1.5 px-1.5 font-mono font-normal">{values[i]}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-rule">
              <td className="py-1.5 pe-3 font-sans text-[9px] tracking-brand uppercase text-muted">
                {locale === 'he' ? 'סטייה מהממוצע' : 'Deviation from mean'}
              </td>
              {deviations.map((d, i) => (
                <td key={i} className="text-center py-1.5 px-1.5 font-mono text-muted">{d > 0 ? `+${d}` : d}</td>
              ))}
            </tr>
            <tr>
              <td className="py-1.5 pe-3 font-sans text-[9px] tracking-brand uppercase text-accent">
                {locale === 'he' ? 'סטייה בריבוע' : 'Squared deviation'}
              </td>
              {squares.map((s, i) => (
                <td key={i} className="text-center py-1.5 px-1.5 font-mono">{s}</td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex flex-wrap justify-center gap-3 mt-4">
        <div className="border border-rule px-4 py-2 text-center">
          <div className="text-[9px] tracking-brand uppercase text-muted font-sans">{locale === 'he' ? 'ממוצע' : 'Mean'}</div>
          <div className="font-mono text-sm">{mean.toFixed(2)}</div>
        </div>
        <div className="border border-rule px-4 py-2 text-center">
          <div className="text-[9px] tracking-brand uppercase text-muted font-sans">{locale === 'he' ? 'שונות (ממוצע הריבועים)' : 'Variance (avg of squares)'}</div>
          <div className="font-mono text-sm">{variance.toFixed(2)}</div>
        </div>
        <div className="border-2 border-accent px-4 py-2 text-center">
          <div className="text-[9px] tracking-brand uppercase text-accent font-sans font-semibold">σ — {locale === 'he' ? 'סטיית תקן' : 'Standard Deviation'}</div>
          <div className="font-mono text-sm text-accent">{std.toFixed(2)}</div>
        </div>
      </div>
      <p className="text-[10px] italic text-muted text-center mt-3 max-w-md mx-auto">
        {locale === 'he'
          ? '"כל ריבוע אדום הוא שגיאה בריבוע. השונות היא הממוצע שלהם; σ הוא השורש שלה, באותן יחידות כמו הנתונים." — משקף 19'
          : '"Each red square is a squared error. Variance = their average; σ is its square root, in the same units as the data." — slide 19'}
      </p>
    </div>
  );
}

export function StandardDeviationDiagram({ locale }: { locale: Locale }) {
  return (
    <div className="grid gap-6">
      <DispersionComparison locale={locale} />
      <DeviationWalkthrough locale={locale} />
    </div>
  );
}

// The real Titanic-ages histogram from the Practical Statistics deck (slide 22, "Frequency
// Tables & Histograms") — exact frequency table and caption, redrawn as CSS bars in place of
// the deck's own canvas chart.
const titanicAgeBins = [
  { range: '0–10', freq: 76, pct: 8.4 },
  { range: '11–20', freq: 123, pct: 13.7 },
  { range: '21–30', freq: 285, pct: 31.7 },
  { range: '31–40', freq: 187, pct: 20.8 },
  { range: '41–50', freq: 121, pct: 13.5 },
  { range: '51–60', freq: 67, pct: 7.4 },
  { range: '61+', freq: 39, pct: 4.3 },
];

export function HistogramDiagram({ locale }: { locale: Locale }) {
  const max = Math.max(...titanicAgeBins.map((b) => b.freq));
  return (
    <div>
      <p className="text-[9px] tracking-brand uppercase text-muted font-sans mb-3 text-center">
        {locale === 'he' ? 'גילאי נוסעי הטיטאניק — היסטוגרמה · משקף 22' : 'Titanic ages — histogram · slide 22'}
      </p>
      <div className="flex items-end justify-center gap-2 sm:gap-3 h-40 border-b border-rule px-2">
        {titanicAgeBins.map((b) => (
          <div key={b.range} className="flex flex-col items-center flex-1 h-full justify-end">
            <span className="text-[9px] font-mono text-accent mb-1">{b.freq}</span>
            <div
              className="w-full bg-accent"
              style={{ height: `${(b.freq / max) * 100}%` }}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-2 sm:gap-3 px-2 mt-1.5">
        {titanicAgeBins.map((b) => (
          <div key={b.range} className="flex-1 text-center">
            <div className="text-[9px] font-mono">{b.range}</div>
            <div className="text-[8px] text-muted">{b.pct}%</div>
          </div>
        ))}
      </div>
      <p className="text-[10px] italic text-muted text-center mt-4 max-w-md mx-auto">
        {locale === 'he'
          ? '"רוב הנוסעים היו בגילאי 21–40." — משקף 22'
          : '"Most passengers were 21–40." — slide 22'}
      </p>
    </div>
  );
}

// The real "causes of flight delays at Dallas/Fort Worth" bar chart from the Practical
// Statistics deck (slide 24, "Bar Charts for Categories") — exact category shares.
const flightDelayCauses = [
  { causeEn: 'Late inbound', causeHe: 'הגעה מאוחרת', pct: 38 },
  { causeEn: 'Carrier', causeHe: 'חברת תעופה', pct: 27 },
  { causeEn: 'ATC system', causeHe: 'מערכת בקרת טיסה', pct: 22 },
  { causeEn: 'Weather', causeHe: 'מזג אוויר', pct: 11 },
  { causeEn: 'Security', causeHe: 'ביטחון', pct: 2 },
];

export function BarChartDiagram({ locale }: { locale: Locale }) {
  const max = 40;
  return (
    <div>
      <p className="text-[9px] tracking-brand uppercase text-muted font-sans mb-3 text-center">
        {locale === 'he' ? 'עיכובי טיסות בדאלאס/פורט וורת׳ לפי סיבה — משקף 24' : 'Delayed flights by cause, Dallas/Fort Worth — slide 24'}
      </p>
      <div className="flex items-end justify-center gap-3 sm:gap-4 h-40 border-b border-rule px-2">
        {flightDelayCauses.map((d) => (
          <div key={d.causeEn} className="flex flex-col items-center flex-1 h-full justify-end">
            <span className="text-[9px] font-mono text-accent mb-1">{d.pct}%</span>
            <div
              className="w-full bg-accent"
              style={{ height: `${(d.pct / max) * 100}%` }}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-3 sm:gap-4 px-2 mt-1.5">
        {flightDelayCauses.map((d) => (
          <div key={d.causeEn} className="flex-1 text-center">
            <div className="text-[8px] leading-tight">{locale === 'he' ? d.causeHe : d.causeEn}</div>
          </div>
        ))}
      </div>
      <p className="text-[10px] italic text-muted text-center mt-4 max-w-md mx-auto">
        {locale === 'he'
          ? '"עמודות גדלות בכניסה. רחפו כדי לראות את החלק המדויק של העיכובים שמיוחס לכל סיבה." — משקף 24'
          : '"Bars grow on entry. Hover for the exact share of delays attributed to each cause." — slide 24'}
      </p>
    </div>
  );
}
