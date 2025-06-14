import React from 'react'

import O_Generator from '@/components/organisms/O_Generator/O_Generator'
import SO_Header from '@/components/super-organisms/SO_Header/SO_Header'

export default function GeneratorPage() {
  return (
    <div>
      <SO_Header />
      <O_Generator />
    </div>
  )
}
