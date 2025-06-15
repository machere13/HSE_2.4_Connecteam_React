import React from 'react'

import cn from 'classnames'
import { useRouter } from 'next/router'

import styles from './A_BackButton.module.css'

type ButtonVariant = 'orange' | 'pink'

interface A_BackButtonProps {
  href?: string
  onClick?: () => void
  children?: React.ReactNode
  variant?: ButtonVariant
}

export default function A_BackButton({
  href,
  onClick,
  children = 'Вернуться назад',
  variant = 'orange',
}: A_BackButtonProps) {
  const router = useRouter()

  const handleClick = async () => {
    if (onClick) {
      onClick()
    }
    if (href) {
      await router.replace(href)
    }
  }

  return (
    <button
      className={cn(styles.wrapper, 'text_button_l', styles[variant])}
      onClick={handleClick}
      type='button'
    >
      {children}
    </button>
  )
}
