import type { Bilingual } from '@/lib/registry';

export type CardSection = {
  heading: Bilingual;
  body: Bilingual;
};

export type CardContent = {
  number: string;         // "00" through "10"
  title: Bilingual;
  subtitle: Bilingual;
  sections: CardSection[];
  principle: Bilingual;   // The closing meta-principle
};
