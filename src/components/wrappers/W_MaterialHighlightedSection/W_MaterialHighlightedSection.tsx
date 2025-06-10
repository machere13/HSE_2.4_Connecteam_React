import React from 'react'

import cn from 'classnames'

import C_MaterialHighlightedItems from '@/components/collections/C_MaterialHighlightedItems/C_MaterialHighlightedItems'

import styles from './W_MaterialHighlightedSection.module.css'

interface W_MaterialHighlightedSectionProps {
  items: string[]
  title: string
  titleType: 'small' | 'big'
}

export default function W_MaterialHighlightedSection({
  items,
  title,
  titleType,
}: W_MaterialHighlightedSectionProps) {
  return (
    <section className={cn(styles.wrapper, styles[titleType])}>
      <article>
        {titleType === 'small' ? (
          <h5 className={styles.title}>{title}</h5>
        ) : (
          <h2 className={styles.title}>{title}</h2>
        )}
        <ul>
          <C_MaterialHighlightedItems items={items} />
        </ul>
      </article>
    </section>
  )
}
