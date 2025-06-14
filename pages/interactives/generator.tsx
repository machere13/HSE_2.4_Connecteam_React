import React from 'react'

import Link from 'next/link'

import SO_Header from '@/components/super-organisms/SO_Header/SO_Header'
import W_Dropdown from '@/components/wrappers/W_Dropdown/W_Dropdown'
import W_GeneratorAmountSetting from '@/components/wrappers/W_GeneratorAmountSetting/W_GeneratorAmountSetting'
import W_GeneratorModeSetting from '@/components/wrappers/W_GeneratorModeSetting/W_GeneratorModeSetting'
import W_GeneratorTimeSetting from '@/components/wrappers/W_GeneratorTimeSetting/W_GeneratorTimeSetting'

export default function GeneratorPage() {
  const modeOptions = ['Режим 1', 'Режим 2', 'Режим 3']
  const amountOptions = ['1 идея', '3 идеи', '5 идей']
  const timeOptions = ['5 минут', '10 минут', '15 минут']

  const handleModeSelect = (option: string) => {
    console.log('Selected mode:', option)
  }

  const handleAmountSelect = (option: string) => {
    console.log('Selected amount:', option)
  }

  const handleTimeSelect = (option: string) => {
    console.log('Selected time:', option)
  }

  return (
    <div>
      <SO_Header />
      <div>
        <W_GeneratorModeSetting options={modeOptions} onSelect={handleModeSelect} />
        <W_GeneratorAmountSetting options={amountOptions} onSelect={handleAmountSelect} />
        <W_GeneratorTimeSetting options={timeOptions} onSelect={handleTimeSelect} />
        <W_Dropdown title='Выберите опцию' items={['Опция 1', 'Опция 2', 'Опция 3']} />
      </div>
      <Link href='/interactives'>Назад</Link>
    </div>
  )
}
