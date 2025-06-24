import React, { useEffect, useRef } from 'react'

import A_DirectionButton from '@/components/atoms/A_DirectionButton/A_DirectionButton'

import styles from './M_InteractivesITMafiaDirectionPlate.module.css'

import type gsap from 'gsap'

export default function M_InteractivesITMafiaDirectionPlate() {
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
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <h3>Играй в IT-Mafia</h3>
        <p>
          Легендарная игра в&nbsp;вашей беседе в&nbsp;Telegram! Добавляйте бот в&nbsp;свою беседу,
          дайте права администратора и&nbsp;запустите
        </p>
        <A_DirectionButton href='https://t.me/Mafia_connecteam_bot' variant='blue'>
          Играть
        </A_DirectionButton>
      </div>
      <div ref={backgroundRef} className={styles.background}></div>
    </div>
  )
}
