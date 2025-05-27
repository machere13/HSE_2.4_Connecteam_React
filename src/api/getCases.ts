import { config } from '@/config'
import rawData from '@/mocks/mocked-data/mocked-cases.json'

import type { CaseData } from '@/types/case'

const mockedCases = rawData as CaseData[]

export const getCases = async (): Promise<CaseData[]> => {
  if (config.mocked) {
    return mockedCases
  }

  const response = await fetch(`/api/cases`)
  if (!response.ok) {
    throw new Error(`getCases failed: ${response.status}`)
  }

  return response.json()
}
