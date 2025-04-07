import React from 'react';
import LogoFull from '@/assets/icons/LogoFull.svg';
import SearchIcon from '@/assets/icons/SearchIcon.svg';
import LinkIcon from '@/assets/icons/LinkIcon.svg';
import TelegramIcon from '@/assets/icons/TelegramIcon.svg';
import VkIcon from '@/assets/icons/VkIcon.svg';
import YoutubeIcon from '@/assets/icons/YoutubeIcon.svg';
import ThunderIcon from '@/assets/icons/ThunderIcon.svg'

export type IconProps = {
  name:
    | 'logoFull'
    | 'searchIcon'
    | 'linkIcon'
    | 'telegramIcon'
    | 'vkIcon'
    | 'youtubeIcon'
    | 'thunderIcon'
  width?: string;
  height?: string;
  fill?: string;
  className?: string;
  onClick?: () => void;
};

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
    vkIcon: VkIcon,
    youtubeIcon: YoutubeIcon,
    thunderIcon: ThunderIcon,
  };

  const SvgIcon = icons[name];

  return (
    <SvgIcon
      width={width}
      height={height}
      fill={fill}
      className={className}
      onClick={onClick}
    />
  );
};

export default Q_Icon;