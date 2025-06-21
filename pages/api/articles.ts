import fs from 'fs'
import path from 'path'

import type { ArticleData } from '@/types/article'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ArticleData[] | { error: string }>,
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const filePath = path.join(process.cwd(), 'public', 'data', 'articles.json')
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const articles = JSON.parse(fileContents) as ArticleData[]

    res.status(200).json(articles)
  } catch (error) {
    console.error('Error reading articles:', error)
    res.status(500).json({ error: 'Failed to fetch articles' })
  }
}
