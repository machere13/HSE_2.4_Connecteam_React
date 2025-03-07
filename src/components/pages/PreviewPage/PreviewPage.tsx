import React from 'react'
import C_header_navigation from '@/components/collections/C_header_navigation/C_header_navigation'
import Q_Icon from '@/components/quarks/Q_Icon'
import A_photo from '@/components/atoms/A_photo/A_photo'
import Photo from '../../../assets/images/author_1.jpg'

export default function PreviewPage() {
  return (
    <div>
      <C_header_navigation/>
      <Q_Icon name='thunderIcon'/>
      <A_photo src={Photo} alt='photo'></A_photo>
    </div>
  )
}
