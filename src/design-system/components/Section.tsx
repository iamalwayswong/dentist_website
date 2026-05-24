import type { ElementType, ReactNode } from 'react';
import { cx } from '../utils';

type SectionProps = {
  children: ReactNode;
  spacing?: 'sm' | 'md' | 'lg';
  as?: 'section' | 'header' | 'footer' | 'div';
  tone?: 'default' | 'muted' | 'accent' | 'warm';
  className?: string;
};

const spacingMap = {
  sm: 'py-section-sm-mobile sm:py-section-sm',
  md: 'py-section-mobile sm:py-section',
  lg: 'py-section-lg-mobile sm:py-section-lg',
} as const;

const toneMap = {
  default: 'bg-bg text-fg',
  muted: 'bg-bg-muted text-fg',
  accent: 'bg-bg-accent text-fg',
  warm: 'bg-bg-warm text-fg',
} as const;

export function Section({
  children,
  spacing = 'md',
  as,
  tone = 'default',
  className,
}: SectionProps) {
  const Tag = (as ?? 'section') as ElementType;
  return (
    <Tag className={cx(spacingMap[spacing], toneMap[tone], className)}>
      {children}
    </Tag>
  );
}
