import cn from 'classnames'

import styles from './A_ArticleHighlightedItem.module.css'

interface A_ArticleHighlightedItemProps {
  text: string
}

export const A_ArticleHighlightedItem = ({ text }: A_ArticleHighlightedItemProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.line}></div>
      <span className={cn(styles.text, 'text_body_2')}>{text}</span>
    </div>
  )
}
