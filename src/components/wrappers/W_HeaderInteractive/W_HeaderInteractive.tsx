import React from 'react'

import C_HeaderNavigation from '@/components/collections/C_HeaderNavigation/C_HeaderNavigation'
import O_Search from '@/components/organisms/O_Search/O_Search'

import styles from './W_HeaderInteractive.module.css'

export default function W_HeaderInteractive() {
  return (
    <div className={styles.wrapper}>
      <C_HeaderNavigation />
      <O_Search />
    </div>
  )
}
