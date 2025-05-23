import React from 'react'

import A_FooterIcon from '@/components/atoms/A_FooterIcon/A_FooterIcon'

import styles from './C_FooterIcons.module.css'

export default function C_FooterIcons() {
  return (
    <div className={styles.wrapper}>
      <A_FooterIcon to='https://t.me/connecteam' iconName='telegramIcon' />
      <A_FooterIcon to='https://vk.com/club228014641' iconName='vkIcon' />
      <A_FooterIcon to='https://t.me/connecteam' iconName='youtubeIcon' />
    </div>
  )
}
