import React from 'react'

import styles from './A_PopularTag.module.css'

interface A_PopularTagProps {
  label: string
}

export default function A_PopularTag({ label }: A_PopularTagProps) {
  return (
    <div className={styles.wrapper}>
      <span className='text_button_s'>{label}</span>
    </div>
  )
}
