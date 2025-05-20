import Image from 'next/image'

import styles from './A_Photo.module.css'

import type { StaticImageData } from 'next/image'

export interface A_PhotoProps {
  src: string | StaticImageData
  alt: string
}

export default function A_Photo({ src, alt }: A_PhotoProps) {
  return (
    <div className={styles.wrapper}>
      <Image src={src} alt={alt} />
    </div>
  )
}
