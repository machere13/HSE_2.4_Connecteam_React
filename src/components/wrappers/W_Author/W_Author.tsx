import React from 'react'

import M_Person from '@/components/molecules/M_Person/M_Person'

import styles from './W_Author.module.css'

import type { M_PersonProps } from '@/components/molecules/M_Person/M_Person'

interface W_AuthorProps {
  author: M_PersonProps
}

export default function W_Author({ author }: W_AuthorProps) {
  return (
    <div className={styles.wrapper}>
      <h6>Статью подготовили</h6>
      <M_Person {...author} />
    </div>
  )
}
