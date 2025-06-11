import React from 'react'

import Link from 'next/link'

import SO_Header from '@/components/super-organisms/SO_Header/SO_Header'
import W_GeneratorAmountSetting from '@/components/wrappers/W_GeneratorAmountSetting/W_GeneratorAmountSetting'
import W_GeneratorModeSetting from '@/components/wrappers/W_GeneratorModeSetting/W_GeneratorModeSetting'
import W_GeneratorTimeSetting from '@/components/wrappers/W_GeneratorTimeSetting/W_GeneratorTimeSetting'
import { ROUTES } from '@/routes'

export default function GeneratorPage() {
  return (
    <div>
      <SO_Header />
      <h1>Генератор идей</h1>
      <W_GeneratorModeSetting options={['Опция 1', 'Опция 2', 'Опция 3']} onSelect={console.log} />
      <W_GeneratorAmountSetting
        options={['Опция 1', 'Опция 2', 'Опция 3']}
        onSelect={console.log}
      />
      <W_GeneratorTimeSetting options={['Опци1я 1', 'Опция 2', 'Опция 3']} onSelect={console.log} />
      <Link href={ROUTES.INTERACTIVES.INDEX}>Вернуться назад</Link>
    </div>
  )
}
