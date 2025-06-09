import React from 'react'

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
      <button
        onClick={onNext}
        disabled={selectedAnswerIndex === undefined}
        className={styles.button}
      >
        {isLastQuestion ? 'Завершить тест' : 'Следующий вопрос'}
      </button>
    </div>
  )
}
