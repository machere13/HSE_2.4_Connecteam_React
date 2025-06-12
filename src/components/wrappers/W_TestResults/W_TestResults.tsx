import React from 'react'

import A_DirectionButton from '@/components/atoms/A_DirectionButton/A_DirectionButton'
import A_HandleButton from '@/components/atoms/A_HandleButton/A_HandleButton'
import A_TestResultsTag from '@/components/atoms/A_TestResultsTag/A_TestResultsTag'
import { ROUTES } from '@/routes'

import styles from './W_TestResults.module.css'

interface W_TestResultsProps {
  result: {
    title: string
    description: string
  }
  score: number
  totalQuestions: number
  onRestart: () => void
}

export default function W_TestResults({
  result,
  score,
  totalQuestions,
  onRestart,
}: W_TestResultsProps) {
  return (
    <section className={styles.wrapper}>
      <A_TestResultsTag score={score} totalQuestions={totalQuestions} />
      <div className={styles.text_wrapper}>
        <h3>{result.title}</h3>
        <p>{result.description}</p>
      </div>
      <div className={styles.buttons_wrapper}>
        <A_HandleButton onClick={onRestart}>Пройти тест заново</A_HandleButton>
        <A_DirectionButton href={ROUTES.INTERACTIVES.INDEX} variant='orange_l' font='l'>
          Вернуться к тестам
        </A_DirectionButton>
      </div>
    </section>
  )
}
