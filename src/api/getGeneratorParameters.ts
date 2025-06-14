import { config } from '@/config'
import rawData from '@/mocks/mocked-data/mocked-generator.json'

import type { GeneratorParameters } from '@/types/generator'

const mockedParameters = rawData.parameters

export const getGeneratorParameters = async (): Promise<GeneratorParameters> => {
  if (config.mocked) {
    return mockedParameters
  }

  const response = await fetch(`/api/generator/parameters`)
  if (!response.ok) {
    throw new Error(`getGeneratorParameters failed: ${response.status}`)
  }

  return response.json()
}
