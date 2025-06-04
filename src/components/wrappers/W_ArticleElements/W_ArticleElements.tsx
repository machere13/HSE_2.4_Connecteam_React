import React from 'react'

import C_ArticleElementItems from '@/components/collections/C_ArticleElementItems/C_ArticleElementItems'

import styles from './W_ArticleElements.module.css'

import type { M_ArticleElementItemProps } from '@/components/molecules/M_ArticleElementItem/M_ArticleElementItem'

interface W_ArticleElementsProps {
  items: M_ArticleElementItemProps[]
  title: string
}

export default function W_ArticleElements({ items, title }: W_ArticleElementsProps) {
  return (
    <div className={styles.wrapper}>
      <p>{title}</p>
      <C_ArticleElementItems elements={items} />
    </div>
  )
}
