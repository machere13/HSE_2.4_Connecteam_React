import React, { useState, useRef, useEffect } from 'react'

import cn from 'classnames'

import A_SearchButton from '@/components/atoms/A_SearchButton/A_SearchButton'
import W_SearchBarWithResults from '@/components/wrappers/W_SearchBarWithResults/W_SearchBarWithResults'

import styles from './O_Search.module.css'

type O_SearchProps = {
  headerRef: React.RefObject<HTMLElement | null>
}

export default function O_Search({ headerRef }: O_SearchProps) {
  const [isSearchVisible, setIsSearchVisible] = useState(false)
  const [shouldRender, setShouldRender] = useState(false)
  const searchRef = useRef<HTMLDivElement>(null)

  const toggleSearch = () => {
    if (!isSearchVisible) {
      setShouldRender(true)
      setIsSearchVisible(true)
    } else {
      setIsSearchVisible(false)
    }
  }

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node

      const clickedOutsideSearch = searchRef.current && !searchRef.current.contains(target)
      const clickedOutsideHeader = headerRef.current && !headerRef.current.contains(target)

      if (clickedOutsideSearch && clickedOutsideHeader) {
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
  }, [isSearchVisible, headerRef])

  useEffect(() => {
    if (!isSearchVisible && shouldRender) {
      const timer = setTimeout(() => {
        setShouldRender(false)
      }, 150)

      return () => clearTimeout(timer)
    }
    return undefined
  }, [isSearchVisible, shouldRender])

  return (
    <div className={styles.wrapper} ref={searchRef}>
      <div className={cn(styles.search_wrapper, isSearchVisible && styles.visible)}>
        {shouldRender && <W_SearchBarWithResults />}
      </div>
      <A_SearchButton onClick={toggleSearch} isActive={isSearchVisible} />
    </div>
  )
}
