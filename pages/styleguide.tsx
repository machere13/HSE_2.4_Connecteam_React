import React from 'react'

import O_Footer from '@/components/organisms/O_Footer/O_Footer'
import SO_Header from '@/components/super-organisms/SO_Header/SO_Header'
import W_StyleguideSectionOne from '@/components/wrappers/W_StyleguideSectionOne/W_StyleguideSectionOne'
import W_StyleguideStartingPageSection from '@/components/wrappers/W_StyleguideStartingPageSection/W_StyleguideStartingPageSection'

export default function StyleguidePage() {
  return (
    <div className='page_styleguide'>
      <W_StyleguideStartingPageSection />
      <SO_Header />
      <W_StyleguideSectionOne />
      <O_Footer />
    </div>
  )
}
