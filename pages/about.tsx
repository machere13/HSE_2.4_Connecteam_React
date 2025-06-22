import React from 'react'

import M_AboutArticlesDirectionPlate from '@/components/molecules/M_AboutArticlesDirectionPlate/M_AboutArticlesDirectionPlate'
import O_Footer from '@/components/organisms/O_Footer/O_Footer'
import SO_Header from '@/components/super-organisms/SO_Header/SO_Header'
import W_AboutContentSection from '@/components/wrappers/W_AboutContentSection/W_AboutContentSection'
import W_AboutGeneratorDirectionSection from '@/components/wrappers/W_AboutGeneratorDirectionSection/W_AboutGeneratorDirectionSection'
import W_AboutTeamSection from '@/components/wrappers/W_AboutTeamSection/W_AboutTeamSection'

export default function AboutPage() {
  return (
    <div className='page'>
      <SO_Header />
      <div className='preview_content_wrapper'>
        <W_AboutContentSection />
      </div>
      <W_AboutGeneratorDirectionSection />
      <div className='preview_content_wrapper'>
        <W_AboutTeamSection />
        <M_AboutArticlesDirectionPlate />
      </div>
      <O_Footer />
    </div>
  )
}
