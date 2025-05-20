import React from 'react'

import M_SearchResult from '@/components/molecules/M_SearchResult/M_SearchResult'

import styles from './C_SearchResults.module.css'

interface SearchResultItem {
  href: string
  title: string
  description: string
  id?: string | number
}

interface C_SearchResultsProps {
  results: SearchResultItem[]
  isLoading?: boolean
  emptyMessage?: string
}

export default function C_SearchResults({
  results = [],
  isLoading = false,
  emptyMessage = 'Ничего не найдено',
}: C_SearchResultsProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.plate}></div>
      {isLoading ? (
        <div className={styles.loader}>Загрузка...</div>
      ) : results.length === 0 ? (
        <div className={styles.empty_wrapper}>
          <p className='text_captions_l'>{emptyMessage}</p>
        </div>
      ) : (
        <div className={styles.content}>
          {results.map(result => (
            <M_SearchResult
              key={result.id || result.href}
              href={result.href}
              title={result.title}
              description={result.description}
            />
          ))}
        </div>
      )}
    </div>
  )
}
