import React from 'react'

import Q_Icon from '@/components/quarks/Q_Icon/Q_Icon'

import styles from './A_BurgerMenuButton.module.css'

interface A_BurgerMenuButtonProps {
  onClick: () => void
}

export default function A_BurgerMenuButton({ onClick }: A_BurgerMenuButtonProps) {
  return (
    <button onClick={onClick} className={styles.wrapper}>
      <Q_Icon name='burgerMenuIcon' width='30' height='26' />
    </button>
  )
}
