'use client';

export type PrintSection = { heading: string; body: string };

type Props = {
  title: string;
  subtitle?: string;
  sections: PrintSection[];
  dir: 'ltr' | 'rtl';
  label: string;
  className?: string;
};

export default function PrintButton({ title, subtitle, sections, dir, label, className }: Props) {
  const handlePrint = () => {
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;
    printWindow.document.write(renderForPrint({ title, subtitle, sections, dir }));
    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => printWindow.print(), 250);
  };

  return (
    <button
      onClick={handlePrint}
      className={
        className ??
        'text-[10px] tracking-brand uppercase text-ink border border-ink px-3 py-1 hover:bg-ink hover:text-paper transition font-sans no-print'
      }
    >
      {label}
    </button>
  );
}

function renderForPrint({
  title,
  subtitle,
  sections,
  dir,
}: {
  title: string;
  subtitle?: string;
  sections: PrintSection[];
  dir: 'ltr' | 'rtl';
}): string {
  const body = sections
    .map((s) => `<h2>${escapeHtml(s.heading)}</h2><p>${escapeHtml(s.body).replace(/\n/g, '<br/>')}</p>`)
    .join('');
  return `<!DOCTYPE html>
<html lang="${dir === 'rtl' ? 'he' : 'en'}" dir="${dir}">
<head><meta charset="UTF-8"><title>${escapeHtml(title)}</title>
<style>
  body { font-family: Georgia, serif; background: #faf8f3; color: #1a1a1a; margin: 0; padding: 20mm; }
  .header { border-bottom: 1.5px solid #1a1a1a; padding-bottom: 8px; margin-bottom: 12px; font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 9px; letter-spacing: 3px; text-transform: uppercase; color: #6b6b6b; }
  h1 { font-size: 26px; margin: 0 0 4px; letter-spacing: 1px; font-weight: normal; font-variant: small-caps; text-align: center; }
  .subtitle { font-style: italic; color: #6b6b6b; font-size: 12px; text-align: center; margin-bottom: 20px; }
  h2 { font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 9px; letter-spacing: 2.5px; text-transform: uppercase; color: #8b2a2a; margin: 12px 0 4px; padding-bottom: 2px; border-bottom: 0.5px solid #d4d0c8; font-weight: 600; }
  p { font-size: 10.5px; line-height: 1.5; margin: 4px 0; }
  @page { size: A4; margin: 0; }
</style></head>
<body>
  <div class="header">Neoclassical Pop Art · Studio</div>
  <h1>${escapeHtml(title)}</h1>
  ${subtitle ? `<div class="subtitle">${escapeHtml(subtitle)}</div>` : ''}
  ${body}
</body></html>`;
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
