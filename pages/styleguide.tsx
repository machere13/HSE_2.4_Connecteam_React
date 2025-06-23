import React from 'react'

import O_Footer from '@/components/organisms/O_Footer/O_Footer'
import SO_Header from '@/components/super-organisms/SO_Header/SO_Header'
import W_StyleguideSectionOne from '@/components/wrappers/W_StyleguideSectionOne/W_StyleguideSectionOne'
import W_StyleguideSectionTwo from '@/components/wrappers/W_StyleguideSectionTwo/W_StyleguideSectionTwo'
import W_StyleguideStartingPageSection from '@/components/wrappers/W_StyleguideStartingPageSection/W_StyleguideStartingPageSection'
import { Meta } from '@/lib/Meta'

export default function StyleguidePage() {
  return (
    <div className='page_styleguide'>
      <Meta
        title='Стайлгайд | Connecteam'
        description='Дизайн-система и компоненты Connecteam'
        url='https://connecteam.space/styleguide'
      />
      <W_StyleguideStartingPageSection />
      <SO_Header />
      <W_StyleguideSectionOne />
      <W_StyleguideSectionTwo />
      <O_Footer />
    </div>
  )
}
