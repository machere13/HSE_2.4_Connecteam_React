import React, { useState, useEffect } from 'react'

import cn from 'classnames'

import { getSearchResults } from '@/api/getSearchResults'
import C_SearchResults from '@/components/collections/C_SearchResults/C_SearchResults'
import M_SearchBar from '@/components/molecules/M_SearchBar/M_SearchBar'

import styles from './W_SearchBarWithResults.module.css'

import type { SearchResult } from '@/types/search'

type W_SearchBarWithResultsProps = {
  initialValue?: string
  isLoading?: boolean
  variant?: 'default' | 'animated'
  showResults?: boolean
  onShowResults?: (show: boolean) => void
}

export default function W_SearchBarWithResults({
  initialValue = '',
  variant = 'default',
  showResults = true,
  onShowResults,
}: W_SearchBarWithResultsProps) {
  const [query, setQuery] = useState(initialValue)
  const [results, setResults] = useState<SearchResult[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [isClosing, setIsClosing] = useState(false)
  const [shouldRender, setShouldRender] = useState(false)

  useEffect(() => {
    if (!query) {
      setResults([])
      setIsLoading(false)
      if (variant === 'animated' && onShowResults) {
        onShowResults(false)
      }
      return
    }

    if (variant === 'animated' && onShowResults) {
      onShowResults(true)
    }

    setIsLoading(true)
    setResults([])

    const timer = setTimeout(() => {
      getSearchResults(query)
        .then(setResults)
        .catch(err => console.error('getSearchResults error:', err))
        .finally(() => setIsLoading(false))
    }, 300)

    return () => clearTimeout(timer)
  }, [query, variant, onShowResults])

  useEffect(() => {
    if (variant === 'animated' && !showResults) {
      setIsClosing(true)
      const timer = setTimeout(() => {
        setIsClosing(false)
        setShouldRender(false)
        setResults([])
      }, 300)
      return () => clearTimeout(timer)
    }
    return undefined
  }, [showResults, variant])

  useEffect(() => {
    if (query) {
      if (variant === 'animated') {
        if (showResults || isClosing) {
          setShouldRender(true)
        }
      } else {
        setShouldRender(true)
      }
    } else {
      setShouldRender(false)
    }
  }, [query, showResults, isClosing, variant])

  return (
    <div className={cn(styles.wrapper, variant === 'animated' ? styles.animated : '')}>
      <M_SearchBar
        variant={variant}
        onSearchChange={setQuery}
        onClear={() => setQuery('')}
        initialValue={initialValue}
      />
      {shouldRender && (
        <C_SearchResults
          results={results}
          isLoading={isLoading}
          emptyMessage='Ничего не найдено'
          isClosing={isClosing}
        />
      )}
    </div>
  )
}
