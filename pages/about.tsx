import React from 'react'

import M_AboutArticlesDirectionPlate from '@/components/molecules/M_AboutArticlesDirectionPlate/M_AboutArticlesDirectionPlate'
import O_Footer from '@/components/organisms/O_Footer/O_Footer'
import SO_Header from '@/components/super-organisms/SO_Header/SO_Header'
import W_AboutGeneratorDirectionSection from '@/components/wrappers/W_AboutGeneratorDirectionSection/W_AboutGeneratorDirectionSection'

export default function AboutPage() {
  return (
    <div className='page'>
      <SO_Header />
      <W_AboutGeneratorDirectionSection />
      <div className='preview_content_wrapper'>
        <M_AboutArticlesDirectionPlate />
      </div>
      <O_Footer />
    </div>
  )
}
