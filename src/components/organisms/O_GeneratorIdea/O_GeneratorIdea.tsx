import React from 'react'

import GeneratorBlockRenderer from '@/lib/generatorBlockRenderer'

import styles from './O_GeneratorIdea.module.css'

import type { GeneratorIdea } from '@/types/generator'

interface O_GeneratorIdeaProps {
  idea: GeneratorIdea
}

export default function O_GeneratorIdea({ idea }: O_GeneratorIdeaProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        {idea.content.map((block, index) => (
          <GeneratorBlockRenderer key={index} block={block} index={index} />
        ))}
      </div>
    </div>
  )
}
