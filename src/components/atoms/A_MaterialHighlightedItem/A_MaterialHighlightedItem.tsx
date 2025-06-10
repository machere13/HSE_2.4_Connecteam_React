import React from 'react'

import cn from 'classnames'

import styles from './A_MaterialHighlightedItem.module.css'

interface A_MaterialHighlightedItemProps {
  text: string
}

export default function A_MaterialHighlightedItem({ text }: A_MaterialHighlightedItemProps) {
  return (
    <li className={styles.wrapper}>
      <div className={styles.line}></div>
      <mark className={cn(styles.text, 'text_body_2')}>{text}</mark>
    </li>
  )
}
