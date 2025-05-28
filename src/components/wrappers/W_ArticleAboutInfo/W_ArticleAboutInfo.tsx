import React from 'react'

import W_Author from '../W_Author/W_Author'
import W_ShareButtons from '../W_ShareButtons/W_ShareButtons'

import styles from './W_ArticleAboutInfo.module.css'

interface ArticleAboutInfoProps {
  author: {
    name: string
    role: string
    photoSrc: string
    photoAlt?: string
  }
}

export default function W_ArticleAboutInfo({ author }: ArticleAboutInfoProps) {
  return (
    <div className={styles.wrapper}>
      <W_Author author={author} />
      <W_ShareButtons />
    </div>
  )
}
