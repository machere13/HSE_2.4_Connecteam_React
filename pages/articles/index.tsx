import Link from 'next/link'
import { ROUTES } from '@/routes'

const articles = [
  { id: 1, slug: 'collegue-friendship', title: 'Дружба с коллегой' },
  { id: 2, slug: 'technical-jargon', title: 'Технический жаргон:' }
]

export default function ArticlesList() {
  return (
    <div>
      <h1>Все статьи</h1>
      <ul>
        {articles.map(article => (
          <li key={article.id}>
            <Link href={ROUTES.CASES.bySlug(article.slug)}>
              {article.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}