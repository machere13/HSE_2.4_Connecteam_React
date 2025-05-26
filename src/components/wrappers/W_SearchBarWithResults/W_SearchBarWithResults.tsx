import React, { useState, useEffect } from 'react'

import { getSearchResults } from '@/api/getSearchResults'
import C_SearchResults from '@/components/collections/C_SearchResults/C_SearchResults'
import M_SearchBar from '@/components/molecules/M_SearchBar/M_SearchBar'

import styles from './W_SearchBarWithResults.module.css'

import type { SearchResult } from '@/api/getSearchResults'

type W_SearchBarWithResultsProps = {
  initialValue?: string
  isLoading?: boolean
}

export default function W_SearchBarWithResults({ initialValue = '' }: W_SearchBarWithResultsProps) {
  const [query, setQuery] = useState(initialValue)
  const [results, setResults] = useState<SearchResult[]>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (!query) {
      setResults([])
      return
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
  }, [query])

  return (
    <div className={styles.wrapper}>
      <M_SearchBar
        onSearchChange={setQuery}
        onClear={() => setQuery('')}
        initialValue={initialValue}
      />
      {query && (
        <C_SearchResults results={results} isLoading={isLoading} emptyMessage='Ничего не найдено' />
      )}
    </div>
  )
}
