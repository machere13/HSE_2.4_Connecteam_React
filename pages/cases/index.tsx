import Link from 'next/link'
import { ROUTES } from '@/routes'

const cases = [
  { id: 1, slug: 'yandex-rebranding', title: 'Ребрендинг «Яндекс Музыки»'},
  { id: 2, slug: 'spotify-race', title: 'Как Spotify выигрывает гонку стриминговых сервисов — взгляд изнутри команды'},
]

export default function CasesList() {
  return (
    <div>
      <h1>Все кейсы</h1>
      
      <div>
        {cases.map(caseItem => (
          <div key={caseItem.id}>
            <Link href={ROUTES.CASES.bySlug(caseItem.slug)}>
              <h2>{caseItem.title}</h2>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}