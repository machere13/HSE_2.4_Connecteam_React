/* eslint-disable @next/next/no-img-element */
import React from 'react'

import cn from 'classnames'

import styles from './M_StyleguideImageBlock.module.css'

interface ImageItem {
  url: string
  alt: string
  objectFit?: 'contain' | 'cover'
}

interface M_StyleguideImageBlockProps {
  images: ImageItem[]
  description?: string
  height?: number
}

export default function M_StyleguideImageBlock({
  images,
  description,
  height = 300,
}: M_StyleguideImageBlockProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.images_container}>
        {images.map((image, index) => (
          <div key={index} className={styles.image_wrapper} style={{ height: `${height}px` }}>
            <img
              src={image.url}
              alt={image.alt}
              className={cn(styles.image, styles[image.objectFit || 'cover'])}
            />
          </div>
        ))}
      </div>
      {description && (
        <span className={cn('text_captions_m', styles.description)}>{description}</span>
      )}
    </div>
  )
}
