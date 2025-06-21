import React from 'react'

import A_DirectionButton from '@/components/atoms/A_DirectionButton/A_DirectionButton'
import C_PreviewArticlesCards from '@/components/collections/C_PreviewArticlesCards/C_PreviewArticlesCards'
import { ROUTES } from '@/routes'

import styles from './W_PreviewArticlesCards.module.css'

export default function W_PreviewArticlesCards() {
  return (
    <section className={styles.wrapper}>
      <C_PreviewArticlesCards />
      <A_DirectionButton href={ROUTES.ARTICLES.INDEX} variant='orange_s'>
        Смотреть ещё
      </A_DirectionButton>
    </section>
  )
}
