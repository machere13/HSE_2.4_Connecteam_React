import React from 'react'

import styles from './A_MaterialHeading.module.css'

interface A_MaterialHeadingProps {
  text: string
  level: 2 | 4
}

export default function A_MaterialHeading({ text, level }: A_MaterialHeadingProps) {
  const TitleTag = level === 2 ? 'h2' : 'h4'
  return <TitleTag className={styles.wrapper}>{text}</TitleTag>
}
