import fs from 'fs'
import path from 'path'

import type { Questions } from '@/types/questions'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Questions | { error: string }>,
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const filePath = path.join(process.cwd(), 'public', 'data', 'questions.json')
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const questions = JSON.parse(fileContents)
    res.status(200).json(questions)
  } catch (error) {
    console.error('Error reading questions:', error)
    res.status(500).json({ error: 'Failed to fetch questions' })
  }
}
