import React, { useEffect, useRef } from 'react'

import A_DirectionButton from '@/components/atoms/A_DirectionButton/A_DirectionButton'
import Q_Grid from '@/components/quarks/Q_Grid/Q_Grid'
import { ROUTES } from '@/routes'

import styles from './W_AboutGeneratorDirectionSection.module.css'

import type gsap from 'gsap'

export default function W_AboutGeneratorDirectionSection() {
  const backgroundRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    let killed = false
    let localTrigger: gsap.core.Tween | null = null

    const initGSAP = async () => {
      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')

      gsap.registerPlugin(ScrollTrigger)

      const background = backgroundRef.current

      if (localTrigger) {
        localTrigger.kill()
        localTrigger = null
      }

      if (background) {
        gsap.set(background, { clearProps: 'all' })
        void background.offsetHeight

        localTrigger = gsap.to(background, {
          y: -100,
          ease: 'none',
          scrollTrigger: {
            trigger: background,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        })
      }
    }

    const handleResize = () => {
      setTimeout(() => {
        if (!killed) initGSAP()
      }, 100)
    }

    initGSAP()
    window.addEventListener('resize', handleResize)

    return () => {
      killed = true
      window.removeEventListener('resize', handleResize)
      if (localTrigger) {
        localTrigger.kill()
      }
    }
  }, [])
  return (
    <section className={styles.wrapper}>
      <div className={styles.content}>
        <h2>Придумали за&nbsp;вас классные идеи для вашего командного коннекта</h2>
        <A_DirectionButton variant='pink' href={ROUTES.INTERACTIVES.GENERATOR}>
          Сгенерировать
        </A_DirectionButton>
      </div>
      <Q_Grid variant='blue' />
      <div ref={backgroundRef} className={styles.background}></div>
    </section>
  )
}
