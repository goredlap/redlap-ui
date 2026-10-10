import type { HTMLAttributes } from 'react'
import { classes } from './utils'

type HeadingElement = 'h1' | 'h2' | 'h3' | 'h4'

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: HeadingElement
}

export function Heading({ as: Element = 'h2', className, ...props }: HeadingProps) {
  return <Element className={classes('rl-heading', `rl-heading--${Element}`, className)} {...props} />
}

export interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  tone?: 'default' | 'muted' | 'accent'
}

export function Text({ className, tone = 'default', ...props }: TextProps) {
  return <p className={classes('rl-text', `rl-text--${tone}`, className)} {...props} />
}
