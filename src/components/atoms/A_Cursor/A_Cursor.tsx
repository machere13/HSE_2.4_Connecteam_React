import React, { useState, useEffect, useRef, useCallback } from 'react'

import cn from 'classnames'

import Q_Icon from '@/components/quarks/Q_Icon/Q_Icon'

import styles from './A_Cursor.module.css'

import type { CursorConfig } from '@/types/cursor'

type Position = { x: number; y: number }

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
      const initialPositions = cursors.map(() => ({
        x: PADDING + Math.random() * (rect.width - CURSOR_SIZE - PADDING * 2),
        y: PADDING + Math.random() * (rect.height - CURSOR_SIZE - PADDING * 2),
      }))
      setPositions(initialPositions)
    }
  }, [cursors])

  useEffect(() => {
    initializePositions()
    startTimeRef.current = performance.now()
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

            switch (config.style) {
              case 'orbital': {
                const orbitalX =
                  rect.width / 2 + Math.cos(elapsed * config.speed * 0.5) * (rect.width / 10)
                const orbitalY =
                  rect.height / 2 + Math.sin(elapsed * config.speed) * (rect.height / 10)
                return {
                  x: clamp(orbitalX, 0, rect.width - CURSOR_SIZE),
                  y: clamp(orbitalY, 0, rect.height - CURSOR_SIZE),
                }
              }
              case 'wave': {
                const newX = pos.x + Math.sin(elapsed * config.speed) * 0.8
                const newY = pos.y + Math.cos(elapsed * config.speed * 0.7) * 0.7

                return {
                  x: clamp(newX, 0, rect.width - CURSOR_SIZE),
                  y: clamp(newY, 0, rect.height - CURSOR_SIZE),
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
