import React from 'react'

import Link from 'next/link'

import A_TestResultsTag from '@/components/atoms/A_TestResultsTag/A_TestResultsTag'

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
        <button onClick={onRestart}>Пройти тест заново</button>
        <Link href='/interactives'>Вернуться к тестам</Link>
      </div>
    </section>
  )
}
