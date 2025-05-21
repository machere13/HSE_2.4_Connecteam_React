import cn from 'classnames'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import styles from './A_HeaderButton.module.css'

export interface A_HeaderButtonProps {
  label: string
  to: string
}

export default function A_HeaderButton({ label, to }: A_HeaderButtonProps) {
  const pathname = usePathname()
  const isActive = pathname === to || pathname.startsWith(to + '/')

  return (
    <Link
      href={to}
      className={cn('text_button_s', styles.wrapper, {
        [styles.active]: isActive,
      })}
    >
      {label}
    </Link>
  )
}
