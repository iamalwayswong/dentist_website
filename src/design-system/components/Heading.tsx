import type { ElementType, ReactNode } from 'react';
import { cx } from '../utils';

type HeadingProps = {
  children: ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  tone?: 'default' | 'muted' | 'accent' | 'inverse';
  className?: string;
};

const sizeMap = {
  sm: 'text-lg sm:text-xl leading-snug',
  md: 'text-xl sm:text-2xl leading-snug',
  lg: 'text-2xl sm:text-3xl leading-tight',
  xl: 'text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight',
  '2xl': 'text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight',
} as const;

const toneMap = {
  default: 'text-fg',
  muted: 'text-fg-muted',
  accent: 'text-accent',
  inverse: 'text-fg-inverse',
} as const;

export function Heading({
  children,
  as = 'h2',
  size = 'lg',
  tone = 'default',
  className,
}: HeadingProps) {
  const Tag = as as ElementType;
  return (
    <Tag
      className={cx(
        'font-sans font-semibold',
        sizeMap[size],
        toneMap[tone],
        className,
      )}
    >
      {children}
    </Tag>
  );
}
