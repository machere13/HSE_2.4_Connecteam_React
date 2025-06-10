import { A_MaterialHighlightedItem } from '@/components/atoms/A_MaterialHighlightedItem/A_MaterialHighlightedItem'

import styles from './C_MaterialHighlightedItems.module.css'

interface C_MaterialHighlightedItemsProps {
  items: string[]
}

export const C_MaterialHighlightedItems = ({ items }: C_MaterialHighlightedItemsProps) => {
  return (
    <ul className={styles.wrapper}>
      {items.map(item => (
        <A_MaterialHighlightedItem key={item} text={item} />
      ))}
    </ul>
  )
}
