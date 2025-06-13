import React from 'react'

import VideoPlayer from '@/lib/videoPlayer/videoPlayer'

import styles from './Q_MaterialVideo.module.css'

interface Q_MaterialVideoProps {
  video: string
}

export default function Q_MaterialVideo({ video }: Q_MaterialVideoProps) {
  return (
    <div className={styles.wrapper}>
      <VideoPlayer video={video} />
    </div>
  )
}
