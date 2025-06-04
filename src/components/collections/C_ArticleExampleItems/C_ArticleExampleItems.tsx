import React from 'react'

import M_ArticleExampleItem from '@/components/molecules/M_ArticleExampleItem/M_ArticleExampleItem'

import styles from './C_ArticleExampleItems.module.css'

interface C_ArticleExampleItemsProps {
  examples: Array<{
    title: string
    text: string
  }>
}

export default function C_ArticleExampleItems({ examples }: C_ArticleExampleItemsProps) {
  return (
    <div className={styles.wrapper}>
      {examples.map((item, index) => (
        <M_ArticleExampleItem key={index} title={item.title} text={item.text} />
      ))}
    </div>
  )
}
