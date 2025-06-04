import React from 'react'

import styles from './M_MaterialWhiteBox.module.css'

interface M_MaterialWhiteBoxProps {
  title: string
  text: string
}

export default function M_MaterialWhiteBox({ title, text }: M_MaterialWhiteBoxProps) {
  return (
    <div className={styles.wrapper}>
      <h5>{title}</h5>
      <p>{text}</p>
    </div>
  )
}
