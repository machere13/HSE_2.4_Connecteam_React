import React from 'react'

import M_TestCard from '@/components/molecules/M_TestCard/M_TestCard'
import { ROUTES } from '@/routes'

import styles from './C_TestCards.module.css'

import type { TestData } from '@/types/test'

interface C_TestCardsProps {
  tests: TestData[]
}

export default function C_TestCards({ tests }: C_TestCardsProps) {
  return (
    <div className={styles.wrapper}>
      {tests.map(test => (
        <M_TestCard
          key={test.id}
          href={ROUTES.INTERACTIVES.TESTS.bySlug(test.slug)}
          title={test.title}
          description={test.description}
          cardDisplay={test.cardDisplay}
        />
      ))}
    </div>
  )
}
