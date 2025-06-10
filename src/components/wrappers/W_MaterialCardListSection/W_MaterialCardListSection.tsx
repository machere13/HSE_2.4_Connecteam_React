import React from 'react'

import cn from 'classnames'

import C_CardListItems from '@/components/collections/C_MaterialCardListItems/C_MaterialCardListItems'

import styles from './W_MaterialCardListSection.module.css'

import type { M_MaterialCardListItemProps } from '@/components/molecules/M_MaterialCardListItem/M_MaterialCardListItem'
import type { CardListVariant } from '@/types/cardList'

interface W_MaterialCardListSectionProps {
  items: M_MaterialCardListItemProps[]
  variant: CardListVariant
  title: string
  titleType: 'small' | 'big'
}

export default function W_MaterialCardListSection({
  items,
  title,
  titleType,
  variant,
}: W_MaterialCardListSectionProps) {
  return (
    <section className={cn(styles.wrapper, styles[titleType])}>
      {titleType === 'small' ? (
        <h3 className={styles.title}>{title}</h3>
      ) : (
        <h2 className={styles.title}>{title}</h2>
      )}
      <C_CardListItems items={items} variant={variant} />
    </section>
  )
}
