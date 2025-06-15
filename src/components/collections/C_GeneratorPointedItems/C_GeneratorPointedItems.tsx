import React from 'react'

import A_GeneratorPointedItem from '@/components/atoms/A_GeneratorPointedItem/A_GeneratorPointedItem'

import styles from './C_GeneratorPointedItems.module.css'

interface C_GeneratorPointedItemsProps {
  items: string[]
}

export default function C_GeneratorPointedItems({ items }: C_GeneratorPointedItemsProps) {
  return (
    <ul className={styles.wrapper}>
      {items.map(item => (
        <A_GeneratorPointedItem key={item} text={item} />
      ))}
    </ul>
  )
}
