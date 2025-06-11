import React from 'react'

import cn from 'classnames'

import styles from './A_RadioButton.module.css'

interface A_RadioButtonProps {
  isSelected: boolean
  onChange: () => void
}

export default function A_RadioButton({ isSelected, onChange }: A_RadioButtonProps) {
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      onChange()
    }
  }

  return (
    <div
      role='radio'
      tabIndex={0}
      onClick={onChange}
      onKeyDown={handleKeyDown}
      className={cn(styles.wrapper, {
        [styles.selected]: isSelected,
      })}
      aria-checked={isSelected}
      data-cursor-type='radio'
    >
      {isSelected && <div className={styles.dot} />}
    </div>
  )
}
