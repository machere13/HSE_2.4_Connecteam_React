import React from 'react'

import Q_Icon from '@/components/quarks/Q_Icon/Q_Icon'

import styles from './A_ShareButton.module.css'

interface A_ShareButtonProps {
  name: 'copyLinkIcon' | 'vkIcon' | 'telegramIcon'
  articleUrl?: string
  articleTitle?: string
}

export default function A_ShareButton({
  name,
  articleUrl = window.location.href,
  articleTitle = document.title,
}: A_ShareButtonProps) {
  const [isCopied, setIsCopied] = React.useState(false)

  const handleClick = () => {
    switch (name) {
      case 'copyLinkIcon':
        navigator.clipboard.writeText(articleUrl)
        setIsCopied(true)
        setTimeout(() => setIsCopied(false), 2000)
        break
      case 'vkIcon':
        window.open(
          `https://vk.com/share.php?url=${encodeURIComponent(articleUrl)}&title=${encodeURIComponent(articleTitle)}`,
          '_blank',
        )
        break
      case 'telegramIcon':
        window.open(
          `https://t.me/share/url?url=${encodeURIComponent(articleUrl)}&text=${encodeURIComponent(articleTitle)}`,
          '_blank',
        )
        break
      default:
        break
    }
  }

  return (
    <div className={styles.wrapper}>
      <button onClick={handleClick} className={styles.button} aria-label='Поделиться'>
        <Q_Icon name={name} width='36' height='36' />
      </button>
      {name === 'copyLinkIcon' && isCopied && (
        <div className={styles.tooltip}>
            <p className='text_captions_l'>Ссылка скопирована!</p>
        </div>
      )}
    </div>
  )
}
