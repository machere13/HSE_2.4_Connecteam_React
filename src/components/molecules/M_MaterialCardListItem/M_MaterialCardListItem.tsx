import React from 'react'

import styles from './M_MaterialCardListItem.module.css'

export interface M_MaterialCardListItemProps {
  title: string
  description: string
  bgColor?: 'white' | 'pink'
  rotate?: 'left' | 'right' | 'none'
}

export default function M_MaterialCardListItem({
  title,
  description,
  bgColor = 'white',
  rotate = 'none',
}: M_MaterialCardListItemProps) {
  const wrapperClasses = [
    styles.wrapper,
    styles[`bg_${bgColor}`],
    rotate !== 'none' ? styles[`rotate_${rotate}`] : '',
  ]
    .join(' ')
    .trim()

  return (
    <div className={wrapperClasses}>
      <h5>{title}</h5>
      <p>{description}</p>
    </div>
  )
}
