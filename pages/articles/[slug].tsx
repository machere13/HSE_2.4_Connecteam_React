import { useRouter } from 'next/router'

export default function ArticlePage() {
  const router = useRouter()
  const { slug } = router.query

  return (
    <div>
      <h1>Статья: {slug}</h1>
      <p>Здесь будет контент статьи...</p>
    </div>
  )
}