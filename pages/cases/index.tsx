import { getCases } from '@/api/getCases'
import Q_Grid from '@/components/quarks/Q_Grid/Q_Grid'
import SO_Header from '@/components/super-organisms/SO_Header/SO_Header'

import type { CaseData } from '@/types/case'

export const getStaticProps = async () => {
  const cases = await getCases()
  return {
    props: { cases },
    revalidate: 60,
  }
}

export default function CasesPage({ cases }: { cases: CaseData[] }) {
  return (
    <div>
      <SO_Header />
      <Q_Grid variant='gray' />
      <h1>Все кейсы</h1>
      <div>
        {cases.map(caseItem => (
          <li key={caseItem.id}>
            <a href={`/cases/${caseItem.slug}`}>{caseItem.title}</a>
            <p>{caseItem.description}</p>
          </li>
        ))}
      </div>
    </div>
  )
}
