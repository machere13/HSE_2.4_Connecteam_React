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

const sections = [
  {
    id: 'section-one',
    Component: W_StyleguideSectionOne,
  },
  {
    id: 'section-two',
    Component: W_StyleguideSectionTwoImage,
  },
  {
    id: 'section-three',
    Component: W_StyleguideSectionThreeImage,
  },
  {
    id: 'section-four',
    Component: W_StyleguideSectionFourImage,
  },
  {
    id: 'section-five',
    Component: W_StyleguideSectionFiveImage,
  },
  {
    id: 'section-six',
    Component: W_StyleguideSectionSixImage,
  },
  {
    id: 'section-seven',
    Component: W_StyleguideSectionSevenImage,
  },
]

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
            {sections.map(({ id, Component }) => (
              <div key={id} id={id}>
                {Component && (
                  <div className='styleguide_section_image'>
                    <Component />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <O_Footer />
      </div>
    </>
  )
}
