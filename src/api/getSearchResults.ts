import { config } from '@/config';
import mockedSearchResults from '@/mocks/mocked-data/mocked-search.json';
import { createSearchIndex, getIndex } from '@/lib/searchIndex';
import { normalizeRussianText } from '@/lib/textUtils';

export type SearchResult = {
  title: string;
  description: string;
  url: string;
};

let initialized = false;

export const getSearchResults = async (query: string): Promise<SearchResult[]> => {
  if (config.mocked) {
    if (!initialized) {
      createSearchIndex(mockedSearchResults);
      initialized = true;
    }

    const index = getIndex();
    const normalizedQuery = normalizeRussianText(query);

    try {
      const results = await index.searchAsync(normalizedQuery, {
        limit: 10,
        enrich: true
      });

      const uniqueResults = new Map<string, SearchResult>();

      for (const group of results) {
        if (group.result) {
          for (const item of group.result) {
            if (typeof item === 'object' && 'doc' in item) {
              const doc = item.doc as SearchResult;
              if (!uniqueResults.has(doc.url)) {
                uniqueResults.set(doc.url, {
                  title: doc.title,
                  description: doc.description,
                  url: doc.url
                });
              }
            }
          }
        }
      }

      return Array.from(uniqueResults.values());
    } catch (error) {
      console.error('Search error:', error);
      return [];
    }
  }

  try {
    const response = await fetch('your-api-endpoint');
    return await response.json();
  } catch (error) {
    console.error('API error:', error);
    return [];
  }
};