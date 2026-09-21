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
  exampleUrl?: string;    // a live, deployed example of this card's assignment/exercise
  guideUrl?: string;      // a full step-by-step guide elsewhere on this site for this card's topic
};
