import type { HTMLAttributes } from 'react'
import { classes } from './utils'

export type ThemeProps = HTMLAttributes<HTMLDivElement>

export function Theme({ className, ...props }: ThemeProps) {
  return <div className={classes('rl-theme', className)} {...props} />
}
