import React from 'react'

import M_CaseCard from '@/components/molecules/M_CaseCard/M_CaseCard'

import styles from './C_CaseCards.module.css'

import type { CaseData } from '@/types/case'

interface C_CaseCardsProps {
  cases: CaseData[]
}

export default function C_CaseCards({ cases }: C_CaseCardsProps) {
  return (
    <div className={styles.wrapper}>
      {cases.map(caseItem => (
        <M_CaseCard
          key={caseItem.id}
          href={`/cases/${caseItem.slug}`}
          title={caseItem.title}
          cardDisplay={caseItem.cardDisplay}
        />
      ))}
    </div>
  )
}
