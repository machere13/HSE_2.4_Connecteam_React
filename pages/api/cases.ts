import fs from 'fs'
import path from 'path'

import type { CaseData } from '@/types/case'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<CaseData[] | { error: string }>,
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const filePath = path.join(process.cwd(), 'public', 'data', 'cases.json')
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const cases = JSON.parse(fileContents) as CaseData[]

    res.status(200).json(cases)
  } catch (error) {
    console.error('Error reading cases:', error)
    res.status(500).json({ error: 'Failed to fetch cases' })
  }
}
