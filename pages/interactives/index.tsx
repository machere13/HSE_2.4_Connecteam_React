import { getTests } from '@/api/getTests'
import M_InteractivesGeneratorDirectionPlate from '@/components/molecules/M_InteractivesGeneratorDirectionPlate/M_InteractivesGeneratorDirectionPlate'
import O_Footer from '@/components/organisms/O_Footer/O_Footer'
import Q_Grid from '@/components/quarks/Q_Grid/Q_Grid'
import SO_Header from '@/components/super-organisms/SO_Header/SO_Header'
import W_StickersContainer from '@/components/wrappers/W_StickersContainer/W_StickersContainer'
import W_TestCardsWithTitle from '@/components/wrappers/W_TestCardsWithTitle/W_TestCardsWithTitle'

import type { TestData } from '@/types/test'

export const getStaticProps = async () => {
  const tests = await getTests()
  return {
    props: { tests },
    revalidate: 60,
  }
}

export default function InteractivesPage({ tests }: { tests: TestData[] }) {
  return (
    <div className='page'>
      <SO_Header />
      <Q_Grid variant='gray' />
      <div className='preview_content_wrapper'>
        <h1>Интерактивы</h1>
        <M_InteractivesGeneratorDirectionPlate />
        <W_TestCardsWithTitle tests={tests} />
      </div>
      <W_StickersContainer />
      <O_Footer />
    </div>
  )
}
