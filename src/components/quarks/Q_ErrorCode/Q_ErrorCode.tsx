import Q_Icon from '../Q_Icon/Q_Icon'

import styles from './Q_ErrorCode.module.css'

interface Q_ErrorCodeProps {
  errorType?: '403' | '404' | '418' | '500' | '502' | '505'
  width?: string
  height?: string
}

const iconSizes: Record<string, { width: string; height: string }> = {
  errorCode403Icon: { width: '368', height: '140' },
  errorCode404Icon: { width: '368', height: '140' },
  errorCode418Icon: { width: '235', height: '140' },
  errorCode500Icon: { width: '392', height: '140' },
  errorCode502Icon: { width: '358', height: '140' },
  errorCode505Icon: { width: '358', height: '140' },
}

export default function Q_ErrorCode({ errorType = '404', width, height }: Q_ErrorCodeProps) {
  const iconName = `errorCode${errorType}Icon` as const
  const defaultSize = iconSizes[iconName]

  return (
    <div className={styles.wrapper} style={{ maxWidth: `${defaultSize.width}px` }}>
      <Q_Icon
        name={iconName}
        className={styles.icon}
        width={width || defaultSize.width}
        height={height || defaultSize.height}
        viewBox={`0 0 ${defaultSize.width} ${defaultSize.height}`}
      />
    </div>
  )
}
