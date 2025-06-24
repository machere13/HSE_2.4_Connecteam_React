import React from 'react'

import A_PopularTag from '@/components/atoms/A_PopularTag/A_PopularTag'

import styles from './W_PopularTags.module.css'

export default function W_PopularTags() {
  return (
    <div className={styles.wrapper}>
      <span className='text_captions_l'>Популярные запросы</span>
      <A_PopularTag label='Личный конфликт' />
      <A_PopularTag label='Дизайн-код' />
      <A_PopularTag label='Экологичная агрессия' />
      <A_PopularTag label='Ответственность' />
    </div>
  )
}
