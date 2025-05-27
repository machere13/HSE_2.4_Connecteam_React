import React from 'react'

import Q_Icon from '@/components/quarks/Q_Icon/Q_Icon'
import W_FooterIcons from '@/components/wrappers/W_FooterIcons/W_FooterIcons'

import styles from './O_Footer.module.css'

export default function O_Footer() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <Q_Icon name='logoFull' width='200' height='24' />
        <p>Кольченко / Косарева / .machére13</p>
      </div>
      <W_FooterIcons />
    </div>
  )
}
