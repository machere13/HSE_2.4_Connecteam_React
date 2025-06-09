import React from 'react'

import cn from 'classnames'

import styles from './A_TestQuestionNumberTag.module.css'

interface A_TestQuestionNumberTagProps {
  currentNumber: number
  totalQuestions: number
}

export default function A_TestQuestionNumberTag({
  currentNumber,
  totalQuestions,
}: A_TestQuestionNumberTagProps) {
  return (
    <div className={styles.wrapper}>
      <span className={cn(styles.text, 'text_button_l')}>
        Вопрос {currentNumber} из {totalQuestions}
      </span>
    </div>
  )
}
