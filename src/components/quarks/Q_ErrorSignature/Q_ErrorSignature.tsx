import Q_Icon from '../Q_Icon'

import styles from './Q_ErrorSignature.module.css'

interface Q_ErrorSignatureProps {
  errorType?: '403' | '404' | '418' | '500' | '502' | '505'
  width?: string
  height?: string
}

const iconSizes: Record<string, { width: string; height: string }> = {
  errorSignature403Icon: { width: '581', height: '186' },
  errorSignature404Icon: { width: '581', height: '186' },
  errorSignature418Icon: { width: '581', height: '186' },
  errorSignature500Icon: { width: '581', height: '186' },
  errorSignature502Icon: { width: '581', height: '186' },
  errorSignature505Icon: { width: '581', height: '186' },
}

export default function Q_ErrorSignature({ errorType = '404' }: Q_ErrorSignatureProps) {
  const iconName = `errorSignature${errorType}Icon` as const
  const size = iconSizes[iconName] || { width: '581', height: '186' }

  return (
    <div className={styles.wrapper}>
      <Q_Icon name={iconName} className={styles.icon} />
    </div>
  )
}
