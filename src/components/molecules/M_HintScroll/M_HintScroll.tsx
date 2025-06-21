import React, { useEffect, useRef, useState } from 'react'

import { gsap } from 'gsap'

import Q_Icon from '@/components/quarks/Q_Icon/Q_Icon'

import styles from './M_HintScroll.module.css'

export default function M_HintScroll() {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const downButtonRef = useRef<HTMLButtonElement>(null)
  const [isVisible, setIsVisible] = useState(true)
  const [hasScrolled, setHasScrolled] = useState(false)
  const [currentText, setCurrentText] = useState('Листай вниз')

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const viewportHeight = window.innerHeight

      if (scrollY > viewportHeight * 0.5 && !hasScrolled) {
        setHasScrolled(true)

        const tl = gsap.timeline()

        tl.to(textRef.current, {
          y: 20,
          opacity: 0,
          duration: 0.5,
          ease: 'power2.out',
          onComplete: () => {
            setCurrentText('Connecteam')
          },
        })

          .to(textRef.current, {
            y: 0,
            opacity: 1,
            duration: 0.5,
            ease: 'power2.out',
          })

          .to(
            downButtonRef.current,
            {
              rotation: 180,
              duration: 0.5,
              ease: 'power2.out',
            },
            '-=0.5',
          )
      } else if (scrollY <= viewportHeight * 0.5 && hasScrolled) {
        setHasScrolled(false)

        const tl = gsap.timeline()

        tl.to(textRef.current, {
          y: -20,
          opacity: 0,
          duration: 0.5,
          ease: 'power2.out',
          onComplete: () => {
            setCurrentText('Листай вниз')
          },
        })

          .to(textRef.current, {
            y: 0,
            opacity: 1,
            duration: 0.5,
            ease: 'power2.out',
          })

          .to(
            downButtonRef.current,
            {
              rotation: 0,
              duration: 0.5,
              ease: 'power2.out',
            },
            '-=0.5',
          )
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [hasScrolled])

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  const handleClose = () => {
    gsap.to(wrapperRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.3,
      ease: 'power2.out',
      onComplete: () => setIsVisible(false),
    })
  }

  if (!isVisible) return null

  return (
    <div className={styles.wrapper} ref={wrapperRef}>
      <div className={styles.text_wrapper}>
        <div ref={textRef} className={styles.text}>
          <span className='text_body_1'>{currentText}</span>
        </div>
        <button
          ref={downButtonRef}
          className={styles.down_button}
          onClick={currentText === 'Connecteam' ? handleScrollToTop : undefined}
          disabled={currentText === 'Листай вниз'}
        >
          <Q_Icon name='arrowIcon' width='13' height='7' viewBox='0 0 13 7' />
        </button>
      </div>
      <button className={styles.close_button} onClick={handleClose}>
        <Q_Icon name='closeIcon' width='15' height='15' viewBox='0 0 12 12' fill='#000' />
      </button>
    </div>
  )
}
