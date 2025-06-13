import { useRouter } from 'next/router'

import { getArticles } from '@/api/getArticles'
import SO_Header from '@/components/super-organisms/SO_Header/SO_Header'
import W_ArticleAboutInfo from '@/components/wrappers/W_ArticleAboutInfo/W_ArticleAboutInfo'
import W_StickersContainer from '@/components/wrappers/W_StickersContainer/W_StickersContainer'
import { MaterialBlockRenderer } from '@/lib/materialBlockRenderer'

import type { M_PersonProps } from '@/components/molecules/M_Person/M_Person'
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

export const getStaticProps: GetStaticProps<{ article: ArticleData }, { slug: string }> = async ({
  params,
}) => {
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
  let cardListIndex = 0

  if (router.isFallback) {
    return <div>Загрузка...</div>
  }

  const authorProps: M_PersonProps = {
    name: article.article.author.name,
    role: article.article.author.description,
    photoSrc: article.article.author.image,
  }

  return (
    <div>
      <SO_Header />
      <div>
        <W_ArticleAboutInfo author={authorProps} />
        {article.article.content.map((block, index) => {
          if (block.type === 'cardList') {
            const currentIndex = cardListIndex
            cardListIndex++
            return (
              <MaterialBlockRenderer
                key={index}
                block={block}
                variant={{
                  type: 'article',
                  articleType: article.article.type as 'big' | 'short' | 'superShort',
                  positionIndex: index,
                }}
                cardListIndex={currentIndex}
              />
            )
          }
          return (
            <MaterialBlockRenderer
              key={index}
              block={block}
              variant={{
                type: 'article',
                articleType: article.article.type as 'big' | 'short' | 'superShort',
                positionIndex: index,
              }}
            />
          )
        })}

        {article.article.stickers && article.article.stickers.length > 0 && (
          <div>
            {article.article.stickers.map((sticker, index) => (
              <span key={index}>{sticker}</span>
            ))}
          </div>
        )}
      </div>
      <W_StickersContainer initialCount={2} />
    </div>
  )
}
