import Link from 'next/link';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { cardDecks } from '@/content/cards';
import { gitSubmissionStages } from '@/content/project-guide';
import { getSession } from '@/lib/registry';
import Card from '@/components/Card';
import { WorktreeDiagram } from '@/components/ProjectDiagrams';
import type { Locale } from '@/i18n';

const branchSlug = 'session-08-python-5';
const branchCardNumber = '01';

export default async function ProjectGitUploadPage({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  setRequestLocale(locale);
  const nav = await getTranslations('nav');
  const branchDeck = cardDecks[branchSlug];
  const branchCard = branchDeck?.find((c) => c.number === branchCardNumber);
  const branchSession = getSession(branchSlug);

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

      <section className="max-w-3xl mx-auto">
        <h1 className="text-2xl small-caps tracking-wide text-center mb-2">
          {locale === 'he' ? 'העלאה ל-Git' : 'Uploading to Git'}
        </h1>
        <p className="text-center italic text-muted text-sm mb-12 max-w-2xl mx-auto">
          {locale === 'he'
            ? 'בידוד עבודה בענף לפני שממזגים, ואז ההליכה החיה בפועל של מפגש 22 בהגשת הפרויקט: staging מול production, ומה שגורם ל-push להגיע בפועל לענן.'
            : "Isolating work on a branch before merging, then Session 22's own live walkthrough of actually submitting the project: staging vs. production, and what actually gets a push to reach the cloud."}
        </p>

        {branchCard && (
          <div className="mb-10">
            {branchSession && (
              <p className="text-center text-[10px] tracking-brand uppercase text-muted font-sans mb-3">
                {locale === 'he' ? 'כרטיס 01 — נלקח ממפגש' : 'Card 01 — sourced from Session'}{' '}
                {String(branchSession.number).padStart(2, '0')}: {branchSession.title[locale]}
              </p>
            )}
            <Card card={branchCard} locale={locale} total={branchDeck!.length} />
            <div className="text-center mt-3">
              <Link
                href={`/${locale}/lessons/${branchSlug}#card-${branchCardNumber}`}
                className="text-[9px] tracking-brand uppercase text-muted hover:text-accent font-sans"
              >
                {locale === 'he' ? 'צפייה במפגש המקורי →' : 'View in its original session →'}
              </Link>
            </div>
          </div>
        )}

        {/* Card 1 — his own live walkthrough of actually submitting/deploying the Herbal project */}
        <div className="mb-10 border border-rule p-6 bg-codebg/30">
          <header className="flex items-baseline justify-between border-b border-ink pb-3 mb-4">
            <span className="text-[9px] tracking-brand uppercase text-accent font-sans font-semibold">
              {locale === 'he' ? 'כרטיס 1 — הגשת הפרויקט ל-Git, בשלבים' : 'Card 1 — Submitting the Project to Git, Staged'}
            </span>
          </header>
          <p className="text-xs italic text-muted mb-4 leading-relaxed">
            {locale === 'he'
              ? 'הליכה חיה נוספת מתמליל מפגש 22 — staging מול production, למה main זה הלקוח, זרימת ה-push ← merge בפועל, ולמה עבודה לוקאלית לא מבטיחה שזה יעבוד בענן.'
              : "Another live walkthrough from Session 22's transcript — staging vs. production, why main is the client, the actual push → merge flow, and why local success doesn't guarantee cloud success."}
          </p>
          <div className="grid gap-4">
            {gitSubmissionStages.map((stage, i) => (
              <div key={i} className="flex gap-4">
                <span className="text-[10px] tracking-brand uppercase text-accent font-sans font-semibold flex-shrink-0 w-6 pt-0.5">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="flex-1">
                  <h4 className="small-caps tracking-wide text-sm mb-1">{stage.title[locale]}</h4>
                  <p className="text-xs leading-relaxed text-muted">{stage.body[locale]}</p>
                  {i === 7 && <WorktreeDiagram locale={locale} />}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <a
            href="https://chatgpt.com/share/6aaa65d1-3fe8-83eb-95f0-28dd4a97f8f7"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[9px] tracking-brand uppercase text-ink border border-ink px-3 py-1.5 hover:bg-ink hover:text-paper transition font-sans"
          >
            {locale === 'he' ? 'שיחת האפיון המקורית (ChatGPT)' : 'The Original Characterization Chat (ChatGPT)'} ↗
          </a>
          <a
            href="https://github.com/JonathanZouari/herbal-evidence"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[9px] tracking-brand uppercase text-ink border border-ink px-3 py-1.5 hover:bg-ink hover:text-paper transition font-sans"
          >
            {locale === 'he' ? 'המאגר שיצא מזה (GitHub)' : 'The Resulting Repo (GitHub)'} ↗
          </a>
        </div>

        <div className="flex justify-center gap-3">
          <Link
            href={`/${locale}/project/session-22`}
            className="text-[9px] tracking-brand uppercase text-muted hover:text-accent font-sans"
          >
            {locale === 'he' ? '← הקודם' : '← Previous'}
          </Link>
          <Link
            href={`/${locale}/project/roadmap`}
            className="text-[9px] tracking-brand uppercase text-ink border border-ink px-4 py-2 hover:bg-ink hover:text-paper transition font-sans"
          >
            {locale === 'he' ? 'הבא — מפת הדרכים בת 18 השלבים →' : 'Next — The 18-Step Roadmap →'}
          </Link>
        </div>
      </section>
    </div>
  );
}
