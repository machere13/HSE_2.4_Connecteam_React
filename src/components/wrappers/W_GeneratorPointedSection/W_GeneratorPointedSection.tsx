import React from 'react'

import C_GeneratorPointedItems from '@/components/collections/C_GeneratorPointedItems/C_GeneratorPointedItems'

import styles from './W_GeneratorPointedSection.module.css'

interface W_GeneratorPointedSectionProps {
  items: string[]
  title: string
}

export default function W_GeneratorPointedSection({
  items,
  title,
}: W_GeneratorPointedSectionProps) {
  return (
    <section className={styles.wrapper}>
      <h5>{title}</h5>
      <ul>
        <C_GeneratorPointedItems items={items} />
      </ul>
    </section>
  )
}
