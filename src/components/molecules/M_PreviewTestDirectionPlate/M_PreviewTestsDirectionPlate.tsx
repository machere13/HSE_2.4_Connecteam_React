import React, { useEffect, useRef, useState } from 'react'

import A_DirectionButton from '@/components/atoms/A_DirectionButton/A_DirectionButton'
import Q_Grid from '@/components/quarks/Q_Grid/Q_Grid'
import { ROUTES } from '@/routes'

import styles from './M_PreviewTestsDirectionPlate.module.css'

import type gsap from 'gsap'

export default function M_PreviewTestsDirectionPlate() {
  const backgroundRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return

    let killed = false
    let localTrigger: gsap.core.Tween | null = null

    const initGSAP = async () => {
      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')

      gsap.registerPlugin(ScrollTrigger)

      const background = backgroundRef.current
      const mobileCheck = window.innerWidth <= 768
      const isTablet = window.innerWidth > 768 && window.innerWidth <= 968

      setIsMobile(mobileCheck)

      if (localTrigger) {
        localTrigger.kill()
        localTrigger = null
      }

      if (background) {
        gsap.set(background, { clearProps: 'all' })
        void background.offsetHeight

        if (mobileCheck) {
          gsap.set(background, {
            rotation: -20,
            y: 200,
            x: 40,
          })
        } else if (isTablet) {
          gsap.set(background, {
            rotation: -15,
            y: 150,
            x: 40,
          })
        } else {
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
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.text_wrapper}>
          <h3>Протестируй свои навыки работы в&nbsp;команде</h3>
          <p>
            Тесты на&nbsp;умение справляться с&nbsp;конфликтами, выстраивать экологичное общение,
            знание ролей и&nbsp;многое другое
          </p>
        </div>
        <A_DirectionButton href={ROUTES.INTERACTIVES.INDEX} variant='blue'>
          Пройти тест
        </A_DirectionButton>
      </div>
      {!isMobile && <Q_Grid variant='gray' />}
      <div ref={backgroundRef} className={styles.background}></div>
    </div>
  )
}
