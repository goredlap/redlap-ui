# @redlap/ui

Reusable React primitives for a restrained red-and-black interface with LaTeX-inspired STIX typography.

## Usage

```tsx
import { Button, Heading, Theme } from '@redlap/ui'
import '@redlap/ui/styles.css'

export function App() {
  return (
    <Theme>
      <Heading as="h1">A precise interface.</Heading>
      <Button>Continue</Button>
    </Theme>
  )
}
```

Every component accepts native element props and `className`. Theme values are CSS custom properties prefixed with `--rl-`, so consuming applications can override the palette, spacing, or typography without changing component code.
