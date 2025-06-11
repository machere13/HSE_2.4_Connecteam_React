import React from 'react'

import A_RadioButton from '@/components/atoms/A_RadioButton/A_RadioButton'

import styles from './M_RadioButtonItem.module.css'

interface M_RadioButtonItemProps {
  isSelected: boolean
  onChange: () => void
  children: React.ReactNode
}

export default function M_RadioButtonItem({
  isSelected,
  onChange,
  children,
}: M_RadioButtonItemProps) {
  return (
    <button
      className={styles.wrapper}
      onClick={onChange}
      role='radio'
      aria-checked={isSelected}
      data-cursor-type='radio'
    >
      <A_RadioButton isSelected={isSelected} onChange={onChange} />
      <p className={styles.text}>{children}</p>
    </button>
  )
}
