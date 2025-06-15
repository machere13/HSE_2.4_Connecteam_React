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

declare global {
  interface Window {
    showError: (type: ErrorType) => void
  }
}
