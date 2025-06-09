import React from 'react'

import cn from 'classnames'

import styles from './A_ArticlePointedItem.module.css'

interface A_ArticlePointedItemProps {
  text: string
}

export default function A_ArticlePointedItem({ text }: A_ArticlePointedItemProps) {
  return (
    <li className={styles.wrapper}>
      <div className={styles.point_wrapper}>
        <div className={styles.point}></div>
      </div>
      <mark className={cn(styles.text, 'text_body_1')}>{text}</mark>
    </li>
  )
}
