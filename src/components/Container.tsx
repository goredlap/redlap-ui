import type { HTMLAttributes } from 'react'
import { classes } from './utils'

export type ContainerProps = HTMLAttributes<HTMLDivElement>

export function Container({ className, ...props }: ContainerProps) {
  return <div className={classes('rl-container', className)} {...props} />
}
