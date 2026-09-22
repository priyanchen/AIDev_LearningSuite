import Link from 'next/link';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { projectPhases } from '@/content/project-guide';
import {
  GitDiagrams,
  HerbalRepoStatusDiagram,
  HerbalBranchTreesDiagram,
  HerbalSetupDiagram,
  HerbalArchitectureDiagram,
  HerbalTechStackDiagram,
  HerbalProblemCallout,
  HerbalPersonaCard,
  HerbalMVPDiagram,
  HerbalUXFlowDiagram,
  HerbalUIDesignSystem,
} from '@/components/ProjectDiagrams';
import type { Locale } from '@/i18n';

export default async function ProjectRoadmapPage({
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
        <Link href={`/${locale}/project`} className="hover:text-accent">
          {nav('project')}
        </Link>
      </nav>

      <section className="mb-16">
        <h1 className="text-2xl small-caps tracking-wide text-center mb-2">
          {locale === 'he' ? "הוראות ד״ר זוארי לבניית תוכנית פרויקט הצמחים" : "Dr. Zuari's Instructions for Building The Herbal Project Plan"}
        </h1>
        <p className="text-center italic text-muted max-w-2xl mx-auto text-sm mb-6">
          {locale === 'he'
            ? 'מפת דרכים בת 18 שלבים — מרעיון ועד פרודקשן — ממדריך "בניית פרויקט מאפס" של המרצה עצמו.'
            : 'An 18-step roadmap — idea to production — from the instructor\'s own "Building a Project from Scratch" deck.'}
        </p>

        <div className="max-w-2xl mx-auto border border-accent p-4 mb-12 text-center">
          <p className="text-xs leading-relaxed">
            {locale === 'he'
              ? 'כל 18 השלבים למטה נעקבים מול אותו פרויקט אמיתי אחד: '
              : 'All 18 steps below are tracked against the same one real project: '}
            <a
              href="https://github.com/JonathanZouari/herbal-evidence"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline hover:no-underline font-mono"
            >
              herbal-evidence
            </a>
            {locale === 'he'
              ? '. שלבים 1–9 כבר מציגים מה הפרויקט האמיתי עשה בפועל (תרשימים וציטוטים מהתיעוד שלו עצמו). שלבים 10–18 הם השלבים שהפרויקט האמיתי עדיין לא הגיע אליהם — נכון לרגע זה הוא עדיין שלד מונורפו בודד (commit יחיד) — כך שההליכה שם נשארת הדוגמה הכללית, עד שהפרויקט האמיתי יתקדם.'
              : '. Steps 1–9 already show what the real project actually did (diagrams and quotes from its own docs). Steps 10–18 are the phases the real project hasn\'t reached yet — as of now it\'s still a single-commit monorepo skeleton — so the walkthrough there remains the generic example, until the real project progresses.'}
          </p>
        </div>

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
                    {step.number > 9 && (
                      <p className="text-[10px] italic text-muted text-center mt-4 pt-3 border-t border-dashed border-rule">
                        {locale === 'he'
                          ? 'הפרויקט האמיתי (herbal-evidence) עדיין לא הגיע לשלב הזה — הדוגמה למעלה נשארת כללית.'
                          : "The real project (herbal-evidence) hasn't reached this step yet — the example above remains generic."}
                      </p>
                    )}
                    {step.number === 1 && <HerbalProblemCallout locale={locale} />}
                    {step.number === 2 && <HerbalPersonaCard locale={locale} />}
                    {step.number === 3 && <HerbalMVPDiagram locale={locale} />}
                    {step.number === 4 && <HerbalUXFlowDiagram locale={locale} />}
                    {step.number === 5 && <HerbalUIDesignSystem locale={locale} />}
                    {step.number === 6 && <HerbalArchitectureDiagram locale={locale} />}
                    {step.number === 7 && <HerbalTechStackDiagram locale={locale} />}
                    {step.number === 8 && <HerbalSetupDiagram locale={locale} />}
                    {step.number === 9 && <GitDiagrams locale={locale} />}
                    {step.number === 9 && <HerbalRepoStatusDiagram locale={locale} />}
                    {step.number === 9 && <HerbalBranchTreesDiagram locale={locale} />}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="border border-rule p-6 bg-codebg/40 text-center mb-12">
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

      <div className="flex justify-center">
        <Link
          href={`/${locale}/project/git-upload`}
          className="text-[9px] tracking-brand uppercase text-muted hover:text-accent font-sans"
        >
          {locale === 'he' ? '← הקודם' : '← Previous'}
        </Link>
      </div>
    </div>
  );
}
