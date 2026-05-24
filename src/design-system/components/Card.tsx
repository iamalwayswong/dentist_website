import type { ElementType, ReactNode } from 'react';
import { cx } from '../utils';

type CardProps = {
  children: ReactNode;
  as?: 'div' | 'article' | 'section';
  padded?: boolean;
  elevation?: 'flat' | 'sm' | 'md' | 'lg';
  className?: string;
};

const elevationMap = {
  flat: 'shadow-none border border-border',
  sm: 'shadow-sm border border-border',
  md: 'shadow-md',
  lg: 'shadow-lg',
} as const;

export function Card({
  children,
  as = 'div',
  padded = true,
  elevation = 'sm',
  className,
}: CardProps) {
  const Tag = as as ElementType;
  return (
    <Tag
      className={cx(
        'bg-surface rounded-xl',
        elevationMap[elevation],
        padded && 'p-6',
        className,
      )}
    >
      {children}
    </Tag>
  );
}
