import React from 'react'

import type { GeneratorIdea } from '@/types/generator'

import styles from '@/components/organisms/O_GeneratorIdea/O_GeneratorIdea.module.css'

type GeneratorBlock = GeneratorIdea['content'][number]

interface GeneratorBlockRendererProps {
  block: GeneratorBlock
  index: number
}

export default function GeneratorBlockRenderer({
  block,
  index: _index,
}: GeneratorBlockRendererProps) {
  switch (block.type) {
    case 'heading-3':
      return <h3 className={styles.heading}>{block.text}</h3>
    case 'titleParagraph':
      return <p className={styles.titleParagraph}>{block.text}</p>
    case 'purpleBox':
      return (
        <div className={styles.purpleBox}>
          <p>{block.text}</p>
        </div>
      )
    case 'textList':
      return (
        <ul className={styles.textList}>
          {block.items.map((item, itemIndex) => (
            <li key={itemIndex}>{item}</li>
          ))}
        </ul>
      )
    case 'cardList':
      return (
        <div className={styles.cardList}>
          {block.items.map((item, itemIndex) => (
            <div key={itemIndex} className={styles.card}>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      )
    default:
      return null
  }
}
