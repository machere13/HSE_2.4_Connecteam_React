import A_header_button from "@/components/atoms/A_header_button/A_header_button"
import { PREVIEW_PAGE, ARTICLES_PAGE, CASES_PAGE, INTERACTIVES_PAGE } from "@/router/paths"

import styles from './C_header_navigation.module.css'

export default function C_header_navigation() {
  return (
    <div className={styles.wrapper}>
        <A_header_button to={PREVIEW_PAGE} label='О нас'></A_header_button>
        <A_header_button to={ARTICLES_PAGE} label='Статьи'></A_header_button>
        <A_header_button to={CASES_PAGE} label='Кейсы'></A_header_button>
        <A_header_button to={INTERACTIVES_PAGE} label='Интерактивы'></A_header_button>
    </div>
  )
}