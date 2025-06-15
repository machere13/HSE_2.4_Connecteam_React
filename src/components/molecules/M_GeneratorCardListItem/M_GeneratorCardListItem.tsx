import React from 'react'

import styles from './M_GeneratorCardListItem.module.css'

export interface M_GeneratorCardListItemProps {
  title: string
  description: string
  bgColor?: 'gray' | 'pink' | 'purple'
  rotate?: 'right' | 'none'
}

export default function M_GeneratorCardListItem({
  title,
  description,
  bgColor = 'gray',
  rotate = 'none',
}: M_GeneratorCardListItemProps) {
  const wrapperClasses = [styles.wrapper, styles[`bg_${bgColor}`], styles[`rotate_${rotate}`]]
    .join(' ')
    .trim()

  return (
    <div className={wrapperClasses}>
      <h5>{title}</h5>
      <p>{description}</p>
    </div>
  )
}
