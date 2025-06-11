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
  articleUrl = '',
  articleTitle = '',
}: A_ShareButtonProps) {
  const [isCopied, setIsCopied] = React.useState(false)

  const handleClick = () => {
    const url = articleUrl || (typeof window !== 'undefined' ? window.location.href : '')
    const title = articleTitle || (typeof window !== 'undefined' ? document.title : '')

    switch (name) {
      case 'copyLinkIcon':
        if (typeof navigator !== 'undefined' && navigator.clipboard) {
          navigator.clipboard.writeText(url)
          setIsCopied(true)
          setTimeout(() => setIsCopied(false), 2000)
        }
        break
      case 'vkIcon':
        if (typeof window !== 'undefined') {
          window.open(
            `https://vk.com/share.php?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`,
            '_blank',
          )
        }
        break
      case 'telegramIcon':
        if (typeof window !== 'undefined') {
          window.open(
            `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
            '_blank',
          )
        }
        break
      default:
        break
    }
  }

  return (
    <div className={styles.wrapper}>
      <button onClick={handleClick} className={styles.button} aria-label='Поделиться'>
        <div className={styles.icon_wrapper}>
          <Q_Icon
            name={name}
            className={styles.icon}
            fill={name !== 'copyLinkIcon' ? '#FFF' : undefined}
          />
        </div>
      </button>
      {name === 'copyLinkIcon' && isCopied && (
        <div className={styles.tooltip}>
          <p className='text_captions_l'>Ссылка скопирована!</p>
        </div>
      )}
    </div>
  )
}
