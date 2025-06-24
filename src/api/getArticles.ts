import { config } from '@/config'
import { handleHttpError } from '@/lib/handleHttpError'
import { getErrorCode } from '@/mocks/errorHandler'
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

  try {
    const response = await fetch('/api/articles')
    if (!response.ok) {
      if (!handleHttpError(response.status)) {
        throw new Error(`getArticles failed: ${response.status}`)
      }
      return []
    }
    return response.json()
  } catch (error) {
    if (
      error &&
      typeof error === 'object' &&
      'status' in error &&
      typeof error.status === 'number'
    ) {
      if (!handleHttpError(error.status)) {
        throw error
      }
    }
    return []
  }
}

export const getArticleBySlug = async (
  slug: string,
): Promise<{ article: ArticleData | null; errorCode: number | null }> => {
  const errorCode = getErrorCode(slug)

  if (config.mocked) {
    const article = mockedArticles.find(article => article.slug === slug) || null
    return { article, errorCode }
  }

  if (typeof window === 'undefined') {
    const fs = await import('fs')
    const path = await import('path')
    const filePath = path.join(process.cwd(), 'public', 'data', 'articles.json')
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const articles = JSON.parse(fileContents) as ArticleData[]
    const article = articles.find(article => article.slug === slug) || null
    return { article, errorCode }
  }

  try {
    const response = await fetch(`/api/articles/${slug}`)
    if (!response.ok) {
      if (!handleHttpError(response.status)) {
        throw new Error(`getArticleBySlug failed: ${response.status}`)
      }
      return { article: null, errorCode }
    }
    const article = await response.json()
    return { article, errorCode }
  } catch (error) {
    if (
      error &&
      typeof error === 'object' &&
      'status' in error &&
      typeof error.status === 'number'
    ) {
      if (!handleHttpError(error.status)) {
        throw error
      }
    }
    return { article: null, errorCode }
  }
}
