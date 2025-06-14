import React from 'react'

import styles from './O_GeneratorIdea.module.css'

import type { GeneratorIdea } from '@/types/generator'

interface O_GeneratorIdeaProps {
  idea: GeneratorIdea
}

export default function O_GeneratorIdea({ idea }: O_GeneratorIdeaProps) {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>{idea.title}</h3>
      <div className={styles.content}>
        {idea.content.map((block, index) => {
          switch (block.type) {
            case 'heading-3':
              return <h3 key={index}>{block.text}</h3>
            case 'titleParagraph':
              return (
                <div key={index} className={styles.paragraph}>
                  <h4>{block.title}</h4>
                  <p>{block.text}</p>
                </div>
              )
            case 'purpleBox':
              return (
                <div key={index} className={styles.purpleBox}>
                  <h4>{block.title}</h4>
                  <p>{block.text}</p>
                </div>
              )
            case 'textList':
              return (
                <div key={index} className={styles.list}>
                  <h4>{block.title}</h4>
                  <ul>
                    {block.items.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                </div>
              )
            case 'cardList':
              return (
                <div key={index} className={styles.cardList}>
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
        })}
      </div>
    </div>
  )
}
