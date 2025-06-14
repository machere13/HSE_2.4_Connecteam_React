import React, { useEffect, useState } from 'react'

import { getGeneratorParameters } from '@/api/getGeneratorParameters'
import A_BackButton from '@/components/atoms/A_BackButton/A_BackButton'
import SO_Header from '@/components/super-organisms/SO_Header/SO_Header'
import W_GeneratorAmountSetting from '@/components/wrappers/W_GeneratorAmountSetting/W_GeneratorAmountSetting'
import W_GeneratorGoalSetting from '@/components/wrappers/W_GeneratorGoalSetting/W_GeneratorGoalSetting'
import W_GeneratorModeSetting from '@/components/wrappers/W_GeneratorModeSetting/W_GeneratorModeSetting'
import W_GeneratorTimeSetting from '@/components/wrappers/W_GeneratorTimeSetting/W_GeneratorTimeSetting'

import type { GeneratorParameters } from '@/types/generator'

export default function GeneratorPage() {
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
    <div>
      <SO_Header />
      <div>
        <W_GeneratorGoalSetting options={parameters.purpose} onSelect={handleGoalSelect} />
        <W_GeneratorModeSetting options={parameters.format} onSelect={handleModeSelect} />
        <W_GeneratorAmountSetting options={parameters.teamSize} onSelect={handleAmountSelect} />
        <W_GeneratorTimeSetting options={parameters.duration} onSelect={handleTimeSelect} />
      </div>
      <A_BackButton />
    </div>
  )
}
