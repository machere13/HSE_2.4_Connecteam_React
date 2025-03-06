import React from 'react'
import A_header_button from '@/components/atoms/A_header_button/A_header_button'
import { PREVIEW_PAGE } from '@/router/paths'

export default function PreviewPage() {
  return (
    <div>
      <A_header_button to={PREVIEW_PAGE} label='wp'></A_header_button>
    </div>
  )
}
