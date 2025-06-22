import { config } from '@/config'
import rawData from '@/mocks/mocked-data/mocked-questions.json'

import type { Questions } from '@/types/questions'

const mockedQuestions = rawData as Questions

export const getQuestions = async (): Promise<Questions> => {
  if (config.mocked) {
    return mockedQuestions
  }

  if (typeof window === 'undefined') {
    const fs = await import('fs')
    const path = await import('path')
    const filePath = path.join(process.cwd(), 'public', 'data', 'questions.json')
    const fileContents = fs.readFileSync(filePath, 'utf8')
    return JSON.parse(fileContents) as Questions
  }

  const response = await fetch('/api/questions')
  if (!response.ok) {
    throw new Error(`getQuestions failed: ${response.status}`)
  }
  return response.json()
}
