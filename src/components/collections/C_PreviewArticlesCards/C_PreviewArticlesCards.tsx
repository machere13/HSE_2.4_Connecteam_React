import React, { useEffect, useState } from 'react'

import cn from 'classnames'
import Link from 'next/link'

import { getArticles } from '@/api/getArticles'
import A_ComingSoonTag from '@/components/atoms/A_ComingSoonTag/A_ComingSoonTag'
import Q_ThunderIconTag from '@/components/quarks/Q_ThunderIconTag/Q_ThunderIconTag'
import { ROUTES } from '@/routes'

import styles from './C_PreviewArticlesCards.module.css'

import type { ArticleData } from '@/types/article'

export default function C_PreviewArticlesCards() {
  const [articles, setArticles] = useState<ArticleData[]>([])

  useEffect(() => {
    const fetchArticles = async () => {
      const articlesData = await getArticles()
      setArticles(articlesData)
    }

    fetchArticles()
  }, [])

  const getRandomArticles = (count = 3): ArticleData[] => {
    const shuffled = [...articles].sort(() => 0.5 - Math.random())
    return shuffled.slice(0, count)
  }

  const previewArticles = getRandomArticles(3)

  return (
    <div className={styles.wrapper}>
      {previewArticles.map(article => {
        const isImageBackground =
          article.cardDisplay.background.startsWith('http') ||
          article.cardDisplay.background.startsWith('/')
        const backgroundStyle = isImageBackground
          ? { backgroundImage: `url(${article.cardDisplay.background})`, color: '#000' }
          : {
              backgroundColor: `var(--color-main-${article.cardDisplay.background})`,
              color: '#fff',
            }

        return (
          <Link
            key={article.id}
            href={ROUTES.ARTICLES.bySlug(article.slug)}
            className={cn(styles.article_card, styles[article.cardDisplay.rotate])}
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
