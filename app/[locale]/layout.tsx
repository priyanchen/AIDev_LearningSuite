import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales, type Locale } from '@/i18n';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '../globals.css';

export const metadata: Metadata = {
  title: 'AI Developer Course',
  description: 'Card-based curriculum · Neoclassical Pop Art',
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!locales.includes(locale as Locale)) notFound();
  const messages = await getMessages();
  const dir = locale === 'he' ? 'rtl' : 'ltr';
  return (
    <html lang={locale} dir={dir}>
      <body className="min-h-screen bg-paper text-ink font-serif">
        <NextIntlClientProvider messages={messages}>
          <Header locale={locale} />
          <main className="min-h-[70vh]">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
