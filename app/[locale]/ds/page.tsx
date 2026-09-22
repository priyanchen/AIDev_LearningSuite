import Link from 'next/link';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { dsDiagramTopics } from '@/content/ds-diagrams';
import { dsGlossary } from '@/content/ds-glossary';
import {
  StandardDeviationDiagram,
  HistogramDiagram,
  BarChartDiagram,
  BoxplotDiagram,
  CorrelationMatrixDiagram,
  DendrogramDiagram,
  ElbowPlotDiagram,
  ConfusionMatrixDiagram,
  RocCurveDiagram,
  SkewnessDiagram,
  IqrDiagram,
  SelectionBiasDiagram,
  StratifiedSamplingDiagram,
  ZScoreDiagram,
  TrimmedMeanDiagram,
} from '@/components/DsDiagrams';
import type { Locale } from '@/i18n';

const diagramComponents: Record<string, (props: { locale: Locale }) => JSX.Element> = {
  'standard-deviation': StandardDeviationDiagram,
};

export default async function DsPage({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  setRequestLocale(locale);
  const nav = await getTranslations('nav');

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <nav className="mb-8 text-[10px] tracking-brand uppercase text-muted font-sans">
        <Link href={`/${locale}`} className="hover:text-accent">
          {nav('home')}
        </Link>
        <span className="mx-2">·</span>
        <Link href={`/${locale}/modules/04-intro-to-ds`} className="hover:text-accent">
          {locale === 'he' ? 'מבוא למדעי הנתונים' : 'Introduction to Data Science'}
        </Link>
      </nav>

      <h1 className="text-3xl md:text-4xl small-caps tracking-wide mb-2 text-center">
        {locale === 'he' ? 'DS — מילון תרשימים' : 'DS — A Diagram Dictionary'}
      </h1>
      <div className="ornament text-xl text-accent text-center mb-8"></div>

      <p className="text-center italic text-muted max-w-2xl mx-auto mb-6">
        {locale === 'he'
          ? 'תרשימים המסבירים מושגי מדעי נתונים, שנבנו ממצגות חדשות יותר של ד״ר זוארי (סטטיסטיקה מעשית, Pandas, אשכולות K-Means, רגרסיה) — מצגות שעדיין לא מקושרות למפגש ספציפי באתר.'
          : "Diagrams explaining Data Science concepts, built from Dr. Zuari's newer lecture decks (Practical Statistics, Pandas, K-Means Clustering, Regression) — decks not yet linked to a specific session on this site."}
      </p>
      <p className="text-center text-[10px] text-muted mb-16">
        {locale === 'he'
          ? 'ראו גם: פרומפטים אמיתיים שנשלפו מאותן מצגות בעמוד הפרומפטים.'
          : 'See also: real prompts pulled from these same decks, on the Prompts page.'}{' '}
        <Link href={`/${locale}/prompts`} className="underline hover:text-accent">
          {nav('prompts')} →
        </Link>
      </p>

      <div className="grid gap-16">
        {dsDiagramTopics.map((topic) => {
          const Diagram = diagramComponents[topic.id];
          return (
            <section key={topic.id} className="border border-rule p-6 bg-codebg/30">
              <div className="text-center mb-6 pb-4 border-b border-rule">
                <h2 className="text-xl small-caps tracking-wide mb-2">{topic.title[locale]}</h2>
                <p className="text-sm text-muted max-w-xl mx-auto mb-1">{topic.summary[locale]}</p>
                <p className="text-[9px] tracking-brand uppercase text-accent font-sans font-mono">{topic.source}</p>
              </div>
              {Diagram && <Diagram locale={locale} />}
            </section>
          );
        })}
      </div>

      <div className="mt-20 pt-12 border-t border-rule">
        <h2 className="text-2xl small-caps tracking-wide text-center mb-2">
          {locale === 'he' ? 'מילון מונחים' : 'Glossary'}
        </h2>
        <p className="text-center italic text-muted max-w-2xl mx-auto text-sm mb-12">
          {locale === 'he'
            ? 'כל סוגי התרשימים ומונחי מדעי הנתונים/סטטיסטיקה שנמצאו לאורך תיקיית "3 - Data Science" — סטטיסטיקה, Pandas, SQLite ו-Supabase, ולמידת מכונה — מוגדרים כפי שהמקור עצמו מסביר או משתמש בהם, לא הגדרות ספר לימוד גנריות.'
            : 'Every plot type and data-science/statistics term found across the "3 - Data Science" folder — Statistics, Pandas, SQLite & Supabase, and Machine Learning — defined the way the source itself explains or uses it, not generic textbook definitions.'}
        </p>

        <div className="grid gap-12">
          {Object.entries(dsGlossary).map(([key, group]) => (
            <div key={key}>
              <h3 className="text-[10px] tracking-brand uppercase text-accent font-sans font-semibold border-b border-rule pb-2 mb-6">
                {group.label[locale]}
              </h3>
              <div className="border border-rule divide-y divide-rule">
                {group.terms.map((t) => (
                  <div key={t.term} className="p-4">
                    <div className="sm:grid sm:grid-cols-[12rem_1fr] sm:gap-4">
                      <div className="mb-1 sm:mb-0">
                        <span className="text-sm font-bold font-mono">{t.term}</span>
                        <div className="text-[9px] tracking-brand uppercase text-muted font-sans mt-0.5">{t.source}</div>
                      </div>
                      <div>
                        <p className="text-sm leading-relaxed">{t.definition[locale]}</p>
                        {t.link && (
                          <a
                            href={t.link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mt-2 text-[9px] tracking-brand uppercase text-accent border border-accent px-2 py-1 hover:bg-accent hover:text-paper transition font-sans"
                          >
                            {t.link.label[locale]} ↗
                          </a>
                        )}
                      </div>
                    </div>
                    {t.term === 'Histogram' && (
                      <div className="mt-4 pt-4 border-t border-dashed border-rule">
                        <HistogramDiagram locale={locale} />
                      </div>
                    )}
                    {t.term === 'Bar Chart' && (
                      <div className="mt-4 pt-4 border-t border-dashed border-rule">
                        <BarChartDiagram locale={locale} />
                      </div>
                    )}
                    {t.term === 'Boxplot' && (
                      <div className="mt-4 pt-4 border-t border-dashed border-rule">
                        <BoxplotDiagram locale={locale} />
                      </div>
                    )}
                    {t.term === 'Correlation Matrix' && (
                      <div className="mt-4 pt-4 border-t border-dashed border-rule">
                        <CorrelationMatrixDiagram locale={locale} />
                      </div>
                    )}
                    {t.term === 'Dendrogram' && (
                      <div className="mt-4 pt-4 border-t border-dashed border-rule">
                        <DendrogramDiagram locale={locale} />
                      </div>
                    )}
                    {t.term === 'Elbow Plot / Curve' && (
                      <div className="mt-4 pt-4 border-t border-dashed border-rule">
                        <ElbowPlotDiagram locale={locale} />
                      </div>
                    )}
                    {t.term === 'ROC Curve' && (
                      <div className="mt-4 pt-4 border-t border-dashed border-rule">
                        <RocCurveDiagram locale={locale} />
                      </div>
                    )}
                    {t.term === 'Confusion Matrix' && (
                      <div className="mt-4 pt-4 border-t border-dashed border-rule">
                        <ConfusionMatrixDiagram locale={locale} />
                      </div>
                    )}
                    {t.term === 'Skewness' && (
                      <div className="mt-4 pt-4 border-t border-dashed border-rule">
                        <SkewnessDiagram locale={locale} />
                      </div>
                    )}
                    {t.term === 'IQR (Interquartile Range)' && (
                      <div className="mt-4 pt-4 border-t border-dashed border-rule">
                        <IqrDiagram locale={locale} />
                      </div>
                    )}
                    {t.term === 'Selection Bias (Self-Selection Bias)' && (
                      <div className="mt-4 pt-4 border-t border-dashed border-rule">
                        <SelectionBiasDiagram locale={locale} />
                      </div>
                    )}
                    {t.term === 'Stratified Sampling' && (
                      <div className="mt-4 pt-4 border-t border-dashed border-rule">
                        <StratifiedSamplingDiagram locale={locale} />
                      </div>
                    )}
                    {t.term === 'z-score' && (
                      <div className="mt-4 pt-4 border-t border-dashed border-rule">
                        <ZScoreDiagram locale={locale} />
                      </div>
                    )}
                    {t.term === 'Trimmed Mean' && (
                      <div className="mt-4 pt-4 border-t border-dashed border-rule">
                        <TrimmedMeanDiagram locale={locale} />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
