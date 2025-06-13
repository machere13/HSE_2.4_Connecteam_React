import A_Cursor from '@/components/atoms/A_Cursor/A_Cursor'
import { firstMainPageCursors } from '@/components/atoms/A_Cursor/data/cursors'
import O_Footer from '@/components/organisms/O_Footer/O_Footer'
import Q_Grid from '@/components/quarks/Q_Grid/Q_Grid'
import SO_Header from '@/components/super-organisms/SO_Header/SO_Header'
import { Meta } from '@/lib/meta'

export default function MainPage() {
  return (
    <>
      <Meta title='Connecteam' description='Медиа-сервис для IT-специалистов' />
      <SO_Header />
      <Q_Grid variant='gray' />
      <A_Cursor cursors={firstMainPageCursors} />
      <O_Footer />
    </>
  )
}
