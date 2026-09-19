'use client';

import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');
  const site = useTranslations('site');

  return (
    <footer className="border-t border-rule bg-paper mt-16 no-print">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between gap-4 text-[10px] tracking-brand uppercase text-muted font-sans">
        <span>{site('brand')} · {site('author')}</span>
        <span>{t('rights')}</span>
        <span>{t('credit')} · v2.0</span>
      </div>
    </footer>
  );
}
