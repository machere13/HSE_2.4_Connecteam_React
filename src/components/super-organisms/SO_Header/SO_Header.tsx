import React, { useRef, useState, useEffect } from 'react'

import cn from 'classnames'
import { gsap } from 'gsap'
import Link from 'next/link'

import A_BurgerMenuButton from '@/components/atoms/A_BurgerMenuButton/A_BurgerMenuButton'
import O_HeaderBurgerMenu from '@/components/organisms/O_HeaderBurgerMenu/O_HeaderBurgerMenu'
import Q_Icon from '@/components/quarks/Q_Icon/Q_Icon'
import W_HeaderInteractive from '@/components/wrappers/W_HeaderInteractive/W_HeaderInteractive'
import { ROUTES } from '@/routes'

import styles from './SO_Header.module.css'

interface SO_HeaderProps {
  position?: 'default' | 'absolute'
}

export default function SO_Header({ position = 'default' }: SO_HeaderProps) {
  const headerRef = useRef<HTMLDivElement>(null)
  const overlayRef = useRef<HTMLButtonElement>(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    if (overlayRef.current) {
      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.2,
        ease: 'power2.out',
      })
    }

    setTimeout(() => {
      setIsMenuOpen(false)
    }, 300)
  }

  useEffect(() => {
    if (isMenuOpen && overlayRef.current) {
      gsap.set(overlayRef.current, { opacity: 0 })
      gsap.to(overlayRef.current, {
        opacity: 1,
        duration: 0.2,
        ease: 'power2.out',
      })
    }
  }, [isMenuOpen])

  return (
    <>
      {isMenuOpen && (
        <button
          ref={overlayRef}
          className={styles.overlay}
          onClick={closeMenu}
          aria-label='Закрыть меню'
        />
      )}
      <header className={cn(styles.wrapper, styles[position])} ref={headerRef}>
        <Link href={ROUTES.MAIN} className={styles.logo_wrapper}>
          <Q_Icon name='logoFull' width='200' height='24' className={styles.logo_full} />
          <Q_Icon name='logoShort' width='44' height='32' className={styles.logo_short} />
        </Link>
        <W_HeaderInteractive />
        <A_BurgerMenuButton onClick={toggleMenu} />
      </header>
      {isMenuOpen && <O_HeaderBurgerMenu onClose={closeMenu} />}
    </>
  )
}
