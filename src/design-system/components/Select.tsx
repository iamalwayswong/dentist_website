import { forwardRef, useId } from 'react';
import type { SelectHTMLAttributes } from 'react';
import { cx } from '../utils';

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label?: string;
  hint?: string;
  error?: string;
  options: { value: string; label: string }[];
  placeholder?: string;
};

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  function Select(
    { label, hint, error, id, className, options, placeholder, ...rest },
    ref,
  ) {
    const generatedId = useId();
    const selectId = id ?? generatedId;
    const hintId = hint ? `${selectId}-hint` : undefined;
    const errorId = error ? `${selectId}-error` : undefined;
    const describedBy =
      [hintId, errorId].filter(Boolean).join(' ') || undefined;

    return (
      <div className={cx('flex flex-col gap-2', className)}>
        {label && (
          <label
            htmlFor={selectId}
            className="text-base font-semibold text-accent"
          >
            {label}
          </label>
        )}
        <select
          ref={ref}
          id={selectId}
          aria-describedby={describedBy}
          aria-invalid={error ? true : undefined}
          className={cx(
            'h-[54px] w-full rounded-md border bg-surface px-4 text-base text-fg-subtle',
            'appearance-none',
            'transition-colors duration-base ease-standard',
            error ? 'border-danger' : 'border-border',
          )}
          {...rest}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
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
  },
);
