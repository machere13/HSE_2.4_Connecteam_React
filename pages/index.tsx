import A_Cursor from '@/components/atoms/A_Cursor/A_Cursor'
import O_Footer from '@/components/organisms/O_Footer/O_Footer'
import Q_Grid from '@/components/quarks/Q_Grid/Q_Grid'
import SO_Header from '@/components/super-organisms/SO_Header/SO_Header'

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
      <SO_Header />
      <Q_Grid variant='gray' />
      <A_Cursor cursors={cursors} />
      <O_Footer />
    </div>
  )
}
