import fs from 'fs'
import path from 'path'

import type { ArticleData } from '@/types/article'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ArticleData[] | { error: string }>,
) {
  console.log('API handler called, method:', req.method)

  if (req.method !== 'GET') {
    console.log('Method not allowed:', req.method)
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    console.log('Reading articles from JSON file...')
    const filePath = path.join(process.cwd(), 'public', 'data', 'articles.json')
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const articles = JSON.parse(fileContents) as ArticleData[]

    console.log('Articles count:', articles.length)
    res.status(200).json(articles)
  } catch (error) {
    console.error('Error reading articles:', error)
    res.status(500).json({ error: 'Failed to fetch articles' })
  }
}
