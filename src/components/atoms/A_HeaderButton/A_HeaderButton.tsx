import Link from 'next/link';
import cn from 'classnames'

import styles from './A_HeaderButton.module.css'

export interface A_HeaderButtonProps {
  label: string;
  to: string;
};

export default function A_HeaderButton({ label, to }: A_HeaderButtonProps) {
  return (
    <Link href={to} className={cn('text_description', styles.wrapper)}>
      {label}
    </Link>
  );
}