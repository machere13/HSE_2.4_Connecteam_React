import React from 'react'

import cn from 'classnames'

import styles from './A_MaterialParagraph.module.css'

interface A_MaterialParagraphProps {
  text: string
}

export default function A_MaterialParagraph({ text }: A_MaterialParagraphProps) {
  return <p className={cn(styles.wrapper, 'text_body_2')}>{text}</p>
}
