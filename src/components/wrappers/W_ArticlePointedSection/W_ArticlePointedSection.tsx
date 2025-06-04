import React from 'react'

import C_ArticlePointedItems from '@/components/collections/C_ArticlePointedItems/C_ArticlePointedItems'

import styles from './W_ArticlePointedSection.module.css'

interface W_ArticlePointedSectionProps {
  items: string[]
  title: string
}

export default function W_ArticlePointedSection({ items, title }: W_ArticlePointedSectionProps) {
  return (
    <div className={styles.wrapper}>
      <h5>{title}</h5>
      <C_ArticlePointedItems items={items} />
    </div>
  )
}
