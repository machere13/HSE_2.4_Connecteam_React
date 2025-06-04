import React from 'react'

import A_ArticlePointedItem from '@/components/atoms/A_ArticlePointedItem/A_ArticlePointedItem'

import styles from './C_ArticlePointedItems.module.css'

interface C_ArticlePointedItemsProps {
  items: string[]
}

export default function C_ArticlePointedItems({ items }: C_ArticlePointedItemsProps) {
  return (
    <div className={styles.wrapper}>
      {items.map(item => (
        <A_ArticlePointedItem key={item} text={item} />
      ))}
    </div>
  )
}
