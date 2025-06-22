import React, { useState } from 'react'

import O_Footer from '@/components/organisms/O_Footer/O_Footer'
import O_Generator from '@/components/organisms/O_Generator/O_Generator'
import O_GeneratorIdea from '@/components/organisms/O_GeneratorIdea/O_GeneratorIdea'
import Q_Grid from '@/components/quarks/Q_Grid/Q_Grid'
import SO_Header from '@/components/super-organisms/SO_Header/SO_Header'
import { Meta } from '@/lib/Meta'
import mockedData from '@/mocks/mocked-data/mocked-generator.json'

import type { GeneratorIdea } from '@/types/generator'

export default function GeneratorPage() {
  const [selectedIdea, setSelectedIdea] = useState<GeneratorIdea | null>(null)

  const handleGenerate = (params: { amount: string; goal: string; time: string; mode: string }) => {
    const bestMatch = mockedData.ideas.find(idea => {
      const matchesAmount = idea.matches.teamSize.includes(params.amount)
      const matchesGoal = idea.matches.category.includes(params.goal)
      const matchesTime = idea.matches.duration.includes(params.time)
      const matchesMode = idea.matches.format.includes(params.mode)

      return matchesAmount && matchesGoal && matchesTime && matchesMode
    })

    if (bestMatch) {
      setSelectedIdea({
        id: bestMatch.id,
        title: bestMatch.title,
        matches: bestMatch.matches,
        content: bestMatch.content.map(block => {
          switch (block.type) {
            case 'heading-3':
              return { type: 'heading-3' as const, text: block.text || '' }
            case 'titleParagraph':
              return {
                type: 'titleParagraph' as const,
                title: block.title || '',
                text: block.text || '',
              }
            case 'purpleBox':
              return {
                type: 'purpleBox' as const,
                title: block.title || '',
                text: block.text || '',
              }
            case 'textList':
              return {
                type: 'textList' as const,
                title: block.title || '',
                items: Array.isArray(block.items)
                  ? (block.items as unknown[]).filter(
                      (item): item is string => typeof item === 'string',
                    )
                  : [],
              }
            case 'cardList':
              return {
                type: 'cardList' as const,
                items: Array.isArray(block.items)
                  ? (block.items as unknown[]).filter(
                      (item): item is { title: string; description: string } =>
                        typeof item === 'object' &&
                        item !== null &&
                        'title' in item &&
                        'description' in item,
                    )
                  : [],
              }
            default:
              throw new Error(`Unknown block type: ${block.type}`)
          }
        }),
      })
    }
  }

  return (
    <div className='page'>
      <Meta
        title='Генератор тимбилдингов | Connecteam'
        description='Придумали за вас классные идеи тимбилдингов для вашего командного коннекта'
      />
      <SO_Header />
      <O_Generator onGenerate={handleGenerate} />
      {selectedIdea && <O_GeneratorIdea idea={selectedIdea} />}
      <Q_Grid variant='gray' />
      <O_Footer />
    </div>
  )
}
