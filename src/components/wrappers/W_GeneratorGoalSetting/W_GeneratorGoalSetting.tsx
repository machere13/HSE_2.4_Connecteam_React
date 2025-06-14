import React from 'react'

import W_Dropdown from '../W_Dropdown/W_Dropdown'

import styles from './W_GeneratorGoalSetting.module.css'

interface W_GeneratorGoalSettingProps {
  options: string[]
  selectedOption?: string
  onSelect: (option: string) => void
}

export default function W_GeneratorGoalSetting({
  options,
  selectedOption,
  onSelect,
}: W_GeneratorGoalSettingProps) {
  return (
    <div className={styles.wrapper}>
      <p>Цель тимбилдинга</p>
      <W_Dropdown
        title={selectedOption || 'Выберите цель'}
        items={options}
        activeItem={selectedOption}
        onItemSelect={onSelect}
      />
    </div>
  )
}
