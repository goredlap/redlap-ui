# @goredlap/ui

Reusable React primitives for a restrained red-and-black interface with LaTeX-inspired STIX typography.

## Usage

```tsx
import { Button, Heading, Theme } from '@goredlap/ui'
import '@goredlap/ui/styles.css'

export function App() {
  return (
    <Theme appearance="light">
      <Heading as="h1">A precise interface.</Heading>
      <Button>Continue</Button>
    </Theme>
  )
}
```

`Theme` supports `appearance="dark"` (the default) and `appearance="light"`. The light
theme uses a warm `#fcf5ed` canvas rather than pure white.

Every component accepts native element props and `className`. Theme values are CSS custom properties prefixed with `--rl-`, so consuming applications can override the palette, spacing, or typography without changing component code.
