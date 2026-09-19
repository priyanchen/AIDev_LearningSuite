'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';

export default function Header({ locale }: { locale: string }) {
  const t = useTranslations('nav');
  const site = useTranslations('site');
  const pathname = usePathname();

  const otherLocale = locale === 'en' ? 'he' : 'en';
  const otherPath = pathname.replace(`/${locale}`, `/${otherLocale}`);

  return (
    <header className="border-b border-ink bg-paper sticky top-0 z-40 no-print">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href={`/${locale}`} className="flex flex-col">
          <span className="text-[9px] tracking-brand uppercase text-muted font-sans">
            {site('brand')}
          </span>
          <span className="text-lg small-caps tracking-wide">
            {site('title')}
          </span>
        </Link>

        <nav className="flex items-center gap-6 text-sm">
          <Link href={`/${locale}`} className="hover:text-accent transition">
            {t('home')}
          </Link>
          <Link href={`/${locale}/modules`} className="hover:text-accent transition">
            {t('modules')}
          </Link>
          <Link href={`/${locale}/cards`} className="hover:text-accent transition">
            {t('cards')}
          </Link>
          <Link href={`/${locale}/install`} className="hover:text-accent transition">
            {t('install')}
          </Link>
          <Link
            href={otherPath}
            className="border border-ink px-3 py-1 text-[10px] tracking-brand uppercase font-sans hover:bg-ink hover:text-paper transition"
          >
            {locale === 'en' ? 'עברית' : 'English'}
          </Link>
        </nav>
      </div>
    </header>
  );
}
