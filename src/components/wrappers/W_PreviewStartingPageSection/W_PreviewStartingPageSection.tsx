import React from 'react'

import cn from 'classnames'

import A_Cursor from '@/components/atoms/A_Cursor/A_Cursor'
import { firstMainPageCursors } from '@/components/atoms/A_Cursor/data/cursors'
import M_TextPlate from '@/components/molecules/M_TextPlate/M_TextPlate'
import O_Search from '@/components/organisms/O_Search/O_Search'
import T_StartingPageSection from '@/components/templates/T_StartingPageSection/T_StartingPageSection'

import W_PopularTags from '../W_PopularTags/W_PopularTags'

import styles from './W_PreviewStartingPageSection.module.css'

export default function W_PreviewStartingPageSection() {
  return (
    <T_StartingPageSection>
      <div className={styles.wrapper}>
        <M_TextPlate
          backgroundColor='orange'
          maxWidth='260px'
          padding='p_15_25'
          borderRadius='r_10'
          showIcon={false}
          className={styles.position_absolute_1}
        >
          Деловая коммуникация в&nbsp;команде
        </M_TextPlate>
        <M_TextPlate
          backgroundColor='pink'
          maxWidth='356px'
          padding='p_15_25'
          borderRadius='r_10'
          rotate='4deg'
          showIcon={false}
          className={styles.position_absolute_2}
        >
          Научим эффективно общаться, чтобы успешно развивать продукт
        </M_TextPlate>
        <div className={styles.content}>
          <h1 className={cn(styles.title, 'text_headers_0')}>
            <span>Коннектим тебя</span>
            <span>с коллегами</span>
          </h1>
          <O_Search variant='animated' />
          <W_PopularTags />
        </div>
      </div>
      <A_Cursor cursors={firstMainPageCursors} />
    </T_StartingPageSection>
  )
}
