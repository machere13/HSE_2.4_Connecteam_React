import cn from 'classnames'

import { C_ArticleHighlightedItems } from '@/components/collections/C_ArticleHighlightedItems/C_ArticleHighlightedItems'

import styles from './W_ArticleHighlightedSection.module.css'

interface W_ArticleHighlightedSectionProps {
  items: string[]
  title: string
  titleType: 'small' | 'big'
}

export const W_ArticleHighlightedSection = ({
  items,
  title,
  titleType,
}: W_ArticleHighlightedSectionProps) => {
  return (
    <section className={cn(styles.wrapper, styles[titleType])}>
      <article>
        {titleType === 'small' ? (
          <h5 className={styles.title}>{title}</h5>
        ) : (
          <h2 className={styles.title}>{title}</h2>
        )}
        <ul>
          <C_ArticleHighlightedItems items={items} />
        </ul>
      </article>
    </section>
  )
}
