import Link from 'next/link';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import {
  PrOverviewDiagram,
  PrFileTreeDiagram,
  PrEvidenceCardsDiagram,
  PrSourceRegistryDiagram,
  PrPhasesDiagram,
  PrIntegrityDiagram,
  PrOpenItemsDiagram,
} from '@/components/ProjectDiagrams';
import type { Locale } from '@/i18n';

export default async function ProjectPrHomeopathyProposalPage({
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
          {locale === 'he' ? 'PR #1 — פרופוזל ראיות הומאופתיה באונקולוגיה' : 'PR #1 — Homeopathy Oncology Evidence Proposal'}
        </h1>
        <p className="text-center italic text-muted text-sm mb-4 max-w-2xl mx-auto">
          {locale === 'he'
            ? 'מבט ויזואלי על pull request אמיתי ופתוח ב-herbal-evidence — לא ממוזג, לא ניתן לפרסום, אבל אמיתי בכל פרט: 14 קבצים, 1,832 שורות, 13 כרטיסי ראיות, 21 מקורות מסווגים, ושער אישור כפול שאינו ניתן לעקיפה.'
            : "A visual walkthrough of a real, open pull request on herbal-evidence — unmerged, unpublishable, but real in every detail: 14 files, 1,832 lines, 13 evidence cards, 21 classified sources, and a dual-approval gate that can't be bypassed."}
        </p>
        <div className="text-center mb-12">
          <a
            href="https://github.com/JonathanZouari/herbal-evidence/pull/1/files"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-[9px] tracking-brand uppercase text-ink border border-ink px-4 py-2 hover:bg-ink hover:text-paper transition font-sans"
          >
            {locale === 'he' ? 'צפייה ב-PR #1 (GitHub) ↗' : 'View PR #1 on GitHub ↗'}
          </a>
        </div>

        <PrOverviewDiagram locale={locale} />
        <PrFileTreeDiagram locale={locale} />
        <PrEvidenceCardsDiagram locale={locale} />
        <PrSourceRegistryDiagram locale={locale} />
        <PrPhasesDiagram locale={locale} />
        <PrIntegrityDiagram locale={locale} />
        <PrOpenItemsDiagram locale={locale} />

        <div className="mt-12 border border-accent p-4 max-w-2xl mx-auto text-center">
          <p className="text-xs leading-relaxed">
            {locale === 'he'
              ? 'שום דבר בעמוד הזה אינו ייעוץ רפואי ואינו גלוי למטופלים. ה-PR עצמו מוגדר במפורש כלא ממוזג — הוא ממתין לאישור מוצר/מיזוג מ-Jonathan Zouari לפני שלב 2.'
              : "Nothing on this page is medical advice or patient-visible. The PR itself is explicitly unmerged — it's waiting on Jonathan Zouari's product/merge confirmation before Phase 2 begins."}
          </p>
        </div>

        <div className="flex justify-center mt-12">
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
