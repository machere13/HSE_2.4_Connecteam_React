import A_Cursor from '@/components/atoms/A_Cursor/A_Cursor'
import { firstMainPageCursors } from '@/components/atoms/A_Cursor/data/cursors'
import M_PreviewTestsDirectionPlate from '@/components/molecules/M_PreviewTestDirectionPlate/M_PreviewTestsDirectionPlate'
import O_Footer from '@/components/organisms/O_Footer/O_Footer'
import SO_Header from '@/components/super-organisms/SO_Header/SO_Header'
import W_PreviewArticlesCardsBlock from '@/components/wrappers/W_PreviewArticlesCardsBlock/W_PreviewArticlesCardsBlock'
import W_PreviewCasesCardsBlock from '@/components/wrappers/W_PreviewCasesCardsBlock/W_PreviewCasesCardsBlock'
import { Meta } from '@/lib/meta'

export default function MainPage() {
  return (
    <div className='page'>
      <Meta title='Connecteam' description='Медиа-сервис для IT-специалистов' />
      <SO_Header />
      <div className='preview_content_wrapper'>
        <W_PreviewArticlesCardsBlock />
        <M_PreviewTestsDirectionPlate />
        <W_PreviewCasesCardsBlock />
      </div>
      <A_Cursor cursors={firstMainPageCursors} />
      <O_Footer />
    </div>
  )
}
