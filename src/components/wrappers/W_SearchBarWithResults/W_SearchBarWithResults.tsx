import React, { useState, useEffect } from 'react'

import C_SearchResults from '@/components/collections/C_SearchResults/C_SearchResults'
import M_SearchBar from '@/components/molecules/M_SearchBar/M_SearchBar'

import styles from './W_SearchBarWithResults.module.css'

interface SearchResult {
  href: string
  title: string
  description: string
  id?: string | number
}

const mockData: SearchResult[] = [
  {
    href: '/articles/1',
    title: 'Геймификация для улучшения командного взаимодействия',
    description: 'Как поднять мотивацию и улучшить взаимодействие, го сыграем?',
  },
  {
    href: '/articles/2',
    title: 'Психология мотивации в команде',
    description: 'Когда «спасибо» спасает дедлайны',
  },
  {
    href: '/articles/3',
    title: 'Обратная связь: культура конструктивных бесед ',
    description: 'Как создавать поддерживающую атмосферу обратной связи',
  },
]

export default function W_SearchBarWithResults() {
  const [searchQuery, setSearchQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const searchLocalData = (query: string): SearchResult[] => {
    if (!query) return []

    const lowerQuery = query.toLowerCase()
    return mockData.filter(
      item =>
        item.title.toLowerCase().includes(lowerQuery) ||
        item.description.toLowerCase().includes(lowerQuery),
    )
  }

  useEffect(() => {
    setIsLoading(true)

    const timer = setTimeout(() => {
      const searchResults = searchLocalData(searchQuery)
      setResults(searchResults)
      setIsLoading(false)
    }, 300)

    return () => clearTimeout(timer)
  }, [searchQuery])

  const handleSearch = (query: string) => {
    setSearchQuery(query)
  }

  const handleClearSearch = () => {
    setSearchQuery('')
    setResults([])
  }

  return (
    <div className={styles.wrapper}>
      <M_SearchBar onSearchChange={handleSearch} onClear={handleClearSearch} />
      {searchQuery && (
        <C_SearchResults results={results} isLoading={isLoading} emptyMessage='Ничего не найдено' />
      )}
    </div>
  )
}
