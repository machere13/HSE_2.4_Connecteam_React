import Q_Icon from '../Q_Icon/Q_Icon'

import styles from './Q_ErrorCode.module.css'

import type { ErrorType } from '@/types/error'

interface Q_ErrorCodeProps {
  errorType?: ErrorType
  width?: string
  height?: string
}

const iconSizes: Record<string, { width: string; height: string }> = {
  errorCode403Icon: { width: '368', height: '140' },
  errorCode404Icon: { width: '368', height: '140' },
  errorCode418Icon: { width: '235', height: '140' },
  errorCode500Icon: { width: '392', height: '140' },
  errorCode502Icon: { width: '358', height: '140' },
  errorCode505Icon: { width: '359', height: '140' },
}

export default function Q_ErrorCode({ errorType = '404', width, height }: Q_ErrorCodeProps) {
  const getIconName = (type: ErrorType): string => {
    if (type.startsWith('404-')) {
      return 'errorCode404Icon'
    }
    return `errorCode${type}Icon`
  }

  const iconName = getIconName(errorType)
  const defaultSize = iconSizes[iconName]
  const finalWidth = width || defaultSize.width
  const finalHeight = height || defaultSize.height

  return (
    <div className={styles.wrapper}>
      <div className={styles.icon_wrapper}>
        <Q_Icon
          name={
            iconName as
              | 'errorCode403Icon'
              | 'errorCode404Icon'
              | 'errorCode418Icon'
              | 'errorCode500Icon'
              | 'errorCode502Icon'
              | 'errorCode505Icon'
          }
          className={styles.icon}
          width="100%"
          height="100%"
          viewBox={`0 0 ${finalWidth} ${finalHeight}`}
        />
      </div>
    </div>
  )
}
