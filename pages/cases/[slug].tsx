import { useRouter } from 'next/router'

import { getCases } from '@/api/cases'

import type { Case } from '@/api/cases'
import type { GetStaticPaths, GetStaticProps } from 'next'

export const getStaticPaths: GetStaticPaths = async () => {
  const cases = await getCases()

  const paths = cases.map(caseItem => ({
    params: { slug: caseItem.slug },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const cases = await getCases()
    const caseItem = cases.find(c => c.slug === params?.slug)

    if (!caseItem) {
      return { notFound: true }
    }

    return {
      props: { case: caseItem },
      revalidate: 10,
    }
  } catch (error) {
    console.error('Error fetching case:', error)
    return {
      notFound: true,
    }
  }
}

export default function CasePage({ case: caseItem }: { case: Case }) {
  const router = useRouter()

  if (router.isFallback) {
    return <div>Загрузка...</div>
  }

  return (
    <div>
      <h1>{caseItem.title}</h1>
      <p>{caseItem.content}</p>
    </div>
  )
}
