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
  content: {
    type: string
    text?: string
    title?: string
    items?: string[] | { title: string; description: string }[]
  }[]
}
