import React from 'react';
import { ReactComponent as SearchIcon } from '@/assets/icons/SearchIcon.svg';
import { ReactComponent as LinkIcon } from '@/assets/icons/LinkIcon.svg';
import { ReactComponent as TelegramIcon } from '@/assets/icons/TelegramIcon.svg';
import { ReactComponent as VkIcon } from '@/assets/icons/VkIcon.svg';
import { ReactComponent as YoutubeIcon } from '@/assets/icons/YoutubeIcon.svg';
import { ReactComponent as  ThunderIcon } from '@/assets/icons/ThunderIcon.svg'

export type IconProps = {
  name:
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
    searchIcon: SearchIcon,
    linkIcon: LinkIcon,
    telegramIcon: TelegramIcon,
    vkIcon: VkIcon,
    youtubeIcon: YoutubeIcon,
    thunderIcon: ThunderIcon
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