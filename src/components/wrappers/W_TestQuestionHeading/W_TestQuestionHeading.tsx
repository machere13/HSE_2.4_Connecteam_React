import React from 'react'

import A_BackButton from '@/components/atoms/A_BackButton/A_BackButton'
import A_TestQuestionNumberTag from '@/components/atoms/A_TestQuestionNumberTag/A_TestQuestionNumberTag'

import styles from './W_TestQuestionHeading.module.css'

interface W_TestQuestionHeadingProps {
  currentNumber: number
  totalQuestions: number
  title: string
  onBack: () => void
}

export default function W_TestQuestionHeading({
  currentNumber,
  totalQuestions,
  title,
  onBack,
}: W_TestQuestionHeadingProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <A_TestQuestionNumberTag currentNumber={currentNumber} totalQuestions={totalQuestions} />
        <A_BackButton onClick={onBack}>Вернуться назад</A_BackButton>
      </div>
      <h3 className={styles.title}>{title}</h3>
    </div>
  )
}
