import { config } from '@/config'
import rawData from '@/mocks/mocked-data/mocked-articles.json'

import type { ArticleData } from '@/types/article'

const mockedArticles = rawData as unknown as ArticleData[]

export const getArticles = async (): Promise<ArticleData[]> => {
  if (config.mocked) {
    return mockedArticles
  }

  if (typeof window === 'undefined') {
    return rawData as ArticleData[]
  }

  const response = await fetch('/api/articles')
  if (!response.ok) {
    throw new Error(`getArticles failed: ${response.status}`)
  }
  return response.json()
}
