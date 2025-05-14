import React from 'react'

import C_FooterIcons from '@/components/collections/C_FooterIcons/C_FooterIcons'

import styles from './W_FooterIcons.module.css'

export default function W_FooterIcons() {
  return (
    <div className={styles.wrapper}>
      <p>Мы в соц. сетях:</p>
      <C_FooterIcons />
    </div>
  )
}
