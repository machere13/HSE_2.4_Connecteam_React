import { GetStaticProps } from 'next'
import { getArticles, Article } from '@/api/articles'

export const getStaticProps: GetStaticProps = async () => {
  try {
    const articles = await getArticles()
    
    return {
      props: {
        articles
      },
      revalidate: 60
    }
  } catch (error) {
    console.error('Error:', error)
    return {
      props: {
        articles: []
      }
    }
  }
}

interface Props {
  articles: Article[]
}

export default function ArticlesList({ articles }: Props) {
  return (
    <div>
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