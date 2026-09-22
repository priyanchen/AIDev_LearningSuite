import Link from 'next/link';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { dsDiagramTopics } from '@/content/ds-diagrams';
import { StandardDeviationDiagram } from '@/components/DsDiagrams';
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
    </div>
  );
}
