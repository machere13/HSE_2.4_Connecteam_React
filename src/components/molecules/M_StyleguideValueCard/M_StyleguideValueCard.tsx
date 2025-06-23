import React from 'react'

import cn from 'classnames'

import Q_ThunderIconTag from '@/components/quarks/Q_ThunderIconTag/Q_ThunderIconTag'

import styles from './M_StyleguideValueCard.module.css'

type CardRotation = 'left' | 'right' | 'none'
type CardBackground = 'pink' | 'purple' | 'main-white'
type TextColor = 'white' | 'black'

interface M_StyleguideValueCardProps {
  title: string
  description: string
  cardDisplay: {
    background: CardBackground | string
    rotate: CardRotation
    textColor: TextColor
    hasIcon: boolean
  }
}

export default function M_StyleguideValueCard({
  title,
  description,
  cardDisplay,
}: M_StyleguideValueCardProps) {
  const isImageBackground =
    cardDisplay.background.startsWith('http') || cardDisplay.background.startsWith('/')
  const backgroundStyle = isImageBackground
    ? { backgroundImage: `url(${cardDisplay.background})` }
    : { backgroundColor: `var(--color-main-${cardDisplay.background as CardBackground})` }

  return (
    <div
      className={cn(
        styles.wrapper,
        styles[cardDisplay.rotate],
        isImageBackground && styles.image_background,
      )}
      style={backgroundStyle}
    >
      <div className={styles.content}>
        <div className={styles.additional_info_wrapper}>
          {cardDisplay.hasIcon && <Q_ThunderIconTag />}
        </div>
        <div className={cn(styles.text_wrapper, styles[`text_${cardDisplay.textColor}`])}>
          <h5 className='text_body_1'>{title}</h5>
          <p className='text_captions_s'>{description}</p>
        </div>
      </div>
    </div>
  )
}
