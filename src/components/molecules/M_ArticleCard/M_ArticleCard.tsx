import React from 'react'

import cn from 'classnames'
import Link from 'next/link'

import A_ComingSoonTag from '@/components/atoms/A_ComingSoonTag/A_ComingSoonTag'
import Q_ThunderIconTag from '@/components/quarks/Q_ThunderIconTag/Q_ThunderIconTag'

import styles from './M_ArticleCard.module.css'

type CardSize = 'big' | 'standard'
type CardRotation = 'left' | 'right' | 'none'
type CardBackground = 'pink' | 'purple'
type TextColor = 'white' | 'black'

interface M_ArticleCardProps {
  href: string
  title: string
  description: string
  cardDisplay: {
    background: CardBackground | string
    card: CardSize
    rotate: CardRotation
    textColor: TextColor
    hasIcon: boolean
    comingSoon: boolean
  }
}

export default function M_ArticleCard({
  href,
  title,
  description,
  cardDisplay,
}: M_ArticleCardProps) {
  const isImageBackground =
    cardDisplay.background.startsWith('http') || cardDisplay.background.startsWith('/')
  const backgroundStyle = isImageBackground
    ? { backgroundImage: `url(${cardDisplay.background})` }
    : { backgroundColor: `var(--color-main-${cardDisplay.background as CardBackground})` }

  return (
    <Link
      href={href}
      className={cn(
        styles.wrapper,
        styles[cardDisplay.card],
        styles[cardDisplay.rotate],
        isImageBackground && styles.image_background,
      )}
      style={backgroundStyle}
    >
      <div className={styles.content}>
        <div className={styles.additional_info_wrapper}>
          {cardDisplay.hasIcon && <Q_ThunderIconTag />}
          {cardDisplay.comingSoon && <A_ComingSoonTag />}
        </div>
        <div className={cn(styles.text_wrapper, styles[`text_${cardDisplay.textColor}`])}>
          <h5 className={styles.title}>{title}</h5>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
    </Link>
  )
}
