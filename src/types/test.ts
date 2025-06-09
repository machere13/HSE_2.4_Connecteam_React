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
  title: string
  description: string
  background: string
  slug: string
  content: TestContent
}

export interface Test {
  id: number
  slug: string
  title: string
  description: string
  background: string
  content: TestContent
}
