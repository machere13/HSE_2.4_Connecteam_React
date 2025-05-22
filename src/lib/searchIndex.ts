import { Document } from 'flexsearch';
import type { SearchResult } from '@/api/getSearchResults';
import { normalizeRussianText } from '@/lib/textUtils';

interface IndexedDocument extends SearchResult {
  normalizedTitle: string;
  normalizedDescription: string;
  [key: string]: any;
}

let index: Document<IndexedDocument, true> | null = null;

export const createSearchIndex = (data: SearchResult[]): void => {
  const indexedDocuments: IndexedDocument[] = data.map(doc => ({
    ...doc,
    normalizedTitle: normalizeRussianText(doc.title),
    normalizedDescription: normalizeRussianText(doc.description)
  }));

  index = new Document<IndexedDocument, true>({
    preset: 'score',
    tokenize: 'forward',
    document: {
      id: 'url',
      index: ['normalizedTitle', 'normalizedDescription'],
      store: true
    }
  });

  indexedDocuments.forEach(doc => index?.add(doc));
};

export const getIndex = (): Document<IndexedDocument, true> => {
  if (!index) throw new Error('Search index not initialized');
  return index;
};