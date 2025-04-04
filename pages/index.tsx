import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1>Главная страница</h1>
      
      <nav>
        <ul>
          <li>
            <Link href="/articles">Статьи</Link>
          </li>
          <li>
            <Link href="/cases">Кейсы</Link>
          </li>
          <li>
            <Link href="/interactives">Интерактивы</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}