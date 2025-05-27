import React from 'react'

import cn from 'classnames'

import styles from './Q_Grid.module.css'

export default function Q_Grid({ variant = 'blue' }) {
  const variantClass = variant === 'blue' ? styles.blue : styles.gray

  return <div className={cn(styles.wrapper, variantClass)}></div>
}
