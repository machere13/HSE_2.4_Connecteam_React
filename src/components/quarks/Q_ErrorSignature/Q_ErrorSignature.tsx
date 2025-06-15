import Q_Icon from '../Q_Icon/Q_Icon'

import styles from './Q_ErrorSignature.module.css'

import type { ErrorType } from '@/types/error'

interface Q_ErrorSignatureProps {
  errorType?: ErrorType
  width?: string
  height?: string
}

const iconSizes: Record<string, { width: string; height: string }> = {
  errorSignature403Icon: { width: '581', height: '186' },
  errorSignature404Icon: { width: '581', height: '186' },
  errorSignature404ArticleIcon: { width: '581', height: '186' },
  errorSignature404CaseIcon: { width: '581', height: '186' },
  errorSignature404TestIcon: { width: '581', height: '186' },
  errorSignature418Icon: { width: '581', height: '186' },
  errorSignature500Icon: { width: '581', height: '186' },
  errorSignature502Icon: { width: '581', height: '186' },
  errorSignature505Icon: { width: '581', height: '186' },
}

export default function Q_ErrorSignature({
  errorType = '404',
  width,
  height,
}: Q_ErrorSignatureProps) {
  const getIconName = (type: ErrorType): string => {
    switch (type) {
      case '404-article':
        return 'errorSignature404ArticleIcon'
      case '404-case':
        return 'errorSignature404CaseIcon'
      case '404-test':
        return 'errorSignature404TestIcon'
      default:
        return `errorSignature${type}Icon`
    }
  }

  const iconName = getIconName(errorType)
  const defaultSize = iconSizes[iconName]

  return (
    <div className={styles.wrapper}>
      <Q_Icon
        name={iconName as any}
        className={styles.icon}
        width={width || defaultSize.width}
        height={height || defaultSize.height}
        viewBox={`0 0 ${defaultSize.width} ${defaultSize.height}`}
      />
    </div>
  )
}
