import React from 'react'

import C_FooterButtons from '@/components/collections/C_FooterButtons/C_FooterIcons'

import styles from './W_FooterButtons.module.css'

export default function W_FooterButtons() {
  return (
    <div className={styles.wrapper}>
      <p>Мы в соц. сетях:</p>
      <C_FooterButtons />
    </div>
  )
}
