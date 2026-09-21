import Link from 'next/link';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { cardDecks } from '@/content/cards';
import { projectPhases } from '@/content/project-guide';
import Card from '@/components/Card';
import type { Locale } from '@/i18n';

const introSlug = 'session-01-intro';
const introCardNumber = '02';

export default async function ProjectPage({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  setRequestLocale(locale);
  const nav = await getTranslations('nav');
  const deck = cardDecks[introSlug];
  const introCard = deck?.find((c) => c.number === introCardNumber);

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl small-caps tracking-wide mb-2 text-center">
        {nav('project')}
      </h1>
      <div className="ornament text-xl text-accent text-center mb-8"></div>

      <p className="text-center italic text-muted max-w-2xl mx-auto mb-12">
        {locale === 'he'
          ? 'הקורס נע לאורך קשת אחת רציפה, שכל מודול מוסיף שכבה עליה, ומגיעה לשיאה בפרויקט. הכרטיס למטה — מפגש 1 — הוא המקום שבו הקשת הזו הוצגה לראשונה.'
          : "The course moves along a single continuous arc, each module a layer added on top of the last, culminating in a project. The card below — from Session 1 — is where that arc was first laid out."}
      </p>

      {introCard && (
        <div className="mb-16 max-w-3xl mx-auto">
          <Card card={introCard} locale={locale} total={deck!.length} />
          <div className="text-center mt-3">
            <Link
              href={`/${locale}/lessons/${introSlug}#card-${introCardNumber}`}
              className="text-[9px] tracking-brand uppercase text-muted hover:text-accent font-sans"
            >
              {locale === 'he' ? 'צפייה במפגש המקורי →' : 'View in its original session →'}
            </Link>
          </div>
        </div>
      )}

      <section className="mb-16 border-t border-rule pt-12">
        <h2 className="text-2xl small-caps tracking-wide text-center mb-2">
          {locale === 'he' ? "הוראות ד״ר זוארי ליצירת תוכנית פרויקט" : "Dr. Zuari's Instructions for Building a Project Plan"}
        </h2>
        <p className="text-center italic text-muted max-w-2xl mx-auto text-sm mb-12">
          {locale === 'he'
            ? 'מפת דרכים בת 18 שלבים — מרעיון ועד פרודקשן — ממדריך "בניית פרויקט מאפס" של המרצה עצמו.'
            : 'An 18-step roadmap — idea to production — from the instructor\'s own "Building a Project from Scratch" deck.'}
        </p>

        <div className="grid gap-12">
          {projectPhases.map((phase) => (
            <div key={phase.id}>
              <div className="text-center mb-6">
                <div className="text-[9px] tracking-brand uppercase text-accent font-sans font-semibold mb-1">
                  {phase.phaseLabel[locale]}
                </div>
                <h3 className="text-xl small-caps tracking-wide">{phase.title[locale]}</h3>
              </div>
              <div className="grid gap-6">
                {phase.steps.map((step) => (
                  <div key={step.number} className="border border-rule p-6 bg-codebg/30">
                    <div className="flex items-baseline gap-3 mb-4 pb-3 border-b border-rule">
                      <span className="text-[10px] tracking-brand uppercase text-accent font-sans font-semibold">
                        {String(step.number).padStart(2, '0')}
                      </span>
                      <h4 className="small-caps tracking-wide text-lg">{step.title[locale]}</h4>
                    </div>
                    <ul className="grid gap-2">
                      {step.points.map((point, i) => (
                        <li key={i} className="text-sm leading-relaxed flex gap-2">
                          <span className="text-accent flex-shrink-0">·</span>
                          <span>{point[locale]}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="border border-rule p-6 bg-codebg/40 text-center">
        <h3 className="text-[10px] tracking-brand uppercase text-accent font-sans font-semibold mb-3">
          {locale === 'he' ? 'חומר הפרויקט' : 'Project Material'}
        </h3>
        <p className="text-xs italic text-muted mb-4">
          {locale === 'he'
            ? 'המדריך המלא של ד״ר זוארי לבניית פרויקט מאפס.'
            : "Dr. Zuari's own full guide to building a project from scratch."}
        </p>
        <a
          href="https://drive.google.com/file/d/1MQ_FWuhjk3RQzObVDHf47UOr3wiHFkLu/view"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-[10px] tracking-brand uppercase text-ink border border-ink px-4 py-2 hover:bg-ink hover:text-paper transition font-sans"
        >
          {locale === 'he' ? 'בניית פרויקט מאפס (PDF)' : 'Building a Project from Scratch (PDF)'} ↗
        </a>
      </div>
    </div>
  );
}
