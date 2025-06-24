import { config } from '@/config'
import { handleHttpError } from '@/lib/handleHttpError'
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

  try {
    const response = await fetch('/api/cases')
    if (!response.ok) {
      if (!handleHttpError(response.status)) {
        throw new Error(`getCases failed: ${response.status}`)
      }
      return []
    }
    return response.json()
  } catch (error) {
    if (
      error &&
      typeof error === 'object' &&
      'status' in error &&
      typeof error.status === 'number'
    ) {
      if (!handleHttpError(error.status)) {
        throw error
      }
    }
    return []
  }
}
