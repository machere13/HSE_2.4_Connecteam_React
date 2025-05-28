import React from 'react'

import A_ShareButton from '@/components/atoms/A_ShareButton/A_ShareButton'

import styles from './C_ShareButtons.module.css'

export default function C_ShareButtons() {
  return (
    <div className={styles.wrapper}>
      <A_ShareButton name='copyLinkIcon' />
      <A_ShareButton name='vkIcon' />
      <A_ShareButton name='telegramIcon' />
    </div>
  )
}
