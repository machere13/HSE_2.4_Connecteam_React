import React from 'react'

import W_AboutContentSectionImage from '@/assets/images/W_AboutContentSection/W_AboutContentSection.svg'
import A_Cursor from '@/components/atoms/A_Cursor/A_Cursor'
import { secondAboutPageCursors } from '@/components/atoms/A_Cursor/data/cursors'

import styles from './W_AboutContentSection.module.css'

export default function W_AboutContentSection() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.text_wrapper}>
        <h2>Сконнектим тебя с&nbsp;коллегами, даже если вы&nbsp;не&nbsp;знаете имён друг друга</h2>
      </div>
      <div className={styles.image_wrapper}>
        <W_AboutContentSectionImage />
      </div>
      <A_Cursor cursors={secondAboutPageCursors} />
    </div>
  )
}
