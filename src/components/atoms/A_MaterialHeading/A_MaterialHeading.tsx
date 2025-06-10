import React from 'react'

interface A_MaterialHeadingProps {
  text: string
  level: 2 | 4
}

export default function A_MaterialHeading({ text, level }: A_MaterialHeadingProps) {
  const TitleTag = level === 2 ? 'h2' : 'h4'
  return <TitleTag>{text}</TitleTag>
}
