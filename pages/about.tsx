import React from 'react'

import { getQuestions } from '@/api/getQuestions'
import C_FAQCardListItems from '@/components/collections/C_FAQCardListItems/C_FAQCardListItems'
import M_AboutArticlesDirectionPlate from '@/components/molecules/M_AboutArticlesDirectionPlate/M_AboutArticlesDirectionPlate'
import O_Footer from '@/components/organisms/O_Footer/O_Footer'
import SO_Header from '@/components/super-organisms/SO_Header/SO_Header'
import W_AboutContentSection from '@/components/wrappers/W_AboutContentSection/W_AboutContentSection'
import W_AboutGeneratorDirectionSection from '@/components/wrappers/W_AboutGeneratorDirectionSection/W_AboutGeneratorDirectionSection'
import W_AboutTeamSection from '@/components/wrappers/W_AboutTeamSection/W_AboutTeamSection'

import type { Questions } from '@/types/questions'
import type { GetStaticProps } from 'next'

interface AboutPageProps {
  questions: Questions
}

export default function AboutPage({ questions }: AboutPageProps) {
  return (
    <div className='page'>
      <SO_Header />
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
