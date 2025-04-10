import React from 'react'
import styles from './O_header.module.css'
import Link from 'next/link'
import { ROUTES } from '@/routes'
import Q_Icon from '@/components/quarks/Q_Icon'
import C_header_navigation from '@/components/collections/C_header_navigation/C_header_navigation'

export default function O_header() {
  return (
    <div className={styles.wrapper}>
        <Link href={ROUTES.MAIN} className={styles.logo_wrapper}>
          <Q_Icon name='logoFull' width='200' height='24'/>
        </Link>
        <div className={styles.content}>
          <C_header_navigation/>
        </div>
    </div>
  )
}