import cn from 'classnames'
import Link from 'next/link'

import styles from './M_TestCard.module.css'

type CardBackground = 'pink' | 'purple'
type TextColor = 'white' | 'black'

interface M_TestCardProps {
  href: string
  title: string
  description: string
  cardDisplay: {
    background: CardBackground | string
    textColor: TextColor
  }
}

export default function M_TestCard({ href, title, description, cardDisplay }: M_TestCardProps) {
  const isImageBackground =
    cardDisplay.background.startsWith('http') || cardDisplay.background.startsWith('/')
  const backgroundStyle = isImageBackground
    ? { backgroundImage: `url(${cardDisplay.background})` }
    : { backgroundColor: `var(--color-main-${cardDisplay.background as CardBackground})` }

  return (
    <Link
      href={href}
      className={cn(styles.wrapper, isImageBackground && styles.image_background)}
      style={backgroundStyle}
    >
      <div className={cn(styles.text_wrapper, styles[`text_${cardDisplay.textColor}`])}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </Link>
  )
}
