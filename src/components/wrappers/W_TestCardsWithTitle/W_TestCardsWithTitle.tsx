import React from 'react'

import W_TestCards from '@/components/wrappers/W_TestCards/W_TestCards'

import styles from './W_TestCardsWithTitle.module.css'

import type { TestData } from '@/types/test'

interface W_TestCardsWithTitleProps {
  tests: TestData[]
}

export default function W_TestCardsWithTitle({ tests }: W_TestCardsWithTitleProps) {
  return (
    <div className={styles.wrapper}>
      <h3>Тесты</h3>
      <W_TestCards tests={tests} />
    </div>
  )
}
