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
