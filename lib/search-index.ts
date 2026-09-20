import { sessions, modules, type Bilingual } from '@/lib/registry';
import { cardDecks } from '@/content/cards';
import { installGuide } from '@/content/install-guide';
import { syntaxGuide } from '@/content/syntax-guide';
import { recommendationCategories } from '@/content/recommendations';

export type SearchResultType = 'module' | 'session' | 'card' | 'install' | 'syntax' | 'recommendation';

export type SearchResult = {
  type: SearchResultType;
  title: string;
  subtitle?: string;
  href: string;
  haystack: string; // lowercased, locale-specific text this result is matched against
};

const typeLabels: Record<SearchResultType, Bilingual> = {
  module: { en: 'Module', he: 'מודול' },
  session: { en: 'Session', he: 'מפגש' },
  card: { en: 'Card', he: 'כרטיס' },
  install: { en: 'Install Guide', he: 'מדריך התקנה' },
  syntax: { en: 'Syntax', he: 'תחביר' },
  recommendation: { en: 'Recommended', he: 'מומלץ' },
};

export function getTypeLabel(type: SearchResultType, locale: 'en' | 'he') {
  return typeLabels[type][locale];
}

export function buildSearchIndex(locale: 'en' | 'he'): SearchResult[] {
  const results: SearchResult[] = [];

  for (const m of modules) {
    if (m.visibility === 'hidden') continue;
    results.push({
      type: 'module',
      title: m.title[locale],
      subtitle: m.description[locale],
      href: `/${locale}/modules/${m.id}`,
      haystack: `${m.title[locale]} ${m.description[locale]}`.toLowerCase(),
    });
  }

  for (const s of sessions) {
    if (s.status === 'deferred') continue;
    results.push({
      type: 'session',
      title: s.title[locale],
      subtitle: s.headline[locale],
      href: `/${locale}/lessons/${s.slug}`,
      haystack: `${s.title[locale]} ${s.headline[locale]} ${(s.concepts ?? []).join(' ')}`.toLowerCase(),
    });

    const deck = cardDecks[s.slug];
    if (deck) {
      for (const card of deck) {
        results.push({
          type: 'card',
          title: card.title[locale],
          subtitle: card.subtitle[locale],
          href: `/${locale}/lessons/${s.slug}#card-${card.number}`,
          haystack: `${card.title[locale]} ${card.subtitle[locale]}`.toLowerCase(),
        });
      }
    }
  }

  for (const category of installGuide) {
    for (const item of category.items) {
      results.push({
        type: 'install',
        title: item.name,
        subtitle: item.whatItDoes[locale],
        href: item.id ? `/${locale}/install#${item.id}` : `/${locale}/install`,
        haystack: `${item.name} ${item.whatItDoes[locale]}`.toLowerCase(),
      });
    }
  }

  for (const topic of syntaxGuide) {
    results.push({
      type: 'syntax',
      title: topic.title[locale],
      subtitle: topic.keyTakeaway?.[locale],
      href: `/${locale}/syntax#topic-${topic.number}`,
      haystack: `${topic.title[locale]} ${topic.points.map((p) => p[locale]).join(' ')}`.toLowerCase(),
    });
  }

  for (const category of recommendationCategories) {
    for (const item of category.items) {
      results.push({
        type: 'recommendation',
        title: item.name,
        subtitle: item.context[locale],
        href: `/${locale}/recommended`,
        haystack: `${item.name} ${item.bio[locale]} ${item.context[locale]}`.toLowerCase(),
      });
    }
  }

  return results;
}
