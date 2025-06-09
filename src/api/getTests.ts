import { config } from '@/config'
import rawData from '@/mocks/mocked-data/mocked-tests.json'

import type { TestData } from '@/types/test'

const mockedTests = rawData as unknown as TestData[]

export const getTests = async (): Promise<TestData[]> => {
  if (config.mocked) {
    return mockedTests
  }

  const response = await fetch(`/api/articles`)
  if (!response.ok) {
    throw new Error(`getTests failed: ${response.status}`)
  }

  return response.json()
}
