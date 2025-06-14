import React from 'react'

import Link from 'next/link'

import M_DropdownBar from '@/components/molecules/M_DropdownBar/M_DropdownBar'
import SO_Header from '@/components/super-organisms/SO_Header/SO_Header'
import W_GeneratorAmountSetting from '@/components/wrappers/W_GeneratorAmountSetting/W_GeneratorAmountSetting'
import W_GeneratorModeSetting from '@/components/wrappers/W_GeneratorModeSetting/W_GeneratorModeSetting'
import W_GeneratorTimeSetting from '@/components/wrappers/W_GeneratorTimeSetting/W_GeneratorTimeSetting'
import { ROUTES } from '@/routes'

export default function GeneratorPage() {
  const [isOpen, setIsOpen] = React.useState(false)

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
      <M_DropdownBar title='Заголовок' isActive={isOpen} onClick={() => setIsOpen(!isOpen)} />
      <Link href={ROUTES.INTERACTIVES.INDEX}>Вернуться назад</Link>
    </div>
  )
}
