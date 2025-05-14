import React from 'react'

import Link from 'next/link'

import Q_Icon from '@/components/quarks/Q_Icon'

import styles from './A_FooterIcon.module.css'

type IconName = 'telegramIcon' | 'youtubeIcon' | 'vkIcon'

interface A_FooterIconProps {
  href: string
  iconName: IconName
}

export default function A_FooterIcon({ href, iconName }: A_FooterIconProps) {
  return (
    <Link href={href} target='_blank'>
      <div className={styles.wrapper}>
        <Q_Icon name={iconName} width='36' height='36' fill='#FFF' />
      </div>
    </Link>
  )
}
