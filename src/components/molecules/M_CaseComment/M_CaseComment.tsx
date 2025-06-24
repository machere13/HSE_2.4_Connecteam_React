import React from 'react'

import cn from 'classnames'

import styles from './M_CaseComment.module.css'

import type { CaseComment } from '@/types/case'

interface M_CaseCommentProps {
  comment: CaseComment
}

export default function M_CaseComment({ comment }: M_CaseCommentProps) {
  return (
    <div className={styles.wrapper}>
      <blockquote className={cn(styles.comment, 'text_captions_l')}>{comment.comment}</blockquote>
      <cite className={cn(styles.author, 'text_captions_l')}>{comment.author}</cite>
    </div>
  )
}
