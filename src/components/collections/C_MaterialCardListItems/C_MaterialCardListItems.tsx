import React from 'react'

import M_MaterialCardListItem from '@/components/molecules/M_MaterialCardListItem/M_MaterialCardListItem'
import { getCardListVariant } from '@/lib/getCardListVariant'

import styles from './C_MaterialCardListItems.module.css'

import type { M_MaterialCardListItemProps } from '@/components/molecules/M_MaterialCardListItem/M_MaterialCardListItem'
import type { CardListVariant } from '@/types/cardList'

export interface C_MaterialCardListItemsProps {
  items: Omit<M_MaterialCardListItemProps, 'bgColor' | 'rotate'>[]
  variant: CardListVariant
}

export default function C_MaterialCardListItems({ items, variant }: C_MaterialCardListItemsProps) {
  return (
    <div className={styles.wrapper}>
      {items.map((item, index) => {
        const { bgColor, rotate } = getCardListVariant({
          ...variant,
          itemIndex: index,
          cardListIndex: variant.cardListIndex,
        })

        return <M_MaterialCardListItem key={index} {...item} bgColor={bgColor} rotate={rotate} />
      })}
    </div>
  )
}
