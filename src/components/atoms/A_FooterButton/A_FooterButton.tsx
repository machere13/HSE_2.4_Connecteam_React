import React from 'react'

import Link from 'next/link'

import Q_Icon from '@/components/quarks/Q_Icon/Q_Icon'

import styles from './A_FooterButton.module.css'

type IconName = 'telegramIcon' | 'youtubeIcon' | 'vkIcon'

export interface A_FooterButtonProps {
  to: string
  iconName: IconName
}

export default function A_FooterButton({ to, iconName }: A_FooterButtonProps) {
  return (
    <Link href={to} target='_blank'>
      <div className={styles.wrapper}>
        <Q_Icon name={iconName} viewBox='0 0 36 36' width='36' height='36' fill='#FFF' />
      </div>
    </Link>
  )
}
