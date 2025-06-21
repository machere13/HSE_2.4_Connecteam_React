import React, { useEffect, useState } from 'react'

import Link from 'next/link'

import { getArticles } from '@/api/getArticles'
import A_ComingSoonTag from '@/components/atoms/A_ComingSoonTag/A_ComingSoonTag'
import Q_ThunderIconTag from '@/components/quarks/Q_ThunderIconTag/Q_ThunderIconTag'
import { ROUTES } from '@/routes'

import styles from './C_PreviewArticlesCards.module.css'

import type { ArticleData } from '@/types/article'

export default function C_PreviewArticlesCards() {
  const [articles, setArticles] = useState<ArticleData[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true)
        const articlesData = await getArticles()
        setArticles(articlesData)
      } catch (error) {
        console.error('Ошибка загрузки статей:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchArticles()
  }, [])

  const getRandomArticles = (count = 3): ArticleData[] => {
    const shuffled = [...articles].sort(() => 0.5 - Math.random())
    return shuffled.slice(0, count)
  }

  const previewArticles = getRandomArticles(3)

  if (loading) {
    return (
      <div className={styles.wrapper}>
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className={styles.skeleton}>
            Загрузка...
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className={styles.wrapper}>
      {previewArticles.map(article => {
        const isImageBackground =
          article.cardDisplay.background.startsWith('http') ||
          article.cardDisplay.background.startsWith('/')
        const backgroundStyle = isImageBackground
          ? { backgroundImage: `url(${article.cardDisplay.background})` }
          : { backgroundColor: `var(--color-main-${article.cardDisplay.background})` }

        return (
          <Link
            key={article.id}
            href={ROUTES.ARTICLES.bySlug(article.slug)}
            className={styles.article_card}
            style={backgroundStyle}
          >
            <div className={styles.card_content}>
              <div className={styles.card_additional_info}>
                {article.cardDisplay.hasIcon && <Q_ThunderIconTag />}
                {article.cardDisplay.comingSoon && <A_ComingSoonTag />}
              </div>
              <div className={styles.card_text}>
                <h5>{article.title}</h5>
                <p>{article.description}</p>
              </div>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
