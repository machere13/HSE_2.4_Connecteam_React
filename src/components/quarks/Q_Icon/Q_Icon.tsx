import React from 'react'

import BurgerMenuIcon from '@/assets/icons/BurgerMenuIcon.svg'
import CloseIcon from '@/assets/icons/CloseIcon.svg'
import CopyLinkIcon from '@/assets/icons/CopyLinkIcon.svg'
import CursorIcon from '@/assets/icons/CursorIcon.svg'
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
import HeaderSearchResultsLoaderIcon from '@/assets/icons/HeaderSearchResultsLoaderIcon.svg'
import LinkIcon from '@/assets/icons/LinkIcon.svg'
import LogoFull from '@/assets/icons/LogoFull.svg'
import LogoShort from '@/assets/icons/LogoShort.svg'
import M_ArticleElementItemIcon01 from '@/assets/icons/M_ArticleElementItem/M_ArticleElementItemIcon01.svg'
import M_ArticleElementItemIcon02 from '@/assets/icons/M_ArticleElementItem/M_ArticleElementItemIcon02.svg'
import M_ArticleElementItemIcon03 from '@/assets/icons/M_ArticleElementItem/M_ArticleElementItemIcon03.svg'
import M_ArticleElementItemIcon04 from '@/assets/icons/M_ArticleElementItem/M_ArticleElementItemIcon04.svg'
import SearchIcon from '@/assets/icons/SearchIcon.svg'
import TelegramIcon from '@/assets/icons/TelegramIcon.svg'
import ThunderIcon from '@/assets/icons/ThunderIcon.svg'
import VkIcon from '@/assets/icons/VkIcon.svg'
import YoutubeIcon from '@/assets/icons/YoutubeIcon.svg'

export type Q_IconProps = {
  name:
    | 'logoFull'
    | 'logoShort'
    | 'searchIcon'
    | 'linkIcon'
    | 'telegramIcon'
    | 'vkIcon'
    | 'youtubeIcon'
    | 'thunderIcon'
    | 'cursorIcon'
    | 'closeIcon'
    | 'copyLinkIcon'
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
    | 'burgerMenuIcon'
    | 'articleElementItemIcon01'
    | 'articleElementItemIcon02'
    | 'articleElementItemIcon03'
    | 'articleElementItemIcon04'
  width?: string
  height?: string
  fill?: string
  className?: string
  onClick?: () => void
  viewBox?: string
}

const Q_Icon: React.FC<Q_IconProps> = ({
  name,
  width,
  height,
  fill = 'none',
  className,
  onClick,
  viewBox,
}) => {
  const icons: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
    logoFull: LogoFull,
    logoShort: LogoShort,
    searchIcon: SearchIcon,
    linkIcon: LinkIcon,
    telegramIcon: TelegramIcon,
    vkIcon: VkIcon,
    youtubeIcon: YoutubeIcon,
    thunderIcon: ThunderIcon,
    cursorIcon: CursorIcon,
    closeIcon: CloseIcon,
    copyLinkIcon: CopyLinkIcon,
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
    burgerMenuIcon: BurgerMenuIcon,
    articleElementItemIcon01: M_ArticleElementItemIcon01,
    articleElementItemIcon02: M_ArticleElementItemIcon02,
    articleElementItemIcon03: M_ArticleElementItemIcon03,
    articleElementItemIcon04: M_ArticleElementItemIcon04,
  }

  const SvgIcon = icons[name]

  return (
    <SvgIcon
      width={width}
      height={height}
      fill={fill}
      className={className}
      onClick={onClick}
      viewBox={name === 'logoFull' ? '0 0 200 24' : viewBox || '0 0 36 36'}
      preserveAspectRatio={name === 'logoFull' ? 'none' : 'xMidYMid meet'}
      style={{
        overflow: 'visible',
        width: width,
        height: height,
      }}
    />
  )
}

export default Q_Icon
