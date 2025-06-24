import React, { useEffect, useRef, useState } from 'react'

import { gsap } from 'gsap'

import Q_Icon from '../Q_Icon/Q_Icon'

import styles from './Q_PageLoader.module.css'

interface Q_PageLoaderProps {
  isLoading?: boolean
  onComplete?: () => void
}

export default function Q_PageLoader({ isLoading = true, onComplete }: Q_PageLoaderProps) {
  const [isVisible, setIsVisible] = useState(true)
  const iconRef = useRef<HTMLDivElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (iconRef.current) {
      const pulseAnimation = gsap.to(iconRef.current, {
        scale: 1.1,
        duration: 0.8,
        ease: 'power2.inOut',
        repeat: -1,
        yoyo: true,
      })

      return () => {
        pulseAnimation.kill()
      }
    }
    return undefined
  }, [])

  useEffect(() => {
    if (!isLoading && isVisible) {
      gsap.to(wrapperRef.current, {
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out',
        onComplete: () => {
          setIsVisible(false)
          onComplete?.()
        },
      })
    }
  }, [isLoading, isVisible, onComplete])

  if (!isVisible) {
    return null
  }

  return (
    <div ref={wrapperRef} className={styles.wrapper}>
      <div ref={iconRef} className={styles.icon_container}>
        <Q_Icon
          name='pageLoaderIcon'
          height='140'
          width='140'
          viewBox='0 0 140 140'
          className={styles.icon}
        />
      </div>
    </div>
  )
}

export function usePageLoader() {
  const [isLoading, setIsLoading] = useState(true)

  const startLoading = () => setIsLoading(true)
  const stopLoading = () => setIsLoading(false)

  return {
    isLoading,
    startLoading,
    stopLoading,
  }
}
