import React from 'react'

import cn from 'classnames'

// eslint-disable-next-line @next/next/no-img-element
import styles from './M_FAQCard.module.css'

interface M_FAQCardProps {
  question: string
  altQuestion: string
  answer: string
  backgroundColor: 'pink' | 'purple' | 'white'
  width: '50' | '33'
}

export default function M_FAQCard({
  question,
  altQuestion,
  answer,
  backgroundColor,
  width,
}: M_FAQCardProps) {
  return (
    <div className={cn(styles.card, styles[backgroundColor], styles[`w_${width}`])}>
      <div className={styles.question}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={question}
          alt={altQuestion}
          className={styles.image}
          style={{ maxWidth: '100%', height: 'auto', display: 'block' }}
        />
      </div>
      <p>{answer}</p>
    </div>
  )
}
