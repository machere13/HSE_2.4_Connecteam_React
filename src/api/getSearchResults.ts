import { config } from '@/config'
import mockedSearchResults from '@/mocks/mocked-data/mocked-search.json'

import type { SearchResult } from '@/types/search'

export const getSearchResults = async (query: string): Promise<SearchResult[]> => {
  if (typeof window !== 'undefined' && typeof window.__storybookSearchOverride === 'function') {
    return window.__storybookSearchOverride(query) as unknown as SearchResult[]
  }

  if (config.mocked) {
    if (!query.trim()) {
      return mockedSearchResults
    }
    return mockedSearchResults.filter(item =>
      item.title.toLowerCase().includes(query.toLowerCase()),
    )
  }

  if (typeof window === 'undefined') {
    const fs = await import('fs')
    const path = await import('path')
    const filePath = path.join(process.cwd(), 'public', 'data', 'search.json')
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const results = JSON.parse(fileContents) as SearchResult[]
    if (!query.trim()) {
      return results
    }
    return results.filter(item => item.title.toLowerCase().includes(query.toLowerCase()))
  }

  const response = await fetch(`/api/searchResults?query=${encodeURIComponent(query)}`)
  if (!response.ok) {
    throw new Error(`getSearchResults failed: ${response.status}`)
  }
  return response.json()
}
