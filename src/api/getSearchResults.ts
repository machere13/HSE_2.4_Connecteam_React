import { config } from '@/config'
import mockedSearchResults from '@/mocks/mocked-data/mocked-search.json'

export type SearchResult = {
  title: string
  description: string
  url: string
}

export const getSearchResults = async (query: string): Promise<SearchResult[]> => {
  if (typeof window !== 'undefined' && typeof window.__storybookSearchOverride === 'function') {
    return window.__storybookSearchOverride(query) as unknown as SearchResult[]
  }

  if (config.mocked) {
    return mockedSearchResults.filter(item =>
      item.title.toLowerCase().includes(query.toLowerCase()),
    )
  }

  const response = await fetch(`url`)
  if (!response.ok) {
    throw new Error(`getSearchResults failed: ${response.status}`)
  }

  return response.json()
}
