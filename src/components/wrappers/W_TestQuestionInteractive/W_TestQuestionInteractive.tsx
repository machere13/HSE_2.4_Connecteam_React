import React from 'react'

import A_HandleButton from '@/components/atoms/A_HandleButton/A_HandleButton'
import C_TestQuestionRadios from '@/components/collections/C_TestQuestionRadios/C_TestQuestionRadios'

import styles from './W_TestQuestionInteractive.module.css'

import type { TestAnswer } from '@/types/test'

interface W_TestQuestionInteractiveProps {
  answers: TestAnswer[]
  selectedAnswerIndex: number | undefined
  isLastQuestion: boolean
  onAnswerSelect: (answerIndex: number) => void
  onNext: () => void
}

export default function W_TestQuestionInteractive({
  answers,
  selectedAnswerIndex,
  isLastQuestion,
  onAnswerSelect,
  onNext,
}: W_TestQuestionInteractiveProps) {
  return (
    <div className={styles.wrapper}>
      <C_TestQuestionRadios
        answers={answers}
        selectedAnswerIndex={selectedAnswerIndex}
        onAnswerSelect={onAnswerSelect}
      />
      <A_HandleButton onClick={onNext} disabled={selectedAnswerIndex === undefined}>
        {isLastQuestion ? 'Завершить тест' : 'Следующий вопрос'}
      </A_HandleButton>
    </div>
  )
}
