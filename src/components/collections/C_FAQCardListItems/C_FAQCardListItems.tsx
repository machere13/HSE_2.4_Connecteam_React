import React from 'react'

import M_FAQCard from '@/components/molecules/M_FAQCard/M_FAQCard'
import { getFAQCardListVariant } from '@/lib/getFAQCardListVariant'

import styles from './C_FAQCardListItems.module.css'

import type { Questions } from '@/types/questions'

interface C_FAQCardListItemsProps {
  questions: Questions
}

const groupIntoRows = (items: Questions) => {
  const rows = []
  let currentRow: Questions = []
  let currentRowWidth = 0

  items.forEach((item, index) => {
    const variant = getFAQCardListVariant({ itemIndex: index })
    const itemWidth = parseInt(variant.width, 10)

    if (currentRowWidth + itemWidth > 100) {
      rows.push(currentRow)
      currentRow = [item]
      currentRowWidth = itemWidth
    } else {
      currentRow.push(item)
      currentRowWidth += itemWidth
    }
  })

  if (currentRow.length > 0) {
    rows.push(currentRow)
  }

  return rows
}

export default function C_FAQCardListItems({ questions }: C_FAQCardListItemsProps) {
  const rows = groupIntoRows(questions)

  return (
    <div className={styles.wrapper}>
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className={styles.row}>
          {row.map((question, questionIndex) => {
            const globalIndex = rows.slice(0, rowIndex).flat().length + questionIndex
            const variant = getFAQCardListVariant({ itemIndex: globalIndex })
            return (
              <M_FAQCard
                key={question.id}
                question={question.question}
                altQuestion={`${globalIndex + 1}`}
                answer={question.answer}
                backgroundColor={variant.background}
                width={variant.width}
              />
            )
          })}
        </div>
      ))}
    </div>
  )
}
