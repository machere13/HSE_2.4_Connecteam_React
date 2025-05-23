import Link from 'next/link'

import { getTests } from '@/api/tests'
import SO_Header from '@/components/super-organisms/SO_Header/SO_Header'
import { ROUTES } from '@/routes'

import type { Test } from '@/api/tests'

export const getStaticProps = async () => {
  const tests = await getTests()
  return {
    props: { tests },
    revalidate: 60,
  }
}

export default function InteractivesPage({ tests }: { tests: Test[] }) {
  return (
    <div>
      <SO_Header />
      <h1>Интерактивы</h1>

      <div>
        {tests.map(test => (
          <div key={test.id}>
            <Link href={ROUTES.INTERACTIVES.TESTS.bySlug(test.slug)}>{test.title}</Link>
          </div>
        ))}
      </div>

      <div>
        <Link href={ROUTES.INTERACTIVES.IT_BUNKER}>IT-bunker</Link>
        <Link href={ROUTES.INTERACTIVES.IT_MAFIA}>IT-mafia</Link>
        <Link href={ROUTES.INTERACTIVES.GENERATOR}>Generator</Link>
      </div>
    </div>
  )
}
