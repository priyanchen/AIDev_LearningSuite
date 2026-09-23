import Link from 'next/link';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import {
  BuildPhasesTimelineDiagram,
  BuildPhasesTestGrowthDiagram,
  BuildPhasesInfraDiagram,
  BuildPhasesOpenItemsDiagram,
} from '@/components/ProjectDiagrams';
import type { Locale } from '@/i18n';

export default async function ProjectPhasesPage({
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

      <section className="max-w-3xl mx-auto">
        <p className="text-center text-[9px] tracking-brand uppercase text-muted font-sans mb-2">
          {locale === 'he' ? 'נוסף לאתר — 23 בספטמבר 2026' : 'Added to the site — September 23, 2026'}
        </p>
        <h1 className="text-2xl small-caps tracking-wide text-center mb-2">
          {locale === 'he' ? 'שלבים' : 'Phases'}
        </h1>
        <p className="text-center italic text-muted text-sm mb-12 max-w-2xl mx-auto">
          {locale === 'he'
            ? 'הבנייה האמיתית של herbal-evidence, כפי שד״ר זוארי עצמו רשם אותה — שישה קובצי Phase, כולם מעודכנים לאותו יום. זה כבר לא שלד מונורפו בודד: יש בסיס נתונים אמיתי, backend אמיתי, worker מחקר אמיתי, frontend עברי אמיתי, ומיזוג dev → main אמיתי ל-Railway.'
            : "The real build of herbal-evidence, logged by Dr. Zuari himself — six Phase files, all updated the same day. This is no longer a single monorepo skeleton: there's a real database, a real backend, a real research worker, a real Hebrew frontend, and a real dev → main merge to Railway."}
        </p>

        <BuildPhasesTimelineDiagram locale={locale} />
        <BuildPhasesTestGrowthDiagram locale={locale} />
        <BuildPhasesInfraDiagram locale={locale} />
        <BuildPhasesOpenItemsDiagram locale={locale} />

        <div className="mt-4 pt-4 border-t border-dashed border-rule">
          <p className="text-[9px] tracking-brand uppercase text-muted font-sans mb-1 text-center">
            {locale === 'he' ? 'קוד המקור האמיתי — main, אחרי מיזוג dev → main (PR #4)' : "Dr. Zuari's real source code — main, after the dev → main merge (PR #4)"}
          </p>
          <p className="text-[10px] italic text-muted text-center mb-4">
            {locale === 'he' ? '101 קבצים ב-main, נכון להיום — לא שלד, קוד שרץ ונבדק בפועל.' : '101 files on main as of today — not a skeleton, code that actually runs and is actually tested.'}
          </p>
          <div className="flex flex-wrap justify-center gap-2 max-w-2xl mx-auto">
            {[
              { href: 'https://github.com/JonathanZouari/herbal-evidence', labelEn: 'Full Repo (main)', labelHe: 'המאגר המלא (main)' },
              { href: 'https://github.com/JonathanZouari/herbal-evidence/tree/main/backend/app', labelEn: 'backend/app — FastAPI', labelHe: 'backend/app — FastAPI' },
              { href: 'https://github.com/JonathanZouari/herbal-evidence/tree/main/backend/app/jobs', labelEn: 'backend/app/jobs — Research Worker', labelHe: 'backend/app/jobs — Research Worker' },
              { href: 'https://github.com/JonathanZouari/herbal-evidence/tree/main/frontend', labelEn: 'frontend — Hebrew RTL', labelHe: 'frontend — עברית RTL' },
              { href: 'https://github.com/JonathanZouari/herbal-evidence/tree/main/backend/tests', labelEn: 'backend/tests — 78 Tests', labelHe: 'backend/tests — 78 בדיקות' },
              { href: 'https://github.com/JonathanZouari/herbal-evidence/tree/main/supabase', labelEn: 'supabase — Migrations', labelHe: 'supabase — Migrations' },
              { href: 'https://github.com/JonathanZouari/herbal-evidence/tree/main/docs', labelEn: 'docs — Architecture & Decisions', labelHe: 'docs — ארכיטקטורה והחלטות' },
            ].map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-[9px] tracking-brand uppercase text-accent border border-accent px-3 py-1.5 hover:bg-accent hover:text-paper transition font-sans"
              >
                {locale === 'he' ? l.labelHe : l.labelEn} ↗
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 border border-accent p-4 max-w-2xl mx-auto text-center">
          <p className="text-xs leading-relaxed">
            {locale === 'he'
              ? 'עמוד זה מתעד את התקדמות הפרויקט האמיתי — ולכן הוא עשוי לעמוד בסתירה להערות הישנות יותר בעמוד מפת הדרכים, שנכתבו כשהפרויקט עדיין היה בשלב שלד בלבד.'
              : "This page tracks the real project's progress — so it may contradict the older notes on the Roadmap page, which were written back when the project was still at the skeleton-only stage."}
          </p>
        </div>

        <div className="flex justify-center mt-8">
          <Link
            href={`/${locale}/project`}
            className="text-[9px] tracking-brand uppercase text-muted hover:text-accent font-sans"
          >
            {locale === 'he' ? '← חזרה' : '← Back'}
          </Link>
        </div>
      </section>
    </div>
  );
}
