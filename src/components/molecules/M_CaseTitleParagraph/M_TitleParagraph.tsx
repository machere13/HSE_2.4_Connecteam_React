import React from 'react'

import styles from './M_TitleParagraph.module.css'

interface M_TitleParagraph {
  title: string
  text: string
}

export default function M_TitleParagraph({ title, text }: M_TitleParagraph) {
  return (
    <div className={styles.wrapper}>
      <h5>{title}</h5>
      <p>{text}</p>
    </div>
  )
}
