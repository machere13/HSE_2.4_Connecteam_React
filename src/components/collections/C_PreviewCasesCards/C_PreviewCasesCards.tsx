import React, { useEffect, useState } from 'react'

import cn from 'classnames'
import Link from 'next/link'

import { getCases } from '@/api/getCases'
import A_ComingSoonTag from '@/components/atoms/A_ComingSoonTag/A_ComingSoonTag'
import Q_ThunderIconTag from '@/components/quarks/Q_ThunderIconTag/Q_ThunderIconTag'
import { ROUTES } from '@/routes'

import styles from './C_PreviewCasesCards.module.css'

import type { CaseData } from '@/types/case'

export default function C_PreviewCasesCards() {
  const [cases, setCases] = useState<CaseData[]>([])

  useEffect(() => {
    const fetchCases = async () => {
      const casesData = await getCases()
      setCases(casesData)
    }

    fetchCases()
  }, [])

  const getRandomCases = (count = 2): CaseData[] => {
    const shuffled = [...cases].sort(() => 0.5 - Math.random())
    return shuffled.slice(0, count)
  }

  const previewCases = getRandomCases(2)

  return (
    <div className={styles.wrapper}>
      {previewCases.map(caseItem => {
        const isImageBackground =
          caseItem.cardDisplay.background.startsWith('http') ||
          caseItem.cardDisplay.background.startsWith('/')
        const backgroundStyle = isImageBackground
          ? { backgroundImage: `url(${caseItem.cardDisplay.background})`, color: '#000' }
          : {
              backgroundColor: `var(--color-main-${caseItem.cardDisplay.background})`,
              color: '#fff',
            }

        return (
          <Link
            key={caseItem.id}
            href={ROUTES.CASES.bySlug(caseItem.slug)}
            className={cn(styles.case_card, styles[caseItem.cardDisplay.rotate])}
            style={backgroundStyle}
          >
            <div className={styles.card_content}>
              <div className={styles.card_additional_info}>
                {caseItem.cardDisplay.hasIcon && <Q_ThunderIconTag />}
                {caseItem.cardDisplay.comingSoon && <A_ComingSoonTag />}
              </div>
              <div className={styles.card_text}>
                <h5>{caseItem.title}</h5>
              </div>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
