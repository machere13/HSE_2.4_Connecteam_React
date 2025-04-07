import React from 'react'
import styles from './O_header.module.css'
import Link from 'next/link'
import { ROUTES } from '@/routes'
import Q_Icon from '@/components/quarks/Q_Icon'

export default function O_header() {
  return (
    <div className={styles.wrapper}>
        <Link href={ROUTES.MAIN}>
            <Q_Icon name='logoFull' width='200' height='24'/>
        </Link>
    </div>
  )
}