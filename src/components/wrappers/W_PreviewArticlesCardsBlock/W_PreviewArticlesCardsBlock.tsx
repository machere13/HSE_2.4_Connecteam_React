import React from 'react'

import W_PreviewArticlesCards from '../W_PreviewArticlesCards/W_PreviewArticlesCards'

import styles from './W_PreviewArticlesCardsBlock.module.css'

export default function W_PreviewArticlesCardsBlock() {
  return (
    <div className={styles.wrapper}>
      <h3>Опа, свежий материал подоспел!</h3>
      <W_PreviewArticlesCards />
    </div>
  )
}
