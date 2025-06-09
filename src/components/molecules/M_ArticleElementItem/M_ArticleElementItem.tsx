import React from 'react'

import Q_Icon from '@/components/quarks/Q_Icon/Q_Icon'

import styles from './M_ArticleElementItem.module.css'

export interface M_ArticleElementItemProps {
  title: string
  text: string
  index: 1 | 2 | 3 | 4
}

export default function M_ArticleElementItem({ title, text, index }: M_ArticleElementItemProps) {
  const iconName = `articleElementItemIcon0${index}` as const
  return (
    <li className={styles.wrapper}>
      <Q_Icon name={iconName} width='72' height='72' />
      <div className={styles.text_wrapper}>
        <h5>{title}</h5>
        <p>{text}</p>
      </div>
    </li>
  )
}
