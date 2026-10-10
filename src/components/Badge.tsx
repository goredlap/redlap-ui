import type { HTMLAttributes } from 'react'
import { classes } from './utils'

export type BadgeProps = HTMLAttributes<HTMLSpanElement>

export function Badge({ className, ...props }: BadgeProps) {
  return <span className={classes('rl-badge', className)} {...props} />
}
