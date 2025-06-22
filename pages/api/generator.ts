import fs from 'fs'
import path from 'path'

import type { GeneratorParameters } from '@/types/generator'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ parameters: GeneratorParameters } | { error: string }>,
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const filePath = path.join(process.cwd(), 'public', 'data', 'generator.json')
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const data = JSON.parse(fileContents)
    res.status(200).json({ parameters: data.parameters })
  } catch (error) {
    console.error('Error reading generator data:', error)
    res.status(500).json({ error: 'Failed to fetch generator data' })
  }
}
