import A_HeaderButton from "@/components/atoms/A_HeaderButton/A_HeaderButton"
import { ROUTES } from '@/routes'

import styles from './C_HeaderNavigation.module.css'

export default function C_HeaderNavigation() {
  return (
    <nav className={styles.wrapper}>
      <A_HeaderButton to={ROUTES.ABOUT} label='О нас'></A_HeaderButton>
      <A_HeaderButton to={ROUTES.ARTICLES.INDEX} label='Статьи'></A_HeaderButton>
      <A_HeaderButton to={ROUTES.CASES.INDEX} label='Кейсы'></A_HeaderButton>
      <A_HeaderButton to={ROUTES.INTERACTIVES.INDEX} label='Интерактивы'></A_HeaderButton>
    </nav>
  )
}