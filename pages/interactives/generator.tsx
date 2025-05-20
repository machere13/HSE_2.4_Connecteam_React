import Link from 'next/link'

import { ROUTES } from '@/routes'

export default function GeneratorPage() {
  return (
    <div>
      <h1>Генератор идей</h1>
      <Link href={ROUTES.INTERACTIVES.INDEX}>Вернуться назад</Link>
    </div>
  )
}
