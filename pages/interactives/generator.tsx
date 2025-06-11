import Link from 'next/link'

import SO_Header from '@/components/super-organisms/SO_Header/SO_Header'
import W_GeneratorAmountSetting from '@/components/wrappers/W_GeneratorAmountSetting/W_GeneratorAmountSetting'
import { ROUTES } from '@/routes'

export default function GeneratorPage() {
  return (
    <div>
      <SO_Header />
      <h1>Генератор идей</h1>
      <W_GeneratorAmountSetting
        options={['Опция 1', 'Опция 2', 'Опция 3']}
        onSelect={console.log}
      />
      <Link href={ROUTES.INTERACTIVES.INDEX}>Вернуться назад</Link>
    </div>
  )
}
