interface A_ArticleParagraphProps {
  text: string
}

export const A_ArticleParagraph = ({ text }: A_ArticleParagraphProps) => {
  return <p className='text_body_2'>{text}</p>
}
