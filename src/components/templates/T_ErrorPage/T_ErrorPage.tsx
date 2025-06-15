import React from 'react'

import O_Footer from '@/components/organisms/O_Footer/O_Footer'
import Q_Grid from '@/components/quarks/Q_Grid/Q_Grid'
import SO_Header from '@/components/super-organisms/SO_Header/SO_Header'
import W_ErrorBlock from '@/components/wrappers/W_ErrorBlock/W_ErrorBlock'

import styles from './T_ErrorPage.module.css'

import type { ErrorType } from '@/types/error'

interface T_ErrorPageProps {
  errorType?: ErrorType
  onClose?: () => void
}

export default function T_ErrorPage({ errorType = '404' }: T_ErrorPageProps) {
  return (
    <div className={styles.wrapper}>
      <SO_Header />
      <W_ErrorBlock errorType={errorType} />
      <Q_Grid variant='gray' />
      <O_Footer />
    </div>
  )
}
