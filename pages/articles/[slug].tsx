import { useRouter } from 'next/router'

import { getArticles } from '@/api/getArticles'
import SO_Header from '@/components/super-organisms/SO_Header/SO_Header'

import type { ArticleData } from '@/types/article'
import type { GetStaticPaths, GetStaticProps } from 'next'

export const getStaticPaths: GetStaticPaths = async () => {
  const articles = await getArticles()

  const paths = articles.map(article => ({
    params: { slug: article.slug },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<{ article: ArticleData }, { slug: string }> = async ({ params }) => {
  try {
    const articles = await getArticles()
    const article = articles.find(a => a.slug === params?.slug)

    if (!article) {
      return { notFound: true }
    }

    return {
      props: { article },
      revalidate: 10,
    }
  } catch (error) {
    console.error('Error fetching article:', error)
    return {
      notFound: true,
    }
  }
}

interface ArticlePageProps {
  article: ArticleData
}

export default function ArticlePage({ article }: ArticlePageProps) {
  const router = useRouter()

  if (router.isFallback) {
    return <div>Загрузка...</div>
  }

  return (
    <div>
      <SO_Header />
      {article.article.content.map((block, index) => {
        switch (block.type) {
          case 'heading-1':
            return <h1 key={index}>{block.text}</h1>
          case 'heading-3':
            return <h3 key={index}>{block.text}</h3>
          case 'paragraph':
            return <p key={index}>{block.text}</p>
          case 'image':
            return <img key={index} src={block.image} alt={block.description || ''} />
          case 'previewParagraph':
            return <p key={index} style={{ fontStyle: 'italic' }}>{block.text}</p>
          case 'tags':
            return (
              <ul key={index} style={{ display: 'flex', gap: '8px' }}>
                {block.items.map((tag, i) => (
                  <li key={i}>#{tag}</li>
                ))}
              </ul>
            )
          case 'whiteBox':
            return (
              <div key={index} style={{ background: '#f9f9f9', padding: '16px', borderRadius: '8px' }}>
                <strong>{block.title}</strong>
                <p>{block.text}</p>
              </div>
            )
          case 'elements':
            return (
              <div key={index}>
                <h4>{block.title}</h4>
                <ul>
                  {block.items.map((item, i) => (
                    <li key={i}>
                      <strong>{item.title}:</strong> {item.description}
                    </li>
                  ))}
                </ul>
              </div>
            )
          case 'telegram':
            return (
              <p key={index}>
                Подписывайтесь на <a href={block.link} target="_blank" rel="noopener noreferrer">наш Telegram</a>
              </p>
            )
          case 'examples':
            return (
              <div key={index}>
                <h4>Примеры:</h4>
                <ul>
                  {block.items.map((item, i) => (
                    <li key={i}>
                      <strong>{item.title}:</strong> {item.description}
                    </li>
                  ))}
                </ul>
              </div>
            )
          case 'highlightedSection':
            return (
              <div key={index} style={{ background: '#eef', padding: '16px', borderRadius: '8px' }}>
                <h4>{block.title}</h4>
                <ul>
                  {block.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            )
          case 'cardList':
            return (
              <div key={index}>
                <h4>{block.title}</h4>
                <ul>
                  {block.items.map((item, i) => (
                    <li key={i}>
                      <strong>{item.title}:</strong> {item.description}
                    </li>
                  ))}
                </ul>
              </div>
            )
          case 'moreInCase':
            return (
              <p key={index}>
                Подробнее в <a href={block.link} target="_blank" rel="noopener noreferrer">этом случае</a>
              </p>
            )
          default:
            const _exhaustiveCheck: never = block
            return null
        }
      })}
    </div>
  )
}
