import type { ReactNode } from 'react';
import { cx } from '../utils';

type GridProps = {
  children: ReactNode;
  cols?: 1 | 2 | 3 | 4 | 6;
  gap?: 'sm' | 'md' | 'lg';
  className?: string;
};

const colsMap = {
  1: 'grid-cols-1',
  2: 'grid-cols-1 md:grid-cols-2',
  3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  6: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-6',
} as const;

const gapMap = {
  sm: 'gap-4',
  md: 'gap-6',
  lg: 'gap-8',
} as const;

export function Grid({
  children,
  cols = 3,
  gap = 'md',
  className,
}: GridProps) {
  return (
    <div className={cx('grid', colsMap[cols], gapMap[gap], className)}>
      {children}
    </div>
  );
}
