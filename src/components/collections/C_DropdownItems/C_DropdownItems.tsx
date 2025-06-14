import React from 'react'

import A_DropdownItem from '@/components/atoms/A_DropdownItem/A_DropdownItem'

import styles from './C_DropdownItems.module.css'

interface C_DropdownItemsProps {
  items: {
    id: string
    title: string
  }[]
  activeItemId?: string
  onItemClick?: (id: string) => void
}

export default function C_DropdownItems({
  items,
  activeItemId,
  onItemClick,
}: C_DropdownItemsProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.plate}></div>
      {items.map(item => (
        <A_DropdownItem
          key={item.id}
          title={item.title}
          isActive={item.id === activeItemId}
          onClick={() => onItemClick?.(item.id)}
        />
      ))}
    </div>
  )
}
