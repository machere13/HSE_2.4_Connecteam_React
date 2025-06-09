import React from 'react'

import A_TestQuestionRadio from '@/components/atoms/A_TestQuestionRadio/A_TestQuestionRadio'

import styles from './C_TestQuestionRadios.module.css'

import type { TestAnswer } from '@/types/test'

interface C_TestQuestionRadiosProps {
  answers: TestAnswer[]
  selectedAnswerIndex: number | undefined
  onAnswerSelect: (answerIndex: number) => void
}

export default function C_TestQuestionRadios({
  answers,
  selectedAnswerIndex,
  onAnswerSelect,
}: C_TestQuestionRadiosProps) {
  return (
    <div className={styles.wrapper}>
      {answers.map((answer, index) => (
        <A_TestQuestionRadio
          key={index}
          title={answer.title}
          isSelected={selectedAnswerIndex === index}
          onChange={() => onAnswerSelect(index)}
        />
      ))}
    </div>
  )
}
