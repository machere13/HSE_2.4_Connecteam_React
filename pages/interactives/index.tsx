import Link from 'next/link'
import { ROUTES } from '@/routes'

const tests = [
  { 
    id: 4, 
    slug: 'team', 
    title: 'Тест: Командная работа', 
  }
]

export default function InteractivesList() {
  return (
    <div>
      <h1>Интерактивы</h1>
      
      <div>
        {tests.map(test => (
          <div key={test.id}>
            <Link href={ROUTES.INTERACTIVES.TESTS.bySlug(test.slug)}
            >
              {test.title}
            </Link>
          </div>
        ))}
      </div>
      <div>
        <Link href={ROUTES.INTERACTIVES.IT_BUNKER}>IT-bunker</Link>
        <Link href={ROUTES.INTERACTIVES.IT_MAFIA}>IT-mafia</Link>
        <Link href={ROUTES.INTERACTIVES.GENERATOR}>Generator</Link>
      </div>
    </div>
  )
}