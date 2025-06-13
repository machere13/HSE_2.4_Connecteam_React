import Link from 'next/link'

import { getTests } from '@/api/getTests'
import Q_Grid from '@/components/quarks/Q_Grid/Q_Grid'
import SO_Header from '@/components/super-organisms/SO_Header/SO_Header'
import W_StickersContainer from '@/components/wrappers/W_StickersContainer/W_StickersContainer'
import W_TestCardsWithTitle from '@/components/wrappers/W_TestCardsWithTitle/W_TestCardsWithTitle'
import { ROUTES } from '@/routes'

import type { TestData } from '@/types/test'

export const getStaticProps = async () => {
  const tests = await getTests()
  return {
    props: { tests },
    revalidate: 60,
  }
}

export default function InteractivesPage({ tests }: { tests: TestData[] }) {
  return (
    <div>
      <SO_Header />
      <Q_Grid variant='gray' />
      <h1>Интерактивы</h1>
      <W_TestCardsWithTitle tests={tests} />
      <W_StickersContainer initialCount={2} />
      <div>
        <Link href={ROUTES.INTERACTIVES.IT_BUNKER}>IT-bunker</Link>
        <Link href={ROUTES.INTERACTIVES.IT_MAFIA}>IT-mafia</Link>
        <Link href={ROUTES.INTERACTIVES.GENERATOR}>Generator</Link>
      </div>
    </div>
  )
}
