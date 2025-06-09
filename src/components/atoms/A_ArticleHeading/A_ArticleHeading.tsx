interface A_ArticleHeadingProps {
  text: string
  level: 2 | 4
}

export const A_ArticleHeading = ({ text, level }: A_ArticleHeadingProps) => {
  const TitleTag = level === 2 ? 'h2' : 'h4'
  return <TitleTag>{text}</TitleTag>
}
