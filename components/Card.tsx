'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import type { CardContent } from '@/content/cards/types';

type Props = {
  card: CardContent;
  locale: 'en' | 'he';
  total: number;
};

export default function Card({ card, locale, total }: Props) {
  const [expanded, setExpanded] = useState(false);
  const t = useTranslations('cards');

  const handlePrint = () => {
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;
    const html = renderCardForPrint(card, locale);
    printWindow.document.write(html);
    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => printWindow.print(), 250);
  };

  return (
    <article
      id={`card-${card.number}`}
      className="card border border-rule bg-paper p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow"
    >
      <header className="flex items-baseline justify-between border-b border-ink pb-3 mb-4">
        <span className="text-[9px] tracking-brand uppercase text-accent font-sans font-semibold flex items-center gap-1.5">
          <span aria-hidden="true" className="text-base leading-none not-italic normal-case">🕎</span>
          {locale === 'he' ? `כרטיס ${card.number}` : `Card ${card.number}`}
        </span>
        <span className="text-[9px] tracking-brand uppercase text-muted font-sans">
          {card.number} / {String(total).padStart(2, '0')}
        </span>
      </header>

      <div className="text-center mb-6">
        <h3 className="text-2xl small-caps tracking-wide mb-1">
          {card.title[locale]}
        </h3>
        <p className="text-xs italic text-muted">{card.subtitle[locale]}</p>
      </div>

      <div className={`space-y-4 ${expanded ? '' : 'max-h-80 overflow-hidden relative'}`}>
        {card.sections.map((section, i) => (
          <section key={i}>
            <h4 className="text-[9px] tracking-brand uppercase text-accent font-sans font-semibold border-b border-rule pb-1 mb-2">
              {section.heading[locale]}
            </h4>
            <p className="text-sm leading-relaxed">{section.body[locale]}</p>
          </section>
        ))}
        {!expanded && card.sections.length > 2 && (
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-paper to-transparent pointer-events-none" />
        )}
      </div>

      <div className="mt-6 pt-4 border-t border-rule flex justify-between items-center no-print">
        {card.sections.length > 2 ? (
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-[10px] tracking-brand uppercase text-ink hover:text-accent transition font-sans"
          >
            {expanded ? t('collapseCard') : t('expandCard')}
          </button>
        ) : (
          <span />
        )}
        <button
          onClick={handlePrint}
          className="text-[10px] tracking-brand uppercase text-ink border border-ink px-3 py-1 hover:bg-ink hover:text-paper transition font-sans"
        >
          {t('printCard')}
        </button>
      </div>

      <div className="mt-4 border border-ink p-3 text-center">
        <p className="text-sm italic">
          <span className="text-accent mx-2">❦</span>
          {card.principle[locale]}
          <span className="text-accent mx-2">❦</span>
        </p>
      </div>
    </article>
  );
}

function renderCardForPrint(card: CardContent, locale: 'en' | 'he'): string {
  const dir = locale === 'he' ? 'rtl' : 'ltr';
  const sections = card.sections
    .map(
      (s) =>
        `<h2>${escapeHtml(s.heading[locale])}</h2><p>${escapeHtml(s.body[locale])}</p>`
    )
    .join('');
  return `<!DOCTYPE html>
<html lang="${locale}" dir="${dir}">
<head><meta charset="UTF-8"><title>Card ${card.number}</title>
<style>
  body { font-family: Georgia, serif; background: #faf8f3; color: #1a1a1a; margin: 0; padding: 20mm; }
  .header { border-bottom: 1.5px solid #1a1a1a; padding-bottom: 8px; margin-bottom: 12px; display: flex; justify-content: space-between; font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 9px; letter-spacing: 3px; text-transform: uppercase; }
  .accent { color: #8b2a2a; }
  .muted { color: #6b6b6b; }
  h1 { font-size: 26px; margin: 0 0 4px; letter-spacing: 1px; font-weight: normal; font-variant: small-caps; text-align: center; }
  .subtitle { font-style: italic; color: #6b6b6b; font-size: 12px; text-align: center; margin-bottom: 20px; }
  h2 { font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 9px; letter-spacing: 2.5px; text-transform: uppercase; color: #8b2a2a; margin: 12px 0 4px; padding-bottom: 2px; border-bottom: 0.5px solid #d4d0c8; font-weight: 600; }
  p { font-size: 10.5px; line-height: 1.5; margin: 4px 0; }
  .principle { text-align: center; margin-top: 20px; padding: 12px; border: 0.5px solid #1a1a1a; font-style: italic; font-size: 13px; }
  @page { size: A4; margin: 0; }
</style></head>
<body>
  <div class="header">
    <span class="muted">Neoclassical Pop Art · Studio</span>
    <span class="accent">Card ${card.number}</span>
  </div>
  <h1>${escapeHtml(card.title[locale])}</h1>
  <div class="subtitle">${escapeHtml(card.subtitle[locale])}</div>
  ${sections}
  <div class="principle"><span class="accent">❦</span> ${escapeHtml(card.principle[locale])} <span class="accent">❦</span></div>
</body></html>`;
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
