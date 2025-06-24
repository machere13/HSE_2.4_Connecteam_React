import React, { useEffect, useRef } from 'react'

import { gsap } from 'gsap'

import W_TestResultsImage_01 from '@/assets/images/W_TestResults/W_TestResults_01.svg'
import W_TestResultsImage_02 from '@/assets/images/W_TestResults/W_TestResults_02.svg'
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
  const imageWrapper01Ref = useRef<HTMLDivElement>(null)
  const imageWrapper02Ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (imageWrapper01Ref.current && imageWrapper02Ref.current) {
      gsap.to(imageWrapper01Ref.current, {
        y: -15,
        duration: 1,
        ease: 'power2.inOut',
        repeat: -1,
        yoyo: true,
      })

      gsap.to(imageWrapper02Ref.current, {
        y: -20,
        duration: 1.2,
        ease: 'power2.inOut',
        repeat: -1,
        yoyo: true,
        delay: 0.5,
      })
    }
  }, [])

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
      <div ref={imageWrapper01Ref} className={styles.image_wrapper_01}>
        <W_TestResultsImage_01 />
      </div>
      <div ref={imageWrapper02Ref} className={styles.image_wrapper_02}>
        <W_TestResultsImage_02 />
      </div>
    </section>
  )
}
