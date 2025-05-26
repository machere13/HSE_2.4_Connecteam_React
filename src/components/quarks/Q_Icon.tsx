import React from 'react'

import CloseIcon from '@/assets/icons/CloseIcon.svg'
import CursorIcon from '@/assets/icons/CursorIcon.svg'
import HeaderSearchResultsLoaderIcon from '@/assets/icons/HeaderSearchResultsLoaderIcon.svg'
import LinkIcon from '@/assets/icons/LinkIcon.svg'
import LogoFull from '@/assets/icons/LogoFull.svg'
import SearchIcon from '@/assets/icons/SearchIcon.svg'
import TelegramIcon from '@/assets/icons/TelegramIcon.svg'
import ThunderIcon from '@/assets/icons/ThunderIcon.svg'
import VkIcon from '@/assets/icons/VkIcon.svg'
import YoutubeIcon from '@/assets/icons/YoutubeIcon.svg'
import ErrorCode403Icon from '@/assets/icons/ErrorIcons/Q_ErrorCode/Code403.svg'
import ErrorCode404Icon from '@/assets/icons/ErrorIcons/Q_ErrorCode/Code404.svg'
import ErrorCode418Icon from '@/assets/icons/ErrorIcons/Q_ErrorCode/Code418.svg'
import ErrorCode500Icon from '@/assets/icons/ErrorIcons/Q_ErrorCode/Code500.svg'
import ErrorCode502Icon from '@/assets/icons/ErrorIcons/Q_ErrorCode/Code502.svg'
import ErrorCode505Icon from '@/assets/icons/ErrorIcons/Q_ErrorCode/Code505.svg'
import ErrorSignature403Icon from '@/assets/icons/ErrorIcons/Q_ErrorSignature/Signature403.svg'
import ErrorSignature404Icon from '@/assets/icons/ErrorIcons/Q_ErrorSignature/Signature404.svg'
import ErrorSignature418Icon from '@/assets/icons/ErrorIcons/Q_ErrorSignature/Signature418.svg'
import ErrorSignature500Icon from '@/assets/icons/ErrorIcons/Q_ErrorSignature/Signature500.svg'
import ErrorSignature502Icon from '@/assets/icons/ErrorIcons/Q_ErrorSignature/Signature502.svg'
import ErrorSignature505Icon from '@/assets/icons/ErrorIcons/Q_ErrorSignature/Signature505.svg'

export type Q_IconProps = {
  name:
    | 'logoFull'
    | 'searchIcon'
    | 'linkIcon'
    | 'telegramIcon'
    | 'vkIcon'
    | 'youtubeIcon'
    | 'thunderIcon'
    | 'cursorIcon'
    | 'closeIcon'
    | 'headerSearchResultsLoaderIcon'
    | 'errorCode403Icon'
    | 'errorCode404Icon'
    | 'errorCode418Icon'
    | 'errorCode500Icon'
    | 'errorCode502Icon'
    | 'errorCode505Icon'
    | 'errorSignature403Icon'
    | 'errorSignature404Icon'
    | 'errorSignature418Icon'
    | 'errorSignature500Icon'
    | 'errorSignature502Icon'
    | 'errorSignature505Icon'
  width?: string
  height?: string
  fill?: string
  className?: string
  onClick?: () => void
}

const Q_Icon: React.FC<Q_IconProps> = ({
  name,
  width = '24',
  height = '24',
  fill = 'none',
  className,
  onClick,
}) => {
  const icons: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
    logoFull: LogoFull,
    searchIcon: SearchIcon,
    linkIcon: LinkIcon,
    telegramIcon: TelegramIcon,
    vkIcon: VkIcon,
    youtubeIcon: YoutubeIcon,
    thunderIcon: ThunderIcon,
    cursorIcon: CursorIcon,
    closeIcon: CloseIcon,
    headerSearchResultsLoaderIcon: HeaderSearchResultsLoaderIcon,
    errorCode403Icon: ErrorCode403Icon,
    errorCode404Icon: ErrorCode404Icon,
    errorCode418Icon: ErrorCode418Icon,
    errorCode500Icon: ErrorCode500Icon,
    errorCode502Icon: ErrorCode502Icon,
    errorCode505Icon: ErrorCode505Icon,
    errorSignature403Icon: ErrorSignature403Icon,
    errorSignature404Icon: ErrorSignature404Icon,
    errorSignature418Icon: ErrorSignature418Icon,
    errorSignature500Icon: ErrorSignature500Icon,
    errorSignature502Icon: ErrorSignature502Icon,
    errorSignature505Icon: ErrorSignature505Icon,
  }

  const SvgIcon = icons[name]

  return (
    <SvgIcon width={width} height={height} fill={fill} className={className} onClick={onClick} />
  )
}

export default Q_Icon
