import React, { useEffect } from 'react'

import W_StyleguideSectionFiveImage from '@/assets/images/W_StyleguideSections/W_StyleguideSectionFive.svg'
import W_StyleguideSectionFourImage from '@/assets/images/W_StyleguideSections/W_StyleguideSectionFour.svg'
import W_StyleguideSectionSevenImage from '@/assets/images/W_StyleguideSections/W_StyleguideSectionSeven.svg'
import W_StyleguideSectionSixImage from '@/assets/images/W_StyleguideSections/W_StyleguideSectionSix.svg'
import W_StyleguideSectionThreeImage from '@/assets/images/W_StyleguideSections/W_StyleguideSectionThree.svg'
import W_StyleguideSectionTwoImage from '@/assets/images/W_StyleguideSections/W_StyleguideSectionTwo.svg'
import M_HintScroll from '@/components/molecules/M_HintScroll/M_HintScroll'
import M_StyleguideHeader from '@/components/molecules/M_StyleguideHeader/M_StyleguideHeader'
import M_StyleguideNavigation from '@/components/molecules/M_StyleguideNavigation/M_StyleguideNavigation'
import O_Footer from '@/components/organisms/O_Footer/O_Footer'
import Q_PageLoader, { usePageLoader } from '@/components/quarks/Q_PageLoader/Q_PageLoader'
import W_StyleguideSectionOne from '@/components/wrappers/W_StyleguideSectionOne/W_StyleguideSectionOne'
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
        <M_HintScroll />
        <W_StyleguideStartingPageSection />
        <div className='styleguide_columns'>
          <div style={{ width: '360px' }}>
            <M_StyleguideNavigation />
          </div>
          <div className='styleguide_content_wrapper'>
            <div id='section-one'>
              <W_StyleguideSectionOne />
            </div>
            <div id='section-two'>
              <W_StyleguideSectionTwoImage />
            </div>
            <div id='section-three'>
              <W_StyleguideSectionThreeImage />
            </div>
            <div id='section-four'>
              <W_StyleguideSectionFourImage />
            </div>
            <div id='section-five'>
              <W_StyleguideSectionFiveImage />
            </div>
            <div id='section-six'>
              <W_StyleguideSectionSixImage />
            </div>
            <div id='section-seven'>
              <W_StyleguideSectionSevenImage />
            </div>
          </div>
        </div>
        <O_Footer />
      </div>
    </>
  )
}
