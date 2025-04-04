import A_header_button from "@/components/atoms/A_header_button/A_header_button"
import { ROUTES } from '@/routes'

import styles from './C_header_navigation.module.css'

export default function C_header_navigation() {
  return (
    <div className={styles.wrapper}>
      <A_header_button to={ROUTES.ABOUT} label='О нас'></A_header_button>
      <A_header_button to={ROUTES.ARTICLES.INDEX} label='Статьи'></A_header_button>
      <A_header_button to={ROUTES.CASES.INDEX} label='Кейсы'></A_header_button>
      <A_header_button to={ROUTES.INTERACTIVES.INDEX} label='Интерактивы'></A_header_button>
    </div>
  )
}