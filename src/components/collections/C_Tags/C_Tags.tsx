import React from 'react'

import A_Tag from '@/components/atoms/A_Tag/A_Tag'

import styles from './C_Tags.module.css'

interface C_TagsProps {
  items: string[]
}

export default function C_Tags({ items }: C_TagsProps) {
  return (
    <div className={styles.wrapper}>
      {items.map(item => (
        <A_Tag key={item} title={item} />
      ))}
    </div>
  )
}
