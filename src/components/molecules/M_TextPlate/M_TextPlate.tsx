import React from 'react'

import cn from 'classnames'

import Q_Icon from '@/components/quarks/Q_Icon/Q_Icon'

import styles from './M_TextPlate.module.css'

interface M_TextPlateProps {
  borderRadius?: 'r_5' | 'r_10'
  padding?: 'p_8_15' | 'p_15_25'
  backgroundColor?: 'white' | 'orange' | 'pink'
  rotate?: string
  maxWidth?: string
  showIcon?: boolean
  className?: string
  children?: React.ReactNode
}

export default function M_TextPlate({
  borderRadius = 'r_10',
  padding = 'p_15_25',
  backgroundColor = 'white',
  rotate,
  maxWidth,
  showIcon = true,
  className,
  children,
}: M_TextPlateProps) {
  return (
    <div
      className={cn(
        styles.wrapper,
        styles[borderRadius],
        styles[padding],
        styles[backgroundColor],
        className,
      )}
      style={{ maxWidth, rotate }}
    >
      {showIcon && <Q_Icon name='thunderIcon' width='12' height='25' viewBox='0 0 12 25' />}
      <p>{children}</p>
    </div>
  )
}
