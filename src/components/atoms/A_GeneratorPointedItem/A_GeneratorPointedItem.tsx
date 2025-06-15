import React from 'react'

import cn from 'classnames'

import styles from './A_GeneratorPointedItem.module.css'

interface A_GeneratorPointedItemProps {
  text: string
}

export default function A_GeneratorPointedItem({ text }: A_GeneratorPointedItemProps) {
  return (
    <li className={styles.wrapper}>
      <div className={styles.dash_wrapper}>
        <div className={styles.dash}></div>
      </div>
      <mark className={cn(styles.text, 'text_body_1')}>{text}</mark>
    </li>
  )
}
