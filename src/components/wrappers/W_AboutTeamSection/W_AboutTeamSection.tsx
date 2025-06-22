import React from 'react'

import cn from 'classnames'

import A_Cursor from '@/components/atoms/A_Cursor/A_Cursor'
import {
  thirdOneAboutPageCursors,
  thirdTwoAboutPageCursors,
  thirdThreeAboutPageCursors,
} from '@/components/atoms/A_Cursor/data/cursors'
import A_Photo from '@/components/atoms/A_Photo_temp/A_Photo_temp'
import M_TextPlate from '@/components/molecules/M_TextPlate/M_TextPlate'

import styles from './W_AboutTeamSection.module.css'

export default function W_AboutTeamSection() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.content}>
        <h3>Создаём контент для каждого члена IT-команды, независимо от&nbsp;его специализации</h3>
        <M_TextPlate
          maxWidth='385px'
          padding='p_15_25'
          borderRadius='r_10'
          backgroundColor='pink'
          rotate='2deg'
          showIcon={false}
        >
          От&nbsp;студентов Школы Дизайна, переживших 7&nbsp;сессий и&nbsp;189 созвонов
        </M_TextPlate>
      </div>
      <div className={cn(styles.photo_position, styles.photo_position_one)}>
        <A_Photo
          src='https://res.cloudinary.com/dkmaxwe8e/image/upload/v1748957231/A_Photo_02_a9eu0v.webp'
          alt='Василиса Кольченко'
        />
        <A_Cursor cursors={thirdOneAboutPageCursors} />
      </div>
      <div className={cn(styles.photo_position, styles.photo_position_two)}>
        <A_Photo
          src='https://res.cloudinary.com/dkmaxwe8e/image/upload/v1748957231/A_Photo_03_ky9nnm.webp'
          alt='Вероника Косарева'
        />
        <A_Cursor cursors={thirdTwoAboutPageCursors} />
      </div>
      <div className={cn(styles.photo_position, styles.photo_position_three)}>
        <A_Photo
          src='https://res.cloudinary.com/dkmaxwe8e/image/upload/v1748957231/A_Photo_01_ewdt73.webp'
          alt='machere13'
        />
        <A_Cursor cursors={thirdThreeAboutPageCursors} />
      </div>
    </section>
  )
}
