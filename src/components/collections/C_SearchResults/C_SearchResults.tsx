import React from 'react'

import Q_HeaderSearchResultsLoader from '@/components/quarks/Q_HeaderSearchResultsLoader/Q_HeaderSearchResultsLoader'
import M_SearchResult from '@/components/molecules/M_SearchResult/M_SearchResult'

import styles from './C_SearchResults.module.css'

interface SearchResultItem {
  url: string
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
        <Q_HeaderSearchResultsLoader />
      ) : results.length === 0 ? (
        <div className={styles.empty_wrapper}>
          <p className='text_captions_l'>{emptyMessage}</p>
        </div>
      ) : (
        <div className={styles.content}>
          {results.map(result => (
            <M_SearchResult
              key={result.id || result.url}
              href={result.url}
              title={result.title}
              description={result.description}
            />
          ))}
        </div>
      )}
    </div>
  )
}
