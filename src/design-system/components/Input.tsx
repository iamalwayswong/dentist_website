import { forwardRef, useId } from 'react';
import type { InputHTMLAttributes } from 'react';
import { cx } from '../utils';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  hint?: string;
  error?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { label, hint, error, id, className, ...rest },
  ref,
) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const hintId = hint ? `${inputId}-hint` : undefined;
  const errorId = error ? `${inputId}-error` : undefined;
  const describedBy = [hintId, errorId].filter(Boolean).join(' ') || undefined;

  return (
    <div className={cx('flex flex-col gap-2', className)}>
      {label && (
        <label
          htmlFor={inputId}
          className="text-base font-semibold text-accent"
        >
          {label}
        </label>
      )}
      <input
        ref={ref}
        id={inputId}
        aria-describedby={describedBy}
        aria-invalid={error ? true : undefined}
        className={cx(
          'h-[54px] w-full rounded-md border bg-surface px-4 text-base text-fg',
          'placeholder:text-fg-subtle',
          'transition-colors duration-base ease-standard',
          error ? 'border-danger' : 'border-border',
        )}
        {...rest}
      />
      {hint && !error && (
        <p id={hintId} className="text-sm text-fg-muted">
          {hint}
        </p>
      )}
      {error && (
        <p id={errorId} className="text-sm text-danger">
          {error}
        </p>
      )}
    </div>
  );
});
