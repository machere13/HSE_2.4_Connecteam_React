import React from 'react'

import Link from 'next/link'

import C_HeaderNavigation from '@/components/collections/C_HeaderNavigation/C_HeaderNavigation'
import O_Search from '@/components/organisms/O_Search/O_Search'
import Q_Icon from '@/components/quarks/Q_Icon'
import { ROUTES } from '@/routes'

import styles from './SO_Header.module.css'

export default function SO_Header() {
  return (
    <div className={styles.wrapper}>
      <Link href={ROUTES.MAIN} className={styles.logo_wrapper}>
        <Q_Icon name='logoFull' width='200' height='24' />
      </Link>
      <div className={styles.content}>
        <C_HeaderNavigation />
        <O_Search />
      </div>
    </div>
  )
}
