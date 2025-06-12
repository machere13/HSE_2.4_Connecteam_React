import { useState } from 'react'

import { getCases } from '@/api/getCases'
import Q_Grid from '@/components/quarks/Q_Grid/Q_Grid'
import SO_Header from '@/components/super-organisms/SO_Header/SO_Header'
import W_CaseCards from '@/components/wrappers/W_CaseCards/W_CaseCards'
import W_FilterTags from '@/components/wrappers/W_FilterTags/W_FilterTags'

import type { CaseData } from '@/types/case'
import type { GetStaticProps } from 'next'

export const getStaticProps: GetStaticProps = async () => {
  try {
    const cases = await getCases()

    return {
      props: {
        cases,
      },
      revalidate: 60,
    }
  } catch (error) {
    console.error('Error:', error)
    return {
      props: {
        cases: [],
      },
    }
  }
}

export default function CasesPage({ cases }: { cases: CaseData[] }) {
  const [activeFilters, setActiveFilters] = useState<string[]>([])

  const uniqueFilters = Array.from(new Set(cases.map(caseItem => caseItem.filter)))

  const handleFilterClick = (filter: string) => {
    setActiveFilters(prev =>
      prev.includes(filter) ? prev.filter(f => f !== filter) : [...prev, filter],
    )
  }

  return (
    <div>
      <SO_Header />
      <Q_Grid variant='gray' />
      <div>
        <h1>Все кейсы</h1>
        <W_FilterTags
          tags={uniqueFilters}
          activeTags={activeFilters}
          onTagClick={handleFilterClick}
        />
        <W_CaseCards cases={cases} activeFilters={activeFilters} />
      </div>
    </div>
  )
}
