import React, { useState, useEffect } from 'react'

import { getGeneratorIdeas } from '@/api/getGeneratorIdeas'
import O_Footer from '@/components/organisms/O_Footer/O_Footer'
import O_Generator from '@/components/organisms/O_Generator/O_Generator'
import O_GeneratorIdea from '@/components/organisms/O_GeneratorIdea/O_GeneratorIdea'
import Q_Grid from '@/components/quarks/Q_Grid/Q_Grid'
import SO_Header from '@/components/super-organisms/SO_Header/SO_Header'
import { Meta } from '@/lib/Meta'

import type { GeneratorIdea } from '@/types/generator'

export default function GeneratorPage() {
  const [selectedIdea, setSelectedIdea] = useState<GeneratorIdea | null>(null)
  const [ideas, setIdeas] = useState<GeneratorIdea[]>([])

  useEffect(() => {
    getGeneratorIdeas().then(setIdeas)
  }, [])

  const handleGenerate = (params: { amount: string; goal: string; time: string; mode: string }) => {
    const bestMatch = ideas.find(idea => {
      const matchesAmount = idea.matches.teamSize.includes(params.amount)
      const matchesGoal = idea.matches.category.includes(params.goal)
      const matchesTime = idea.matches.duration.includes(params.time)
      const matchesMode = idea.matches.format.includes(params.mode)

      return matchesAmount && matchesGoal && matchesTime && matchesMode
    })

    if (bestMatch) {
      setSelectedIdea(bestMatch)
    }
  }

  return (
    <div className='page'>
      <Meta
        title='Генератор тимбилдингов | Connecteam'
        description='Придумали за вас классные идеи тимбилдингов для вашего командного коннекта'
        url='https://connecteam.space/interactives/generator'
      />
      <SO_Header />
      <O_Generator onGenerate={handleGenerate} />
      {selectedIdea && <O_GeneratorIdea idea={selectedIdea} />}
      <Q_Grid variant='gray' />
      <O_Footer />
    </div>
  )
}
