import React from 'react'

import M_CardListItem from '@/components/molecules/M_CardListItem/M_CardListItem'
import { getCardListVariant } from '@/lib/getCardListVariant'

import styles from './C_CardListItems.module.css'

import type { M_CardListItemProps } from '@/components/molecules/M_CardListItem/M_CardListItem'
import type { CardListVariant } from '@/types/cardList'

export interface C_CardListItemsProps {
  items: Omit<M_CardListItemProps, 'bgColor' | 'rotate'>[]
  variant: CardListVariant
}

export default function C_CardListItems({ items, variant }: C_CardListItemsProps) {
  return (
    <div className={styles.wrapper}>
      {items.map((item, index) => {
        const { bgColor, rotate } = getCardListVariant({
          ...variant,
          itemIndex: index,
          cardListIndex: variant.cardListIndex,
        })

        return <M_CardListItem key={index} {...item} bgColor={bgColor} rotate={rotate} />
      })}
    </div>
  )
}
