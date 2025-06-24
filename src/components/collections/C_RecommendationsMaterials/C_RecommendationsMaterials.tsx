import React, { useEffect, useState } from 'react'

import { getArticles } from '@/api/getArticles'
import { getCases } from '@/api/getCases'
import A_ComingSoonTag from '@/components/atoms/A_ComingSoonTag/A_ComingSoonTag'
import Q_ThunderIconTag from '@/components/quarks/Q_ThunderIconTag/Q_ThunderIconTag'

import styles from './C_RecommendationsMaterials.module.css'

import type { ArticleData } from '@/types/article'
import type { CaseData } from '@/types/case'

interface C_RecommendationsMaterialsProps {
  type?: 'articles' | 'cases' | 'mixed'
  count?: number
}

const RecommendationArticleCard = ({ article }: { article: ArticleData }) => {
  const isImageBackground =
    article.cardDisplay.background.startsWith('http') ||
    article.cardDisplay.background.startsWith('/')
  const backgroundStyle = isImageBackground
    ? { backgroundImage: `url(${article.cardDisplay.background})`, color: '#000' }
    : { backgroundColor: `var(--color-main-${article.cardDisplay.background})`, color: '#fff' }

  return (
    <a
      href={`/articles/${article.slug}`}
      className={styles.recommendation_card}
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
    </a>
  )
}

const RecommendationCaseCard = ({ caseItem }: { caseItem: CaseData }) => {
  const isImageBackground =
    caseItem.cardDisplay.background.startsWith('http') ||
    caseItem.cardDisplay.background.startsWith('/')
  const backgroundStyle = isImageBackground
    ? { backgroundImage: `url(${caseItem.cardDisplay.background})`, color: '#000' }
    : { backgroundColor: `var(--color-main-${caseItem.cardDisplay.background})`, color: '#fff' }

  return (
    <a
      href={`/cases/${caseItem.slug}`}
      className={styles.recommendation_card}
      style={backgroundStyle}
    >
      <div className={styles.card_content}>
        <div className={styles.card_additional_info}>
          {caseItem.cardDisplay.hasIcon && <Q_ThunderIconTag />}
          {caseItem.cardDisplay.comingSoon && <A_ComingSoonTag />}
        </div>
        <div>
          <h5>{caseItem.title}</h5>
        </div>
      </div>
    </a>
  )
}

export default function C_RecommendationsMaterials({
  type = 'mixed',
  count = 3,
}: C_RecommendationsMaterialsProps) {
  const [articles, setArticles] = useState<ArticleData[]>([])
  const [cases, setCases] = useState<CaseData[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)

        if (type === 'articles' || type === 'mixed') {
          const articlesData = await getArticles()
          setArticles(articlesData)
        }

        if (type === 'cases' || type === 'mixed') {
          const casesData = await getCases()
          setCases(casesData)
        }
      } catch (error) {
        console.error('Ошибка загрузки рекомендаций:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [type])

  const getRandomItems = <T,>(array: T[], count: number): T[] => {
    const shuffled = [...array].sort(() => 0.5 - Math.random())
    return shuffled.slice(0, count)
  }

  const getRecommendations = () => {
    if (type === 'articles') {
      return getRandomItems(articles, count)
    }

    if (type === 'cases') {
      return getRandomItems(cases, count)
    }

    const mixedItems = [
      ...articles.map(item => ({ ...item, type: 'article' as const })),
      ...cases.map(item => ({ ...item, type: 'case' as const })),
    ]
    return getRandomItems(mixedItems, count)
  }

  const recommendations = getRecommendations()

  if (loading) {
    return <div>d</div>
  }

  return (
    <div className={styles.wrapper}>
      {recommendations.map((item, _index) => {
        if ('type' in item) {
          if (item.type === 'article') {
            const article = item as ArticleData & { type: 'article' }
            return <RecommendationArticleCard key={`article-${article.id}`} article={article} />
          } else {
            const caseItem = item as CaseData & { type: 'case' }
            return <RecommendationCaseCard key={`case-${caseItem.id}`} caseItem={caseItem} />
          }
        } else if (type === 'articles') {
          const article = item as ArticleData
          return <RecommendationArticleCard key={`article-${article.id}`} article={article} />
        } else {
          const caseItem = item as CaseData
          return <RecommendationCaseCard key={`case-${caseItem.id}`} caseItem={caseItem} />
        }
      })}
    </div>
  )
}
