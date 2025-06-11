import React, { useState } from 'react'

import C_SelectButtons from '@/components/collections/C_SelectButtons/C_SelectButtons'

import styles from './W_GeneratorTimeSetting.module.css'

interface W_GeneratorTimeSettingProps {
  options: string[]
  selectedOption?: string
  onSelect: (option: string) => void
}

export default function W_GeneratorTimeSetting({
  options,
  selectedOption,
  onSelect,
}: W_GeneratorTimeSettingProps) {
  const [selected, setSelected] = useState<string | undefined>(selectedOption)

  const handleSelect = (option: string) => {
    setSelected(option)
    onSelect(option)
  }

  return (
    <div className={styles.wrapper}>
      <p>Длительность</p>
      <C_SelectButtons options={options} selectedOption={selected} onSelect={handleSelect} />
    </div>
  )
}
