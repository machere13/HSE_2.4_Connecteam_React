import React from 'react'

import Q_Grid from '@/components/quarks/Q_Grid/Q_Grid'

import styles from './T_StartingPageSection.module.css'

interface T_StartingPageSectionProps {
  children?: React.ReactNode
  className?: string
}

export default function T_StartingPageSection({ children, className }: T_StartingPageSectionProps) {
  return (
    <section className={`${styles.wrapper} ${className || ''}`}>
      <Q_Grid variant='blue' />
      {children}
    </section>
  )
}
