import React from 'react'

import A_DropdownItem from '@/components/atoms/A_DropdownItem/A_DropdownItem'

import styles from './C_DropdownItems.module.css'

interface C_DropdownItemsProps {
  items: string[]
  activeItem?: string
  onItemClick?: (item: string) => void
}

export default function C_DropdownItems({ items, activeItem, onItemClick }: C_DropdownItemsProps) {
  return (
    <div className={styles.list}>
      {items.map(item => (
        <A_DropdownItem
          key={item}
          title={item}
          isActive={activeItem === item}
          onClick={() => onItemClick?.(item)}
        />
      ))}
    </div>
  )
}
