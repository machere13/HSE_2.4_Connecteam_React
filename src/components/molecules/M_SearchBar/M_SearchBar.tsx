import React, { useRef } from 'react'

import Q_Icon from '@/components/quarks/Q_Icon'

import styles from './M_SearchBar.module.css'

export default function M_SearchBar() {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleClearInput = () => {
    if (inputRef.current) {
      inputRef.current.value = ''
      inputRef.current.focus()
    }
  }

  return (
    <div className={styles.wrapper}>
      <input type='text' className='text_captions_l' ref={inputRef} />
      <Q_Icon name='closeIcon' width='12' height='12' onClick={handleClearInput} />
    </div>
  )
}
