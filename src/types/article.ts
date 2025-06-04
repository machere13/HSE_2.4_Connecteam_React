export interface ArticleAuthor {
  image: string
  name: string
  description: string
}

export type ArticleContentItem =
  | { type: 'heading-2'; text: string }
  | { type: 'heading-4'; text: string }
  | { type: 'tags'; items: string[] }
  | { type: 'image'; image: string; description?: string; alt: string }
  | { type: 'previewParagraph'; text: string }
  | { type: 'whiteBox'; title: string; text: string }
  | { type: 'paragraph'; text: string }
  | {
      type: 'elements'
      title: string
      items: { title: string; text: string; index: 1 | 2 | 3 | 4 }[]
    }
  | { type: 'telegram'; link: string }
  | { type: 'examples'; items: { title: string; text: string }[] }
  | { type: 'moreInCase'; link: string }
  | { type: 'highlightedSection'; title: string; titleType: 'small'; items: string[] }
  | { type: 'pointedSection'; title: string; items: string[] }
  | {
      type: 'cardList'
      title: string
      titleType: 'small'
      items: { title: string; description: string }[]
    }

export interface ArticleData {
  id: number
  slug: string
  updatedAt?: string
  metatags: {
    image: string
    type: string
  }
  title: string
  description: string
  cardDisplay: {
    background: string
    card: string
    rotate: string
    hasIcon: boolean
  }
  filter: string
  article: {
    author: ArticleAuthor
    type: 'big' | 'short' | 'superShort'
    content: ArticleContentItem[]
    stickers: string[]
  }
}
