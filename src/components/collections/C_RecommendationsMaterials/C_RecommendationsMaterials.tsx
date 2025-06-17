import React, { useEffect, useState } from 'react'

import { getArticles } from '@/api/getArticles'
import { getCases } from '@/api/getCases'
import M_ArticleCard from '@/components/molecules/M_ArticleCard/M_ArticleCard'
import M_CaseCard from '@/components/molecules/M_CaseCard/M_CaseCard'

import styles from './C_RecommendationsMaterials.module.css'

import type { ArticleData } from '@/types/article'
import type { CaseData } from '@/types/case'

interface C_RecommendationsMaterialsProps {
  type?: 'articles' | 'cases' | 'mixed'
  count?: number
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
            return (
              <M_ArticleCard
                key={`article-${article.id}`}
                href={`/articles/${article.id}`}
                title={article.title}
                description={article.description}
                cardDisplay={article.cardDisplay}
              />
            )
          } else {
            const caseItem = item as CaseData & { type: 'case' }
            return (
              <M_CaseCard
                key={`case-${caseItem.id}`}
                href={`/cases/${caseItem.id}`}
                title={caseItem.title}
                cardDisplay={caseItem.cardDisplay}
              />
            )
          }
        } else if (type === 'articles') {
          const article = item as ArticleData
          return (
            <M_ArticleCard
              key={`article-${article.id}`}
              href={`/articles/${article.id}`}
              title={article.title}
              description={article.description}
              cardDisplay={article.cardDisplay}
            />
          )
        } else {
          const caseItem = item as CaseData
          return (
            <M_CaseCard
              key={`case-${caseItem.id}`}
              href={`/cases/${caseItem.id}`}
              title={caseItem.title}
              cardDisplay={caseItem.cardDisplay}
            />
          )
        }
      })}
    </div>
  )
}
