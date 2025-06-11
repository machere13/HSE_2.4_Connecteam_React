import React from 'react'

import M_RadioButtonItem from '@/components/molecules/M_RadioButtonItem/M_RadioButtonItem'

import styles from './C_RadioButtonItems.module.css'

interface C_RadioButtonItemsProps {
  options: string[]
  selectedOption?: string
  onSelect: (option: string) => void
}

export default function C_RadioButtonItems({
  options,
  selectedOption,
  onSelect,
}: C_RadioButtonItemsProps) {
  return (
    <div className={styles.wrapper}>
      {options.map(option => (
        <M_RadioButtonItem
          key={option}
          isSelected={selectedOption === option}
          onChange={() => onSelect(option)}
        >
          {option}
        </M_RadioButtonItem>
      ))}
    </div>
  )
}
