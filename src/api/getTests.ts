import { config } from '@/config'
import { handleHttpError } from '@/lib/handleHttpError'
import rawData from '@/mocks/mocked-data/mocked-tests.json'

import type { TestData } from '@/types/test'

const mockedTests = rawData as unknown as TestData[]

export const getTests = async (): Promise<TestData[]> => {
  if (config.mocked) {
    return mockedTests
  }

  if (typeof window === 'undefined') {
    const fs = await import('fs')
    const path = await import('path')
    const filePath = path.join(process.cwd(), 'public', 'data', 'tests.json')
    const fileContents = fs.readFileSync(filePath, 'utf8')
    return JSON.parse(fileContents) as TestData[]
  }

  try {
    const response = await fetch('/api/tests')
    if (!response.ok) {
      if (!handleHttpError(response.status)) {
        throw new Error(`getTests failed: ${response.status}`)
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
