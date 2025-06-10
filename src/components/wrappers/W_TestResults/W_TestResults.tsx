import Link from 'next/link'

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

export const W_TestResults = ({ result, score, totalQuestions, onRestart }: W_TestResultsProps) => {
  return (
    <section className={styles.wrapper}>
      <article className={styles.result}>
        <h3 className={styles.result_title}>{result.title}</h3>
        <p className={styles.description}>{result.description}</p>
        <p className={styles.score}>
          Результат {score} из {totalQuestions}
        </p>
      </article>
      <nav className={styles.actions}>
        <button className={styles.restart_button} onClick={onRestart}>
          Пройти тест заново
        </button>
        <Link href='/interactives' className={styles.back_link}>
          Вернуться к тестам
        </Link>
      </nav>
    </section>
  )
}
