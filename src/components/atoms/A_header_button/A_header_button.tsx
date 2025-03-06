import { Link } from "react-router-dom";
import cn from 'classnames'

import styles from './A_header_button.module.css'

export interface A_header_button_Props {
  label: string;
  to: string;
};

export default function A_header_button({ label, to }: A_header_button_Props) {
  return (
    <Link to={to} className={cn('text_button', styles.wrapper)}>
      {label}
    </Link>
  );
}