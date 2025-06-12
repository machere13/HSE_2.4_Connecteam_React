import React from 'react'

import cn from 'classnames'
import Link from 'next/link'

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
  const buttonContent = (
    <button
      className={cn(styles.wrapper, 'text_button_l', styles[variant])}
      onClick={onClick}
      type='button'
    >
      {children}
    </button>
  )

  if (href) {
    return <Link href={href}>{buttonContent}</Link>
  }

  return buttonContent
}
