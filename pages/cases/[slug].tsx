import { useRouter } from 'next/router'

export default function CasePage() {
  const router = useRouter()
  const { slug } = router.query

  return (
    <div>
      <h1>Кейс: {slug}</h1>
      <p>Здесь будет контент кейса...</p>
    </div>
  )
}