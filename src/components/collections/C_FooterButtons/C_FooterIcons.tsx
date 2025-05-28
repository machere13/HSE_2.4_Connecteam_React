import React from 'react'

import A_FooterButton from '@/components/atoms/A_FooterButton/A_FooterButton'

import styles from './C_FooterButtons.module.css'

export default function C_FooterButtons() {
  return (
    <div className={styles.wrapper}>
      <A_FooterButton to='https://t.me/connecteam' iconName='telegramIcon' />
      <A_FooterButton to='https://vk.com/club228014641' iconName='vkIcon' />
      <A_FooterButton to='https://t.me/connecteam' iconName='youtubeIcon' />
    </div>
  )
}
