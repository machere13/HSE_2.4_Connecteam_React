import React from 'react'

import cn from 'classnames'

import styles from './A_TestQuestionRadio.module.css'

interface A_TestQuestionRadioProps {
  title: string
  isSelected: boolean
  onChange: () => void
}

export default function A_TestQuestionRadio({
  title,
  isSelected,
  onChange,
}: A_TestQuestionRadioProps) {
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      onChange()
    }
  }
  return (
    <div
      className={cn(styles.wrapper, isSelected ? styles.selected : '')}
      role='radio'
      tabIndex={0}
      onClick={onChange}
      onKeyDown={handleKeyDown}
      aria-checked={isSelected}
      data-cursor-type='radio'
    >
      <input type='radio' checked={isSelected} onChange={onChange} className={styles.input} />
      <p className={styles.text}>{title}</p>
    </div>
  )
}
