import React, { useEffect, useState } from 'react'

import { getGeneratorIdeas } from '@/api/getGeneratorIdeas'
import O_Footer from '@/components/organisms/O_Footer/O_Footer'
import O_Generator from '@/components/organisms/O_Generator/O_Generator'
import O_GeneratorIdea from '@/components/organisms/O_GeneratorIdea/O_GeneratorIdea'
import Q_Grid from '@/components/quarks/Q_Grid/Q_Grid'
import Q_PageLoader, { usePageLoader } from '@/components/quarks/Q_PageLoader/Q_PageLoader'
import SO_Header from '@/components/super-organisms/SO_Header/SO_Header'
import { findBestGeneratorIdea } from '@/lib/findBestGeneratorIdea'
import { Meta } from '@/lib/Meta'

import type { GeneratorIdea } from '@/types/generator'

export default function GeneratorPage() {
  const [selectedIdea, setSelectedIdea] = useState<GeneratorIdea | null>(null)
  const [ideas, setIdeas] = useState<GeneratorIdea[]>([])
  const { isLoading, stopLoading } = usePageLoader()

  useEffect(() => {
    getGeneratorIdeas().then(data => {
      setIdeas(data)
    })
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      stopLoading()
    }, 1000)

    return () => clearTimeout(timer)
  }, [stopLoading])

  const handleGenerate = async (params: {
    amount: string
    goal: string
    time: string
    mode: string
  }) => {
    await new Promise(resolve => setTimeout(resolve, 2000))
    const bestMatch = findBestGeneratorIdea(ideas, params)
    if (bestMatch) {
      setSelectedIdea(bestMatch)
    }
  }

  return (
    <>
      <Q_PageLoader isLoading={isLoading} />
      <div className='page'>
        <Meta
          title='Генератор тимбилдингов | Connecteam'
          description='Придумали за вас классные идеи тимбилдингов для вашего командного коннекта'
          url='https://connecteam.space/interactives/generator'
        />
        <SO_Header />
        <div className='preview_content_wrapper'>
          <O_Generator onGenerate={handleGenerate} />
          {selectedIdea && <O_GeneratorIdea idea={selectedIdea} />}
        </div>
        <Q_Grid variant='gray' />
        <O_Footer />
      </div>
    </>
  )
}
