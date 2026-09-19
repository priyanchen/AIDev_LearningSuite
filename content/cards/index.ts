import type { CardContent } from './types';
import { session02Cards } from './session02';
import { session03Cards } from './session03';
import { session04Cards } from './session04';
import { session05Cards } from './session05';
import { session06Cards } from './session06';
import { session07Cards } from './session07';
import { session08Cards } from './session08';
import { session09Cards } from './session09';
import { session10Cards } from './session10';
import { session11Cards } from './session11';
import { session12Cards } from './session12';
import { session19Cards } from './session19';

export const cardDecks: Record<string, CardContent[]> = {
  'session-02-n8n': session02Cards,
  'session-03-python-0': session03Cards,
  'session-04-python-1': session04Cards,
  'session-05-python-2': session05Cards,
  'session-06-python-3': session06Cards,
  'session-07-python-4': session07Cards,
  'session-08-python-5': session08Cards,
  'session-09-python-6': session09Cards,
  'session-10-python-7': session10Cards,
  'session-11-python-8': session11Cards,
  'session-12-python-9': session12Cards,
  'session-19-logistic-regression': session19Cards,
};

export function getDeck(slug: string): CardContent[] | undefined {
  return cardDecks[slug];
}
