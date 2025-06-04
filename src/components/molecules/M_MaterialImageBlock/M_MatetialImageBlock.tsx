import React from 'react'

import Q_MaterialImage from '@/components/quarks/Q_MaterialImage/Q_MaterialImage'

import styles from './M_MaterialImageBlock.module.css'

interface M_MatetialImageBlockProps {
  url: string
  alt: string
  description?: string
}

export default function M_MatetialImageBlock({ url, alt, description }: M_MatetialImageBlockProps) {
  return (
    <div className={styles.wrapper}>
      <Q_MaterialImage src={url} alt={alt} />
      <span className='text_captions_m'>{description}</span>
    </div>
  )
}
