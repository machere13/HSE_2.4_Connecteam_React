import cn from 'classnames'

import C_CardListItems from '@/components/collections/C_CardListItems/C_CardListItems'

import styles from './W_CardList.module.css'

import type { M_CardListItemProps } from '@/components/molecules/M_CardListItem/M_CardListItem'
import type { CardListVariant } from '@/types/cardList'

interface W_CardListProps {
  items: M_CardListItemProps[]
  variant: CardListVariant
  title: string
  titleType: 'small' | 'big'
}

export const W_CardList = ({ items, title, titleType, variant }: W_CardListProps) => {
  return (
    <div className={cn(styles.wrapper, styles[titleType])}>
      {titleType === 'small' ? (
        <h3 className={styles.title}>{title}</h3>
      ) : (
        <h2 className={styles.title}>{title}</h2>
      )}
      <C_CardListItems items={items} variant={variant} />
    </div>
  )
}
