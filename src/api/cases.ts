import fs from 'fs/promises'
import path from 'path'

export interface Case {
  id: number
  slug: string
  title: string
  content: string
}

export const getCases = async (): Promise<Case[]> => {
  const jsonPath = path.join(process.cwd(), 'public', 'data', 'cases.json')
  const fileContents = await fs.readFile(jsonPath, 'utf8')
  return JSON.parse(fileContents)
}

export const getCaseBySlug = async (slug: string): Promise<Case | undefined> => {
  const cases = await getCases()
  return cases.find(c => c.slug === slug)
}

export const casesHandler = async () => {
  try {
    const cases = await getCases()
    return {
      status: 200,
      data: cases,
    }
  } catch (error) {
    console.error('Error fetching cases:', error)
    return {
      status: 500,
      error: 'Failed to load cases',
    }
  }
}
