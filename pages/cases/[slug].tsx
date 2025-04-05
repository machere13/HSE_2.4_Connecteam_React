import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { getCases, Case } from '@/api/cases'

export const getStaticPaths: GetStaticPaths = async () => {
  const cases = await getCases()

  const paths = cases.map(caseItem => ({
    params: { slug: caseItem.slug }
  }))

  return {
    paths,
    fallback: false // или 'blocking' если хотите ISR
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
      revalidate: 10
    }
  } catch (error) {
    console.error('Error fetching case:', error)
    return {
      notFound: true
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