import Link from 'next/link'
import { ROUTES } from '@/routes'
import { getTests, Test } from '@/api/tests'

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
