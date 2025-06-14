import React, { useState } from 'react'

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
  const [selected, setSelected] = useState<string | undefined>(selectedOption)

  const handleSelect = (option: string) => {
    setSelected(option)
    onSelect(option)
  }

  return (
    <div className={styles.wrapper}>
      <p>Цель тимбилдинга</p>
      <W_Dropdown
        title={selected || 'Выберите цель'}
        items={options}
        activeItem={selected}
        onItemSelect={handleSelect}
      />
    </div>
  )
}
