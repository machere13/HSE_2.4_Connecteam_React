import React, { useRef, useState } from 'react'

import Q_Icon from '@/components/quarks/Q_Icon/Q_Icon'

import styles from './M_SearchBar.module.css'

interface M_SearchBarProps {
  onSearchChange: (query: string) => void
  onClear: () => void
  initialValue?: string
}

export default function M_SearchBar({
  onSearchChange,
  onClear,
  initialValue = '',
}: M_SearchBarProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [showClearIcon, setShowClearIcon] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setShowClearIcon(value.length > 0)
    onSearchChange(value)
  }

  const handleClearInput = () => {
    if (inputRef.current) {
      inputRef.current.value = ''
      inputRef.current.focus()
    }
    setShowClearIcon(false)
    onClear()
  }

  return (
    <div className={styles.wrapper}>
      <input
        type='text'
        className='text_captions_l'
        ref={inputRef}
        onChange={handleInputChange}
        defaultValue={initialValue}
      />
      {showClearIcon && (
        <button onClick={handleClearInput} className={styles.button} aria-label='Очистить поиск'>
          <Q_Icon name='closeIcon' width='12' height='12' viewBox='0 0 12 12' />
        </button>
      )}
    </div>
  )
}
