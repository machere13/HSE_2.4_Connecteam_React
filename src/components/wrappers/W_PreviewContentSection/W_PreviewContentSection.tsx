import React from 'react'

import A_Cursor from '@/components/atoms/A_Cursor/A_Cursor'
import { secondMainPageCursors } from '@/components/atoms/A_Cursor/data/cursors'
import M_TextPlate from '@/components/molecules/M_TextPlate/M_TextPlate'

import styles from './W_PreviewContentSection.module.css'

export default function W_PreviewContentSection() {
  return (
    <section className={styles.wrapper}>
      <h2>Создаем контент для каждого члена IT-команды, независимо от&nbsp;его специализации</h2>
      <M_TextPlate padding='p_8_15' rotate='2deg'>
        Оптимизируем общение для свободного и эффективного развития продукта
      </M_TextPlate>
      <A_Cursor cursors={secondMainPageCursors} />
    </section>
  )
}
