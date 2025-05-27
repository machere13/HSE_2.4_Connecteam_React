import Link from 'next/link'

import { getCases } from '@/api/cases'
import Q_Grid from '@/components/quarks/Q_Grid/Q_Grid'
import SO_Header from '@/components/super-organisms/SO_Header/SO_Header'
import { ROUTES } from '@/routes'

import type { Case } from '@/api/cases'

export const getStaticProps = async () => {
  const cases = await getCases()
  return {
    props: { cases },
    revalidate: 60,
  }
}

export default function CasesPage({ cases }: { cases: Case[] }) {
  return (
    <div>
      <SO_Header />
      <Q_Grid variant='gray' />
      <h1>Все кейсы</h1>
      <div>
        {cases.map(caseItem => (
          <div key={caseItem.id}>
            <Link href={ROUTES.CASES.bySlug(caseItem.slug)}>
              <h2>{caseItem.title}</h2>
              <p>{caseItem.content.substring(0, 150)}...</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
