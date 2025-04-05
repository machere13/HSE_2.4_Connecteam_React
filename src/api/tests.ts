import path from 'path'
import fs from 'fs/promises'

export interface Test {
  id: number
  slug: string
  title: string
  content: string
}

export const getTests = async (): Promise<Test[]> => {
  const jsonPath = path.join(process.cwd(), 'public', 'data', 'tests.json')
  const fileContents = await fs.readFile(jsonPath, 'utf8')
  return JSON.parse(fileContents)
}

export const getTestBySlug = async (slug: string): Promise<Test | undefined> => {
  const tests = await getTests()
  return tests.find(c => c.slug === slug)
}

export const testsHandler = async () => {
  try {
    const tests = await getTests()
    return {
      status: 200,
      data: tests
    }
  } catch (error) {
    console.error('Error fetching tests:', error)
    return {
      status: 500,
      error: 'Failed to load tests'
    }
  }
}