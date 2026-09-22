import type { Bilingual } from '@/lib/registry';

// A growing dictionary of diagrams explaining Data Science concepts — sourced from Dr. Zuari's
// newer "Practical Statistics," "Pandas," "K-Means Clustering," and "Linear/Logistic Regression"
// lecture decks (not yet linked to a specific recorded session on this site). Each entry cites its
// real source slide/quote; illustrative worked examples are labeled as such, not claimed as verbatim.
export type DsDiagramTopic = {
  id: string;
  title: Bilingual;
  source: string;
  summary: Bilingual;
};

export const dsDiagramTopics: DsDiagramTopic[] = [
  {
    id: 'standard-deviation',
    title: { en: 'Standard Deviation', he: 'סטיית תקן' },
    source: 'Dr. Zuari · "Practical Statistics" deck, slide 19 — "Deviations, Variance & Std"',
    summary: {
      en: `Variance is the average squared deviation from the mean; the standard deviation is its square root — back in the original units.`,
      he: `שונות היא ממוצע הסטיות המרובעות מהממוצע; סטיית התקן היא השורש הריבועי שלה — בחזרה ליחידות המקוריות.`,
    },
  },
];
