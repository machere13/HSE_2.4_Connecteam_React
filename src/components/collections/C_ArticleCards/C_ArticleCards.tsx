import React from 'react'

import M_ArticleCard from '@/components/molecules/M_ArticleCard/M_ArticleCard'
import { ROUTES } from '@/routes'

import styles from './C_ArticleCards.module.css'

import type { ArticleData } from '@/types/article'

interface C_ArticleCardsProps {
  articles: ArticleData[]
}

export default function C_ArticleCards({ articles }: C_ArticleCardsProps) {
  return (
    <div className={styles.wrapper}>
      {articles.map(article => (
        <M_ArticleCard
          key={article.id}
          href={ROUTES.ARTICLES.bySlug(article.slug)}
          title={article.title}
          description={article.description}
          cardDisplay={article.cardDisplay}
        />
      ))}
    </div>
  )
}
