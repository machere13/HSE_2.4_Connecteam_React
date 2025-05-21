import React, { useState, useRef, useEffect } from 'react'

import A_SearchButton from '@/components/atoms/A_SearchButton/A_SearchButton'
import W_SearchBarWithResults from '@/components/wrappers/W_SearchBarWithResults/W_SearchBarWithResults'

import styles from './O_Search.module.css'

export default function O_Search() {
  const [isSearchVisible, setIsSearchVisible] = useState(false)
  const searchRef = useRef<HTMLDivElement>(null)

  const toggleSearch = () => {
    setIsSearchVisible(prev => !prev)
  }

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setIsSearchVisible(false)
      }
    }

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsSearchVisible(false)
      }
    }

    if (isSearchVisible) {
      document.addEventListener('mousedown', handleClickOutside)
      document.addEventListener('keydown', handleEscape)
      const input = searchRef.current?.querySelector('input')
      input?.focus()
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isSearchVisible])

  return (
    <div className={styles.wrapper} ref={searchRef}>
      <div className={`${styles.searchContainer} ${isSearchVisible ? styles.visible : ''}`}>
        {isSearchVisible && <W_SearchBarWithResults />}
      </div>
      <A_SearchButton onClick={toggleSearch} isActive={isSearchVisible} />
    </div>
  )
}
