import React from 'react'

import W_FilterTags from '@/components/wrappers/W_FilterTags/W_FilterTags'
import W_StickersContainer from '@/components/wrappers/W_StickersContainer/W_StickersContainer'

import styles from './T_MaterialsPageContent.module.css'

interface T_MaterialsPageContentProps {
  title: string
  filters: string[]
  activeFilters: string[]
  onFilterClick: (filter: string) => void
  children: React.ReactNode
}

export default function T_MaterialsPageContent({
  title,
  filters,
  activeFilters,
  onFilterClick,
  children,
}: T_MaterialsPageContentProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.heading_wrapper}>
        <h1>{title}</h1>
        <W_FilterTags tags={filters} activeTags={activeFilters} onTagClick={onFilterClick} />
      </div>
      {children}
      <W_StickersContainer />
    </div>
  )
}
