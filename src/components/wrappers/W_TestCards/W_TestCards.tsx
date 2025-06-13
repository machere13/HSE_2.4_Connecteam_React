import { useState } from 'react'

import A_HandleButton from '@/components/atoms/A_HandleButton/A_HandleButton'
import C_TestCards from '@/components/collections/C_TestCards/C_TestCards'

import styles from './W_TestCards.module.css'

import type { TestData } from '@/types/test'

interface W_TestCardsProps {
  tests: TestData[]
}

export default function W_TestCards({ tests }: W_TestCardsProps) {
  const [visibleCount, setVisibleCount] = useState(4)
  const ITEMS_PER_PAGE = 4

  const visibleTests = tests.slice(0, visibleCount)
  const hasMore = visibleCount < tests.length

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + ITEMS_PER_PAGE)
  }

  return (
    <div className={styles.wrapper}>
      <C_TestCards tests={visibleTests} />
      {hasMore && (
        <A_HandleButton variant='orange' onClick={handleLoadMore}>
          Смотреть еще
        </A_HandleButton>
      )}
    </div>
  )
}
