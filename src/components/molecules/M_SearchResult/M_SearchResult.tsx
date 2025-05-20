import React from 'react'

import Link from 'next/link'

import styles from './M_SearchResult.module.css'

interface M_SearchResultProps {
  href: string
  title: string
  description: string
}

export default function M_SearchResult({ href, title, description }: M_SearchResultProps) {
  return (
    <Link className={styles.wrapper} href={href}>
      <p className='text_captions_l'>{title}</p>
      <p className='text_captions_s'>{description}</p>
    </Link>
  )
}
