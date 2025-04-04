import Link from 'next/link'

const tests = [
  { 
    id: 4, 
    slug: 'tests/team', 
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
            <Link href={`/interactives/${test.slug}`}
            >
              {test.title}
            </Link>
          </div>
        ))}
      </div>
      <div>
        <Link href="/interactives/itbunker">IT-bunker</Link>
        <Link href="/interactives/itmafia">IT-mafia</Link>
        <Link href="/interactives/generator">Generator</Link>
      </div>
    </div>
  )
}