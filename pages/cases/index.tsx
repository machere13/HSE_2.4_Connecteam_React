import { useState } from 'react'

import { getCases } from '@/api/getCases'
import O_Footer from '@/components/organisms/O_Footer/O_Footer'
import Q_Grid from '@/components/quarks/Q_Grid/Q_Grid'
import SO_Header from '@/components/super-organisms/SO_Header/SO_Header'
import T_MaterialsPageContent from '@/components/templates/T_MaterialsPageContent/T_MaterialsPageContent'
import W_CaseCards from '@/components/wrappers/W_CaseCards/W_CaseCards'

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
    <div className='page'>
      <div className='header_content_gap'>
        <SO_Header />
        <T_MaterialsPageContent
          title='Кейсы'
          filters={uniqueFilters}
          activeFilters={activeFilters}
          onFilterClick={handleFilterClick}
        >
          <W_CaseCards cases={cases} activeFilters={activeFilters} />
        </T_MaterialsPageContent>
      </div>
      <Q_Grid variant='gray' />
      <O_Footer />
    </div>
  )
}
