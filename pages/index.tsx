import A_Cursor from '@/components/atoms/A_Cursor/A_Cursor'
import C_FooterIcons from '@/components/collections/C_FooterIcons/C_FooterIcons'
import O_Header from '@/components/organisms/O_Header/O_Header'

export default function MainPage() {
  const cursors = [
    {
      style: 'orbital' as const,
      icon: 'cursor-orbital',
      speed: 1,
      color: '#F64704',
      label: 'Анастасия',
    },
    {
      style: 'wave' as const,
      icon: 'cursor-wave',
      speed: 2,
      color: '#FF3DA8',
      label: 'Ваня',
    },
    {
      style: 'orbital' as const,
      icon: 'cursor-orbital',
      speed: 2,
      color: '#952AFF',
      label: 'Артем',
    },
  ]
  return (
    <div>
      <h1>Главная страница</h1>
      <O_Header />
      <A_Cursor cursors={cursors} />
      <C_FooterIcons></C_FooterIcons>
    </div>
  )
}
