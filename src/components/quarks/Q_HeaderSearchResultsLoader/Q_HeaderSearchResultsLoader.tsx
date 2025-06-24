import React from 'react'

import Q_Icon from '../Q_Icon/Q_Icon'

import styles from './Q_HeaderSearchResultsLoader.module.css'

export default function Q_HeaderSearchResultsLoader() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.loader_wrapper}>
        <Q_Icon name='loaderIcon' width='45' height='45' viewBox='0 0 45 45' />
      </div>
    </div>
  )
}
