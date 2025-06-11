import React from 'react'

import cn from 'classnames'

import Q_Icon from '@/components/quarks/Q_Icon/Q_Icon'

import styles from './A_SearchButton.module.css'

interface A_SearchButtonProps {
  onClick: () => void
  isActive?: boolean
}

export default function A_SearchButton({ onClick, isActive = false }: A_SearchButtonProps) {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      onClick()
    }
  }

  return (
    <button
      className={cn(styles.wrapper, isActive && styles.active)}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      aria-label='Поиск'
      tabIndex={0}
    >
      <div className={styles.icon_wrapper}>
        <Q_Icon name='searchIcon' className={styles.icon} viewBox='0 0 16 16' />
      </div>
    </button>
  )
}
