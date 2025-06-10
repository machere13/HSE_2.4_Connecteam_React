export type CursorStyle = 'orbital' | 'wave'

export interface CursorConfig {
  style: CursorStyle
  icon: string
  speed: number
  color: string
  label: string
}
