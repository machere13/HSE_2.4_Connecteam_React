import React from 'react'

import W_TestQuestionHeading from '@/components/wrappers/W_TestQuestionHeading/W_TestQuestionHeading'
import W_TestQuestionInteractive from '@/components/wrappers/W_TestQuestionInteractive/W_TestQuestionInteractive'

import styles from './W_TestQuestionContent.module.css'

import type { TestAnswer } from '@/types/test'

interface W_TestQuestionContentProps {
  currentNumber: number
  totalQuestions: number
  title: string
  answers: TestAnswer[]
  selectedAnswerIndex: number | undefined
  isLastQuestion: boolean
  onAnswerSelect: (answerIndex: number) => void
  onNext: () => void
  onBack: () => void
}

export default function W_TestQuestionContent({
  currentNumber,
  totalQuestions,
  title,
  answers,
  selectedAnswerIndex,
  isLastQuestion,
  onAnswerSelect,
  onNext,
  onBack,
}: W_TestQuestionContentProps) {
  return (
    <div className={styles.wrapper}>
      <W_TestQuestionHeading
        currentNumber={currentNumber}
        totalQuestions={totalQuestions}
        title={title}
        onBack={onBack}
      />
      <W_TestQuestionInteractive
        answers={answers}
        selectedAnswerIndex={selectedAnswerIndex}
        isLastQuestion={isLastQuestion}
        onAnswerSelect={onAnswerSelect}
        onNext={onNext}
      />
    </div>
  )
}
