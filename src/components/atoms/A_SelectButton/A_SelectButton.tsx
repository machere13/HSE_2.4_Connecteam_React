import React from 'react'

import cn from 'classnames'

import styles from './A_SelectButton.module.css'

interface A_SelectButtonProps {
  isSelected: boolean
  onClick: () => void
  children: React.ReactNode
}

export default function A_SelectButton({ isSelected, onClick, children }: A_SelectButtonProps) {
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      onClick()
    }
  }

  return (
    <button
      type='button'
      onClick={onClick}
      onKeyDown={handleKeyDown}
      className={cn(styles.wrapper, 'text_body_1', {
        [styles.selected]: isSelected,
      })}
      data-cursor-type='radio'
    >
      {children}
    </button>
  )
}
