import React, { useState } from 'react'

import C_RadioButtonItems from '@/components/collections/C_RadioButtonItems/C_RadioButtonItems'

import styles from './W_GeneratorModeSetting.module.css'

interface W_GeneratorModeSettingProps {
  options: string[]
  selectedOption?: string
  onSelect: (option: string) => void
}

export default function W_GeneratorModeSetting({
  options,
  selectedOption,
  onSelect,
}: W_GeneratorModeSettingProps) {
  const [selected, setSelected] = useState<string | undefined>(selectedOption)

  const handleSelect = (option: string) => {
    setSelected(option)
    onSelect(option)
  }

  return (
    <div className={styles.wrapper}>
      <p>Режим тимбилдинга</p>
      <C_RadioButtonItems options={options} selectedOption={selected} onSelect={handleSelect} />
    </div>
  )
}
