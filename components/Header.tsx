'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import SearchBox from './SearchBox';

export default function Header({ locale }: { locale: string }) {
  const t = useTranslations('nav');
  const site = useTranslations('site');
  const pathname = usePathname();

  const otherLocale = locale === 'en' ? 'he' : 'en';
  const otherPath = pathname.replace(`/${locale}`, `/${otherLocale}`);

  return (
    <header className="border-b border-ink bg-paper sticky top-0 z-40 no-print">
      <div className="max-w-6xl mx-auto px-6 py-2.5 flex items-center justify-between">
        <Link href={`/${locale}`} className="inline-flex flex-col w-max">
          <span
            className="block text-[8px] tracking-brand uppercase text-muted font-sans"
            style={{ textAlign: 'justify', textAlignLast: 'justify' }}
          >
            {site('brand')}
          </span>
          <span
            className="block text-sm small-caps tracking-wide text-accent"
            style={{ textAlign: 'justify', textAlignLast: 'justify' }}
          >
            {site('title')}
          </span>
        </Link>

        <nav className="flex items-center gap-3 text-xs whitespace-nowrap">
          <Link href={`/${locale}/modules`} className="hover:text-accent transition">
            {t('modules')}
          </Link>
          <Link href={`/${locale}/cards`} className="hover:text-accent transition">
            {t('cards')}
          </Link>
          <Link href={`/${locale}/install`} className="hover:text-accent transition">
            {t('install')}
          </Link>
          <Link href={`/${locale}/syntax`} className="hover:text-accent transition">
            {t('syntax')}
          </Link>
          <Link href={`/${locale}/recommended`} className="hover:text-accent transition">
            {t('recommended')}
          </Link>
          <Link href={`/${locale}/prompts`} className="hover:text-accent transition">
            {t('prompts')}
          </Link>
          <SearchBox locale={locale === 'he' ? 'he' : 'en'} />
          <Link
            href={otherPath}
            className="border border-ink px-2 py-1 text-[9px] tracking-brand uppercase font-sans hover:bg-ink hover:text-paper transition"
          >
            {locale === 'en' ? 'עברית' : 'English'}
          </Link>
        </nav>
      </div>
    </header>
  );
}
