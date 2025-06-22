import { config } from '@/config'
import rawData from '@/mocks/mocked-data/mocked-generator.json'

import type { GeneratorParameters } from '@/types/generator'

const mockedParameters = rawData.parameters

export const getGeneratorParameters = async (): Promise<GeneratorParameters> => {
  if (config.mocked) {
    return mockedParameters
  }

  if (typeof window === 'undefined') {
    const fs = await import('fs')
    const path = await import('path')
    const filePath = path.join(process.cwd(), 'public', 'data', 'generator.json')
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const data = JSON.parse(fileContents)
    return data.parameters as GeneratorParameters
  }

  const response = await fetch('/api/generator')
  if (!response.ok) {
    throw new Error(`getGeneratorParameters failed: ${response.status}`)
  }
  const data = await response.json()
  return data.parameters as GeneratorParameters
}
