import React, { useEffect, useRef, useState } from 'react'

import Q_Icon from '@/components/quarks/Q_Icon/Q_Icon'

import styles from './A_UserCursor.module.css'

export default function A_UserCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [tilt, setTilt] = useState(0)
  const [isTouch, setIsTouch] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [hoverLabel, setHoverLabel] = useState('')

  useEffect(() => {
    setIsTouch(!window.matchMedia('(hover: hover)').matches)
  }, [])

  const prev = useRef({ x: 0, y: 0 })
  const currentTilt = useRef(0)
  const rafId = useRef(0)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e
      setPosition({ x, y })

      const dx = x - prev.current.x
      const maxTilt = 25
      const angle = Math.max(-maxTilt, Math.min(maxTilt, dx * 1.2))

      animateTiltTo(angle)
      prev.current = { x, y }
    }

    const animateTiltTo = (target: number) => {
      cancelAnimationFrame(rafId.current)

      const step = () => {
        const diff = target - currentTilt.current
        currentTilt.current += diff * 0.15
        setTilt(currentTilt.current)

        if (Math.abs(diff) > 0.5) {
          rafId.current = requestAnimationFrame(step)
        } else {
          currentTilt.current = target
          setTilt(target)
        }
      }

      step()
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

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseover', handleMouseOver)

    return () => {
      cancelAnimationFrame(rafId.current)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseover', handleMouseOver)
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
          transition: 'transform 0.2s ease-out',
        }}
      >
        <span className='text_captions_s_inter'>{hoverLabel || 'Вы'}</span>
      </div>
    </div>
  )
}
