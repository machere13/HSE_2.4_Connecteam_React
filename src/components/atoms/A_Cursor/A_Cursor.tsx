import React, { useState, useEffect, useRef, useCallback } from 'react'
import cn from 'classnames'
import Q_Icon from '@/components/quarks/Q_Icon'
import styles from './A_Cursor.module.css'

type CursorStyle = 'orbital' | 'wave'
type Position = { x: number; y: number }

interface CursorConfig {
  style: CursorStyle
  icon: string
  speed: number
  color?: string
  label?: string
}

const A_Cursor: React.FC<{ cursors: CursorConfig[] }> = ({ cursors }) => {
  const [positions, setPositions] = useState<Position[]>([])
  const animationRef = useRef<number>(0)
  const startTimeRef = useRef<number>(0)

  useEffect(() => {
    const initialPositions = cursors.map(() => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
    }))
    setPositions(initialPositions)
    startTimeRef.current = performance.now()
  }, [cursors])

  const animate = useCallback((time: number) => {
    if (!startTimeRef.current) startTimeRef.current = time
    const elapsed = (time - startTimeRef.current) / 1000

    setPositions(prevPositions =>
      prevPositions.map((pos, index) => {
        const config = cursors[index]

        switch (config.style) {
          case 'orbital':
            return {
              x: window.innerWidth / 2 + Math.cos(elapsed * config.speed * 0.5) * 200,
              y: window.innerHeight / 2 + Math.sin(elapsed * config.speed) * 150,
            }
          case 'wave':
            return {
              x: pos.x + Math.sin(elapsed * config.speed) * 2,
              y: pos.y + Math.cos(elapsed * config.speed * 0.7) * 3,
            }
          default:
            return pos
        }
      })
    )

    animationRef.current = requestAnimationFrame(animate)
  }, [cursors])

  useEffect(() => {
    animationRef.current = requestAnimationFrame(animate)
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [animate])

  useEffect(() => {
    const handleResize = () => {
      setPositions(prev => 
        prev.map(pos => ({
          x: Math.min(pos.x, window.innerWidth),
          y: Math.min(pos.y, window.innerHeight)
        }))
  )}

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className={styles.container}>
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
              transition: 'transform 0.1s ease-out'
            }}
          >
            <div className={styles.icon_wrapper}>
              <Q_Icon
                name='cursorIcon'
                width="25"
                height="25"
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
                <span className="text_captions_s_inter">{config.label}</span>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default A_Cursor