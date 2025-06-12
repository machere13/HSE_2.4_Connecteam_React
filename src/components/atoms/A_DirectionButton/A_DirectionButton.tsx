import type { ReactNode } from 'react'
import React from 'react'

import cn from 'classnames'
import Link from 'next/link'

import styles from './A_DirectionButton.module.css'

type ButtonVariant = 'purple' | 'pink' | 'blue' | 'orange'
type ButtonTextSize = 'l' | 's'

interface A_DirectionButtonProps {
  children: ReactNode
  href: string
  variant?: ButtonVariant
  font?: ButtonTextSize
}

export default function A_DirectionButton({
  children,
  href,
  variant = 'purple',
  font = 's',
}: A_DirectionButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        styles.wrapper,
        styles[variant],
        font === 's' ? 'text_button_s' : 'text_button_l',
      )}
    >
      {children}
    </Link>
  )
}
