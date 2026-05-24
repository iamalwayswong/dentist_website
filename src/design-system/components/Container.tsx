import type { ReactNode } from 'react';
import { cx } from '../utils';

type ContainerProps = {
  children: ReactNode;
  size?: 'narrow' | 'default';
  className?: string;
};

export function Container({
  children,
  size = 'default',
  className,
}: ContainerProps) {
  return (
    <div
      className={cx(
        'mx-auto w-full px-gutter-mobile sm:px-gutter',
        size === 'narrow' ? 'max-w-narrow' : 'max-w-container',
        className,
      )}
    >
      {children}
    </div>
  );
}
