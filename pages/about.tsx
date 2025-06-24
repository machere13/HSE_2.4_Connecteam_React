import React, { useEffect } from 'react'

import { getQuestions } from '@/api/getQuestions'
import C_FAQCardListItems from '@/components/collections/C_FAQCardListItems/C_FAQCardListItems'
import M_AboutArticlesDirectionPlate from '@/components/molecules/M_AboutArticlesDirectionPlate/M_AboutArticlesDirectionPlate'
import O_Footer from '@/components/organisms/O_Footer/O_Footer'
import Q_PageLoader, { usePageLoader } from '@/components/quarks/Q_PageLoader/Q_PageLoader'
import SO_Header from '@/components/super-organisms/SO_Header/SO_Header'
import W_AboutContentSection from '@/components/wrappers/W_AboutContentSection/W_AboutContentSection'
import W_AboutGeneratorDirectionSection from '@/components/wrappers/W_AboutGeneratorDirectionSection/W_AboutGeneratorDirectionSection'
import W_AboutStartingPageSection from '@/components/wrappers/W_AboutStartingPageSection/W_AboutStartingPageSection'
import W_AboutTeamSection from '@/components/wrappers/W_AboutTeamSection/W_AboutTeamSection'
import { Meta } from '@/lib/Meta'

import type { Questions } from '@/types/questions'
import type { GetStaticProps } from 'next'

interface AboutPageProps {
  questions: Questions
}

export default function AboutPage({ questions }: AboutPageProps) {
  const { isLoading, stopLoading } = usePageLoader()

  useEffect(() => {
    const timer = setTimeout(() => {
      stopLoading()
    }, 1000)

    return () => clearTimeout(timer)
  }, [stopLoading])

  return (
    <>
      <Q_PageLoader isLoading={isLoading} />
      <div className='page'>
        <Meta
          title='О нас | Connecteam'
          description='Узнайте больше о команде Connecteam и нашем подходе к деловой коммуникации в IT'
          url='https://connecteam.space/about'
        />
        <SO_Header position='absolute' />
        <W_AboutStartingPageSection />
        <div className='preview_content_wrapper'>
          <W_AboutContentSection />
        </div>
        <W_AboutGeneratorDirectionSection />
        <div className='preview_content_wrapper'>
          <W_AboutTeamSection />
          <C_FAQCardListItems questions={questions} />
          <M_AboutArticlesDirectionPlate />
        </div>
        <O_Footer />
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps<AboutPageProps> = async () => {
  const questions = await getQuestions()

  return {
    props: {
      questions,
    },
  }
}
