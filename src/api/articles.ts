import path from 'path'
import fs from 'fs/promises'

export interface Article {
  id: number
  slug: string
  title: string
  content: string
}

export const getArticles = async (): Promise<Article[]> => {
  const jsonPath = path.join(process.cwd(), 'public', 'data', 'articles.json')
  const fileContents = await fs.readFile(jsonPath, 'utf8')
  return JSON.parse(fileContents)
}

export const articlesHandler = async () => {
  try {
    const articles = await getArticles()
    return {
      status: 200,
      data: articles
    }
  } catch (error) {
    console.error('Error fetching articles:', error)
    return {
      status: 500,
      error: 'Failed to load articles'
    }
  }
}