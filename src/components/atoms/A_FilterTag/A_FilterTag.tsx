import React from 'react'

import cn from 'classnames'

import Q_Icon from '@/components/quarks/Q_Icon/Q_Icon'

import styles from './A_FilterTag.module.css'

interface A_FilterTagProps {
  text: string
  isActive?: boolean
  onClick?: () => void
}

export default function A_FilterTag({ text, isActive = false, onClick }: A_FilterTagProps) {
  return (
    <button
      className={cn(styles.wrapper, 'text_body_1', isActive ? styles.active : '')}
      onClick={onClick}
    >
      {text}
      {isActive && <Q_Icon name='closeIcon' viewBox='0 0 12 12' width='16' height='16' />}
    </button>
  )
}
