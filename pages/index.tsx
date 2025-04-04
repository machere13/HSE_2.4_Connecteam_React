import Link from 'next/link'
import C_header_navigation from '@/components/collections/C_header_navigation/C_header_navigation'

export default function Home() {
  return (
    <div>
      <h1>Главная страница</h1>
      
      <nav>
        <C_header_navigation/>
      </nav>
    </div>
  )
}