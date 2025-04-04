import { GetServerSideProps } from 'next'
import Link from 'next/link'

type Params = {
  slug: string
}

export const getServerSideProps: GetServerSideProps<{ slug: string }, Params> = async (context) => {
  const { slug } = context.params as Params
  
  return { props: { slug } }
}

type Props = {
  slug: string
}

export default function TestPage({ slug }: Props) {
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