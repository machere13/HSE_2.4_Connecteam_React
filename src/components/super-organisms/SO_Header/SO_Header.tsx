import React, { useRef, useState } from 'react'

import Link from 'next/link'

import A_BurgerMenuButton from '@/components/atoms/A_BurgerMenuButton/A_BurgerMenuButton'
import O_HeaderBurgerMenu from '@/components/organisms/O_HeaderBurgerMenu/O_HeaderBurgerMenu'
import Q_Icon from '@/components/quarks/Q_Icon/Q_Icon'
import W_HeaderInteractive from '@/components/wrappers/W_HeaderInteractive/W_HeaderInteractive'
import { ROUTES } from '@/routes'

import styles from './SO_Header.module.css'

export default function SO_Header() {
  const headerRef = useRef<HTMLDivElement>(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className={styles.wrapper} ref={headerRef}>
      <Link href={ROUTES.MAIN} className={styles.logo_wrapper}>
        <Q_Icon name='logoFull' width='200' height='24' className={styles.logo_full} />
        <Q_Icon name='logoShort' width='44' height='32' className={styles.logo_short} />
      </Link>
      <W_HeaderInteractive />
      <A_BurgerMenuButton onClick={toggleMenu} />
      {isMenuOpen && <O_HeaderBurgerMenu />}
    </header>
  )
}
