import React from 'react'

import styles from './M_ArticleMoreInCaseBlock.module.css'

interface M_ArticleMoreInCaseBlockProps {
  link: string
}

export default function M_ArticleMoreInCaseBlock({ link }: M_ArticleMoreInCaseBlockProps) {
  return (
    <div className={styles.wrapper}>
      <h3>Больше по&nbsp;теме в&nbsp;отдельном кейсе</h3>
      <a href={link} target='_blank' rel='noreferrer'>
        www
      </a>
    </div>
  )
}
