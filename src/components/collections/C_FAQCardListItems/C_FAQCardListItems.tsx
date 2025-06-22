import React from 'react'

import M_FAQCard from '@/components/molecules/M_FAQCard/M_FAQCard'
import { getFAQCardListVariant } from '@/lib/getFAQCardListVariant'

import styles from './C_FAQCardListItems.module.css'

import type { Questions } from '@/types/questions'

interface C_FAQCardListItemsProps {
  questions: Questions
}

export default function C_FAQCardListItems({ questions }: C_FAQCardListItemsProps) {
  return (
    <div className={styles.list}>
      {questions.map((question, index) => {
        const variant = getFAQCardListVariant({ itemIndex: index })
        return (
          <M_FAQCard
            key={question.id}
            question={question.question}
            altQuestion={`FAQ icon ${index + 1}`}
            answer={question.answer}
            backgroundColor={variant.background}
            width={variant.width}
          />
        )
      })}
    </div>
  )
}
