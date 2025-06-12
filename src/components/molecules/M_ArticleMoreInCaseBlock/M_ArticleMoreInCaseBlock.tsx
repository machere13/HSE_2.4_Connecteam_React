import React from 'react'

import A_DirectionButton from '@/components/atoms/A_DirectionButton/A_DirectionButton'

import styles from './M_ArticleMoreInCaseBlock.module.css'

interface M_ArticleMoreInCaseBlockProps {
  link: string
}

export default function M_ArticleMoreInCaseBlock({ link }: M_ArticleMoreInCaseBlockProps) {
  return (
    <div className={styles.wrapper}>
      <h3>Больше по&nbsp;теме в&nbsp;отдельном кейсе</h3>
      <A_DirectionButton href={link} variant='purple' font='s'>
        Перейти в кейс
      </A_DirectionButton>
    </div>
  )
}
