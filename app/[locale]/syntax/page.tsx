import Link from 'next/link';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { syntaxGuide, otherLanguages } from '@/content/syntax-guide';
import type { Locale } from '@/i18n';

export default async function SyntaxDirectoryPage({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  setRequestLocale(locale);
  const nav = await getTranslations('nav');

  const languages = [
    {
      id: 'python',
      name: { en: 'Python', he: 'Python' } as const,
      group: locale === 'he' ? 'השפה המרכזית' : 'Core Language',
      note: {
        en: 'The Python module syntax, recovered from every Jupyter notebook\'s own closing summary.',
        he: 'תחביר מודול Python, ממוחזר מתקציר הסיום של כל מחברת Jupyter.',
      },
      count: syntaxGuide.length,
    },
    ...otherLanguages.map((s) => ({
      id: s.id,
      name: s.language,
      group: locale === 'he' ? 'שפה נוספת' : 'Additional Language',
      note: s.note,
      count: s.topics.length,
    })),
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="text-[10px] tracking-brand uppercase text-accent font-sans font-semibold text-center mb-4">
        {nav('syntax')}
      </div>
      <h1 className="text-3xl md:text-4xl small-caps tracking-wide mb-2 text-center">
        {locale === 'he'
          ? 'פייתון היא שפת תכנות מונחית עצמים'
          : 'Python Is an Object-Oriented Programming Language'}
      </h1>
      <p className="text-center text-xs tracking-brand uppercase text-muted font-sans mb-2">
        {locale === 'he' ? '— ד״ר יונתן זוארי' : '— Dr. Jonathan Zuari'}
      </p>
      <div className="ornament text-xl text-accent text-center mb-8"></div>

      <p className="text-center italic text-muted max-w-2xl mx-auto mb-16">
        {locale === 'he'
          ? 'כל שפה או פורמט שהקורס נגע בו, כל אחד בעמוד משלו. בחרי שפה כדי לעיין בתחביר שלה — כל עמוד ניתן לקישור ישיר.'
          : "Every language or format the course touched, each on its own page. Pick one to browse its syntax — every page is directly deep-linkable."}
      </p>

      <div className="grid sm:grid-cols-2 gap-4">
        {languages.map((lang) => (
          <Link
            key={lang.id}
            href={`/${locale}/syntax/${lang.id}`}
            className="border border-rule p-6 hover:border-ink hover:bg-codebg/40 transition block"
          >
            <div className="flex items-baseline justify-between mb-2">
              <span className="text-[9px] tracking-brand uppercase text-accent font-sans font-semibold">
                {lang.group}
              </span>
              <span className="text-[9px] tracking-brand uppercase text-muted font-sans">
                {lang.count} {locale === 'he' ? 'נושאים' : 'topics'}
              </span>
            </div>
            <h2 className="small-caps tracking-wide text-xl mb-2">{lang.name[locale]}</h2>
            <p className="text-xs italic text-muted leading-relaxed line-clamp-3">
              {lang.note[locale]}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
