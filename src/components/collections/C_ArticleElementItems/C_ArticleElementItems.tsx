import React from 'react'

import M_ArticleElementItem from '@/components/molecules/M_ArticleElementItem/M_ArticleElementItem'

import styles from './C_ArticleElementItems.module.css'

interface C_ArticleElementItemsProps {
  elements: Array<{
    title: string
    text: string
    index: 1 | 2 | 3 | 4
  }>
}

export default function C_ArticleElementItems({ elements }: C_ArticleElementItemsProps) {
  const getSafeIndex = (idx: number): 1 | 2 | 3 | 4 => {
    return ((idx % 4) + 1) as 1 | 2 | 3 | 4
  }
  return (
    <div className={styles.wrapper}>
      {elements.map((item, index) => (
        <M_ArticleElementItem
          key={index}
          index={getSafeIndex(index)}
          title={item.title}
          text={item.text}
        />
      ))}
    </div>
  )
}
