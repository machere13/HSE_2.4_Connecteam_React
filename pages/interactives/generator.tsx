import Link from 'next/link'

import SO_Header from '@/components/super-organisms/SO_Header/SO_Header'
import { ROUTES } from '@/routes'

export default function GeneratorPage() {
  return (
    <div>
      <SO_Header />
      <h1>Генератор идей</h1>
      <Link href={ROUTES.INTERACTIVES.INDEX}>Вернуться назад</Link>
    </div>
  )
}
