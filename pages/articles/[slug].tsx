import React, { useEffect } from 'react'

import { useRouter } from 'next/router'

import { getArticles, getArticleBySlug } from '@/api/getArticles'
import A_DirectionButton from '@/components/atoms/A_DirectionButton/A_DirectionButton'
import O_Footer from '@/components/organisms/O_Footer/O_Footer'
import Q_Grid from '@/components/quarks/Q_Grid/Q_Grid'
import Q_PageLoader, { usePageLoader } from '@/components/quarks/Q_PageLoader/Q_PageLoader'
import SO_Header from '@/components/super-organisms/SO_Header/SO_Header'
import T_ErrorPage from '@/components/templates/T_ErrorPage/T_ErrorPage'
import W_ArticleAboutInfo from '@/components/wrappers/W_ArticleAboutInfo/W_ArticleAboutInfo'
import W_RecommendationsMaterials from '@/components/wrappers/W_RecommendationsMaterials/W_RecommendationsMaterials'
import W_StickersContainer from '@/components/wrappers/W_StickersContainer/W_StickersContainer'
import { handleHttpError } from '@/lib/handleHttpError'
import { MaterialBlockRenderer } from '@/lib/materialBlockRenderer'
import { Meta } from '@/lib/Meta'
import { ROUTES } from '@/routes'

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

export const getStaticProps: GetStaticProps<
  { article: ArticleData | null; errorCode: number | null },
  { slug: string }
> = async ({ params }) => {
  try {
    const slug = params?.slug
    if (!slug) {
      return { notFound: true }
    }

    const { article, errorCode } = await getArticleBySlug(slug)

    if (!article && !errorCode) {
      return { notFound: true }
    }

    return {
      props: { article, errorCode },
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
  article: ArticleData | null
  errorCode: number | null
}

export default function ArticlePage({ article, errorCode }: ArticlePageProps) {
  const router = useRouter()
  const { isLoading, stopLoading } = usePageLoader()

  useEffect(() => {
    if (errorCode) {
      handleHttpError(errorCode)
    }
  }, [errorCode])

  useEffect(() => {
    const timer = setTimeout(() => {
      stopLoading()
    }, 1000)

    return () => clearTimeout(timer)
  }, [stopLoading])

  if (router.isFallback) {
    return <Q_PageLoader isLoading={true} />
  }

  if (errorCode) {
    return null
  }

  if (!article) {
    return <T_ErrorPage errorType='404-article' />
  }

  let cardListIndex = 0

  const authorProps: M_PersonProps = {
    name: article.article.author.name,
    role: article.article.author.description,
    photoSrc: article.article.author.image,
  }

  return (
    <>
      <Q_PageLoader isLoading={isLoading} />
      <div className='page'>
        <Meta
          title={`${article.title} | Connecteam`}
          description={article.description}
          url={`https://connecteam.space/articles/${article.slug}`}
          type='article'
        />
        <SO_Header />
        <div className='materials_content_wrapper'>
          <div className='position_right'>
            <A_DirectionButton variant='orange_s' href={ROUTES.ARTICLES.INDEX}>
              Вернуться назад
            </A_DirectionButton>
          </div>
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
        <W_RecommendationsMaterials />
        <W_StickersContainer />
        <Q_Grid variant='gray' />
        <O_Footer />
      </div>
    </>
  )
}
