import React, { useEffect, useState } from 'react'

import { getGeneratorParameters } from '@/api/getGeneratorParameters'
import A_HandleButton from '@/components/atoms/A_HandleButton/A_HandleButton'
import W_GeneratorAmountSetting from '@/components/wrappers/W_GeneratorAmountSetting/W_GeneratorAmountSetting'
import W_GeneratorGoalSetting from '@/components/wrappers/W_GeneratorGoalSetting/W_GeneratorGoalSetting'
import W_GeneratorModeSetting from '@/components/wrappers/W_GeneratorModeSetting/W_GeneratorModeSetting'
import W_GeneratorTimeSetting from '@/components/wrappers/W_GeneratorTimeSetting/W_GeneratorTimeSetting'

import styles from './O_Generator.module.css'

import type { GeneratorParameters } from '@/types/generator'

export default function O_Generator() {
  const [parameters, setParameters] = useState<GeneratorParameters | null>(null)

  useEffect(() => {
    const fetchParameters = async () => {
      try {
        const data = await getGeneratorParameters()
        setParameters(data)
      } catch (error) {
        console.error('Failed to fetch generator parameters:', error)
      }
    }

    fetchParameters()
  }, [])

  const handleModeSelect = (option: string) => {
    console.log('Selected mode:', option)
  }

  const handleAmountSelect = (option: string) => {
    console.log('Selected amount:', option)
  }

  const handleTimeSelect = (option: string) => {
    console.log('Selected time:', option)
  }

  const handleGoalSelect = (option: string) => {
    console.log('Selected goal:', option)
  }

  if (!parameters) {
    return <div>Loading...</div>
  }

  return (
    <div className={styles.wrapper}>
      <h3>Генератор тимбилдингов</h3>
      <div className={styles.settings}>
        <W_GeneratorAmountSetting options={parameters.teamSize} onSelect={handleAmountSelect} />
        <W_GeneratorGoalSetting options={parameters.purpose} onSelect={handleGoalSelect} />
        <W_GeneratorTimeSetting options={parameters.duration} onSelect={handleTimeSelect} />
        <W_GeneratorModeSetting options={parameters.format} onSelect={handleModeSelect} />
      </div>
      <A_HandleButton>Сгенерировать</A_HandleButton>
    </div>
  )
}
