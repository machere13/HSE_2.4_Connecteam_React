import { config } from '@/config'
import { handleHttpError } from '@/lib/handleHttpError'
import rawData from '@/mocks/mocked-data/mocked-generator.json'

import type { GeneratorIdea } from '@/types/generator'

type RawIdea = Omit<GeneratorIdea, 'content'> & { content: unknown[] }

const fixIdeaContent = (idea: RawIdea): GeneratorIdea => ({
  ...idea,
  content: idea.content.map(block => {
    switch ((block as { type: string }).type) {
      case 'heading-3':
        return { type: 'heading-3' as const, text: (block as { text: string }).text }
      case 'titleParagraph':
        return {
          type: 'titleParagraph' as const,
          title: (block as { title: string }).title,
          text: (block as { text: string }).text,
        }
      case 'purpleBox':
        return {
          type: 'purpleBox' as const,
          title: (block as { title: string }).title,
          text: (block as { text: string }).text,
        }
      case 'textList':
        return {
          type: 'textList' as const,
          title: (block as { title: string }).title,
          items: Array.isArray((block as { items: unknown[] }).items)
            ? (block as { items: unknown[] }).items.filter(
                (item): item is string => typeof item === 'string',
              )
            : [],
        }
      case 'cardList':
        return {
          type: 'cardList' as const,
          items: Array.isArray((block as { items: unknown[] }).items)
            ? (block as { items: unknown[] }).items.filter(
                (item): item is { title: string; description: string } =>
                  typeof item === 'object' &&
                  item !== null &&
                  'title' in item &&
                  'description' in item,
              )
            : [],
        }
      default:
        throw new Error(`Unknown block type: ${(block as { type: string }).type}`)
    }
  }),
})

const mockedIdeas = rawData.ideas.map((idea: unknown) => fixIdeaContent(idea as RawIdea))

export const getGeneratorIdeas = async (): Promise<GeneratorIdea[]> => {
  if (config.mocked) {
    return mockedIdeas
  }

  if (typeof window === 'undefined') {
    const fs = await import('fs')
    const path = await import('path')
    const filePath = path.join(process.cwd(), 'public', 'data', 'generator.json')
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const data = JSON.parse(fileContents)
    return data.ideas.map((idea: unknown) => fixIdeaContent(idea as RawIdea))
  }

  try {
    const response = await fetch('/api/generator')
    if (!response.ok) {
      if (!handleHttpError(response.status)) {
        throw new Error(`getGeneratorIdeas failed: ${response.status}`)
      }
      return []
    }
    const { ideas } = await response.json()
    return ideas.map((idea: unknown) => fixIdeaContent(idea as RawIdea))
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
