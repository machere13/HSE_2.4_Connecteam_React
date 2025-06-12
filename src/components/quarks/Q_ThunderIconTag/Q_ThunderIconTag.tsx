import React from 'react'

import Q_Icon from '../Q_Icon/Q_Icon'

import styles from './Q_ThunderIconTag.module.css'

export default function Q_ThunderIconTag() {
  return (
    <div className={styles.wrapper}>
      <Q_Icon name='thunderIcon' width='14' height='25' viewBox='0 0 14 25' />
    </div>
  )
}
