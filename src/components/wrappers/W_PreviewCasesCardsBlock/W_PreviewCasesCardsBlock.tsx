import React from 'react'

import C_PreviewCasesCards from '@/components/collections/C_PreviewCasesCards/C_PreviewCasesCards'

import styles from './W_PreviewCasesCardsBlock.module.css'

export default function W_PreviewCasesCardsBlock() {
  return (
    <div className={styles.wrapper}>
      <h3>Реальные?! Кейсы!</h3>
      <C_PreviewCasesCards />
    </div>
  )
}
