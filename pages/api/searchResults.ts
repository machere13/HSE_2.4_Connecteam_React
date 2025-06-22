import fs from 'fs'
import path from 'path'

import type { SearchResult } from '@/types/search'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<SearchResult[] | { error: string }>,
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const filePath = path.join(process.cwd(), 'public', 'data', 'search.json')
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const results = JSON.parse(fileContents)

    res.status(200).json(results)
  } catch (error) {
    console.error('Error reading search results:', error)
    res.status(500).json({ error: 'Failed to fetch search results' })
  }
}
