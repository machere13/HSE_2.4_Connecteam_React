import { useEffect, useState } from 'react'

import A_HandleButton from '@/components/atoms/A_HandleButton/A_HandleButton'
import C_CaseCards from '@/components/collections/C_CaseCards/C_CaseCards'

import styles from './W_CaseCards.module.css'

import type { CaseData } from '@/types/case'

interface W_CaseCardsProps {
  cases: CaseData[]
  activeFilters: string[]
}

export default function W_CaseCards({ cases, activeFilters }: W_CaseCardsProps) {
  const [visibleCount, setVisibleCount] = useState(4)
  const ITEMS_PER_PAGE = 4

  const filteredCases =
    activeFilters.length > 0
      ? cases.filter(caseItem => activeFilters.includes(caseItem.filter))
      : cases

  const visibleCases = filteredCases.slice(0, visibleCount)
  const hasMore = visibleCount < filteredCases.length

  useEffect(() => {
    setVisibleCount(4)
  }, [activeFilters])

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + ITEMS_PER_PAGE)
  }

  return (
    <div className={styles.wrapper}>
      <C_CaseCards cases={visibleCases} />
      {hasMore && (
        <A_HandleButton variant='orange' onClick={handleLoadMore}>
          Смотреть еще
        </A_HandleButton>
      )}
    </div>
  )
}
