import React from 'react'

import styles from './M_ArticleExampleItem.module.css'

interface M_ArticleExampleItemProps {
  title: string
  text: string
}

export default function M_ArticleExampleItem({ title, text }: M_ArticleExampleItemProps) {
  return (
    <div className={styles.wrapper}>
      <h5>{title}</h5>
      <p>{text}</p>
    </div>
  )
}
