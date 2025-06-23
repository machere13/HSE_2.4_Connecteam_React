import React, { useEffect, useRef } from 'react'

import { gsap } from 'gsap'

import A_FooterButton from '@/components/atoms/A_FooterButton/A_FooterButton'
import C_HeaderNavigation from '@/components/collections/C_HeaderNavigation/C_HeaderNavigation'
import Q_Icon from '@/components/quarks/Q_Icon/Q_Icon'

import styles from './O_HeaderBurgerMenu.module.css'

interface O_HeaderBurgerMenuProps {
  onClose: () => void
}

export default function O_HeaderBurgerMenu({ onClose }: O_HeaderBurgerMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (menuRef.current) {
      gsap.set(menuRef.current, { x: '100%' })

      gsap.to(menuRef.current, {
        x: 0,
        duration: 0.3,
        ease: 'power2.out',
      })
    }
  }, [])

  const handleClose = () => {
    if (menuRef.current) {
      gsap.to(menuRef.current, {
        x: '100%',
        duration: 0.3,
        ease: 'power2.in',
        onComplete: onClose,
      })
    } else {
      onClose()
    }
  }

  return (
    <div className={styles.wrapper} ref={menuRef}>
      <button className={styles.close_button} onClick={handleClose}>
        <Q_Icon name='closeIcon' width='24' height='24' viewBox='0 0 12 12' />
      </button>
      <div className={styles.content}>
        <C_HeaderNavigation />
        <div className={styles.social_buttons}>
          <A_FooterButton to='https://t.me/connecteam' iconName='telegramIcon' />
          <A_FooterButton to='https://vk.com/club228014641' iconName='vkIcon' />
        </div>
      </div>
    </div>
  )
}
