import type { HTMLAttributes } from 'react'
import { classes } from './utils'

export type CardProps = HTMLAttributes<HTMLElement>

export function Card({ className, ...props }: CardProps) {
  return <article className={classes('rl-card', className)} {...props} />
}

export type CardSectionProps = HTMLAttributes<HTMLDivElement>

export function CardHeader({ className, ...props }: CardSectionProps) {
  return <div className={classes('rl-card__header', className)} {...props} />
}

export function CardContent({ className, ...props }: CardSectionProps) {
  return <div className={classes('rl-card__content', className)} {...props} />
}
