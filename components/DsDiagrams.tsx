import { Fragment } from 'react';
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

// The real "anatomy of a boxplot" worked example from the Practical Statistics deck (slide 29,
// "Reading a Boxplot") — its own five-number summary and outlier, redrawn as a horizontal
// number-line boxplot in place of the deck's canvas demo.
const boxplotAnatomy = { lo: 10, hi: 84, min: 16, q1: 22, median: 28, q3: 41, max: 64, outlier: 79 };

export function BoxplotDiagram({ locale }: { locale: Locale }) {
  const { lo, hi, min, q1, median, q3, max, outlier } = boxplotAnatomy;
  const pct = (v: number) => ((v - lo) / (hi - lo)) * 100;
  return (
    <div>
      <p className="text-[9px] tracking-brand uppercase text-muted font-sans mb-3 text-center">
        {locale === 'he' ? 'אנטומיה של boxplot — משקף 29' : 'Anatomy of a boxplot — slide 29'}
      </p>
      <div className="relative w-full h-16 mx-auto max-w-md">
        {/* whiskers */}
        <div
          className="absolute top-1/2 h-px bg-ink -translate-y-1/2"
          style={{ left: `${pct(min)}%`, width: `${pct(q1) - pct(min)}%` }}
        />
        <div
          className="absolute top-1/2 h-px bg-ink -translate-y-1/2"
          style={{ left: `${pct(q3)}%`, width: `${pct(max) - pct(q3)}%` }}
        />
        {[min, max].map((v) => (
          <div key={v} className="absolute top-1/4 h-1/2 w-px bg-ink" style={{ left: `${pct(v)}%` }} />
        ))}
        {/* box */}
        <div
          className="absolute top-1/4 h-1/2 bg-accent/10 border-2 border-ink"
          style={{ left: `${pct(q1)}%`, width: `${pct(q3) - pct(q1)}%` }}
        />
        {/* median */}
        <div className="absolute top-1/4 h-1/2 w-0.5 bg-accent" style={{ left: `${pct(median)}%` }} />
        {/* outlier */}
        <div
          className="absolute top-1/2 w-2 h-2 rounded-full bg-accent -translate-y-1/2 -translate-x-1/2"
          style={{ left: `${pct(outlier)}%` }}
        />
        {/* labels */}
        <div className="absolute top-full mt-1 text-[8px] font-mono -translate-x-1/2" style={{ left: `${pct(min)}%` }}>min</div>
        <div className="absolute top-full mt-1 text-[8px] font-mono -translate-x-1/2" style={{ left: `${pct(q1)}%` }}>Q1</div>
        <div className="absolute top-full mt-1 text-[8px] font-mono text-accent -translate-x-1/2" style={{ left: `${pct(median)}%` }}>median</div>
        <div className="absolute top-full mt-1 text-[8px] font-mono -translate-x-1/2" style={{ left: `${pct(q3)}%` }}>Q3</div>
        <div className="absolute top-full mt-1 text-[8px] font-mono -translate-x-1/2" style={{ left: `${pct(max)}%` }}>max</div>
        <div className="absolute top-full mt-1 text-[8px] font-mono text-accent -translate-x-1/2" style={{ left: `${pct(outlier)}%` }}>
          {locale === 'he' ? 'חריג' : 'outlier'}
        </div>
      </div>
      <p className="text-[10px] italic text-muted text-center mt-8 max-w-md mx-auto">
        {locale === 'he'
          ? '"boxplots דוחסים התפלגות שלמה לחמישה מספרים — מושלם לאיתור מהיר של פיזור וחריגים." — משקף 29'
          : '"Boxplots compress a whole distribution into five numbers — perfect for spotting spread and outliers fast." — slide 29'}
      </p>
    </div>
  );
}

// The real daily-return correlation matrix for telecom stocks (2012–2015) from the Practical
// Statistics deck (slide 26, "A Matrix of Relationships") — exact tickers and values.
const correlationTickers = ['VZ', 'T', 'LVLT', 'CTL', 'FTR'];
const correlationMatrix = [
  [1, 0.79, 0.3, 0.42, 0.38],
  [0.79, 1, 0.28, 0.4, 0.36],
  [0.3, 0.28, 1, 0.34, 0.33],
  [0.42, 0.4, 0.34, 1, 0.55],
  [0.38, 0.36, 0.33, 0.55, 1],
];

export function CorrelationMatrixDiagram({ locale }: { locale: Locale }) {
  return (
    <div>
      <p className="text-[9px] tracking-brand uppercase text-muted font-sans mb-3 text-center">
        {locale === 'he' ? 'מתאמי תשואה יומיים — מניות טלקום (2012–2015) · משקף 26' : 'Daily-return correlations — telecom stocks (2012–2015) · slide 26'}
      </p>
      <div className="overflow-x-auto">
        <div className="inline-grid mx-auto" style={{ gridTemplateColumns: `repeat(${correlationTickers.length + 1}, minmax(2.5rem, 1fr))` }}>
          <div />
          {correlationTickers.map((t) => (
            <div key={t} className="text-[9px] font-mono text-center py-1 text-muted">{t}</div>
          ))}
          {correlationMatrix.map((row, i) => (
            <Fragment key={`row-${correlationTickers[i]}`}>
              <div className="text-[9px] font-mono flex items-center justify-end pe-2 text-muted">{correlationTickers[i]}</div>
              {row.map((v, j) => (
                <div
                  key={`${i}-${j}`}
                  className="text-[10px] font-mono text-center py-2 border border-paper"
                  style={{ backgroundColor: `rgba(139,42,42,${v})`, color: v > 0.55 ? '#faf8f3' : '#1a1a1a' }}
                >
                  {v.toFixed(2)}
                </div>
              ))}
            </Fragment>
          ))}
        </div>
      </div>
      <p className="text-[10px] italic text-muted text-center mt-4 max-w-md mx-auto">
        {locale === 'he'
          ? '"VZ ו-T נעות יחד הכי הרבה; חברת התשתית LVLT הכי פחות. אלכסון = 1 (מניה מול עצמה)." — משקף 26'
          : '"VZ and T move together most; infrastructure firm LVLT least. Diagonal = 1 (a stock with itself)." — slide 26'}
      </p>
    </div>
  );
}

// An illustrative single-linkage agglomerative merge tree (not the deck's literal points — the
// deck's own dendrogram demo (slide 14) regenerates a fresh random dataset on every "New data"
// click) — the merge structure follows the same real algorithm: closest pair merges first,
// working up to one root.
export function DendrogramDiagram({ locale }: { locale: Locale }) {
  const leaves = [
    { label: 'A', x: 40 },
    { label: 'B', x: 90 },
    { label: 'C', x: 140 },
    { label: 'D', x: 220 },
    { label: 'E', x: 270 },
    { label: 'F', x: 320 },
  ];
  return (
    <div>
      <p className="text-[9px] tracking-brand uppercase text-muted font-sans mb-3 text-center">
        {locale === 'he'
          ? 'דוגמה להמחשה — לא הנתונים המילוליים של המצגת (ה-Demo שלה מייצר נקודות אקראיות חדשות בכל לחיצה)'
          : "Illustrative Example — Not the Deck's Literal Points (its own demo regenerates random data on every click)"}
      </p>
      <svg viewBox="0 0 360 120" className="w-full max-w-md mx-auto block">
        <g stroke="#1a1a1a" strokeWidth="1.5" fill="none">
          <line x1={40} y1={100} x2={40} y2={80} />
          <line x1={90} y1={100} x2={90} y2={80} />
          <line x1={40} y1={80} x2={90} y2={80} />
          <line x1={65} y1={80} x2={65} y2={60} />
          <line x1={140} y1={100} x2={140} y2={60} />
          <line x1={65} y1={60} x2={140} y2={60} />
          <line x1={102.5} y1={60} x2={102.5} y2={10} />

          <line x1={220} y1={100} x2={220} y2={80} />
          <line x1={270} y1={100} x2={270} y2={80} />
          <line x1={220} y1={80} x2={270} y2={80} />
          <line x1={245} y1={80} x2={245} y2={60} />
          <line x1={320} y1={100} x2={320} y2={60} />
          <line x1={245} y1={60} x2={320} y2={60} />
          <line x1={282.5} y1={60} x2={282.5} y2={10} />

          <line x1={102.5} y1={10} x2={282.5} y2={10} />
        </g>
        {leaves.map((l) => (
          <g key={l.label}>
            <circle cx={l.x} cy={100} r={4} fill="#8b2a2a" />
            <text x={l.x} y={114} textAnchor="middle" fontSize="9" fontFamily="monospace" fill="#1a1a1a">{l.label}</text>
          </g>
        ))}
      </svg>
      <p className="text-[10px] italic text-muted text-center mt-2 max-w-md mx-auto">
        {locale === 'he'
          ? 'clustering היררכי, קישור יחיד — הזוג הקרוב ביותר מתמזג ראשון, וממשיך כלפי מעלה עד לשורש אחד.'
          : 'Hierarchical clustering, single linkage — the closest pair merges first, working up to one root.'}
      </p>
    </div>
  );
}

// An illustrative elbow curve (K=1..8) anchored to the deck's own real scikit-learn output for
// K=4 (slide "K-Means in ten lines" code output: inertia 8.7, silhouette 0.859) — the deck's own
// elbow-method demo (slide 10) is interactive and regenerates random data, so the surrounding
// curve shape is illustrative, not literal.
const elbowInertias = [30, 18, 11, 8.7, 7.5, 6.8, 6.3, 6.0];

export function ElbowPlotDiagram({ locale }: { locale: Locale }) {
  const maxV = 32;
  const x = (k: number) => 20 + (k - 1) * 40;
  const y = (v: number) => 110 - (v / maxV) * 100;
  const points = elbowInertias.map((v, i) => `${x(i + 1)},${y(v)}`).join(' ');
  return (
    <div>
      <p className="text-[9px] tracking-brand uppercase text-muted font-sans mb-3 text-center">
        {locale === 'he'
          ? 'דוגמה להמחשה — לא הנתונים המילוליים של המצגת (ה-Demo שלה מייצר נתונים אקראיים חדשים)'
          : "Illustrative Example — Not the Deck's Literal Curve (its own elbow demo regenerates random data)"}
      </p>
      <svg viewBox="0 0 320 130" className="w-full max-w-md mx-auto block">
        <g stroke="#d4d0c8" strokeWidth="1">
          <line x1={20} y1={110} x2={300} y2={110} />
          <line x1={20} y1={10} x2={20} y2={110} />
        </g>
        <polyline points={points} fill="none" stroke="#8b2a2a" strokeWidth="2" />
        {elbowInertias.map((v, i) => (
          <circle key={i} cx={x(i + 1)} cy={y(v)} r={i === 3 ? 4.5 : 2.5} fill={i === 3 ? '#8b2a2a' : '#1a1a1a'} />
        ))}
        {elbowInertias.map((_, i) => (
          <text key={i} x={x(i + 1)} y={122} textAnchor="middle" fontSize="8" fontFamily="monospace" fill="#6b6b6b">{i + 1}</text>
        ))}
        <text x={x(4)} y={y(8.7) - 10} textAnchor="middle" fontSize="8" fontFamily="monospace" fill="#8b2a2a" fontWeight="bold">K=4</text>
      </svg>
      <p className="text-[10px] italic text-muted text-center mt-2 max-w-md mx-auto">
        {locale === 'he'
          ? 'הנקודה המודגשת (K=4) היא פלט אמיתי מריצת scikit-learn בקוד המצגת עצמה: inertia 8.7, silhouette 0.859.'
          : "The highlighted point (K=4) is a real scikit-learn run from the deck's own code slide: inertia 8.7, silhouette 0.859."}
      </p>
    </div>
  );
}

// The real "tumour blood test" confusion matrix from the Linear/Logistic Regression deck (slide
// 27, "The confusion matrix") — 100 people tested, 45 truly sick, 55 truly healthy.
export function ConfusionMatrixDiagram({ locale }: { locale: Locale }) {
  const cells = [
    { labelEn: 'TP', labelHe: 'TP', val: 41, good: true },
    { labelEn: 'FN', labelHe: 'FN', val: 4, good: false },
    { labelEn: 'FP', labelHe: 'FP', val: 12, good: false },
    { labelEn: 'TN', labelHe: 'TN', val: 43, good: true },
  ];
  return (
    <div>
      <p className="text-[9px] tracking-brand uppercase text-muted font-sans mb-3 text-center">
        {locale === 'he' ? 'בדיקת דם לגידול — 100 אנשים נבדקו · משקף 27' : 'Tumour blood test — 100 people tested · slide 27' }
      </p>
      <div className="grid grid-cols-[auto_1fr_1fr] gap-2 max-w-sm mx-auto text-center text-[9px] font-sans">
        <div />
        <div className="text-muted uppercase tracking-brand">{locale === 'he' ? 'חזוי: גידול' : 'Pred: Tumour'}</div>
        <div className="text-muted uppercase tracking-brand">{locale === 'he' ? 'חזוי: בריא' : 'Pred: Healthy'}</div>
        <div className="flex items-center justify-end pe-1 text-muted uppercase tracking-brand">{locale === 'he' ? 'חולה בפועל' : 'Actually sick'}</div>
        {[cells[0], cells[1]].map((c) => (
          <div key={c.labelEn} className={`border-2 py-3 ${c.good ? 'border-accent bg-accent/10' : 'border-rule bg-codebg/40'}`}>
            <div className="font-mono text-lg font-bold">{c.val}</div>
            <div className="text-[8px] tracking-brand uppercase">{c.labelEn}</div>
          </div>
        ))}
        <div className="flex items-center justify-end pe-1 text-muted uppercase tracking-brand">{locale === 'he' ? 'בריא בפועל' : 'Actually healthy'}</div>
        {[cells[2], cells[3]].map((c) => (
          <div key={c.labelEn} className={`border-2 py-3 ${c.good ? 'border-accent bg-accent/10' : 'border-rule bg-codebg/40'}`}>
            <div className="font-mono text-lg font-bold">{c.val}</div>
            <div className="text-[8px] tracking-brand uppercase">{c.labelEn}</div>
          </div>
        ))}
      </div>
      <p className="text-[10px] italic text-muted text-center mt-4 max-w-md mx-auto">
        {locale === 'he'
          ? '"כל מדד שלהלן הוא פשוט יחס בין ארבעת המספרים האלה. שליטה בתיבה = שליטה במדדים." — משקף 27'
          : '"Every metric ahead is just a ratio of these four numbers. Master the box, master the metrics." — slide 27'}
      </p>
    </div>
  );
}

// The real operating point (FPR ≈ 22%, TPR ≈ 91%) computed from the same tumour-test confusion
// matrix (slide 30), plotted against the Linear/Logistic Regression deck's own default AUC
// (slide 31, "ROC curve & AUC" — AUC = 0.910 at the demo's default settings).
export function RocCurveDiagram({ locale }: { locale: Locale }) {
  const fpr = 22, tpr = 91;
  const x = (v: number) => 20 + (v / 100) * 260;
  const y = (v: number) => 130 - (v / 100) * 110;
  return (
    <div>
      <p className="text-[9px] tracking-brand uppercase text-muted font-sans mb-3 text-center">
        {locale === 'he' ? 'עקומת ROC — נקודת תפעול אמיתית מדוגמת בדיקת הגידול · משקפים 30–31' : 'ROC curve — real operating point from the tumour-test example · slides 30–31'}
      </p>
      <svg viewBox="0 0 300 150" className="w-full max-w-md mx-auto block">
        <g stroke="#d4d0c8" strokeWidth="1">
          <line x1={20} y1={130} x2={280} y2={130} />
          <line x1={20} y1={20} x2={20} y2={130} />
        </g>
        <line x1={20} y1={130} x2={280} y2={20} stroke="#d4d0c8" strokeWidth="1" strokeDasharray="3,3" />
        <path d={`M20,130 Q${x(fpr)},${y(tpr) - 15} ${x(100)},${y(100)}`} fill="none" stroke="#8b2a2a" strokeWidth="2" />
        <circle cx={x(fpr)} cy={y(tpr)} r={4.5} fill="#8b2a2a" />
        <text x={x(fpr) + 8} y={y(tpr) - 6} fontSize="8" fontFamily="monospace" fill="#8b2a2a">FPR {fpr}%, TPR {tpr}%</text>
        <text x={20} y={144} fontSize="8" fontFamily="monospace" fill="#6b6b6b">0</text>
        <text x={272} y={144} fontSize="8" fontFamily="monospace" fill="#6b6b6b">100%</text>
        <text x={8} y={130} fontSize="8" fontFamily="monospace" fill="#6b6b6b">0</text>
        <text x={2} y={24} fontSize="8" fontFamily="monospace" fill="#6b6b6b">100%</text>
      </svg>
      <p className="text-[10px] italic text-muted text-center mt-2 max-w-md mx-auto">
        {locale === 'he'
          ? '"AUC = 1.0 מושלם · 0.5 = הטלת מטבע אקראית." — משקף 31. ברירת המחדל של ה-Demo במצגת: AUC = 0.910.'
          : '"AUC = 1.0 perfect · 0.5 = random coin-flip." — slide 31. The deck\'s own demo default: AUC = 0.910.'}
      </p>
    </div>
  );
}

// The real mean/median/mode ordering rule from the Practical Statistics deck's own skewness
// slide (23, "Morphing distribution") — the deck's demo is a live drag-to-morph canvas with no
// fixed dataset, so the three curve shapes below are schematic, but the mean/median/mode
// positions follow its own stated rule exactly.
const skewPanels = [
  {
    id: 'left',
    labelEn: 'Left-Skew',
    labelHe: 'הטיה שמאלה',
    path: 'M10,95 C30,92 60,90 90,75 C110,60 120,20 145,20 C170,20 170,90 190,90',
    marks: [
      { key: 'mean', x: 105 },
      { key: 'median', x: 125 },
      { key: 'mode', x: 148 },
    ],
  },
  {
    id: 'symmetric',
    labelEn: 'Symmetric',
    labelHe: 'סימטרי',
    path: 'M10,90 C40,90 70,20 100,20 C130,20 160,90 190,90',
    marks: [
      { key: 'mean', x: 100 },
      { key: 'median', x: 100 },
      { key: 'mode', x: 100 },
    ],
  },
  {
    id: 'right',
    labelEn: 'Right-Skew',
    labelHe: 'הטיה ימינה',
    path: 'M10,90 C30,90 30,20 55,20 C80,20 90,60 110,75 C140,92 170,95 190,95',
    marks: [
      { key: 'mode', x: 52 },
      { key: 'median', x: 75 },
      { key: 'mean', x: 95 },
    ],
  },
] as const;

const skewMarkColor: Record<string, string> = { mean: '#8b2a2a', median: '#1a1a1a', mode: '#6b6b6b' };

export function SkewnessDiagram({ locale }: { locale: Locale }) {
  return (
    <div>
      <p className="text-[9px] tracking-brand uppercase text-muted font-sans mb-3 text-center">
        {locale === 'he' ? 'התפלגות מורפית — משקף 23' : 'Morphing distribution — slide 23'}
      </p>
      <div className="grid sm:grid-cols-3 gap-4">
        {skewPanels.map((panel) => (
          <div key={panel.id} className="border border-rule p-3">
            <svg viewBox="0 0 200 100" className="w-full block">
              <path d={panel.path} fill="rgba(139,42,42,0.08)" stroke="#8b2a2a" strokeWidth="2" />
              {panel.marks.map((m) => (
                <line key={m.key} x1={m.x} y1={10} x2={m.x} y2={95} stroke={skewMarkColor[m.key]} strokeWidth="1.5" strokeDasharray={m.key === 'median' ? '0' : '3,2'} />
              ))}
            </svg>
            <p className="text-[10px] tracking-brand uppercase text-accent font-sans font-semibold text-center mt-2">
              {locale === 'he' ? panel.labelHe : panel.labelEn}
            </p>
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-4 mt-3 text-[9px] font-sans">
        <span className="flex items-center gap-1"><span className="w-2 h-2 inline-block" style={{ backgroundColor: skewMarkColor.mean }} />{locale === 'he' ? 'ממוצע' : 'Mean'}</span>
        <span className="flex items-center gap-1"><span className="w-2 h-2 inline-block" style={{ backgroundColor: skewMarkColor.median }} />{locale === 'he' ? 'חציון' : 'Median'}</span>
        <span className="flex items-center gap-1"><span className="w-2 h-2 inline-block" style={{ backgroundColor: skewMarkColor.mode }} />{locale === 'he' ? 'שכיח' : 'Mode'}</span>
      </div>
      <p className="text-[10px] italic text-muted text-center mt-4 max-w-md mx-auto">
        {locale === 'he'
          ? '"הטיה ימינה: ממוצע > חציון > שכיח (זנב ימני ארוך). הטיה שמאלה: ההפך. סימטרי: שלושתם חופפים." — משקף 23'
          : '"Right-skew: mean > median > mode (long right tail). Left-skew: the reverse. Symmetric: all three coincide." — slide 23'}
      </p>
    </div>
  );
}

// Reuses the real "anatomy of a boxplot" worked example from slide 29 (min 16, Q1 22, median 28,
// Q3 41, max 64, outlier 79) but through the IQR/outlier-fence lens: the deck's own rule is
// "whiskers reach 1.5×IQR; anything beyond is an outlier" — the fences and the real outlier both
// check out against that rule (79 sits past the upper fence at 69.5).
const iqrAnatomy = { lo: -10, hi: 85, q1: 22, q3: 41, outlier: 79 };

export function IqrDiagram({ locale }: { locale: Locale }) {
  const { lo, hi, q1, q3, outlier } = iqrAnatomy;
  const iqr = q3 - q1;
  const lowerFence = q1 - 1.5 * iqr;
  const upperFence = q3 + 1.5 * iqr;
  const pct = (v: number) => ((v - lo) / (hi - lo)) * 100;
  return (
    <div>
      <p className="text-[9px] tracking-brand uppercase text-muted font-sans mb-3 text-center">
        {locale === 'he' ? 'IQR וגדרות חריגים — משקף 29' : 'IQR and outlier fences — slide 29'}
      </p>
      <div className="relative w-full h-16 mx-auto max-w-md">
        <div className="absolute top-1/2 h-px bg-rule -translate-y-1/2" style={{ left: '0%', width: '100%' }} />
        {/* IQR box */}
        <div
          className="absolute top-1/4 h-1/2 bg-accent/15 border-2 border-ink"
          style={{ left: `${pct(q1)}%`, width: `${pct(q3) - pct(q1)}%` }}
        />
        {/* fences */}
        {[lowerFence, upperFence].map((f) => (
          <div key={f} className="absolute top-1/4 h-1/2 w-px border-l border-dashed border-muted" style={{ left: `${pct(f)}%` }} />
        ))}
        {/* outlier */}
        <div
          className="absolute top-1/2 w-2 h-2 rounded-full bg-accent -translate-y-1/2 -translate-x-1/2"
          style={{ left: `${pct(outlier)}%` }}
        />
        {/* labels */}
        <div className="absolute top-full mt-1 text-[8px] font-mono -translate-x-1/2" style={{ left: `${pct(q1)}%` }}>Q1</div>
        <div className="absolute top-full mt-1 text-[8px] font-mono -translate-x-1/2" style={{ left: `${pct(q3)}%` }}>Q3</div>
        <div className="absolute top-full mt-1 text-[8px] font-mono text-muted -translate-x-1/2 whitespace-nowrap" style={{ left: `${pct(lowerFence)}%` }}>
          {locale === 'he' ? 'גדר תחתונה' : 'lower fence'}
        </div>
        <div className="absolute top-full mt-1 text-[8px] font-mono text-muted -translate-x-1/2 whitespace-nowrap" style={{ left: `${pct(upperFence)}%` }}>
          {locale === 'he' ? 'גדר עליונה' : 'upper fence'}
        </div>
        <div className="absolute top-full mt-4 text-[8px] font-mono text-accent -translate-x-1/2 whitespace-nowrap" style={{ left: `${pct(outlier)}%` }}>
          {locale === 'he' ? `חריג (${outlier})` : `outlier (${outlier})`}
        </div>
      </div>
      <p className="text-[10px] italic text-muted text-center mt-8 max-w-md mx-auto">
        {locale === 'he'
          ? `IQR = Q3 − Q1 = 41 − 22 = 19. גדרות ב-Q1 − 1.5×IQR (${lowerFence.toFixed(1)}) ו-Q3 + 1.5×IQR (${upperFence.toFixed(1)}) — כל מה שמעבר הוא חריג. "whiskers מגיעים ל-1.5×IQR; כל מה שמעבר הוא חריג." — משקף 29`
          : `IQR = Q3 − Q1 = 41 − 22 = 19. Fences sit at Q1 − 1.5×IQR (${lowerFence.toFixed(1)}) and Q3 + 1.5×IQR (${upperFence.toFixed(1)}) — anything beyond is an outlier. "Whiskers reach 1.5×IQR; anything beyond is an outlier." — slide 29`}
      </p>
    </div>
  );
}

// The real "bimodal U-curve" of online-review ratings from the Practical Statistics deck (slide
// 34, "Self-Selection Bias") — same curve shape and star labels as the deck's own illustration.
export function SelectionBiasDiagram({ locale }: { locale: Locale }) {
  return (
    <div>
      <p className="text-[9px] tracking-brand uppercase text-muted font-sans mb-3 text-center">
        {locale === 'he' ? 'ביקורות אונליין — עקומת U דו-שיאית · משקף 34' : 'Online reviews — bimodal "U-curve" · slide 34'}
      </p>
      <svg viewBox="0 0 450 200" className="w-full max-w-md mx-auto block">
        <line x1={40} y1={160} x2={410} y2={160} stroke="#d4d0c8" strokeWidth="1.5" />
        <line x1={40} y1={40} x2={40} y2={160} stroke="#d4d0c8" strokeWidth="1.5" />
        <path
          d="M 40,70 C 100,70 120,150 225,150 C 330,150 350,70 410,70 L 410,160 L 40,160 Z"
          fill="rgba(139,42,42,0.12)"
        />
        <path d="M 40,70 C 100,70 120,150 225,150 C 330,150 350,70 410,70" fill="none" stroke="#8b2a2a" strokeWidth="2.5" />
        <text x={50} y={178} fontSize="10" fontWeight="bold" fill="#8b2a2a" textAnchor="middle">1★</text>
        <text x={50} y={191} fontSize="8" fill="#6b6b6b" textAnchor="middle">{locale === 'he' ? 'חריגים זועמים' : 'Furious Outliers'}</text>
        <text x={225} y={178} fontSize="10" fontWeight="bold" fill="#6b6b6b" textAnchor="middle">3★</text>
        <text x={225} y={191} fontSize="8" fill="#6b6b6b" textAnchor="middle">{locale === 'he' ? 'הרוב השקט' : 'Silent Majority'}</text>
        <text x={400} y={178} fontSize="10" fontWeight="bold" fill="#8b2a2a" textAnchor="middle">5★</text>
        <text x={400} y={191} fontSize="8" fill="#6b6b6b" textAnchor="middle">{locale === 'he' ? 'חריגים נלהבים' : 'Ecstatic Outliers'}</text>
      </svg>
      <p className="text-[10px] italic text-muted text-center mt-2 max-w-md mx-auto">
        {locale === 'he'
          ? '"אנשים שמניע אותם לכתוב חוו חוויות יוצאות דופן (טובות או רעות) — המדגם שונה מהאוכלוסייה באופן משמעותי ולא-אקראי." — משקף 34'
          : '"People motivated to write may have had unusually poor (or good) experiences — the sample differs from the population in a meaningful, non-random way." — slide 34'}
      </p>
    </div>
  );
}

// The real 1936 Literary Digest vs. Gallup poll comparison from the Practical Statistics deck
// (slide 33, "Quantity ≠ Quality") — exact sample sizes, methods, and outcomes.
export function StratifiedSamplingDiagram({ locale }: { locale: Locale }) {
  const panels = [
    {
      id: 'digest',
      nameEn: 'Literary Digest',
      nameHe: 'Literary Digest',
      n: '10,000,000',
      methodEn: 'Phone / Auto Lists (Biased)',
      methodHe: 'רשימות טלפון/רכב (מוטות)',
      resultEn: '✗ Predicted Landon — 19.3% mismatch',
      resultHe: '✗ ניבא את Landon — פער של 19.3%',
      good: false,
    },
    {
      id: 'gallup',
      nameEn: 'George Gallup',
      nameHe: 'George Gallup',
      n: '2,000',
      methodEn: 'Random Stratified Sample',
      methodHe: 'מדגם אקראי מדורג',
      resultEn: '✓ Predicted Roosevelt — correct',
      resultHe: '✓ ניבא את Roosevelt — נכון',
      good: true,
    },
  ];
  return (
    <div>
      <p className="text-[9px] tracking-brand uppercase text-muted font-sans mb-3 text-center">
        {locale === 'he' ? 'בחירות 1936 — Literary Digest מול Gallup · משקף 33' : '1936 Election — Literary Digest vs. Gallup · slide 33'}
      </p>
      <div className="grid sm:grid-cols-2 gap-4">
        {panels.map((p) => (
          <div key={p.id} className={`border-2 p-4 text-center ${p.good ? 'border-accent' : 'border-rule'}`}>
            <div className="text-[10px] tracking-brand uppercase text-accent font-sans font-semibold mb-1">
              {locale === 'he' ? p.nameHe : p.nameEn}
            </div>
            <div className="font-mono text-2xl font-bold">{p.n}</div>
            <div className="text-[9px] text-muted mt-1">{locale === 'he' ? p.methodHe : p.methodEn}</div>
            <div className={`text-[10px] font-sans font-semibold mt-3 ${p.good ? 'text-accent' : 'text-muted'}`}>
              {locale === 'he' ? p.resultHe : p.resultEn}
            </div>
          </div>
        ))}
      </div>
      <p className="text-[10px] italic text-muted text-center mt-4 max-w-md mx-auto">
        {locale === 'he'
          ? '"ה-Digest רדף אחרי הגודל והתעלם מהבחירה — המקרה הקלאסי של הטיית מדגם." — משקף 33'
          : '"The Digest chased size and ignored selection — the textbook case of sample bias." — slide 33'}
      </p>
    </div>
  );
}

// z-score reuses the same worked example already established for Standard Deviation on this
// page (values 2,4,4,4,5,5,7,9 — illustrative, not the deck's literal numbers) since the
// Linear/Logistic Regression deck names z-scores only as a one-line outlier-detection method
// ("Detect with boxplots / z-scores / IQR" — slide 18) with no worked example of its own.
const zScoreValues = [2, 4, 4, 4, 5, 5, 7, 9];

export function ZScoreDiagram({ locale }: { locale: Locale }) {
  const mean = zScoreValues.reduce((a, b) => a + b, 0) / zScoreValues.length;
  const variance = zScoreValues.reduce((a, b) => a + (b - mean) ** 2, 0) / zScoreValues.length;
  const std = Math.sqrt(variance);
  const zScores = zScoreValues.map((v) => (v - mean) / std);
  return (
    <div>
      <p className="text-[9px] tracking-brand uppercase text-muted font-sans mb-3 text-center">
        {locale === 'he' ? 'דוגמה להמחשה — לא הנתונים המילוליים של המצגת' : "Illustrative Example — Not the Deck's Literal Numbers"}
      </p>
      <div className="overflow-x-auto">
        <table className="w-full text-xs border-collapse">
          <thead>
            <tr className="border-b border-ink">
              <th className="text-start py-1.5 pe-3 font-sans text-[9px] tracking-brand uppercase text-accent">{locale === 'he' ? 'ערך' : 'Value'}</th>
              {zScoreValues.map((v, i) => (
                <th key={i} className="text-center py-1.5 px-1.5 font-mono font-normal">{v}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-1.5 pe-3 font-sans text-[9px] tracking-brand uppercase text-accent">z = (x − x̄) / σ</td>
              {zScores.map((z, i) => (
                <td key={i} className={`text-center py-1.5 px-1.5 font-mono ${Math.abs(z) >= 2 ? 'text-accent font-bold' : ''}`}>{z.toFixed(2)}</td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-[10px] italic text-muted text-center mt-4 max-w-md mx-auto">
        {locale === 'he'
          ? `ממוצע = ${mean.toFixed(2)}, σ = ${std.toFixed(2)}. כלל אצבע נפוץ: |z| ≥ 2 מסומן כחריג — הערך 9 (מודגש) בדיוק בגבול. "נקודה קיצונית אחת יכולה למשוך קו רגרסיה. אתרו עם boxplots / z-scores / IQR." — משקף 18`
          : `Mean = ${mean.toFixed(2)}, σ = ${std.toFixed(2)}. A common rule of thumb flags |z| ≥ 2 as an outlier — the value 9 (bold) sits right at that line. "A single extreme point can yank a regression line. Detect with boxplots / z-scores / IQR." — slide 18`}
      </p>
    </div>
  );
}
