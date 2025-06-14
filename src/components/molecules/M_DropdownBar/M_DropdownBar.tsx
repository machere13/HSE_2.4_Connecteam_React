import React from 'react'

import cn from 'classnames'

import Q_Icon from '@/components/quarks/Q_Icon/Q_Icon'

import styles from './M_DropdownBar.module.css'

interface M_DropdownBarProps {
  title: string
  isActive?: boolean
  onClick?: () => void
}

export default function M_DropdownBar({ title, isActive = false, onClick }: M_DropdownBarProps) {
  return (
    <button
      className={cn(styles.wrapper, isActive ? styles.active : '')}
      onClick={onClick}
      type='button'
      aria-expanded={isActive}
    >
      <span className='text_body_1'>{title}</span>
      <Q_Icon name='arrowIcon' width='13' height='5' viewBox='0 0 13 5' />
    </button>
  )
}
