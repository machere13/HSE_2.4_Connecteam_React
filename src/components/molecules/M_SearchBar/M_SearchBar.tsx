import React, { useRef, useState, useEffect } from 'react'

import cn from 'classnames'

import Q_Icon from '@/components/quarks/Q_Icon/Q_Icon'

import styles from './M_SearchBar.module.css'

interface M_SearchBarProps {
  onSearchChange: (query: string) => void
  onClear: () => void
  initialValue?: string
  variant?: 'default' | 'animated'
}

const animatedPlaceholders = [
  'Поиск статей...',
  'Поиск кейсов...',
  'Поиск материалов...',
  'Поиск тестов...',
]

export default function M_SearchBar({
  onSearchChange,
  onClear,
  initialValue = '',
  variant = 'default',
}: M_SearchBarProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [showClearIcon, setShowClearIcon] = useState(false)
  const [currentPlaceholderIndex, setCurrentPlaceholderIndex] = useState(0)
  const [currentPlaceholder, setCurrentPlaceholder] = useState(animatedPlaceholders[0])

  useEffect(() => {
    if (variant === 'animated') {
      const interval = setInterval(() => {
        setCurrentPlaceholderIndex(prev => (prev + 1) % animatedPlaceholders.length)
      }, 3000)

      return () => clearInterval(interval)
    }
    return undefined
  }, [variant])

  useEffect(() => {
    if (variant === 'animated') {
      const placeholder = animatedPlaceholders[currentPlaceholderIndex]
      setCurrentPlaceholder(placeholder)
    }
  }, [currentPlaceholderIndex, variant])

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
    <div className={cn(styles.wrapper, styles[variant])}>
      <input
        type='text'
        className='text_captions_l'
        ref={inputRef}
        onChange={handleInputChange}
        defaultValue={initialValue}
        placeholder={variant === 'animated' ? currentPlaceholder : ''}
      />
      {showClearIcon && (
        <button onClick={handleClearInput} className={styles.button} aria-label='Очистить поиск'>
          <Q_Icon name='closeIcon' width='12' height='12' viewBox='0 0 12 12' />
        </button>
      )}
    </div>
  )
}
