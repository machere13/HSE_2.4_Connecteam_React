import O_Footer from '@/components/organisms/O_Footer/O_Footer'
import SO_Header from '@/components/super-organisms/SO_Header/SO_Header'
import W_ErrorBlock from '@/components/wrappers/W_ErrorBlock/W_ErrorBlock'

import styles from './T_ErrorPage.module.css'

interface ErrorTemplateProps {
  errorType?: '403' | '404' | '418' | '500' | '502' | '505'
  homeUrl?: string
  onClose?: () => void
}

export const T_ErrorPage = ({ errorType = '404', homeUrl = '/', onClose }: ErrorTemplateProps) => {
  return (
    <div className={styles.wrapper}>
      <SO_Header />
      <W_ErrorBlock errorType={errorType} homeUrl={homeUrl} onClose={onClose} />
      <O_Footer />
    </div>
  )
}
