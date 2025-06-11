import React from 'react'

import cn from 'classnames'

import styles from './A_SelectButton.module.css'

interface A_SelectButtonProps {
  isSelected: boolean
  onClick: () => void
  children: React.ReactNode
}

export default function A_SelectButton({ isSelected, onClick, children }: A_SelectButtonProps) {
  return (
    <button
      type='button'
      onClick={onClick}
      className={cn(styles.wrapper, 'text_body_1', {
        [styles.selected]: isSelected,
      })}
    >
      {children}
    </button>
  )
}
