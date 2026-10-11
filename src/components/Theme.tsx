import type { HTMLAttributes } from 'react'
import { classes } from './utils'

export type ThemeAppearance = 'dark' | 'light'

export interface ThemeProps extends HTMLAttributes<HTMLDivElement> {
  appearance?: ThemeAppearance
}

export function Theme({ appearance = 'dark', className, ...props }: ThemeProps) {
  return (
    <div
      className={classes('rl-theme', `rl-theme--${appearance}`, className)}
      data-rl-theme={appearance}
      {...props}
    />
  )
}
