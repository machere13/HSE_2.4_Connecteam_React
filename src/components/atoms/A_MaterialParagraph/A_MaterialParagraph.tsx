import React from 'react'

interface A_MaterialParagraphProps {
  text: string
}

export default function A_MaterialParagraph({ text }: A_MaterialParagraphProps) {
  return <p className='text_body_2'>{text}</p>
}
