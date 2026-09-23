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

// The real US-state-population worked example from the Practical Statistics deck (slide 17,
// "Population & Murder Rates," 2010 Census) — exact sample rows and the deck's own computed
// Full Mean / Trimmed Mean (10%) / Median across all 50 states.
const trimmedMeanStates = [
  { state: 'Alabama', pop: 4779736 },
  { state: 'Alaska', pop: 710231 },
  { state: 'Arizona', pop: 6392017 },
  { state: 'California', pop: 37253956 },
  { state: 'Colorado', pop: 5029196 },
];

export function TrimmedMeanDiagram({ locale }: { locale: Locale }) {
  const stats = [
    { key: 'mean', labelEn: 'Full Mean', labelHe: 'ממוצע מלא', v: 6162876 },
    { key: 'trimmed', labelEn: 'Trimmed Mean (10%)', labelHe: 'ממוצע מקוצץ (10%)', v: 4783697 },
    { key: 'median', labelEn: 'Median', labelHe: 'חציון', v: 4436370 },
  ];
  return (
    <div>
      <p className="text-[9px] tracking-brand uppercase text-muted font-sans mb-3 text-center">
        {locale === 'he' ? 'אוכלוסיית מדינות ארה"ב — מפקד 2010 · משקף 17' : 'US state populations — 2010 Census · slide 17' }
      </p>
      <div className="overflow-x-auto mb-4">
        <table className="w-full text-xs border-collapse max-w-sm mx-auto">
          <thead>
            <tr className="border-b border-ink">
              <th className="text-start py-1 font-sans text-[9px] tracking-brand uppercase text-accent">{locale === 'he' ? 'מדינה' : 'State'}</th>
              <th className="text-end py-1 font-sans text-[9px] tracking-brand uppercase text-accent">{locale === 'he' ? 'אוכלוסייה' : 'Population'}</th>
            </tr>
          </thead>
          <tbody>
            {trimmedMeanStates.map((s) => (
              <tr key={s.state} className="border-b border-rule">
                <td className="py-1 font-mono">{s.state}</td>
                <td className="py-1 font-mono text-end">{s.pop.toLocaleString()}{s.state === 'California' && (locale === 'he' ? ' ← חריג' : ' ← outlier')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex flex-wrap justify-center gap-3">
        {stats.map((s) => (
          <div key={s.key} className={`border px-4 py-2 text-center ${s.key === 'trimmed' ? 'border-2 border-accent' : 'border-rule'}`}>
            <div className={`text-[9px] tracking-brand uppercase font-sans ${s.key === 'trimmed' ? 'text-accent font-semibold' : 'text-muted'}`}>
              {locale === 'he' ? s.labelHe : s.labelEn}
            </div>
            <div className="font-mono text-sm">{s.v.toLocaleString()}</div>
          </div>
        ))}
      </div>
      <p className="text-[10px] italic text-muted text-center mt-4 max-w-md mx-auto">
        {locale === 'he'
          ? '"ממוצע > מקוצץ > חציון ⟶ התפלגות מוטה חיובית." — משקף 17. קליפורניה, כחריגה, מושכת את הממוצע המלא כלפי מעלה; הקיצוץ מרחיק אותה.'
          : '"Mean > Trimmed > Median ⟶ a positively skewed distribution." — slide 17. California, as the outlier, pulls the full mean upward; trimming pulls it back out.'}
      </p>
    </div>
  );
}

// An illustrative sequential-weighting diagram matching the Ensemble Models deck's own real
// algorithm description (slide 16, "Boosting: learn from your mistakes, in order") — the deck's
// own gradient-boosting demo (slide 18) is a live canvas fit to a randomly generated U-shape, so
// the dot positions here are schematic, but the growing-weight structure follows its exact steps.
const boostingRounds = [
  { round: 1, weights: [1, 1, 2, 1, 1, 1] },
  { round: 2, weights: [1, 1, 4, 1, 2.5, 1] },
  { round: 3, weights: [1, 1, 6, 1, 4, 1] },
];

export function BoostingDiagram({ locale }: { locale: Locale }) {
  const xs = [20, 55, 90, 125, 160, 195];
  return (
    <div>
      <p className="text-[9px] tracking-brand uppercase text-muted font-sans mb-3 text-center">
        {locale === 'he'
          ? 'דוגמה להמחשה — מבנה תואם לאלגוריתם עצמו (ה-Demo של המצגת מתאים ל-U-shape אקראי) · משקף 16'
          : "Illustrative Example — Matches the Algorithm's Own Structure (the deck's own demo fits a random U-shape) · slide 16"}
      </p>
      <div className="grid sm:grid-cols-4 gap-3 items-center">
        {boostingRounds.map((r) => (
          <div key={r.round} className="border border-rule p-3">
            <svg viewBox="0 0 220 50" className="w-full block">
              <line x1={10} y1={40} x2={210} y2={40} stroke="#d4d0c8" strokeWidth="1" />
              {xs.map((x, i) => (
                <circle key={i} cx={x} cy={40} r={4 * Math.sqrt(r.weights[i])} fill={r.weights[i] > 1.5 ? '#8b2a2a' : '#1a1a1a'} opacity={r.weights[i] > 1.5 ? 0.85 : 0.5} />
              ))}
            </svg>
            <p className="text-[9px] tracking-brand uppercase text-accent font-sans font-semibold text-center mt-1">
              {locale === 'he' ? `סבב ${r.round}` : `Round ${r.round}`}
            </p>
          </div>
        ))}
        <div className="border-2 border-accent p-3 text-center">
          <div className="text-lg">Σ</div>
          <p className="text-[9px] tracking-brand uppercase text-accent font-sans font-semibold">
            {locale === 'he' ? 'סכום משוקלל' : 'Weighted Sum'}
          </p>
        </div>
      </div>
      <p className="text-[10px] italic text-muted text-center mt-4 max-w-md mx-auto">
        {locale === 'he'
          ? '"מתחילים במודל חלש אחד. כל מודל חדש מתקן את הטעויות של קודמיו. דוגמאות קשות (בעיגול אדום גדל) מקבלות משקל גבוה יותר בסבב הבא. המודל הסופי הוא סכום משוקלל של כל הרצף." — משקף 16'
          : '"Start with one simple, weak model. Each new model corrects the errors of the models before it. Hard examples (growing red circles) get more weight in the next round. The final model is a weighted sum of the whole sequence." — slide 16'}
      </p>
    </div>
  );
}

// The real decision-tree worked example from the Ensemble Models deck (slide 8: age < 55? → No
// predicts $153; Yes → travel time < 1hr? → Yes predicts $20, else $87) shown twice — once as
// trained, once with the age answer flipped — to demonstrate the deck's own real instability
// quote from slide 9: "flip one attribute and the whole verdict can change."
export function BiasVarianceDiagram({ locale }: { locale: Locale }) {
  const panels = [
    { id: 'before', labelEn: 'Original', labelHe: 'מקורי', ageUnder55: true, travelUnder1hr: true, result: '$20' },
    { id: 'after', labelEn: 'One Attribute Flipped', labelHe: 'תכונה אחת הפוכה', ageUnder55: false, travelUnder1hr: true, result: '$153' },
  ];
  return (
    <div>
      <p className="text-[9px] tracking-brand uppercase text-muted font-sans mb-3 text-center">
        {locale === 'he' ? 'עץ החלטה — "האם הלקוח מתחת לגיל 55?" · משקפים 8–9' : 'Decision tree — "Is the customer under 55?" · slides 8–9'}
      </p>
      <div className="grid sm:grid-cols-2 gap-4">
        {panels.map((p) => (
          <div key={p.id} className="border border-rule p-3 text-center">
            <p className="text-[10px] tracking-brand uppercase text-accent font-sans font-semibold mb-2">{locale === 'he' ? p.labelHe : p.labelEn}</p>
            <div className="text-[10px] font-mono space-y-1">
              <div>{locale === 'he' ? 'גיל < 55?' : 'age < 55?'} <span className={p.ageUnder55 ? 'text-accent font-bold' : 'font-bold'}>{p.ageUnder55 ? 'Yes' : 'No'}</span></div>
              {p.ageUnder55 && (
                <div>{locale === 'he' ? 'זמן נסיעה < שעה?' : 'travel time < 1hr?'} <span className="text-accent font-bold">{p.travelUnder1hr ? 'Yes' : 'No'}</span></div>
              )}
            </div>
            <div className="mt-3 border-t border-dashed border-rule pt-2">
              <span className="font-mono text-lg font-bold text-accent">{p.result}</span>
            </div>
          </div>
        ))}
      </div>
      <p className="text-[10px] italic text-muted text-center mt-4 max-w-md mx-auto">
        {locale === 'he'
          ? '"הנתיב שלו שקוף — אבל הפוך תכונה אחת והפסק כולו יכול להשתנות, מה שהופך עצים בודדים ללא יציבים." — משקף 9. שינוי בתכונה אחת בלבד קפץ את התחזית מ-$20 ל-$153.'
          : '"Its path is transparent — but flip one attribute and the whole verdict can change, which makes single trees unstable." — slide 9. Flipping a single attribute jumps the prediction from $20 to $153.'}
      </p>
    </div>
  );
}

// The real bagging steps and demo description from the Ensemble Models deck (slide 11, "Bagging:
// resample, train, average" + slide 12's live demo, "thin grey line is a shallow tree... the red
// line is their average") — the demo itself fits to randomly regenerated data, so this redraws
// the same structure (many jagged trees averaging into one smooth curve) schematically.
export function BaggingDiagram({ locale }: { locale: Locale }) {
  const jagged = [
    'M10,60 L30,30 L50,50 L70,20 L90,45 L110,15 L130,40',
    'M10,55 L30,45 L50,20 L70,50 L90,25 L110,48 L130,22',
    'M10,45 L30,55 L50,35 L70,30 L90,55 L110,25 L130,45',
  ];
  const average = 'M10,53 L30,43 L50,35 L70,33 L90,42 L110,29 L130,36';
  return (
    <div>
      <p className="text-[9px] tracking-brand uppercase text-muted font-sans mb-3 text-center">
        {locale === 'he'
          ? 'דוגמה להמחשה — מבנה תואם לדוגמת ה-Demo של המצגת (עצים על מדגמי bootstrap אקראיים) · משקפים 11–12'
          : "Illustrative Example — Matches the Deck's Own Demo Structure (trees on random bootstrap resamples) · slides 11–12"}
      </p>
      <svg viewBox="0 0 140 75" className="w-full max-w-xs mx-auto block">
        {jagged.map((d, i) => (
          <path key={i} d={d} fill="none" stroke="#6b6b6b" strokeWidth="1" opacity="0.55" />
        ))}
        <path d={average} fill="none" stroke="#8b2a2a" strokeWidth="2.5" />
      </svg>
      <div className="flex justify-center gap-4 mt-2 text-[9px] font-sans">
        <span className="flex items-center gap-1"><span className="w-3 h-0.5 bg-muted inline-block" />{locale === 'he' ? 'עץ בודד על bootstrap' : 'single bootstrap tree'}</span>
        <span className="flex items-center gap-1"><span className="w-3 h-0.5 bg-accent inline-block" />{locale === 'he' ? 'ממוצע' : 'average'}</span>
      </div>
      <p className="text-[10px] italic text-muted text-center mt-4 max-w-md mx-auto">
        {locale === 'he'
          ? '"כל קו אפור דק הוא עץ רדוד שאומן על מדגם bootstrap אחד — משונן ולא יציב בפני עצמו. הקו האדום הוא הממוצע שלהם." — משקף 12'
          : '"Each thin grey line is a shallow tree trained on one bootstrap resample — jagged and unstable on its own. The red line is their average." — slide 12'}
      </p>
    </div>
  );
}

// The real Random Forest flow diagram from the Ensemble Models deck (slide 13) — exact labels:
// Dataset → Tree 1/Tree 2/Tree N (each with its own Result) → Majority Vote / Average → Final
// result — with each box drawn as an actual branching decision tree. The deck's own random-forest
// demo (slide 14) is a live 2-class canvas with randomly generated points, so the specific split
// features below are illustrative — but they follow its real point exactly: each tree considers a
// different random subset of features, so they disagree, and the vote breaks the tie.
const forestTrees = [
  { id: 1, featureEn: 'age < 40?', featureHe: 'גיל < 40?', leafA: 'A', leafB: 'B', vote: 'A' as const },
  { id: 2, featureEn: 'income < 60k?', featureHe: 'הכנסה < 60k?', leafA: 'A', leafB: 'B', vote: 'A' as const },
  { id: 'N', featureEn: 'region = urban?', featureHe: 'אזור = עירוני?', leafA: 'B', leafB: 'A', vote: 'B' as const },
];
const forestLeafColor: Record<'A' | 'B', string> = { A: '#8b2a2a', B: '#1a1a1a' };

function MiniDecisionTree({ tree, locale }: { tree: (typeof forestTrees)[number]; locale: Locale }) {
  return (
    <div className="border border-rule px-2 py-2 text-center">
      <div className="text-[8px] tracking-brand uppercase text-accent font-sans font-semibold mb-1">
        {locale === 'he' ? `עץ ${tree.id}` : `Tree ${tree.id}`}
      </div>
      <svg viewBox="0 0 90 62" className="w-full max-w-[90px] mx-auto block">
        <g stroke="#1a1a1a" strokeWidth="1.2">
          <line x1={45} y1={14} x2={20} y2={38} />
          <line x1={45} y1={14} x2={70} y2={38} />
        </g>
        <text x={45} y={10} textAnchor="middle" fontSize="7.5" fontFamily="monospace" fill="#1a1a1a">
          {locale === 'he' ? tree.featureHe : tree.featureEn}
        </text>
        <circle cx={20} cy={44} r={7} fill={forestLeafColor[tree.leafA as 'A' | 'B']} />
        <text x={20} y={47} textAnchor="middle" fontSize="8" fontWeight="bold" fill="#faf8f3">{tree.leafA}</text>
        <circle cx={70} cy={44} r={7} fill={forestLeafColor[tree.leafB as 'A' | 'B']} />
        <text x={70} y={47} textAnchor="middle" fontSize="8" fontWeight="bold" fill="#faf8f3">{tree.leafB}</text>
      </svg>
      <div className="text-[8px] text-muted mt-1">
        {locale === 'he' ? `תוצאה: ${tree.vote}` : `Result: ${tree.vote}`}
      </div>
    </div>
  );
}

export function RandomForestDiagram({ locale }: { locale: Locale }) {
  return (
    <div>
      <p className="text-[9px] tracking-brand uppercase text-muted font-sans mb-3 text-center">
        {locale === 'he' ? 'Bagging + אקראיות תכונות — משקף 13' : 'Bagging + feature randomness — slide 13'}
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 flex-wrap">
        <div className="border-2 border-ink px-3 py-2 text-center text-[9px] font-sans font-semibold uppercase tracking-brand">
          {locale === 'he' ? 'מערך נתונים' : 'Dataset'}
        </div>
        <span className="text-accent hidden sm:inline">→</span>
        <div className="flex gap-2">
          {forestTrees.map((t) => (
            <MiniDecisionTree key={t.id} tree={t} locale={locale} />
          ))}
        </div>
        <span className="text-accent hidden sm:inline">→</span>
        <div className="border-2 border-accent px-3 py-2 text-center text-[9px] font-sans font-semibold uppercase tracking-brand text-accent">
          {locale === 'he' ? 'הצבעת רוב / ממוצע' : 'Majority Vote / Average'}
          <div className="mt-1 font-mono normal-case text-[10px]">2 A · 1 B → A</div>
        </div>
      </div>
      <p className="text-[10px] italic text-muted text-center mt-4 max-w-md mx-auto">
        {locale === 'he'
          ? '"יער אקראי הוא bagging על עצי החלטה, עם תוספת אחת: בכל פיצול, כל עץ רשאי להתחשב רק בתת-קבוצה אקראית של תכונות." — משקף 13. מכיוון שכל עץ רואה תכונות שונות, הם לפעמים חלוקים — וההצבעה מכריעה.'
          : '"A Random Forest is bagging on decision trees, with one extra twist: at every split each tree may only consider a random subset of features." — slide 13. Because each tree sees different features, they sometimes disagree — the vote breaks the tie.'}
      </p>
    </div>
  );
}

// The real three-way XGBoost/LightGBM/CatBoost comparison from the Modern Boosters deck (slide
// 3, "How they build each tree") — exact era, origin, and description for each.
export function GradientBoostingXgboostDiagram({ locale }: { locale: Locale }) {
  const cols = [
    { name: 'XGBoost', era: '2014 · the baseline', eraHe: '2014 · הבסיס', descEn: 'Level-wise trees, pre-sorted splits. Rock-solid and widely supported.', descHe: 'עצים ברמה, פיצולים ממוינים-מראש. יציב ונתמך רחבות.' },
    { name: 'LightGBM', era: 'Microsoft · 2016', eraHe: 'מיקרוסופט · 2016', descEn: 'Histogram binning + leaf-wise growth. Built for speed and huge datasets.', descHe: 'חלוקה להיסטוגרמה + גדילה leaf-wise. בנוי למהירות ומערכי נתונים ענקיים.' },
    { name: 'CatBoost', era: 'Yandex · 2017', eraHe: 'יאנדקס · 2017', descEn: 'Ordered boosting + native categoricals. Built for categorical data with little tuning.', descHe: 'boosting מסודר + קטגוריאליות טבעית. בנוי לנתונים קטגוריאליים עם כוונון מועט.' },
  ];
  return (
    <div>
      <p className="text-[9px] tracking-brand uppercase text-muted font-sans mb-3 text-center">
        {locale === 'he' ? 'איך כל אחד בונה עץ — משקף 3' : 'How they build each tree — slide 3'}
      </p>
      <div className="grid sm:grid-cols-3 gap-3">
        {cols.map((c) => (
          <div key={c.name} className={`border p-3 text-center ${c.name === 'XGBoost' ? 'border-2 border-accent' : 'border-rule'}`}>
            <div className="text-[11px] font-mono font-bold">{c.name}</div>
            <div className="text-[8px] tracking-brand uppercase text-muted font-sans mt-0.5">{locale === 'he' ? c.eraHe : c.era}</div>
            <p className="text-[10px] leading-relaxed mt-2">{locale === 'he' ? c.descHe : c.descEn}</p>
          </div>
        ))}
      </div>
      <p className="text-[10px] italic text-muted text-center mt-4 max-w-md mx-auto">
        {locale === 'he'
          ? 'XGBoost הוא הייחוס — עצים ברמה עם פיצולים ממוינים-מראש — שאליו המצגת משווה את LightGBM ו-CatBoost. — משקף 3'
          : "XGBoost is the reference — level-wise trees with pre-sorted splits — that the deck compares LightGBM and CatBoost against. — slide 3"}
      </p>
    </div>
  );
}

// A level-wise (balanced) tree, drawn to the Modern Boosters deck's own real description (slide
// 11, "Level-wise vs. leaf-wise"): "grow the tree one full level at a time... produces a balanced,
// symmetric tree." The deck's own comparison is a live "press Grow" canvas demo, so exact node
// counts are illustrative — but the balanced-vs-lopsided shape contrast is the deck's real point.
function LevelWiseTree() {
  return (
    <svg viewBox="0 0 140 70" className="w-full max-w-[160px] mx-auto block">
      <g stroke="#1a1a1a" strokeWidth="1.2">
        <line x1={70} y1={10} x2={35} y2={30} />
        <line x1={70} y1={10} x2={105} y2={30} />
        <line x1={35} y1={30} x2={17} y2={52} />
        <line x1={35} y1={30} x2={53} y2={52} />
        <line x1={105} y1={30} x2={87} y2={52} />
        <line x1={105} y1={30} x2={123} y2={52} />
      </g>
      {[70].map((x) => <circle key={x} cx={x} cy={10} r={4} fill="#1a1a1a" />)}
      {[35, 105].map((x) => <circle key={x} cx={x} cy={30} r={4} fill="#1a1a1a" />)}
      {[17, 53, 87, 123].map((x) => <circle key={x} cx={x} cy={52} r={4} fill="#8b2a2a" />)}
    </svg>
  );
}

// A leaf-wise (unbalanced) tree, per the same slide 11: "split the single leaf that reduces error
// the most — some branches grow very deep while others stay shallow."
function LeafWiseTree() {
  return (
    <svg viewBox="0 0 140 70" className="w-full max-w-[160px] mx-auto block">
      <g stroke="#1a1a1a" strokeWidth="1.2">
        <line x1={40} y1={10} x2={20} y2={28} />
        <line x1={40} y1={10} x2={60} y2={28} />
        <line x1={20} y1={28} x2={12} y2={46} />
        <line x1={20} y1={28} x2={32} y2={46} />
        <line x1={12} y1={46} x2={8} y2={62} />
        <line x1={12} y1={46} x2={20} y2={62} />
      </g>
      <circle cx={40} cy={10} r={4} fill="#1a1a1a" />
      <circle cx={20} cy={28} r={4} fill="#1a1a1a" />
      <circle cx={60} cy={28} r={4} fill="#8b2a2a" />
      <circle cx={12} cy={46} r={4} fill="#1a1a1a" />
      <circle cx={32} cy={46} r={4} fill="#8b2a2a" />
      <circle cx={8} cy={62} r={4} fill="#8b2a2a" />
      <circle cx={20} cy={62} r={4} fill="#8b2a2a" />
    </svg>
  );
}

export function LeafVsLevelWiseDiagram({ locale }: { locale: Locale }) {
  return (
    <div>
      <p className="text-[9px] tracking-brand uppercase text-muted font-sans mb-3 text-center">
        {locale === 'he' ? 'Level-wise מול Leaf-wise — משקף 11' : 'Level-wise vs. leaf-wise — slide 11'}
      </p>
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="border border-rule p-3 text-center">
          <div className="text-[10px] tracking-brand uppercase text-accent font-sans font-semibold mb-1">Level-wise</div>
          <div className="text-[8px] text-muted mb-2">{locale === 'he' ? 'ברירת המחדל של XGBoost' : 'XGBoost default'}</div>
          <LevelWiseTree />
          <p className="text-[9px] text-muted mt-2">{locale === 'he' ? 'עץ מאוזן וסימטרי' : 'Balanced, symmetric tree'}</p>
        </div>
        <div className="border border-rule p-3 text-center">
          <div className="text-[10px] tracking-brand uppercase text-accent font-sans font-semibold mb-1">Leaf-wise</div>
          <div className="text-[8px] text-muted mb-2">LightGBM</div>
          <LeafWiseTree />
          <p className="text-[9px] text-muted mt-2">{locale === 'he' ? 'ענף אחד עמוק מאוד, אחרים רדודים' : 'One branch very deep, others shallow'}</p>
        </div>
      </div>
      <p className="text-[10px] italic text-muted text-center mt-4 max-w-md mx-auto">
        {locale === 'he'
          ? '"בכל שלב, מפצלים את העלה היחיד שמפחית הכי הרבה שגיאה — ורק אותו." — משקף 11. יותר מדויק באזורים קשים — אך עלול להתאים יתר על המידה אם העומק לא מוגבל.'
          : '"At each step, split the single leaf that reduces error the most — and only that one." — slide 11. More accurate in hard regions — but can overfit if depth is left unbounded.'}
      </p>
    </div>
  );
}

// LightGBM's own leaf-wise tree shape, reused from the shared comparison above — the deck's real
// distinguishing feature (slide 11) paired with its own "five advantages" framing (slide 5).
export function LightGbmDiagram({ locale }: { locale: Locale }) {
  return (
    <div>
      <p className="text-[9px] tracking-brand uppercase text-muted font-sans mb-3 text-center">
        {locale === 'he' ? 'גדילת Leaf-wise — משקף 11' : 'Leaf-wise growth — slide 11'}
      </p>
      <LeafWiseTree />
      <p className="text-[10px] italic text-muted text-center mt-4 max-w-md mx-auto">
        {locale === 'he'
          ? '"LightGBM היא מסגרת gradient-boosting בעלת למידה מבוססת-עצים, שתוכננה להיות מבוזרת ויעילה." המצגת פותחת בחמישה יתרונות: אימון מהיר יותר, זיכרון נמוך יותר, דיוק טוב יותר, מקבילי/GPU, נתונים בקנה מידה גדול. — משקף 5'
          : '"LightGBM is a gradient-boosting framework using tree-based learning, designed to be distributed and efficient." Its documentation leads with five advantages: faster training, lower memory, better accuracy, parallel/GPU, large-scale data. — slide 5'}
      </p>
    </div>
  );
}

// CatBoost's real "symmetric oblivious trees" (slide 15, comparison card: "Balanced 'oblivious'
// trees: fast to score and resistant to overfitting") — every node at a given depth shares the
// same split condition, drawn schematically since the deck names the property without a worked
// numeric example.
export function CatBoostDiagram({ locale }: { locale: Locale }) {
  return (
    <div>
      <p className="text-[9px] tracking-brand uppercase text-muted font-sans mb-3 text-center">
        {locale === 'he' ? 'עצים סימטריים "אובליביוס" — משקף 15' : 'Symmetric "oblivious" trees — slide 15'}
      </p>
      <svg viewBox="0 0 140 70" className="w-full max-w-[160px] mx-auto block">
        <g stroke="#1a1a1a" strokeWidth="1.2">
          <line x1={70} y1={10} x2={35} y2={30} />
          <line x1={70} y1={10} x2={105} y2={30} />
          <line x1={35} y1={30} x2={17} y2={52} />
          <line x1={35} y1={30} x2={53} y2={52} />
          <line x1={105} y1={30} x2={87} y2={52} />
          <line x1={105} y1={30} x2={123} y2={52} />
        </g>
        <text x={70} y={7} textAnchor="middle" fontSize="6" fontFamily="monospace" fill="#8b2a2a">f1?</text>
        <text x={35} y={27} textAnchor="middle" fontSize="6" fontFamily="monospace" fill="#8b2a2a">f2?</text>
        <text x={105} y={27} textAnchor="middle" fontSize="6" fontFamily="monospace" fill="#8b2a2a">f2?</text>
        <circle cx={70} cy={10} r={4} fill="#1a1a1a" />
        <circle cx={35} cy={30} r={4} fill="#1a1a1a" />
        <circle cx={105} cy={30} r={4} fill="#1a1a1a" />
        {[17, 53, 87, 123].map((x) => <circle key={x} cx={x} cy={52} r={4} fill="#8b2a2a" />)}
      </svg>
      <p className="text-[9px] text-muted text-center mt-1">
        {locale === 'he' ? 'אותו תנאי פיצול (f2?) בכל צומת באותה רמה' : 'Same split condition (f2?) at every node on the same level'}
      </p>
      <p className="text-[10px] italic text-muted text-center mt-4 max-w-md mx-auto">
        {locale === 'he'
          ? '"עצים \'אובליביוס\' מאוזנים: מהירים לניקוד ועמידים בפני התאמת יתר." — משקף 15. יחד עם קטגוריות טבעיות ו-ordered boosting.'
          : '"Balanced \'oblivious\' trees: fast to score and resistant to overfitting." — slide 15. Paired with native categoricals and ordered boosting.'}
      </p>
    </div>
  );
}

// The real decision-tree example (slide 8: age < 55 splits first, then travel time < 1hr) shown
// as a feature-importance bar chart — the deck itself doesn't attach numeric importance scores,
// but its own real quote (slide "Feature Importance") explains what the bars would measure: how
// much each feature contributed to the tree splits.
const featureImportanceRows = [
  { key: 'age', labelEn: 'age', labelHe: 'גיל', score: 0.62 },
  { key: 'travel', labelEn: 'travel time', labelHe: 'זמן נסיעה', score: 0.31 },
  { key: 'other', labelEn: 'other features', labelHe: 'תכונות אחרות', score: 0.07 },
];

export function FeatureImportanceDiagram({ locale }: { locale: Locale }) {
  return (
    <div>
      <p className="text-[9px] tracking-brand uppercase text-muted font-sans mb-3 text-center">
        {locale === 'he'
          ? 'דוגמה להמחשה על עץ ההחלטה האמיתי (משקף 8) — למצגת אין ציוני חשיבות מספריים משלה'
          : "Illustrative Example on the Deck's Real Decision Tree (slide 8) — it names the metric but attaches no numeric scores of its own"}
      </p>
      <div className="max-w-sm mx-auto space-y-2">
        {featureImportanceRows.map((r) => (
          <div key={r.key} className="flex items-center gap-2">
            <span className="text-[9px] font-mono w-24 flex-shrink-0 text-end">{locale === 'he' ? r.labelHe : r.labelEn}</span>
            <div className="flex-1 bg-codebg/40 h-4 relative">
              <div className="bg-accent h-4" style={{ width: `${r.score * 100}%` }} />
            </div>
            <span className="text-[9px] font-mono w-10">{r.score.toFixed(2)}</span>
          </div>
        ))}
      </div>
      <p className="text-[10px] italic text-muted text-center mt-4 max-w-md mx-auto">
        {locale === 'he'
          ? '"XGBoost יכולה לתת ציון לכמה כל תכונה תרמה לפיצולי העץ." age הוא הפיצול הראשון (ה-root) בעץ האמיתי של המצגת — ולכן מוצג כאן כתכונה החשובה ביותר.'
          : '"XGBoost can score how much each feature contributed to the tree splits." age is the first (root) split in the deck\'s own real tree — shown here as the most important feature accordingly.'}
      </p>
    </div>
  );
}

// The real K-Fold Cross-Validation steps and worked example (slide 26: "Don't trust a single
// train/test split... Split the training set into K equal folds (e.g. K = 10)") — shown at K=5,
// matching the deck's own live demo's default slider value.
export function KFoldDiagram({ locale }: { locale: Locale }) {
  const k = 5;
  const rounds = [0, 1, 2];
  return (
    <div>
      <p className="text-[9px] tracking-brand uppercase text-muted font-sans mb-3 text-center">
        {locale === 'he' ? 'K = 5 (ברירת המחדל של ה-Demo); הטקסט של המצגת נותן דוגמה עם K = 10 — משקף 26' : "K = 5 (the deck's own demo default); its text example uses K = 10 — slide 26"}
      </p>
      <div className="space-y-2 max-w-sm mx-auto">
        {rounds.map((r) => (
          <div key={r} className="flex items-center gap-2">
            <span className="text-[8px] font-mono w-16 text-muted">{locale === 'he' ? `סבב ${r + 1}` : `Round ${r + 1}`}</span>
            <div className="flex flex-1 gap-0.5">
              {Array.from({ length: k }).map((_, i) => (
                <div key={i} className={`flex-1 h-5 ${i === r ? 'bg-accent' : 'bg-codebg border border-rule'}`} />
              ))}
            </div>
          </div>
        ))}
        <div className="flex items-center gap-2">
          <span className="text-[8px] font-mono w-16 text-muted">…</span>
          <div className="flex flex-1 gap-0.5">
            {Array.from({ length: k }).map((_, i) => (
              <div key={i} className="flex-1 h-5 bg-codebg border border-dashed border-rule" />
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-4 mt-2 text-[9px] font-sans">
        <span className="flex items-center gap-1"><span className="w-3 h-3 bg-accent inline-block" />{locale === 'he' ? 'ולידציה' : 'validation'}</span>
        <span className="flex items-center gap-1"><span className="w-3 h-3 bg-codebg border border-rule inline-block" />{locale === 'he' ? 'אימון' : 'train'}</span>
      </div>
      <p className="text-[10px] italic text-muted text-center mt-4 max-w-md mx-auto">
        {locale === 'he'
          ? '"מפרישים סט בדיקה קודם — נשמר בצד ונוגעים בו רק בסוף. מפצלים את סט האימון ל-K קפלים שווים. בכל סבב, קפל אחד מקבל תור כ-validation בזמן שה-K−1 האחרים מתאמנים." — משקף 26'
          : '"Hold out a test set first — it is kept aside and only touched at the very end. Split the training set into K equal folds. Loop K times: each fold takes a turn as validation while the other K−1 folds train." — slide 26'}
      </p>
    </div>
  );
}
