import React, { useRef, useState, useEffect } from 'react'

import cn from 'classnames'

import { getSearchResults } from '@/api/getSearchResults'
import Q_Icon from '@/components/quarks/Q_Icon/Q_Icon'

import styles from './M_SearchBar.module.css'

interface M_SearchBarProps {
  onSearchChange: (query: string) => void
  onClear: () => void
  initialValue?: string
  variant?: 'default' | 'animated'
}

export default function M_SearchBar({
  onSearchChange,
  onClear,
  initialValue = '',
  variant = 'default',
}: M_SearchBarProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [showClearIcon, setShowClearIcon] = useState(false)
  const [searchTitles, setSearchTitles] = useState<string[]>([])
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [showCursor, setShowCursor] = useState(true)
  const [isFocused, setIsFocused] = useState(false)

  useEffect(() => {
    if (variant === 'animated') {
      const loadSearchData = async () => {
        try {
          const results = await getSearchResults('')
          const titles = results.map(item => item.title)
          setSearchTitles(titles)
        } catch (error) {
          console.error('Ошибка загрузки данных для placeholder:', error)
          setSearchTitles([
            'Геймификация для улучшения командного взаимодействия',
            'Дружба с коллегой',
            'Общение с командой при горящих дедлайнах',
          ])
        }
      }
      loadSearchData()
    }
  }, [variant])

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 500)
    return () => clearInterval(cursorInterval)
  }, [])

  useEffect(() => {
    if (variant === 'animated' && searchTitles.length > 0 && !isFocused) {
      const currentTitle = searchTitles[currentTitleIndex]

      if (!isTyping) {
        setIsTyping(true)
        setDisplayedText('')

        let charIndex = 0
        const typeInterval = setInterval(() => {
          if (charIndex < currentTitle.length) {
            setDisplayedText(currentTitle.slice(0, charIndex + 1))
            charIndex++
          } else {
            clearInterval(typeInterval)
            setTimeout(() => {
              setCurrentTitleIndex(prev => (prev + 1) % searchTitles.length)
              setIsTyping(false)
            }, 2000)
          }
        }, 100)

        return () => clearInterval(typeInterval)
      }
    }
    return undefined
  }, [currentTitleIndex, isTyping, variant, searchTitles, isFocused])

  useEffect(() => {
    if (variant === 'animated' && searchTitles.length > 0) {
      setCurrentTitleIndex(0)
      setIsTyping(false)
      setDisplayedText('')
    }
  }, [searchTitles.length, variant])

  useEffect(() => {
    if (variant === 'animated' && searchTitles.length > 0 && !isFocused) {
      setIsTyping(false)
    }
  }, [currentTitleIndex, searchTitles.length, variant, isFocused])

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

  const handleFocus = () => {
    setIsFocused(true)
    setDisplayedText('')
  }

  const handleBlur = () => {
    setIsFocused(false)
    setDisplayedText('')
  }

  const getPlaceholder = () => {
    if (variant === 'animated' && searchTitles.length > 0 && !isFocused) {
      return `${displayedText}${showCursor ? '|' : ''}`
    }
    return ''
  }

  return (
    <div className={cn(styles.wrapper, styles[variant])}>
      <input
        type='text'
        className='text_captions_l'
        ref={inputRef}
        onChange={handleInputChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        defaultValue={initialValue}
        placeholder={getPlaceholder()}
      />
      {showClearIcon && (
        <button onClick={handleClearInput} className={styles.button} aria-label='Очистить поиск'>
          <Q_Icon name='closeIcon' width='12' height='12' viewBox='0 0 12 12' />
        </button>
      )}
    </div>
  )
}
