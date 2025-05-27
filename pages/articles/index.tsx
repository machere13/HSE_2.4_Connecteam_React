import { getArticles } from '@/api/articles'
import Q_Grid from '@/components/quarks/Q_Grid/Q_Grid'
import SO_Header from '@/components/super-organisms/SO_Header/SO_Header'

import type { Article } from '@/api/articles'
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

export default function ArticlesPage({ articles }: { articles: Article[] }) {
  return (
    <div>
      <SO_Header />
      <Q_Grid variant='gray' />
      <h1>Все статьи</h1>
      <ul>
        {articles.map(article => (
          <li key={article.id}>
            <a href={`/articles/${article.slug}`}>{article.title}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}
