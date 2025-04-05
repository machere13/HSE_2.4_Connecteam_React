import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { getTests, getTestBySlug, Test } from '@/api/tests'
import Link from 'next/link'

export const getStaticPaths: GetStaticPaths = async () => {
  const tests = await getTests()
  const paths = tests.map(test => ({
    params: { slug: test.slug }
  }))

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const test = await getTestBySlug(params?.slug as string)

  if (!test) {
    return { notFound: true }
  }

  return {
    props: { test },
    revalidate: 10
  }
}

export default function TestPage({ test }: { test: Test }) {
  const router = useRouter()

  if (router.isFallback) {
    return <div>Загрузка...</div>
  }

  return (
    <div>
      <h1>{test.title}</h1>
      <p>{test.content}</p>
      <Link href="/interactives">
        Вернуться назад
      </Link>
    </div>
  )
}