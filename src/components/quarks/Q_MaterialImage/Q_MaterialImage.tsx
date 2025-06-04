import React from 'react'

import Image from 'next/image'

import styles from './Q_MaterialImage.module.css'

interface Q_MaterialImageProps {
  src: string
  alt: string
}

export default function Q_MaterialImage({ src, alt }: Q_MaterialImageProps) {
  return (
    <div className={styles.wrapper}>
      <Image src={src} alt={alt} fill />
    </div>
  )
}
