import React, { useEffect } from 'react'
import { useState } from 'react'

import { getArticles } from '@/api/getArticles'
import M_HintScroll from '@/components/molecules/M_HintScroll/M_HintScroll'
import O_Footer from '@/components/organisms/O_Footer/O_Footer'
import Q_Grid from '@/components/quarks/Q_Grid/Q_Grid'
import Q_PageLoader, { usePageLoader } from '@/components/quarks/Q_PageLoader/Q_PageLoader'
import SO_Header from '@/components/super-organisms/SO_Header/SO_Header'
import T_MaterialsPageContent from '@/components/templates/T_MaterialsPageContent/T_MaterialsPageContent'
import W_ArticleCards from '@/components/wrappers/W_ArticleCards/W_ArticleCards'
import { Meta } from '@/lib/Meta'

import type { ArticleData } from '@/types/article'
import type { GetStaticProps } from 'next'

export const getStaticProps: GetStaticProps = async () => {
  try {
    const articles = await getArticles()

    return {
      props: {
        articles,
      },
      revalidate: 60,
    }
  } catch (error) {
    console.error('Error in getStaticProps:', error)
    return {
      props: {
        articles: [],
      },
    }
  }
}

export default function ArticlesPage({ articles }: { articles: ArticleData[] }) {
  const [activeFilters, setActiveFilters] = useState<string[]>([])
  const { isLoading, stopLoading } = usePageLoader()

  const uniqueFilters = Array.from(new Set(articles.map(article => article.filter)))

  const handleFilterClick = (filter: string) => {
    setActiveFilters(prev =>
      prev.includes(filter) ? prev.filter(f => f !== filter) : [...prev, filter],
    )
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      stopLoading()
    }, 1000)

    return () => clearTimeout(timer)
  }, [stopLoading])

  return (
    <>
      <Q_PageLoader isLoading={isLoading} />
      <div className='page'>
        <Meta
          title='Статьи | Connecteam'
          description='Полезные статьи о деловой коммуникации в IT-командах'
          url='https://connecteam.space/articles'
        />
        <div className='header_content_gap'>
          <SO_Header />
          <M_HintScroll />
          <T_MaterialsPageContent
            title='Статьи'
            filters={uniqueFilters}
            activeFilters={activeFilters}
            onFilterClick={handleFilterClick}
          >
            <W_ArticleCards articles={articles} activeFilters={activeFilters} />
          </T_MaterialsPageContent>
        </div>
        <Q_Grid variant='gray' />
        <O_Footer />
      </div>
    </>
  )
}
