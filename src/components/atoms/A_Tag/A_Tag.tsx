import React from 'react'

import styles from './A_Tag.module.css'

interface A_TagProps {
  title: string
}

export default function A_Tag({ title }: A_TagProps) {
  return (
    <div className={styles.wrapper}>
      <span className='text_captions_l'>{title}</span>
    </div>
  )
}
