import React from 'react'

import O_Footer from '@/components/organisms/O_Footer/O_Footer'
import Q_Grid from '@/components/quarks/Q_Grid/Q_Grid'
import SO_Header from '@/components/super-organisms/SO_Header/SO_Header'
import W_ErrorBlock from '@/components/wrappers/W_ErrorBlock/W_ErrorBlock'

import styles from './T_ErrorPage.module.css'

interface T_ErrorPageProps {
  errorType?: '403' | '404' | '418' | '500' | '502' | '505'
  onClose?: () => void
}

export default function T_ErrorPage({ errorType = '404', onClose }: T_ErrorPageProps) {
  return (
    <div className={styles.wrapper}>
      <SO_Header />
      <W_ErrorBlock errorType={errorType} onClose={onClose} />
      <Q_Grid variant='gray' />
      <O_Footer />
    </div>
  )
}
