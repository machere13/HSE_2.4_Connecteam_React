import { useEffect, useState } from 'react'

import A_HandleButton from '@/components/atoms/A_HandleButton/A_HandleButton'
import C_ArticleCards from '@/components/collections/C_ArticleCards/C_ArticleCards'

import styles from './W_ArticleCards.module.css'

import type { ArticleData } from '@/types/article'

interface W_ArticleCardsProps {
  articles: ArticleData[]
  activeFilters: string[]
}

export default function W_ArticleCards({ articles, activeFilters }: W_ArticleCardsProps) {
  const [visibleCount, setVisibleCount] = useState(4)
  const ITEMS_PER_PAGE = 4

  const filteredArticles =
    activeFilters.length > 0
      ? articles.filter(article => activeFilters.includes(article.filter))
      : articles

  const visibleArticles = filteredArticles.slice(0, visibleCount)
  const hasMore = visibleCount < filteredArticles.length

  useEffect(() => {
    setVisibleCount(4)
  }, [activeFilters])

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + ITEMS_PER_PAGE)
  }

  return (
    <div className={styles.wrapper}>
      <C_ArticleCards articles={visibleArticles} />
      {hasMore && (
        <A_HandleButton variant='orange' onClick={handleLoadMore}>
          Смотреть еще
        </A_HandleButton>
      )}
    </div>
  )
}
