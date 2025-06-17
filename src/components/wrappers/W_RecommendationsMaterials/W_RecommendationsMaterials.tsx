import React from 'react'

import C_RecommendationsMaterials from '@/components/collections/C_RecommendationsMaterials/C_RecommendationsMaterials'

import styles from './W_RecommendationsMaterials.module.css'

interface W_RecommendationsMaterialsProps {
  type?: 'articles' | 'cases' | 'mixed'
  count?: number
}

export default function W_RecommendationsMaterials({
  type = 'mixed',
  count = 3,
}: W_RecommendationsMaterialsProps) {
  return (
    <section className={styles.wrapper}>
      <h3>Вам могут понравиться</h3>
      <C_RecommendationsMaterials type={type} count={count} />
    </section>
  )
}
