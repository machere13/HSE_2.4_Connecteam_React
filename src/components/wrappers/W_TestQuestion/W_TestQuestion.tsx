import React from 'react'

import C_TestQuestionRadios from '@/components/collections/C_TestQuestionRadios/C_TestQuestionRadios'
import W_TestQuestionHeading from '@/components/wrappers/W_TestQuestionHeading/W_TestQuestionHeading'

import styles from './W_TestQuestion.module.css'

import type { TestAnswer } from '@/types/test'

interface W_TestQuestionProps {
  currentNumber: number
  totalQuestions: number
  title: string
  answers: TestAnswer[]
  selectedAnswerIndex: number | undefined
  onAnswerSelect: (answerIndex: number) => void
}

export default function W_TestQuestion({
  currentNumber,
  totalQuestions,
  title,
  answers,
  selectedAnswerIndex,
  onAnswerSelect,
}: W_TestQuestionProps) {
  return (
    <div className={styles.wrapper}>
      <W_TestQuestionHeading
        currentNumber={currentNumber}
        totalQuestions={totalQuestions}
        title={title}
      />
      <C_TestQuestionRadios
        answers={answers}
        selectedAnswerIndex={selectedAnswerIndex}
        onAnswerSelect={onAnswerSelect}
      />
    </div>
  )
}
