import { config } from '@/config'
import rawData from '@/mocks/mocked-data/mocked-articles.json'

import type { ArticleData } from '@/types/article'

const mockedArticles = rawData as unknown as ArticleData[]

export const getArticles = async (): Promise<ArticleData[]> => {
  if (config.mocked) {
    return mockedArticles
  }

  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
    const response = await fetch(`${baseUrl}/api/articles`)

    if (!response.ok) {
      console.error('API error:', response.status)
      throw new Error(`getArticles failed: ${response.status}`)
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error('Fetch error:', error)
    throw error
  }
}
