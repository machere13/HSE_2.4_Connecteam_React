import React from 'react'

import cn from 'classnames'

import W_AboutStartingPageSectionImage from '@/assets/images/W_AboutStartingPageSection/W_AboutStartingPageSection.svg'
import A_Cursor from '@/components/atoms/A_Cursor/A_Cursor'
import { firstAboutPageCursors } from '@/components/atoms/A_Cursor/data/cursors'
import M_TextPlate from '@/components/molecules/M_TextPlate/M_TextPlate'
import T_StartingPageSection from '@/components/templates/T_StartingPageSection/T_StartingPageSection'

import styles from './W_AboutStartingPageSection.module.css'

export default function W_AboutStartingPageSection() {
  return (
    <T_StartingPageSection className={styles.template_wrapper}>
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
            <span>База знаний</span>
            <span>для IT-команд</span>
          </h1>
          <div className={styles.image_wrapper}>
            <W_AboutStartingPageSectionImage />
          </div>
        </div>
      </div>
      <A_Cursor cursors={firstAboutPageCursors} />
    </T_StartingPageSection>
  )
}
