import React from 'react'

import A_FilterTag from '@/components/atoms/A_FilterTag/A_FilterTag'

import styles from './C_FilterTags.module.css'

interface C_FilterTagsProps {
  tags: string[]
  activeTags: string[]
  onTagClick: (tag: string) => void
}

export default function C_FilterTags({ tags, activeTags, onTagClick }: C_FilterTagsProps) {
  return (
    <div className={styles.wrapper}>
      {tags.map(tag => (
        <A_FilterTag
          key={tag}
          text={tag}
          isActive={activeTags.includes(tag)}
          onClick={() => onTagClick(tag)}
        />
      ))}
    </div>
  )
}
