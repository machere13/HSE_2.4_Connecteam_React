import React from 'react'

import Q_Icon from '@/components/quarks/Q_Icon/Q_Icon'

import styles from './M_ArticleTelegramBlock.module.css'

interface M_ArticleTelegramBlockProps {
  link: string
}

export default function M_ArticleTelegramBlock({ link }: M_ArticleTelegramBlockProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.text_wrapper}>
        <div className={styles.icon_wrapper}>
          <Q_Icon name='telegramIcon' fill='#FFF' width='36' height='36' />
        </div>
        <h5>Ещё больше полезной инфы и&nbsp;приколов в&nbsp;нашем тг&nbsp;канале</h5>
      </div>
      <a href={link} target='_blank' rel='noreferrer'>
        www
      </a>
    </div>
  )
}
