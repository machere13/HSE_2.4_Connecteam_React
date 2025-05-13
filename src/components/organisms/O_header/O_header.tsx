import React from 'react'
import styles from './O_Header.module.css'
import Link from 'next/link'
import { ROUTES } from '@/routes'
import Q_Icon from '@/components/quarks/Q_Icon'
import C_HeaderNavigation from '@/components/collections/C_HeaderNavigation/C_HeaderNavigation'

export default function O_Header() {
  return (
    <div className={styles.wrapper}>
      <Link href={ROUTES.MAIN} className={styles.logo_wrapper}>
        <Q_Icon name='logoFull' width='200' height='24' />
      </Link>
      <div className={styles.content}>
        <C_HeaderNavigation />
      </div>
    </div>
  )
}