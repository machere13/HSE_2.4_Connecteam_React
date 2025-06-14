export interface GeneratorParameters {
  teamSize: string[]
  duration: string[]
  purpose: string[]
  format: string[]
}

export interface GeneratorIdea {
  id: number
  title: string
  matches: {
    teamSize: string[]
    duration: string[]
    category: string[]
    format: string[]
  }
  content: (
    | {
        type: 'heading-3'
        text: string
      }
    | {
        type: 'titleParagraph'
        title: string
        text: string
      }
    | {
        type: 'purpleBox'
        title: string
        text: string
      }
    | {
        type: 'textList'
        title: string
        items: string[]
      }
    | {
        type: 'cardList'
        items: {
          title: string
          description: string
        }[]
      }
  )[]
}
