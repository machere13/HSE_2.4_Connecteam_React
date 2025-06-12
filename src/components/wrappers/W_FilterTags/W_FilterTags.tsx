import React from 'react'

import C_FilterTags from '@/components/collections/C_FilterTags/C_FilterTags'

import styles from './W_FilterTags.module.css'

interface W_FilterTagsProps {
  tags: string[]
  activeTags: string[]
  onTagClick: (tag: string) => void
}

const tagTranslations: Record<string, string> = {
  conflict: 'Личный конфликт',
  communication: 'Коммуникация',
  tools: 'Инструменты',
  organization: 'Организация',
  experience: 'Опыт команды',
  management: 'Руководство командой',
  history: 'История компании',
  lifehacks: 'Лайфхаки от команды',
}

export default function W_FilterTags({ tags, activeTags, onTagClick }: W_FilterTagsProps) {
  const translatedTags = tags.map(tag => ({
    original: tag,
    display: tagTranslations[tag] || tag,
  }))

  return (
    <div className={styles.wrapper}>
      <h2 className='text_body_1'>Поиск по тегам</h2>
      <C_FilterTags
        tags={translatedTags.map(tag => tag.display)}
        activeTags={activeTags.map(tag => tagTranslations[tag] || tag)}
        onTagClick={displayTag => {
          const originalTag = translatedTags.find(t => t.display === displayTag)?.original
          if (originalTag) {
            onTagClick(originalTag)
          }
        }}
      />
    </div>
  )
}
