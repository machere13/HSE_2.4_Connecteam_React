import React, { useState, useRef, useEffect } from 'react'

import cn from 'classnames'

import A_SearchButton from '@/components/atoms/A_SearchButton/A_SearchButton'
import W_SearchBarWithResults from '@/components/wrappers/W_SearchBarWithResults/W_SearchBarWithResults'

import styles from './O_Search.module.css'

type O_SearchProps = {
  isOpen?: boolean
  onToggle?: (isOpen: boolean) => void
  variant?: 'default' | 'animated'
}

export default function O_Search({
  isOpen: propIsOpen,
  onToggle,
  variant = 'default',
}: O_SearchProps) {
  const [internalIsOpen, setInternalIsOpen] = useState(false)
  const [shouldRender, setShouldRender] = useState(false)
  const [showResults, setShowResults] = useState(false)
  const searchRef = useRef<HTMLDivElement>(null)
  const isControlled = propIsOpen !== undefined
  const isOpen = isControlled ? propIsOpen : internalIsOpen

  const toggleSearch = () => {
    const newState = !isOpen
    if (onToggle) {
      onToggle(newState)
    } else if (!isControlled) {
      setInternalIsOpen(newState)
    }
    if (newState) setShouldRender(true)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement

      const isHeader = target.closest('.SO_Header_wrapper__aKq5Y')
      const isSearch = searchRef.current?.contains(target)

      if (!isSearch && !isHeader) {
        if (variant === 'animated') {
          setShowResults(false)
          return
        }

        if (onToggle) {
          onToggle(false)
        } else if (!isControlled) {
          setInternalIsOpen(false)
        }
      }
    }

    if (variant === 'animated' || isOpen) {
      document.addEventListener('click', handleClickOutside)
      return () => document.removeEventListener('click', handleClickOutside)
    }

    return undefined
  }, [isOpen, onToggle, isControlled, variant])

  useEffect(() => {
    if (propIsOpen !== undefined) {
      setInternalIsOpen(propIsOpen)
      if (propIsOpen) setShouldRender(true)
    }
  }, [propIsOpen])

  useEffect(() => {
    if (variant === 'animated') {
      setShouldRender(true)
      setInternalIsOpen(true)
    }
  }, [variant])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (variant === 'animated') {
          setShowResults(false)
        } else if (isOpen) {
          if (onToggle) {
            onToggle(false)
          } else if (!isControlled) {
            setInternalIsOpen(false)
          }
        }
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen, onToggle, isControlled, variant])

  useEffect(() => {
    if (!isOpen && shouldRender) {
      const timer = setTimeout(() => setShouldRender(false), 150)
      return () => clearTimeout(timer)
    }

    return undefined
  }, [isOpen, shouldRender])

  useEffect(() => {
    if (!isOpen && variant !== 'animated') {
      setShowResults(false)
    }
  }, [isOpen, variant])

  useEffect(() => {
    if (isOpen) {
      searchRef.current?.querySelector('input')?.focus()
    }
  }, [isOpen])

  return (
    <div className={cn(styles.wrapper, variant === 'animated' && styles.animated)} ref={searchRef}>
      <div
        className={cn(
          styles.search_wrapper,
          isOpen && styles.visible,
          variant === 'animated' && styles.animated,
        )}
      >
        {shouldRender && (
          <W_SearchBarWithResults
            variant={variant}
            showResults={variant === 'animated' ? showResults : isOpen}
            onShowResults={variant === 'animated' ? setShowResults : undefined}
          />
        )}
      </div>
      {variant !== 'animated' && <A_SearchButton onClick={toggleSearch} isActive={isOpen} />}
    </div>
  )
}
