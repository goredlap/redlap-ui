import { forwardRef, useId, type InputHTMLAttributes, type ReactNode } from 'react'
import { classes } from './utils'

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: ReactNode
  hint?: ReactNode
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(function TextInput(
  { className, label, hint, id: providedId, ...props },
  ref,
) {
  const generatedId = useId()
  const id = providedId ?? generatedId
  const hintId = hint ? `${id}-hint` : undefined

  return (
    <label className="rl-field" htmlFor={id}>
      <span className="rl-field__label">{label}</span>
      <input
        ref={ref}
        id={id}
        className={classes('rl-input', className)}
        aria-describedby={hintId}
        {...props}
      />
      {hint ? (
        <span className="rl-field__hint" id={hintId}>
          {hint}
        </span>
      ) : null}
    </label>
  )
})
