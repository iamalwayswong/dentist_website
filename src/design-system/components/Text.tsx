import type { ElementType, ReactNode } from 'react';
import { cx } from '../utils';

type TextProps = {
  children: ReactNode;
  as?: 'p' | 'span' | 'div';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  tone?: 'default' | 'muted' | 'subtle' | 'accent' | 'inverse';
  weight?: 'regular' | 'medium' | 'semibold' | 'bold';
  className?: string;
};

const sizeMap = {
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl',
} as const;

const toneMap = {
  default: 'text-fg',
  muted: 'text-fg-muted',
  subtle: 'text-fg-subtle',
  accent: 'text-accent',
  inverse: 'text-fg-inverse',
} as const;

const weightMap = {
  regular: 'font-regular',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
} as const;

export function Text({
  children,
  as = 'p',
  size = 'md',
  tone = 'default',
  weight = 'regular',
  className,
}: TextProps) {
  const Tag = as as ElementType;
  return (
    <Tag
      className={cx(
        'leading-relaxed',
        sizeMap[size],
        toneMap[tone],
        weightMap[weight],
        className,
      )}
    >
      {children}
    </Tag>
  );
}
