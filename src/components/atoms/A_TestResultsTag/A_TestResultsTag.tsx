import React from 'react'

import cn from 'classnames'

import styles from './A_TestResultsTag.module.css'

interface A_TestResultsTagProps {
  score: number
  totalQuestions: number
}

export default function A_TestResultsTag({ score, totalQuestions }: A_TestResultsTagProps) {
  return (
    <div className={styles.wrapper}>
      <span className={cn(styles.text, 'text_button_l')}>
        Результат {score} из {totalQuestions}
      </span>
    </div>
  )
}
