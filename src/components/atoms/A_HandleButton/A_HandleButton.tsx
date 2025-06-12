import type { ReactNode } from 'react'

import cn from 'classnames'

import styles from './A_HandleButton.module.css'

type ButtonVariant = 'pink_l' | 'pink_s' | 'orange'

interface A_HandleButtonProps {
  children?: ReactNode
  variant?: ButtonVariant
  onClick?: () => void
  disabled?: boolean
}

export default function A_HandleButton({
  children,
  variant = 'pink_s',
  onClick,
  disabled = false,
}: A_HandleButtonProps) {
  const handleClick = () => {
    if (disabled || !onClick) return
    onClick()
  }

  return (
    <button
      className={cn(styles.wrapper, 'text_button_l', styles[variant], disabled && styles.disabled)}
      onClick={handleClick}
      disabled={disabled}
      type='button'
    >
      {children}
    </button>
  )
}
