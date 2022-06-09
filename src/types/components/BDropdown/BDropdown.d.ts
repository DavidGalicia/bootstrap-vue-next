import * as Popper from '@popperjs/core'
// Props
export interface Props {
  id: string
  menuClass: Array | Record<string, unknown> | string
  size: Size
  splitClass: Array | Record<string, unknown> | string
  splitVariant: ButtonVariant
  text: string
  toggleClass: Array | Record<string, unknown> | string
  autoClose?: boolean | string
  block?: boolean
  boundary?: Popper.Boundary
  dark?: boolean
  disabled?: boolean
  dropup?: boolean
  dropright?: boolean
  dropleft?: boolean
  noFlip?: boolean
  offset?: number | string
  popperOpts?: Record<string, unknown>
  right?: boolean
  role?: string
  split?: boolean
  splitButtonType?: 'button' | 'submit' | 'reset'
  splitHref?: string
  noCaret?: boolean
  toggleText?: string
  variant?: ButtonVariant
}
// Emits
export interface Emits {
  (e: 'show'): void
  (e: 'shown'): void
  (e: 'hide'): void
  (e: 'hidden'): void
}
// Other