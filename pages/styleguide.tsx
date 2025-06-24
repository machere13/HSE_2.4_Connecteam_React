import React, { useEffect } from 'react'

import M_StyleguideHeader from '@/components/molecules/M_StyleguideHeader/M_StyleguideHeader'
import O_Footer from '@/components/organisms/O_Footer/O_Footer'
import Q_PageLoader, { usePageLoader } from '@/components/quarks/Q_PageLoader/Q_PageLoader'
import W_StyleguideSectionOne from '@/components/wrappers/W_StyleguideSectionOne/W_StyleguideSectionOne'
import W_StyleguideSectionTwo from '@/components/wrappers/W_StyleguideSectionTwo/W_StyleguideSectionTwo'
import W_StyleguideStartingPageSection from '@/components/wrappers/W_StyleguideStartingPageSection/W_StyleguideStartingPageSection'
import { Meta } from '@/lib/Meta'

export default function StyleguidePage() {
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
      <div className='page_styleguide'>
        <Meta
          title='Стайлгайд | Connecteam'
          description='Дизайн-система и компоненты Connecteam'
          url='https://connecteam.space/styleguide'
        />
        <M_StyleguideHeader />
        <W_StyleguideStartingPageSection />
        <div className='styleguide_columns'>
          <p style={{ width: '360px' }}>fef</p>
          <div className='styleguide_content_wrapper'>
            <W_StyleguideSectionOne />
            <W_StyleguideSectionTwo />
          </div>
        </div>
        <O_Footer />
      </div>
    </>
  )
}
