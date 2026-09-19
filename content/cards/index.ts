import type { CardContent } from './types';
import { session02Cards } from './session02';
import { session03Cards } from './session03';
import { session04Cards } from './session04';
import { session19Cards } from './session19';

export const cardDecks: Record<string, CardContent[]> = {
  'session-02-n8n': session02Cards,
  'session-03-python-0': session03Cards,
  'session-04-python-1': session04Cards,
  'session-19-logistic-regression': session19Cards,
};

export function getDeck(slug: string): CardContent[] | undefined {
  return cardDecks[slug];
}
