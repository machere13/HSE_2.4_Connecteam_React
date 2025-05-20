import React from 'react'

import A_SearchButton from '@/components/atoms/A_SearchButton/A_SearchButton'
import W_SearchBarWithResults from '@/components/wrappers/W_SearchBarWithResults/W_SearchBarWithResults'

import styles from './O_Search.module.css'

export default function O_Search() {
  return (
    <div className={styles.wrapper}>
      <W_SearchBarWithResults />
      <A_SearchButton />
    </div>
  )
}
