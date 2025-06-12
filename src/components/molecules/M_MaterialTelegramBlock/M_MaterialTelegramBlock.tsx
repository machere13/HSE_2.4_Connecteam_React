import React from 'react'

import A_DirectionButton from '@/components/atoms/A_DirectionButton/A_DirectionButton'
import Q_Icon from '@/components/quarks/Q_Icon/Q_Icon'

import styles from './M_MaterialTelegramBlock.module.css'

interface M_MaterialTelegramBlockProps {
  link: string
}

export default function M_MaterialTelegramBlock({ link }: M_MaterialTelegramBlockProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.text_wrapper}>
        <div className={styles.icon_wrapper}>
          <Q_Icon name='telegramIcon' fill='#FFF' width='36' height='36' />
        </div>
        <h5>Ещё больше полезной инфы и&nbsp;приколов в&nbsp;нашем тг&nbsp;канале</h5>
      </div>
      <A_DirectionButton href={link} variant='purple' font='s' isExternal>
        Перейти в канал
      </A_DirectionButton>
    </div>
  )
}
