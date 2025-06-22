import React, { useState, useEffect, useRef, useCallback } from 'react'

import cn from 'classnames'

import Q_Icon from '@/components/quarks/Q_Icon/Q_Icon'

import styles from './A_Cursor.module.css'

import type { CursorConfig } from '@/types/cursor'

type Position = {
  x: number
  y: number
  phaseOffset: number
  anchorX: number
  anchorY: number
  orbitRadius: number
  speedMultiplier: number
}

const CURSOR_SIZE = 30
const PADDING = 100

const A_Cursor: React.FC<{ cursors: CursorConfig[] }> = ({ cursors }) => {
  const [positions, setPositions] = useState<Position[]>([])
  const containerRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number>(0)
  const startTimeRef = useRef<number>(0)

  const initializePositions = useCallback(() => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      const initialPositions = cursors.map(() => {
        const anchorX = PADDING + Math.random() * (rect.width - CURSOR_SIZE - PADDING * 2)
        const anchorY = PADDING + Math.random() * (rect.height - CURSOR_SIZE - PADDING * 2)
        return {
          x: anchorX,
          y: anchorY,
          phaseOffset: Math.random() * Math.PI * 2,
          anchorX,
          anchorY,
          orbitRadius: 30 + Math.random() * 60,
          speedMultiplier: 0.7 + Math.random() * 0.6,
        }
      })
      setPositions(initialPositions)
    }
  }, [cursors])

  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      initializePositions()
      startTimeRef.current = performance.now()
    })
    return () => cancelAnimationFrame(raf)
  }, [initializePositions])

  const animate = useCallback(
    (time: number) => {
      if (!startTimeRef.current) startTimeRef.current = time
      const elapsed = (time - startTimeRef.current) / 1000

      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        const clamp = (num: number, min: number, max: number) => Math.min(Math.max(num, min), max)

        setPositions(prevPositions =>
          prevPositions.map((pos, index) => {
            const config = cursors[index]
            const phase = pos.phaseOffset

            switch (config.style) {
              case 'orbital': {
                const orbitalX =
                  pos.anchorX +
                  Math.cos(elapsed * config.speed * pos.speedMultiplier * 0.5 + phase) *
                    pos.orbitRadius
                const orbitalY =
                  pos.anchorY +
                  Math.sin(elapsed * config.speed * pos.speedMultiplier + phase) * pos.orbitRadius
                return {
                  ...pos,
                  x: clamp(orbitalX, 0, rect.width - CURSOR_SIZE),
                  y: clamp(orbitalY, 0, rect.height - CURSOR_SIZE),
                }
              }
              case 'wave': {
                const newX =
                  pos.anchorX +
                  Math.sin(elapsed * config.speed * pos.speedMultiplier + phase) * pos.orbitRadius
                const newY =
                  pos.anchorY +
                  Math.cos(elapsed * config.speed * pos.speedMultiplier * 0.7 + phase) *
                    pos.orbitRadius
                return {
                  ...pos,
                  x: clamp(newX, 0, rect.width - CURSOR_SIZE),
                  y: clamp(newY, 0, rect.height - CURSOR_SIZE),
                }
              }
              case 'product-demo': {
                const points = [
                  { x: rect.width * 0.2, y: rect.height * 0.3 },
                  { x: rect.width * 0.8, y: rect.height * 0.4 },
                  { x: rect.width * 0.6, y: rect.height * 0.7 },
                  { x: rect.width * 0.3, y: rect.height * 0.6 },
                  { x: rect.width * 0.7, y: rect.height * 0.2 },
                ]

                if (points.length === 0) {
                  return { ...pos, x: 0, y: 0 }
                }

                const cursorElapsed = elapsed + pos.phaseOffset * 2

                const cycleDuration = 8
                const pointDuration = cycleDuration / points.length
                const currentCycle = (cursorElapsed % cycleDuration) / pointDuration
                const currentPointIndex = Math.floor(currentCycle)
                const nextPointIndex = (currentPointIndex + 1) % points.length
                const progress = currentCycle - currentPointIndex

                const easeInOut = (t: number) => {
                  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t
                }

                const easedProgress = easeInOut(progress)

                const currentPoint = points[currentPointIndex]
                const nextPoint = points[nextPointIndex]

                if (!currentPoint || !nextPoint) {
                  return { ...pos, x: 0, y: 0 }
                }

                const controlPoint1 = {
                  x:
                    currentPoint.x +
                    (nextPoint.x - currentPoint.x) * 0.3 +
                    Math.sin(cursorElapsed * 0.5 + phase) * 10,
                  y:
                    currentPoint.y +
                    (nextPoint.y - currentPoint.y) * 0.3 +
                    Math.cos(cursorElapsed * 0.3 + phase) * 15,
                }
                const controlPoint2 = {
                  x:
                    currentPoint.x +
                    (nextPoint.x - currentPoint.x) * 0.7 +
                    Math.sin(cursorElapsed * 0.7 + phase) * 12,
                  y:
                    currentPoint.y +
                    (nextPoint.y - currentPoint.y) * 0.7 +
                    Math.cos(cursorElapsed * 0.4 + phase) * 20,
                }

                const t = easedProgress
                const x =
                  Math.pow(1 - t, 3) * currentPoint.x +
                  3 * Math.pow(1 - t, 2) * t * controlPoint1.x +
                  3 * (1 - t) * Math.pow(t, 2) * controlPoint2.x +
                  Math.pow(t, 3) * nextPoint.x
                const y =
                  Math.pow(1 - t, 3) * currentPoint.y +
                  3 * Math.pow(1 - t, 2) * t * controlPoint1.y +
                  3 * (1 - t) * Math.pow(t, 2) * controlPoint2.y +
                  Math.pow(t, 3) * nextPoint.y

                return {
                  ...pos,
                  x: clamp(x, 0, rect.width - CURSOR_SIZE),
                  y: clamp(y, 0, rect.height - CURSOR_SIZE),
                }
              }
              default:
                return pos
            }
          }),
        )
      }

      animationRef.current = requestAnimationFrame(animate)
    },
    [cursors],
  )

  useEffect(() => {
    animationRef.current = requestAnimationFrame(animate)
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [animate])

  useEffect(() => {
    window.addEventListener('resize', initializePositions)
    return () => window.removeEventListener('resize', initializePositions)
  }, [initializePositions])

  return (
    <div className={styles.container} ref={containerRef}>
      {positions.map((pos, index) => {
        const config = cursors[index]
        return (
          <div
            key={`cursor-${index}`}
            className={cn(styles.cursor, styles[config.style])}
            style={{
              transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
              color: config.color,
              position: 'absolute',
              transition: 'transform 0.1s ease-out',
            }}
          >
            <div className={styles.icon_wrapper}>
              <Q_Icon
                name='cursorIcon'
                width='25'
                height='25'
                viewBox='0 0 25 25'
                fill={config.color || '#000000'}
                className={styles.cursor_icon}
              />
            </div>

            {config.label && (
              <div
                className={styles.label}
                style={{
                  background: config.color,
                }}
              >
                <span className='text_captions_s_inter'>{config.label}</span>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default A_Cursor
