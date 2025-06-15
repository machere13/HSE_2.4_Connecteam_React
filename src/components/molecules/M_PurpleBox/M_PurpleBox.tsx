import React from 'react'

import styles from './M_PurpleBox.module.css'

interface M_PurpleBoxProps {
  title: string
  text: string
}

export default function M_PurpleBox({ title, text }: M_PurpleBoxProps) {
  return (
    <div className={styles.wrapper}>
      <h5>{title}</h5>
      <p>{text}</p>
    </div>
  )
}
