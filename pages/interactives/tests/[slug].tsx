import { useRouter } from 'next/router'
import Link from 'next/link'

export default function TestPage() {
  const router = useRouter()
  const { slug } = router.query

  return (
    <div>
      <h1>Тест: {slug}</h1>
      <p>Здесь будет содержание теста...</p>
      <Link href="/interactives">
        Вернуться назад
      </Link>
    </div>
  )
}