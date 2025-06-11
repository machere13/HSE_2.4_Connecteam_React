import React, { useEffect, useRef, useState } from 'react'

import Q_Icon from '@/components/quarks/Q_Icon/Q_Icon'

import styles from './A_UserCursor.module.css'

export default function A_UserCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [tilt, setTilt] = useState(0)
  const [isTouch, setIsTouch] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [hoverLabel, setHoverLabel] = useState('')

  const prevPosition = useRef({ x: 0, y: 0 })
  const velocityRef = useRef(0)
  const tiltRef = useRef(0)
  const rafId = useRef(0)
  const isCursorActive = useRef(true)
  const lastMoveTime = useRef(Date.now())

  useEffect(() => {
    setIsTouch(!window.matchMedia('(hover: hover)').matches)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e
      setPosition({ x, y })
      isCursorActive.current = true
      lastMoveTime.current = Date.now()

      const dx = x - prevPosition.current.x
      const dy = y - prevPosition.current.y
      const distance = Math.sqrt(dx * dx + dy * dy)
      velocityRef.current = distance * 0.5

      const maxTilt = 25
      const targetTilt = Math.max(-maxTilt, Math.min(maxTilt, dx * 1.2))
      tiltRef.current = targetTilt
      setTilt(targetTilt)

      prevPosition.current = { x, y }

      if (rafId.current) cancelAnimationFrame(rafId.current)
      rafId.current = requestAnimationFrame(resetTiltGradually)
    }

    const resetTiltGradually = () => {
      if (velocityRef.current < 0.1) {
        tiltRef.current *= 0.85
        setTilt(tiltRef.current)

        if (Math.abs(tiltRef.current) > 0.5) {
          rafId.current = requestAnimationFrame(resetTiltGradually)
        } else {
          tiltRef.current = 0
          setTilt(0)
        }
      }
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement

      if (target.closest('input, textarea, [contenteditable="true"]')) {
        setIsHovering(true)
        setHoverLabel('Ввести')
      } else if (target.closest('a, button, [role="button"]')) {
        setIsHovering(true)
        setHoverLabel('Клик')
      } else if (target.closest('[data-cursor="radio"]')) {
        setIsHovering(true)
        setHoverLabel('Выбрать')
      } else {
        setIsHovering(false)
        setHoverLabel('')
      }
    }

    const handleMouseLeave = () => {
      isCursorActive.current = false
      tiltRef.current = 0
      setTilt(0)
      setIsHovering(false)
      setHoverLabel('')
    }

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        tiltRef.current = 0
        setTilt(0)
        setIsHovering(false)
        setHoverLabel('')
      }
    }

    const checkCursorInactive = setInterval(() => {
      const timeSinceLastMove = Date.now() - lastMoveTime.current

      if (timeSinceLastMove > 100 && Math.abs(tiltRef.current) > 1) {
        tiltRef.current = 0
        setTilt(0)
      }
      isCursorActive.current = false
    }, 200)

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseover', handleMouseOver)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('visibilitychange', handleVisibilityChange)

    return () => {
      clearInterval(checkCursorInactive)
      cancelAnimationFrame(rafId.current)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseover', handleMouseOver)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [])

  if (isTouch) {
    return null
  }

  return (
    <div
      className={styles.cursor}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        opacity: position.x === 0 && position.y === 0 ? 0 : 1,
      }}
    >
      <div className={styles.icon_wrapper}>
        <Q_Icon name='cursorIcon' width='25' height='25' className={styles.cursor_icon} />
      </div>
      <div
        className={styles.label}
        style={{
          transform: `
            translateY(-5px)
            translateX(20px)
            rotateZ(${tilt}deg)
            scale(${isHovering ? 1.15 : 1})
          `,
          transition: 'transform 0.15s ease-out',
        }}
      >
        <span className='text_captions_s_inter'>{hoverLabel || 'Вы'}</span>
      </div>
    </div>
  )
}
