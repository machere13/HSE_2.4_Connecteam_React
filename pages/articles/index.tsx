import { useState } from 'react'

import { getArticles } from '@/api/getArticles'
import Q_Grid from '@/components/quarks/Q_Grid/Q_Grid'
import SO_Header from '@/components/super-organisms/SO_Header/SO_Header'
import W_FilterTags from '@/components/wrappers/W_FilterTags/W_FilterTags'

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
    console.error('Error:', error)
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

  const filteredArticles =
    activeFilters.length > 0
      ? articles.filter(article => activeFilters.includes(article.filter))
      : articles

  const handleFilterClick = (filter: string) => {
    setActiveFilters(prev =>
      prev.includes(filter) ? prev.filter(f => f !== filter) : [...prev, filter],
    )
  }

  return (
    <div>
      <SO_Header />
      <Q_Grid variant='gray' />
      <div>
        <h1>Все статьи</h1>

        <W_FilterTags
          tags={uniqueFilters}
          activeTags={activeFilters}
          onTagClick={handleFilterClick}
        />

        <ul>
          {filteredArticles.map(article => (
            <li key={article.id}>
              <a href={`/articles/${article.slug}`}>{article.title}</a>
              <p>{article.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
