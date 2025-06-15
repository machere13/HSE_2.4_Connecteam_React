import React from 'react'

import cn from 'classnames'

import styles from './A_DropdownItem.module.css'

interface A_DropdownItemProps {
  title: string
  isActive?: boolean
  onClick?: () => void
}

export default function A_DropdownItem({ title, isActive = false, onClick }: A_DropdownItemProps) {
  return (
    <button
      className={cn(styles.wrapper, isActive && styles.active)}
      onClick={onClick}
      type='button'
      data-cursor-type='radio'
    >
      <span className='text_body_1'>{title}</span>
    </button>
  )
}
