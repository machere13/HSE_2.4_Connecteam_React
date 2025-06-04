import React from 'react'

import styles from './Q_MaterialVideo.module.css'

interface Q_MaterialVideoProps {
  video: string
}

export default function Q_MaterialVideo({ video }: Q_MaterialVideoProps) {
  return (
    <div className={styles.wrapper}>
      <video src={video} controls>
        <track kind='captions' srcLang='ru' label='Русские субтитры' default />
      </video>
    </div>
  )
}
