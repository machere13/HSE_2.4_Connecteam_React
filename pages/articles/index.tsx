import { useState } from 'react'

import { getArticles } from '@/api/getArticles'
import O_Footer from '@/components/organisms/O_Footer/O_Footer'
import Q_Grid from '@/components/quarks/Q_Grid/Q_Grid'
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

  const uniqueFilters = Array.from(new Set(articles.map(article => article.filter)))

  const handleFilterClick = (filter: string) => {
    setActiveFilters(prev =>
      prev.includes(filter) ? prev.filter(f => f !== filter) : [...prev, filter],
    )
  }

  return (
    <div className='page'>
      <Meta
        title='Статьи | Connecteam'
        description='Полезные статьи о деловой коммуникации в IT-командах'
        url='https://connecteam.space/articles'
      />
      <div className='header_content_gap'>
        <SO_Header />
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
  )
}
