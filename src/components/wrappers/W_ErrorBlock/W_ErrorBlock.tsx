import A_BackButton from '@/components/atoms/A_BackButton/A_BackButton'
import Q_ErrorCode from '@/components/quarks/Q_ErrorCode/Q_ErrorCode'
import Q_ErrorSignature from '@/components/quarks/Q_ErrorSignature/Q_ErrorSignature'
import { ROUTES } from '@/routes'

import styles from './W_ErrorBlock.module.css'

interface W_ErrorBlockProps {
  errorType: '403' | '404' | '418' | '500' | '502' | '505'
  onClose?: () => void
}

export default function W_ErrorBlock({ errorType = '404', onClose }: W_ErrorBlockProps) {
  return (
    <div className={styles.wrapper}>
      <Q_ErrorCode errorType={errorType} />
      <Q_ErrorSignature errorType={errorType} />

      <A_BackButton onClick={onClose} href={ROUTES.MAIN}>
        Вернуться на главную
      </A_BackButton>
    </div>
  )
}
