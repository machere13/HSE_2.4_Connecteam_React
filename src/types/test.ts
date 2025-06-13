export interface TestAnswer {
  title: string
  isCorrect: boolean
}

export interface TestQuestion {
  id: number
  title: string
  answers: TestAnswer[]
}

export interface TestResult {
  score: number
  title: string
  description: string
}

export interface TestContent {
  questions: TestQuestion[]
  results: TestResult[]
}

export interface TestData {
  id: number
  slug: string
  metatags: {
    image: string
    type: string
  }
  title: string
  description: string
  cardDisplay: {
    background: string
    textColor: 'white' | 'black'
  }
  content: TestContent
}
