export type CursorStyle = 'orbital' | 'wave' | 'product-demo'

export interface CursorConfig {
  style: CursorStyle
  icon: string
  speed: number
  color: string
  label: string
}
