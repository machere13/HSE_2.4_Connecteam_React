import React from 'react'

import A_Photo from '@/components/atoms/A_Photo/A_Photo'

import styles from './M_Person.module.css'

export interface M_PersonProps {
  name: string
  role: string
  photoSrc: string
  photoAlt?: string
}

export default function M_Person({ name, role, photoSrc, photoAlt }: M_PersonProps) {
  return (
    <div className={styles.wrapper}>
      <A_Photo src={photoSrc} alt={photoAlt || name} />
      <div className={styles.name_wrapper}>
        <p>{name}</p>
        <p className='text_body_2'>{role}</p>
      </div>
    </div>
  )
}
