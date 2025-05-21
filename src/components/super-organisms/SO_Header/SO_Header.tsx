import React, { useRef } from 'react'

import Link from 'next/link'

import Q_Icon from '@/components/quarks/Q_Icon'
import { ROUTES } from '@/routes'

import styles from './SO_Header.module.css'

export default function SO_Header() {
  const headerRef = useRef<HTMLDivElement>(null)

  return (
    <div className={styles.wrapper} ref={headerRef}>
      <Link href={ROUTES.MAIN} className={styles.logo_wrapper}>
        <Q_Icon name='logoFull' width='200' height='24' />
      </Link>
    </div>
  )
}
