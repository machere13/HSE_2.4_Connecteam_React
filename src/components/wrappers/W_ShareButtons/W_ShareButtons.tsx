import React from 'react'

import C_ShareButtons from '@/components/collections/C_ShareButtons/C_ShareButtons'

import styles from './W_ShareButtons.module.css'

export default function W_ShareButtons() {
  return (
    <div className={styles.wrapper}>
      <h6>Поделиться</h6>
      <C_ShareButtons />
    </div>
  )
}
