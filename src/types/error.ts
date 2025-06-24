export type ErrorType =
  | '403'
  | '404'
  | '404-article'
  | '404-case'
  | '404-test'
  | '418'
  | '500'
  | '502'
  | '505'

export interface HttpError {
  status: number
  message?: string
}

export interface ApiError extends HttpError {
  response?: {
    status: number
    data?: {
      message?: string
    }
  }
}

declare global {
  interface Window {
    showError: (type: ErrorType) => void
  }
}
