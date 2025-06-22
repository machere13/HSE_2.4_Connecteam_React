import A_Cursor from '@/components/atoms/A_Cursor/A_Cursor'
import { firstMainPageCursors } from '@/components/atoms/A_Cursor/data/cursors'
import M_HintScroll from '@/components/molecules/M_HintScroll/M_HintScroll'
import M_PreviewGeneratorDirectionPlate from '@/components/molecules/M_PreviewGeneratorDirectionPlate/M_PreviewGeneratorDirectionPlate'
import M_PreviewTestsDirectionPlate from '@/components/molecules/M_PreviewTestDirectionPlate/M_PreviewTestsDirectionPlate'
import O_Footer from '@/components/organisms/O_Footer/O_Footer'
import O_Search from '@/components/organisms/O_Search/O_Search'
import SO_Header from '@/components/super-organisms/SO_Header/SO_Header'
import T_StartingPageSection from '@/components/templates/T_StartingPageSection/T_StartingPageSection'
import W_PreviewArticlesCardsBlock from '@/components/wrappers/W_PreviewArticlesCardsBlock/W_PreviewArticlesCardsBlock'
import W_PreviewCasesCardsBlock from '@/components/wrappers/W_PreviewCasesCardsBlock/W_PreviewCasesCardsBlock'
import W_PreviewContentSection from '@/components/wrappers/W_PreviewContentSection/W_PreviewContentSection'
import { Meta } from '@/lib/Meta'

export default function MainPage() {
  return (
    <div className='page'>
      <Meta title='Connecteam' description='Медиа-сервис для IT-специалистов' />
      <M_HintScroll />
      <SO_Header position='absolute' />
      <T_StartingPageSection>
        <A_Cursor cursors={firstMainPageCursors} />
        <O_Search variant='animated' />
      </T_StartingPageSection>
      <div className='preview_content_wrapper'>
        <W_PreviewArticlesCardsBlock />
        <M_PreviewTestsDirectionPlate />
        <W_PreviewContentSection />
        <M_PreviewGeneratorDirectionPlate />
        <W_PreviewCasesCardsBlock />
      </div>
      <O_Footer />
    </div>
  )
}
