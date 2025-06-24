import React, { useEffect } from 'react'

import M_HintScroll from '@/components/molecules/M_HintScroll/M_HintScroll'
import M_PreviewGeneratorDirectionPlate from '@/components/molecules/M_PreviewGeneratorDirectionPlate/M_PreviewGeneratorDirectionPlate'
import M_PreviewTestsDirectionPlate from '@/components/molecules/M_PreviewTestDirectionPlate/M_PreviewTestsDirectionPlate'
import O_Footer from '@/components/organisms/O_Footer/O_Footer'
import Q_PageLoader, { usePageLoader } from '@/components/quarks/Q_PageLoader/Q_PageLoader'
import SO_Header from '@/components/super-organisms/SO_Header/SO_Header'
import W_PreviewArticlesCardsBlock from '@/components/wrappers/W_PreviewArticlesCardsBlock/W_PreviewArticlesCardsBlock'
import W_PreviewCasesCardsBlock from '@/components/wrappers/W_PreviewCasesCardsBlock/W_PreviewCasesCardsBlock'
import W_PreviewContentSection from '@/components/wrappers/W_PreviewContentSection/W_PreviewContentSection'
import W_PreviewStartingPageSection from '@/components/wrappers/W_PreviewStartingPageSection/W_PreviewStartingPageSection'
import { Meta } from '@/lib/Meta'

export default function MainPage() {
  const { isLoading, stopLoading } = usePageLoader()

  useEffect(() => {
    const timer = setTimeout(() => {
      stopLoading()
    }, 1000)

    return () => clearTimeout(timer)
  }, [stopLoading])

  return (
    <>
      <Q_PageLoader isLoading={isLoading} />
      <div className='page'>
        <Meta title='Connecteam' description='Медиа-сервис для IT-специалистов' />
        <M_HintScroll />
        <SO_Header position='absolute' />
        <W_PreviewStartingPageSection />
        <div className='preview_content_wrapper'>
          <W_PreviewArticlesCardsBlock />
          <M_PreviewTestsDirectionPlate />
          <W_PreviewContentSection />
          <M_PreviewGeneratorDirectionPlate />
          <W_PreviewCasesCardsBlock />
        </div>
        <O_Footer />
      </div>
    </>
  )
}
