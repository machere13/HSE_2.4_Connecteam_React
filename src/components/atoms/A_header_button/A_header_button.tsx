import Link from 'next/link';
import cn from 'classnames'

import styles from './A_header_button.module.css'

export interface A_header_button_Props {
  label: string;
  to: string;
};

export default function A_header_button({ label, to }: A_header_button_Props) {
  return (
    <Link href={to} className={cn('text_description', styles.wrapper)}>
      {label}
    </Link>
  );
}