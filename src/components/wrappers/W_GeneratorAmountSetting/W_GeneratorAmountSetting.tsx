import React, { useState } from 'react'

import C_SelectButtons from '@/components/collections/C_SelectButtons/C_SelectButtons'

import styles from './W_GeneratorAmountSetting.module.css'

interface W_GeneratorAmountSettingProps {
  options: string[]
  selectedOption?: string
  onSelect: (option: string) => void
}

export default function W_GeneratorAmountSetting({
  options,
  selectedOption,
  onSelect,
}: W_GeneratorAmountSettingProps) {
  const [selected, setSelected] = useState<string | undefined>(selectedOption)

  const handleSelect = (option: string) => {
    setSelected(option)
    onSelect(option)
  }

  return (
    <div className={styles.wrapper}>
      <p>Кол-во человек</p>
      <C_SelectButtons options={options} selectedOption={selected} onSelect={handleSelect} />
    </div>
  )
}
