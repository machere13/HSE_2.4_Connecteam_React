export interface CaseAuthor {
  image: string
  name: string
  description: string
}

export interface CaseComment {
  comment: string
  author: string
}

export type CaseContentItem =
  | { type: 'heading-2'; text: string }
  | { type: 'tags'; items: string[] }
  | { type: 'image'; image: string; description?: string; alt: string }
  | { type: 'previewParagraph'; text: string }
  | { type: 'titleParagraph'; title: string; text: string }
  | { type: 'paragraph'; text: string }
  | {
      type: 'cardList'
      title?: string
      titleType?: 'small'
      items: { title: string; description: string }[]
    }
  | { type: 'telegram'; link: string }
  | { type: 'video'; title: string; video: string }
  | { type: 'highlightedSection'; title: string; titleType: 'small'; items: string[] }

export interface CaseData {
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
    card: 'big' | 'standard'
    rotate: 'left' | 'right' | 'none'
    textColor: 'white' | 'black'
    hasIcon: boolean
    comingSoon: boolean
  }
  filter: string
  case: {
    author: CaseAuthor
    type: string
    content: CaseContentItem[]
    stickers: string[]
    comments: CaseComment[]
  }
}
