import { useRouter } from 'next/router'

import { getArticles } from '@/api/articles'
import SO_Header from '@/components/super-organisms/SO_Header/SO_Header'

import type { Article } from '@/api/articles'
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

export const getStaticProps: GetStaticProps = async ({ params }) => {
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

export default function ArticlePage({ article }: { article: Article }) {
  const router = useRouter()

  if (router.isFallback) {
    return <div>Загрузка...</div>
  }

  return (
    <div>
      <SO_Header />
      <h1>{article.title}</h1>
      <p>{article.content}</p>
    </div>
  )
}
