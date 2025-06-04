import React from 'react'

import styles from './M_CaseTitleParagraph.module.css'

interface M_CaseTitleParagraph {
  title: string
  text: string
}

export default function M_CaseTitleParagraph({ title, text }: M_CaseTitleParagraph) {
  return (
    <div className={styles.wrapper}>
      <h5>{title}</h5>
      <p>{text}</p>
    </div>
  )
}
