import React from 'react'

import styles from './A_ArticlePointedItem.module.css'

interface A_ArticlePointedItemProps {
  text: string
}

export default function A_ArticlePointedItem({ text }: A_ArticlePointedItemProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.point_wrapper}>
        <div className={styles.point}></div>
      </div>
      <p>{text}</p>
    </div>
  )
}
