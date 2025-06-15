import React from 'react'

import M_GeneratorCardListItem from '@/components/molecules/M_GeneratorCardListItem/M_GeneratorCardListItem'
import { getGeneratorCardVariant } from '@/lib/getGeneratorCardVariant'

import styles from './C_GeneratorCardListItems.module.css'

import type { M_GeneratorCardListItemProps } from '@/components/molecules/M_GeneratorCardListItem/M_GeneratorCardListItem'

export interface C_GeneratorCardListItemsProps {
  items: Omit<M_GeneratorCardListItemProps, 'bgColor' | 'rotate'>[]
}

export default function C_GeneratorCardListItems({ items }: C_GeneratorCardListItemsProps) {
  return (
    <div className={styles.wrapper}>
      {items.map((item, index) => {
        const { bgColor, rotate } = getGeneratorCardVariant({ itemIndex: index })

        return <M_GeneratorCardListItem key={index} {...item} bgColor={bgColor} rotate={rotate} />
      })}
    </div>
  )
}
