import { A_ArticleHighlightedItem } from '@/components/atoms/A_ArticleHighlightedItem/A_ArticleHighlightedItem'

import styles from './C_ArticleHighlightedItems.module.css'

interface C_ArticleHighlightedItemsProps {
  items: string[]
}

export const C_ArticleHighlightedItems = ({ items }: C_ArticleHighlightedItemsProps) => {
  return (
    <ul className={styles.wrapper}>
      {items.map(item => (
        <A_ArticleHighlightedItem key={item} text={item} />
      ))}
    </ul>
  )
}
