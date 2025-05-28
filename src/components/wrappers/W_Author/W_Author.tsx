import React from 'react'

import M_Person from '@/components/molecules/M_Person/M_Person'

import styles from './W_Author.module.css'

export default function W_Author() {
  return (
    <div className={styles.wrapper}>
        <h5>Статью подготовили</h5>
        <M_Person />
    </div>
  )
}
