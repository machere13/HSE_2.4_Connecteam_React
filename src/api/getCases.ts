import { config } from '@/config'
import rawData from '@/mocks/mocked-data/mocked-cases.json'

import type { CaseData } from '@/types/case'

const mockedCases = rawData as unknown as CaseData[]

export const getCases = async (): Promise<CaseData[]> => {
  if (config.mocked) {
    return mockedCases
  }

  if (typeof window === 'undefined') {
    const fs = await import('fs')
    const path = await import('path')
    const filePath = path.join(process.cwd(), 'public', 'data', 'cases.json')
    const fileContents = fs.readFileSync(filePath, 'utf8')
    return JSON.parse(fileContents) as CaseData[]
  }

  const response = await fetch('/api/cases')
  if (!response.ok) {
    throw new Error(`getCases failed: ${response.status}`)
  }
  return response.json()
}
