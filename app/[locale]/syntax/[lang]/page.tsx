import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { syntaxGuide, otherLanguages } from '@/content/syntax-guide';
import SyntaxTopicCard from '@/components/SyntaxTopicCard';
import type { Locale } from '@/i18n';

const PYTHON_LANG_ID = 'python';

export function generateStaticParams() {
  return [{ lang: PYTHON_LANG_ID }, ...otherLanguages.map((s) => ({ lang: s.id }))];
}

export default async function SyntaxLanguagePage({
  params: { locale, lang },
}: {
  params: { locale: Locale; lang: string };
}) {
  setRequestLocale(locale);
  const nav = await getTranslations('nav');
  const cards = await getTranslations('cards');

  const isPython = lang === PYTHON_LANG_ID;
  const section = isPython ? undefined : otherLanguages.find((s) => s.id === lang);
  if (!isPython && !section) notFound();

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <nav className="mb-8 text-[10px] tracking-brand uppercase text-muted font-sans">
        <Link href={`/${locale}`} className="hover:text-accent">
          {nav('home')}
        </Link>
        <span className="mx-2">·</span>
        <Link href={`/${locale}/syntax`} className="hover:text-accent">
          {nav('syntax')}
        </Link>
      </nav>

      {isPython ? (
        <>
          <div className="text-[10px] tracking-brand uppercase text-accent font-sans font-semibold text-center mb-4">
            {locale === 'he' ? 'השפה המרכזית' : 'Core Language'}
          </div>
          <h1 className="text-3xl md:text-4xl small-caps tracking-wide mb-2 text-center">Python</h1>
          <p className="text-center text-xs tracking-brand uppercase text-muted font-sans mb-2">
            {locale === 'he' ? '— ד״ר יונתן זוארי' : '— Dr. Jonathan Zuari'}
          </p>
          <div className="ornament text-xl text-accent text-center mb-8"></div>
          <p className="text-center italic text-muted max-w-2xl mx-auto mb-8">
            {locale === 'he'
              ? 'סיכום התחביר שנלמד לאורך מודול Python, ממוחזר מתקציר הסיום של כל מחברת Jupyter בקורס — לא תיעוד פייתון כללי. כל נושא ממוספר לפי מספר המחברת המקורית שלו.'
              : 'A summary of the syntax taught across the Python module, recovered from the closing summary of every Jupyter notebook in the course — not generic Python documentation. Each topic is numbered by its original notebook number.'}
          </p>
          <div className="flex justify-center mb-10">
            <a
              href="https://www.w3schools.com/python/python_ref_modules.asp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[9px] tracking-brand uppercase text-ink border border-ink px-3 py-1.5 hover:bg-ink hover:text-paper transition font-sans"
            >
              {locale === 'he' ? 'עיון מודולי פייתון — W3Schools' : 'Python Module Reference — W3Schools'} ↗
            </a>
          </div>
          <div className="grid gap-8">
            {syntaxGuide.map((topic) => (
              <SyntaxTopicCard key={topic.number} topic={topic} locale={locale} printLabel={cards('printCard')} />
            ))}
          </div>
        </>
      ) : (
        section && (
          <>
            <div className="text-[10px] tracking-brand uppercase text-accent font-sans font-semibold text-center mb-4">
              {locale === 'he' ? 'שפה נוספת' : 'Additional Language'}
            </div>
            <h1 className="text-3xl md:text-4xl small-caps tracking-wide mb-2 text-center">
              {section.language[locale]}
            </h1>
            <div className="ornament text-xl text-accent text-center mb-8"></div>
            <p className={`text-center italic text-muted max-w-2xl mx-auto text-sm ${section.attachments?.length ? 'mb-4' : 'mb-10'}`}>
              {section.note[locale]}
            </p>
            {section.attachments && section.attachments.length > 0 && (
              <div className="flex flex-wrap justify-center gap-2 mb-10">
                {section.attachments.map((att) => (
                  <a
                    key={att.url}
                    href={att.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[9px] tracking-brand uppercase text-ink border border-ink px-3 py-1.5 hover:bg-ink hover:text-paper transition font-sans"
                  >
                    {att.label[locale]} ↗
                  </a>
                ))}
              </div>
            )}
            <div className="grid gap-8">
              {section.topics.map((topic) => (
                <SyntaxTopicCard key={topic.number} topic={topic} locale={locale} printLabel={cards('printCard')} />
              ))}
            </div>
          </>
        )
      )}
    </div>
  );
}
