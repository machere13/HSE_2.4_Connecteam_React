import React from 'react'

import A_SelectButton from '@/components/atoms/A_SelectButton/A_SelectButton'

import styles from './C_SelectButtons.module.css'

interface C_SelectButtonsProps {
  options: string[]
  selectedOption?: string
  onSelect: (option: string) => void
}

export default function C_SelectButtons({
  options,
  selectedOption,
  onSelect,
}: C_SelectButtonsProps) {
  return (
    <div className={styles.wrapper}>
      {options.map(option => (
        <A_SelectButton
          key={option}
          isSelected={selectedOption === option}
          onClick={() => onSelect(option)}
        >
          {option}
        </A_SelectButton>
      ))}
    </div>
  )
}
