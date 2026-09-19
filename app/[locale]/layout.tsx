import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales, type Locale } from '@/i18n';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HtmlLangDir from '@/components/HtmlLangDir';

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
  setRequestLocale(locale);
  const messages = await getMessages();
  const dir = locale === 'he' ? 'rtl' : 'ltr';
  return (
    <>
      <HtmlLangDir locale={locale} dir={dir} />
      <NextIntlClientProvider messages={messages}>
        <Header locale={locale} />
        <main className="min-h-[70vh]">{children}</main>
        <Footer />
      </NextIntlClientProvider>
    </>
  );
}
