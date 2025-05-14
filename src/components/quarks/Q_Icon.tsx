import React from 'react'

import CursorIcon from '@/assets/icons/CursorIcon.svg'
import LinkIcon from '@/assets/icons/LinkIcon.svg'
import LogoFull from '@/assets/icons/LogoFull.svg'
import SearchIcon from '@/assets/icons/SearchIcon.svg'
import ThunderIcon from '@/assets/icons/ThunderIcon.svg'
import TelegramIcon from '@/assets/icons/TelegramIcon.svg'
import VKIcon from '@/assets/icons/VKIcon.svg'
import YoutubeIcon from '@/assets/icons/YoutubeIcon.svg'

export type IconProps = {
  name:
    | 'logoFull'
    | 'searchIcon'
    | 'linkIcon'
    | 'telegramIcon'
    | 'vkIcon'
    | 'youtubeIcon'
    | 'thunderIcon'
    | 'cursorIcon'
  width?: string
  height?: string
  fill?: string
  className?: string
  onClick?: () => void
}

const Q_Icon: React.FC<IconProps> = ({
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
    vkIcon: VKIcon,
    youtubeIcon: YoutubeIcon,
    thunderIcon: ThunderIcon,
    cursorIcon: CursorIcon,
  }

  const SvgIcon = icons[name]

  return (
    <SvgIcon width={width} height={height} fill={fill} className={className} onClick={onClick} />
  )
}

export default Q_Icon
