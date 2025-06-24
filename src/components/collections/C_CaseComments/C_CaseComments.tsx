import React from 'react'

import M_CaseComment from '@/components/molecules/M_CaseComment/M_CaseComment'

import styles from './C_CaseComments.module.css'

import type { CaseComment } from '@/types/case'

interface C_CaseCommentsProps {
  comments: CaseComment[]
}

export default function C_CaseComments({ comments }: C_CaseCommentsProps) {
  if (!comments || comments.length === 0) {
    return null
  }

  return (
    <section className={styles.wrapper}>
      {comments.map((comment, index) => (
        <M_CaseComment key={index} comment={comment} />
      ))}
    </section>
  )
}
