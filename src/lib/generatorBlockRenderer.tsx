import React from 'react'

import C_GeneratorCardListItems from '@/components/collections/C_GeneratorCardListItems/C_GeneratorCardListItems'
import M_TitleParagraph from '@/components/molecules/M_CaseTitleParagraph/M_TitleParagraph'
import M_PurpleBox from '@/components/molecules/M_PurpleBox/M_PurpleBox'
import W_GeneratorPointedSection from '@/components/wrappers/W_GeneratorPointedSection/W_GeneratorPointedSection'

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
      return <M_TitleParagraph title={block.title} text={block.text} />
    case 'purpleBox':
      return <M_PurpleBox title={block.title} text={block.text} />
    case 'textList':
      return <W_GeneratorPointedSection items={block.items} title={block.title} />
    case 'cardList':
      return <C_GeneratorCardListItems items={block.items} />
    default:
      return null
  }
}
