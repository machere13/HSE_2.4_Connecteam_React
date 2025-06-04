import React from 'react'

import Q_MaterialVideo from '@/components/quarks/Q_MaterialVideo/Q_MaterialVideo'

import styles from './M_MaterialVideoBlock.module.css'

interface M_MaterialVideoBlockProps {
  title: string
  video: string
}

export default function M_MaterialVideoBlock({ title, video }: M_MaterialVideoBlockProps) {
  return (
    <div className={styles.wrapper}>
      <h5>{title}</h5>
      <Q_MaterialVideo video={video} />
    </div>
  )
}
