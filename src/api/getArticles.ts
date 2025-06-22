import { config } from '@/config'
import rawData from '@/mocks/mocked-data/mocked-articles.json'

import type { ArticleData } from '@/types/article'

const mockedArticles = rawData as unknown as ArticleData[]

export const getArticles = async (): Promise<ArticleData[]> => {
  if (config.mocked) {
    return mockedArticles
  }

  if (typeof window === 'undefined') {
    const fs = await import('fs')
    const path = await import('path')
    const filePath = path.join(process.cwd(), 'public', 'data', 'articles.json')
    const fileContents = fs.readFileSync(filePath, 'utf8')
    return JSON.parse(fileContents) as ArticleData[]
  }

  const response = await fetch('/api/articles')
  if (!response.ok) {
    throw new Error(`getArticles failed: ${response.status}`)
  }
  return response.json()
}
