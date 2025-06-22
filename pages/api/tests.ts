import fs from 'fs'
import path from 'path'

import type { TestData } from '@/types/test'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<TestData[] | { error: string }>,
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const filePath = path.join(process.cwd(), 'public', 'data', 'tests.json')
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const tests = JSON.parse(fileContents) as TestData[]

    res.status(200).json(tests)
  } catch (error) {
    console.error('Error reading tests:', error)
    res.status(500).json({ error: 'Failed to fetch tests' })
  }
}
