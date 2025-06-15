import React, { useEffect, useState } from 'react'

import { getGeneratorParameters } from '@/api/getGeneratorParameters'
import A_HandleButton from '@/components/atoms/A_HandleButton/A_HandleButton'
import W_GeneratorAmountSetting from '@/components/wrappers/W_GeneratorAmountSetting/W_GeneratorAmountSetting'
import W_GeneratorGoalSetting from '@/components/wrappers/W_GeneratorGoalSetting/W_GeneratorGoalSetting'
import W_GeneratorModeSetting from '@/components/wrappers/W_GeneratorModeSetting/W_GeneratorModeSetting'
import W_GeneratorTimeSetting from '@/components/wrappers/W_GeneratorTimeSetting/W_GeneratorTimeSetting'

import styles from './O_Generator.module.css'

import type { GeneratorParameters } from '@/types/generator'

interface O_GeneratorProps {
  onGenerate: (params: { amount: string; goal: string; time: string; mode: string }) => void
}

export default function O_Generator({ onGenerate }: O_GeneratorProps) {
  const [parameters, setParameters] = useState<GeneratorParameters | null>(null)
  const [selectedAmount, setSelectedAmount] = useState<string>()
  const [selectedGoal, setSelectedGoal] = useState<string>()
  const [selectedTime, setSelectedTime] = useState<string>()
  const [selectedMode, setSelectedMode] = useState<string>()

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
    setSelectedMode(option)
  }

  const handleAmountSelect = (option: string) => {
    setSelectedAmount(option)
  }

  const handleTimeSelect = (option: string) => {
    setSelectedTime(option)
  }

  const handleGoalSelect = (option: string) => {
    setSelectedGoal(option)
  }

  const handleGenerateClick = () => {
    if (selectedAmount && selectedGoal && selectedTime && selectedMode) {
      onGenerate({
        amount: selectedAmount,
        goal: selectedGoal,
        time: selectedTime,
        mode: selectedMode,
      })
    }
  }

  const isGenerateButtonDisabled =
    !selectedAmount || !selectedGoal || !selectedTime || !selectedMode

  if (!parameters) {
    return null
  }

  return (
    <div className={styles.wrapper}>
      <h3>Генератор тимбилдингов</h3>
      <div className={styles.settings}>
        <W_GeneratorAmountSetting
          options={parameters.teamSize}
          selectedOption={selectedAmount}
          onSelect={handleAmountSelect}
        />
        <W_GeneratorGoalSetting
          options={parameters.purpose}
          selectedOption={selectedGoal}
          onSelect={handleGoalSelect}
        />
        <W_GeneratorTimeSetting
          options={parameters.duration}
          selectedOption={selectedTime}
          onSelect={handleTimeSelect}
        />
        <W_GeneratorModeSetting
          options={parameters.format}
          selectedOption={selectedMode}
          onSelect={handleModeSelect}
        />
      </div>
      <A_HandleButton disabled={isGenerateButtonDisabled} onClick={handleGenerateClick}>
        Сгенерировать
      </A_HandleButton>
    </div>
  )
}
